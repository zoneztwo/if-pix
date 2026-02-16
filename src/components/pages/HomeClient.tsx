'use client';

import React from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Preloader from '@/components/Preloader';
import ProcessModal from '@/components/ProcessModal';
import TechMarquee from '@/components/TechMarquee';
import WhatsAppFAB from '@/components/WhatsAppFAB';
import Typewriter from '@/components/Typewriter';
import PixelBackground from '@/components/PixelBackground';
import DigitalTraceEffect from '@/components/DigitalTraceEffect';
import { 
  ArrowDown, 
  LayoutTemplate, 
  Code, 
  ShoppingCart, 
  Rocket, 
  TrendingUp, 
  ShieldCheck,
  Compass,
  Users2
} from 'lucide-react';

const sectionReveal: Variants = {
  initial: { opacity: 0, y: 30 },
  whileInView: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

const staggerContainer: Variants = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemReveal: Variants = {
  initial: { opacity: 0, y: 20 },
  whileInView: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0, 0, 0.58, 1] }
  }
};

export default function HomeClient({ locale, dict }: { locale: 'tr' | 'en', dict: any }) {
  const [isProcessOpen, setIsProcessOpen] = React.useState(false);

  return (
    <main className="relative bg-background overflow-x-hidden">
      <Preloader />
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-20 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <PixelBackground />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background" />
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 2.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 max-w-5xl text-center space-y-8 md:space-y-12"
        >
          <div className="space-y-4 px-4">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.2 }}
              className="text-primary text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] block"
            >
              {dict.hero.span}
            </motion.span>
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold">
              Piksel <Typewriter words={dict.hero.words} /><br />{locale === 'tr' ? 'Burada Başlar.' : 'Starts Here.'}
            </h1>
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ delay: 3.5, duration: 1 }}
            className="text-secondary/80 text-base md:text-xl max-w-2xl mx-auto leading-relaxed px-6"
          >
            {dict.hero.desc}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.8 }}
            className="flex flex-col sm:flex-row justify-center gap-4 px-8"
          >
            <Link href={`/${locale}/#surec`} className="px-8 py-4 bg-primary text-background font-black uppercase tracking-widest rounded-2xl hover:scale-105 transition-all shadow-[0_0_30px_rgba(57,255,94,0.3)] flex items-center justify-center text-xs">
              {dict.common.explore_process}
            </Link>
            <Link href={`/${locale}/toplanti-talebi`} className="px-8 py-4 bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest rounded-2xl hover:bg-white/10 transition-all flex items-center justify-center text-xs">
              {dict.common.contact_options}
            </Link>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/30">{dict.hero.scroll}</span>
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
            <ArrowDown className="text-primary" size={20} />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="hakkımızda" className="relative min-h-screen flex items-center justify-center py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div 
            variants={sectionReveal}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6 md:space-y-8"
          >
            <div className="space-y-4">
              <span className="text-primary text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] font-mono">{dict.about.span}</span>
              <DigitalTraceEffect>
                <h2 className="text-3xl md:text-6xl font-bold">
                  {locale === 'tr' ? (
                    <>Dijitalde <span className="text-primary">İz</span> Bırakıyoruz.</>
                  ) : (
                    <>Leaving a Digital <span className="text-primary">Trace</span>.</>
                  )}
                </h2>
              </DigitalTraceEffect>
            </div>
            <div className="space-y-4 md:space-y-6 text-secondary/80 text-base md:text-lg leading-relaxed max-w-xl text-balance">
              <p>{dict.about.desc1}</p>
              <p>{dict.about.desc2}</p>
            </div>
            
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              className="grid grid-cols-2 gap-4 md:gap-8 pt-4 md:pt-6"
            >
              <motion.div variants={itemReveal} className="space-y-1">
                <h4 className="text-2xl md:text-3xl font-bold text-white">100%</h4>
                <p className="text-[8px] md:text-[10px] text-white/40 uppercase tracking-widest font-bold">{dict.about.satisfaction}</p>
              </motion.div>
              <motion.div variants={itemReveal} className="space-y-1">
                <h4 className="text-2xl md:text-3xl font-bold text-white">50+</h4>
                <p className="text-[8px] md:text-[10px] text-white/40 uppercase tracking-widest font-bold">{dict.about.projects}</p>
              </motion.div>
            </motion.div>

            <motion.div variants={itemReveal} className="pt-4 md:pt-6">
              <Link href={`/${locale}/hakkimizda`} className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-4 bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-white/10 text-white transition-all rounded-2xl group text-xs">
                <span className="font-bold uppercase tracking-widest">{dict.about.all_story}</span>
                <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                  <ArrowDown className="rotate-[-90deg] text-primary" size={14} />
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="relative hidden lg:block"
          >
            <div className="bg-[#141412] border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl p-10 font-mono text-sm space-y-6 relative z-10">
              <div className="flex gap-4"><span className="text-primary/50">01</span><p className="text-white/80">while (client.needs) {'{'}</p></div>
              <div className="flex gap-4"><span className="text-primary/50">02</span><p className="text-primary pl-4">innovate();</p></div>
              <div className="flex gap-4"><span className="text-primary/50">03</span><p className="text-primary pl-4">optimize_pixels();</p></div>
              <div className="flex gap-4"><span className="text-primary/50">04</span><p className="text-primary pl-4">deliver_perfection();</p></div>
              <div className="flex gap-4"><span className="text-primary/50">05</span><p className="text-white/80">{'}'}</p></div>
            </div>
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-[100px] animate-pulse" />
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section id="surec" className="relative py-16 md:py-24 px-6">
        <motion.div 
          variants={sectionReveal}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto bg-white/[0.02] border border-white/5 rounded-[3rem] p-8 md:p-24 relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(57,255,94,0.03),transparent_70%)]" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center relative z-10">
            <div className="space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <span className="text-primary text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] font-mono">{dict.process_section.span}</span>
                <h2 className="text-3xl md:text-7xl font-bold uppercase">{dict.process_section.title}</h2>
                <p className="text-secondary/60 text-base md:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">{dict.process_section.desc}</p>
              </div>
              <button 
                onClick={() => setIsProcessOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-4 px-10 py-5 bg-primary text-background rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-[0_0_50px_rgba(57,255,94,0.3)]"
              >
                {dict.process_section.button}
                <ArrowDown className="-rotate-90" size={18} />
              </button>
            </div>

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              className="grid grid-cols-2 gap-4 md:gap-6"
            >
              {[
                { icon: Compass, label: dict.process_section.steps.planning },
                { icon: LayoutTemplate, label: dict.process_section.steps.design },
                { icon: TrendingUp, label: dict.process_section.steps.seo },
                { icon: Users2, label: dict.process_section.steps.sales }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  variants={itemReveal}
                  className="p-6 md:p-8 bg-white/[0.03] border border-white/10 rounded-[2rem] flex flex-col items-center justify-center gap-3 hover:border-primary/40 hover:bg-white/[0.05] transition-all group"
                >
                  <item.icon className="text-primary/80 md:text-primary/20 group-hover:text-primary group-hover:scale-110 transition-all duration-500" size={32} />
                  <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] text-white/60 md:text-white/20 group-hover:text-white transition-colors">{item.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="hizmetler" className="relative py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div 
            variants={sectionReveal}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 text-center md:text-left"
          >
            <div className="space-y-2">
              <span className="text-primary text-[10px] font-bold uppercase tracking-[0.3em] font-mono">{dict.services_section.span}</span>
              <h2 className="text-3xl md:text-6xl font-bold uppercase">{dict.services_section.title}</h2>
            </div>
            <p className="text-secondary/50 max-w-sm text-sm leading-relaxed mx-auto md:mx-0">{dict.services_section.desc}</p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          >
            {dict.services_section.items.map((service: any, i: number) => {
              const icons = [LayoutTemplate, Code, ShoppingCart, Rocket, TrendingUp, ShieldCheck];
              const Icon = icons[i];
              return (
                <motion.div 
                  key={i} 
                  variants={itemReveal}
                  className="p-8 bg-white/[0.02] border border-white/5 rounded-[2.5rem] hover:border-primary/30 hover:bg-white/[0.04] transition-all group relative overflow-hidden"
                >
                  <div className="absolute -top-4 -right-4 p-4 opacity-[0.03] pointer-events-none">
                    <Icon size={80} />
                  </div>
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 relative z-10">
                    <Icon size={20} />
                  </div>
                  <h4 className="text-xl font-bold mb-2 relative z-10 uppercase tracking-wide">{service.title}</h4>
                  <p className="text-xs text-secondary/60 leading-relaxed relative z-10 mb-6">{service.desc}</p>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsProcessOpen(true);
                    }}
                    className="relative z-30 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary cursor-pointer hover:brightness-125"
                  >
                    {dict.common.start} <ArrowDown className="-rotate-90" size={14} />
                  </button>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <TechMarquee />

      <WhatsAppFAB />
      <ProcessModal isOpen={isProcessOpen} onClose={() => setIsProcessOpen(false)} />
      <Footer />
    </main>
  );
}
