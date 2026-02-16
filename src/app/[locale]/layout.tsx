import type { Metadata } from "next";
import { Jersey_10, IBM_Plex_Mono } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "../globals.css";

const jersey10 = Jersey_10({
  weight: "400",
  subsets: ["latin", "latin-ext"],
  variable: "--font-jersey",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "IFPIX | Web Tasarım & Yazılım",
  description: "Modern, hızlı ve etkileyici web çözümleri.",
  icons: {
    icon: "/logo/favico.webp",
  },
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <html lang={locale} className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "IFPIX Digital Agency",
              "image": "https://ifpix.web/logo/mainlogo-ifpix.webp",
              "description": "Profesyonel web tasarım ve yazılım ajansı.",
              "url": "https://ifpix.web",
              "telephone": "+905550000000"
            })
          }}
        />
      </head>
      <body className={`${jersey10.variable} ${ibmPlexMono.variable} antialiased selection:bg-primary selection:text-background`}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
