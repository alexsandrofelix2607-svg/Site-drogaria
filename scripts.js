// Efeito de sombra no header quando rola a página
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (header) {
        if (window.scrollY > 50) {
            header.classList.add('shadow');
        } else {
            header.classList.remove('shadow');
        }
    }
});

const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

function closeMenu() {
    if (!menu || !menuToggle) return;

    menu.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Abrir menu');
    menuToggle.innerHTML = '<i class="fa-solid fa-bars" aria-hidden="true"></i>';
}

if (menuToggle && menu) {
    menuToggle.addEventListener('click', function() {
        const isOpen = menu.classList.toggle('is-open');
        menuToggle.setAttribute('aria-expanded', String(isOpen));
        menuToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
        menuToggle.innerHTML = isOpen
            ? '<i class="fa-solid fa-xmark" aria-hidden="true"></i>'
            : '<i class="fa-solid fa-bars" aria-hidden="true"></i>';
    });

    menu.addEventListener('click', function(event) {
        if (event.target.closest('a')) {
            closeMenu();
        }
    });
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeMenu();
    }
});
