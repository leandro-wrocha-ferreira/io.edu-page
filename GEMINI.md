# GEMINI.md - Diretrizes do Projeto io.edu-page

## 1. Visão Geral do Projeto

Landing page institucional e de conversão da plataforma **io-edu** (Plataforma Educacional / LMS moderna com gestão web, sala de aula interativa e aplicativos móveis nativos para Android e iOS).

- **Framework:** Next.js (App Router)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS & Lucide React
- **Animações:** Framer Motion & CSS keyframes
- **Branch Principal:** `master`
- **Repositório Remoto:** `git@github.com:leandro-wrocha-ferreira/io.edu-page.git`

---

## 2. Regra Fundamental: Operações Git via `git-leandro`

> [!IMPORTANT]
> **OBRIGATÓRIO:** Todas as operações do Git (status, add, commit, diff, log, branch, checkout, remote, push, pull) **DEVEM SEMPRE** ser executadas utilizando o comando `git-leandro` no terminal bash.

### Por que usar `git-leandro`?
O comando `git-leandro` executa as ações do Git encapsuladas no container seguro `github-jail`, que possui as credenciais SSH e chaves de autenticação devidamente configuradas para acesso ao GitHub do autor (`leandro-wrocha-ferreira`).

### Exemplos de Uso:
```bash
# Verificar status
git-leandro status

# Adicionar arquivos
git-leandro add src/components/Hero.tsx
git-leandro add public/images/

# Realizar commit seguindo Conventional Commits
git-leandro commit -m "feat(ui): implementar novo layout do hero"

# Visualizar histórico
git-leandro log --oneline -n 5

# Gerenciar branches
git-leandro branch -M master

# Push para o repositório remoto
git-leandro push -u origin master
```

### Padrão de Commits
Sempre utilizar a convenção **Conventional Commits**, dividindo alterações em commits atômicos e bem definidos:
- `feat(...)`: Novas funcionalidades, seções ou componentes.
- `fix(...)`: Correções de bugs, copy, links ou layout quebrado.
- `docs(...)`: Documentação (`GEMINI.md`, `README.md`, etc.).
- `style(...)`: Ajustes puramente visuais, alinhamentos, CSS e formatação.
- `refactor(...)`: Refatoração interna de código sem alteração visual de comportamento.
- `chore(...)`: Manutenção de dependências, configurações e ferramentas.

---

## 3. Estrutura de Diretórios

```
io.edu-page/
├── public/
│   ├── favicon.svg             # Favicon SVG temático
│   └── images/                 # Mockups, prints da plataforma e aplicativos (webp/png)
├── src/
│   ├── app/
│   │   ├── globals.css         # Variáveis CSS, temas, fontes e regras utilitárias
│   │   ├── icon.svg            # Ícone de aplicação Next.js
│   │   ├── layout.tsx          # Layout raiz com metadata, SEO e fontes
│   │   └── page.tsx            # Página principal integrando as seções
│   ├── components/
│   │   ├── Navbar.tsx          # Cabeçalho fixo com navegação e CTA
│   │   ├── Hero.tsx            # Seção de impacto com mockup do app
│   │   ├── PlatformFeatures.tsx# Tabs interativas (Sala de Aula, Gestão, Conteúdo, etc.)
│   │   ├── MobileTabletExperience.tsx # Experiência mobile & tablet (apps nativos Android/iOS)
│   │   ├── CommercialModel.tsx # Modelo de cobrança por aluno ativo (sem taxas abusivas)
│   │   ├── ComparisonTable.tsx # Tabela comparativa (io-edu vs Concorrentes)
│   │   ├── CTASection.tsx      # Chamada para ação e demonstração gratuita
│   │   ├── FAQ.tsx             # Perguntas frequentes com acordeão interativo
│   │   ├── Footer.tsx          # Rodapé com links e copyright
│   │   └── FloatingWhatsApp.tsx# Botão flutuante de contato direto
│   └── config/
│       └── site.ts             # Dados centralizados do site (links, contatos, textos)
├── package.json
└── GEMINI.md                   # Diretrizes operacionais e regras do repositório
```

---

## 4. Diretrizes de Desenvolvimento e Design

1. **Responsividade & Mobile-First:**
   - Todas as seções e mockups devem ser adaptáveis e legíveis em telas a partir de 320px até ultrawide.
   - Mockups que combinem tablet e celular devem manter proporção estável e visual limpo sem distorções.

2. **Performance e Carregamento de Imagens:**
   - Utilizar componentes de imagem otimizados ou `<img>` com dimensões explícitas e aspect ratio preservado.
   - Prezar por SVGs leves e imagens WebP/PNG otimizadas.

3. **Consistência de Marca e Identidade:**
   - Paleta primária: Indigo / Violeta (`#6366f1` / `#8b5cf6`), acentos Cyan (`#06b6d4`), fundos escuros slate/zinc com efeito glassmorphism e iluminação sutil.
   - Comunicação clara: ênfase na liberdade operacional, apps nativos Android & iOS e modelo justo sem taxas percentuais sobre faturamento.
