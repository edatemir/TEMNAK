// --- Mobil Menü ---
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const mobileMenu = document.querySelector('.mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    mobileMenuButton.classList.toggle('active');
});

// --- Form Kontrolü ve Honeypot ---
const contactForm = document.querySelector('form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        const honeypot = contactForm.querySelector('.honeypot-field');
        if (honeypot && honeypot.value !== '') {
            // Bot spam tespit edildi
            e.preventDefault();
            console.warn('Spam bot form gönderimi engellendi.');
            return;
        }

        // Form gönderim işlemleri (isteğe bağlı AJAX veya normal submit)
        console.log('Form başarıyla gönderildi.');
    });
}

// --- Smooth Scroll (Opsiyonel, header linkler için) ---
const navLinks = document.querySelectorAll('.nav-link, .mobile-menu-link');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 80, // header yüksekliğini çıkar
                behavior: 'smooth'
            });
        }

        // Mobil menüyü kapat
        if (mobileMenu.classList.contains('open')) {
            mobileMenu.classList.remove('open');
            mobileMenuButton.classList.remove('active');
        }
    });
});
