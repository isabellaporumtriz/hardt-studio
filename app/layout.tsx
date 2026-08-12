import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hardt-studio.vercel.app"),

  title: "Hardt Studio | Landing Pages e Marketing Digital",

  description:
    "Criamos landing pages, experiências digitais e estratégias para empresas que querem comunicar melhor, gerar confiança e crescer.",

  keywords: [
    "landing page",
    "landing pages",
    "criação de landing page",
    "site profissional",
    "marketing digital",
    "branding",
    "design estratégico",
    "Hardt Studio",
    "criação de sites",
  ],

  authors: [
    {
      name: "Hardt Studio",
    },
  ],

  creator: "Hardt Studio",

  openGraph: {
    title: "Hardt Studio | Landing Pages e Marketing Digital",

    description:
      "Landing Pages • Branding • Conteúdo • Estratégia",

    url: "https://hardt-studio.vercel.app",

    siteName: "Hardt Studio",

    locale: "pt_BR",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hardt Studio | Landing Pages e Marketing Digital",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Hardt Studio | Landing Pages e Marketing Digital",

    description:
      "Landing Pages • Branding • Conteúdo • Estratégia",

    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
