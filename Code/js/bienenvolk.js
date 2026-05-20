// Datenbank
const modalData = {
    koenigin: {
        title: "Die Königin",
        img: "../Bilder/koenigin.jpg", 
        text: "<p>Ihre Hauptaufgabe ist es, den Fortbestand des Volkes zu sichern. Das schafft sie, indem sie in der Hochsaison bis zu 2.000 Eier am Tag legt. Arbeitet die Königin nicht zur Zufriedenheit des Volkes (z. B. wenn die Legeleistung nachlässt), wird sie von den Bienen still umgeweiselt – also abgesetzt und eine neue Königin herangezogen. Sie wird rund um die Uhr von ihren Ammenbienen gefüttert und gepflegt. Zudem verströmt sie Pheromone im Stock; diese signalisieren dem Volk, dass die Königin wohlauf ist. Die Genetik der Königin bestimmt maßgeblich, ob ein Bienenstock sanftmütig oder aggressiv agiert und wie fleißig gesammelt wird.</p><p><strong>Merkmale:</strong> Sie bestimmt das Geschlecht ihrer Eier selbst. Ihr Hinterleib läuft spitz zu (wegen der ausgeprägten Eierstöcke) und die Flügel bedecken im Gegensatz zur Arbeiterin nicht ihren gesamten Körper. Ihr Stachel hat keinen Widerhaken. Eine unbegattete Königin ist wesentlich schlanker als eine begattete.</p>"
    },
    drohn: {
        title: "Der Drohn (Männchen)",
        img: "../Bilder/drohn.jpg",
        text: "<p>Die einzige und wichtigste Aufgabe des Drohns ist die Paarung mit einer Jungkönigin eines anderen Volkes. Auf sogenannten Drohnensammelplätzen kommen tausende Männchen zusammen, um im Flug ihre Gene weiterzugeben. Für den perfekten Hochzeitsflug sind sie perfekt ausgestattet: Sie sind extrem schnelle Flieger und besitzen riesige Facettenaugen, um die Königin in der Luft sofort zu erspähen. Tragisch: Direkt nach der erfolgreichen Begattung stirbt der Drohn. Im Spätsommer folgt die 'Drohnenschlacht': Die Arbeiterinnen verwehren den Männchen den Zutritt zum Stock und überlassen sie dem Hungertod, da sie im Winter nicht mehr gebraucht werden.</p><p><strong>Merkmale:</strong> Große, aneinanderstoßende Augen, kräftige Flügel, pummeliger Körperbau, deutlich größer als eine Arbeiterin und absolut wehrlos, da sie keinen Stachel besitzen.</p>"
    },
    arbeiterin: {
        title: "Die Arbeiterin", 
        img: "../Bilder/arbeiterin.jpg",
        text: "<p>Die Arbeiterinnen stellen die absolute Mehrheit im Stock und sind wahre Allround-Talente. Ihr Leben ist ein strikter Karriereplan, der sich nach ihrem Alter richtet: Sie startet als Putzbiene, wird dann Ammenbiene (Kindermädchen), Baubiene (Architektin), Wächterin am Flugloch und verbringt die zweite Hälfte ihres Lebens als Flugbiene (Sammlerin für Nektar, Pollen und Wasser).</p><p><strong>Merkmale:</strong> Perfekt ausgeprägte Mundwerkzeuge, ein langer Saugrüssel zum Nektarsaugen und spezielle Wachsdrüsen. Sie wiegt nur halb so viel wie eine Königin oder ein Drohn. Ihre Eierstöcke sind verkümmerte Ovarien – nur bei langanhaltender Weisellosigkeit (Fehlen der Königin) fangen manche Arbeiterinnen an, Eier zu legen. Da diese unbefruchtet sind, entsteht daraus rein männliche 'Drohnenbrütigkeit'.</p>"
    },
    futter: {
        title: "Der Futtervorrat",
        img: "../Bilder/honigvorrat.jpg",
        text: "<p>Der Futtervorrat (eingetragener Honig oder Winterfutter) ist die Lebensversicherung des Bienenvolkes. Die Bienen nutzen den Honig als reinen Energielieferanten (Kohlenhydrate), um zu fliegen, Wachs zu schwitzen und im Winter den gesamten Stock – und vor allem die Wintertraube – auf molligen 20 bis 30 Grad zu halten. Ein optimaler Futtervorrat ist überlebenswichtig: Geht das Futter im späten Frühjahr oder während einer Schlechtwetterperiode aus, droht dem Volk der Hungertod.</p><p><strong>Merkmale:</strong> Reifer Honig wird von den Bienen in den Zellen mit einer hauchdünnen, weißen Wachsschicht ('verdeckelt') versehen. Das schützt den Honig vor Feuchtigkeit und macht ihn unbegrenzt haltbar. Unverdeckelte Zellen enthalten frischen, noch zu feuchten Nektar.</p>"
    },
    brut: {
        title: "Die Brut",
        img: "../Bilder/rähmchen.jpg",
        text: "<p>Die Brut ist die Kinderstube des Bienenstocks und zeigt dem Imker sofort, wie gesund das Volk und die Königin sind. Die Entwicklung verläuft in präzisen Stadien: Vom winzigen Ei ('Stift') über die offene Larve (die von den Ammenbienen im Futtersaft regelrecht ertränkt wird) bis hin zur verdeckelten Puppe, aus der schließlich die fertige Biene schlüpft. Ein schönes, lückenloses Brutnest ist das beste Zeichen für eine vitale Königin.</p><p><strong>Merkmale:</strong> Man unterscheidet zwischen Arbeiterinnenbrut (flache, gleichmäßige Wachsdeckel) und Drohnenbrut (deutlich größere, nach oben gewölbte Deckel, die oft am Rand oder im unteren Bereich der Waben sitzen). Ein lückenhaftes 'schrotshussartiges' Brutnest kann auf Krankheiten oder eine alte Königin hindeuten.</p>"
    },
    pollen: {
        title: "Der Pollen",
        img: "../Bilder/arbeiterin.jpg",
        text: "<p>Während Honig das Benzin der Bienen ist, ist Pollen die Baustubstanz. Pollen liefert dem Volk lebenswichtige Proteine, Vitamine, Fette und Mineralstoffe. Ohne Pollen können die Ammenbienen keinen nahrhaften Futtersaft herstellen, wodurch keine Larven aufgezogen werden könnten. Die Flugbienen sammeln den Blütenstaub draußen, pressen ihn mit etwas Spucke zusammen und transportieren ihn als bunte Pakete an den Hinterbeinen zurück in den Stock.</p><p><strong>Merkmale:</strong> Im Bienenstock wird der Pollen rund um das Brutnest als sogenanntes 'Bienenbrot' eingelagert. Die Bienen stampfen ihn mit dem Kopf in die Zellen und machen ihn durch die Zugabe von Fermenten und Honig haltbar. Auf den Waben erkennt man Pollen sofort an den wunderschönen, bunten Farbkreisen (von leuchtend gelb über orange bis rot oder fast schwarz).</p>"
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById('bento-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalImg = document.getElementById('modal-img');
    const closeBtn = document.getElementById('close-bento-modal');

    document.body.appendChild(modal);

    document.querySelectorAll('.volk-pill').forEach(button => {
        button.addEventListener('click', () => {
            const topic = button.getAttribute('data-topic');
            const data = modalData[topic];

            if (data) {
                modalTitle.textContent = data.title;
                modalDesc.innerHTML = data.text;
                modalImg.src = data.img;
                
                modal.classList.add('active');
                document.body.style.overflow = 'hidden'; 
            }
        });
    });

    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto'; 
    };

    closeBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
    });
});