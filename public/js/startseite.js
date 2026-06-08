document.addEventListener("DOMContentLoaded", () => {
    // 1. Definiere die Pfade zu deinen vier Seiten in der exakten Reihenfolge der Waben
    const zielSeiten = [
        "/public/seiten/Dashboard.html",          /* 1. Wabe: Dashboard */
        "/public/seiten/Bienenvolk.html",         /* 2. Wabe: Im Bienenstock */
        "/public/seiten/Bienenfreundlich.html",   /* 3. Wabe: Bienen-Oase */
        "/public/seiten/Vereinskalender.html"     /* 4. Wabe: Kalender */
    ];

    // 2. Hole alle Waben-Links aus der Startseite
    const wabenLinks = document.querySelectorAll(".honeycomb-link");

    // 3. Jede Wabe ihren passenden Link zuweisen
    wabenLinks.forEach((link, index) => {
        if (zielSeiten[index]) {
            link.setAttribute("href", zielSeiten[index]);
        }
    });
});