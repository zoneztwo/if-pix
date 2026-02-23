'use client';

import React from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Preloader from '@/components/Preloader';
import TechMarquee from '@/components/TechMarquee';
import WhatsAppFAB from '@/components/WhatsAppFAB';
import Typewriter from '@/components/Typewriter';
import PixelBackground from '@/components/PixelBackground';
import DigitalTraceEffect from '@/components/DigitalTraceEffect';
import PricingSection from '@/components/PricingSection';
import AnalysisWizard from '@/components/AnalysisWizard';
import { 
  ArrowDown, 
  LayoutTemplate, 
  Code, 
  ShoppingCart, 
  Rocket, 
  TrendingUp, 
  ShieldCheck,
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
  const [isWizardOpen, setIsWizardOpen] = React.useState(false);
  const [selectedPlan, setSelectedPlan] = React.useState('');

  const openWizard = (planName: string) => {
    setSelectedPlan(planName);
    setIsWizardOpen(true);
  };

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
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-black uppercase italic leading-[1.1] tracking-tighter">
              Piksel <Typewriter words={dict.hero.words} /><br />
              <span className="text-white/90">{locale === 'tr' ? 'Burada Başlar.' : 'Starts Here.'}</span>
            </h1>
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 3.5, duration: 1 }}
            className="text-secondary/80 text-sm md:text-xl max-w-2xl mx-auto leading-[1.8] px-4 md:px-6 font-medium"
          >
            {dict.hero.desc}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.8 }}
            className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 px-6"
          >
            <Link href={`/${locale}/#paketler`} className="w-full sm:w-auto px-10 py-5 bg-primary text-background font-black uppercase tracking-widest rounded-2xl hover:scale-105 transition-all shadow-[0_0_30px_rgba(57,255,94,0.3)] flex items-center justify-center text-xs md:text-sm">
              {locale === 'tr' ? 'Paketleri İncele' : 'View Plans'}
            </Link>
            <Link href={`/${locale}/#hizmetler`} className="w-full sm:w-auto px-10 py-5 bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest rounded-2xl hover:bg-white/10 transition-all flex items-center justify-center text-xs md:text-sm">
              {dict.common.services}
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
      <section id="hakkımızda" className="relative min-h-screen flex items-center justify-center py-20 md:py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <motion.div 
            variants={sectionReveal}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8 md:space-y-10"
          >
            <div className="space-y-4">
              <span className="text-primary text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] font-mono">{dict.about.span}</span>
              <DigitalTraceEffect>
                <h2 className="text-4xl md:text-7xl font-black uppercase italic tracking-tighter leading-tight">
                  {locale === 'tr' ? (
                    <>Dijitalde <span className="text-primary drop-shadow-[0_0_15px_rgba(57,255,94,0.5)]">İz</span> Bırakıyoruz.</>
                  ) : (
                    <>Leaving a Digital <span className="text-primary drop-shadow-[0_0_15px_rgba(57,255,94,0.5)]">Trace</span>.</>
                  )}
                </h2>
              </DigitalTraceEffect>
            </div>
            <div className="space-y-6 md:space-y-8 text-secondary/70 text-sm md:text-lg leading-[1.8] max-w-xl">
              <p>{dict.about.desc1}</p>
              <p>{dict.about.desc2}</p>
            </div>
            
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              className="grid grid-cols-2 gap-6 md:gap-10 pt-4"
            >
              <motion.div variants={itemReveal} className="space-y-1">
                <h4 className="text-3xl md:text-5xl font-black text-white leading-none">100%</h4>
                <p className="text-[9px] md:text-[10px] text-white/30 uppercase tracking-widest font-black">{dict.about.satisfaction}</p>
              </motion.div>
              <motion.div variants={itemReveal} className="space-y-1">
                <h4 className="text-3xl md:text-5xl font-black text-white leading-none">50+</h4>
                <p className="text-[9px] md:text-[10px] text-white/30 uppercase tracking-widest font-black">{dict.about.projects}</p>
              </motion.div>
            </motion.div>

            <motion.div variants={itemReveal} className="pt-4">
              <Link href={`/${locale}/hakkimizda`} className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-white/10 text-white transition-all rounded-2xl group text-xs md:text-sm font-black uppercase tracking-widest">
                {dict.about.all_story}
                <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                  <ArrowDown className="rotate-[-90deg] text-primary" size={16} />
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>

          {/* 3D Code Card - Now visible on mobile */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: -15 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="relative block perspective-[1000px] group"
          >
            <motion.div
              style={{ 
                transformStyle: "preserve-3d",
              }}
              whileHover={{ 
                rotateY: -5,
                rotateX: 5,
                scale: 1.05,
                transition: { duration: 0.4 }
              }}
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                y: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              className="bg-[#141412]/80 backdrop-blur-xl border border-white/10 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-6 md:p-10 font-mono text-[10px] md:text-sm space-y-4 md:space-y-6 relative z-10 before:absolute before:inset-0 before:bg-gradient-to-br before:from-primary/5 before:to-transparent before:pointer-events-none group-hover:border-primary/30 transition-colors"
            >
              <div className="absolute -inset-[1px] bg-gradient-to-br from-primary/20 to-transparent rounded-[2rem] md:rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
              
              <div className="relative z-10 flex gap-3 md:gap-4"><span className="text-primary/50">01</span><p className="text-white/80 font-bold">while (client.needs) {'{'}</p></div>
              <div className="relative z-10 flex gap-3 md:gap-4"><span className="text-primary/50">02</span><p className="text-primary pl-4 font-black tracking-widest animate-pulse">innovate();</p></div>
              <div className="relative z-10 flex gap-3 md:gap-4"><span className="text-primary/50">03</span><p className="text-primary pl-4 font-black tracking-widest">optimize_pixels();</p></div>
              <div className="relative z-10 flex gap-3 md:gap-4"><span className="text-primary/50">04</span><p className="text-primary pl-4 font-black tracking-widest animate-pulse">deliver_perfection();</p></div>
              <div className="relative z-10 flex gap-3 md:gap-4"><span className="text-primary/50">05</span><p className="text-white/80 font-bold">{'}'}</p></div>

              <div className="absolute bottom-4 right-6 text-[8px] md:text-[10px] text-white/10 font-black uppercase tracking-[0.3em]">IFPIX_OS_V1.0</div>
            </motion.div>

            {/* Background Glows */}
            <div className="absolute -top-10 -right-10 md:-top-20 md:-right-20 w-48 h-48 md:w-64 md:h-64 bg-primary/10 rounded-full blur-[60px] md:blur-[100px] animate-pulse pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 md:-bottom-20 md:-left-20 w-48 h-48 md:w-64 md:h-64 bg-primary/5 rounded-full blur-[50px] md:blur-[80px] pointer-events-none" />
          </motion.div>
        </div>
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
                  <h4 className="text-xl font-bold mb-3 relative z-10 uppercase tracking-wide group-hover:text-primary transition-colors">{service.title}</h4>
                  <p className="text-[13px] text-secondary/60 leading-[1.6] relative z-10 mb-8 font-medium">{service.desc}</p>
                  <Link 
                    href={`/${locale}/hizmetler/${service.title.toLowerCase().replace(/ /g, '-').replace(/&/g, 've').replace(/ı/g, 'i').replace(/ö/g, 'o').replace(/ü/g, 'u').replace(/ş/g, 's').replace(/ç/g, 'c').replace(/ğ/g, 'g')}`}
                    className="relative z-30 flex items-center gap-2 text-xs font-black uppercase tracking-widest text-primary cursor-pointer hover:brightness-125"
                  >
                    {dict.common.more_info} <ArrowDown className="-rotate-90" size={14} />
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <PricingSection locale={locale} dict={dict} onPlanSelect={openWizard} />

      <TechMarquee />

      <WhatsAppFAB />
      <AnalysisWizard 
        isOpen={isWizardOpen} 
        onClose={() => setIsWizardOpen(false)} 
        selectedPlan={selectedPlan}
        locale={locale}
      />
      <Footer />
    </main>
  );
}
