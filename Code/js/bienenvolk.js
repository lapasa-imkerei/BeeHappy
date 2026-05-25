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
        text: "<p>Die einzige und wichtigste Aufgabe des Drohns ist die Paarung mit einer Jungkönigin eines anderen Volkes. Auf sogenannten Drohnensammelplätzen kommen tausende Männchen zusammen, um im Flug ihre Gene weiterzugeben. Für den perfekten Hochzeitsflug sind sie optimal ausgestattet: Sie sind extrem schnelle Flieger und besitzen riesige Facettenaugen, um die Königin in der Luft sofort zu erspähen. Tragisch: Direkt nach der erfolgreichen Begattung stirbt der Drohn. Im Spätsommer folgt die 'Drohnenschlacht': Die Arbeiterinnen verwehren den Männchen den Zutritt zum Stock und überlassen sie dem Hungertod, da sie im Winter nicht mehr gebraucht werden.</p><p><strong>Merkmale:</strong> Große, aneinanderstoßende Augen, kräftige Flügel, pummeliger Körperbau, deutlich größer als eine Arbeiterin und absolut wehrlos, da sie keinen Stachel besitzen.</p>"
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
        text: "<p>Die Brut ist die Kinderstube des Bienenstocks und zeigt dem Imker sofort, wie gesund das Volk und die Königin sind. Die Entwicklung verläuft in präzisen Stadien: Vom winzigen Ei ('Stift') über die offene Larve (die von den Ammenbienen im Futtersaft regelrecht ertränkt wird) bis hin zur verdeckelten Puppe, aus der schließlich die fertige Biene schlüpft. Ein schönes, lückenloses Brutnest ist das beste Zeichen für eine vitale Königin.</p><p><strong>Merkmale:</strong> Man unterscheidet zwischen Arbeiterinnenbrut (flache, gleichmäßige Wachsdeckel) und Drohnenbrut (deutlich größere, nach oben gewölbte Deckel, die oft am Rand oder im unteren Bereich der Waben sitzen). Ein lückenhaftes, 'schrotschussartiges' Brutnest kann auf Krankheiten oder eine alte Königin hindeuten.</p>"
    },
    pollen: {
        title: "Der Pollen",
        img: "../Bilder/arbeiterin.jpg",
        text: "<p>Während Honig das Benzin der Bienen ist, ist Pollen der Baustoff. Er liefert dem Volk lebenswichtige Proteine, Vitamine, Fette und Mineralstoffe. Ohne Pollen können die Ammenbienen keinen nahrhaften Futtersaft herstellen, wodurch keine Larven aufgezogen werden könnten. Die Flugbienen sammeln den Blütenstaub draußen, pressen ihn mit etwas Spucke zusammen und transportieren ihn als bunte Pakete an den Hinterbeinen zurück in den Stock.</p><p><strong>Bienenbrot & Ernte:</strong> Im Bienenstock wird der Pollen rund um das Brutnest als sogenanntes 'Bienenbrot' eingelagert. Die Bienen stampfen ihn mit dem Kopf in die Zellen und machen ihn durch Fermente und Honig haltbar. Auch für Menschen ist der Blütenstaub ein wertvolles Nahrungsmittel. Er liefert Vegetariern wichtiges Eiweiß und kann bei Infektanfälligkeit, Gelenkentzündungen und Darmproblemen unterstützen. (Allergiker sollten jedoch vorsichtig sein!) Die Ernte ist für den Imker einfach: Er setzt eine sogenannte Pollenfalle am Flugloch ein, an deren Gitter die Bienen ihre Pollenhöschen beim Betreten des Stocks abstreifen.</p>"
    },
    honig: {
        title: "Das flüssige Gold: Der Honig",
        img: "../Bilder/honig_rot.jpg",
        text: "<p>Der Honig ist eines der wichtigsten Erzeugnisse der Biene. Je nach Tracht können sich rund 120 verschiedene Aromastoffe darin befinden. Honig ist dabei weit mehr als nur Zuckerwasser; er setzt sich aus hunderten Einzelsubstanzen zusammen.</p><p><strong>Inhaltsstoffe:</strong><br>• <strong>Zucker (ca. 75 - 80 %):</strong> Hauptsächlich die Einfachzucker Fruchtzucker (Fruktose) und Traubenzucker (Glukose). Je nach Pflanze variiert das Mischverhältnis, was bestimmt, ob ein Honig lange flüssig bleibt oder schnell fest wird.<br>• <strong>Wasser (max. 20 %):</strong> Der geringe Wasseranteil ist entscheidend für die lange Haltbarkeit.<br>• <strong>Restbestandteile:</strong> Hier stecken wertvolle Enzyme, Vitamine, Mineralstoffe und feine Aromen.</p><p><strong>Lagerung:</strong> Honig sollte am besten kühl, trocken und lichtgeschützt gelagert werden, damit die wertvollen Inhaltsstoffe und Enzyme lange erhalten bleiben.</p>"
    },
    wachs: {
        title: "Das Bienenwachs",
        img: "../Bilder/wachs.jpg",
        text: "<p>Bienenwachs wird von den Baubienen aus speziellen Wachsdrüsen am Hinterleib 'geschwitzt' und für den Bau der Waben genutzt. Es ist ein extrem vielseitiger Rohstoff, der weit über die klassische Bienenwachskerze hinaus Verwendung findet.</p><p><strong>Anwendungsgebiete:</strong> Es ist ein beliebter Bestandteil in der Kosmetik (Cremes, Lippenstifte, Lotionen, Pasten und Salben). Zusätzlich findet es Verwendung in der Lebensmittelindustrie (z. B. als Überzugsmittel), als natürliches Imprägniermittel, in Skiwachs oder in Wachsmalstiften für Kinder. Da es ein reines Naturprodukt ist, kann es auch unproblematisch konsumiert werden, beispielsweise wenn man ein Stück echten Wabenhonig isst.</p>"
    },
    perga: {
        title: "Perga (Bienenbrot)",
        img: "../Bilder/perga.jpg",
        text: "<p>Perga, oft auch Bienenbrot genannt, ist im Grunde fermentierter Blütenpollen mit antimikrobieller Wirkung. Die Bienen mischen den gesammelten Pollen mit ihrem Speichel sowie Nektar an und stampfen ihn fest in die Wabenzellen.</p><p><strong>Haltbarkeit durch Fermentation:</strong> Die gefüllte Zelle wird abschließend mit einer hauchfeinen Schicht Propolis überzogen. Durch diese Art der Milchsäuregärung (Fermentierung) wird der frische Blütenpollen für den Winter haltbar gemacht und für die Bienen (und den Menschen) noch leichter verdaulich.</p>"
    },
    propolis: {
        title: "Kittharz (Propolis)",
        img: "../Bilder/rähmchen.jpg",
        text: "<p>Propolis, auch Kittharz genannt, wird von den Bienen ähnlich wie der Pollen in den 'Höschen' an den Hinterbeinen gesammelt. Es besteht aus dem klebrigen Harz von Baumrinden und Knospen – vor allem von Birken, Buchen, Erlen, Fichten, Pappeln, Rosskastanien und Ulmen.</p><p><strong>Die Apotheke des Bienenstocks:</strong> Dieser Kitt wird im Bienenvolk benötigt, um die Innenwände zu überziehen, feine Ritzen abzudichten und das Flugloch vor Zugluft zu schützen. Viel wichtiger ist jedoch die stark antibakterielle und antivirale Wirkung: Die Bienen verhindern damit die Ausbreitung von Krankheiten und fäulniserzeugenden Bakterien. Sogar eingedrungene Mäuse oder Insekten, die zu schwer zum Abtransportieren sind, werden mit Propolis komplett mumifiziert.</p><p><strong>Anwendungsgebiete (Mensch):</strong> Hautpflege, Wundbehandlung, Mundwasser, Nasenspray, Tinkturen, Tabletten und Salben.</p>"
    },
    gelee: {
        title: "Gelée Royale",
        img: "../Bilder/wz.jpg",
        text: "<p>Gelée Royale ist der exklusive Futtersaft, den die Bienen für die Aufzucht einer neuen Königin produzieren. Nur Larven, die zu einer Königin heranwachsen sollen, werden ihr Leben lang ausschließlich mit diesem energiereichen Saft gefüttert.</p><p><strong>Aufwendige Ernte:</strong> Um dieses Produkt zu ernten, benötigen Imker viel Erfahrung und spezielles Werkzeug. Dem Volk muss die Königin entnommen werden, woraufhin künstliche Königinnenbrutzellen eingesetzt werden. Die Bienen füllen diese Zellen mit Gelée Royale, um neue Königinnen heranzuziehen. Nach drei Tagen wird die Larve entfernt und der Saft abgesaugt. So lassen sich bis zu 500 Gramm pro Volk gewinnen. Ein Großteil des weltweit gehandelten Gelée Royale stammt aus China und erzielt hohe Preise.</p><p><strong>Kritik & Inhaltsstoffe:</strong> Das Entfernen der Königin bedeutet enormen Stress für das Bienenvolk, weshalb die Ernte von vielen regionalen Imkern kritisch gesehen oder komplett abgelehnt wird. Der Saft (bestehend aus ca. 60-70 % Wasser, 10-23 % Zucker, Proteinen, Aminosäuren, Vitaminen und Mineralstoffen) wird beim Menschen vor allem in der Kosmetik (Anti-Aging) und als Nahrungsergänzungsmittel eingesetzt. <em>Achtung: Er kann allergische Reaktionen auslösen!</em></p>"
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