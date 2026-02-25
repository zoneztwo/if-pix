import type { Metadata } from "next";
import { Jersey_10, IBM_Plex_Mono } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "../globals.css";

const jersey10 = Jersey_10({
  weight: "400",
  subsets: ["latin", "latin-ext"],
  variable: "--font-jersey",
  display: "block",
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-mono",
  display: "block",
});

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isTr = locale === 'tr';
  const baseUrl = "https://ifpix.web";
  
  return {
    title: isTr ? "IFPIX | Web Tasarım, Google & Meta Ads, SEO Hizmetleri" : "IFPIX | Web Design, Google & Meta Ads, SEO Services",
    description: isTr 
      ? "Modern, hızlı ve satış odaklı web siteleri. Google & Meta reklam yönetimi ve SEO danışmanlığı ile işinizi büyütün." 
      : "Modern, fast and sales-oriented websites. Grow your business with Google & Meta ads management and SEO consultancy.",
    keywords: isTr 
      ? ["web tasarım", "web sitesi satışı", "google ads uzmanı", "meta reklamları", "seo danışmanlığı", "dijital ajans", "e-ticaret sitesi kurma"]
      : ["web design", "website sales", "google ads expert", "meta ads", "seo consultancy", "digital agency", "ecommerce setup"],
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        'tr': `${baseUrl}/tr`,
        'en': `${baseUrl}/en`,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: {
      icon: "/logo/favico.webp",
    },
    openGraph: {
      title: "IFPIX Digital Agency",
      description: isTr ? "Geleceğin dijital standartlarını bugünden inşa ediyoruz." : "Building the digital standards of the future today.",
      url: baseUrl,
      siteName: "IFPIX",
      images: [
        {
          url: "/logo/mainlogo-ifpix.webp",
          width: 1200,
          height: 630,
          alt: "IFPIX Digital Agency Logo",
        },
      ],
      locale: isTr ? 'tr_TR' : 'en_US',
      type: 'website',
    },
  };
}

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
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "IFPIX Digital Agency",
              "image": "https://ifpix.web/logo/mainlogo-ifpix.webp",
              "description": "Profesyonel web tasarım, yazılım ve performans pazarlama ajansı.",
              "url": "https://ifpix.web",
              "telephone": "+905300000000",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Istanbul",
                "addressCountry": "TR"
              },
              "priceRange": "$$$",
              "sameAs": [
                "https://www.instagram.com/ifpix",
                "https://www.linkedin.com/company/ifpix"
              ]
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
