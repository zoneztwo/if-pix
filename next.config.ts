import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  // Standalone modunda gereksiz dosyalar temizlenir ve sunucu daha hızlı başlar.
  experimental: {
    // Turbopack ayarları veya diğer deneysel özellikler buraya eklenebilir
  }
};

export default nextConfig;
