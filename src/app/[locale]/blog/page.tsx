import React from 'react';
import { prisma } from '@/lib/prisma';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PixelBackground from '@/components/PixelBackground';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar, Tag } from 'lucide-react';

async function getPosts() {
  return await prisma.post.findMany({
    where: { published: true },
    orderBy: { createdAt: 'desc' }
  });
}

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const posts = await getPosts();

  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-x-hidden">
      <Navbar />
      
      <div className="fixed inset-0 z-0 opacity-20">
        <PixelBackground />
      </div>

      {/* Hero */}
      <section className="relative z-10 pt-48 pb-20 px-6">
        <div className="max-w-7xl mx-auto space-y-6 text-center">
          <span className="text-primary text-xs font-black uppercase tracking-[0.5em] font-mono">// blog</span>
          <h1 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter">Dijital <span className="text-primary">Fikirler</span></h1>
          <p className="text-white/40 max-w-2xl mx-auto text-lg font-mono">Web, SEO ve performans pazarlaması üzerine derinlemesine rehberler.</p>
        </div>
      </section>

      {/* Grid */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.length === 0 ? (
            <div className="col-span-full py-32 text-center border border-dashed border-white/5 rounded-[3rem]">
              <p className="text-white/10 font-black italic uppercase tracking-widest">Henüz yazı yayınlanmadı.</p>
            </div>
          ) : (
            posts.map((post) => (
              <Link 
                key={post.id} 
                href={`/${locale}/blog/${post.slug}`}
                className="group bg-[#0a0a0a] border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-primary/30 transition-all flex flex-col"
              >
                <div className="aspect-[16/10] relative overflow-hidden bg-white/5">
                  <Image src={post.image || '/logo/mainlogo-ifpix.webp'} alt={post.title} fill className="object-cover opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                </div>
                <div className="p-8 space-y-4 flex-grow">
                  <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-white/30">
                    <span className="flex items-center gap-1.5 text-primary/60"><Tag size={12} /> {post.category}</span>
                    <span className="flex items-center gap-1.5"><Calendar size={12} /> {new Date(post.createdAt).toLocaleDateString('tr-TR')}</span>
                  </div>
                  <h3 className="text-2xl font-black uppercase italic leading-tight group-hover:text-primary transition-colors">{post.title}</h3>
                  <p className="text-sm text-white/40 leading-relaxed line-clamp-3">{post.excerpt}</p>
                  <div className="pt-4 flex items-center gap-2 text-primary text-[10px] font-black uppercase tracking-widest">
                    Devamını Oku <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
