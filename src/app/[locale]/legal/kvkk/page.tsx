import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default async function KVKKPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isTr = locale === 'tr';

  return (
    <main className="min-h-screen bg-[#050505] text-white/80 font-mono text-sm leading-relaxed">
      <Navbar />
      <div className="max-w-4xl mx-auto pt-40 pb-20 px-6 space-y-12">
        <h1 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter">
          {isTr ? 'KVKK Aydınlatma Metni' : 'KVKK Clarification Text'}
        </h1>
        
        <section className="space-y-6">
          <p>{isTr ? 'IFPIX olarak, kişisel verilerinizin güvenliğine önem veriyoruz. 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında verileriniz işlenmektedir.' : 'At IFPIX, we value the security of your personal data. Your data is processed within the scope of the Personal Data Protection Law No. 6698.'}</p>
          
          <h2 className="text-xl font-bold text-primary uppercase italic">{isTr ? '1. Veri Sorumlusu' : '1. Data Controller'}</h2>
          <p>{isTr ? 'İşbu metin, veri sorumlusu sıfatıyla IFPIX tarafından hazırlanmıştır.' : 'This text is prepared by IFPIX as the data controller.'}</p>

          <h2 className="text-xl font-bold text-primary uppercase italic">{isTr ? '2. İşleme Amaçları' : '2. Purposes of Processing'}</h2>
          <p>{isTr ? 'Kişisel verileriniz; fiyat teklifi sunulması, iletişim faaliyetlerinin yürütülmesi ve hizmet kalitemizin artırılması amaçlarıyla işlenmektedir.' : 'Your personal data is processed for the purposes of providing price quotes, conducting communication activities, and improving our service quality.'}</p>

          <h2 className="text-xl font-bold text-primary uppercase italic">{isTr ? '3. Haklarınız' : '3. Your Rights'}</h2>
          <p>{isTr ? 'Kanun uyarınca; verilerinizin işlenip işlenmediğini öğrenme, düzeltilmesini isteme ve silinmesini talep etme haklarına sahipsiniz.' : 'In accordance with the law; you have the right to learn whether your data is processed, request correction, and request deletion.'}</p>
        </section>
      </div>
      <Footer />
    </main>
  );
}
