'use client';

import React, { useState, useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const DigitalTraceEffect = ({ children }: { children: React.ReactNode }) => {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Daha sıkı ve hızlı takip için fizik ayarları güncellendi
  const springX = useSpring(mouseX, { stiffness: 500, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 500, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    // Koordinatları tam merkeze oturtmak için ayarlama
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative inline-block cursor-crosshair" // inline-block ile sadece yazı kadar alan kaplar
    >
      {/* Arkadaki Dijital İz Animasyonu */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-0 overflow-hidden rounded-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        {/* Mouse Takip Eden Spot Işığı */}
        <motion.div
          style={{
            left: springX,
            top: springY,
          }}
          className="absolute w-64 h-64 -translate-x-1/2 -translate-y-1/2 bg-radial-gradient(circle, rgba(57,255,94,0.15) 0%, transparent 70%)"
        />
        
        {/* Dijital Parazit / Glitch Efekti (Mouse etrafında) */}
        <motion.div
          style={{
            left: springX,
            top: springY,
          }}
          className="absolute -translate-x-1/2 -translate-y-1/2 w-20 h-20"
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                opacity: [0, 1, 0],
                scale: [0.5, 1.5],
                x: [0, (Math.random() - 0.5) * 40],
                y: [0, (Math.random() - 0.5) * 40],
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                delay: i * 0.1,
                ease: [0, 0, 0.58, 1]
              }}
              className="absolute top-1/2 left-1/2 w-1 h-1 bg-primary rounded-full shadow-[0_0_5px_#39ff5e]"
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Ön Plandaki Yazı */}
      <div className="relative z-10 mix-blend-screen">
        {children}
      </div>

      {/* Alt Çizgi Animasyonu */}
      <motion.div 
        initial={{ width: '0%' }}
        animate={{ width: isHovered ? '100%' : '0%' }}
        transition={{ duration: 0.4, ease: [0.42, 0, 0.58, 1] as const }}}
        className="absolute bottom-0 left-0 h-[2px] bg-primary shadow-[0_0_10px_#39ff5e]"
      />
    </div>
  );
};

export default DigitalTraceEffect;
