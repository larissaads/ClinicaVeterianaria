// script.js

// Script para animar o botão de login
const btnLogin = document.querySelector('.btn-login');

btnLogin.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.1)';
    this.style.transition = 'transform 0.3s ease';
});

btnLogin.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
});
