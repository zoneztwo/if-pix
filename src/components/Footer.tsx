import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full bg-black/40 border-t border-white/5 py-20 px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
        <div className="col-span-1 md:col-span-2 space-y-8">
          <Image 
            src="/logo/mainlogo-ifpix.webp" 
            alt="IFPIX Logo" 
            width={150} 
            height={50} 
            className="h-10 w-auto"
          />
          <p className="text-secondary max-w-sm text-sm leading-relaxed">
            Dijital dünyada iz bırakmanız için modern, hızlı ve kullanıcı odaklı web çözümleri geliştiriyoruz. Her pikselde kalite, her kodda performans.
          </p>
        </div>

        <div className="space-y-6">
          <h4 className="text-primary text-xs font-black uppercase tracking-[0.2em]">Navigasyon</h4>
          <div className="flex flex-col gap-4 text-sm text-white/50">
            <Link href="#" className="hover:text-white transition-colors">Ana Sayfa</Link>
            <Link href="#projeler" className="hover:text-white transition-colors">Projelerimiz</Link>
            <Link href="#hizmetler" className="hover:text-white transition-colors">Hizmetler</Link>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="text-primary text-xs font-black uppercase tracking-[0.2em]">İletişim</h4>
          <div className="flex flex-col gap-4 text-sm text-white/50">
            <p>hello@ifpix.web</p>
            <p>+90 (555) 000 00 00</p>
            <p>İstanbul, Türkiye</p>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-white/30 uppercase tracking-widest font-bold">
        <p>© 2026 IFPIX. Tüm Hakları Saklıdır.</p>
        <div className="flex gap-8">
          <Link href="/gizlilik" className="hover:text-white transition-colors">Gizlilik Politikası</Link>
          <Link href="/sartlar" className="hover:text-white transition-colors">Kullanım Şartları</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
