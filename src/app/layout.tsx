import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "io.edu — Sua Própria Plataforma de Ensino (LMS)",
  description:
    "Tenha sua própria plataforma EAD com seu domínio, sem cobrança de taxas sobre vendas, recebimento direto via Asaas, sala virtual moderna e aplicativos nativos para Android e iOS.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "io.edu — Sua Própria Plataforma EAD",
    description:
      "LMS completo com gestão web, sala de aula virtual moderna e aplicativos nativos para Android e iOS. Vendas direto na sua conta bancária sem comissões.",
    siteName: "io.edu",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-800">
        {children}
      </body>
    </html>
  );
}
