'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Compass, 
  LayoutTemplate, 
  TrendingUp, 
  Users2, 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  Calendar,
  X,
  Database,
  Code,
  ShieldCheck,
  Rocket,
  ShoppingCart,
  Zap,
  BarChart3,
  LucideIcon
} from 'lucide-react';

interface Step {
  id: number;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  description: string;
  tech: string[];
  color: string;
}

const sectorSteps: Record<string, Step[]> = {
  hizmet: [
    {
      id: 1,
      title: "Strateji ve Hedef Kitle",
      subtitle: "Planlama",
      icon: Compass,
      description: "Hizmet verdiğiniz alanı inceliyor, sizi doğru müşterilerle buluşturacak stratejik yol haritasını çıkarıyoruz.",
      tech: ["Rakip Analizi", "Hedef Kitle", "E-Posta Kurulumu"],
      color: "rgba(57, 255, 94, 0.4)"
    },
    {
      id: 2,
      title: "Kurumsal Web İnşası",
      subtitle: "Tasarım",
      icon: LayoutTemplate,
      description: "Hizmetlerinizin kalitesini yansıtan, güven verici ve mobil uyumlu bir site tasarlıyoruz.",
      tech: ["Kurumsal UI", "Hızlı Yapı", "İletişim Formu"],
      color: "rgba(57, 255, 94, 0.6)"
    },
    {
      id: 3,
      title: "SEO ve Görünürlük",
      subtitle: "Bulunabilirlik",
      icon: TrendingUp,
      description: "Google aramalarında hizmetlerinizle ilgili kelimelerde ön sıralara çıkmanız için optimizasyonları yapıyoruz.",
      tech: ["Lokal SEO", "Harita Kaydı", "Hız Ayarı"],
      color: "rgba(57, 255, 94, 0.8)"
    },
    {
      id: 4,
      title: "Reklam ve Randevu",
      subtitle: "Satış",
      icon: Users2,
      description: "Google ve Instagram üzerinden verdiğiniz hizmete ihtiyaç duyan kişilere doğrudan ulaşıyoruz.",
      tech: ["Hizmet Reklamları", "Google Ads", "Geri Dönüş"],
      color: "rgb(57, 255, 94)"
    }
  ],
  urun: [
    {
      id: 1,
      title: "E-Ticaret Altyapısı",
      subtitle: "Temel",
      icon: ShoppingCart,
      description: "Ödeme ve kargo entegrasyonları hazır olan yüksek performanslı mağazanızı kuruyoruz.",
      tech: ["Ödeme Sistemleri", "Kargo Entegrasyonu", "SSL Güvenlik"],
      color: "rgba(57, 255, 94, 0.4)"
    },
    {
      id: 2,
      title: "Kullanıcı Deneyimi (UX)",
      subtitle: "Dönüşüm",
      icon: Zap,
      description: "Müşterilerinizin ürünleri kolayca bulup saniyeler içinde satın alabileceği akışları uyguluyoruz.",
      tech: ["Hızlı Sepet", "Ürün Filtreleme", "Mobil Ödeme"],
      color: "rgba(57, 255, 94, 0.6)"
    },
    {
      id: 3,
      title: "Google Merchant ve Hız",
      subtitle: "Pazaryeri",
      icon: BarChart3,
      description: "Ürünlerinizin Google Alışveriş sekmesinde görünmesini sağlayarak satış şansınızı artırıyoruz.",
      tech: ["Merchant Kaydı", "Web Vitals Hızı", "Ürün SEO"],
      color: "rgba(57, 255, 94, 0.8)"
    },
    {
      id: 4,
      title: "Performans Reklamları",
      subtitle: "Satış",
      icon: Rocket,
      description: "Meta Pixel ve CAPI kullanarak, ürünlerinizle ilgilenen kişilere doğrudan satış odaklı reklamlar çıkıyoruz.",
      tech: ["Katalog Reklamları", "Remarketing", "Satış Takip"],
      color: "rgb(57, 255, 94)"
    }
  ],
  yazilim: [
    {
      id: 1,
      title: "Analiz ve Mimari",
      subtitle: "Planlama",
      icon: Database,
      description: "İş akışınızı dinleyerek ihtiyaç duyduğunuz sistemi, veritabanı ve API yapısını planlıyoruz.",
      tech: ["Sistem Mimarisi", "Veritabanı", "API Planlama"],
      color: "rgba(57, 255, 94, 0.4)"
    },
    {
      id: 2,
      title: "Geliştirme Süreci",
      subtitle: "Kodlama",
      icon: Code,
      description: "Belirlenen mimariye göre sisteminizi modüler ve ölçeklenebilir şekilde modern dillerle kodluyoruz.",
      tech: ["Fullstack Dev", "Frameworks", "Modüler Yapı"],
      color: "rgba(57, 255, 94, 0.6)"
    },
    {
      id: 3,
      title: "Test ve Entegrasyon",
      subtitle: "Kusursuzluk",
      icon: ShieldCheck,
      description: "Yazılımın güvenliğini ve stabilitesini test ederek mevcut sistemlerinizle uyumlu hale getiriyoruz.",
      tech: ["Güvenlik Testi", "Hız Testi", "Entegrasyon"],
      color: "rgba(57, 255, 94, 0.8)"
    },
    {
      id: 4,
      title: "Yayına Alım ve Destek",
      subtitle: "Canlı",
      icon: Rocket,
      description: "Sisteminizi cloud sunuculara kuruyor, sonrasında teknik destekle yanınızda oluyoruz.",
      tech: ["Deployment", "7/24 İzleme", "Teknik Destek"],
      color: "rgb(57, 255, 94)"
    }
  ]
};

const ProcessFlow = ({ sectorId = 'hizmet' }: { sectorId?: string }) => {
  const [activeStep, setActiveStep] = useState(1);
  const [showContact, setShowContact] = useState(false);

  const steps = useMemo(() => sectorSteps[sectorId] || sectorSteps.hizmet, [sectorId]);

  return (
    <div className="w-full">
      {/* Compact Timeline Header */}
      <div className="relative max-w-2xl mx-auto mb-10 px-8">
        <div className="absolute top-6 left-12 right-12 h-[1px] z-0 pointer-events-none">
          <div className="absolute inset-0 bg-white/10" />
          <motion.div 
            className="absolute top-0 left-0 h-full bg-primary shadow-[0_0_10px_rgba(57,255,94,0.5)]"
            initial={{ width: '0%' }}
            animate={{ width: `${((activeStep - 1) / (steps.length - 1)) * 100}%` }}
            transition={{ duration: 0.8 }}
          />
        </div>

        <div className="relative z-10 flex justify-between items-center">
          {steps.map((step) => (
            <button
              key={step.id}
              onClick={() => setActiveStep(step.id)}
              className="flex flex-col items-center gap-2 group"
            >
              <motion.div
                animate={{
                  backgroundColor: activeStep >= step.id ? 'rgb(57, 255, 94)' : '#1a1a18',
                  scale: activeStep === step.id ? 1.1 : 1
                }}
                className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-500 ${
                  activeStep >= step.id ? 'text-background border-primary' : 'text-white/20 border-white/5'
                }`}
              >
                <step.icon size={20} />
              </motion.div>
              <span className={`text-[8px] font-black uppercase tracking-[0.2em] hidden md:block ${
                activeStep >= step.id ? 'text-primary' : 'text-white/20'
              }`}>
                {step.subtitle}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Optimized Content Display */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${sectorId}-${activeStep}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white/[0.02] border border-white/5 rounded-[2rem] p-6 md:p-10 relative overflow-hidden"
        >
          <div className="space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full">
              <span className="text-[8px] text-primary font-black uppercase tracking-widest">Adım 0{activeStep}</span>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight leading-tight">{steps[activeStep-1].title}</h3>
            <p className="text-secondary/70 text-sm leading-relaxed max-w-sm">
              {steps[activeStep-1].description}
            </p>

            <div className="pt-2 relative">
              {activeStep < 4 ? (
                <button 
                  onClick={() => setActiveStep(prev => prev + 1)}
                  className="flex items-center gap-3 px-6 py-3 bg-primary text-background rounded-xl font-black uppercase tracking-widest text-[10px] hover:scale-105 transition-all"
                >
                  Sonraki Adım
                  <ArrowRight size={14} />
                </button>
              ) : (
                <div className="relative inline-block">
                  <button 
                    onClick={() => setShowContact(!showContact)}
                    className="flex items-center gap-3 px-6 py-3 bg-primary text-background rounded-xl font-black uppercase tracking-widest text-[10px] hover:scale-105 transition-all shadow-[0_0_20px_rgba(57,255,94,0.3)]"
                  >
                    İletişime Geçin
                    <motion.div animate={{ rotate: showContact ? 180 : 0 }}>
                      <ArrowRight className="rotate-90" size={14} />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {showContact && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: -10, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute bottom-full left-0 w-56 bg-[#1a1a18] border border-white/10 rounded-2xl p-1 shadow-2xl z-50 mb-3"
                      >
                        <div className="flex items-center justify-between px-3 py-1.5 border-b border-white/5 mb-1">
                          <span className="text-[8px] font-black uppercase tracking-widest text-white/30">Bağlantı</span>
                          <button onClick={() => setShowContact(false)} className="text-white/40 hover:text-white"><X size={12} /></button>
                        </div>
                        {[
                          { label: 'Hemen Ara', href: 'tel:+905535722020', icon: Phone, color: 'text-blue-500' },
                          { label: "WhatsApp", href: 'https://wa.me/905422264012', isWA: true, color: 'text-green-500' },
                          { label: 'Toplantı', href: '/toplanti-talebi', icon: Calendar, color: 'text-purple-500' }
                        ].map((item, i) => {
                          const Icon = item.icon;
                          return (
                            <a key={i} href={item.href} className="flex items-center gap-3 p-2.5 hover:bg-white/5 rounded-xl transition-all group">
                              <div className={`w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center ${item.color} group-hover:bg-white/10`}>
                                {item.isWA ? (
                                  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.353-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.435 0 12.071a11.79 11.79 0 001.598 5.948L0 24l6.102-1.6a11.777 11.777 0 005.944 1.593h.005c6.637 0 12.032-5.436 12.05-12.072a11.812 11.812 0 00-3.536-8.442z"/></svg>
                                ) : (
                                  Icon && <Icon size={14} />
                                )}
                              </div>
                              <span className="text-[10px] font-bold uppercase tracking-wider text-white/80">{item.label}</span>
                            </a>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-4 relative z-10">
            <h4 className="text-[9px] font-bold text-white/30 uppercase tracking-[0.3em] font-mono">// kazanımlar</h4>
            <div className="grid grid-cols-1 gap-3">
              {steps[activeStep-1].tech.map((t, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 p-3 bg-white/[0.03] border border-white/5 rounded-xl group hover:border-primary/20 transition-all"
                >
                  <CheckCircle2 className="text-primary" size={14} />
                  <span className="font-mono text-[11px] text-white/70">{t}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ProcessFlow;
