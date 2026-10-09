"use client";

import { Check, X, Sparkles, ArrowRight } from "lucide-react";
import { getWhatsAppUrl } from "@/config/site";

export function ComparisonTable() {
  const features = [
    {
      name: "Taxa sobre venda de cursos",
      generic: "Cobram taxa sobre vendas",
      fromScratch: "Apenas taxa do gateway",
      ioedu: "0% (Apenas taxa do Asaas)",
    },
    {
      name: "Dinheiro direto na sua conta bancária",
      generic: false,
      fromScratch: true,
      ioedu: true,
    },
    {
      name: "Alunos e matrículas ilimitadas",
      generic: true,
      fromScratch: true,
      ioedu: true,
    },
    {
      name: "Cursos e módulos ilimitados",
      generic: true,
      fromScratch: true,
      ioedu: true,
    },
    {
      name: "Seu próprio domínio (ead.seusite.com.br)",
      generic: false,
      fromScratch: true,
      ioedu: true,
    },
    {
      name: "Sala virtual Web e Apps Nativos (Android e iOS)",
      generic: "Básica",
      fromScratch: "Custo altíssimo",
      ioedu: true,
    },
    {
      name: "Tempo estimado para entrar no ar",
      generic: "Imediato",
      fromScratch: "6 a 12 meses",
      ioedu: "Poucos dias",
    },
    {
      name: "Custo de desenvolvimento inicial",
      generic: "Baixo",
      fromScratch: "R$ 60k a R$ 200k",
      ioedu: "Acessível e Negociável",
    },
    {
      name: "Suporte contínuo e manutenção inclusa",
      generic: true,
      fromScratch: false,
      ioedu: true,
    },
  ];

  return (
    <section id="comparativo" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#4f46e5]" />
            <span>Comparativo de Mercado</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-5">
            Por que escolher o <span className="text-[#4f46e5]">io.edu</span>?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Não perca parte do seu faturamento pagando taxas sobre vendas e evite gastar fortunas tentando construir um software do zero.
          </p>
        </div>

        {/* Table Container */}
        <div className="overflow-x-auto">
          <div className="min-w-[700px] rounded-2xl bg-white border border-slate-200 shadow-md overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="py-4 px-6 text-sm font-semibold text-slate-700 w-2/5">
                    Critério / Funcionalidade
                  </th>
                  <th className="py-4 px-4 text-sm font-semibold text-slate-500 text-center w-1/5">
                    Plataformas Tradicionais
                  </th>
                  <th className="py-4 px-4 text-sm font-semibold text-slate-500 text-center w-1/5">
                    Desenvolver do Zero
                  </th>
                  <th className="py-4 px-4 text-sm font-bold text-[#4f46e5] text-center w-1/5 bg-indigo-50/70 border-x border-indigo-200">
                    <span className="flex items-center justify-center gap-1.5">
                      <span>io.edu LMS</span>
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {features.map((item, index) => (
                  <tr key={index} className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-6 text-sm font-medium text-slate-800">
                      {item.name}
                    </td>

                    {/* Generic */}
                    <td className="py-4 px-4 text-sm text-center text-slate-500">
                      {typeof item.generic === "boolean" ? (
                        item.generic ? (
                          <Check className="w-5 h-5 text-emerald-600 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-rose-500 mx-auto" />
                        )
                      ) : (
                        <span>{item.generic}</span>
                      )}
                    </td>

                    {/* From Scratch */}
                    <td className="py-4 px-4 text-sm text-center text-slate-500">
                      {typeof item.fromScratch === "boolean" ? (
                        item.fromScratch ? (
                          <Check className="w-5 h-5 text-emerald-600 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-rose-500 mx-auto" />
                        )
                      ) : (
                        <span>{item.fromScratch}</span>
                      )}
                    </td>

                    {/* io.edu */}
                    <td className="py-4 px-4 text-sm text-center font-semibold text-slate-900 bg-indigo-50/40 border-x border-indigo-100">
                      {typeof item.ioedu === "boolean" ? (
                        <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                          <Check className="w-4 h-4" />
                        </div>
                      ) : (
                        <span className="text-[#4f46e5] font-bold">{item.ioedu}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Action Callout */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-600 mb-4">
            Negociação sob medida com base nas necessidades da sua operação.
          </p>
          <a
            href={getWhatsAppUrl("Olá! Vi o comparativo do io.edu e quero entender a melhor opção para migrar ou lançar meus cursos.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#4f46e5] hover:text-[#4338ca] font-semibold text-sm group"
          >
            <span>Conversar sobre a implantação no WhatsApp</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
