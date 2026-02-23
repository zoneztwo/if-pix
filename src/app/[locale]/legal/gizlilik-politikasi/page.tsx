import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isTr = locale === 'tr';

  return (
    <main className="min-h-screen bg-[#050505] text-white/80 font-mono text-sm leading-relaxed">
      <Navbar />
      <div className="max-w-4xl mx-auto pt-40 pb-20 px-6 space-y-12">
        <h1 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter">
          {isTr ? 'Gizlilik Politikası' : 'Privacy Policy'}
        </h1>
        
        <section className="space-y-6">
          <p>{isTr ? 'Gizliliğiniz bizim için önemlidir. Verileriniz üçüncü şahıslarla paylaşılmaz.' : 'Your privacy is important to us. Your data is not shared with third parties.'}</p>
          
          <h2 className="text-xl font-bold text-primary uppercase italic">{isTr ? '1. Veri Toplama' : '1. Data Collection'}</h2>
          <p>{isTr ? 'Sadece hizmet verebilmek adına gerekli olan ad, telefon ve e-posta bilgilerini topluyoruz.' : 'We only collect name, phone, and email information necessary to provide services.'}</p>

          <h2 className="text-xl font-bold text-primary uppercase italic">{isTr ? '2. Çerezler' : '2. Cookies'}</h2>
          <p>{isTr ? 'Sitemizde kullanıcı deneyimini artırmak için temel çerezler kullanılmaktadır.' : 'Basic cookies are used on our site to improve the user experience.'}</p>
        </section>
      </div>
      <Footer />
    </main>
  );
}
