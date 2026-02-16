'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DemoPreviewer from './DemoPreviewer';
import ProcessFlow from './ProcessFlow';
import { Code2, ShoppingCart, Building2, Cpu, ArrowRight } from 'lucide-react';

const categories = [
  { id: 'kurumsal', label: 'Kurumsal Süreç', icon: Building2 },
  { id: 'eticaret', label: 'E-Ticaret Süreci', icon: ShoppingCart },
  { id: 'yazilim', label: 'Yazılım Çözümleri', icon: Code2 },
];

const ProjectTabs = () => {
  const [activeTab, setActiveTab] = useState('kurumsal');

  return (
    <div className="space-y-12">
      {/* Tab Buttons */}
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveTab(cat.id)}
            className={`flex items-center gap-3 px-6 py-3 rounded-2xl transition-all duration-300 border ${
              activeTab === cat.id
                ? "bg-primary text-background border-primary shadow-[0_0_20px_rgba(57,255,94,0.3)]"
                : "bg-white/5 text-white/60 border-white/10 hover:border-white/20 hover:bg-white/10"
            }`}
          >
            <cat.icon size={18} />
            <span className="text-xs font-bold uppercase tracking-widest">{cat.label}</span>
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="relative min-h-[600px]">
        <AnimatePresence mode="wait">
          {activeTab === 'yazilim' ? (
            <motion.div
              key="yazilim"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full min-h-[600px] flex items-center justify-center p-8 bg-white/[0.02] border border-white/5 rounded-[2.5rem] relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(57,255,94,0.05),transparent_70%)]" />
              
              <div className="relative z-10 max-w-2xl text-center space-y-8">
                <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Cpu className="text-primary" size={40} />
                </div>
                <h3 className="text-3xl md:text-5xl font-bold">Özel Yazılım <span className="text-primary">Mühendisliği</span></h3>
                <p className="text-secondary/70 text-lg leading-relaxed font-mono">
                  İhtiyacınıza özel ERP, CRM, otomasyon ve API çözümleri. Bu kategorideki projelerimiz "hazır demo" şeklinde değil, tamamen sizin iş akışınıza özel olarak sıfırdan geliştirilmektedir.
                </p>
                <div className="pt-4 flex flex-col md:flex-row items-center justify-center gap-6">
                  <div className="flex items-center gap-2 text-xs font-bold text-white/40 uppercase tracking-widest">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    Talep Üzerine Geliştirilir
                  </div>
                  <a 
                    href="https://wa.me/90XXXXXXXXXX"
                    className="flex items-center gap-3 px-8 py-4 bg-primary text-background rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-[0_0_30px_rgba(57,255,94,0.2)]"
                  >
                    Teknik Detay Alın
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>

              {/* Decorative background code snippets */}
              <div className="absolute top-10 left-10 opacity-[0.03] font-mono text-[10px] hidden lg:block">
                const solve = (problem) =&gt; innovation(problem);<br/>
                deploy(to: 'cloud_edge');
              </div>
              <div className="absolute bottom-10 right-10 opacity-[0.03] font-mono text-[10px] hidden lg:block text-right">
                system_status: 'operational';<br/>
                latency: '12ms';
              </div>
            </motion.div>
          ) : (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              <ProcessFlow />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProjectTabs;
