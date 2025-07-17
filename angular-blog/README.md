# 🎬 Angular Blog - Universo Marvel & Entretenimento

[![Angular](https://img.shields.io/badge/Angular-20.0.0-red)](https://angular.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-blue)](https://www.typescriptlang.org/)
[![DIO](https://img.shields.io/badge/DIO-Formação_Angular-orange)](https://www.dio.me/)

Este é um projeto de blog desenvolvido em Angular como parte da **Formação Angular Developer** da [DIO.me](https://www.dio.me/), baseado no projeto original do instrutor Felipe Aguiar, mas modernizado com as mais recentes funcionalidades do Angular 20.

**Projeto gerado com:** [Angular CLI](https://github.com/angular/angular-cli) versão 20.0.5

## ✨ Características do Projeto

### 🎯 Funcionalidades Principais
- **Blog responsivo** com design moderno e limpo
- **Navegação dinâmica** entre artigos
- **Sistema de roteamento** com parâmetros
- **Componentes reutilizáveis** e modulares
- **Design mobile-first** totalmente responsivo
- **Integração com redes sociais**

### 🛠️ Tecnologias Utilizadas
- **Angular 20.0.0** - Framework principal
- **TypeScript 5.8.2** - Linguagem de programação
- **Standalone Components** - Arquitetura moderna
- **Server-Side Rendering (SSR)** - Performance otimizada
- **Angular Router** - Navegação SPA
- **CSS3** - Estilização responsiva
- **Google Fonts** - Typography (Open Sans)

### 🏗️ Arquitetura
```
src/
├── app/
│   ├── components/         # Componentes reutilizáveis
│   │   ├── big-card/      # Card principal de artigos
│   │   ├── small-card/    # Cards secundários
│   │   ├── menu-title/    # Cabeçalho do blog
│   │   └── menu-bar/      # Barra de navegação social
│   ├── pages/             # Páginas da aplicação
│   │   ├── home/          # Página inicial
│   │   └── content/       # Página de artigo individual
│   ├── data/              # Serviços e dados
│   │   ├── dataFake.ts    # Mock de dados dos artigos
│   │   └── article.interface.ts # Interface TypeScript
│   └── app.routes.ts      # Configuração de rotas
├── styles.css             # Estilos globais
└── index.html             # Template principal
```

> 📋 **Nota**: Para informações detalhadas sobre o projeto, objetivos de aprendizado e funcionalidades, consulte o arquivo [README-PROJETO.md](./README-PROJETO.md)

## 🚀 Quick Start

### 📋 Pré-requisitos
- Node.js 18.x ou superior
- npm 9.x ou superior
- Angular CLI 20.x

### 🛠️ Instalação
```bash
# Clone o repositório
git clone [url-do-repositorio]

# Navigate para o diretório
cd angular-blog

# Instale as dependências
npm install
```

### 🚦 Executando o Projeto
```bash
# Modo desenvolvimento
npm start
# ou
ng serve

# Acesse: http://localhost:4200
```

### 🏗️ Build para Produção
```bash
# Build otimizado
npm run build
# ou
ng build --configuration production
```

### 🧪 Testes
```bash
# Testes unitários
npm test
# ou
ng test

# Testes end-to-end
npm run e2e
```

## 📚 Aprendizados e Conceitos Abordados

### 🎯 Conceitos Angular Modernos
- **Standalone Components** - Nova arquitetura sem NgModules
- **Signals** - Reatividade otimizada (Angular 20)
- **Server-Side Rendering** - Performance e SEO
- **Component Communication** - @Input, @Output, e serviços
- **Routing** - Navegação SPA com parâmetros dinâmicos
- **TypeScript Interfaces** - Tipagem forte e segurança

### 🎨 Design & UX
- **Mobile-First Design** - Responsividade prioritária
- **CSS Grid & Flexbox** - Layouts modernos
- **Hover Effects** - Interatividade visual
- **Typography** - Google Fonts integration
- **Color Theory** - Paleta consistente e acessível

### ⚡ Performance & Boas Práticas
- **Lazy Loading** - Carregamento otimizado
- **OnPush Change Detection** - Performance melhorada
- **Semantic HTML** - Acessibilidade e SEO
- **CSS Custom Properties** - Manutenibilidade
- **Image Optimization** - Carregamento eficiente

## 🤝 Contribuindo

Este projeto faz parte de uma formação educacional, mas contribuições são bem-vindas:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Autor

**Josué Oliveira**
- Portfolio: [Em desenvolvimento]
- LinkedIn: [linkedin.com/in/josue-oliveira](https://linkedin.com/in/josue-oliveira)
- GitHub: [github.com/josue-oliveira](https://github.com/josue-oliveira)
- DIO: [dio.me/users/josue-oliveira](https://dio.me/users/josue-oliveira)

## 🙏 Agradecimentos

- **Felipe Aguiar** - Instrutor original do projeto
- **DIO.me** - Plataforma de aprendizado
- **Angular Team** - Framework excepcional
- **Comunidade Angular Brasil** - Suporte e inspiração

---

⭐ **Se este projeto te ajudou, deixe uma estrela!** ⭐
```bash
npm start
# ou
ng serve
```
Acesse: `http://localhost:4200/`

### Build para Produção
```bash
npm run build
```

### SSR (Server-Side Rendering)
```bash
npm run serve:ssr:angular-blog
```

## 🧪 Testes

### Testes Unitários
```bash
npm test
```

### Testes E2E
```bash
ng e2e
```

## 📚 Recursos Adicionais

- [Angular CLI Overview](https://angular.dev/tools/cli)
- [README Detalhado do Projeto](./README-PROJETO.md)
- [Guia de Commits](./COMMIT-GUIDE.md)

---

**Formação**: Angular Developer - DIO.me  
**Especialista**: Felipe Aguiar  
**Desenvolvedor**: [Josué](https://www.dio.me/users/josueao_estudos)
