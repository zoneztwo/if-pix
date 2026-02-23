import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    // Mevcut bir admin var mı kontrol et
    const existingAdmin = await prisma.user.findUnique({
      where: { username: "admin" }
    });

    if (existingAdmin) {
      return NextResponse.json({ message: "Admin kullanıcısı zaten mevcut." });
    }

    // İlk admini oluştur
    await prisma.user.create({
      data: {
        username: "admin",
        password: "IFPIX_2026"
      }
    });

    return NextResponse.json({ message: "Admin kullanıcısı başarıyla oluşturuldu. (admin / IFPIX_2026)" });
  } catch (error) {
    return NextResponse.json({ error: "Hata oluştu." }, { status: 500 });
  }
}
