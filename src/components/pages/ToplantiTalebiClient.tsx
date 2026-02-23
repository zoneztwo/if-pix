'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PixelBackground from '@/components/PixelBackground';
import InteractiveForm from '@/components/InteractiveForm';

export default function ToplantiTalebiClient({ locale, dict }: { locale: 'tr' | 'en', dict: any }) {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      
      <div className="fixed inset-0 z-0">
        <PixelBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>

      <section className="relative z-10 pt-40 pb-32 px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-primary text-xs font-bold uppercase tracking-[0.4em] font-mono"
            >
              // {locale === 'tr' ? 'toplantı' : 'meeting'}
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold uppercase"
            >
              {locale === 'tr' ? (
                <>Toplantı <span className="text-primary">Planlayalım.</span></>
              ) : (
                <>Plan a <span className="text-primary">Meeting.</span></>
              )}
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <InteractiveForm dict={dict} locale={locale} />
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
