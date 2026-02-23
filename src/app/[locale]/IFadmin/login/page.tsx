'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight, Loader2, Lock, User } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      const data = await res.json();

      if (res.ok && data.success) {
        document.cookie = "admin_session=authenticated; path=/; max-age=86400";
        router.push('/tr/IFadmin');
      } else {
        setError(data.error || "Giriş başarısız.");
        setLoading(false);
      }
    } catch (err) {
      setError("Bağlantı hatası.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center p-6 font-mono">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-10 w-full max-w-md bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] p-10 md:p-16 text-center space-y-8 shadow-2xl"
      >
        <div className="space-y-4">
          <Image src="/logo/mainlogo-ifpix.webp" alt="IFPIX" width={120} height={40} className="mx-auto brightness-150" />
          <div className="flex justify-center items-center gap-2">
            <ShieldCheck size={16} className="text-primary" />
            <span className="text-xs font-black uppercase tracking-[0.4em] text-white/40">Yönetici Girişi</span>
          </div>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="relative group">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-primary transition-colors" size={18} />
            <input 
              required
              type="text" 
              placeholder="KULLANICI ADI" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 pl-12 pr-4 text-white focus:outline-none focus:border-primary/50 transition-all text-[10px] tracking-widest uppercase font-black"
            />
          </div>

          <div className="relative group">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-primary transition-colors" size={18} />
            <input 
              required
              type="password" 
              placeholder="ŞİFRE" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 pl-12 pr-4 text-white focus:outline-none focus:border-primary/50 transition-all text-[10px] tracking-[0.5em] font-black"
            />
          </div>

          {error && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-500 text-[10px] font-black uppercase">{error}</motion.p>
          )}

          <button 
            disabled={loading}
            className="w-full bg-primary text-[#050505] font-black uppercase tracking-[0.2em] text-xs py-5 rounded-2xl flex items-center justify-center gap-3 hover:scale-[1.02] transition-all shadow-[0_0_30px_rgba(57,255,94,0.3)] disabled:opacity-50"
          >
            {loading ? <Loader2 className="animate-spin" size={18} /> : (
              <>SİSTEME GİRİŞ <ArrowRight size={16} /></>
            )}
          </button>
        </form>

        <p className="text-[10px] text-white/20 font-bold uppercase tracking-widest leading-loose">
          BU ALAN SADECE YETKİLİ PERSONEL İÇİNDİR. <br /> TÜM ERİŞİMLER KAYIT ALTINA ALINIR.
        </p>
      </motion.div>
    </div>
  );
}
