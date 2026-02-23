'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, useScroll, useMotionValueEvent, useSpring } from 'framer-motion';
import { Menu, X, ArrowRight, Clock, Signal, Compass, Users, LayoutTemplate, Mail, Globe, FileText } from 'lucide-react';

const navLinks = [
  { name: 'Paketler', href: '/#paketler', icon: Compass },
  { name: 'Hizmetler', href: '/#hizmetler', icon: LayoutTemplate },
  { name: 'Blog', href: '/blog', icon: FileText },
  { name: 'İletişim', href: '/iletisim', icon: Mail },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [time, setTime] = useState('');
  const [ping, setPing] = useState(12);
  
  const pathname = usePathname();
  // Mevcut dili pathname'den güvenli bir şekilde alalım
  const currentLocale = pathname.split('/')[1] || 'tr';

  const { scrollY, scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    const pingInterval = setInterval(() => setPing(Math.floor(Math.random() * 5) + 10), 3000);
    const timeInterval = setInterval(updateTime, 1000);
    updateTime();
    return () => {
      clearInterval(pingInterval);
      clearInterval(timeInterval);
    };
  }, []);

  const getLocalizedHref = (newLocale: string) => {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    return segments.join('/') || `/${newLocale}`;
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled ? 'py-2 md:py-3' : 'py-4 md:py-6'
      } px-6`}
    >
      <div className={`max-w-7xl mx-auto flex items-center justify-between px-6 py-2 md:py-3 transition-all duration-500 border relative overflow-hidden ${
        scrolled 
          ? 'bg-background/80 backdrop-blur-2xl border-white/10 rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.5)] scale-[0.98]' 
          : 'bg-transparent border-transparent rounded-none scale-100'
      }`}>
        
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary z-20 origin-left shadow-[0_0_10px_#39ff5e]"
          style={{ scaleX }}
        />

        <div className="flex items-center gap-6">
          <Link href={`/${currentLocale}`} className="relative group shrink-0">
            <motion.div
              animate={{ height: scrolled ? 24 : 32 }}
              className="relative transition-all duration-500"
            >
              <Image 
                src="/logo/mainlogo-ifpix.webp" 
                alt="IFPIX Logo" 
                width={100} 
                height={32} 
                className="h-full w-auto transition-all duration-300 group-hover:brightness-125"
              />
            </motion.div>
          </Link>
          
          <div className={`hidden lg:flex items-center gap-4 px-4 py-1.5 bg-white/5 border border-white/5 rounded-full font-mono transition-all duration-500 ${
            scrolled ? 'opacity-0 w-0 px-0 overflow-hidden' : 'opacity-100'
          }`}>
            <div className="flex items-center gap-2">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary"></span>
              </span>
              <span className="text-[8px] text-white/40 uppercase tracking-widest leading-none">Live</span>
            </div>
            <div className="w-[1px] h-3 bg-white/10" />
            <div className="flex items-center gap-1.5">
              <Clock size={10} className="text-white/20" />
              <span className="text-[9px] text-white/60 tracking-tighter">{time}</span>
            </div>
            <div className="w-[1px] h-3 bg-white/10" />
            <div className="flex items-center gap-1.5">
              <Signal size={10} className="text-white/20" />
              <span className="text-[9px] text-white/60 tracking-tighter">{ping}ms</span>
            </div>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={`/${currentLocale}${link.href}`}
              className="relative px-4 py-2 group flex items-center gap-2"
            >
              <link.icon size={14} className="text-primary/40 group-hover:text-primary transition-colors" />
              <span className={`relative z-10 font-mono font-medium uppercase tracking-widest text-white/60 group-hover:text-primary transition-all duration-300 ${
                scrolled ? 'text-[10px]' : 'text-[11px]'
              }`}>
                {link.name}
              </span>
            </Link>
          ))}

          <div className="flex items-center gap-2 ml-4 px-3 py-1 bg-white/5 rounded-full border border-white/5">
            <Globe size={12} className="text-white/20" />
            <Link 
              href={getLocalizedHref('tr')} 
              className={`text-[9px] font-bold transition-colors ${currentLocale === 'tr' ? 'text-primary' : 'text-white/20 hover:text-white'}`}
            >
              TR
            </Link>
            <span className="text-[9px] text-white/10">|</span>
            <Link 
              href={getLocalizedHref('en')} 
              className={`text-[9px] font-bold transition-colors ${currentLocale === 'en' ? 'text-primary' : 'text-white/20 hover:text-white'}`}
            >
              EN
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <Link 
            href={`/${currentLocale}/iletisim`}
            className={`flex items-center gap-2 bg-primary text-background font-black uppercase tracking-widest rounded-xl transition-all duration-500 hover:scale-105 group ${
              scrolled ? 'px-4 py-2 text-[10px]' : 'px-5 py-2.5 text-[10px] md:text-[11px]'
            }`}
          >
            <span className="hidden xs:inline">Hemen Başla</span>
            <span className="xs:hidden">BAŞLA</span>
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-white/60 hover:text-white transition-colors bg-white/5 rounded-xl border border-white/5 md:hidden"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-[calc(100%+8px)] left-6 right-6 bg-background/95 backdrop-blur-2xl border border-white/10 rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-50 p-4"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  href={`/${currentLocale}${link.href}`}
                  onClick={() => setIsOpen(false)}
                  className="p-5 text-[14px] font-black uppercase tracking-widest text-white/60 hover:text-primary hover:bg-primary/5 rounded-2xl transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-4">
                    <link.icon size={18} className="text-primary/40 group-hover:text-primary" />
                    {link.name}
                  </div>
                  <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
                </Link>
              ))}
              <div className="flex items-center justify-around py-6 border-t border-white/5 mt-2">
                <Link href={getLocalizedHref('tr')} onClick={() => setIsOpen(false)} className={`text-[10px] font-black tracking-widest p-3 rounded-xl border ${currentLocale === 'tr' ? 'bg-primary/10 border-primary/20 text-primary' : 'border-transparent text-white/20'}`}>TÜRKÇE</Link>
                <Link href={getLocalizedHref('en')} onClick={() => setIsOpen(false)} className={`text-[10px] font-black tracking-widest p-3 rounded-xl border ${currentLocale === 'en' ? 'bg-primary/10 border-primary/20 text-primary' : 'border-transparent text-white/20'}`}>ENGLISH</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
