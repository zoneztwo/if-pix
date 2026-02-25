import { prisma } from "@/lib/prisma";
import IFadminClient from "@/components/pages/IFadminClient";

export const dynamic = 'force-dynamic';

async function getLeads() {
  try {
    const leads = await prisma.lead.findMany({
      orderBy: { createdAt: 'desc' }
    });
    return { data: leads, error: null };
  } catch (error: any) {
    console.error("Database connection error:", error);
    return { data: null, error: error.message || "Unknown error" };
  }
}

export default async function AdminPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const { data: leads, error } = await getLeads();

  if (leads === null) {
    return (
      <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center p-6 font-mono">
        <div className="text-center space-y-4 border border-red-500/20 p-10 rounded-[2rem] bg-red-500/5">
          <h1 className="text-2xl font-black text-red-500 uppercase">Veritabanı Bağlantı Hatası</h1>
          <p className="text-white/40 text-sm max-w-md">Şu an veritabanına bağlanılamıyor. Lütfen .env dosyasındaki DATABASE_URL bilgisini ve Hostinger ortam değişkenlerini kontrol edin.</p>
          <div className="pt-4">
            <code className="text-[10px] bg-black p-2 rounded text-red-400">{error}</code>
          </div>
        </div>
      </div>
    );
  }

  const serializedLeads = JSON.parse(JSON.stringify(leads));

  return (
    <IFadminClient leads={serializedLeads} locale={locale} />
  );
}
