import React from 'react';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PixelBackground from '@/components/PixelBackground';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Sparkles, Zap, ShieldCheck, Target, MousePointer2, ShoppingCart, TrendingUp, Code } from 'lucide-react';

const serviceContent: any = {
  "modern-web-tasarim": {
    title: "Modern Web Tasarım ve Kullanıcı Deneyimi (UX)",
    subtitle: "Dijital Dünyada Estetik ve Performansın Kusursuz Uyumu",
    content: `
      <h2>Web Tasarımda Yeni Bir Dönem: Neden Sadece 'Güzel' Bir Site Yetmez?</h2>
      <p>Günümüzde internet kullanıcıları bir web sitesine girdiklerinde saniyeler içinde bir karar veriyorlar: Kalmalı mıyım, yoksa çıkmalı mıyım? 2026 yılına yaklaşırken web tasarım, artık sadece görsellerin yan yana dizilmesinden çok daha fazlası. IFPIX olarak biz, web tasarımını bir mühendislik sanatı olarak görüyoruz. Bir sitenin 'güzel' olması bir başlangıçtır, ancak o sitenin 'işlevsel', 'hızlı' ve 'dönüşüm odaklı' olması gerçek başarıyı getirir.</p>
      
      <p>Modern web tasarımın temel taşı kullanıcı deneyimidir (UX). Eğer kullanıcınız aradığı bilgiye 3 saniyeden kısa sürede ulaşamıyorsa, dünyanın en estetik sitesine sahip olmanızın bir önemi kalmaz. Bu nedenle tasarımlarımızda 'Piksel Kusursuzluğu' (Pixel Perfection) prensibini benimsiyoruz. Her bir butonun yerleşimi, fontların okunabilirliği ve renklerin psikolojik etkileri titizlikle hesaplanıyor.</p>

      <h2>Next.js ve React ile Geleceğin Teknolojisini Bugünden Kullanın</h2>
      <p>Teknoloji dünyası durmaksızın gelişiyor. IFPIX olarak biz, projelerimizde Next.js ve React gibi dünyanın en prestijli teknoloji yığınlarını (Tech Stack) kullanıyoruz. Peki bu sizin için ne anlama geliyor? Statik bir web sitesinden çok daha fazlasını; uygulama hızında çalışan, sayfalar arasında geçiş yaparken kullanıcının yükleme ekranı görmediği bir deneyim sunuyoruz.</p>
      
      <p>Next.js'in sunduğu 'Server-Side Rendering' (SSR) ve 'Static Site Generation' (SSG) özellikleri sayesinde, siteniz Google botları tarafından mükemmel bir şekilde okunur. Bu da web tasarım sürecinin aslında Teknik SEO ile ne kadar iç içe olduğunu kanıtlar. Hızın bir lüks değil, bir zorunluluk olduğu bu dönemde, saniyelerle yarışan bir performans sunuyoruz.</p>

      <h2>Kullanıcı Psikolojisi ve Satışa Giden Yol (Conversion Rate Optimization)</h2>
      <p>Bir web sitesinin nihai amacı nedir? Sektörünüze bağlı olarak bu; bir ürün satmak, bir randevu almak veya bir form doldurulmasını sağlamaktır. Biz buna 'Dönüşüm' diyoruz. Modern web tasarım süreçlerimizde 'Fitts Kanunu' ve 'Gutenberg Diyagramı' gibi tasarım prensiplerini kullanarak kullanıcının göz hareketlerini yönetiyoruz.</p>
      
      <p>Kullanıcıyı yormayan, karmaşadan uzak (Minimalist) ve eyleme çağrı (CTA) butonlarının stratejik olarak yerleştirildiği bir yapı, satış oranlarınızı doğrudan etkiler. Renk paletimizden animasyon hızlarımıza kadar her şey, kullanıcının güvenini kazanmak ve onu eyleme geçirmek üzere kurgulanmıştır.</p>

      <h2>Mobil Uyumluluğun Ötesi: Responsive vs. Adaptive</h2>
      <p>İnternet trafiğinin %70'inden fazlasının mobil cihazlardan geldiği bir dünyada, 'mobil uyumlu' ifadesi artık yetersiz kalıyor. Biz 'Mobile-First' (Önce Mobil) yaklaşımıyla hareket ediyoruz. Siteniz sadece telefonda düzgün görünmekle kalmıyor, aynı zamanda parmak hareketlerine duyarlı (Touch-friendly), düşük internet hızlarında bile akıcı çalışan bir yapıya bürünüyor.</p>
      
      <p>Ekran boyutları değiştikçe içeriğin sadece küçülmediği, akıllıca yeniden şekillendiği bir mimari inşa ediyoruz. Tablet, telefon veya devasa bir masaüstü ekran; her platformda markanızın prestijini koruyoruz.</p>

      <h2>Hız, SEO ve Google Lighthouse Skorları</h2>
      <p>Google, 2021 yılından itibaren 'Core Web Vitals' değerlerini bir sıralama faktörü olarak kabul etti. Yani siteniz yavaşsa, Google'da en üst sıralara çıkmanız imkansızdır. Web tasarım sürecimizin her aşamasında performansı test ediyoruz. Görselleri en yeni format olan WebP ile optimize ediyor, gereksiz kod yığınlarından kurtuluyoruz.</p>
      
      <p>IFPIX tarafından tasarlanan bir site, Google Lighthouse testlerinden yeşil skorlarla geçer. Bu sadece teknik bir başarı değil, aynı zamanda reklam maliyetlerinizi (Google Ads) düşüren bir etkendir. Çünkü kaliteli bir site, daha düşük tıklama başı maliyet (TBC) demektir.</p>

      <h2>Sonuç: Markanız İçin Bir Dijital Kale İnşa Edelim</h2>
      <p>Web siteniz, markanızın internetteki genel merkezidir. 7/24 açık olan bu mağazanın, ofisin veya portfolyonun kusursuz olması gerekir. Modern web tasarım sadece bir maliyet değil, işletmenizin geleceğine yapılan en büyük yatırımdır. IFPIX olarak biz, piksellerin gücüne inanıyoruz ve markanızı dijitalde sarsılmaz bir konuma taşımak için buradayız.</p>
    `,
    icon: <MousePointer2 className="text-primary" size={48} />,
    keywords: ["modern web tasarım", "UX tasarımı", "Next.js web sitesi", "hızlı web siteleri", "dönüşüm odaklı tasarım"]
  },
  "google-ve-meta-ads": {
    title: "Google & Meta Ads Yönetimi",
    subtitle: "Doğru Kitleye, Doğru Mesajla, En Düşük Maliyetle Ulaşın",
    content: `
      <h2>Reklam Vermek Değil, Satış Yapmak: Performans Pazarlaması Nedir?</h2>
      <p>Dijital dünyada hayatta kalmanın yolu görünür olmaktan geçer. Ancak rastgele bir görünürlük, bütçenizin boşa gitmesine neden olur. IFPIX olarak biz, Google ve Meta (Facebook, Instagram) reklamlarını sadece 'tıklama' odaklı değil, 'dönüşüm' odaklı yönetiyoruz. Bir reklamın başarısını kaç kişinin tıkladığıyla değil, kaç kişinin satın aldığıyla ölçüyoruz.</p>
      
      <p>Performans pazarlaması, verinin gücünü kullanarak her bir kuruşun hesabını vermektir. Google Ads'in karmaşık açık artırma sisteminden Meta'nın derin hedefleme algoritmalarına kadar her aşamada matematiksel modellerle hareket ediyoruz. Amacımız sadece trafik çekmek değil, markanızı büyüten sadık müşteriler yaratmaktır.</p>

      <h2>Google Ads: Arama Motorunun Gücünü Satışa Dönüştürün</h2>
      <p>Google, dünyanın en büyük 'niyet' kütüphanesidir. Bir kullanıcı Google'da arama yapıyorsa, o hizmete veya ürüne ihtiyacı var demektir. Biz bu niyeti yakalıyoruz. Google Arama Reklamları (Search), Alışveriş Reklamları (Shopping) ve Görüntülü Reklam Ağı (GDN) ile potansiyel müşterilerinizin karşısına tam da sizi aradıkları anda çıkıyoruz.</p>
      
      <p>Kalite puanınızı (Quality Score) optimize ederek, rakiplerinizden daha düşük maliyetle daha üst sıralarda yer almanızı sağlıyoruz. Anahtar kelime araştırmasından negatif anahtar kelime yönetimine, reklam metinlerinin A/B testlerinden açılış sayfası (Landing Page) uyumuna kadar tüm süreci profesyonelce yönetiyoruz.</p>

      <h2>Meta Ads: Sosyal Medyada İlgi Uyandıran Stratejiler</h2>
      <p>Facebook ve Instagram, kullanıcıların sadece zaman geçirdiği yerler değil, satın alma kararlarını verdikleri devasa pazarlardır. Meta'nın yapay zeka destekli hedefleme araçlarını kullanarak; yaş, cinsiyet, ilgi alanları ve hatta davranış modellerine göre nokta atışı yapıyoruz.</p>
      
      <p>Video içerikler, kaydırmalı (Carousel) reklamlar ve hikaye (Story) formatlarıyla markanızın hikayesini anlatıyoruz. 'Lookalike' (Benzer Hedef Kitle) çalışmalarıyla, mevcut müşterilerinize benzeyen yeni kitlelere ulaşarak pazar payınızı hızla büyütüyoruz.</p>

      <h2>Veri Takibi ve Dönüşüm API'leri (CAPI)</h2>
      <p>Çerezlerin (Cookies) yavaş yavaş tarih olduğu bir dünyada, doğru ölçümleme yapmak en büyük zorluktur. IFPIX olarak, sadece Pixel kurulumu yapmıyoruz; Meta Conversion API ve Google Enhanced Conversions kurulumlarıyla verilerinizi doğrudan sunucu üzerinden takip ediyoruz.</p>
      
      <p>Bu teknik altyapı, reklam algoritmalarının daha iyi öğrenmesini ve bütçenizi en verimli şekilde kullanmasını sağlar. Hangi reklamın hangi satışa dönüştüğünü net olarak raporluyor, belirsizliğe yer bırakmıyoruz.</p>

      <h2>Yeniden Pazarlama (Remarketing) Neden Hayati Önem Taşır?</h2>
      <p>İstatistikler gösteriyor ki, bir kullanıcı bir web sitesinden ilk ziyaretinde alışveriş yapma olasılığı oldukça düşüktür. Remarketing stratejilerimizle, sitenizi ziyaret etmiş ama henüz satın alma yapmamış kişileri hatırlatıcı reklamlarla takip ediyoruz. Sepette ürün bırakanları, hizmetlerinizi inceleyenleri özel tekliflerle geri çağırarak dönüşüm oranlarınızı katlıyoruz.</p>

      <h2>Sonuç: Bütçenizi Gidere Değil, Yatırıma Dönüştürün</h2>
      <p>Dijital reklamlar bir masraf değil, doğru yönetildiğinde en karlı yatırım aracıdır. IFPIX, bütçenizi kendi bütçesi gibi koruyan, şeffaf raporlama sunan ve sürekli optimizasyon yapan bir iş ortağıdır. Siz işinize odaklanın, biz satışlarınızı dijitalin gücüyle artıralım.</p>
    `,
    icon: <Target className="text-primary" size={48} />,
    keywords: ["google ads uzmanı", "meta reklam yönetimi", "performans pazarlama", "instagram reklamları", "facebook ads danışmanlığı", "ROAS artırma"]
  },
  "e-ticaret-cozumleri": {
    title: "Profesyonel E-Ticaret Çözümleri",
    subtitle: "Ürünlerinizi Dünyaya Satmanızı Sağlayan Akıllı Altyapılar",
    content: `
      <h2>Dijital Ticarette Başarının Sırrı: Sadece Bir Mağaza Değil, Bir Deneyim</h2>
      <p>E-ticaret, bir web sitesine ürün yüklemekten çok daha fazlasıdır. 2026'ya doğru ilerlerken rekabetin her zamankinden daha yüksek olduğu bir pazarda, müşterilerinize pürüzsüz, güvenli ve hızlı bir alışveriş deneyimi sunmak zorundasınız. IFPIX olarak biz, e-ticaret sitelerini sadece kod parçaları olarak değil, yaşayan ve sürekli satış üreten birer 'Dijital Satış Elemanı' olarak kurguluyoruz.</p>
      
      <p>Bir e-ticaret sitesinin başarısı; sayfa hızı, sepetten vazgeçme oranlarının düşüklüğü ve ödeme adımına kadar geçen sürenin kısalığı ile ölçülür. Tasarımlarımızda kullanıcı psikolojisini merkeze alarak, ziyaretçiyi yormadan doğrudan 'Satın Al' butonuna yönlendiren bir akış inşa ediyoruz.</p>

      <h2>Ölçeklenebilir ve Güvenli Altyapı</h2>
      <p>İşiniz büyüdükçe e-ticaret sitenizin de buna ayak uydurması gerekir. Kullandığımız modern teknoloji yığınları sayesinde, aynı anda binlerce ziyaretçinin sitenizde gezindiği 'Kampanya Günleri' veya 'Black Friday' gibi yoğun dönemlerde bile donma veya çökme yaşanmaz. Güvenlik tarafında ise SSL sertifikaları, 3D Secure ödeme altyapıları ve güncel veri koruma standartlarıyla hem sizin hem de müşterilerinizin verilerini koruma altına alıyoruz.</p>

      <h2>Entegrasyonların Gücü: Operasyonunuzu Otomatize Edin</h2>
      <p>E-ticaret sadece ön yüzden ibaret değildir; arka planda çalışan dev bir çark vardır. IFPIX e-ticaret çözümleri; stok takibi, kargo entegrasyonları, ödeme sistemleri (Iyzico, PayTR vb.) ve muhasebe yazılımlarıyla tam uyumlu çalışır. Bu sayede sipariş geldiği anda fatura otomatik kesilir, kargo barkodu oluşur ve stoklarınız tüm kanallarda güncellenir. Siz operasyonla değil, markanızı büyütmekle ilgilenirsiniz.</p>

      <h2>Mobil E-Ticaret ve Dönüşüm Odaklılık</h2>
      <p>E-ticaret satışlarının %80'inden fazlasının mobil cihazlardan gerçekleştiğini biliyor muydunuz? Biz 'Mobile-First' yaklaşımıyla, telefon ekranında bir uygulama kadar hızlı ve kolay kullanılan arayüzler tasarlıyoruz. Tek tıkla ödeme, Apple Pay / Google Pay entegrasyonları ve hızlı üyelik seçenekleriyle mobil kullanıcıları müşteriye dönüştürüyoruz.</p>

      <h2>SEO ve Veri Analitiği ile Satışları Artırın</h2>
      <p>Dünyanın en iyi ürününü satsanız bile, kimse sizi bulamazsa satış yapamazsınız. E-ticaret çözümlerimiz, teknik SEO altyapısı hazır şekilde teslim edilir. Ürün sayfalarınızın Google'da üst sıralarda çıkması için gerekli tüm şema yapıları (Schema markup) ve meta veri optimizasyonları yapılmıştır. Ayrıca, gelişmiş analitik araçlarıyla müşterilerinizin hangi üründe daha çok vakit geçirdiğini, nerede sepeti bıraktığını görebilir ve bu verilere göre strateji geliştirebilirsiniz.</p>

      <h2>Sonuç: Küresel Pazara Açılmaya Hazır mısınız?</h2>
      <p>IFPIX ile kurulan bir e-ticaret sitesi, sadece yerel değil, çoklu dil ve para birimi desteğiyle global bir mağazadır. Sınırları aşmak ve ürünlerinizi tüm dünyaya ulaştırmak için gereken her şeyi tek bir pakette sunuyoruz. Dijital dünyadaki mağazanızı bugün inşa edelim, geleceği birlikte şekillendirelim.</p>
    `,
    icon: <ShoppingCart className="text-primary" size={48} />,
    keywords: ["e-ticaret sitesi kurma", "online satış altyapısı", "ödeme sistemleri entegrasyonu", "kargo entegrasyonu", "satış odaklı web tasarım", "B2B ve B2C çözümler"]
  },
  "teknik-seo": {
    title: "Teknik SEO ve Görünürlük Stratejileri",
    subtitle: "Google'ın Dilinden Konuşun, Zirvedeki Yerinizi Ayırtın",
    content: `
      <h2>SEO Sadece Anahtar Kelime Değildir: Buzdağının Görünmeyen Kısmı</h2>
      <p>Pek çok kişi SEO'yu (Arama Motoru Optimizasyonu) sadece yazıların içine anahtar kelimeler serpiştirmek olarak görür. Ancak modern SEO dünyasında bu, buzdağının sadece görünen ucudur. IFPIX olarak biz, SEO sürecini web sitenizin temellerinden, yani kod satırlarından başlatıyoruz. Teknik SEO, bir web sitesinin Google botları tarafından ne kadar kolay 'taranabildiği' ve 'anlaşılabildiği' ile ilgilidir.</p>
      
      <p>Bir bina inşa ederken temeli ne kadar sağlamsa, üzerine o kadar çok kat çıkabilirsiniz. Web siteniz için de durum aynıdır. Teknik altyapınız kusurluysa, ne kadar kaliteli içerik üretirseniz üretin, Google sizi asla hak ettiğiniz yere taşımayacaktır. Biz, sitenizin Google ile kusursuz bir iletişim kurmasını sağlıyoruz.</p>

      <h2>Core Web Vitals: Hız ve Deneyim Artık Bir Sıralama Faktörü</h2>
      <p>Google artık sadece 'ne' anlattığınıza değil, kullanıcınıza 'nasıl' bir deneyim sunduğunuza da bakıyor. Core Web Vitals (Önemli Web Verileri) olarak adlandırılan LCP, FID ve CLS metrikleri, 2026 dünyasında bir web sitesinin can damarıdır. Sayfanızın ne kadar hızlı yüklendiği, etkileşime ne kadar sürede girdiği ve yükleme sırasında elemanların kayıp kaymadığı (Layout Shift) sıralamanızı doğrudan etkiler.</p>
      
      <p>IFPIX projelerinde Next.js kullanmamızın en büyük sebeplerinden biri de budur. Sunduğumuz statik üretim ve görsel optimizasyon teknikleriyle, Google Lighthouse testlerinden tam puan alarak rakiplerinizin önüne geçmenizi sağlıyoruz.</p>

      <h2>Anlamlı Veri Yapıları: JSON-LD Schema Markup</h2>
      <p>Google botları sitenizi ziyaret ettiğinde, orada bir 'ürün' mü, bir 'tarif' mi yoksa bir 'şirket profili' mi olduğunu anlamak ister. Biz, sitenizin her köşesini 'Schema.org' standartlarına uygun JSON-LD veri yapılarıyla donatıyoruz. Bu sayede arama sonuçlarında sadece bir link olarak değil; yıldızlı puanlar, fiyat bilgileri veya SSS (Sıkça Sorulan Sorular) bölümleriyle zenginleştirilmiş şekilde (Rich Snippets) görünürsünüz.</p>
      
      <p>Bu zengin görünüm, tıklama oranlarınızı (CTR) artırarak organik trafiğinizi daha da yukarılara taşır. Google'a sitenizi tam olarak anlatmanız için gereken tüm teknik çeviriyi biz yapıyoruz.</p>

      <h2>Site Mimarisi ve Tarama Bütçesi (Crawl Budget) Optimizasyonu</h2>
      <p>Büyük bir web siteniz varsa, Google'ın sitenize ayırdığı tarama süresi sınırlıdır. Eğer site mimariniz karmaşıksa, botlar önemli sayfalarınıza ulaşamadan sitenizden çıkabilir. Biz, 'Silolar' (Silo Structure) ve mantıklı iç linkleme (Internal Linking) stratejileriyle sitenizin haritasını botlar için bir otobana çeviriyoruz.</p>
      
      <p>Gereksiz sayfaları (Noindex), 404 hatalarını ve yönlendirme zincirlerini temizleyerek Google'ın tarama bütçesini sadece size para kazandıracak değerli sayfalara harcamasını sağlıyoruz. Kusursuz bir XML Site Haritası ve Robots.txt yapılandırmasıyla kontrolü elimizde tutuyoruz.</p>

      <h2>Otorite Kazanma ve İçerik Stratejisi</h2>
      <p>Teknik temeller atıldıktan sonra sıra otorite kazanmaya gelir. E-E-A-T (Deneyim, Uzmanlık, Yetkinlik ve Güvenilirlik) prensiplerine uygun bir içerik stratejisi geliştiriyoruz. Sektörünüzde bir otorite olmanız için gereken 'Semantik SEO' çalışmalarını yürütüyor, hangi konularda içerik üretmeniz gerektiğini veri analizleriyle belirliyoruz.</p>

      <h2>Sonuç: Arama Sonuçlarında Tesadüfe Yer Bırakmayın</h2>
      <p>SEO, sabır ve hassasiyet gerektiren teknik bir süreçtir. IFPIX olarak biz, Google algoritmalarını sürekli takip ediyor ve sitenizi bu değişimlere anlık olarak hazırlıyoruz. Sadece trafik değil, 'nitelikli' trafik çekmek için veriye dayalı SEO çözümlerimizle tanışın. Sektörünüzde zirveye çıkmak bir tercih değil, bir strateji meselesidir.</p>
    `,
    icon: <TrendingUp className="text-primary" size={48} />,
    keywords: ["teknik SEO uzmanı", "Core Web Vitals optimizasyonu", "Google sıralama artırma", "JSON-LD şema yapısı", "site hızı iyileştirme", "arama motoru optimizasyonu"]
  },
  "ozel-yazilim": {
    title: "Özel Yazılım Geliştirme",
    subtitle: "İşletmenize Özel Terzi Dikimi Dijital Çözümler",
    content: `
      <h2>Hazır Paketlerin Ötesi: Neden Özel Yazılıma İhtiyacınız Var?</h2>
      <p>Pek çok işletme işe hazır paket yazılımlarla başlar. Ancak işiniz büyüdükçe ve süreçleriniz karmaşıklaştıkça, hazır kalıplar ayağınıza dolanmaya başlar. IFPIX olarak biz, yazılımı işletmenizin etrafına inşa ediyoruz; işletmenizi yazılımın sınırlarına hapsetmiyoruz. Özel yazılım, sadece kod yazmak değil, bir iş problemini en verimli şekilde teknolojiyle çözmektir.</p>
      
      <p>Özel bir yazılıma sahip olmak, rakiplerinizin kullanamadığı özelliklere sahip olmak demektir. Size hız kazandıran, manuel hataları sıfıra indiren ve personelin verimliliğini artıran bir dijital ekosistem kuruyoruz. Bu, bir maliyet değil, operasyonel mükemmelliğe giden yoldaki en güçlü silahınızdır.</p>

      <h2>Ölçeklenebilir Mimari: Yarını Bugünden Planlayın</h2>
      <p>Bugün 100 kullanıcıya hizmet veren sisteminiz, yarın 100.000 kullanıcıya çıktığında çökmemelidir. Biz, yazılım mimarilerimizi 'Scalability' (Ölçeklenebilirlik) üzerine kuruyoruz. Mikroservis mimarileri, bulut bilişim (Cloud) çözümleri ve optimize edilmiş veritabanı tasarımlarıyla, büyüme sancılarını teknik birer avantaja dönüştürüyoruz.</p>
      
      <p>Next.js, Node.js, Python ve Go gibi modern dilleri kullanarak; güvenliği en üst seviyede tutan, hızlı ve sürdürülebilir sistemler inşa ediyoruz. Kod kalitemiz, sistemin yıllar boyu kolayca güncellenebilir ve geliştirilebilir olmasını garanti eder.</p>

      <h2>İş Süreçleri Otomasyonu ve Dijital Dönüşüm</h2>
      <p>Personelinizin her gün saatlerini harcadığı rutin işleri dijital asistanlara devretmeye ne dersiniz? Özel yazılımlarımızla; stok yönetiminden müşteri ilişkilerine (CRM), finansal raporlamadan lojistik takibine kadar tüm süreçlerinizi otomatiğe bağlıyoruz. Verilerin manuel girildiği değil, sistemlerin birbiriyle konuştuğu bir yapı kuruyoruz.</p>
      
      <p>Yapay zeka (AI) entegrasyonlarıyla verilerinizi analiz ediyor, geleceğe yönelik tahminlemeler sunuyoruz. Dijital dönüşüm, sadece kağıttan ekrana geçmek değil, veriyi paraya dönüştüren akıllı algoritmalar kullanmaktır.</p>

      <h2>Güvenlik ve Veri Entegrasyonu</h2>
      <p>Siber saldırıların arttığı bir dönemde, verilerinizin güvenliği bizim için opsiyonel değil, birincil önceliktir. OWASP standartlarına uygun kod geliştiriyor, veritabanı şifreleme ve gelişmiş yetkilendirme katmanları (RBAC) ile sisteminizi bir kale gibi koruyoruz.</p>
      
      <p>Ayrıca, mevcut kullandığınız ERP, muhasebe veya kargo sistemleriyle yazılımınızı tam entegre çalıştırıyoruz. API tabanlı mimarimiz sayesinde, dış dünyadaki tüm servislerle pürüzsüz bir veri alışverişi sağlıyoruz. Bu sayede tüm verileriniz tek bir merkezden, hatasız yönetiliyor.</p>

      <h2>Butik Yaklaşım: Sizinle Birlikte Geliştiriyoruz</h2>
      <p>Yazılım süreci bizim için bir sipariş değil, bir yol arkadaşlığıdır. İhtiyaçlarınızı analiz ediyor, prototipler hazırlıyor ve çevik (Agile) metodolojilerle sizi sürecin her aşamasına dahil ediyoruz. Yazılım tamamlandığında, personelinize gerekli eğitimleri veriyor ve sistemin yaşam döngüsü boyunca teknik destek sunmaya devam ediyoruz.</p>

      <h2>Sonuç: Teknolojiyi Rekabet Avantajına Dönüştürün</h2>
      <p>Kendi yazılımına sahip olan şirketler, pazarın kurallarını koyan şirketlerdir. IFPIX olarak biz, vizyonunuzu koda döküyor ve hayallerinizdeki iş modelini gerçeğe dönüştürüyoruz. Sizi sınırlayan hazır yazılımlardan kurtulun, markanızın potansiyelini özel yazılımın sınırsız dünyasıyla ortaya çıkarın.</p>
    `,
    icon: <Code className="text-primary" size={48} />,
    keywords: ["özel yazılım geliştirme", "CRM ve ERP çözümleri", "iş otomasyon sistemleri", "web tabanlı yazılım", "API entegrasyonu", "ölçeklenebilir backend mimarisi"]
  },
  "7-24-teknik-destek": {
    title: "Kesintisiz 7/24 Teknik Destek",
    subtitle: "Siz Uyurken Bile Sisteminizi Koruyan Dijital Muhafızlar",
    content: `
      <h2>Dijitalde Duraksamaya Yer Yok: Neden Sürekli Destek?</h2>
      <p>Bir web sitesinin veya yazılımın yayına girmesi, yolculuğun sadece ilk adımıdır. Gerçek sınav, sistemin binlerce kullanıcı altındaki performansı, anlık trafik artışları ve siber dünyanın bitmek bilmeyen tehditleri karşısında başlar. IFPIX olarak biz, teslim ettiğimiz hiçbir projeyi kendi haline bırakmıyoruz. Teknik destek hizmetimiz, işletmenizin dijital kalbinin her saniye pürüzsüz atmasını sağlar.</p>
      
      <p>İnternet dünyası asla uyumaz. Gece yarısı oluşabilecek bir sunucu hatası veya sabahın erken saatlerinde yapılabilecek bir siber saldırı, markanızın prestijine ve satışlarına ciddi zararlar verebilir. Biz, 7/24 aktif izleme sistemlerimizle, sorunlar daha siz fark etmeden müdahale ediyor ve dijital varlığınızı koruyoruz.</p>

      <h2>Proaktif İzleme ve Anlık Müdahale</h2>
      <p>Bizim destek anlayışımız sadece 'bozulunca tamir etmek' değildir. Biz 'Proaktif İzleme' yapıyoruz. Sunucu yüklerini, veritabanı performansını ve güvenlik açıklarını sürekli tarıyoruz. Bir sistemin yavaşlamaya başladığını gördüğümüzde, henüz bir hata oluşmadan kapasite artırımı veya kod optimizasyonu yaparak akışın bozulmasını engelliyoruz.</p>
      
      <p>Anlık bir kesinti durumunda ise teknik ekibimiz dakikalar içinde müdahale eder. Amacımız 'Uptime' (Çalışma Süresi) oranını %99.9 seviyesinde tutarak, müşterilerinizin size ulaşamadığı tek bir an bile olmamasını sağlamaktır.</p>

      <h2>Güvenlik Güncellemeleri ve Bakım</h2>
      <p>Yazılım dilleri, framework'ler ve kütüphaneler sürekli güncellenir. Bu güncellemelerin bir kısmı yeni özellikler getirirken, büyük bir kısmı kritik güvenlik açıklarını kapatır. IFPIX destek ekibi, sisteminizin kullandığı tüm teknolojileri güncel tutar. Periyodik bakımlarımızla sistemin 'sağlık taramasını' yapar, gereksiz şişmiş verileri temizler ve kod yapısını en yeni standartlara uyarlarız.</p>
      
      <p>Siber saldırganlar her gün yeni yöntemler geliştiriyor. Biz de bu yöntemlere karşı güvenlik duvarlarınızı (Firewall) sürekli güçlendiriyor ve SSL sertifikalarından veri şifreleme protokollerine kadar her katmanı denetliyoruz.</p>

      <h2>Yedekleme Stratejileri (Disaster Recovery)</h2>
      <p>En kötü senaryoya her zaman hazırız. Sisteminize bir zarar gelse, veritabanınız silinse veya sunucunuz çökse bile; verileriniz bizimle güvende. Günlük, haftalık ve anlık yedekleme senaryolarımız sayesinde, herhangi bir felaket durumunda sisteminizi en son çalışan haline dakikalar içinde geri döndürebiliyoruz.</p>
      
      <p>Veri kaybı, bir işletme için telafisi en zor süreçtir. Biz bu riski tamamen ortadan kaldırıyor, verilerinizin dünyanın farklı noktalarındaki güvenli bulut sunucularda yedekli şekilde saklanmasını sağlıyoruz.</p>

      <h2>Uzman Ekip, İnsan Odaklı Çözüm</h2>
      <p>Teknik destek denildiğinde karşınıza otomatik mesajlar veya botlar çıkmaz. IFPIX bünyesindeki gerçek yazılım mühendisleri ve sistem yöneticileriyle doğrudan iletişim kurarsınız. İhtiyaç duyduğunuzda telefonun ucunda veya mesajın diğer tarafında sorunu anlayan ve hızla çözüm üreten bir muhatabınızın olması, en büyük konforunuzdur.</p>

      <h2>Sonuç: Siz İşinize Odaklanın, Teknolojiyi Bize Bırakın</h2>
      <p>Teknik sorunlarla uğraşmak, asıl işinize ayırmanız gereken zamanı çalar. IFPIX 7/24 Teknik Destek hizmetiyle, arkanızda her zaman güçlü bir mühendislik ordusu olduğunu bilirsiniz. Biz teknolojinin karmaşasını yönetirken, siz markanızı büyütmeye odaklanın. Dijital dünyadaki huzurunuz bizim sorumluluğumuzdadır.</p>
    `,
    icon: <ShieldCheck className="text-primary" size={48} />,
    keywords: ["7/24 teknik destek", "web sitesi bakımı", "sunucu yönetimi", "siber güvenlik desteği", "veri yedekleme çözümleri", "proaktif izleme"]
  }
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string, locale: string }> }): Promise<Metadata> {
  const { slug, locale } = await params;
  const content = serviceContent[slug];
  
  if (!content) return { title: "Hizmet Bulunamadı" };

  return {
    title: `${content.title} | IFPIX`,
    description: `${content.subtitle}. Profesyonel çözümler için IFPIX yanınızda.`,
    keywords: content.keywords
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string, locale: string }> }) {
  const { slug, locale } = await params;
  const content = serviceContent[slug];

  if (!content) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-x-hidden">
      <Navbar />
      
      {/* Background Effect */}
      <div className="fixed inset-0 z-0 opacity-30">
        <PixelBackground />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-40 pb-20 px-6">
        <div className="max-w-5xl mx-auto space-y-8">
          <Link href={`/${locale}/#hizmetler`} className="inline-flex items-center gap-2 text-primary text-[10px] font-black uppercase tracking-widest hover:translate-x-[-5px] transition-transform">
            <ArrowLeft size={14} /> Tüm Hizmetler
          </Link>
          
          <div className="space-y-4">
            <h1 className="text-4xl md:text-7xl font-black uppercase italic leading-tight tracking-tighter">
              {content.title.split(' ').map((word: string, i: number) => (
                <span key={i} className={i % 3 === 0 ? "text-primary" : "text-white"}>{word} </span>
              ))}
            </h1>
            <p className="text-xl md:text-2xl text-white/40 font-mono italic">{content.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <section className="relative z-10 py-20 px-6 bg-white/[0.01] border-y border-white/5">
        <div className="max-w-4xl mx-auto">
          <div 
            className="prose prose-invert prose-primary max-w-none 
            prose-headings:uppercase prose-headings:italic prose-headings:font-black prose-headings:tracking-tighter
            prose-h2:text-3xl prose-h2:text-primary prose-h2:mt-16 prose-h2:mb-8
            prose-p:text-lg prose-p:leading-[1.8] prose-p:text-white/70 prose-p:mb-8
            prose-strong:text-white prose-strong:font-black"
            dangerouslySetInnerHTML={{ __html: content.content }}
          />
          
          {/* CTA Box */}
          <div className="mt-20 p-8 md:p-12 bg-primary/10 border border-primary/20 rounded-[3rem] text-center space-y-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
              {content.icon}
            </div>
            <h3 className="text-3xl font-black uppercase italic tracking-tighter">Sizin İçin de Kusursuz Bir Site İnşa Edelim</h3>
            <p className="text-white/60 max-w-xl mx-auto">Modern teknolojilerle markanızı dijital dünyada zirveye taşıyalım. 24 saat içinde size özel stratejimizi hazırlayalım.</p>
            <Link 
              href={`/${locale}/iletisim`}
              className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-[#050505] font-black uppercase tracking-[0.2em] text-xs rounded-2xl hover:scale-105 transition-all shadow-[0_0_30px_rgba(57,255,94,0.3)]"
            >
              TEKLİF ALIN <ArrowLeft className="rotate-180" size={16} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
