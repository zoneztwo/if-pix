'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Mail, Phone, Building2, CheckCircle2 } from 'lucide-react';

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simüle edilen gönderim süreci
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-20 space-y-6 bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-12"
      >
        <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="text-primary" size={40} />
        </div>
        <h3 className="text-3xl font-bold text-white">Talebiniz Alındı!</h3>
        <p className="text-secondary/60 max-w-md mx-auto">
          Toplantı talebiniz başarıyla tarafımıza ulaştı. Ekibimiz en kısa sürede sizinle iletişime geçecektir.
        </p>
        <button 
          onClick={() => setIsSubmitted(false)}
          className="text-primary text-xs font-bold uppercase tracking-widest hover:underline"
        >
          Yeni Bir Form Gönder
        </button>
      </motion.div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-30" />
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* İsim Soyisim */}
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest ml-1">İsim Soyisim *</label>
            <div className="relative group">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-primary transition-colors" size={18} />
              <input 
                required
                type="text"
                placeholder="Adınız Soyadınız"
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 focus:bg-white/[0.08] transition-all"
              />
            </div>
          </div>

          {/* Telefon */}
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest ml-1">Telefon Numarası *</label>
            <div className="relative group">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-primary transition-colors" size={18} />
              <input 
                required
                type="tel"
                placeholder="05xx xxx xx xx"
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 focus:bg-white/[0.08] transition-all"
              />
            </div>
          </div>
        </div>

        {/* E-posta */}
        <div className="space-y-2">
          <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest ml-1">E-Posta Adresi *</label>
          <div className="relative group">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-primary transition-colors" size={18} />
            <input 
              required
              type="email"
              placeholder="ornek@mail.com"
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 focus:bg-white/[0.08] transition-all"
            />
          </div>
        </div>

        {/* Firma Ünvanı (Opsiyonel) */}
        <div className="space-y-2">
          <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest ml-1">Firma Ünvanı (İsteğe Bağlı)</label>
          <div className="relative group">
            <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-primary transition-colors" size={18} />
            <input 
              type="text"
              placeholder="Şirket Adı"
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 focus:bg-white/[0.08] transition-all"
            />
          </div>
        </div>

        <button 
          type="submit"
          disabled={isLoading}
          className="w-full bg-primary text-background font-black uppercase tracking-[0.2em] text-xs py-5 rounded-2xl flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 shadow-[0_0_30px_rgba(57,255,94,0.3)]"
        >
          {isLoading ? (
            <span className="w-5 h-5 border-2 border-background/30 border-t-background rounded-full animate-spin" />
          ) : (
            <>
              Talebi Gönder
              <Send size={16} />
            </>
          )}
        </button>

        <p className="text-[10px] text-center text-white/20 uppercase tracking-widest">
          Verileriniz KVKK kapsamında korunmaktadır.
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
