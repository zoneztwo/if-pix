'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PixelBackground from '@/components/PixelBackground';
import { Shield, Zap, Target, Users } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0, 0, 0.58, 1] as const } }
};

export default function HakkimizdaClient({ locale, dict }: { locale: 'tr' | 'en', dict: any }) {
  const values = [
    {
      icon: Zap,
      title: locale === 'tr' ? "Hız ve Performans" : "Speed and Performance",
      description: locale === 'tr' ? "En hızlı teknolojileri kullanarak projelerinizi optimize ediyoruz." : "We optimize your projects using the fastest technologies."
    },
    {
      icon: Shield,
      title: locale === 'tr' ? "Güven ve Kalite" : "Trust and Quality",
      description: locale === 'tr' ? "Her satır kodda güvenlik standartlarını en üst seviyede tutuyoruz." : "We maintain security standards at the highest level in every line of code."
    },
    {
      icon: Target,
      title: locale === 'tr' ? "Sonuç Odaklılık" : "Result Oriented",
      description: locale === 'tr' ? "Markanızın hedeflerine ulaşmasını sağlayacak stratejik yollar inşa ediyoruz." : "We build strategic paths that will ensure your brand reaches its goals."
    },
    {
      icon: Users,
      title: locale === 'tr' ? "Kullanıcı Deneyimi" : "User Experience",
      description: locale === 'tr' ? "Karmaşık sistemleri, etkileyici arayüzlere dönüştürüyoruz." : "We transform complex systems into impressive interfaces."
    }
  ];

  return (
    <main className="relative min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <PixelBackground />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center space-y-8">
          <motion.div {...fadeInUp} className="space-y-4">
            <span className="text-primary text-xs font-bold uppercase tracking-[0.4em] font-mono">{dict.about.span}</span>
            <h1 className="text-5xl md:text-7xl font-bold">
              {locale === 'tr' ? (
                <>Geleceği <span className="text-primary">Piksellerle</span><br />Tasarlıyoruz.</>
              ) : (
                <>Designing the <span className="text-primary">Future</span><br />with Pixels.</>
              )}
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-secondary max-w-3xl mx-auto text-lg leading-relaxed font-mono"
          >
            {dict.about.desc1}
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 px-6 relative bg-white/[0.02]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-secondary/70 leading-relaxed"
          >
            <h3 className="text-3xl font-bold text-white mb-8">{locale === 'tr' ? 'Misyonumuz' : 'Our Mission'}</h3>
            <p>{dict.about.desc2}</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-secondary/70 leading-relaxed"
          >
            <h3 className="text-3xl font-bold text-white mb-8">{locale === 'tr' ? 'Vizyonumuz' : 'Our Vision'}</h3>
            <p>
              {locale === 'tr' 
                ? "Küresel ölçekte dijital standartları belirleyen, inovasyon ve tasarımı aynı potada eriten bir marka haline gelmek."
                : "To become a brand that sets digital standards on a global scale, melting innovation and design in the same pot."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl font-bold">{locale === 'tr' ? 'Değerlerimiz' : 'Our Values'}</h2>
            <p className="text-secondary/50 font-mono text-sm uppercase tracking-widest">// {locale === 'tr' ? 'temel prensiplerimiz' : 'core principles'}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 bg-white/[0.03] border border-white/5 rounded-3xl hover:border-primary/30 transition-all group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <val.icon className="text-primary" size={24} />
                </div>
                <h4 className="text-lg font-bold mb-4 text-white">{val.title}</h4>
                <p className="text-sm text-secondary/60 leading-relaxed">{val.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
