"use client";

import { useState } from "react";
import Link from "next/link";
import { GraduationCap, Menu, X, MessageCircle } from "lucide-react";
import { siteConfig, getWhatsAppUrl } from "@/config/site";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-4">
        <div className="bg-white/90 backdrop-blur-md rounded-2xl px-5 py-3.5 flex items-center justify-between border border-slate-200/80 shadow-sm">
          {/* Logo - APENAS a logomarca conforme solicitado */}
          <Link
            href="#"
            className="flex items-center gap-2.5 group focus:outline-none"
            aria-label="io-edu - Início"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#4f46e5] to-[#312e81] flex items-center justify-center text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              <GraduationCap className="w-6 h-6" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-slate-900 leading-none">
              io<span className="text-[#4f46e5]">-edu</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            {siteConfig.navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-slate-600 hover:text-[#4f46e5] transition-colors py-1"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Action Button: WhatsApp */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={getWhatsAppUrl(siteConfig.whatsapp.heroMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-sm shadow-sm transition-all transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Falar no WhatsApp</span>
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-100 animate-ping ml-1" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-600 hover:text-slate-900 md:hidden rounded-lg hover:bg-slate-100 transition-colors focus:outline-none"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mx-4 mt-2 p-5 rounded-2xl bg-white border border-slate-200 shadow-xl flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-3">
            {siteConfig.navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-700 hover:text-[#4f46e5] py-1 px-2 rounded-lg hover:bg-slate-50 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-slate-100">
            <a
              href={getWhatsAppUrl(siteConfig.whatsapp.heroMessage)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#25D366] text-white font-semibold text-sm shadow-md"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Conversar no WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
