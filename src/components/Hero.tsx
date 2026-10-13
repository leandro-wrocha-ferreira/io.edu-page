"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  MessageCircle,
  Sparkles,
  Smartphone,
  Globe,
  ChevronRight,
  Monitor,
  LayoutDashboard,
  Percent,
  Wallet,
  Play,
  Apple,
} from "lucide-react";
import { siteConfig, getWhatsAppUrl } from "@/config/site";

export function Hero() {
  const [activeTab, setActiveTab] = useState<"classroom" | "admin" | "mobile">(
    "classroom"
  );
  const [mobileOS, setMobileOS] = useState<"ios" | "android">("ios");
  const [isPaused, setIsPaused] = useState(false);

  // Auto-rotação suave entre as abas do Hero para visualização interativa e animada
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveTab((current) => {
        if (current === "classroom") return "admin";
        if (current === "admin") return "mobile";
        return "classroom";
      });
    }, 7000);

    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200/80 grid-pattern-light">
      {/* Background soft ambient glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[250px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Tag */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs sm:text-sm font-semibold mb-6 shadow-xs">
            <Sparkles className="w-4 h-4 text-[#4f46e5]" />
            <span>Sua Própria Plataforma EAD</span>
            <span className="text-slate-300">•</span>
            <span className="text-emerald-600 font-bold">0% de Taxa sobre Vendas</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 max-w-4xl leading-[1.12] mb-6">
            Venda seus cursos no seu próprio domínio,{" "}
            <span className="text-[#4f46e5]">sem comissões</span> sobre o seu faturamento.
          </h1>

          {/* Subtitle - Item 1: Atualizado focado em aplicações nativas Android e iOS */}
          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl leading-relaxed mb-9">
            Tudo o que você vende é <strong>100% seu</strong>, com pagamentos caindo direto na sua conta via Asaas. Tenha gestão web completa, sala de aula virtual moderna no computador e <strong>aplicativos nativos para Android e iOS</strong>.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-center mb-12">
            <a
              href={getWhatsAppUrl(siteConfig.whatsapp.heroMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-base shadow-md glow-whatsapp transition-all transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Solicitar Demonstração no WhatsApp</span>
              <ChevronRight className="w-4 h-4" />
            </a>

            <a
              href="#modelo-comercial"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-base border border-slate-300 shadow-xs transition-colors"
            >
              <span>Entenda o Modelo Comercial</span>
            </a>
          </div>

          {/* Key Value Badges - Item 2: Atualizado para Multiplataforma / Web, Android & iOS */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5 max-w-4xl w-full text-left mb-16">
            <div className="card-light p-4 rounded-xl flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-600">
                <Percent className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Sem Comissão</p>
                <p className="text-xs sm:text-sm font-bold text-slate-900">0% sobre Vendas</p>
              </div>
            </div>

            <div className="card-light p-4 rounded-xl flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-indigo-50 text-indigo-600">
                <Wallet className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Pagamento Direto</p>
                <p className="text-xs sm:text-sm font-bold text-slate-900">Integração Asaas</p>
              </div>
            </div>

            <div className="card-light p-4 rounded-xl flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-cyan-50 text-cyan-600">
                <Smartphone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Multiplataforma</p>
                <p className="text-xs sm:text-sm font-bold text-slate-900">Web, Android & iOS</p>
              </div>
            </div>

            <div className="card-light p-4 rounded-xl flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-purple-50 text-purple-600">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Sua Marca</p>
                <p className="text-xs sm:text-sm font-bold text-slate-900">Domínio Próprio</p>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive App Preview Showcase */}
        <div
          className="max-w-6xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Switcher Tabs - Itens 3, 4, 5: Abas Interativas e Animadas */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-4">
            <button
              onClick={() => {
                setActiveTab("classroom");
                setIsPaused(true);
              }}
              className={`relative overflow-hidden inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "classroom"
                  ? "bg-[#4f46e5] text-white shadow-md shadow-indigo-500/25 scale-[1.02]"
                  : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200"
              }`}
            >
              <Monitor className="w-4 h-4" />
              <span>Sala de Aula (Desktop)</span>
              {activeTab === "classroom" && !isPaused && (
                <span className="absolute bottom-0 left-0 h-0.5 bg-indigo-300 w-full animate-pulse" />
              )}
            </button>

            <button
              onClick={() => {
                setActiveTab("admin");
                setIsPaused(true);
              }}
              className={`relative overflow-hidden inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "admin"
                  ? "bg-[#4f46e5] text-white shadow-md shadow-indigo-500/25 scale-[1.02]"
                  : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200"
              }`}
            >
              <LayoutDashboard className="w-4 h-4" />
              <span>Gestão de Conteúdo Web</span>
              {activeTab === "admin" && !isPaused && (
                <span className="absolute bottom-0 left-0 h-0.5 bg-indigo-300 w-full animate-pulse" />
              )}
            </button>

            <button
              onClick={() => {
                setActiveTab("mobile");
                setIsPaused(true);
              }}
              className={`relative overflow-hidden inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "mobile"
                  ? "bg-slate-900 text-white shadow-md shadow-slate-900/25 scale-[1.02]"
                  : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200"
              }`}
            >
              <Smartphone className="w-4 h-4 text-emerald-400" />
              <span>Apps Nativos (Android & iOS)</span>
              {activeTab === "mobile" && !isPaused && (
                <span className="absolute bottom-0 left-0 h-0.5 bg-emerald-400 w-full animate-pulse" />
              )}
            </button>
          </div>

          {/* Browser / Device Frame Container */}
          <div className="relative rounded-2xl bg-white p-2 sm:p-3 border border-slate-200 shadow-xl transition-all duration-300">
            {/* Window bar */}
            <div className="flex items-center justify-between px-3 py-2 border-b border-slate-100 mb-2">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-400 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block" />
              </div>
              <div className="px-4 py-1 rounded-md bg-slate-100 text-[11px] font-mono text-slate-600 text-center max-w-sm truncate">
                {activeTab === "classroom" && "ead.suaempresa.com.br/aluno/aula"}
                {activeTab === "admin" && "ead.suaempresa.com.br/admin/cursos/conteudo"}
                {activeTab === "mobile" && "Google Play Store & Apple App Store (Apps Nativos)"}
              </div>
              <div className="text-[11px] text-[#4f46e5] font-semibold hidden sm:flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
                <span>Interface Real do Sistema</span>
              </div>
            </div>

            {/* Display Screen */}
            <div className="relative rounded-xl overflow-hidden bg-slate-50 border border-slate-200 min-h-[460px] flex items-center justify-center">
              {/* Item 3: Sala de aula recortada sem o menu superior de dashboard */}
              {activeTab === "classroom" && (
                <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] transition-opacity duration-300">
                  <Image
                    src="/images/classroom-clean.png"
                    alt="Sala Virtual do Aluno no io-edu LMS - Foco no Aprendizado"
                    fill
                    priority
                    sizes="(max-width: 1200px) 100vw, 1150px"
                    className="object-cover object-top"
                  />
                </div>
              )}

              {/* Item 4: Demonstração do Gerenciamento de Conteúdo Curricular */}
              {activeTab === "admin" && (
                <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] transition-opacity duration-300">
                  <Image
                    src="/images/admin-content.png"
                    alt="Painel de Gerenciamento de Conteúdo e Módulos do io-edu LMS"
                    fill
                    priority
                    sizes="(max-width: 1200px) 100vw, 1150px"
                    className="object-cover object-top"
                  />
                </div>
              )}

              {/* Item 5: Visualização de Aplicativo Nativo Android e iOS com alternador */}
              {activeTab === "mobile" && (
                <div className="py-6 px-4 w-full flex flex-col items-center justify-center bg-gradient-to-b from-slate-100 to-slate-200/70">
                  {/* Seletor entre iOS e Android */}
                  <div className="inline-flex items-center gap-1.5 p-1 bg-white border border-slate-300 rounded-xl mb-5 shadow-xs">
                    <button
                      onClick={() => setMobileOS("ios")}
                      className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                        mobileOS === "ios"
                          ? "bg-slate-900 text-white shadow-xs"
                          : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      <Apple className="w-3.5 h-3.5" />
                      <span>iOS (iPhone)</span>
                    </button>
                    <button
                      onClick={() => setMobileOS("android")}
                      className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                        mobileOS === "android"
                          ? "bg-[#4f46e5] text-white shadow-xs"
                          : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Android (Google Play)</span>
                    </button>
                  </div>

                  {/* Smartphone Frame com Aplicativo Nativo */}
                  <div className="relative w-[300px] rounded-[44px] p-2.5 bg-slate-900 border-4 border-slate-700 shadow-2xl overflow-hidden transition-all duration-300">
                    <div className="w-28 h-4 bg-slate-950 rounded-b-2xl mx-auto mb-1 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-slate-900" />
                    </div>
                    <div className="relative w-full h-[520px] rounded-[32px] overflow-hidden bg-white">
                      {mobileOS === "ios" ? (
                        <Image
                          src="/images/app-ios.png"
                          alt="Aplicativo Nativo iOS para Alunos - io-edu LMS"
                          fill
                          sizes="300px"
                          className="object-cover object-top"
                        />
                      ) : (
                        <Image
                          src="/images/app-android.png"
                          alt="Aplicativo Nativo Android para Alunos - io-edu LMS"
                          fill
                          sizes="300px"
                          className="object-cover object-top"
                        />
                      )}
                    </div>
                    <div className="w-32 h-1 bg-slate-600 rounded-full mx-auto mt-2" />
                  </div>
                  <p className="text-xs text-slate-500 mt-4 text-center">
                    Interface nativa desenvolvida para ergonomia touch, downloads offline e sincronização em tempo real.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

