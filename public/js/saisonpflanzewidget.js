document.addEventListener("DOMContentLoaded", () => {
    const saisonPflanzen = {
        0:  { name: "Winterruhe im Garten", bild: "../Bilder/pflanze_jaenner.jpg", gedicht: "Du lieber Frühling! Wohin bist du gegangen? \n Noch schlägt mein Herz, was deine Vögel sangen. \n Die ganze Welt war wie ein Blumenstrauß, \n längst ist das aus! \n Die ganze Welt ist jetzt, o weh, \n Barfüßle im Schnee. \n Die schwarzen Bäume stehn und frieren, \n im Ofen die Bratäpfel musizieren, \n das Dach hängt voll Eis. \n Und doch: bald kehrst du wieder, ich weiß, ich weiß! \n Bald kehrst du wieder, \n o nur ein Weilchen, \n und blaue Lieder \n duften die Veilchen! \n \n - Arno Holz" },
        1:  { name: "Winterling", bild: "../Bilder/pflanze_februar.jpg", gedicht: "Vor meinem Haus, da liegen Blätter \n noch aus dem Vorjahr, schon verdorrt \n und mitten drin, trotz Winterwetter, \n der Winterling: Ein Zauberwort! \n Der frühe Bote, gelb sein Glänzen, \n spartanisch weist zum Frühling vor. \n Der Winter findet seine Grenzen. \n Es öffnet sich schon sacht mein Tor. \n \n - Anton Schlittmaier" },
        2:  { name: "Schneeglöckchen", bild: "../Bilder/pflanze_maerz.jpg", gedicht: "Schneeglöckchen, ei, bist du schon da? \n Ist denn der Frühling schon so nah? \n Wer lockte dich hervor ans Licht? \n Trau doch dem Sonnenscheine nicht! \n Wohl gut er's eben heute meint, \n Wer weiß, ob er dir morgen scheint? \n 'Ich warte nicht, bis alles grün; \n Wenn meine Zeit ist, muss ich blühn.' \n \n - Hugo von Hofmannsthal" },
        3:  { name: "Apfel", bild: "../Bilder/pflanze_april.jpg", gedicht: "Der Apfel war nicht gleich am Baum \n Da war erst lauter Blüte. \n Das war erst lauter Blütenschaum \n und lauter Lieb und Güte. \n Dann waren Blätter grün an grün \n und grün an grün nur Blätter. \n Die Amsel nach des Tages Mühn, \n sie sang ihr Abendlied gar kühn \n und auch bei Regenwetter. \n Der Herbst, der macht die Blätter steif \n der Sommer muß sich packen. \n Hei! Daß ich auf die Finger pfeif \n da sind die ersten Äpfel reif \n und haben rote Backen. \n Und was bei Sonn` und Himmel war \n erquickt nun Mund und Magen \n und macht die Augen hell und klar. \n So rundet sich das Apfeljahr \n und mehr ist nicht zu sagen. \n \n - Hermann Claudius" },
        4:  { name: "Vogelbeere", bild: "../Bilder/pflanze_mai.jpg", gedicht: "Sommergrün am Feldesrain, \n oft lädt sie zum Verweilen ein. \n In den Zweigen dort im Baum, \n Purpur Rot ein Früchtetraum. \n Gereift für alle ein Genuss, \n genannt lateinisch Sorbus. \n Immer wieder Jahr für Jahr, \n trägt sie Beeren wunderbar. \n Ihre Krone weit verzweigt, \n federzart ihr Blätterkleid. \n Eberesche meist genannt \n als Vogelbeere auch bekannt. \n Von Amsel, Drossel sehr begehrt, \n von andren Tieren auch verehrt. \n \n - Nora Marquardt" },
        5:  { name: "Löwenzahn", bild: "../Bilder/pflanze_juni.jpg", gedicht: "Fliegen im Juni auf weißer Bahn \n flimmernde Monde vom Löwenzahn, \n liegst du versunken im Wiesenschaum, \n löschend der Monde flockenden Flaum. \n Wenn du sie hauchend im Winde drehst, \n Kugel auf Kugel sich weiß zerbläst, Lampen, \n die stäubend im Sommer stehn, \n wo die Dochte noch wolliger wehe. \n Leise segelt das Löwenzahnlicht \n über dein weißes Wiesengesicht, \n segelt wie eine Wimper blaß \n in das zottig wogende Gras. \n Monde um Monde wehten ins Jahr, \n wehten wie Schnee auf Wange und Haar. \n Zeitlose Stunde, die mich verließ, \n da sich der Löwenzahn weiß zerblies. \n \n - Peter Huchel" },
        6:  { name: "Mohnblume", bild: "../Bilder/pflanze_juli.jpg", gedicht: "Mit roten Feldmohnblumen \n hatt' ich dein Haar geschmückt, \n die roten Blumenblätter \n die sind nun alle zerdrückt. \n Du bist zu mir gekommen \n beim Abendsonnenschein, \n und als die Nacht hereinbrach, \n da ließest du mich allein. \n Ich höre die Stille rauschen \n und seh' die Dunkelheit sprühn, \n vor meinen träumenden Augen \n purpurne Mohnblumen blühn. \n \n - Hermann Löns" },
        7:  { name: "Lavendel", bild: "../Bilder/pflanze_august.jpg", gedicht: "Lavendel steht in voller Blüte, \n sein Duft ist von betörend Güte; \n da wimmelt es nur so von Hummeln, \n die sich um ihre Nahrung tummeln. \n Auch Schmetterlinge sich erfreuen, \n die ihren Anflug nicht bereuen; \n für sie ist das von Bedeutsamkeit, \n sie laben sich an der Köstlichkeit. \n Sehr schön ist die Lavendelblüte, \n und sie stärkt unsre Wohlgemüte; \n wir stehn im Einklang mit der Natur, \n und wir sind ein Teil ihrer Struktur. \n \n - Adalbert Nagele" },
        8:  { name: "Sonnenblume", bild: "../Bilder/pflanze_september.jpg", gedicht: "Über den Gartenzaun schob sie \n Ihr gelbes Löwenhaupt, \n Zwischen den Bohnen erhob sie \n Sich, gold und gelb überstaubt. \n Die Sonne kreist im Blauen \n Nicht größer, als ihr gelbes Rad \n Zwischen den grünen Stauden, \n Den Bohnen und jungem Salat. \n \n - Georg Britting" },
        9:  { name: "Efeu", bild: "../Bilder/pflanze_oktober.jpg", gedicht: "Efeu und ein zärtlich Gemüt, \n heftet sich an und grünt und blüht, \n kann es weder Stamm noch Mauer \n finden, es muß verdorren, es muß verschwinden. \ \n - Johann Wolfgang von Goethe" },
        10:  { name: "Winterruhe im Garten", bild: "../Bilder/pflanze_november.jpg", gedicht: "Du lieber Frühling! Wohin bist du gegangen? \n Noch schlägt mein Herz, was deine Vögel sangen. \n Die ganze Welt war wie ein Blumenstrauß, \n längst ist das aus! \n Die ganze Welt ist jetzt, o weh, \n Barfüßle im Schnee. \n Die schwarzen Bäume stehn und frieren, \n im Ofen die Bratäpfel musizieren, \n das Dach hängt voll Eis. \n Und doch: bald kehrst du wieder, ich weiß, ich weiß! \n Bald kehrst du wieder, \n o nur ein Weilchen, \n und blaue Lieder \n duften die Veilchen! \n \n - Arno Holz" },
        11:  { name: "Winterruhe im Garten", bild: "../Bilder/pflanze_dezember.jpg", gedicht: "Du lieber Frühling! Wohin bist du gegangen? \n Noch schlägt mein Herz, was deine Vögel sangen. \n Die ganze Welt war wie ein Blumenstrauß, \n längst ist das aus! \n Die ganze Welt ist jetzt, o weh, \n Barfüßle im Schnee. \n Die schwarzen Bäume stehn und frieren, \n im Ofen die Bratäpfel musizieren, \n das Dach hängt voll Eis. \n Und doch: bald kehrst du wieder, ich weiß, ich weiß! \n Bald kehrst du wieder, \n o nur ein Weilchen, \n und blaue Lieder \n duften die Veilchen! \n \n - Arno Holz" },
    };

    const aktuellerMonat = new Date().getMonth();
    const aktuellePflanze = saisonPflanzen[aktuellerMonat]

    const imgDashboard = document.getElementById("plant-img");
    const nameDashboard = document.getElementById("plant-name");
    const openModalBtn = document.getElementById("open-plant-modal");

    const modal = document.getElementById("plant-modal");
    const closeModalBtn = document.getElementById("close-plant-modal");
    const modalName = document.getElementById("modal-plant-name");
    const modalImg = document.getElementById("modal-plant-img");
    const modalPoem = document.getElementById("modal-plant-poem");

    if (aktuellePflanze) {
        nameDashboard.textContent = aktuellePflanze.name;
        imgDashboard.src = aktuellePflanze.bild;

        openModalBtn.addEventListener("click", (e) => {
            modalName.textContent = aktuellePflanze.name;
            modalImg.src = aktuellePflanze.bild;
            modalPoem.textContent = aktuellePflanze.gedicht;
            modal.style.display = "flex";

            if(window.lucide) lucide.createIcons();
        });
    }

    closeModalBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});