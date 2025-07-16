# Angular Blog - Projeto DIO

Este projeto faz parte da **Formação Angular Developer** da plataforma [DIO.me](https://www.dio.me/).

## 📋 Sobre o Projeto

Blog desenvolvido em Angular como parte dos estudos da formação Angular Developer. O projeto utiliza Angular 20.0.0 com Server-Side Rendering (SSR) habilitado.

## 🚀 Tecnologias Utilizadas

- **Angular**: 20.0.0
- **TypeScript**: ~5.8.2
- **Angular SSR**: Server-Side Rendering
- **RxJS**: ~7.8.0
- **Express**: ^5.1.0 (para SSR)

## 📁 Estrutura do Projeto

```
angular-blog/
├── src/
│   ├── app/
│   │   ├── app.ts              # Componente principal
│   │   ├── app.html            # Template principal
│   │   ├── app.css             # Estilos principais
│   │   └── app.routes.ts       # Configuração de rotas
│   ├── index.html              # HTML principal
│   ├── main.ts                 # Entry point da aplicação
│   ├── main.server.ts          # Entry point do servidor SSR
│   └── styles.css              # Estilos globais
├── public/
│   └── favicon.ico
└── package.json
```

## 🛠️ Comandos Disponíveis

### Desenvolvimento
```bash
# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm start
# ou
ng serve
```

### Build e Produção
```bash
# Build para produção
npm run build

# Executar com SSR
npm run serve:ssr:angular-blog
```

### Testes
```bash
# Executar testes unitários
npm test

# Executar testes com watch
ng test --watch
```

## 📖 Funcionalidades Planejadas

- [ ] Listagem de posts do blog
- [ ] Visualização individual de posts
- [ ] Sistema de categorias
- [ ] Busca de conteúdo
- [ ] Design responsivo
- [ ] Modo escuro/claro

## 🎯 Objetivos de Aprendizado

- Estruturação de projetos Angular
- Implementação de roteamento
- Criação de componentes reutilizáveis
- Implementação de serviços
- Server-Side Rendering (SSR)
- Boas práticas de desenvolvimento Angular

## 📚 Recursos da Formação DIO

Este projeto é parte do currículo da **Formação Angular Developer** que aborda:

- Fundamentos do Angular
- TypeScript avançado
- Arquitetura de componentes
- Gerenciamento de estado
- Testes em Angular
- Deploy e otimização

---

**Instrutor**: Felipe Aguiar  
**Plataforma**: [DIO.me](https://www.dio.me/)  
**Formação**: Angular Developer
