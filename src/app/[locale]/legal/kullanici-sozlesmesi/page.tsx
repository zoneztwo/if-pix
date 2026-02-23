import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default async function TermsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isTr = locale === 'tr';

  return (
    <main className="min-h-screen bg-[#050505] text-white/80 font-mono text-sm leading-relaxed">
      <Navbar />
      <div className="max-w-4xl mx-auto pt-40 pb-20 px-6 space-y-12">
        <h1 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter">
          {isTr ? 'Kullanıcı Sözleşmesi' : 'User Agreement'}
        </h1>
        
        <section className="space-y-6">
          <p>{isTr ? 'Bu internet sitesini kullanarak aşağıdaki şartları kabul etmiş sayılırsınız.' : 'By using this website, you are deemed to have accepted the following terms.'}</p>
          
          <h2 className="text-xl font-bold text-primary uppercase italic">{isTr ? '1. Hizmet Kapsamı' : '1. Service Scope'}</h2>
          <p>{isTr ? 'IFPIX, dijital ajans hizmetleri kapsamında web tasarım, yazılım ve reklam yönetimi hizmetleri sunmaktadır.' : 'IFPIX provides web design, software, and advertising management services within the scope of digital agency services.'}</p>

          <h2 className="text-xl font-bold text-primary uppercase italic">{isTr ? '2. Sorumluluklar' : '2. Responsibilities'}</h2>
          <p>{isTr ? 'Kullanıcılar, form aracılığıyla ilettikleri bilgilerin doğruluğundan sorumludur.' : 'Users are responsible for the accuracy of the information they provide via the form.'}</p>
        </section>
      </div>
      <Footer />
    </main>
  );
}
