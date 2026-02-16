'use client';

import React, { useEffect, useRef } from 'react';

const PixelBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let mouse = { x: -1000, y: -1000 };
    
    const pixelSize = 16;
    const gap = 6;
    const totalSize = pixelSize + gap;
    let pixels: Pixel[] = [];
    let scanLines: ScanLine[] = [];

    class Pixel {
      x: number;
      y: number;
      opacity: number;
      targetOpacity: number;
      scale: number;
      targetScale: number;
      glimmerDelay: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.opacity = 0.05;
        this.targetOpacity = 0.05;
        this.scale = 1;
        this.targetScale = 1;
        this.glimmerDelay = Math.random() * 500;
      }

      update() {
        const dx = mouse.x - this.x - pixelSize / 2;
        const dy = mouse.y - this.y - pixelSize / 2;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Mouse interaction
        if (distance < 180) {
          this.targetOpacity = (1 - distance / 180) * 0.6;
          this.targetScale = 1.5 - (distance / 180) * 0.5;
        } else {
          // Otonom glimmer (kırpışma) efekti
          this.glimmerDelay--;
          if (this.glimmerDelay <= 0) {
            this.targetOpacity = 0.15;
            if (this.opacity >= 0.14) {
              this.targetOpacity = 0.05;
              this.glimmerDelay = Math.random() * 600 + 200;
            }
          } else {
            this.targetOpacity = 0.05;
          }
          this.targetScale = 1;
        }

        // Smooth transitions
        this.opacity += (this.targetOpacity - this.opacity) * 0.08;
        this.scale += (this.targetScale - this.scale) * 0.1;
      }

      draw() {
        if (this.opacity < 0.01) return;
        
        const size = pixelSize * this.scale;
        const offset = (size - pixelSize) / 2;
        
        ctx!.fillStyle = `rgba(57, 255, 94, ${this.opacity})`;
        ctx!.fillRect(this.x - offset, this.y - offset, size, size);
        
        // Üst katman parlama
        if (this.scale > 1.2) {
          ctx!.fillStyle = `rgba(255, 255, 255, ${this.opacity * 0.5})`;
          ctx!.fillRect(this.x - offset + 2, this.y - offset + 2, 2, 2);
        }
      }
    }

    class ScanLine {
      pos: number;
      speed: number;
      isVertical: boolean;

      constructor(isVertical: boolean) {
        this.isVertical = isVertical;
        this.pos = 0;
        this.speed = Math.random() * 2 + 1;
      }

      update() {
        this.pos += this.speed;
        if (this.isVertical && this.pos > canvas!.width) this.pos = -100;
        if (!this.isVertical && this.pos > canvas!.height) this.pos = -100;
      }

      draw() {
        const gradient = this.isVertical 
          ? ctx!.createLinearGradient(this.pos, 0, this.pos + 100, 0)
          : ctx!.createLinearGradient(0, this.pos, 0, this.pos + 100);
        
        gradient.addColorStop(0, 'rgba(57, 255, 94, 0.1)');
        gradient.addColorStop(0.5, 'rgba(57, 255, 94, 0)');
        
        ctx!.fillStyle = gradient;
        if (this.isVertical) {
          ctx!.fillRect(this.pos, 0, 100, canvas!.height);
        } else {
          ctx!.fillRect(0, this.pos, canvas!.width, 100);
        }
      }
    }

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    const init = () => {
      pixels = [];
      scanLines = [new ScanLine(true), new ScanLine(false)];
      const cols = Math.ceil(canvas.width / totalSize);
      const rows = Math.ceil(canvas.height / totalSize);

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          pixels.push(new Pixel(i * totalSize, j * totalSize));
        }
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      scanLines.forEach(line => {
        line.update();
        line.draw();
      });

      pixels.forEach(p => {
        p.update();
        p.draw();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    
    resize();
    render();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-50"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default PixelBackground;
