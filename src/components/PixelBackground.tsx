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
    
    const spacing = 32;
    const pixelSize = 2.5; // Biraz daha büyük ve belirgin pikseller
    let pixels: Pixel[] = [];

    class Pixel {
      x: number;
      y: number;
      opacity: number;
      targetOpacity: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.opacity = 0.08;
        this.targetOpacity = 0.08;
      }

      update() {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        // Mouse yakınlığına göre belirgin parlama
        if (dist < 180) {
          this.targetOpacity = 0.8 * (1 - dist / 180);
        } else {
          // Otonom Ping (Daha sık ve parlak rastgele parlamalar)
          if (Math.random() < 0.0003) {
             this.opacity = 1.0; // Anlık tam parlama
          }
          this.targetOpacity = 0.08;
        }

        this.opacity += (this.targetOpacity - this.opacity) * 0.1;
      }

      draw() {
        // Ana Piksel (Daha belirgin yeşil)
        ctx!.fillStyle = `rgba(57, 255, 94, ${this.opacity})`;
        ctx!.fillRect(this.x - pixelSize / 2, this.y - pixelSize / 2, pixelSize, pixelSize);
        
        // Parlama Glow Efekti (Piksel aktifken etrafına ışık saçar)
        if (this.opacity > 0.4) {
          ctx!.fillStyle = `rgba(57, 255, 94, ${this.opacity * 0.3})`;
          ctx!.fillRect(this.x - pixelSize, this.y - pixelSize, pixelSize * 2, pixelSize * 2);
        }
      }
    }

    const init = () => {
      pixels = [];
      for (let x = spacing; x < canvas.width; x += spacing) {
        for (let y = spacing; y < canvas.height; y += spacing) {
          pixels.push(new Pixel(x, y));
        }
      }
    };

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      
      ctx.scale(dpr, dpr);
      
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      
      init();
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width / (window.devicePixelRatio || 1), canvas.height / (window.devicePixelRatio || 1));

      // Teknik Crosshair (Daha belirgin takip çizgileri)
      if (mouse.x > 0) {
        ctx.strokeStyle = 'rgba(57, 255, 94, 0.12)';
        ctx.lineWidth = 0.5;
        
        ctx.beginPath();
        ctx.moveTo(0, mouse.y);
        ctx.lineTo(canvas.width, mouse.y);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(mouse.x, 0);
        ctx.lineTo(mouse.x, canvas.height);
        ctx.stroke();
      }

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
    <div className="absolute inset-0 pointer-events-none z-0">
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        style={{ mixBlendMode: 'screen' }}
      />
      {/* İnce Grid Overlay (Daha net bir grid hissi) */}
      <div 
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{ 
          backgroundImage: `linear-gradient(rgba(57, 255, 94, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(57, 255, 94, 0.4) 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />
    </div>
  );
};

export default PixelBackground;
