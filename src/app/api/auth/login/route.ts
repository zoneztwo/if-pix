import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();
    console.log("Login attempt for:", username);

    const user = await prisma.user.findUnique({
      where: { username },
    });

    if (user && user.password === password) {
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ success: false, error: "Hatalı kullanıcı adı veya şifre." }, { status: 401 });
  } catch (error: any) {
    console.error("LOGIN_ERROR:", error);
    return NextResponse.json({ success: false, error: "Giriş başarısız: " + (error.message || "Bilinmeyen hata") }, { status: 500 });
  }
}
