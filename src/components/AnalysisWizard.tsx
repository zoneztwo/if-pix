'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, CheckCircle2, ArrowRight, ArrowLeft, 
  Target, BarChart3, Rocket, Layout, 
  Mail, Phone as PhoneIcon, User, Sparkles, Loader2,
  ShoppingCart, Globe, Zap, ShieldCheck,
  TrendingUp, Megaphone, FileText
} from 'lucide-react';

import Link from 'next/link';

interface AnalysisWizardProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan: string;
  locale: string;
}

const getPlanSpecificSteps = (plan: string, locale: string) => {
  const isTr = locale === 'tr';
  const planKey = plan.toLowerCase();

  if (planKey.includes('ticaret') || planKey.includes('commerce')) {
    return [
      {
        id: 'ecommerce_features',
        question: isTr ? "E-Ticaret sitenize hangi modülleri ekleyelim?" : "Which e-commerce modules to add?",
        multi: true,
        options: [
          { id: 'payment', tr: "Ödeme Sistemleri", en: "Payment Gateways", icon: ShoppingCart },
          { id: 'xml', tr: "XML Entegrasyonu", en: "XML Integration", icon: Zap },
          { id: 'stock', tr: "Stok Takip Sistemi", en: "Stock Management", icon: BarChart3 },
          { id: 'whatsapp', tr: "WhatsApp Sipariş Hattı", en: "WhatsApp Order Line", icon: Zap }
        ]
      },
      {
        id: 'ecommerce_ads',
        question: isTr ? "Satışlarınızı hangi kanaldan artırmak istersiniz?" : "Which channels to use for sales?",
        multi: true,
        options: [
          { id: 'google_shopping', tr: "Google Alışveriş Reklamları", en: "Google Shopping Ads", icon: ShoppingCart },
          { id: 'meta_sales', tr: "Meta (IG/FB) Satış Odaklı", en: "Meta Sales Focused", icon: Megaphone },
          { id: 'seo_ecom', tr: "E-Ticaret SEO Çalışması", en: "E-Commerce SEO", icon: TrendingUp },
          { id: 'no_ads', tr: "Sadece Web Sitesi İstiyorum", en: "Only Website for now", icon: X }
        ]
      }
    ];
  }

  if (planKey.includes('kurumsal') || planKey.includes('corporate')) {
    return [
      {
        id: 'corp_features',
        question: isTr ? "Kurumsal siteniz için teknik tercihleriniz?" : "Technical preferences for corporate site?",
        multi: true,
        options: [
          { id: 'multilang', tr: "Çoklu Dil Desteği", en: "Multi-language Support", icon: Globe },
          { id: 'blog', tr: "Haber / Blog Sistemi", en: "News / Blog System", icon: Layout },
          { id: 'whatsapp', tr: "WhatsApp İletişim Hattı", en: "WhatsApp Support", icon: Zap }
        ]
      },
      {
        id: 'corp_ads',
        question: isTr ? "Dijital görünürlüğünüzü nasıl sağlayalım?" : "How to establish digital visibility?",
        multi: true,
        options: [
          { id: 'google_search', tr: "Google Arama Reklamları", en: "Google Search Ads", icon: Target },
          { id: 'meta_branding', tr: "Meta Marka Bilinirliği", en: "Meta Brand Awareness", icon: Megaphone },
          { id: 'seo_corp', tr: "Kurumsal SEO Hizmeti", en: "Corporate SEO Service", icon: TrendingUp },
          { id: 'no_ads', tr: "Şimdilik Reklam İstemiyorum", en: "No Ads for now", icon: X }
        ]
      }
    ];
  }

  return [
    {
      id: 'landing_features',
      question: isTr ? "Landing Page için odak noktalarınız?" : "Focus points for your Landing Page?",
      multi: true,
      options: [
        { id: 'lead_form', tr: "Hızlı Kayıt Formu", en: "Lead Capture Form", icon: FileText },
        { id: 'whatsapp_fast', tr: "Hızlı WhatsApp Hattı", en: "Instant WhatsApp", icon: Zap },
        { id: 'product_showcase', tr: "Tek Ürün Odaklılık", en: "Product Focused", icon: ShoppingCart },
        { id: 'countdown', tr: "Geri Sayım Modülü", en: "Countdown Module", icon: Target }
      ]
    },
    {
      id: 'landing_ads',
      question: isTr ? "Reklam bütçenizi nerede kullanalım?" : "Where to use your ad budget?",
      multi: true,
      options: [
        { id: 'ad_funnel', tr: "Satış Hunisi (Ad Funnel)", en: "Sales Funnel Setup", icon: Rocket },
        { id: 'remarketing', tr: "Yeniden Pazarlama (Retargeting)", en: "Remarketing Setup", icon: Sparkles },
        { id: 'no_ads', tr: "Şimdilik Reklam İstemiyorum", en: "No Ads for now", icon: X }
      ]
    }
  ];
};

export default function AnalysisWizard({ isOpen, onClose, selectedPlan, locale }: AnalysisWizardProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isFinalStep, setIsFinalStep] = useState(false);
  
  const [allSelections, setAllSelections] = useState<any>({});
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const [phone, setPhone] = useState('');

  const formatPhoneNumber = (value: string) => {
    if (!value) return value;
    const phoneNumber = value.replace(/[^\d]/g, '');
    const phoneNumberLength = phoneNumber.length;
    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }
    if (phoneNumberLength < 9) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)} ${phoneNumber.slice(6)}`;
    }
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)} ${phoneNumber.slice(6, 8)} ${phoneNumber.slice(8, 10)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    setPhone(formattedPhoneNumber);
  };

  const dynamicSteps = getPlanSpecificSteps(selectedPlan, locale);

  useEffect(() => {
    if (!isOpen) {
      setCurrentStep(0);
      setIsAnalyzing(false);
      setIsFinalStep(false);
      setIsSubmitting(false);
      setAllSelections({});
      setSelectedOptions([]);
      setPhone('');
    }
  }, [isOpen]);

  const toggleOption = (optionId: string, isMulti: boolean) => {
    if (isMulti) {
      setSelectedOptions(prev => {
        if (optionId === 'no_ads') return ['no_ads'];
        const filtered = prev.filter(id => id !== 'no_ads');
        return filtered.includes(optionId) ? filtered.filter(id => id !== optionId) : [...filtered, optionId];
      });
    } else {
      setSelectedOptions([optionId]);
      setTimeout(() => handleNext([optionId]), 300);
    }
  };

  const handleNext = (finalOptions?: string[]) => {
    const currentOptions = finalOptions || selectedOptions;
    if (currentOptions.length === 0) return;

    setAllSelections((prev: any) => ({ ...prev, [dynamicSteps[currentStep].id]: currentOptions }));
    setSelectedOptions([]);

    if (currentStep < dynamicSteps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setCurrentStep(dynamicSteps.length);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const rawPhone = formData.get('phone') as string;
    const cleanPhone = rawPhone.replace(/[^\d+]/g, '');

    const phoneRegex = /^[0-9+]{10,15}$/;
    if (!phoneRegex.test(cleanPhone)) {
      alert(locale === 'tr' ? "Lütfen geçerli bir telefon numarası girin." : "Please enter a valid phone number.");
      return;
    }

    setIsSubmitting(true);

    const finalData = {
      name: formData.get('name'),
      phone: cleanPhone, // Temizlenmiş numara gönderiliyor
      email: formData.get('email'),
      marketingConsent: formData.get('marketing_consent') === 'on',
      plan: selectedPlan,
      features: allSelections.ecommerce_features || allSelections.corp_features || allSelections.landing_features || [],
      marketing: allSelections.ecommerce_ads || allSelections.corp_ads || allSelections.landing_ads || []
    };

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(finalData)
      });

      if (res.ok) {
        setIsSubmitting(false);
        setIsAnalyzing(true);
        setTimeout(() => {
          setIsAnalyzing(false);
          setIsFinalStep(true);
        }, 2500);
      } else {
        throw new Error("API Error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setIsSubmitting(false);
      alert(locale === 'tr' ? "Bir bağlantı hatası oluştu, lütfen tekrar deneyin." : "A connection error occurred, please try again.");
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[200] flex items-center justify-center px-4 md:px-6">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="absolute inset-0 bg-background/95 backdrop-blur-xl" />
        <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }} className="relative w-full max-w-2xl bg-[#0d0d0c] border border-white/10 rounded-[2.5rem] shadow-2xl overflow-hidden p-8 md:p-12">
          <button onClick={onClose} className="absolute top-6 right-6 p-2 text-white/20 hover:text-white transition-colors"><X size={20} /></button>
          
          <div className="mb-8 md:mb-12 flex items-center gap-3">
             <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
             <span className="text-primary text-[10px] font-black uppercase tracking-[0.3em] font-mono">{selectedPlan} FİYAT TEKLİF SİHİRBAZI</span>
          </div>

          <AnimatePresence mode="wait">
            {!isAnalyzing && !isFinalStep && currentStep < dynamicSteps.length && (
              <motion.div key="questions" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight uppercase italic tracking-wider">{dynamicSteps[currentStep].question}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {dynamicSteps[currentStep].options.map((opt) => {
                    const isSelected = selectedOptions.includes(opt.id);
                    return (
                      <button key={opt.id} onClick={() => toggleOption(opt.id, dynamicSteps[currentStep].multi)} className={`group p-5 rounded-2xl border transition-all text-left flex items-center justify-between ${isSelected ? "bg-primary/20 border-primary shadow-[0_0_20px_rgba(57,255,94,0.1)]" : "bg-white/[0.03] border-white/10 hover:border-white/20"}`}>
                        <div className="flex items-center gap-4">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${isSelected ? 'bg-primary text-background' : 'bg-white/5 text-white/40 group-hover:text-primary'}`}><opt.icon size={20} /></div>
                          <span className={`text-[12px] font-bold uppercase tracking-wider italic transition-colors ${isSelected ? 'text-white' : 'text-white/60 group-hover:text-white/80'}`}>{opt[locale as 'tr' | 'en']}</span>
                        </div>
                        {dynamicSteps[currentStep].multi && (
                          <div className={`w-4 h-4 rounded-md border flex items-center justify-center transition-all ${isSelected ? 'bg-primary border-primary' : 'border-white/20'}`}>{isSelected && <CheckCircle2 size={10} className="text-background" strokeWidth={4} />}</div>
                        )}
                      </button>
                    );
                  })}
                </div>
                <div className="flex justify-between items-center pt-8 border-t border-white/5">
                   <button disabled={currentStep === 0} onClick={() => setCurrentStep(prev => prev - 1)} className="flex items-center gap-2 text-[10px] font-bold text-white/30 hover:text-white disabled:opacity-0 transition-all uppercase tracking-widest"><ArrowLeft size={14} /> GERİ</button>
                   <button disabled={selectedOptions.length === 0} onClick={() => handleNext()} className="px-8 py-3 bg-primary text-background rounded-xl font-black uppercase tracking-widest text-[10px] hover:scale-105 transition-all disabled:opacity-30 disabled:hover:scale-100">DEVAM ET <ArrowRight size={14} className="inline ml-1" /></button>
                </div>
              </motion.div>
            )}

            {!isAnalyzing && !isFinalStep && currentStep === dynamicSteps.length && (
              <motion.div key="contact-step" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="space-y-8 text-center">
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight">SON ADIM</h3>
                  <p className="text-secondary/60 text-xs md:text-sm">Fiyat teklifinizi hazırlayıp iletmemiz için lütfen bilgilerinizi girin.</p>
                </div>
                <form className="space-y-4 max-w-md mx-auto" onSubmit={handleSubmit}>
                  <input required name="name" type="text" placeholder="Adınız Soyadınız" className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 text-white focus:outline-none focus:border-primary/50 transition-all text-sm" />
                  <input 
                    required 
                    name="phone" 
                    type="tel" 
                    placeholder="Telefon Numaranız (5XX...)" 
                    value={phone}
                    onChange={handlePhoneChange}
                    maxLength={15}
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 text-white focus:outline-none focus:border-primary/50 transition-all text-sm" 
                  />
                  <input required name="email" type="email" placeholder="E-Posta Adresiniz" className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 text-white focus:outline-none focus:border-primary/50 transition-all text-sm" />
                  
                  <div className="flex items-start gap-3 text-left py-2">
                    <input required id="kvkk" type="checkbox" className="mt-1 w-4 h-4 rounded border-white/10 bg-white/5 text-primary focus:ring-primary" />
                    <label htmlFor="kvkk" className="text-[10px] text-white/40 leading-tight cursor-pointer select-none">
                      Kişisel verilerimin <Link href={`/${locale}/legal/kvkk`} target="_blank" className="text-primary hover:underline">KVKK Aydınlatma Metni</Link> kapsamında işlendiğini, 
                      <Link href={`/${locale}/legal/kullanici-sozlesmesi`} target="_blank" className="text-primary hover:underline"> Kullanıcı Sözleşmesi</Link> ve 
                      <Link href={`/${locale}/legal/gizlilik-politikasi`} target="_blank" className="text-primary hover:underline"> Gizlilik Politikasını</Link> okuduğumu ve onayladığımı kabul ediyorum.
                    </label>
                  </div>

                  <div className="flex items-start gap-3 text-left py-1">
                    <input id="marketing" name="marketing_consent" type="checkbox" className="mt-1 w-4 h-4 rounded border-white/10 bg-white/5 text-primary focus:ring-primary" />
                    <label htmlFor="marketing" className="text-[10px] text-white/40 leading-tight cursor-pointer select-none">
                      E-posta ve SMS gönderimleri aracılığıyla güncel etkinliklerden ve kampanyalardan haberdar olmak istiyorum.
                    </label>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <button type="button" onClick={() => setCurrentStep(prev => prev - 1)} className="flex-1 bg-white/5 text-white py-4 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-white/10">GERİ</button>
                    <button type="submit" disabled={isSubmitting} className="flex-[2] bg-primary text-[#0a0a0a] font-black uppercase tracking-widest text-[10px] py-4 rounded-xl hover:scale-105 transition-all shadow-[0_0_30px_rgba(57,255,94,0.3)] disabled:opacity-50">
                      {isSubmitting ? <Loader2 className="mx-auto animate-spin" size={18} /> : "TEKLİFİ TAMAMLA"}
                    </button>
                  </div>
                </form>
              </motion.div>
            )}

            {isAnalyzing && (
              <motion.div key="analyzing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="py-12 text-center space-y-8">
                <div className="relative w-24 h-24 mx-auto"><Loader2 className="w-full h-full text-primary animate-spin" strokeWidth={1} /><div className="absolute inset-0 flex items-center justify-center"><Sparkles className="text-primary animate-pulse" size={32} /></div></div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white uppercase tracking-[0.2em]">Teklifiniz Hazırlanıyor...</h3>
                  <p className="text-secondary/50 text-xs md:text-sm max-w-sm mx-auto font-mono">Seçtiğiniz özellikler ve hizmet kombinasyonu için maliyet çalışması yapılıyor.</p>
                </div>
              </motion.div>
            )}

            {isFinalStep && (
              <motion.div key="final" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="space-y-8 text-center">
                <div className="space-y-4">
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6"><CheckCircle2 className="text-primary" size={40} /></div>
                  <h3 className="text-3xl md:text-5xl font-black text-white uppercase leading-tight">Talebiniz Alındı!</h3>
                  <p className="text-secondary/60 text-sm md:text-lg max-w-md mx-auto">Teklif hazırlığımız başladı. Strateji uzmanımız 24 saat içerisinde sizinle iletişime geçecektir.</p>
                </div>
                <button onClick={onClose} className="px-12 py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-white/10 transition-all">KAPAT</button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
