'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  Users, User, Trash2, Phone, Mail, Package, 
  CheckCircle2, Clock, Send, ShieldCheck, 
  LogOut, LayoutDashboard, Settings, Plus, Loader2,
  FileText, ExternalLink, Eye, EyeOff
} from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function IFadminClient({ leads: initialLeads, locale }: { leads: any[], locale: string }) {
  const [leads, setLeads] = useState(initialLeads);
  const [users, setUsers] = useState<any[]>([]);
  const [posts, setPosts] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState('leads'); // leads, users, posts, settings
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Blog Form State
  const [isBlogModalOpen, setIsBlogModalOpen] = useState(false);
  const [newPost, setNewPost] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    category: 'Teknoloji',
    published: true,
    image: '/logo/mainlogo-ifpix.webp'
  });

  useEffect(() => {
    if (activeTab === 'users') fetchUsers();
    if (activeTab === 'posts') fetchPosts();
  }, [activeTab]);

  const fetchUsers = async () => {
    const res = await fetch('/api/users');
    const data = await res.json();
    setUsers(data);
  };

  const fetchPosts = async () => {
    const res = await fetch('/api/posts');
    const data = await res.json();
    setPosts(data);
  };

  const addPost = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch('/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newPost)
    });
    if (res.ok) {
      setIsBlogModalOpen(false);
      setNewPost({ title: '', slug: '', excerpt: '', content: '', category: 'Teknoloji', published: true, image: '/logo/mainlogo-ifpix.webp' });
      fetchPosts();
    }
    setLoading(false);
  };

  const deletePost = async (id: string) => {
    if (!confirm("Bu yazıyı silmek istediğinize emin misiniz?")) return;
    const res = await fetch(`/api/posts/${id}`, { method: 'DELETE' });
    if (res.ok) fetchPosts();
  };

  const togglePublish = async (post: any) => {
    const res = await fetch(`/api/posts/${post.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ published: !post.published })
    });
    if (res.ok) fetchPosts();
  };

  const updateStatus = async (id: string, newStatus: string) => {
    const res = await fetch(`/api/leads/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: newStatus })
    });
    if (res.ok) setLeads(leads.map(l => l.id === id ? { ...l, status: newStatus } : l));
  };

  const deleteLead = async (id: string) => {
    if (!confirm("Talebi silmek istediğinize emin misiniz?")) return;
    const res = await fetch(`/api/leads/${id}`, { method: 'DELETE' });
    if (res.ok) setLeads(leads.filter(l => l.id !== id));
  };

  const handleLogout = () => {
    document.cookie = "admin_session=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    router.push(`/${locale}/IFadmin/login`);
  };

  const statusMap: any = {
    "BEKLIYOR": { color: "text-amber-400 bg-amber-400/10", label: "Yeni Talep", icon: Clock },
    "ILETISIME_GECILDI": { color: "text-blue-400 bg-blue-400/10", label: "İletişime Geçildi", icon: Send },
    "SATIS_YAPILDI": { color: "text-primary bg-primary/10", label: "Satış Yapıldı", icon: ShieldCheck },
    "TAMAMLANDI": { color: "text-white/40 bg-white/5", label: "Tamamlandı", icon: CheckCircle2 }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white flex font-mono text-sm">
      {/* Sidebar */}
      <aside className="w-72 border-r border-white/5 flex flex-col p-8 hidden lg:flex h-screen sticky top-0">
        <div className="flex items-center gap-3 mb-12">
          <Image src="/logo/mainlogo-ifpix.webp" alt="IFPIX" width={80} height={24} className="brightness-125" />
          <span className="px-2 py-0.5 bg-primary text-[#050505] text-[10px] font-black uppercase rounded">Admin</span>
        </div>

        <nav className="flex-grow space-y-2">
          <button onClick={() => setActiveTab('leads')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-black uppercase text-[11px] tracking-widest transition-all ${activeTab === 'leads' ? 'bg-primary/10 text-primary' : 'text-white/40 hover:text-white hover:bg-white/5'}`}>
            <LayoutDashboard size={18} /> Talepler
          </button>
          <button onClick={() => setActiveTab('posts')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-black uppercase text-[11px] tracking-widest transition-all ${activeTab === 'posts' ? 'bg-primary/10 text-primary' : 'text-white/40 hover:text-white hover:bg-white/5'}`}>
            <FileText size={18} /> Blog Yazıları
          </button>
          <button onClick={() => setActiveTab('users')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-black uppercase text-[11px] tracking-widest transition-all ${activeTab === 'users' ? 'bg-primary/10 text-primary' : 'text-white/40 hover:text-white hover:bg-white/5'}`}>
            <Users size={18} /> Kullanıcılar
          </button>
        </nav>

        <div className="mt-auto pt-8 border-t border-white/5">
          <button onClick={handleLogout} className="flex items-center gap-2 text-red-500/60 hover:text-red-500 transition-colors uppercase font-black text-[10px]">
            <LogOut size={16} /> Çıkış Yap
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-6 md:p-12">
        <div className="max-w-6xl mx-auto space-y-12">
          
          {/* LEADS TAB */}
          {activeTab === 'leads' && (
            <div className="space-y-12">
              <h1 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter italic">Gelen <span className="text-primary">Talepler</span></h1>
              <div className="space-y-4">
                {leads.map((lead) => {
                  const Status = statusMap[lead.status] || statusMap["BEKLIYOR"];
                  return (
                    <div key={lead.id} className="group relative bg-[#0a0a0a] border border-white/5 hover:border-primary/20 rounded-[2.5rem] p-8 transition-all">
                      <div className="flex flex-col lg:flex-row justify-between gap-12 relative z-10">
                        <div className="space-y-6 min-w-[250px]">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-white/20"><User size={24} /></div>
                            <div><h3 className="font-black uppercase">{lead.name}</h3><p className="text-[10px] text-white/30 uppercase">{new Date(lead.createdAt).toLocaleDateString('tr-TR')}</p></div>
                          </div>
                          <div className="space-y-2 text-xs">
                            <a href={`tel:${lead.phone}`} className="flex items-center gap-3 text-white/60 hover:text-primary transition-colors"><Phone size={14} /> {lead.phone}</a>
                            <a href={`mailto:${lead.email}`} className="flex items-center gap-3 text-white/60 hover:text-primary transition-colors"><Mail size={14} /> {lead.email}</a>
                          </div>
                        </div>
                        <div className="flex-grow space-y-4">
                          <span className="text-xs font-black text-primary uppercase tracking-widest">{lead.plan} PAKETİ</span>
                          <div className="flex flex-wrap gap-2">
                            {(lead.features as string[]).map((f, i) => <span key={i} className="px-2 py-1 bg-white/5 rounded border border-white/5 text-[9px] text-white/40 uppercase">{f}</span>)}
                            {(lead.marketing as string[]).map((m, i) => <span key={i} className="px-2 py-1 bg-primary/10 rounded border border-primary/10 text-[9px] text-primary/60 uppercase">{m}</span>)}
                          </div>
                          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[8px] font-black uppercase tracking-widest ${lead.marketingConsent ? 'bg-green-500/10 border-green-500/20 text-green-500' : 'bg-red-500/10 border-red-500/20 text-red-500'}`}>
                            {lead.marketingConsent ? 'Kampanya Onayı: Evet' : 'Kampanya Onayı: Hayır'}
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-4">
                          <span className={`px-4 py-2 rounded-xl text-[9px] font-black uppercase flex items-center gap-2 ${Status.color}`}><Status.icon size={12} /> {Status.label}</span>
                          <select onChange={(e) => updateStatus(lead.id, e.target.value)} value={lead.status} className="bg-white/5 border border-white/10 text-[9px] font-black uppercase rounded-xl px-3 py-2 text-white/60 focus:outline-none focus:border-primary/50 cursor-pointer">
                            <option value="BEKLIYOR" className="bg-[#0a0a0a]">YENİ TALEP</option>
                            <option value="ILETISIME_GECILDI" className="bg-[#0a0a0a]">İLETİŞİME GEÇİLDİ</option>
                            <option value="SATIS_YAPILDI" className="bg-[#0a0a0a]">SATIŞ YAPILDI</option>
                            <option value="TAMAMLANDI" className="bg-[#0a0a0a]">TAMAMLANDI</option>
                          </select>
                          <button onClick={() => deleteLead(lead.id)} className="p-3 text-red-500/20 hover:text-red-500 transition-colors"><Trash2 size={18} /></button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* POSTS TAB */}
          {activeTab === 'posts' && (
            <div className="space-y-12">
              <div className="flex justify-between items-end">
                <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic">Blog <span className="text-primary">Yazıları</span></h1>
                <button 
                  onClick={() => setIsBlogModalOpen(true)}
                  className="px-8 py-4 bg-primary text-[#050505] rounded-2xl font-black uppercase text-xs flex items-center gap-2 hover:scale-105 transition-all"
                >
                  <Plus size={18} /> Yeni Yazı Ekle
                </button>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {posts.map((post) => (
                  <div key={post.id} className="bg-[#0a0a0a] border border-white/5 rounded-[2.5rem] p-8 flex flex-col md:flex-row justify-between gap-8 items-center group">
                    <div className="flex items-center gap-6">
                      <div className="w-20 h-20 bg-white/5 rounded-2xl overflow-hidden relative border border-white/5">
                        <Image src={post.image || '/logo/mainlogo-ifpix.webp'} alt={post.title} fill className="object-cover opacity-50 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <div>
                        <h3 className="text-xl font-black uppercase text-white/80">{post.title}</h3>
                        <p className="text-[10px] text-white/30 uppercase mt-1">{post.category} • {new Date(post.createdAt).toLocaleDateString('tr-TR')}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <button onClick={() => togglePublish(post)} className={`p-3 rounded-xl border transition-all ${post.published ? 'text-primary border-primary/20 bg-primary/5' : 'text-white/20 border-white/5 bg-white/5'}`}>
                        {post.published ? <Eye size={20} /> : <EyeOff size={20} />}
                      </button>
                      <button onClick={() => deletePost(post.id)} className="p-3 text-red-500/20 hover:text-red-500 border border-red-500/10 rounded-xl transition-all">
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* USERS TAB */}
          {activeTab === 'users' && (
            <div className="space-y-12">
              <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic">Admin <span className="text-primary">Yönetimi</span></h1>
              <div className="bg-[#0a0a0a] border border-white/5 rounded-[2.5rem] p-8">
                <form onSubmit={(e) => { e.preventDefault(); /* ...addUser logic */ }} className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <input required placeholder="KULLANICI ADI" className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-primary/50 text-[10px] uppercase font-black" />
                  <input required type="password" placeholder="ŞİFRE" className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-primary/50 text-[10px] uppercase font-black" />
                  <button className="bg-primary text-[#050505] rounded-xl font-black uppercase text-[10px] flex items-center justify-center gap-2 hover:scale-102 transition-all">
                    <Plus size={16} /> Kullanıcı Ekle
                  </button>
                </form>
              </div>
            </div>
          )}

        </div>
      </main>

      {/* BLOG MODAL */}
      {isBlogModalOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-background/95 backdrop-blur-xl" onClick={() => setIsBlogModalOpen(false)} />
          <div className="relative w-full max-w-4xl bg-[#0d0d0c] border border-white/10 rounded-[3rem] p-12 overflow-y-auto max-h-[90vh]">
            <h2 className="text-3xl font-black uppercase italic text-primary mb-8">Yeni Blog Yazısı</h2>
            <form onSubmit={addPost} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input required placeholder="YAZI BAŞLIĞI" value={newPost.title} onChange={(e) => setNewPost({...newPost, title: e.target.value, slug: e.target.value.toLowerCase().replace(/ /g, '-')})} className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-primary/50 outline-none" />
                <input required placeholder="SLUG (URL)" value={newPost.slug} onChange={(e) => setNewPost({...newPost, slug: e.target.value})} className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-primary/50 outline-none" />
              </div>
              <textarea required placeholder="KISA ÖZET (EXCERPT)" rows={2} value={newPost.excerpt} onChange={(e) => setNewPost({...newPost, excerpt: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-primary/50 outline-none" />
              <textarea required placeholder="ANA İÇERİK (HTML KULLANABİLİRSİNİZ)" rows={10} value={newPost.content} onChange={(e) => setNewPost({...newPost, content: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white font-mono focus:border-primary/50 outline-none" />
              <div className="flex gap-4">
                <button type="submit" disabled={loading} className="flex-grow bg-primary text-[#050505] py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-[1.02] transition-all">
                  {loading ? <Loader2 className="animate-spin mx-auto" /> : "YAYINLA"}
                </button>
                <button type="button" onClick={() => setIsBlogModalOpen(false)} className="px-10 bg-white/5 text-white py-5 rounded-2xl font-black uppercase text-xs">İPTAL</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
