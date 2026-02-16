'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, useScroll, useMotionValueEvent, useSpring } from 'framer-motion';
import { Menu, X, ArrowRight, Clock, Signal, Compass, Users, LayoutTemplate, Mail, Globe } from 'lucide-react';

const navLinks = [
  { name: 'Süreç', href: '/#surec', icon: Compass },
  { name: 'Ajans', href: '/hakkimizda', icon: Users },
  { name: 'Hizmetler', href: '/#hizmetler', icon: LayoutTemplate },
  { name: 'İletişim', href: '/iletisim', icon: Mail },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [time, setTime] = useState('');
  const [ping, setPing] = useState(12);
  
  const pathname = usePathname();
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

  const getLocalizedHref = (locale: string) => {
    const segments = pathname.split('/');
    segments[1] = locale;
    return segments.join('/');
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
        
        {/* Scroll Progress Line */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary z-20 origin-left shadow-[0_0_10px_#39ff5e]"
          style={{ scaleX }}
        />

        {/* Logo & Status Area */}
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

        {/* Desktop Navigation */}
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

          {/* Language Switcher */}
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

        {/* CTA Area */}
        <div className="flex items-center gap-4">
          <Link 
            href={`/${currentLocale}/#surec`}
            className={`hidden sm:flex items-center gap-2 bg-primary text-background font-black uppercase tracking-widest rounded-xl transition-all duration-500 hover:scale-105 hover:shadow-[0_0_20px_rgba(57,255,94,0.4)] group ${
              scrolled ? 'px-4 py-2 text-[9px]' : 'px-5 py-2.5 text-[10px]'
            }`}
          >
            Süreci Keşfet
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white/60 hover:text-white transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="md:hidden absolute top-full left-6 right-6 mt-2 bg-[#1a1a18]/95 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl z-50"
          >
            <div className="flex flex-col p-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  href={`/${currentLocale}${link.href}`}
                  onClick={() => setIsOpen(false)}
                  className="p-4 text-[12px] font-mono text-white/60 hover:text-primary hover:bg-white/5 rounded-xl transition-all flex items-center gap-3"
                >
                  <link.icon size={16} className="text-primary/60" />
                  {link.name}
                </Link>
              ))}
              <div className="flex items-center justify-center gap-6 py-4 border-t border-white/5 mt-2">
                <Link href={getLocalizedHref('tr')} onClick={() => setIsOpen(false)} className={`text-xs font-bold ${currentLocale === 'tr' ? 'text-primary' : 'text-white/40'}`}>TURKISH</Link>
                <Link href={getLocalizedHref('en')} onClick={() => setIsOpen(false)} className={`text-xs font-bold ${currentLocale === 'en' ? 'text-primary' : 'text-white/40'}`}>ENGLISH</Link>
              </div>
              <Link 
                href={`/${currentLocale}/#surec`}
                onClick={() => setIsOpen(false)}
                className="mt-4 p-4 bg-primary text-background text-center text-[11px] font-black uppercase tracking-widest rounded-xl"
              >
                Süreci Keşfet
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
