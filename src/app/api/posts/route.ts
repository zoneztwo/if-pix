import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      orderBy: { createdAt: 'desc' }
    });
    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json({ error: "Liste alınamadı" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, slug, excerpt, content, category, published, image } = body;

    const newPost = await prisma.post.create({
      data: {
        title,
        slug,
        excerpt,
        content,
        category,
        published,
        image
      }
    });

    return NextResponse.json({ success: true, id: newPost.id });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Kaydedilemedi" }, { status: 500 });
  }
}
