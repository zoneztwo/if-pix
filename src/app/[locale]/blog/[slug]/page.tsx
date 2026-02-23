import React from 'react';
import { prisma } from '@/lib/prisma';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PixelBackground from '@/components/PixelBackground';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Tag, Share2 } from 'lucide-react';
import { Metadata } from 'next';

async function getPost(slug: string) {
  return await prisma.post.findUnique({
    where: { slug, published: true }
  });
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: "Yazı Bulunamadı" };
  return {
    title: `${post.title} | IFPIX Blog`,
    description: post.excerpt
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string, locale: string }> }) {
  const { slug, locale } = await params;
  const post = await getPost(slug);

  if (!post) notFound();

  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-x-hidden">
      <Navbar />
      
      <div className="fixed inset-0 z-0 opacity-10">
        <PixelBackground />
      </div>

      {/* Header */}
      <section className="relative z-10 pt-48 pb-20 px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          <Link href={`/${locale}/blog`} className="inline-flex items-center gap-2 text-primary text-[10px] font-black uppercase tracking-widest hover:translate-x-[-5px] transition-transform">
            <ArrowLeft size={14} /> Blog'a Dön
          </Link>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-white/40">
              <span className="flex items-center gap-2 text-primary"><Tag size={12} /> {post.category}</span>
              <span className="flex items-center gap-2"><Calendar size={12} /> {new Date(post.createdAt).toLocaleDateString('tr-TR')}</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-black uppercase italic tracking-tighter leading-tight">{post.title}</h1>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 mb-20">
        <div className="aspect-[21/9] relative rounded-[3rem] overflow-hidden border border-white/5 bg-white/5">
          <Image src={post.image || '/logo/mainlogo-ifpix.webp'} alt={post.title} fill className="object-cover opacity-80" />
        </div>
      </section>

      {/* Content */}
      <section className="relative z-10 pb-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div 
            className="prose prose-invert prose-primary max-w-none 
            prose-headings:uppercase prose-headings:italic prose-headings:font-black prose-headings:tracking-tighter
            prose-h2:text-3xl prose-h2:text-primary prose-h2:mt-12 prose-h2:mb-6
            prose-p:text-lg prose-p:leading-[1.8] prose-p:text-white/70 prose-p:mb-8"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          {/* Footer of post */}
          <div className="mt-20 pt-8 border-t border-white/10 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary italic font-black">IF</div>
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-white/80">IFPIX Team</p>
                <p className="text-[10px] uppercase text-white/30 tracking-widest italic">Digital Strategy & Engineering</p>
              </div>
            </div>
            <button className="flex items-center gap-2 text-white/40 hover:text-primary transition-colors text-[10px] font-black uppercase tracking-widest">
              Paylaş <Share2 size={14} />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
