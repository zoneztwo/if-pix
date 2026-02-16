'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, Tablet, Monitor, ExternalLink } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface DemoPreviewerProps {
  url: string;
  title?: string;
}

const DemoPreviewer: React.FC<DemoPreviewerProps> = ({ url, title }) => {
  const [view, setView] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');

  const widths = {
    mobile: '375px',
    tablet: '768px',
    desktop: '100%',
  };

  const deviceIcons = [
    { id: 'mobile', icon: Smartphone, label: 'Mobil' },
    { id: 'tablet', icon: Tablet, label: 'Tablet' },
    { id: 'desktop', icon: Monitor, label: 'Masaüstü' },
  ] as const;

  return (
    <div className="flex flex-col w-full gap-4">
      <div className="flex items-center justify-between p-4 bg-background/50 border border-white/10 rounded-2xl backdrop-blur-md">
        <div className="flex items-center gap-4">
          <div className="flex bg-white/5 p-1 rounded-xl">
            {deviceIcons.map(({ id, icon: Icon, label }) => (
              <button
                key={id}
                onClick={() => setView(id)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300",
                  view === id 
                    ? "bg-primary text-background shadow-[0_0_15px_rgba(57,255,94,0.4)]" 
                    : "text-white/60 hover:text-white hover:bg-white/5"
                )}
              >
                <Icon size={18} />
                <span className="text-xs font-bold hidden md:block uppercase tracking-wider">{label}</span>
              </button>
            ))}
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 text-white rounded-xl transition-all text-xs font-bold uppercase tracking-wider border border-white/10"
          >
            <span className="hidden sm:inline">Dışarıda Aç</span>
            <ExternalLink size={14} />
          </a>
        </div>
      </div>

      <div className="relative w-full h-[600px] flex justify-center bg-black/20 rounded-3xl overflow-hidden border border-white/5 p-4 md:p-8">
        {/* Device Frame Decorations */}
        <div className="absolute inset-0 pointer-events-none border border-white/5 rounded-3xl" />
        
        <motion.div
          animate={{ width: widths[view] }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="relative h-full bg-white rounded-xl overflow-hidden shadow-2xl"
        >
          {/* Mockup Top Bar */}
          <div className="absolute top-0 left-0 right-0 h-6 bg-gray-100 border-b border-gray-200 flex items-center px-3 gap-1 z-10">
            <div className="w-2 h-2 rounded-full bg-red-400" />
            <div className="w-2 h-2 rounded-full bg-yellow-400" />
            <div className="w-2 h-2 rounded-full bg-green-400" />
          </div>
          
          <iframe
            src={url}
            className="w-full h-full pt-6 border-none"
            title={title || "Demo Preview"}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default DemoPreviewer;
