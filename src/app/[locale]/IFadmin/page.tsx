import { prisma } from "@/lib/prisma";
import IFadminClient from "@/components/pages/IFadminClient";

async function getLeads() {
  return await prisma.lead.findMany({
    orderBy: { createdAt: 'desc' }
  });
}

export default async function AdminPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const leads = await getLeads();

  // JSON verilerini serialize etmemiz gerekebilir (Prisma Json tipi için)
  const serializedLeads = JSON.parse(JSON.stringify(leads));

  return (
    <IFadminClient leads={serializedLeads} locale={locale} />
  );
}
