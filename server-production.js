// Hostinger Standalone Server
const path = require('path');
process.env.NODE_ENV = 'production';

// Standalone modunda Next.js bu dosyayı otomatik oluşturur
// Eğer standalone kullanıyorsak, giriş noktasını buraya yönlendirmeliyiz
require('./server.js'); 
