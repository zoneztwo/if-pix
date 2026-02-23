import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const users = await prisma.user.findMany({
      select: { id: true, username: true } // Şifreyi gönderme
    });
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json({ error: "Liste alınamadı" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();
    const newUser = await prisma.user.create({
      data: { username, password }
    });
    return NextResponse.json({ success: true, id: newUser.id });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Kullanıcı oluşturulamadı" }, { status: 500 });
  }
}
