/* ============================================
   MAIN.JS — Interaktivität
   ============================================ */

// ── HOBE AUF DEAKTIVIERT GESETZT _ WOASE GROD NED WOS DES MOCHT──────────


document.addEventListener('DOMContentLoaded', () => {

  // ── 1. Hamburger-Menü (Mobile) ────────────────
  const toggleBtn = document.getElementById('menu-toggle');
  const sidebar   = document.querySelector('.sidebar');
  const overlay   = document.getElementById('overlay');

  function sidebarOeffnen() {
    sidebar.classList.add('offen');
    toggleBtn.classList.add('aktiv');
    overlay.classList.add('aktiv');
    document.body.style.overflow = 'hidden';
  }

  function sidebarSchliessen() {
    sidebar.classList.remove('offen');
    toggleBtn.classList.remove('aktiv');
    overlay.classList.remove('aktiv');
    document.body.style.overflow = '';
  }

  toggleBtn?.addEventListener('click', () => {
    sidebar.classList.contains('offen') ? sidebarSchliessen() : sidebarOeffnen();
  });

  overlay?.addEventListener('click', sidebarSchliessen);

  // Escape-Taste schließt Sidebar
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') sidebarSchliessen();
  });


  // ── 2. Aktiven Menüpunkt markieren ────────────
  const navLinks = document.querySelectorAll('.sidebar-nav a');
  const aktuelleUrl = window.location.href;

  navLinks.forEach(link => {
    // Exakter Match oder Dateiname stimmt überein
    if (link.href === aktuelleUrl ||
        link.pathname === window.location.pathname) {
      link.classList.add('aktiv');
    }
  });


  // ── 3. Smooth Scroll für Anker-Links ──────────
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const ziel = document.querySelector(link.getAttribute('href'));
      if (ziel) {
        e.preventDefault();
        ziel.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });


  // ── 4. Resize: Sidebar auf Desktop immer offen ─
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      sidebarSchliessen();
    }
  });

});
