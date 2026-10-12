import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { siteConfig } from "@/config/site";
import { StructuredData } from "@/components/StructuredData";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#4f46e5",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "io.edu — Sua Própria Plataforma de Ensino (LMS) EAD",
    template: "%s | io.edu LMS",
  },
  description:
    "Plataforma LMS completa com seu próprio domínio, zero taxas sobre vendas de cursos, recebimento direto via gateway Asaas, sala virtual moderna e aplicativos nativos para Android e iOS.",
  applicationName: "io.edu LMS",
  authors: [{ name: "io.edu", url: siteConfig.url }],
  generator: "Next.js",
  keywords: siteConfig.keywords,
  creator: "io.edu",
  publisher: "io.edu",
  category: "education",
  alternates: {
    canonical: siteConfig.url,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "io.edu — Sua Própria Plataforma de Ensino (LMS) EAD",
    description:
      "LMS completo com gestão web, sala de aula virtual moderna e aplicativos nativos para Android e iOS. Venda cursos online direto na sua conta bancária sem comissões.",
    url: siteConfig.url,
    siteName: "io.edu LMS",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/admin-clean.png",
        width: 1200,
        height: 630,
        alt: "io.edu — Plataforma LMS Moderna com Aplicativos Nativos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "io.edu — Sua Própria Plataforma de Ensino (LMS) EAD",
    description:
      "Plataforma LMS definitiva com zero taxas sobre vendas, gateway Asaas e aplicativos nativos para Android e iOS.",
    images: ["/images/admin-clean.png"],
    creator: "@ioedu",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
        <StructuredData />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
