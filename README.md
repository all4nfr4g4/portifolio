# Portfólio Pessoal

Um portfólio moderno e responsivo desenvolvido com HTML5, CSS3 e JavaScript vanilla.

## 🚀 Características

- **Design Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Animações Suaves**: Efeitos de scroll, hover e transições elegantes
- **Navegação Intuitiva**: Menu hambúrguer para mobile e navegação suave
- **Seções Completas**:
  - Hero com efeito de digitação
  - Sobre mim com estatísticas animadas
  - Habilidades organizadas por categoria
  - Projetos com cards interativos
  - Formulário de contato funcional
  - Footer informativo

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e acessível
- **CSS3**: 
  - Flexbox e Grid Layout
  - Variáveis CSS (Custom Properties)
  - Animações e transições
  - Media queries para responsividade
- **JavaScript ES6+**:
  - Intersection Observer API
  - Event listeners
  - Animações personalizadas
  - Efeitos de parallax

## 📁 Estrutura do Projeto

```
portfolio/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # Funcionalidades JavaScript
└── README.md           # Documentação
```

## 🎨 Recursos de Design

### Cores
- **Primária**: #6366f1 (Índigo)
- **Secundária**: #f59e0b (Âmbar)
- **Accent**: #10b981 (Esmeralda)
- **Texto**: #1f2937 (Cinza escuro)

### Tipografia
- **Fonte Principal**: Inter (Google Fonts)
- **Pesos**: 300, 400, 500, 600, 700

### Efeitos Visuais
- Gradientes animados no hero
- Partículas flutuantes
- Efeito de ripple nos botões
- Contadores animados
- Scroll parallax suave

## 📱 Responsividade

O portfólio é totalmente responsivo com breakpoints:
- **Desktop**: > 768px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px

## 🚀 Como Usar

1. **Clone ou baixe** os arquivos do portfólio
2. **Abra** o arquivo `index.html` em qualquer navegador moderno
3. **Personalize** o conteúdo conforme necessário:
   - Edite as informações pessoais no HTML
   - Modifique as cores no CSS (variáveis CSS)
   - Ajuste as animações no JavaScript

## ✨ Funcionalidades JavaScript

### Navegação
- Menu hambúrguer responsivo
- Destaque do link ativo baseado na seção visível
- Scroll suave entre seções

### Animações
- Efeito de digitação no título principal
- Animações de entrada com Intersection Observer
- Contadores animados para estatísticas
- Efeitos de hover interativos

### Interatividade
- Formulário de contato com validação
- Efeitos de ripple nos botões
- Partículas animadas no background
- Filtros de habilidades (clique para destacar)

## 🎯 Personalização

### Alterar Informações Pessoais
Edite o arquivo `index.html`:
```html
<!-- Hero Section -->
<h1 class="hero-title">
    Olá, eu sou <span class="highlight">Seu Nome</span>
</h1>
<p class="hero-subtitle">
    Sua descrição profissional
</p>
```

### Modificar Cores
Edite as variáveis CSS em `styles.css`:
```css
:root {
    --primary-color: #6366f1;    /* Cor principal */
    --secondary-color: #f59e0b;  /* Cor secundária */
    --accent-color: #10b981;     /* Cor de destaque */
}
```

### Adicionar Projetos
Adicione novos cards de projeto na seção `#projects`:
```html
<div class="project-card">
    <div class="project-image">
        <i class="fas fa-icon-name"></i>
    </div>
    <div class="project-content">
        <h3>Nome do Projeto</h3>
        <p>Descrição do projeto</p>
        <div class="project-tech">
            <span>Tecnologia 1</span>
            <span>Tecnologia 2</span>
        </div>
        <div class="project-links">
            <a href="#" class="btn btn-small">Ver Demo</a>
            <a href="#" class="btn btn-small btn-outline">Código</a>
        </div>
    </div>
</div>
```

## 🌐 Hospedagem

O portfólio pode ser hospedado em qualquer serviço de hospedagem estática:
- **GitHub Pages**
- **Netlify**
- **Vercel**
- **Firebase Hosting**

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar e modificar conforme necessário.

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para:
- Reportar bugs
- Sugerir melhorias
- Enviar pull requests

## 📞 Contato

Para dúvidas ou sugestões, entre em contato através do formulário no portfólio ou pelos links sociais.

---

**Desenvolvido com ❤️ e muito ☕**
