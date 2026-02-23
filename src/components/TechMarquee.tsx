'use client';

import React from 'react';
import { motion } from 'framer-motion';

const techs = [
  "SEO", "Meta Ads", "Google Ads", "Performans Pazarlama",
  "Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", 
  "E-Ticaret", "Web Tasarım", "SEO Expert", "Conversion API",
  "Cloudflare", "Meta Pixel", "Google Analytics", "Digital Strategy"
];

const TechMarquee = () => {
  return (
    <div className="py-20 bg-white/[0.01] border-y border-white/5 overflow-hidden flex whitespace-nowrap">
      <motion.div 
        animate={{ x: [0, -1000] }}
        transition={{ 
          repeat: Infinity, 
          duration: 30, 
          ease: [0, 0, 1, 1] as const 
        }}
        className="flex gap-20 items-center pr-20"
      >
        {techs.concat(techs).map((tech, i) => (
          <span 
            key={i} 
            className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white/5 hover:text-primary transition-colors cursor-default select-none"
          >
            {tech}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default TechMarquee;
