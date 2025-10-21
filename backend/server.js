const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../')));

// Configuração do Nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail', // ou outro provedor
    auth: {
        user: process.env.EMAIL_USER, // Seu email
        pass: process.env.EMAIL_PASS  // Sua senha de app
    }
});

// Rota para enviar email
app.post('/send-email', async (req, res) => {
    try {
        const { user_name, user_email, subject, message } = req.body;
        
        // Validar dados
        if (!user_name || !user_email || !subject || !message) {
            return res.status(400).json({ 
                success: false, 
                message: 'Todos os campos são obrigatórios' 
            });
        }
        
        // Validar email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(user_email)) {
            return res.status(400).json({ 
                success: false, 
                message: 'Email inválido' 
            });
        }
        
        // Configurar email
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER, // Seu email
            subject: `Nova mensagem do portfólio - ${subject}`,
            html: `
                <h2>Nova mensagem do portfólio</h2>
                <p><strong>De:</strong> ${user_name} (${user_email})</p>
                <p><strong>Assunto:</strong> ${subject}</p>
                <p><strong>Mensagem:</strong></p>
                <p>${message.replace(/\n/g, '<br>')}</p>
                <hr>
                <p><em>Enviado através do formulário de contato do portfólio.</em></p>
            `
        };
        
        // Enviar email
        await transporter.sendMail(mailOptions);
        
        res.json({ 
            success: true, 
            message: 'Mensagem enviada com sucesso!' 
        });
        
    } catch (error) {
        console.error('Erro ao enviar email:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Erro interno do servidor' 
        });
    }
});

// Servir o portfólio
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
    console.log(`Acesse: http://localhost:${PORT}`);
});
