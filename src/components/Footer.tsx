'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Footer = () => {
  const pathname = usePathname();
  const currentLocale = pathname.split('/')[1] || 'tr';

  return (
    <footer className="w-full bg-black/40 border-t border-white/5 py-20 px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
        <div className="col-span-1 md:col-span-2 space-y-8">
          <Image 
            src="/logo/mainlogo-ifpix.webp" 
            alt="IFPIX Logo" 
            width={150} 
            height={50} 
            className="h-10 w-auto brightness-125"
          />
          <p className="text-secondary max-w-sm text-sm leading-relaxed">
            Dijital dünyada iz bırakmanız için modern, hızlı ve kullanıcı odaklı web çözümleri geliştiriyoruz. Her pikselde kalite, her kodda performans.
          </p>
        </div>

        <div className="space-y-6">
          <h4 className="text-primary text-xs font-black uppercase tracking-[0.2em]">Navigasyon</h4>
          <div className="flex flex-col gap-4 text-sm text-white/50 font-mono uppercase tracking-widest text-[10px]">
            <Link href={`/${currentLocale}`} className="hover:text-primary transition-colors">Ana Sayfa</Link>
            <Link href={`/${currentLocale}/#paketler`} className="hover:text-primary transition-colors">Paketler</Link>
            <Link href={`/${currentLocale}/#hizmetler`} className="hover:text-primary transition-colors">Hizmetler</Link>
            <Link href={`/${currentLocale}/blog`} className="hover:text-primary transition-colors">Blog</Link>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="text-primary text-xs font-black uppercase tracking-[0.2em]">İletişim</h4>
          <div className="flex flex-col gap-4 text-sm text-white/50 font-mono text-[11px]">
            <p>hello@ifpix.web</p>
            <p>+90 (530) 000 00 00</p>
            <p>İstanbul, Türkiye</p>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-white/30 uppercase tracking-widest font-black">
        <p>© 2026 IFPIX. Tüm Hakları Saklıdır.</p>
        <div className="flex gap-8">
          <Link href={`/${currentLocale}/legal/gizlilik-politikasi`} className="hover:text-white transition-colors">Gizlilik Politikası</Link>
          <Link href={`/${currentLocale}/legal/kullanici-sozlesmesi`} className="hover:text-white transition-colors">Kullanım Şartları</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
