import { siteConfig } from "@/config/site";

export function StructuredData() {
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        alternateName: ["io-edu", "io edu", "ioedu", "io-edu LMS", "io-edu.com.br"],
        description: siteConfig.tagline,
        inLanguage: "pt-BR",
        publisher: {
          "@id": `${siteConfig.url}/#organization`,
        },
      },
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        alternateName: ["io-edu", "io edu LMS"],
        url: siteConfig.url,
        sameAs: ["https://io-edu.com.br"],
        logo: {
          "@type": "ImageObject",
          url: `${siteConfig.url}/favicon.svg`,
        },
        description:
          "Provedora da plataforma educacional e LMS io-edu com gestão web e aplicativos móveis nativos para Android e iOS.",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: siteConfig.whatsapp.number.replace(/\D/g, ""),
          contactType: "sales",
          areaServed: "BR",
          availableLanguage: ["Portuguese"],
        },
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${siteConfig.url}/#software`,
        name: "io-edu LMS",
        applicationCategory: "EducationalApplication",
        operatingSystem: "Web Browser, Android, iOS",
        url: siteConfig.url,
        description: siteConfig.description,
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "BRL",
          description:
            "Modelo justo sem taxas percentuais ou comissões sobre faturamento de vendas de cursos.",
        },
        featureList: [
          "Sala de aula virtual interativa para computador",
          "Aplicativos nativos para Android e iOS com progresso em tempo real",
          "Zero comissões ou taxas percentuais sobre vendas",
          "Recebimento direto na sua conta bancária via gateway Asaas",
          "Domínio próprio personalizado e identidade visual exclusiva",
          "Alunos, cursos, turmas e emissão de certificados ilimitados",
          "Painel administrativo completo para gestão de conteúdo e alunos",
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${siteConfig.url}/#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: "Como funciona a cobrança e o modelo comercial?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Nosso modelo é 100% transparente: não cobramos nenhuma taxa ou porcentagem sobre a venda dos seus cursos. O faturamento é todo seu. A cobrança é composta apenas pelo suporte técnico mensal (manutenção, atualizações e infraestrutura) somado ao custo de armazenamento dos seus vídeos e arquivos sob demanda. Alunos, cursos, turmas e certificados são totalmente ilimitados.",
            },
          },
          {
            "@type": "Question",
            name: "Como recebo os pagamentos das vendas dos meus cursos?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "O io-edu integra nativamente com o gateway de pagamentos Asaas. Você cria sua conta no Asaas, cadastra a sua chave de API na plataforma e o dinheiro de todas as vendas (Pix, Cartão e Boleto) cai diretamente na sua conta bancária, com as menores taxas do mercado e sem intermediários retendo seu saldo por semanas.",
            },
          },
          {
            "@type": "Question",
            name: "Os alunos conseguem assistir pelo computador e aplicativos Android e iOS?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sim! O sistema possui sala de aula virtual moderna para o navegador no computador e aplicações nativas dedicadas para Android e iOS. O aluno estuda com máxima comodidade e o progresso das lições concluídas é sincronizado em tempo real em todas as plataformas.",
            },
          },
          {
            "@type": "Question",
            name: "Eu posso usar meu próprio domínio e logotipo?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Com certeza! Seus alunos acessam através do seu endereço personalizado (por exemplo, ead.suaempresa.com.br), enxergam a sua identidade visual e seus certificados oficiais.",
            },
          },
          {
            "@type": "Question",
            name: "Por que não há valores fixos exibidos nesta página?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Cada projeto educacional possui um porte diferente — desde infoprodutores iniciando com um curso até instituições com centenas de horas de vídeo e milhares de alunos para migração. Nós conversamos pelo WhatsApp para entender o volume de armazenamento e escopo necessário, oferecendo uma proposta sob medida.",
            },
          },
          {
            "@type": "Question",
            name: "Como agendar uma demonstração ou tirar dúvidas?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Basta clicar em qualquer botão de WhatsApp desta página. Demonstramos o painel administrativo e a sala de aula ao vivo para você.",
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
    />
  );
}
