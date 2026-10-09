/**
 * Configuração central da Landing Page do io.edu LMS.
 */

export const siteConfig = {
  name: "io.edu",
  tagline: "Plataforma LMS Completa para Venda e Gestão de Cursos",
  description:
    "Tenha sua própria plataforma EAD com seu domínio, zero comissões sobre vendas, recebimento direto via Asaas, sala virtual moderna e aplicativos nativos para Android e iOS.",
  url: "https://ioedu.com.br",

  // Contato comercial / WhatsApp
  whatsapp: {
    number: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5511999999999",
    defaultMessage:
      "Olá! Gostaria de conhecer mais sobre a plataforma LMS io.edu e agendar uma demonstração.",
    heroMessage:
      "Olá! Tenho interesse em lançar minha própria plataforma de cursos com o io.edu sem pagar taxas sobre minhas vendas.",
    commercialMessage:
      "Olá! Quero entender mais sobre o modelo comercial do io.edu (suporte mensal + armazenamento, restante ilimitado).",
    gatewayMessage:
      "Olá! Gostaria de entender como funciona o recebimento direto na minha conta via Asaas no io.edu.",
    mobileMessage:
      "Olá! Quero saber mais sobre os aplicativos nativos para Android e iOS para os alunos no io.edu.",
  },

  // Navegação
  navItems: [
    { label: "Recursos", href: "#recursos" },
    { label: "Sala de Aula & Apps Nativos", href: "#sala-de-aula" },
    { label: "Modelo Comercial", href: "#modelo-comercial" },
    { label: "Comparativo", href: "#comparativo" },
    { label: "FAQ", href: "#faq" },
  ],
};

/**
 * Utilitário para gerar URL do WhatsApp com mensagem codificada.
 */
export function getWhatsAppUrl(customMessage?: string): string {
  const message = customMessage || siteConfig.whatsapp.defaultMessage;
  const cleanNumber = siteConfig.whatsapp.number.replace(/\D/g, "");
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}
