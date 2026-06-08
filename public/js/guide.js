document.addEventListener("DOMContentLoaded", () => {
    
    // Datenbank
    const beeFacts = [
        "Eine Vielfalt an Blütenpflanzen wählen: Diese enthalten wertvollen Nektar und Pollen. Klee, Kornblumen, Lavendel, Salbei und Sonnenblumen sind sehr bienenfreundlich. ",
        "Heimische statt exotischer Pflanzen: Exotische und gezüchtete Pflanzen sind vielmehr zur Zierde geeignet, heimische Pflanzen bieten hingegen ausreichend Nahrung für unsere Bienen.",
        "Früh- und Spätblüher integrieren: Während Frühblüher wie Schneeglöckchen und Krokusse die Bienen nach dem Winter versorgen, helfen ihnen Spätblüher wie Astern durch den Herbst.",
        "Natürlichkeit statt Perfektion: Ein naturbelassener Garten ist ein sicherer Lebensraum für Bienen, Insekten und Tiere.",
        "Wildblumenwiesen pflanzen: Im Gegensatz zu gemähtem Rasen bieten Wildblumen Nahrung und stellen einen Lebensraum für Bienen und Insekten dar.",
        "Nistmöglichkeiten belassen: Pflanzenstängel und Totholz werden von Bienen zum Nisten genutzt.",
        "Insektenhotels aufstellen: Spezielle Insektenhotels können erworben oder sogar selbst gebastelt werden und unterstützen die Bienen beim Nisten und Überwintern.",
        "Wasser zur Verfügung stellen: Flache, mit Wasser gefüllte Gefäße dienen als Wasserquelle. Die Bienen können auf den Steinen landen und ertrinken somit nicht. ",
        "Pestizide durch natürliche Alternativen ersetzen: Pestizide schaden auch jenen Gartenbewohnern, die eigentlich unseren Schutz brauchen. Hier sollte auch natürliche Mittel zurückgegriffen werden."
    ];

    const factTitle = document.getElementById("fact-title");
    const factText = document.getElementById("fact-text");
    const prevBtn = document.getElementById("fact-prev");
    const nextBtn = document.getElementById("fact-next");
    
    if (!factText || !prevBtn || !nextBtn) return;

    let currentIndex = 0;
    
    function showFact(index) {
        factText.classList.remove("fade-text");
        void factText.offsetWidth;

        const parts = beeFacts[index].split(":");

        factTitle.textContent = parts[0];
        factText.textContent = parts.slice(1).join(":").trim();

        factText.classList.add("fade-text");
    }

    function nextFact() {
        currentIndex = (currentIndex + 1) % beeFacts.length;
        showFact(currentIndex);
    }

    function prevFact() {
        currentIndex = (currentIndex - 1 + beeFacts.length) % beeFacts.length;
        showFact(currentIndex);
    }

    nextBtn.addEventListener("click", nextFact);
    prevBtn.addEventListener("click", prevFact);

    showFact(currentIndex);

});