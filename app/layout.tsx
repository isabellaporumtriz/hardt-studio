import type { Metadata } from "next";
import "./globals.css";

export const metadata = {
  title: "Hardt Studio | Marketing Digital que gera resultados",

  description:
    "Criamos landing pages, estratégias de marketing digital e posicionamento para empresas que querem crescer de verdade.",

  keywords: [
    "marketing digital",
    "landing page",
    "site profissional",
    "gestão de redes sociais",
    "branding",
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
    title: "Hardt Studio",

    description:
      "Marketing Digital • Landing Pages • Estratégia • Conteúdo",

    url: "https://SEUDOMINIO.com",

    siteName: "Hardt Studio",

    locale: "pt_BR",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hardt Studio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Hardt Studio",

    description:
      "Marketing Digital • Landing Pages • Estratégia",

    images: ["/og-image.jpg"],
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