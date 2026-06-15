document.addEventListener("DOMContentLoaded", () => {
    const saisonPflanzen = {
        0:  { name: "Pflanze Jänner", bild: "../Bilder/pflanze_jaenner.jpg", gedicht: "Gedicht folgt" },
        1:  { name: "Pflanze Februar", bild: "../Bilder/pflanze_februar.jpg", gedicht: "Gedicht folgt" },
        2:  { name: "Pflanze März", bild: "../Bilder/pflanze_maerz.jpg", gedicht: "Gedicht folgt" },
        3:  { name: "Pflanze April", bild: "../Bilder/pflanze_april.jpg", gedicht: "Gedicht folgt" },
        4:  { name: "Pflanze Mai", bild: "../Bilder/pflanze_mai.jpg", gedicht: "Gedicht folgt" },
        5:  { name: "Pflanze Juni", bild: "../Bilder/pflanze_juni.jpg", gedicht: "Gedicht folgt" },
        6:  { name: "Pflanze Juli", bild: "../Bilder/pflanze_juli.jpg", gedicht: "Gedicht folgt" },
        7:  { name: "Pflanze August", bild: "../Bilder/pflanze_august.jpg", gedicht: "Gedicht folgt" },
        8:  { name: "Pflanze September", bild: "../Bilder/pflanze_september.jpg", gedicht: "Gedicht folgt" },
        9:  { name: "Pflanze Oktober", bild: "../Bilder/pflanze_oktober.jpg", gedicht: "Gedicht folgt" },
        10:  { name: "Pflanze November", bild: "../Bilder/pflanze_november.jpg", gedicht: "Gedicht folgt" },
        11:  { name: "Pflanze Dezember", bild: "../Bilder/pflanze_dezember.jpg", gedicht: "Gedicht folgt" },
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