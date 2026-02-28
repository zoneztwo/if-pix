import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { prisma } from "@/lib/prisma";

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { 
      name, 
      phone, 
      email, 
      plan, 
      features, 
      marketing, 
      marketingConsent, 
      formType,
      ...metadata 
    } = body;

    // 1. Veritabanına Kaydet
    try {
      await prisma.lead.create({
        data: {
          name: name || null,
          phone: phone || null,
          email: email || null,
          plan: plan || null,
          features: features || null,
          marketing: marketing || null,
          marketingConsent: Boolean(marketingConsent),
          formType: formType || 'Teklif',
          metadata: metadata || null,
        }
      });
    } catch (dbError) {
      console.error("DATABASE_SAVE_ERROR:", dbError);
      // Veritabanı hatası olsa bile mail atmaya devam etmesi için burada kesmiyoruz
    }

    // 2. Mail Gönder
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.hostinger.com",
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER || "teklif@if-pix.com",
        pass: process.env.SMTP_PASS,
      },
    });

    const detailsHtml = Object.entries(body).map(([key, value]) => {
      const label = key.charAt(0).toUpperCase() + key.slice(1);
      const displayValue = Array.isArray(value) ? value.join(', ') : String(value);
      return `<tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>${label}:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${displayValue}</td></tr>`;
    }).join('');

    const mailOptions = {
      from: `"IF-PIX Teklif Sistemi" <${process.env.SMTP_USER || "teklif@if-pix.com"}>`,
      to: process.env.SMTP_TO || "gelenteklif@if-pix.com",
      subject: `Yeni Talep: ${name || 'İsimsiz'} (${formType || 'Teklif'})`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
          <h2 style="color: #39FF5E; background: #000; padding: 10px; border-radius: 5px; text-align: center;">YENİ TALEP ALINDI</h2>
          <table style="width: 100%; border-collapse: collapse;">
            ${detailsHtml}
          </table>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <p style="font-size: 12px; color: #777; text-align: center;">Bu mail IFPIX web sitesinden otomatik olarak gönderilmiştir.</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("API_ERROR:", error);
    return NextResponse.json(
      { success: false, error: "Talebiniz iletilemedi." },
      { status: 500 }
    );
  }
}
