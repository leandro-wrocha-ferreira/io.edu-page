"use client";

import {
  Percent,
  Infinity,
  HardDrive,
  CreditCard,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { siteConfig, getWhatsAppUrl } from "@/config/site";

export function CommercialModel() {
  return (
    <section id="modelo-comercial" className="py-24 bg-slate-50/70 border-b border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold uppercase tracking-wider mb-4">
            <Percent className="w-3.5 h-3.5 text-emerald-600" />
            <span>Modelo Comercial Justo & Transparente</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-5">
            Sem comissão sobre vendas. O seu faturamento é{" "}
            <span className="text-[#4f46e5]">100% seu</span>.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Diferente de plataformas convencionais que cobram taxas e comissões sobre cada venda realizada, nosso modelo foi feito para você faturar mais à medida que sua escola escala.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {/* Card 1: 0% Taxas */}
          <div className="card-light-hover p-8 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-100/80 text-emerald-700 flex items-center justify-center mb-6">
                <Percent className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                0% de Taxa sobre Vendas
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Você não paga porcentagem sobre os cursos vendidos. Se faturar R$ 10 mil ou R$ 200 mil no mês, não retemos comissão sobre seu trabalho.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-emerald-700">
              <CheckCircle2 className="w-4 h-4" />
              <span>Todo o lucro das vendas vai para você</span>
            </div>
          </div>

          {/* Card 2: Restante Ilimitado */}
          <div className="card-light-hover p-8 rounded-2xl flex flex-col justify-between border-[#4f46e5]/30 shadow-md">
            <div>
              <div className="w-12 h-12 rounded-xl bg-indigo-100/80 text-[#4f46e5] flex items-center justify-center mb-6">
                <Infinity className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Tudo o que Importa é Ilimitado
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Não cobramos por aluno cadastrado nem limitamos a sua grade curricular. Escale sem medo de faturas surpresa no fim do mês.
              </p>
            </div>
            <ul className="space-y-2 pt-4 border-t border-slate-100 text-xs text-slate-700 font-medium">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#4f46e5]" />
                <span>Alunos e matrículas ilimitadas</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#4f46e5]" />
                <span>Cursos, módulos e aulas ilimitadas</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#4f46e5]" />
                <span>Certificados gerados ilimitados</span>
              </li>
            </ul>
          </div>

          {/* Card 3: Suporte + Storage */}
          <div className="card-light-hover p-8 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-cyan-100/80 text-cyan-700 flex items-center justify-center mb-6">
                <HardDrive className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Suporte Mensal + Armazenamento
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                A cobrança é clara e previsível: apenas o suporte e manutenção técnica por mês, somado ao armazenamento dos seus arquivos conforme sua necessidade real.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-cyan-700">
              <CheckCircle2 className="w-4 h-4" />
              <span>Pague apenas pelo storage que utilizar</span>
            </div>
          </div>
        </div>

        {/* Asaas Payment Gateway Integration Highlight Box */}
        <div className="rounded-3xl bg-white border border-slate-200/90 p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 flex flex-col gap-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold w-fit">
                <CreditCard className="w-3.5 h-3.5" />
                <span>Gateway de Pagamento Integrado</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                Receba direto na sua conta bancária com o Asaas
              </h3>

              <p className="text-base text-slate-600 leading-relaxed">
                Como cada escola opera em seu próprio domínio, a intermediação financeira é direta. Você cria sua conta no <strong>Asaas</strong>, insere a sua chave de API na plataforma e todas as vendas via <strong>Pix, Cartão de Crédito e Boleto</strong> caem direto no seu saldo.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Você só paga as taxas padrão do próprio Asaas</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <Zap className="w-4 h-4 text-[#4f46e5] shrink-0 mt-0.5" />
                  <span>Dinheiro disponível sem retenção por intermediários</span>
                </div>
              </div>

              <p className="text-xs text-slate-500 italic mt-1">
                * Novos gateways de pagamento já estão sendo homologados e estarão disponíveis em breve.
              </p>
            </div>

            <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-6 border border-slate-200 text-center flex flex-col items-center justify-center">
              <div className="w-16 h-16 rounded-2xl bg-[#003087] text-white font-extrabold text-xl flex items-center justify-center mb-4 shadow-sm">
                asaas
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-1">
                Integração Nativa e Descomplicada
              </h4>
              <p className="text-xs text-slate-600 mb-6 max-w-xs">
                Crie sua conta no gateway em minutos e conecte sua chave com segurança no painel.
              </p>
              <a
                href={getWhatsAppUrl(siteConfig.whatsapp.gatewayMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs shadow-xs transition-colors"
              >
                <span>Tirar dúvidas sobre pagamentos no WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
