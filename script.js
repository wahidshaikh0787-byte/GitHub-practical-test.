// Minimalist Interactive JavaScript
document.addEventListener('DOMContentLoaded', () => {
    // 1. Theme Toggle (Black / White)
    const themeBtn = document.getElementById('theme-btn');
    const body = document.body;

    const savedTheme = localStorage.getItem('site-theme');
    if (savedTheme === 'light') {
        body.classList.add('light');
    }

    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            body.classList.toggle('light');
            const isLight = body.classList.contains('light');
            localStorage.setItem('site-theme', isLight ? 'light' : 'dark');
        });
    }

    // 2. Greeting Interaction
    const greetBtn = document.getElementById('greet-btn');
    const greetingText = document.getElementById('greeting-text');

    if (greetBtn && greetingText) {
        greetBtn.addEventListener('click', () => {
            const hour = new Date().getHours();
            const timeGreeting = hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening';
            greetingText.textContent = `${timeGreeting}! Thanks for stopping by Wahid Shaikh's portfolio.`;
        });
    }

    // 3. Contact Form Submission
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm && formStatus) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value.trim();
            formStatus.textContent = `Thank you, ${name}. Message received.`;
            contactForm.reset();
            setTimeout(() => {
                formStatus.textContent = '';
            }, 4000);
        });
    }
});
