import { GraduationCap, MessageCircle, ShieldCheck } from "lucide-react";
import { siteConfig, getWhatsAppUrl } from "@/config/site";

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200/90 py-14 text-slate-600 text-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-200/80">
          {/* Brand info */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#4f46e5] to-[#312e81] flex items-center justify-center text-white shadow-xs">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">
                io<span className="text-[#4f46e5]">.edu</span>
              </span>
            </div>
            <p className="text-sm text-slate-600 max-w-sm leading-relaxed">
              Plataforma LMS moderna para criadores, escolas e empresas venderem e gerenciarem seus cursos com domínio próprio, recebimento direto no Asaas e sem taxas sobre vendas.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Arquitetura estável e segura • Multi-Tenant</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-2">
              {siteConfig.navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-[#4f46e5] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / WhatsApp */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">
              Atendimento Comercial
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Fale diretamente com nosso time no WhatsApp para tirar dúvidas e solicitar uma proposta:
            </p>
            <a
              href={getWhatsAppUrl("Olá! Gostaria de conversar com a equipe comercial do io.edu LMS.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 hover:bg-emerald-100 font-medium text-xs transition-colors w-fit"
            >
              <MessageCircle className="w-4 h-4 fill-emerald-600 text-emerald-600" />
              <span>Chamar no WhatsApp Oficial</span>
            </a>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 io.edu. Todos os direitos reservados.</p>
          <p>Plataforma para gestão e venda de cursos online</p>
        </div>
      </div>
    </footer>
  );
}
