document.addEventListener('DOMContentLoaded', () => {
    
    const startBtn = document.getElementById('start-quiz-btn');
    const skipBtn = document.getElementById('skip-quiz-btn');
        if (skipBtn) {
            skipBtn.addEventListener('click', () => {
                landingSection.style.display = 'none';
                resultsSection.style.display = 'block'
                const resultTitle = document.getElementById('result-title');
                const resultDesc = document.getElementById('result-desc');
                
                if (resultTitle) resultTitle.innerText = "Der Bienenstock";
                if (resultDesc) resultDesc.innerText = "Du hast das Quiz übersprungen.";
                const existingStats = document.querySelector('.stats-container');
                if (existingStats) existingStats.remove();
                if (typeof lucide !== 'undefined') lucide.createIcons();
            });
        }

    const landingSection = document.getElementById('quiz-landing');
    const augenContainer = document.getElementById('augen-container');
    const terminalSection = document.getElementById('quiz-terminal');
    const terminalWindow = document.querySelector('.terminal-window');
    const storyTextEl = document.getElementById('story-text');
    const choicesContainer = document.getElementById('choices-container');
    const resultsSection = document.getElementById('quiz-results');
    
    let punkte = { koenigin: 0, amme: 0, waechterin: 0, sammlerin: 0, baubiene: 0, drohn: 0 };
    let currentQuestionIndex = 0;

    const story = [
        {
            isDark: true,
            text: "Ah... du bist endlich da. Ich bin deine Mutter, die Königin. Schön, dich zu spüren. Noch liegst du verborgen im Wachs. Sag mir, mein Kind: Was fühlst du in dir?",
            choices: [
                { icon: "heart-plus", text: "Einen tiefen Drang, mich um andere zu kümmern.", points: { amme: 3 } },
                { icon: "sprout", text: "Unruhige Beine. Ich will etwas erschaffen!", points: { baubiene: 3 } },
                { icon: "bed", text: "Noch gar nichts. Ich ruhe in mir selbst.", points: { drohn: 3 } }
            ]
        },
        {
            isDark: true,
            text: "Verstehe... Die Dunkelheit umgibt dich noch. Wenn du jetzt eine Richtung wählen müsstest, wohin zieht es dich blind?",
            choices: [
                { icon: "arrow-up", text: "Nach oben. Dort spüre ich Wärme und Futter.", points: { amme: 1, baubiene: 1 } },
                { icon: "arrow-down", text: "Nach unten. Dort weht ein kühler Windzug von draußen.", points: { sammlerin: 3 } },
                { icon: "shrink", text: "In die Mitte. Genau dorthin, wo am meisten los ist.", points: { koenigin: 3, waechterin: 1 } }
            ]
        },
        {
            isDark: false, 
            text: "Zeit aufzuwachen. Du durchbeißt den Wachsdeckel. Das strahlende Licht des Stocks trifft dich! Das Gewusel ist ohrenbetäubend. Eine Schwester rempelt dich an. Was tust du?",
            choices: [
                { icon: "droplets", text: "Ich reiche ihr einen Tropfen Nektar, sie sieht erschöpft aus.", points: { amme: 2 } },
                { icon: "blocks", text: "Ich baue schnell die Wabe hinter mir zu, Ordnung muss sein.", points: { baubiene: 2 } },
                { icon: "door-open", text: "Ich dränge mich an ihr vorbei Richtung Ausgang!", points: { sammlerin: 2, waechterin: 1 } }
            ]
        },
        {
            isDark: false,
            text: "Der Luftdruck fällt spürbar, ein Sommergewitter zieht auf. Der Wind peitscht gegen den Fluglochspalt. Was ist dein erster Impuls?",
            choices: [
                { icon: "cloud-lightning", text: "Ich nutze die letzten Sonnenstrahlen für einen allerletzten Flug!", points: { sammlerin: 3 } },
                { icon: "hammer", text: "Ich dichte mit Propolis sofort die zugigen Ritzen am Eingang ab.", points: { baubiene: 3 } },
                { icon: "users", text: "Ich rücke eng mit meinen Schwestern zusammen, um die Bruttemperatur stabil zu halten.", points: { amme: 2, koenigin: 2 } }
            ]
        },
        {
            isDark: false,
            text: "Eine heimkehrende Schwester landet völlig erschöpft auf der Wabe und übergibt dir einen Tropfen frischen, sehr wässrigen Nektar.",
            choices: [
                { icon: "wind", text: "Ich fächere ausdauernd mit den Flügeln, um das Wasser verdunsten zu lassen.", points: { baubiene: 1, waechterin: 1 } },
                { icon: "droplet", text: "Ich nasche direkt einen kleinen Schluck davon. Herumhängen macht hungrig!", points: { drohn: 3 } },
                { icon: "eye", text: "Ich nehme ihn ab, behalte aber den Eingang im Blick. Wer weiß, wer ihr gefolgt ist.", points: { waechterin: 3, sammlerin: 1 } }
            ]
        },
        {
            isDark: false,
            text: "ALARM! Die Wächterinnen sondern Pheromone ab. Fremde Wespen sind am Flugloch gelandet!",
            choices: [
                { icon: "biceps-flexed", text: "Nichts wie hin! Ich verteidige unsere Familie mit meinem Stachel!", points: { waechterin: 4 } },
                { icon: "waves-vertical", text: "Ich bleibe bei der Brut und wärme die Zellen, komme was wolle.", points: { amme: 2, koenigin: 2 } },
                { icon: "siren", text: "Panik! Ich verstecke mich beim Honig...", points: { drohn: 4 } }
            ]
        },
        {
            isDark: false,
            text: "Der Platz im Stock wird knapp. Die Luft flirrt vor unruhiger Energie und ein tiefes Brummen durchzieht die Waben. Das Volk spaltet sich!",
            choices: [
                { icon: "map-pin", text: "Ich folge dem chaotischen Schwarm ins völlig Ungewisse!", points: { sammlerin: 2, baubiene: 1 } },
                { icon: "heart", text: "Ich bleibe zurück und kümmere mich um die neuen Weiselzellen.", points: { amme: 2 } },
                { icon: "sun", text: "Ich nutze das Chaos für einen Ausflug zum Drohnensammelplatz.", points: { drohn: 2 } },
                { icon: "crown", text: "Ich mache mich bereit, als neue Herrscherin den Stock zu übernehmen.", points: { koenigin: 4 } }
            ]
        }
    ];

            document.addEventListener('keydown', (e) => {
                    if (e.key === 'Escape' && document.body.classList.contains('quiz-immersion')) {
                        document.body.classList.toggle('show-quiz-sidebar'); 
                    }
            });

    startBtn.addEventListener('click', () => {
        landingSection.classList.add('fade-out');
        document.body.classList.add('quiz-immersion'); 
        
        setTimeout(() => {
            landingSection.style.display = 'none';
            terminalSection.style.display = 'flex';
            terminalWindow.classList.add('dark-phase'); 
            
            setTimeout(() => { showQuestion(currentQuestionIndex); }, 1000);
        }, 600);
    });





    function showQuestion(index) {
        choicesContainer.style.opacity = 0;
        choicesContainer.innerHTML = '';
        storyTextEl.innerHTML = '';
        
        const q = story[index];

        if (index > 0 && story[index-1].isDark === true && q.isDark === false) {
            triggerAwakening(q);
            return; 
        }

        typeWriter(q);
    }

    function triggerAwakening(q) {
        terminalSection.style.opacity = 0; 
        
        setTimeout(() => {
            augenContainer.style.display = 'flex'; 
            
            setTimeout(() => {
                terminalWindow.classList.remove('dark-phase');
                terminalWindow.classList.add('light-phase');
                document.body.classList.add('stock-magie'); 
                terminalSection.style.opacity = 1;
            }, 1500);

            setTimeout(() => {
                augenContainer.style.display = 'none';
                typeWriter(q);
            }, 3500);

        }, 500);
    }

    function typeWriter(q) {
        let charIndex = 0;
        function type() {
            if (charIndex < q.text.length) {
                storyTextEl.innerHTML += q.text.charAt(charIndex);
                charIndex++;
                setTimeout(type, 25);
            } else {
                generateChoices(q.choices);
            }
        }
        type();
    }

    function generateChoices(choices) {
        choices.forEach(choice => {
            const btn = document.createElement('button');
            btn.classList.add('choice-btn');
            
            if (choice.icon) {
                btn.innerHTML = `<i data-lucide="${choice.icon}"></i> ${choice.text}`;
            } else {
                btn.innerText = choice.text;
            }
            
            btn.addEventListener('click', () => {
                for (let rolle in choice.points) { punkte[rolle] += choice.points[rolle]; }
                currentQuestionIndex++;
                if (currentQuestionIndex < story.length) {
                    showQuestion(currentQuestionIndex);
                } else {
                    finishQuiz();
                }
            });
            choicesContainer.appendChild(btn);
        });
        
        if (typeof lucide !== 'undefined') lucide.createIcons();
        setTimeout(() => { choicesContainer.style.opacity = 1; }, 300);
    }

    function finishQuiz() {
    document.body.classList.remove('quiz-immersion'); 
    document.body.style.backgroundColor = ""; 
    
    const terminalSection = document.getElementById('quiz-terminal');
    const resultsSection = document.getElementById('quiz-results');
    
    terminalSection.style.display = 'none';
    resultsSection.style.display = 'block';
    
    let maxPunkte = 0;
    let gewinnerRolle = 'amme';
    
    for (let rolle in punkte) {
        if (punkte[rolle] > maxPunkte) {
            maxPunkte = punkte[rolle];
            gewinnerRolle = rolle;
        }
    }

    const resultDaten = {
        koenigin: { 
            titel: "Die Königin", 
            detail: "Als Königin bist du das absolute Herz des Stocks. Du triffst keine überstürzten Entscheidungen, sondern bewahrst stets die Ruhe. Deine Stärke liegt nicht in der direkten Aktion am Flugloch, sondern in der weitsichtigen Sicherung der Familie. Du bist der Dreh- und Angelpunkt, um den sich alles dreht – andere verlassen sich blind auf deine Stabilität."
        },
        amme: { 
            titel: "Die Ammenbiene", 
            detail: "Dein Altruismus ist grenzenlos. Du stellst die Bedürfnisse der Gemeinschaft und der nächsten Generation über deine eigenen. Im Gewusel des Stocks bist du diejenige, die füttert, wärmt und pflegt. Ohne deine soziale Ader und deinen unermüdlichen Einsatz im Verborgenen würde das Volk schlichtweg nicht überleben."
        },
        waechterin: { 
            titel: "Die Wächterbiene", 
            detail: "Du bist furchtlos, wachsam und hast einen extrem starken Beschützerinstinkt. Wenn Gefahr droht, zögerst du keine Sekunde und stellst dich in die erste Reihe. Deine Loyalität zum Volk ist absolut. Du scannst deine Umgebung ständig auf Bedrohungen und bist bereit, alles für die Sicherheit deiner Familie zu geben."
        },
        sammlerin: { 
            titel: "Die Sammelbiene", 
            detail: "Du hast einen unstillbaren Drang nach Freiheit und Entdeckung. Das dunkle Innere des Stocks ist dir auf Dauer viel zu eng. Du fliegst Kilometer weit, merkst dir komplexe Routen und bringst die lebenswichtige Tracht nach Hause. Dein unermüdlicher Einsatz in der Außenwelt ist der Motor, der das System antreibt."
        },
        baubiene: { 
            titel: "Die Baubiene", 
            detail: "Du bist der Inbegriff von Struktur und Pragmatismus. Wenn etwas kaputt ist, reparierst du es. Wenn Platz fehlt, baust du an. Deine geometrische Präzision beim Wabenbau ist ein echtes Meisterwerk. Du arbeitest lösungsorientiert und schaffst buchstäblich das Fundament, auf dem das gesamte Leben im Stock basiert."
        },
        drohn: { 
            titel: "Der Drohn", 
            detail: "Stress und Hektik sind absolute Fremdwörter für dich. Du ruhst vollkommen in dir selbst und lässt dich von der Panik der anderen nicht anstecken. Du nimmst dir die Zeit, die Dinge auf dich zukommen zu lassen. Deine entspannte, friedliche Energie ist ein enorm wichtiger Gegenpol zur ständigen Geschäftigkeit deiner Schwestern."
        }
    };

    
    document.getElementById('result-title').innerText = resultDaten[gewinnerRolle].titel;
    document.getElementById('result-desc').innerText = resultDaten[gewinnerRolle].detail; 

    let statsHtml = '<div class="stats-container">';
    statsHtml += '<h3>Deine Bienen-DNA im Detail:</h3>';
    

    let sortierteRollen = Object.keys(punkte).sort((a, b) => punkte[b] - punkte[a]);

    sortierteRollen.forEach(rolle => {
        let punktzahl = punkte[rolle];
        let prozent = maxPunkte > 0 ? (punktzahl / maxPunkte) * 100 : 0;
        
        if (punktzahl > 0) { 
            statsHtml += `
            <div class="stat-row">
                <div class="stat-header">
                    <span>${resultDaten[rolle].titel}</span>
                    <span>${punktzahl} Pkt.</span>
                </div>
                <div class="stat-bar-bg">
                    <!-- Timeout Trick für eine schöne Lade-Animation der Balken -->
                    <div class="stat-bar-fill" style="width: 0%;" data-target="${prozent}%"></div>
                </div>
            </div>`;
        }
    });
    
    statsHtml += '</div>';

    const resultDescElement = document.getElementById('result-desc');
    let existingStats = document.querySelector('.stats-container');
    if(existingStats) existingStats.remove(); 
    
    resultDescElement.insertAdjacentHTML('afterend', statsHtml);

    setTimeout(() => {
        document.querySelectorAll('.stat-bar-fill').forEach(bar => {
            bar.style.width = bar.getAttribute('data-target');
        });
    }, 100);

    if (typeof lucide !== 'undefined') lucide.createIcons();
}
});