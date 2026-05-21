document.addEventListener("DOMContentLoaded", () => {
    
    // Datenbank
    const plants = [
        { 
            id: 1, 
            name: "Apfel | MALUS DOMESTICA", 
            season: ["Frühling"], 
            type: "Baum", 
            desc: "Blütezeit: April-Mai. <br> Kulturäpfel werden seit vielen Jahrunderten angebaut." 
        },

        { 
            id: 2, 
            name: "Süsskirsche | PRUNUS AVIUM", 
            season: ["Frühling"], 
            type: "Baum", 
            desc: "Blütezeit: April-Mai. <br> Er bildet im Frühjahr unzählige weiße Blüten, aus denen im Herbst Früchte werden." 
        },

        { 
            id: 3, 
            name: "Rosskastanie | AESCULUS SPP.", 
            season: ["Frühling", "Sommer"], 
            type: "Baum", 
            desc: "Blütezeit: April-Juni. <br> Beginnt im Frühjahr. Dieser Baum ist anfällig für verschiedene Krankheiten und Schädlinge, ist dafür sehr attraktiv für verschiedenste Insekten. Asculus indica oder A. californica sind winterhart und gute Alternativen" 
        },

        { 
            id: 4, 
            name: "Vogelbeere | SORBUS AUCUPARIA", 
            season: ["Frühling", "Sommer"], 
            type: "Baum", 
            desc: "Blütezeit: Mai-Juni. <br> Die Vogelbeere ist ein kleiner, winterharter Baum. Ihre weißen Blüten sind in dichten Rispen unterteilt. Sie ist nicht die wertvollste Bienenpflanze, gedeiht aber sehr gut auf mageren, sauren Böden." 
        },

        { 
            id: 5, 
            name: "Winterlinde | TILIA CORDATA", 
            season: ["Sommer"], 
            type: "Baum", 
            desc: "Blütezeit: Juni-Juli. <br> Linden sind große Bäume. Dieser Baum gehört zu den wertvollsten Binenpflanzen." 
        },

        { 
            id: 6, 
            name: "Scheinulme | EUCRYPHIA SPP.", 
            season: ["Sommer"], 
            type: "Baum", 
            desc: "Blütezeit: Juli-August. <br> Dieser Baum stammt ursprünglich aus den Regenwäldern in Chile, wo sie den Nektar für den Ulmo-Honig produziert haben. Sie ist nur mäßig Winterhart. Eucryphia x nymansensis und Nymansay sind ein wenig kälteverträglicher." 
        },

        { 
            id: 7, 
            name: "Salweide | SALIX CAPREA", 
            season: ["Frühling"], 
            type: "Strauch", 
            desc: "Blütezeit: März-April. <br> Bienen profitieren von kätzentragenden Gehölze wie Weide, Hasel und Erle, die ihre Pollen zu einer Zeit produzieren in der nach dem Winter dringend Eiweiß für die Aufzucht benötigt wird." 
        },

        { 
            id: 8, 
            name: "Blut-Johannisbeere | RIBES SANGUINEUM", 
            season: ["Frühling"], 
            type: "Strauch", 
            desc: "Blütezeit: April-Mai. <br> Alle Johannisbeer-Arten sind gute Bienenweidepflanzen. Selbst diejenigen die man nur wegen ihrer Früchte pflanzt." 
        },

        { 
            id: 9, 
            name: "Zwergmispel | COTONEASTER SPP.", 
            season: ["Frühling", "Sommer"], 
            type: "Strauch", 
            desc: "Blütezeit: Mai-Juni. <br> Die Zwergmispeln sind kleine Büsche aus der Familie der Rosengewächse. Ihre Blüten produzieren große Nektarmengen." 
        },

        { 
            id: 10, 
            name: "Lavendel | LAVENDULA x INTERMEDIA", 
            season: ["Sommer"], 
            type: "Strauch", 
            desc: "Blütezeit: Juli-August. <br> Der Lavendel ist eine der besten Bienenpflanzen. " 
        },

        { 
            id: 11, 
            name: "Besenheide | cALLUNA VULGARIS", 
            season: ["Sommer", "Herbst"], 
            type: "Strauch", 
            desc: "Blütezeit: Juni-September. <br> In Heidegebieten bedeckt die Pflanze weite Flächen und Imker können Heidehonig ernten. Die Pflanze ist auch ein sehr guter Nektarlieferant. " 
        },

        { 
            id: 12, 
            name: "Gewöhnlicher Efeu | HEDERA HELIX", 
            season: ["Herbst"], 
            type: "Strauch", 
            desc: "Blütezeit: September-Oktober. <br> Efeu ist einer der besten Lieferanten für Honig, wenn in der Umgebung kaum was blüht. " 
        },

        { 
            id: 13, 
            name: "Löwenzahn | TARAXACUM OFFICINALE", 
            season: ["Frühling"], 
            type: "Staude", 
            desc: "Blütezeit: April-Mai. <br> Der Löwenzahn eignet sich als Bienenpflanze fantastisch. Oft blüht er auch bis in den Oktober und bietet Pollen und Nektar. " 
        },

        { 
            id: 14, 
            name: "Brombeere | RUBUS FRUTICOSUS", 
            season: ["Sommer"], 
            type: "Staude", 
            desc: "Blütezeit: Juni-August. <br> Eine Pflanze die sehr viel Nektar und Pollen spendet und im Herbst Früchte trägt. " 
        },

        { 
            id: 15, 
            name: "Rosmarin | ROSMARINUS OFFICINALIS", 
            season: ["Frühling"], 
            type: "Staude", 
            desc: "Blütezeit: April-Juni. <br> Ein Küchenkraut, das auf trockenen Böden im Mittelmeerraum heimisch ist und als kleiner Strauch wächst. " 
        },

        { 
            id: 16, 
            name: "Weissklee | TRIFOLIUM REPENS", 
            season: ["Frühling", "Sommer", "Herbst"], 
            type: "Staude", 
            desc: "Blütezeit: Mai-Oktober. <br> Als Schmetterlingsblütler reichert sie den Boden mit Stickstoff an und ist eine der besten Nektarquellen. " 
        },

        { 
            id: 17, 
            name: "Oregano | ORIGANUM VULGARE", 
            season: ["Sommer", "Herbst"], 
            type: "Staude", 
            desc: "Blütezeit: Juli-September. <br> Ein beliebtes Küchenkraut, das bei Insekten beliebt ist." 
        },

        { 
            id: 18, 
            name: "Aster | ASTER SPP.", 
            season: ["Herbst"], 
            type: "Staude", 
            desc: "Blütezeit: September-Oktober. <br> Astern sind wuchsfreudig und ziehen Bestäuber an. " 
        },

        { 
            id: 18, 
            name: "Winterling | ERANTHIS HYEMALIS", 
            season: ["Frühling"], 
            type: "Zwiebelpflanze", 
            desc: "Blütezeit: Februar-März. <br> fdfdfd " 
        },

        { 
            id: 19, 
            name: "Dalmatiner Krokus | CROCUS TOMMASINIANUS", 
            season: ["Frühling"], 
            type: "Zwiebelpflanze", 
            desc: "Blütezeit: Februar-März. <br> fdfdfd " 
        },

        { 
            id: 20, 
            name: "Kleines Schneeglöckchen | GALANTHUS NIVALIS", 
            season: ["Frühling"], 
            type: "Zwiebelpflanze", 
            desc: "Blütezeit: Februar-März. <br> fdfdfd " 
        },

        { 
            id: 21, 
            name: "Blausternchen | SCILLA SIBERICA", 
            season: ["Frühling"], 
            type: "Zwiebelpflanze", 
            desc: "Blütezeit: März-April. <br> fdfdfd " 
        },

        { 
            id: 22, 
            name: "Schnittlauch | ALLIUM SCHOENOPRASUM", 
            season: ["Frühling"], 
            type: "Zwiebelpflanze", 
            desc: "Blütezeit: Mai-August. <br> fdfdfd " 
        },

        { 
            id: 23, 
            name: "Einjähriger Borretsch | BORAGO OFFICINALIS", 
            season: ["Frühling", "Sommer", "Herbst"], 
            type: "Einjährige", 
            desc: "Blütezeit: Mai-September. <br> fdfdfd " 
        },

        { 
            id: 24, 
            name: "Büschelschön | PHACELIA TANACETIFOLIA", 
            season: ["Sommer", "Herbst"], 
            type: "Einjährige", 
            desc: "Blütezeit: Juni-Oktober. <br> fdfdfd " 
        },

        { 
            id: 25, 
            name: "Sonnenblume | HELIANTHUS ANNUUS", 
            season: ["Sommer", "Herbst"], 
            type: "Einjährige", 
            desc: "Blütezeit: Juli-Oktober. <br> fdfdfd " 
        },

        { 
            id: 26, 
            name: "Jungfer im Grünen | NIGELLA DAMASCENA", 
            season: ["Sommer"], 
            type: "Einjährige", 
            desc: "Blütezeit: Juni-September. <br> fdfdfd " 
        },

        { 
            id: 27, 
            name: "Klatschmohn | PAPAVER RHOEAS", 
            season: ["Frühling", "Sommer"], 
            type: "Einjährige", 
            desc: "Blütezeit: Mai-Juli. <br> fdfdfd " 
        },

        { 
            id: 28, 
            name: "Hainblume | NEMOPHILA SPP.", 
            season: ["Sommer", "Herbst"], 
            type: "Einjährige", 
            desc: "Blütezeit: Juni-Oktober. <br> fdfdfd " 
        },

    ];

    let currentSeason = "all";
    let currentType = "all";
    let shoppingList = [];

    const grid = document.getElementById("pflanzen-grid");
    const seasonButtons = document.querySelectorAll("#filter-season .filter-btn");
    const typeButtons = document.querySelectorAll("#filter-type .filter-btn");
    const listContainer = document.getElementById("notizzettel-liste");
    const downloadBtn = document.getElementById("download-btn");

    function renderPlants() {
        grid.innerHTML = "";

        const filteredPlants = plants.filter(plant => {
            const matchSeason = currentSeason === "all" || plant.season.includes(currentSeason);
            const matchType = currentType === "all" || plant.type === currentType;
            return matchSeason && matchType;
        });

        if (filteredPlants.length === 0) {
            grid.innerHTML = "<p style='grid-column: 1/-1; text-align: center;'>Leider keine Pflanzen für diese Kombination gefunden.</p>";
            return;
        }

        filteredPlants.forEach((plant, index) => {
            const cardHTML = `
                <div class="galerie-card fade-in" style="animation-delay: ${index * 0.05}s;">
                    <span class="galerie-card-title">${plant.name}</span>
                    <p style="font-weight: 700; color: var(--c-sidebar); font-size: 0.95rem; margin-top: 0.8rem; margin-bottom: 0.8rem;">
                         ${plant.season.join(" & ")} • ${plant.type}
                    </p>
                    <p style="margin-bottom: 1.5rem;">${plant.desc}</p>
                    <button class="volk-pill add-to-list-btn" data-id="${plant.id}" style="width: 100%; margin-top: auto;">Hinzufügen</button>
                </div>
            `;
            grid.insertAdjacentHTML('beforeend', cardHTML);
        });

        document.querySelectorAll(".add-to-list-btn").forEach(btn => {
            btn.addEventListener("click", (e) => {
                const plantId = parseInt(e.currentTarget.getAttribute("data-id"));
                addToList(plantId);
            });
        });
    }

    seasonButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            seasonButtons.forEach(b => b.classList.remove("active"));
            e.target.classList.add("active");
            currentSeason = e.target.getAttribute("data-filter");
            renderPlants();
        });
    });

    typeButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            typeButtons.forEach(b => b.classList.remove("active"));
            e.target.classList.add("active");
            currentType = e.target.getAttribute("data-filter");
            renderPlants();
        });
    });

    function addToList(plantId) {
        const plant = plants.find(p => p.id === plantId);
        if (!shoppingList.some(p => p.id === plantId)) {
            shoppingList.push(plant);
            updateListUI();
        } else {
            alert(`${plant.name} steht bereits auf deinem Pflanzplan!`);
        }
    }

    function removeFromList(plantId) {
        shoppingList = shoppingList.filter(p => p.id !== plantId);
        updateListUI();
    }

    function updateListUI() {
        listContainer.innerHTML = "";
        
        if (shoppingList.length === 0) {
            listContainer.innerHTML = "<li class='empty-state'>Noch keine Pflanzen ausgewählt.</li>";
            downloadBtn.style.display = "none";
            return;
        }

        shoppingList.forEach(plant => {
            const li = document.createElement("li");
            li.className = "notizzettel-item fade-in";
            li.innerHTML = `
                <span>${plant.name} <small style="font-weight:normal;">(${plant.season.join(", ")})</small></span>
                <button class="remove-btn" data-id="${plant.id}">✖</button>
            `;
            listContainer.appendChild(li);
        });

        document.querySelectorAll(".remove-btn").forEach(btn => {
            btn.addEventListener("click", (e) => {
                removeFromList(parseInt(e.target.getAttribute("data-id")));
            });
        });

        downloadBtn.style.display = "block";
    }

    downloadBtn.addEventListener("click", () => {
        const printWindow = window.open('', '_blank');
        
        let printHTML = `
        <!DOCTYPE html>
        <html lang="de">
        <head>
            <meta charset="UTF-8">
            <title>Mein Pflanzplan</title>
            <style>
                body { font-family: sans-serif; color: #333; max-width: 800px; margin: 2rem auto; padding: 2rem; }
                h1 { color: #545454; border-bottom: 3px solid #e3ca94; padding-bottom: 0.5rem; }
                p.intro { color: #777; margin-bottom: 2rem; font-size: 1.1rem; }
                .plant-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }
                .plant-item { border: 2px solid #e3ca94; padding: 1.5rem; border-radius: 16px; page-break-inside: avoid; background-color: #fff9e6; }
                .plant-item h2 { margin: 0 0 0.8rem 0; font-size: 1.4rem; color: #545454; display: flex; align-items: center; }
                .plant-item p { margin: 0.3rem 0; color: #555; }
                .checkbox { width: 22px; height: 22px; border: 2px solid #545454; border-radius: 4px; display: inline-block; margin-right: 12px; background: white; }
                @media print { body { margin: 0; padding: 0; } .plant-item { background-color: transparent !important; } }
            </style>
        </head>
        <body>
            <h1>Pflanzen für meinen Garten</h1>
            <p class="intro">Auf dieser Liste stehen all deine ausgewählten Pflanzen.</p>
            <div class="plant-grid">
        `;

        shoppingList.forEach(plant => {
            printHTML += `
                <div class="plant-item">
                    <h2><span class="checkbox"></span>${plant.name}</h2>
                    <p><strong>Typ:</strong> ${plant.type}</p>
                    <p><strong>Pflanzzeit/Blüte:</strong> ${plant.season.join(" & ")}</p>
                </div>
            `;
        });

        printHTML += `
            </div>
            <script>
                setTimeout(() => { window.print(); }, 300);
            </script>
        </body>
        </html>
        `;

        printWindow.document.write(printHTML);
        printWindow.document.close();
    });

    renderPlants();
});