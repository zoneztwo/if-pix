import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();

    const user = await prisma.user.findUnique({
      where: { username },
    });

    if (user && user.password === password) {
      // Profesyonel sistemde şifreler hash'lenmeli, şimdilik direkt kontrol ediyoruz.
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ success: false, error: "Hatalı kullanıcı adı veya şifre." }, { status: 401 });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Giriş başarısız." }, { status: 500 });
  }
}
