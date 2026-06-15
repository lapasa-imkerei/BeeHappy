document.addEventListener("DOMContentLoaded", () => {

    const zielSeiten = [
        "/public/seiten/Dashboard.html",
        "/public/seiten/Bienenvolk.html",
        "/public/seiten/Bienenfreundlich.html",
        "/public/seiten/Vereinskalender.html",
        "/public/seiten/quiz.html"
    ];

    const wabenLinks = document.querySelectorAll(".honeycomb-link");

    wabenLinks.forEach((link, index) => {
        if (zielSeiten[index]) {
            link.setAttribute("href", zielSeiten[index]);
        }
    });
});