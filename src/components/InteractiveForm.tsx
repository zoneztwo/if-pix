'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  User, 
  Mail, 
  Phone, 
  Building2, 
  ShoppingBag, 
  Briefcase,
  Target,
  Globe,
  Wallet,
  Zap,
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface InteractiveFormProps {
  dict: any;
  locale: string;
}

const InteractiveForm = ({ dict, locale }: InteractiveFormProps) => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<any>({
    type: '', // ecommerce or service
    serviceCategory: '',
    serviceGoal: '',
    infrastructure: '',
    communication: '',
    ecommerceNeed: '',
    hasWebsite: null,
    budget: '',
    struggles: '',
    contact: {
      name: '',
      email: '',
      phone: '',
      company: ''
    }
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const t = dict.interactive_form;

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => Math.max(0, prev - 1));

  const handleTypeSelect = (type: 'ecommerce' | 'service') => {
    setFormData({ ...formData, type });
    nextStep();
  };

  const handleOptionSelect = (key: string, value: string) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          formType: 'İnteraktif Form (Sihirbaz)'
        })
      });

      if (res.ok) {
        setIsSubmitted(true);
      } else {
        throw new Error('API Error');
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert(locale === 'tr' ? "Bir hata oluştu, lütfen tekrar deneyin." : "An error occurred, please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const renderProgress = () => {
    const totalSteps = formData.type === 'service' ? 4 : formData.type === 'ecommerce' ? 5 : 2;
    const progress = (step / totalSteps) * 100;

    return (
      <div className="w-full bg-white/5 h-1 rounded-full mb-8 overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          className="h-full bg-primary shadow-[0_0_10px_rgba(57,255,94,0.5)]"
        />
      </div>
    );
  };

  if (isSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-20 space-y-8 bg-white/[0.02] border border-white/5 rounded-[3rem] p-12 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
        <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="text-primary" size={48} />
        </div>
        <div className="space-y-4">
          <h3 className="text-4xl font-bold text-white tracking-tight">{t.steps.final.success_title}</h3>
          <p className="text-secondary/60 max-w-md mx-auto text-lg">
            {t.steps.final.success_desc}
          </p>
        </div>
        <button 
          onClick={() => { setStep(0); setIsSubmitted(false); }}
          className="bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-2xl transition-all font-bold uppercase tracking-widest text-xs"
        >
          {t.controls.back}
        </button>
      </motion.div>
    );
  }

  return (
    <div className="w-full max-w-3xl mx-auto">
      {renderProgress()}

      <AnimatePresence mode="wait">
        {/* STEP 0: INTRO */}
        {step === 0 && (
          <motion.div
            key="step-0"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white">{t.steps.intro.question}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <button
                onClick={() => handleTypeSelect('ecommerce')}
                className="group relative p-8 bg-white/[0.03] border border-white/10 rounded-[2rem] hover:border-primary/50 transition-all text-left space-y-4 overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-110 transition-transform">
                  <ShoppingBag size={80} />
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                  <ShoppingBag size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{t.steps.intro.options.ecommerce}</h3>
                </div>
              </button>

              <button
                onClick={() => handleTypeSelect('service')}
                className="group relative p-8 bg-white/[0.03] border border-white/10 rounded-[2rem] hover:border-primary/50 transition-all text-left space-y-4 overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-110 transition-transform">
                  <Briefcase size={80} />
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                  <Briefcase size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{t.steps.intro.options.service}</h3>
                </div>
              </button>
            </div>
          </motion.div>
        )}

        {/* SERVICE FLOW */}
        {formData.type === 'service' && step === 1 && (
          <motion.div
            key="service-1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white/90">{t.steps.service_step_1.question}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {t.steps.service_step_1.options.map((opt: string) => (
                  <button
                    key={opt}
                    onClick={() => handleOptionSelect('serviceCategory', opt)}
                    className={cn(
                      "p-4 rounded-xl border text-sm font-medium transition-all text-left",
                      formData.serviceCategory === opt 
                        ? "bg-primary/20 border-primary text-primary" 
                        : "bg-white/5 border-white/10 text-white/60 hover:border-white/20"
                    )}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white/90">{t.steps.service_step_1.target_question}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {t.steps.service_step_1.target_options.map((opt: string) => (
                  <button
                    key={opt}
                    onClick={() => handleOptionSelect('serviceGoal', opt)}
                    className={cn(
                      "p-4 rounded-xl border text-sm font-medium transition-all text-left",
                      formData.serviceGoal === opt 
                        ? "bg-primary/20 border-primary text-primary" 
                        : "bg-white/5 border-white/10 text-white/60 hover:border-white/20"
                    )}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-between pt-8">
              <button onClick={prevStep} className="flex items-center gap-2 text-white/40 hover:text-white transition-colors uppercase text-xs font-bold tracking-widest">
                <ArrowLeft size={16} /> {t.controls.back}
              </button>
              <button 
                onClick={nextStep} 
                disabled={!formData.serviceCategory || !formData.serviceGoal}
                className="flex items-center gap-2 bg-primary text-background px-8 py-3 rounded-xl font-bold uppercase text-xs tracking-widest disabled:opacity-30"
              >
                {t.controls.next} <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        )}

        {formData.type === 'service' && step === 2 && (
          <motion.div
            key="service-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white/90">{t.steps.service_step_2.question}</h2>
              <div className="space-y-3">
                {t.steps.service_step_2.options.map((opt: string) => (
                  <button
                    key={opt}
                    onClick={() => handleOptionSelect('infrastructure', opt)}
                    className={cn(
                      "w-full p-5 rounded-2xl border text-left transition-all",
                      formData.infrastructure === opt 
                        ? "bg-primary/20 border-primary text-primary" 
                        : "bg-white/5 border-white/10 text-white/60 hover:border-white/20"
                    )}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white/90">{t.steps.service_step_2.comm_question}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {t.steps.service_step_2.comm_options.map((opt: string) => (
                  <button
                    key={opt}
                    onClick={() => handleOptionSelect('communication', opt)}
                    className={cn(
                      "p-4 rounded-xl border text-xs font-medium transition-all text-center h-24 flex items-center justify-center",
                      formData.communication === opt 
                        ? "bg-primary/20 border-primary text-primary" 
                        : "bg-white/5 border-white/10 text-white/60 hover:border-white/20"
                    )}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-between pt-8">
              <button onClick={prevStep} className="flex items-center gap-2 text-white/40 hover:text-white transition-colors uppercase text-xs font-bold tracking-widest">
                <ArrowLeft size={16} /> {t.controls.back}
              </button>
              <button 
                onClick={nextStep} 
                disabled={!formData.infrastructure || !formData.communication}
                className="flex items-center gap-2 bg-primary text-background px-8 py-3 rounded-xl font-bold uppercase text-xs tracking-widest disabled:opacity-30"
              >
                {t.controls.next} <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        )}

        {/* ECOMMERCE FLOW */}
        {formData.type === 'ecommerce' && step === 1 && (
          <motion.div
            key="ecom-1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">{t.steps.ecommerce_step_1.question}</h2>
              <div className="grid grid-cols-1 gap-4">
                {t.steps.ecommerce_step_1.options.map((opt: string) => (
                  <button
                    key={opt}
                    onClick={() => handleOptionSelect('ecommerceNeed', opt)}
                    className={cn(
                      "w-full p-6 rounded-2xl border text-left transition-all flex items-center justify-between group",
                      formData.ecommerceNeed === opt 
                        ? "bg-primary/20 border-primary text-primary shadow-[0_0_20px_rgba(57,255,94,0.1)]" 
                        : "bg-white/5 border-white/10 text-white/60 hover:border-white/20"
                    )}
                  >
                    <span className="text-lg font-medium">{opt}</span>
                    <Sparkles size={20} className={cn("opacity-0 transition-opacity", formData.ecommerceNeed === opt && "opacity-100")} />
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-between pt-8">
              <button onClick={prevStep} className="flex items-center gap-2 text-white/40 hover:text-white transition-colors uppercase text-xs font-bold tracking-widest">
                <ArrowLeft size={16} /> {t.controls.back}
              </button>
              <button 
                onClick={nextStep} 
                disabled={!formData.ecommerceNeed}
                className="flex items-center gap-2 bg-primary text-background px-8 py-3 rounded-xl font-bold uppercase text-xs tracking-widest disabled:opacity-30"
              >
                {t.controls.next} <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        )}

        {formData.type === 'ecommerce' && step === 2 && (
          <motion.div
            key="ecom-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white/90">{t.steps.ecommerce_step_2.website_question}</h2>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setFormData({ ...formData, hasWebsite: true })}
                  className={cn(
                    "p-6 rounded-2xl border transition-all text-center font-bold uppercase tracking-widest text-xs",
                    formData.hasWebsite === true 
                      ? "bg-primary text-background border-primary" 
                      : "bg-white/5 border-white/10 text-white/60 hover:border-white/20"
                  )}
                >
                  {t.steps.ecommerce_step_2.yes}
                </button>
                <button
                  onClick={() => setFormData({ ...formData, hasWebsite: false })}
                  className={cn(
                    "p-6 rounded-2xl border transition-all text-center font-bold uppercase tracking-widest text-xs",
                    formData.hasWebsite === false 
                      ? "bg-primary text-background border-primary" 
                      : "bg-white/5 border-white/10 text-white/60 hover:border-white/20"
                  )}
                >
                  {t.steps.ecommerce_step_2.no}
                </button>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white/90">{t.steps.ecommerce_step_2.budget_question}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {t.steps.ecommerce_step_2.budget_options.map((opt: string) => (
                  <button
                    key={opt}
                    onClick={() => handleOptionSelect('budget', opt)}
                    className={cn(
                      "p-4 rounded-xl border text-sm font-bold transition-all h-20 flex items-center justify-center",
                      formData.budget === opt 
                        ? "bg-primary/20 border-primary text-primary" 
                        : "bg-white/5 border-white/10 text-white/60 hover:border-white/20"
                    )}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-between pt-8">
              <button onClick={prevStep} className="flex items-center gap-2 text-white/40 hover:text-white transition-colors uppercase text-xs font-bold tracking-widest">
                <ArrowLeft size={16} /> {t.controls.back}
              </button>
              <button 
                onClick={nextStep} 
                disabled={formData.hasWebsite === null || !formData.budget}
                className="flex items-center gap-2 bg-primary text-background px-8 py-3 rounded-xl font-bold uppercase text-xs tracking-widest disabled:opacity-30"
              >
                {t.controls.next} <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        )}

        {formData.type === 'ecommerce' && step === 3 && (
          <motion.div
            key="ecom-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">{t.steps.ecommerce_step_3.question}</h2>
              <textarea
                placeholder={t.steps.ecommerce_step_3.placeholder}
                value={formData.struggles}
                onChange={(e) => setFormData({ ...formData, struggles: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-[2rem] p-8 text-white h-48 focus:outline-none focus:border-primary/50 transition-all text-lg placeholder:text-white/20"
              />
            </div>

            <div className="flex justify-between pt-8">
              <button onClick={prevStep} className="flex items-center gap-2 text-white/40 hover:text-white transition-colors uppercase text-xs font-bold tracking-widest">
                <ArrowLeft size={16} /> {t.controls.back}
              </button>
              <button 
                onClick={nextStep} 
                className="flex items-center gap-2 bg-primary text-background px-12 py-4 rounded-2xl font-black uppercase text-xs tracking-[0.2em] shadow-[0_0_30px_rgba(57,255,94,0.2)]"
              >
                {t.controls.next} <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        )}

        {/* FINAL STEP: CONTACT INFO */}
        {((formData.type === 'service' && step === 3) || (formData.type === 'ecommerce' && step === 4)) && (
          <motion.div
            key="final"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-8"
          >
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold text-white">{t.steps.final.title}</h2>
              <p className="text-white/40">{t.steps.final.desc}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative group">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-primary transition-colors" size={18} />
                  <input 
                    required
                    type="text"
                    placeholder={locale === 'tr' ? "Adınız Soyadınız" : "Your Name"}
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-primary/50 transition-all"
                    value={formData.contact.name}
                    onChange={(e) => setFormData({ ...formData, contact: { ...formData.contact, name: e.target.value }})}
                  />
                </div>
                <div className="relative group">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-primary transition-colors" size={18} />
                  <input 
                    required
                    type="tel"
                    placeholder={locale === 'tr' ? "Telefon Numaranız" : "Phone Number"}
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-primary/50 transition-all"
                    value={formData.contact.phone}
                    onChange={(e) => setFormData({ ...formData, contact: { ...formData.contact, phone: e.target.value }})}
                  />
                </div>
              </div>

              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-primary transition-colors" size={18} />
                <input 
                  required
                  type="email"
                  placeholder={locale === 'tr' ? "E-Posta Adresiniz" : "Email Address"}
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-primary/50 transition-all"
                  value={formData.contact.email}
                  onChange={(e) => setFormData({ ...formData, contact: { ...formData.contact, email: e.target.value }})}
                />
              </div>

              <div className="relative group">
                <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-primary transition-colors" size={18} />
                <input 
                  type="text"
                  placeholder={locale === 'tr' ? "Firma Ünvanı (İsteğe Bağlı)" : "Company Name (Optional)"}
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-primary/50 transition-all"
                  value={formData.contact.company}
                  onChange={(e) => setFormData({ ...formData, contact: { ...formData.contact, company: e.target.value }})}
                />
              </div>

              <div className="flex flex-col gap-4 pt-4">
                <button 
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-primary text-background font-black uppercase tracking-[0.2em] text-xs py-5 rounded-2xl flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 shadow-[0_0_30px_rgba(57,255,94,0.3)]"
                >
                  {isLoading ? (
                    <span className="w-5 h-5 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                  ) : (
                    <>
                      {t.steps.final.submit}
                      <CheckCircle2 size={16} />
                    </>
                  )}
                </button>
                <button 
                  type="button" 
                  onClick={prevStep}
                  className="text-white/20 hover:text-white/40 transition-colors uppercase text-[10px] font-bold tracking-widest"
                >
                  {t.controls.back}
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default InteractiveForm;
