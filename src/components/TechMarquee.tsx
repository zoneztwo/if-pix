'use client';

import React from 'react';
import { motion } from 'framer-motion';

const techs = [
  "Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", 
  "Node.js", "PostgreSQL", "Meta Pixel", "Google Ads", "Conversion API",
  "Cloudflare", "Docker", "Redux", "Python", "SEO Expert"
];

const TechMarquee = () => {
  return (
    <div className="py-20 bg-white/[0.01] border-y border-white/5 overflow-hidden flex whitespace-nowrap">
      <motion.div 
        animate={{ x: [0, -1000] }}
        transition={{ 
          repeat: Infinity, 
          duration: 30, 
          ease: "linear" 
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
