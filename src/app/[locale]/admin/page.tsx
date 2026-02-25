import { prisma } from "@/lib/prisma";
import { 
  Users,
  User, 
  MessageSquare, 
  Clock, 
  Trash2, 
  Phone, 
  Mail, 
  Package,
  ArrowLeft
} from "lucide-react";
import Link from "next/link";

async function getLeads() {
  return await prisma.lead.findMany({
    orderBy: { createdAt: 'desc' }
  });
}

export default async function AdminPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const leads = await getLeads();

  return (
    <div className="min-h-screen bg-[#050505] text-white p-6 md:p-12 font-mono">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <Link href={`/${locale}`} className="text-primary flex items-center gap-2 text-xs uppercase font-black hover:opacity-80 mb-4">
              <ArrowLeft size={14} /> Siteye Dön
            </Link>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
              IFPIX <span className="text-primary">ADMIN</span>
            </h1>
            <p className="text-white/40 text-xs md:text-sm">Gelen fiyat teklifi taleplerini ve müşteri leadlerini buradan yönetin.</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <p className="text-white/30 text-[10px] uppercase font-black tracking-widest mb-1">Toplam Talep</p>
              <p className="text-3xl font-black text-primary">{leads.length}</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <p className="text-white/30 text-[10px] uppercase font-black tracking-widest mb-1">Durum</p>
              <p className="text-xl font-black text-white uppercase tracking-tighter">Sistem Aktif</p>
            </div>
          </div>
        </div>

        {/* Table / List */}
        <div className="space-y-4">
          {leads.length === 0 ? (
            <div className="py-20 text-center border border-dashed border-white/10 rounded-[2rem]">
              <p className="text-white/20 uppercase font-black italic tracking-widest">Henüz talep bulunmuyor.</p>
            </div>
          ) : (
            leads.map((lead) => (
              <div key={lead.id} className="group relative bg-white/[0.02] border border-white/5 hover:border-primary/30 rounded-[2rem] p-6 md:p-8 transition-all overflow-hidden">
                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start relative z-10">
                  
                  {/* User Info */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                        <User size={20} />
                      </div>
                      <div>
                        <h3 className="font-black text-lg uppercase tracking-tight">{lead.name}</h3>
                        <p className="text-[10px] text-white/30 uppercase">{new Date(lead.createdAt).toLocaleString('tr-TR')}</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <a href={`tel:${lead.phone}`} className="flex items-center gap-2 text-xs text-white/60 hover:text-primary transition-colors">
                        <Phone size={14} /> {lead.phone}
                      </a>
                      <a href={`mailto:${lead.email}`} className="flex items-center gap-2 text-xs text-white/60 hover:text-primary transition-colors">
                        <Mail size={14} /> {lead.email}
                      </a>
                    </div>
                  </div>

                  {/* Plan & Features */}
                  <div className="lg:col-span-2 space-y-4">
                    <div className="flex items-center gap-2 text-primary">
                      <Package size={16} />
                      <span className="text-sm font-black uppercase tracking-widest">{lead.plan} PAKETİ</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {(lead.features as unknown as string[]).map((feat, i) => (
                        <span key={i} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-[10px] font-bold text-white/60 uppercase italic">
                          {feat}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {(lead.marketing as unknown as string[]).map((mark, i) => (
                        <span key={i} className="px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-lg text-[10px] font-black text-primary uppercase italic">
                          {mark}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex lg:justify-end items-center gap-4">
                    <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black text-white/40 uppercase tracking-widest">
                      {lead.status}
                    </div>
                    <button className="p-3 bg-red-500/10 text-red-500 border border-red-500/20 rounded-xl hover:bg-red-500 hover:text-white transition-all">
                      <Trash2 size={18} />
                    </button>
                  </div>

                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
}
