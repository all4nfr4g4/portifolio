// Versão com Backend Node.js para envio de emails
document.addEventListener('DOMContentLoaded', function() {
    
    // Scroll Reveal Animation
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                
                // Adicionar delay sequencial para elementos com stagger
                const staggerElements = entry.target.querySelectorAll('[class*="stagger"]');
                staggerElements.forEach((el, index) => {
                    setTimeout(() => {
                        el.style.opacity = '1';
                        el.style.transform = 'translateY(0)';
                    }, index * 100);
                });
            }
        });
    }, observerOptions);

    // Observar todos os elementos com classes de reveal
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    revealElements.forEach(el => {
        observer.observe(el);
    });

    // Efeito de typing no título
    const typingElement = document.querySelector('.typing');
    if (typingElement) {
        const text = typingElement.textContent;
        typingElement.textContent = '';
        typingElement.style.borderRight = '2px solid var(--primary-color)';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                typingElement.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            } else {
                // Remover cursor após completar
                setTimeout(() => {
                    typingElement.style.borderRight = 'none';
                }, 1000);
            }
        };
        
        // Iniciar typing após um pequeno delay
        setTimeout(typeWriter, 500);
    }

    // Efeito de parallax suave
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.parallax');
        
        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });

    // Efeito de hover 3D nos cards
    const cards3D = document.querySelectorAll('.card-3d');
    cards3D.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });

    // Efeito de shimmer nos botões
    const shimmerButtons = document.querySelectorAll('.btn-shimmer');
    shimmerButtons.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.style.background = 'linear-gradient(45deg, var(--primary-color), var(--accent-color), var(--primary-color))';
            btn.style.backgroundSize = '200% 200%';
            btn.style.animation = 'shimmer 0.8s ease-in-out';
        });
        
        btn.addEventListener('mouseleave', () => {
            btn.style.background = '';
            btn.style.backgroundSize = '';
            btn.style.animation = '';
        });
    });

    // Animações de entrada sequenciais para skills
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'all 0.3s ease';
        
        const skillObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 50);
                }
            });
        }, { threshold: 0.1 });
        
        skillObserver.observe(item);
    });

    // Efeito de partículas no hero
    const particlesContainer = document.querySelector('.particles');
    if (particlesContainer) {
        createParticles(particlesContainer);
    }

    // Smooth scroll para links de navegação
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Menu mobile toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Fechar menu mobile ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Função para mostrar notificação
    function showNotification(message, type = 'success') {
        // Criar elemento de notificação
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
                <span>${message}</span>
            </div>
        `;
        
        // Adicionar estilos
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? 'var(--primary-color)' : '#e74c3c'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 10px;
            box-shadow: var(--shadow-lg);
            z-index: 10000;
            transform: translateX(400px);
            transition: transform 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        // Animar entrada
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Remover após 5 segundos
        setTimeout(() => {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 5000);
    }
    
    // Função para validar email
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    // Função para validar formulário
    function validateForm(formData) {
        const { user_name, user_email, subject, message } = formData;
        
        if (!user_name.trim()) {
            showNotification('Por favor, digite seu nome', 'error');
            return false;
        }
        
        if (!user_email.trim() || !validateEmail(user_email)) {
            showNotification('Por favor, digite um email válido', 'error');
            return false;
        }
        
        if (!subject.trim()) {
            showNotification('Por favor, digite um assunto', 'error');
            return false;
        }
        
        if (!message.trim()) {
            showNotification('Por favor, digite sua mensagem', 'error');
            return false;
        }
        
        return true;
    }
    
    // Envio de email com Backend Node.js
    const contactForm = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit-btn');
    
    if (contactForm && submitBtn) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // Coletar dados do formulário
            const formData = {
                user_name: document.getElementById('user_name').value,
                user_email: document.getElementById('user_email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            // Validar formulário
            if (!validateForm(formData)) {
                return;
            }
            
            // Mostrar loading
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Enviando...';
            submitBtn.disabled = true;
            submitBtn.classList.add('loading');
            
            try {
                // Enviar para o backend
                const response = await fetch('/send-email', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData)
                });
                
                const result = await response.json();
                
                if (result.success) {
                    // Sucesso
                    submitBtn.textContent = 'Enviado!';
                    submitBtn.classList.remove('loading');
                    showNotification('Mensagem enviada com sucesso! Entrarei em contato em breve.', 'success');
                    
                    // Limpar formulário
                    contactForm.reset();
                    
                    // Voltar ao estado original após 3 segundos
                    setTimeout(() => {
                        submitBtn.textContent = originalText;
                        submitBtn.disabled = false;
                    }, 3000);
                } else {
                    throw new Error(result.message);
                }
                
            } catch (error) {
                // Erro
                console.error('Erro ao enviar email:', error);
                submitBtn.textContent = 'Erro ao enviar';
                submitBtn.classList.remove('loading');
                showNotification('Erro ao enviar mensagem. Tente novamente ou entre em contato diretamente.', 'error');
                
                // Voltar ao estado original após 3 segundos
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                }, 3000);
            }
        });
    }

    // Efeito de hover nos projetos
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
            card.style.boxShadow = 'var(--shadow-xl)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
            card.style.boxShadow = 'var(--shadow-md)';
        });
    });

    // Animações de contador nos stats
    const stats = document.querySelectorAll('.stat h3');
    const animateCounter = (element, target) => {
        let current = 0;
        const increment = target / 100;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current) + (target === 100 ? '%' : '+');
        }, 20);
    };

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statElement = entry.target;
                const text = statElement.textContent;
                const number = parseInt(text.replace(/\D/g, ''));
                
                if (number) {
                    statElement.textContent = '0' + (text.includes('%') ? '%' : '+');
                    animateCounter(statElement, number);
                }
            }
        });
    }, { threshold: 0.5 });

    stats.forEach(stat => {
        statsObserver.observe(stat);
    });
});

// Função para criar partículas
function createParticles(container) {
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 4 + 1 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = 'var(--primary-color)';
        particle.style.borderRadius = '50%';
        particle.style.opacity = Math.random() * 0.5 + 0.1;
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animation = `float ${Math.random() * 10 + 10}s linear infinite`;
        particle.style.animationDelay = Math.random() * 10 + 's';
        
        container.appendChild(particle);
    }
}

// Efeito de cursor personalizado
document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.cursor');
    if (cursor) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    }
});

// Adicionar cursor personalizado ao body
const cursor = document.createElement('div');
cursor.className = 'cursor';
cursor.style.cssText = `
    position: fixed;
    width: 20px;
    height: 20px;
    background: var(--primary-color);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    opacity: 0.7;
    transition: transform 0.1s ease;
`;
document.body.appendChild(cursor);

// Efeito de cursor em elementos interativos
const interactiveElements = document.querySelectorAll('a, button, .skill-item, .project-card');
interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(1.5)';
        cursor.style.background = 'var(--accent-color)';
    });
    
    el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        cursor.style.background = 'var(--primary-color)';
    });
});
