const sidebar = document.querySelector('.sidebar');
const sidebarToggler = document.querySelector('.sidebar-toggler');
const menuToggler = document.querySelector('.menu-toggler');

sidebarToggler.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
});

menuToggler.addEventListener('click', () => {
    sidebar.classList.toggle('show-mobile-menu');
    
    const icon = menuToggler.querySelector('span');
    icon.textContent = sidebar.classList.contains('show-mobile-menu') ? 'close' : 'menu';
});