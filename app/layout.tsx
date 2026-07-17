import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hardt Studio",
  description:
    "Estratégia, conteúdo, landing pages e marketing digital para marcas que querem crescer.",
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