'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 1, ease: [0.42, 0, 0.58, 1] }
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#1d1d1b]"
        >
          <div className="relative">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                duration: 1.2, 
                ease: [0, 0, 0.58, 1],
              }}
              className="relative z-10"
            >
              <Image 
                src="/logo/whitelogo-ifpix.webp" 
                alt="IFPIX Logo" 
                width={200} 
                height={60} 
                priority
                className="h-12 w-auto"
              />
            </motion.div>
            
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 2, ease: [0.42, 0, 0.58, 1] }}
              className="absolute -bottom-4 left-0 h-[2px] bg-primary shadow-[0_0_15px_#39ff5e]"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-10"
          >
            <span className="text-[10px] text-white/40 uppercase tracking-[0.5em] font-black">
              Yükleniyor
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
