"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/config/site";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Como funciona a cobrança e o modelo comercial?",
      answer:
        "Nosso modelo é 100% transparente: não cobramos nenhuma taxa ou porcentagem sobre a venda dos seus cursos. O faturamento é todo seu. A cobrança é composta apenas pelo suporte técnico mensal (manutenção, atualizações e infraestrutura) somado ao custo de armazenamento dos seus vídeos e arquivos sob demanda. Alunos, cursos, turmas e certificados são totalmente ilimitados.",
    },
    {
      question: "Como recebo os pagamentos das vendas dos meus cursos?",
      answer:
        "O io.edu integra nativamente com o gateway de pagamentos Asaas. Você cria sua conta no Asaas, cadastra a sua chave de API na plataforma e o dinheiro de todas as vendas (Pix, Cartão e Boleto) cai diretamente na sua conta bancária, com as menores taxas do mercado e sem intermediários retendo seu saldo por semanas.",
    },
    {
      question: "Os alunos conseguem assistir pelo computador e aplicativos Android e iOS?",
      answer:
        "Sim! O sistema possui sala de aula virtual moderna para o navegador no computador e aplicações nativas dedicadas para Android e iOS. O aluno estuda com máxima comodidade e o progresso das lições concluídas é sincronizado em tempo real em todas as plataformas.",
    },
    {
      question: "Eu posso usar meu próprio domínio e logotipo?",
      answer:
        "Com certeza! Seus alunos acessam através do seu endereço personalizado (por exemplo, ead.suaempresa.com.br), enxergam a sua identidade visual e seus certificados oficiais.",
    },
    {
      question: "Por que não há valores fixos exibidos nesta página?",
      answer:
        "Cada projeto educacional possui um porte diferente — desde infoprodutores iniciando com um curso até instituições com centenas de horas de vídeo e milhares de alunos para migração. Nós conversamos pelo WhatsApp para entender o volume de armazenamento e escopo necessário, oferecendo uma proposta sob medida.",
    },
    {
      question: "Como agendar uma demonstração ou tirar dúvidas?",
      answer:
        "Basta clicar em qualquer botão de WhatsApp desta página. Demonstramos o painel administrativo e a sala de aula ao vivo para você.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-slate-50/70 border-t border-slate-200/80">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#4f46e5]" />
            <span>Tire Suas Dúvidas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-base text-slate-600">
            Respostas diretas sobre o funcionamento e contratação da plataforma.
          </p>
        </div>

        {/* Accordion list com Colapso Fluido via CSS Grid (Item 9) */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl bg-white border border-slate-200/90 shadow-xs overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-slate-900 text-base sm:text-lg">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-indigo-50 text-[#4f46e5]" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Transição suave com CSS Grid */}
                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-6 sm:px-6 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-base font-bold text-slate-900 mb-1">Ficou com alguma dúvida pontual?</h4>
            <p className="text-xs sm:text-sm text-slate-500">Fale diretamente com nossa equipe no WhatsApp agora mesmo.</p>
          </div>
          <a
            href={getWhatsAppUrl("Olá! Gostaria de tirar algumas dúvidas específicas sobre a contratação do io.edu LMS.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-sm shadow-sm transition-all shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Chamar no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
