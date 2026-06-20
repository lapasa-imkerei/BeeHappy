document.addEventListener("DOMContentLoaded", () => {

    const zielSeiten = [
        "seiten/Dashboard.html",
        "seiten/Bienenvolk.html",
        "seiten/Bienenfreundlich.html",
        "seiten/Vereinskalender.html",
        "seiten/quiz.html"
    ];

    const wabenLinks = document.querySelectorAll(".honeycomb-link");

    wabenLinks.forEach((link, index) => {
        if (zielSeiten[index]) {
            link.setAttribute("href", zielSeiten[index]);
        }
    });
});