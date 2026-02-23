'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PixelBackground from '@/components/PixelBackground';
import { Shield, Zap, Target, Users, Code2, Rocket, Globe2, Sparkles } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 30 },
  whileInView: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: [0.16, 1, 0.3, 1] 
    } 
  }
};

export default function HakkimizdaClient({ locale, dict }: { locale: 'tr' | 'en', dict: any }) {
  const isTr = locale === 'tr';

  const stats = [
    { label: isTr ? "Mutlu Müşteri" : "Happy Clients", value: "100+" },
    { label: isTr ? "Tamamlanan Proje" : "Completed Projects", value: "250+" },
    { label: isTr ? "Yıllık Tecrübe" : "Years Experience", value: "8+" },
    { label: isTr ? "Teknik Destek" : "Support", value: "7/24" },
  ];

  return (
    <main className="relative min-h-screen bg-[#050505] text-white overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-48 pb-32 px-6">
        <div className="absolute inset-0 z-0">
          <PixelBackground />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial="initial" whileInView="whileInView" variants={fadeInUp} className="space-y-8 max-w-4xl">
            <span className="text-primary text-xs font-black uppercase tracking-[0.5em] font-mono block">
              // {isTr ? 'hikayemiz' : 'our story'}
            </span>
            <h1 className="text-5xl md:text-8xl font-black uppercase italic leading-[0.9] tracking-tighter">
              Piksellerin Ötesinde <br />
              <span className="text-primary">Gelecek</span> İnşa Ediyoruz.
            </h1>
            <p className="text-xl md:text-2xl text-white/40 font-mono italic max-w-2xl leading-relaxed">
              {isTr 
                ? "Geleneksel ajans kalıplarını yıkarak, veriyi sanatla, kodu ise ticaretin gücüyle harmanlıyoruz."
                : "Breaking traditional agency molds, blending data with art and code with the power of commerce."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Deep Content Section */}
      <section className="py-20 px-6 bg-white/[0.01] border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Main Story Area */}
          <div className="lg:col-span-8 space-y-12">
            <motion.div initial="initial" whileInView="whileInView" variants={fadeInUp} className="prose prose-invert prose-primary max-w-none">
              <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter text-white mb-8">
                {isTr ? 'Dijital Bir Devrimin Parçası Olun' : 'Part of a Digital Revolution'}
              </h2>
              <div className="space-y-8 text-lg leading-[1.8] text-white/70 font-medium">
                <p>
                  {isTr 
                    ? "IFPIX, dijital dünyadaki karmaşayı sadeleştirmek ve markaların gerçek potansiyellerini ortaya çıkarmak amacıyla kurulmuş bir teknoloji ve strateji merkezidir. Bizim için her proje, sadece bir web sitesi veya bir reklam kampanyası değil; yaşayan, nefes alan ve sürekli büyüyen bir dijital ekosistemdir. Yolculuğumuza başladığımız ilk günden bu yana 'Piksel Kusursuzluğu' prensibinden asla ödün vermedik."
                    : "IFPIX is a technology and strategy hub established to simplify the complexity of the digital world and reveal the true potential of brands. For us, every project is not just a website or an advertising campaign; it is a living, breathing, and constantly growing digital ecosystem."}
                </p>
                <p>
                  {isTr
                    ? "Teknolojinin hızla değiştiği, algoritmaların her gün yenilendiği bu çağda, statik kalmak geride kalmak demektir. IFPIX olarak biz, Next.js gibi modern yazılım dilleriyle geleceğin altyapısını bugünden kuruyoruz. Google ve Meta Ads stratejilerimizde ise sadece bütçe yönetmiyoruz; veriyi anlamlandırarak her bir kuruşun markanıza satış ve itibar olarak geri dönmesini sağlıyoruz."
                    : "In an era where technology changes rapidly and algorithms are renewed every day, remaining static means falling behind. As IFPIX, we build the infrastructure of the future today with modern software languages like Next.js."}
                </p>
                <h3 className="text-2xl font-bold text-primary uppercase italic mt-12 mb-6">
                  {isTr ? 'Neden IFPIX?' : 'Why IFPIX?'}
                </h3>
                <p>
                  {isTr
                    ? "Bizi farklı kılan şey, mühendislik disiplini ile pazarlama zekasını aynı masada buluşturmamızdır. Bir e-ticaret sitesi tasarlarken sadece görselliğe değil, arka plandaki stok yönetiminin hızına, ödeme sisteminin güvenliğine ve SEO uyumluluğuna aynı anda odaklanıyoruz. Bizimle çalışan markalar, sadece bir hizmet almazlar; dijital dünyadaki tüm operasyonlarını emanet edebilecekleri güvenilir bir teknoloji ortağı kazanırlar."
                    : "What makes us different is that we bring engineering discipline and marketing intelligence together at the same table. When designing an e-commerce site, we focus not only on visuals but also on the speed of stock management, the security of the payment system, and SEO compatibility at the same time."}
                </p>
                <p>
                  {isTr
                    ? "2026 vizyonumuz doğrultusunda, yapay zeka entegrasyonlu yazılımlar ve veri odaklı reklam modelleriyle Türkiye'nin ve dünyanın önde gelen markalarına yön vermeye devam ediyoruz. Dijitalde iz bırakmak, sadece orada olmak değil, hatırlanacak işler imza atmaktır. IFPIX ile markanızın hikayesini en güçlü teknolojiyle yazmaya hazırız."
                    : "In line with our 2026 vision, we continue to guide leading brands in Turkey and the world with AI-integrated software and data-driven advertising models."}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Stats & Vision Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-primary/5 border border-primary/20 rounded-[2.5rem] p-8 md:p-10 space-y-10"
            >
              <div className="space-y-2">
                <h4 className="text-xl font-black uppercase italic tracking-tighter text-primary">
                  {isTr ? 'Rakamlarla Biz' : 'Stats'}
                </h4>
                <div className="h-1 w-12 bg-primary" />
              </div>
              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat, i) => (
                  <div key={i} className="space-y-1">
                    <p className="text-3xl font-black text-white leading-none">{stat.value}</p>
                    <p className="text-[9px] uppercase font-bold text-white/40 tracking-widest leading-tight">{stat.label}</p>
                  </div>
                ))}
              </div>
              
              <div className="pt-8 border-t border-white/5 space-y-6">
                <h4 className="text-xl font-black uppercase italic tracking-tighter text-white">
                  {isTr ? 'Vizyonumuz' : 'Our Vision'}
                </h4>
                <p className="text-sm text-white/50 leading-relaxed italic">
                  {isTr 
                    ? '"Teknolojiyi bir lüks değil, her işletme için erişilebilir ve karlı bir standart haline getirmek."'
                    : '"Making technology not a luxury, but an accessible and profitable standard for every business."'}
                </p>
              </div>
            </motion.div>

            {/* Values Mini List */}
            <div className="px-4 space-y-6">
               {[
                 { icon: Code2, t: isTr ? "Mühendislik Odağı" : "Engineering Focus" },
                 { icon: Rocket, t: isTr ? "Hızlı Teslimat" : "Fast Delivery" },
                 { icon: Globe2, t: isTr ? "Global Standartlar" : "Global Standards" },
                 { icon: Sparkles, t: isTr ? "Yaratıcı Çözümler" : "Creative Solutions" }
               ].map((v, i) => (
                 <div key={i} className="flex items-center gap-4 group">
                   <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/20 group-hover:text-primary transition-colors">
                     <v.icon size={20} />
                   </div>
                   <span className="text-xs font-black uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">{v.t}</span>
                 </div>
               ))}
            </div>
          </div>

        </div>
      </section>

      {/* Mission Section */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          <motion.div initial="initial" whileInView="whileInView" variants={fadeInUp} className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter">
              {isTr ? 'Sadece Bir Ajans Değil,' : 'Not Just An Agency,'} <br />
              <span className="text-primary">{isTr ? 'Büyüme Ortağınız.' : 'Your Growth Partner.'}</span>
            </h2>
            <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              {isTr 
                ? "Markanızı dijital dünyada sarsılmaz bir konuma taşımak için gereken tüm teknik orduya sahibiz."
                : "We have all the technical army needed to take your brand to an unshakeable position in the digital world."}
            </p>
          </motion.div>
          
          <Link 
            href={`/${locale}/iletisim`}
            className="inline-flex items-center gap-3 px-12 py-6 bg-primary text-[#050505] font-black uppercase tracking-[0.2em] text-xs rounded-2xl hover:scale-105 transition-all shadow-[0_0_50px_rgba(57,255,94,0.3)]"
          >
            {isTr ? 'BİZİMLE TANIŞIN' : 'MEET WITH US'}
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
