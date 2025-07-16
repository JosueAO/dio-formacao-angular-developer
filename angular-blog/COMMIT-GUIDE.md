# 📝 Guia de Commits - Formação Angular Developer

## 🏷️ Convenção de Commits

Para manter o histórico organizado e facilitar o acompanhamento do progresso, utilize a seguinte convenção:

### Formato Base
```
[projeto] tipo: descrição

corpo (opcional)
```

### Tipos de Commit
- `feat`: Nova funcionalidade
- `fix`: Correção de bug
- `docs`: Documentação
- `style`: Formatação, espaçamento
- `refactor`: Refatoração de código
- `test`: Adição/correção de testes
- `chore`: Tarefas de manutenção

### Exemplos

```bash
# Commit inicial
[angular-blog] chore: setup inicial do projeto Angular Blog

# Nova funcionalidade
[angular-blog] feat: implementa listagem de posts no componente home

# Correção
[angular-blog] fix: corrige bug no roteamento da página de detalhes

# Documentação
[angular-blog] docs: atualiza README com instruções de desenvolvimento

# Múltiplos projetos
[geral] docs: adiciona documentação geral da formação
```

## 📋 Sugestão para Primeiro Commit

```bash
git add .
git commit -m "[angular-blog] chore: setup inicial do projeto blog da formação DIO

- Projeto Angular 20.0.0 criado com Angular CLI
- Configuração SSR habilitada
- Estrutura inicial de componentes
- Documentação do projeto adicionada
- Gitignore configurado"
```

## 🔄 Workflow Sugerido

1. **Trabalhe em uma funcionalidade por vez**
2. **Faça commits pequenos e descritivos**
3. **Use a convenção de nomes**
4. **Documente mudanças importantes**
5. **Teste antes de commitar**

---

Este guia ajuda a manter a organização durante toda a formação!
