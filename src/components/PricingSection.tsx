'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Sparkles, MousePointerClick, Building2, ShoppingBag } from 'lucide-react';

interface PricingPlan {
  name: string;
  desc: string;
  features: string[];
}

interface PricingSectionProps {
  locale: string;
  dict: any;
  onPlanSelect: (planName: string) => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function PricingSection({ dict, onPlanSelect }: PricingSectionProps) {
  const getIcon = (idx: number) => {
    switch(idx) {
      case 0: return <MousePointerClick className="text-blue-400" size={24} />;
      case 1: return <Building2 className="text-primary" size={24} />;
      case 2: return <ShoppingBag className="text-purple-400" size={24} />;
      default: return <Sparkles className="text-primary" size={24} />;
    }
  };

  const getGradient = (idx: number) => {
    switch(idx) {
      case 0: return "from-blue-500/20 to-transparent";
      case 1: return "from-primary/20 to-transparent";
      case 2: return "from-purple-500/20 to-transparent";
      default: return "from-white/10 to-transparent";
    }
  };

  const getBorderColor = (idx: number) => {
     switch(idx) {
      case 0: return "group-hover:border-blue-500/50";
      case 1: return "border-primary/50 group-hover:border-primary"; 
      case 2: return "group-hover:border-purple-500/50";
      default: return "group-hover:border-white/20";
    }
  };

  return (
    <section id="paketler" className="relative py-20 md:py-32 px-6 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 space-y-4"
        >
          <span className="text-primary text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] font-mono block">
            {dict.pricing.span}
          </span>
          <h2 className="text-4xl md:text-7xl font-bold uppercase tracking-tight">
            {dict.pricing.title}
          </h2>
          <p className="text-secondary/60 max-w-2xl mx-auto text-sm md:text-lg leading-relaxed">
            {dict.pricing.desc}
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch"
        >
          {dict.pricing.plans.map((plan: PricingPlan, idx: number) => (
            <motion.div 
              key={idx}
              variants={cardVariants}
              className={`relative group rounded-[2.5rem] bg-[#0a0a0a] border border-white/5 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full ${getBorderColor(idx)} ${idx === 1 ? 'shadow-[0_0_50px_rgba(57,255,94,0.15)] z-10 scale-105 lg:-mt-4' : 'hover:shadow-xl'}`}
            >
              <div className="absolute inset-0 overflow-hidden rounded-[2.5rem] pointer-events-none">
                <div className="absolute -bottom-10 -right-10 opacity-[0.03] text-white group-hover:opacity-[0.06] group-hover:scale-110 transition-all duration-700">
                  {React.cloneElement(getIcon(idx) as React.ReactElement, { size: 320 })}
                </div>
              </div>

              <div className={`absolute inset-x-0 top-0 h-32 bg-gradient-to-b ${getGradient(idx)} opacity-50 rounded-t-[2.5rem]`} />

              {idx === 1 && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-primary text-[#0a0a0a] text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg shadow-primary/20 flex items-center gap-2 z-20 whitespace-nowrap">
                  <Sparkles size={12} />
                  En Çok Tercih Edilen
                </div>
              )}
              
              <div className="relative p-8 md:p-10 flex flex-col flex-grow">
                <div className="mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 border border-white/5 group-hover:scale-110 transition-transform duration-500">
                    {getIcon(idx)}
                  </div>
                  <h4 className="text-2xl font-bold mb-2 uppercase tracking-wide text-white">{plan.name}</h4>
                  <p className="text-sm text-secondary/60 leading-relaxed min-h-[40px]">{plan.desc}</p>
                </div>

                <ul className="space-y-5 flex-grow mb-10 pt-8 border-t border-white/5">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-sm text-secondary/80 group/item">
                      <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${idx === 1 ? 'bg-primary/20 text-primary' : 'bg-white/10 text-white/40 group-hover/item:text-white group-hover/item:bg-white/20'} transition-colors`}>
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span className="leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <button 
                    onClick={() => onPlanSelect(plan.name)}
                    className={`w-full py-5 rounded-2xl font-black uppercase tracking-widest text-xs md:text-sm flex items-center justify-center gap-3 transition-all duration-300 ${
                      idx === 1 
                      ? 'bg-primary text-[#0a0a0a] hover:bg-[#2bff68] shadow-[0_0_30px_rgba(57,255,94,0.3)] hover:shadow-[0_0_50px_rgba(57,255,94,0.5)]' 
                      : 'bg-white/5 text-white hover:bg-white/10 border border-white/5 hover:border-white/20'
                    }`}
                  >
                    {dict.common.start}
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
