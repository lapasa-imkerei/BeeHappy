const sidebar = document.querySelector('.sidebar');
const sidebarToggler = document.querySelector('.sidebar-toggler');
const menuToggler = document.querySelector('.menu-toggler');

sidebarToggler.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
});

menuToggler.addEventListener('click', () => {
    sidebar.classList.toggle('show-mobile-menu');

    
    const icon = menuToggler.querySelector('i');
    if (sidebar.classList.contains('show-mobile-menu')) {
        icon.setAttribute('data-lucide', 'x');
    } else {
        icon.setAttribute('data-lucide', 'menu');
    }
    lucide.createIcons(); 
});


// Aktive Seite ozoang
const currentFile = window.location.pathname.split('/').pop() || 'index.html';

document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    
    const linkFile = href.split('/').pop();
    
    if (linkFile === currentFile) {
        link.classList.add('active');
    }
});