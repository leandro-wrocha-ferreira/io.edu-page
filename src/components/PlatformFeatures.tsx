"use client";

import { useState } from "react";
import Image from "next/image";
import {
  LayoutDashboard,
  GraduationCap,
  Users,
  BookOpen,
  BarChart3,
  PlayCircle,
  FileText,
  CheckCircle,
  Layers,
  Smartphone,
  Monitor,
} from "lucide-react";

export function PlatformFeatures() {
  const [adminTab, setAdminTab] = useState<"content" | "dashboard">("content");

  return (
    <section id="recursos" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* =========================================================
            FEATURE 1: GESTÃO WEB (ADMINISTRATIVO & CONTEÚDO)
           ========================================================= */}
        <div className="mb-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Description */}
            <div className="lg:col-span-5 flex flex-col gap-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold uppercase tracking-wider w-fit">
                <LayoutDashboard className="w-3.5 h-3.5" />
                <span>Gestão Web Completa</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Controle operacional total e gestão de conteúdo em um só lugar.
              </h2>

              <p className="text-base text-slate-600 leading-relaxed">
                Esqueça ferramentas fragmentadas. O painel do <strong>io.edu</strong> foi desenhado para você estruturar módulos pedagógicos, organizar turmas, gerenciar permissões e acompanhar relatórios acadêmicos e financeiros em tempo real.
              </p>

              {/* Feature Bullet points */}
              <div className="space-y-4 mt-2">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-indigo-50 text-[#4f46e5] mt-0.5">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Gerenciador de Conteúdo & Grade Curricular</h4>
                    <p className="text-xs text-slate-600">Estruturação dinâmica de módulos, lições em vídeo, PDFs complementares e ordenação ágil.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-indigo-50 text-[#4f46e5] mt-0.5">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Gestão de Usuários & Níveis de Acesso</h4>
                    <p className="text-xs text-slate-600">Controle administradores, instrutores, tutores e estudantes com permissões hierárquicas.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-indigo-50 text-[#4f46e5] mt-0.5">
                    <BarChart3 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Relatórios Acadêmicos e Financeiros</h4>
                    <p className="text-xs text-slate-600">Monitore o engajamento das turmas, taxas de conclusão e métricas vitais da sua operação.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Screen Print com Alternador de Demonstração (Item 4 e Item 7) */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl overflow-hidden bg-white border border-slate-200/90 shadow-xl p-2 sm:p-3">
                {/* Abas de Navegação interna da Demonstração */}
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100">
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => setAdminTab("content")}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                        adminTab === "content"
                          ? "bg-[#4f46e5] text-white shadow-xs"
                          : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                      }`}
                    >
                      <Layers className="w-3.5 h-3.5" />
                      <span>Gerenciamento de Conteúdo</span>
                    </button>
                    <button
                      onClick={() => setAdminTab("dashboard")}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                        adminTab === "dashboard"
                          ? "bg-[#4f46e5] text-white shadow-xs"
                          : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                      }`}
                    >
                      <LayoutDashboard className="w-3.5 h-3.5" />
                      <span>Visão Operacional</span>
                    </button>
                  </div>

                  <span className="text-[11px] font-mono text-[#4f46e5] font-semibold hidden sm:inline">
                    Painel do Administrador
                  </span>
                </div>

                {/* Display do Screenshot (Limpo sem header redundante) */}
                <div className="relative rounded-xl overflow-hidden aspect-[16/10] bg-slate-50 border border-slate-100">
                  {adminTab === "content" ? (
                    <Image
                      src="/images/admin-content.png"
                      alt="Gerenciamento de Conteúdo Curricular no io.edu LMS"
                      fill
                      loading="eager"
                      sizes="(max-width: 1024px) 100vw, 55vw"
                      className="object-cover object-top"
                    />
                  ) : (
                    <Image
                      src="/images/admin-clean.png"
                      alt="Interface Operacional do Painel Administrativo do io.edu LMS"
                      fill
                      loading="eager"
                      sizes="(max-width: 1024px) 100vw, 55vw"
                      className="object-cover object-top"
                    />
                  )}
                </div>

                <div className="p-3 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1.5 font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    {adminTab === "content"
                      ? "Estrutura Curricular e Upload de Aulas"
                      : "Métricas Gerais e Indicadores de Alunos"}
                  </span>
                  <span className="font-mono text-[11px] text-[#4f46e5] font-semibold">
                    Visão do Gestor
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================
            FEATURE 2: SALA VIRTUAL (COMPUTADOR E MOBILE ANDROID/IOS) - Item 8
           ========================================================= */}
        <div id="sala-virtual" className="pt-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Screen Print: Composição Desktop + Mobile Nativo (Item 8) */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="relative">
                {/* Desktop Screen Frame (Fundo) */}
                <div className="rounded-2xl overflow-hidden bg-white border border-slate-200/90 shadow-xl p-2 sm:p-3">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100 mb-2 px-1">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    </div>
                    <span className="text-[11px] font-mono text-slate-500">
                      ead.suaempresa.com.br/aluno/aula
                    </span>
                    <span className="text-[11px] text-[#4f46e5] font-semibold">
                      Computador
                    </span>
                  </div>

                  <div className="relative rounded-xl overflow-hidden aspect-[16/10] bg-slate-50 border border-slate-100">
                    <Image
                      src="/images/classroom-clean.png"
                      alt="Sala de Aula Virtual no Computador - io.edu LMS"
                      fill
                      loading="eager"
                      sizes="(max-width: 1024px) 100vw, 55vw"
                      className="object-cover object-top"
                    />
                  </div>
                </div>

                {/* Overlapping Floating Smartphone Frame (Frente) */}
                <div className="absolute -bottom-6 -right-3 sm:-bottom-8 sm:-right-4 w-[160px] sm:w-[210px] rounded-[28px] sm:rounded-[36px] p-1.5 sm:p-2 bg-slate-900 border-2 sm:border-4 border-slate-700 shadow-2xl z-20">
                  <div className="w-14 sm:w-20 h-2.5 sm:h-3.5 bg-slate-950 rounded-b-xl mx-auto mb-1" />
                  <div className="relative w-full h-[260px] sm:h-[350px] rounded-[20px] sm:rounded-[26px] overflow-hidden bg-white">
                    <Image
                      src="/images/app-ios.png"
                      alt="Sala do Aluno no Aplicativo Mobile iOS e Android"
                      fill
                      sizes="220px"
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="w-16 sm:w-20 h-1 bg-slate-600 rounded-full mx-auto mt-1" />
                </div>
              </div>

              {/* Badges de Multiplataforma */}
              <div className="flex flex-wrap items-center gap-2 mt-10 text-xs font-semibold text-slate-700">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200">
                  <Monitor className="w-3.5 h-3.5 text-slate-600" />
                  Computador (Navegador)
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-[#4f46e5]">
                  <Smartphone className="w-3.5 h-3.5 text-[#4f46e5]" />
                  Aplicativo Nativo Android
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700">
                  <Smartphone className="w-3.5 h-3.5 text-emerald-600" />
                  Aplicativo Nativo iOS
                </span>
              </div>
            </div>

            {/* Right Description (Item 8) */}
            <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col gap-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-semibold uppercase tracking-wider w-fit">
                <GraduationCap className="w-3.5 h-3.5 text-cyan-600" />
                <span>Computador & Apps Nativos</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Sala de aula moderna no computador e aplicativos Android & iOS.
              </h2>

              <p className="text-base text-slate-600 leading-relaxed">
                A retenção do seu aluno começa pela comodidade de estudo. O <strong>io.edu</strong> oferece sala virtual moderna para o navegador no computador e aplicações nativas dedicadas para <strong>Android e iOS</strong>, garantindo que o estudante aprenda onde e quando quiser.
              </p>

              {/* Feature Bullet points */}
              <div className="space-y-4 mt-2">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-cyan-50 text-cyan-700 mt-0.5">
                    <PlayCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Player com Retomada Automática</h4>
                    <p className="text-xs text-slate-600">O aluno inicia a aula no computador e continua exatamente do mesmo segundo no aplicativo Android ou iOS.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-cyan-50 text-cyan-700 mt-0.5">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Abas de Apoio: Materiais e Anotações</h4>
                    <p className="text-xs text-slate-600">Acesso prático a PDFs, links complementares e anotações pessoais sincronizadas em tempo real.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-cyan-50 text-cyan-700 mt-0.5">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Trilhas de Aprendizagem & Progresso Visual</h4>
                    <p className="text-xs text-slate-600">Controle claro de percentual de conclusão por módulo para motivar o aluno até a emissão do certificado.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

