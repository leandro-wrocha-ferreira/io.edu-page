"use client";

import Image from "next/image";
import {
  Smartphone,
  Zap,
  MessageCircle,
  Clock,
  Compass,
} from "lucide-react";
import { siteConfig, getWhatsAppUrl } from "@/config/site";

export function MobileTabletExperience() {
  return (
    <section id="sala-de-aula" className="py-24 bg-slate-50/80 border-y border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header - Itens 2 e 10: Foco em Apps Nativos Android e iOS */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-4">
            <Smartphone className="w-3.5 h-3.5 text-[#4f46e5]" />
            <span>Aplicações Nativas Android & iOS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-5">
            Sala de aula focada em <span className="text-[#4f46e5]">Web e Apps Nativos</span>.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Mais de <strong>65% dos alunos</strong> consom cursos por dispositivos móveis no transporte, na cama ou no intervalo. Além da versão web tradicional, entregamos aplicações nativas desenvolvidas especificamente para o ecossistema <strong>Android e iOS</strong>.
          </p>
        </div>

        {/* Unified Tablet & Mobile Showcase - Uma única imagem contendo tablet e celular de forma simples e elegante */}
        <div className="max-w-4xl mx-auto mb-16 flex justify-center">
          <div className="relative w-full rounded-3xl overflow-hidden p-2 sm:p-4">
            <Image
              src="/images/tablet-mobile-showcase.png"
              alt="Sala de aula virtual em Tablet e Smartphone"
              width={1300}
              height={820}
              className="w-full h-auto object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card-light-hover p-6 rounded-2xl">
            <div className="p-3 rounded-xl bg-cyan-50 text-cyan-700 w-fit mb-4">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Navegação Touch Ergonômica
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Botões de reprodução confortáveis, troca ágil de aula com toque e alternador de playlist simplificado para uso com uma só mão.
            </p>
          </div>

          <div className="card-light-hover p-6 rounded-2xl">
            <div className="p-3 rounded-xl bg-indigo-50 text-[#4f46e5] w-fit mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Sincronização em Tempo Real
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              O aluno inicia a aula no computador e continua exatamente do mesmo segundo no aplicativo Android ou iOS, sem perder anotações ou histórico.
            </p>
          </div>

          <div className="card-light-hover p-6 rounded-2xl">
            <div className="p-3 rounded-xl bg-emerald-50 text-emerald-700 w-fit mb-4">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Acesso Completo a Materiais
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Acesso facilitado aos anexos em PDF, marcação de aulas concluídas e emissão de certificados diretamente pelo aplicativo móvel.
            </p>
          </div>
        </div>

        {/* WhatsApp CTA */}
        <div className="mt-12 text-center">
          <a
            href={getWhatsAppUrl(siteConfig.whatsapp.mobileMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-semibold text-sm shadow-xs transition-all hover:border-[#25D366]"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>Ver demonstração dos aplicativos Android e iOS no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}

