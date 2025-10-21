# 📧 Configuração do EmailJS para Envio de Emails

## O que acontece quando alguém preenche o formulário "Entre em Contato":

### ✅ **Funcionalidades Implementadas:**
1. **Validação de Formulário**: Verifica se todos os campos estão preenchidos corretamente
2. **Validação de Email**: Confirma se o email tem formato válido
3. **Feedback Visual**: Mostra notificações de sucesso ou erro
4. **Efeito de Loading**: Botão mostra "Enviando..." durante o processo
5. **Envio Real de Email**: Usa EmailJS para enviar email para você
6. **Limpeza Automática**: Formulário é limpo após envio bem-sucedido

### 🔧 **Como Configurar o EmailJS:**

#### **Passo 1: Criar Conta no EmailJS**
1. Acesse: https://www.emailjs.com/
2. Crie uma conta gratuita
3. Faça login no painel

#### **Passo 2: Configurar Serviço de Email**
1. No painel, vá em "Email Services"
2. Clique em "Add New Service"
3. Escolha seu provedor (Gmail, Outlook, etc.)
4. Siga as instruções para conectar sua conta de email
5. **Anote o Service ID** (ex: service_abc123)

#### **Passo 3: Criar Template de Email**
1. Vá em "Email Templates"
2. Clique em "Create New Template"
3. Use este template:

```
Assunto: Nova mensagem do portfólio - {{subject}}

De: {{from_name}} ({{from_email}})
Para: {{to_name}}

Mensagem:
{{message}}

---
Enviado através do formulário de contato do portfólio.
```

4. **Anote o Template ID** (ex: template_xyz789)

#### **Passo 4: Obter Chave Pública**
1. Vá em "Account" > "General"
2. **Anote a Public Key** (ex: user_abc123def456)

#### **Passo 5: Atualizar o Código**
No arquivo `script.js`, substitua as seguintes linhas:

```javascript
// Linha 171: Substitua YOUR_PUBLIC_KEY
emailjs.init("SUA_CHAVE_PUBLICA_AQUI");

// Linha 279: Substitua YOUR_SERVICE_ID
'SEU_SERVICE_ID_AQUI',

// Linha 280: Substitua YOUR_TEMPLATE_ID
'SEU_TEMPLATE_ID_AQUI',
```

### 📋 **Exemplo de Configuração Completa:**

```javascript
// Inicializar EmailJS
emailjs.init("user_abc123def456");

// Enviar email
const result = await emailjs.send(
    'service_gmail123', // Seu Service ID
    'template_contact', // Seu Template ID
    {
        from_name: formData.user_name,
        from_email: formData.user_email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Alan Fraga'
    }
);
```

### 🎯 **O que acontece quando alguém envia o formulário:**

1. **Validação**: Sistema verifica se todos os campos estão preenchidos
2. **Envio**: Email é enviado para seu email pessoal via EmailJS
3. **Notificação**: Usuário vê "Mensagem enviada com sucesso!"
4. **Limpeza**: Formulário é limpo automaticamente
5. **Você recebe**: Email com os dados do contato

### 📧 **Email que você receberá:**
```
Assunto: Nova mensagem do portfólio - [Assunto digitado]

De: [Nome da pessoa] ([email da pessoa])
Para: Alan Fraga

Mensagem:
[Mensagem digitada pela pessoa]

---
Enviado através do formulário de contato do portfólio.
```

### 🚀 **Vantagens desta implementação:**
- ✅ **Gratuito**: EmailJS oferece 200 emails/mês grátis
- ✅ **Fácil**: Não precisa de servidor
- ✅ **Seguro**: Validação de dados
- ✅ **Profissional**: Feedback visual para o usuário
- ✅ **Responsivo**: Funciona em todos os dispositivos

### 🔒 **Limitações do Plano Gratuito:**
- 200 emails por mês
- 1 serviço de email
- 2 templates
- Suporte básico

### 💡 **Alternativas:**
Se precisar de mais emails, considere:
- **Formspree**: 50 envios/mês grátis
- **Netlify Forms**: Ilimitado (se hospedar no Netlify)
- **Backend próprio**: Node.js + Nodemailer

### 🛠️ **Testando:**
1. Configure o EmailJS
2. Abra o portfólio no navegador
3. Preencha o formulário
4. Verifique se recebeu o email
5. Teste validações (campos vazios, email inválido)
