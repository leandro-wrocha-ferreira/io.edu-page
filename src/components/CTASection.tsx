"use client";

import { MessageCircle, Sparkles, Check } from "lucide-react";
import { getWhatsAppUrl } from "@/config/site";

export function CTASection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl p-8 sm:p-14 bg-gradient-to-br from-slate-900 to-[#1e1b4b] text-white shadow-2xl text-center overflow-hidden">
          {/* Decorative ambient glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/20 blur-[100px] pointer-events-none" />

          {/* Top badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-6">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>Atendimento Personalizado & Demonstração Ao Vivo</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6 max-w-3xl mx-auto">
            Pronto para faturar 100% dos seus cursos na sua própria plataforma?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
            Chega de pagar taxas sobre cada uma de suas vendas para plataformas de terceiros. Fale conosco pelo WhatsApp, agende uma demonstração guiada e monte a estrutura perfeita para o seu negócio.
          </p>

          {/* Big WhatsApp CTA Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href={getWhatsAppUrl("Olá! Gostaria de agendar uma demonstração da plataforma io.edu LMS e entender a proposta comercial.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 sm:py-5 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold text-lg shadow-xl glow-whatsapp transition-all transform hover:-translate-y-1"
            >
              <MessageCircle className="w-6 h-6 fill-white" />
              <span>Chamar no WhatsApp Agora</span>
            </a>
          </div>

          {/* Reassurance points */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-300 pt-6 border-t border-white/10">
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-400" />
              0% de comissão sobre suas vendas
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-cyan-400" />
              Recebimento direto via Asaas
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-indigo-400" />
              Alunos e cursos ilimitados
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
