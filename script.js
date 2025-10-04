// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const icon = themeToggle.querySelector('i');

// Check system preference
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'light' || (!savedTheme && !prefersDark)) {
    body.style.setProperty('--bg-body', 'var(--bg-body-light)');
    body.style.setProperty('--bg-card', 'var(--bg-card-light)');
    body.style.setProperty('--text-primary', 'var(--text-primary-light)');
    body.style.setProperty('--text-secondary', 'var(--text-secondary-light)');
    body.style.setProperty('--border', 'var(--border-light)');
    body.style.setProperty('--accent', 'var(--accent-light)');
    body.style.setProperty('--accent-hover', 'var(--accent-hover-light)');
    body.style.setProperty('--success', 'var(--success-light)');
    body.style.setProperty('--shadow', 'var(--shadow-light)');
    icon.className = 'fas fa-sun';
    localStorage.setItem('theme', 'light');
} else {
    localStorage.setItem('theme', 'dark');
}

themeToggle.addEventListener('click', () => {
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'light') {
        // Switch to dark
        body.style.setProperty('--bg-body', '#0f0f0f');
        body.style.setProperty('--bg-card', '#1a1a1a');
        body.style.setProperty('--text-primary', '#ffffff');
        body.style.setProperty('--text-secondary', '#a0a0a0');
        body.style.setProperty('--border', '#2d2d2d');
        body.style.setProperty('--accent', '#4fc3f7');
        body.style.setProperty('--accent-hover', '#29b6f6');
        body.style.setProperty('--success', '#4ade80');
        body.style.setProperty('--shadow', '0 4px 30px rgba(0,0,0,0.3)');
        icon.className = 'fas fa-moon';
        localStorage.setItem('theme', 'dark');
    } else {
        // Switch to light
        body.style.setProperty('--bg-body', '#fafafa');
        body.style.setProperty('--bg-card', '#ffffff');
        body.style.setProperty('--text-primary', '#1a1a1a');
        body.style.setProperty('--text-secondary', '#666666');
        body.style.setProperty('--border', '#e0e0e0');
        body.style.setProperty('--accent', '#2d7ff9');
        body.style.setProperty('--accent-hover', '#1a6be0');
        body.style.setProperty('--success', '#4ade80');
        body.style.setProperty('--shadow', '0 4px 20px rgba(0,0,0,0.08)');
        icon.className = 'fas fa-sun';
        localStorage.setItem('theme', 'light');
    }
});

// Form Submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const submitBtn = contactForm.querySelector('.btn');
    const originalText = submitBtn.innerHTML;

    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;

    // Simulate API call
    setTimeout(() => {
        alert('Message sent successfully! (This is a demo)');
        contactForm.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }, 1500);
});

// Intersection Observer for animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.animate').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});