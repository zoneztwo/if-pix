'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PixelBackground from '@/components/PixelBackground';
import ContactForm from '@/components/ContactForm';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function IletisimClient({ locale, dict }: { locale: 'tr' | 'en', dict: any }) {
  const contactInfo = [
    { 
      icon: Phone, 
      label: locale === 'tr' ? "Bizi Arayın" : "Call Us", 
      value: "+90 (555) 000 00 00",
      href: "tel:+905550000000"
    },
    { 
      icon: Mail, 
      label: locale === 'tr' ? "E-Posta Gönderin" : "Send Email", 
      value: "hello@ifpix.web",
      href: "mailto:hello@ifpix.web"
    },
    { 
      icon: MapPin, 
      label: locale === 'tr' ? "Ofisimiz" : "Our Office", 
      value: locale === 'tr' ? "İstanbul, Türkiye" : "Istanbul, Turkey",
      href: "https://maps.google.com"
    }
  ];

  return (
    <main className="relative min-h-screen bg-background overflow-hidden">
      <Navbar />
      
      {/* Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="sticky top-0 h-screen w-full">
          <PixelBackground />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        </div>
      </div>

      <section className="relative z-10 pt-40 pb-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          <div className="space-y-12">
            <div className="space-y-6">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-primary text-xs font-bold uppercase tracking-[0.4em] font-mono"
              >
                // {locale === 'tr' ? 'iletişim' : 'contact'}
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-bold uppercase"
              >
                {locale === 'tr' ? (
                  <>Bir Kahve <span className="text-primary">Eşliğinde</span> Konuşalım.</>
                ) : (
                  <>Let's Talk Over <span className="text-primary">Coffee</span>.</>
                )}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ delay: 0.2 }}
                className="text-secondary max-w-lg text-lg leading-relaxed"
              >
                {locale === 'tr' 
                  ? "Projenizi büyütmek, teknik destek almak veya sadece tanışmak için bize ulaşabilirsiniz."
                  : "Contact us to grow your project, get technical support, or just to meet."}
              </motion.p>
            </div>

            <div className="space-y-8">
              {contactInfo.map((info, idx) => (
                <motion.a
                  key={idx}
                  href={info.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  className="flex items-center gap-6 group cursor-pointer"
                >
                  <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-white/40 group-hover:bg-primary/10 group-hover:text-primary group-hover:border-primary/30 transition-all">
                    <info.icon size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-1">{info.label}</p>
                    <p className="text-xl font-bold text-white group-hover:text-primary transition-colors">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <ContactForm />
          </motion.div>

        </div>
      </section>

      <div className="relative z-20">
        <Footer />
      </div>
    </main>
  );
}
