// Hostinger Next.js Standalone Başlatıcı
const path = require('path');
const fs = require('fs');

console.log("=== IFPIX SUNUCUSU BAŞLATILIYOR ===");
console.log("Node Versiyonu:", process.version);
console.log("Çalışma Dizini:", process.cwd());

// Hostinger portu otomatik atar (genelde litespeed vb.)
const port = process.env.PORT || 3000;
process.env.PORT = port;
process.env.NODE_ENV = 'production';

// Standalone modunda Next.js kendi server.js dosyasını .next/standalone içine oluşturur.
// Ancak bizim GitHub Action'ımız onu zaten ana dizine taşıyor.
const standaloneServerPath = path.join(__dirname, 'server.js');

try {
  // Eğer bu dosyanın adı server.js ise, Next.js'in ürettiği server.js üzerine yazılmış demektir (Doğru senaryo)
  // Ancak eğer bu kendi yazdığımız dosyaysa, uygulamanın çökmemesi için basit bir HTTP sunucusu açalım
  console.log("Port ayarlandı:", port);
  
  // Hostinger'a uygulamanın başladığını bildiren basit bir sunucu (Eğer Next.js başlayamazsa en azından 503 yerine bu hata mesajını görürsünüz)
  const http = require('http');
  const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('IFPIX Sunucusu Çalışıyor, ancak Next.js Standalone dosyaları henüz yüklenmedi veya bir hata var. Lütfen GitHub Actions Deploy işleminin bitmesini bekleyin.');
  });

  server.listen(port, () => {
    console.log(`Geçici kurtarma sunucusu port ${port} üzerinde çalışıyor.`);
  });

} catch (error) {
  console.error("KRİTİK BAŞLATMA HATASI:", error);
  process.exit(1);
}
