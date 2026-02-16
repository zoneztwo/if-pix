# IFPIX Digital Agency - Teknik Dokümantasyon

Bu proje, **IFPIX** için geliştirilmiş, yüksek performanslı, animasyon odaklı ve çok dilli (i18n) bir Next.js web uygulamasıdır.

## 🚀 Teknoloji Yığını

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS v4 (Modern CSS-first approach)
- **Animations:** Framer Motion
- **Smooth Scroll:** Lenis
- **Icons:** Lucide React
- **Typography:** Jersey 10 (Headings), IBM Plex Mono (Body/Technical)
- **Internationalization:** Custom JSON-based i18n routing

---

## 📂 Dosya Yapısı

### 1. `src/app/[locale]` (Dinamik Dil Rotaları)
Next.js'in dinamik rota yapısını kullanarak çok dilli altyapıyı yönetir.
- `layout.tsx`: Dil parametresini (`locale`) yakalayan ve global font/stil ayarlarını yapan ana şablon.
- `page.tsx`: Ana sayfa. Sunucu tarafında dil dosyasını çeker ve `HomeClient` bileşenini çağırır.
- `hakkimizda/`, `iletisim/`, `toplanti-talebi/`: Alt sayfaların sunucu bileşenleri.

### 2. `src/components` (Bileşenler)
- **`pages/`**: Sayfaların tüm etkileşimli ve animasyonlu (Client-side) mantıklarını barındırır.
- **`Navbar.tsx`**: Akıllı küçülen, canlı saat/ping verisi sunan ve dil değiştirici barındıran teknik header.
- **`PixelBackground.tsx`**: HTML5 Canvas tabanlı, otonom ve mouse duyarlı "Digital Nexus" animasyonu.
- **`ProcessModal.tsx`**: Sektör seçimli, tam ekran açılan akıllı süreç yönetim penceresi.
- **`Typewriter.tsx`**: Hero bölümündeki dinamik değişen slogan animasyonu.
- **`WhatsAppFAB.tsx`**: Yüksek dönüşüm odaklı, resmi logolu yüzen iletişim butonu.

### 3. `src/dictionaries` (Çeviri Dosyaları)
- `tr.json` / `en.json`: Sitedeki tüm metinlerin karşılıklarını barındıran ana sözlük dosyaları.

---

## 🌐 Çok Dilli Yapı (i18n) Nasıl Çalışır?

1. **Middleware (`src/middleware.ts`):** Kullanıcının tarayıcı dilini algılar ve `/tr` veya `/en` rotasına yönlendirir. Statik dosyaları (logo, font) bu işlemden muaf tutar.
2. **Dictionary (`src/get-dictionary.ts`):** Sunucu tarafında (Server Component) çağrılarak ilgili dilin JSON verisini asenkron olarak yükler.
3. **Switching:** Navbar üzerindeki dil değiştirici, mevcut URL'yi bozmadan sadece dil segmentini değiştirir.

---

## 🎨 Tema ve Tasarım Kuralları

- **Renk Paleti:**
  - Arka Plan: `#1d1d1b` (Derin Koyu)
  - Primary: `#39ff5e` (Neon Yeşil)
  - Secondary: `#c6d2f1` (Teknik Gri/Mavi)
- **Yazı Tipi Ayarları:**
  - Başlıklar (`h1`, `h2`, `h3`): Jersey 10 fontu kullanılır. Harf aralıkları global olarak `globals.css` içinde optimize edilmiştir.
  - Gövde Metni: IBM Plex Mono kullanılır (Teknik ve prestijli görünüm için).

---

## ⚙️ Geliştirme Notları

### Yeni Dil Eklemek
1. `src/dictionaries` altına yeni bir `.json` dosyası ekleyin.
2. `src/get-dictionary.ts` içindeki `dictionaries` objesine yeni dili tanımlayın.
3. `src/middleware.ts` içindeki `locales` dizisine yeni dil kodunu ekleyin.

### Performans Optimizasyonu
- Arka plandaki **Canvas** animasyonu (`PixelBackground`), düşük donanımlı cihazlarda performansı korumak için optimize edilmiştir.
- **Lenis** kütüphanesi, ağır animasyonlar esnasında kaydırma hareketinin takılmamasını sağlar.

---

## 🛠 Kurulum

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme modunda çalıştır
npm run dev

# Üretim için build al
npm run build
```

---
*Bu proje IFPIX Digital Agency için özel olarak geliştirilmiştir.*
