import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, plan, features, marketing, marketingConsent } = body;

    const newLead = await prisma.lead.create({
      data: {
        name,
        phone,
        email,
        plan,
        features,
        marketing,
        marketingConsent: Boolean(marketingConsent),
      },
    });

    return NextResponse.json({ success: true, id: newLead.id });
  } catch (error) {
    console.error("LEAD_CREATE_ERROR:", error);
    return NextResponse.json(
      { success: false, error: "Talebiniz kaydedilemedi." },
      { status: 500 }
    );
  }
}
