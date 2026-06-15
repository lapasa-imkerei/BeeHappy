document.addEventListener('DOMContentLoaded', () => {
    
    const startBtn = document.getElementById('start-quiz-btn');
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
                { text: "Einen tiefen Drang, mich um andere zu kümmern.", points: { amme: 2 } },
                { text: "Unruhige Beine. Ich will etwas erschaffen!", points: { baubiene: 2 } },
                { text: "Noch gar nichts. Ich ruhe in mir selbst.", points: { drohn: 2 } }
            ]
        },
        {
            isDark: true,
            text: "Verstehe... Die Dunkelheit umgibt dich noch. Wenn du jetzt eine Richtung wählen müsstest, wohin zieht es dich blind?",
            choices: [
                { icon: "arrow-up", text: "Nach oben. Dort spüre ich Wärme und Futter.", points: { amme: 1, baubiene: 1 } },
                { icon: "arrow-down", text: "Nach unten. Dort weht ein kühler Windzug von draußen.", points: { sammlerin: 2, waechterin: 1 } },
                { icon: "shrink", text: "In die Mitte. Genau dorthin, wo am meisten los ist.", points: { koenigin: 1, waechterin: 1 } }
            ]
        },
        {
            isDark: false, 
            text: "Zeit aufzuwachen. Du durchbeißt den Wachsdeckel. Das strahlende Licht des Stocks trifft dich! Das Gewusel ist ohrenbetäubend. Eine Schwester rempelt dich an. Was tust du?",
            choices: [
                { text: "Ich reiche ihr einen Tropfen Nektar, sie sieht erschöpft aus.", points: { amme: 2 } },
                { text: "Ich baue schnell die Wabe hinter mir zu, Ordnung muss sein.", points: { baubiene: 2 } },
                { text: "Ich dränge mich an ihr vorbei Richtung Ausgang!", points: { sammlerin: 2 } }
            ]
        },

        {
            isDark: false,
            text: "Der Luftdruck fällt spürbar, ein Sommergewitter zieht auf. Der Wind peitscht gegen den Fluglochspalt. Was ist dein erster Impuls?",
            choices: [
                { icon: "cloud-lightning", text: "Ich nutze die letzten Sonnenstrahlen für einen allerletzten Flug!", points: { sammlerin: 3 } },
                { icon: "hammer", text: "Ich dichte mit Propolis sofort die zugigen Ritzen am Eingang ab.", points: { baubiene: 3 } },
                { icon: "users", text: "Ich rücke eng mit meinen Schwestern zusammen, um die Bruttemperatur stabil zu halten.", points: { amme: 2, koenigin: 1 } }
            ]
        },
        {
            isDark: false,
            text: "Eine heimkehrende Schwester landet völlig erschöpft auf der Wabe und übergibt dir einen Tropfen frischen, sehr wässrigen Nektar.",
            choices: [
                { icon: "wind", text: "Ich fächere ausdauernd mit den Flügeln, um das Wasser verdunsten zu lassen. Guter Honig braucht Arbeit.", points: { baubiene: 2, amme: 1 } },
                { icon: "droplet", text: "Ich nasche direkt einen kleinen Schluck davon. Herumhängen macht hungrig!", points: { drohn: 3 } },
                { icon: "eye", text: "Ich nehme ihn ab, behalte aber den Eingang im Blick. Wer weiß, wer ihr gefolgt ist.", points: { waechterin: 2 } }
            ]
        },
        {
            isDark: false,
            text: "ALARM! Die Wächterinnen sondern Pheromone ab. Fremde Wespen sind am Flugloch gelandet!",
            choices: [
                { text: "Nichts wie hin! Ich verteidige unsere Familie mit meinem Stachel!", points: { waechterin: 5 } },
                { text: "Ich bleibe bei der Brut und wärme die Zellen, komme was wolle.", points: { amme: 3 } },
                { text: "Panik! Ich verstecke mich beim Honig...", points: { drohn: 3 } }
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
            koenigin: { titel: "Die Königin", desc: "Du planst, strukturierst und gibst den Takt vor." },
            amme: { titel: "Die Ammenbiene", desc: "Empathisch, fürsorglich und immer da, wenn jemand Wärme braucht." },
            waechterin: { titel: "Die Wächterbiene", desc: "Mutig! Du beschützt deine Liebsten in der ersten Reihe." },
            sammlerin: { titel: "Die Sammelbiene", desc: "Dich hält nichts drinnen. Du liebst das Abenteuer und die Natur." },
            baubiene: { titel: "Die Baubiene", desc: "Ein Architekt! Du erschaffst die Struktur, auf die alle bauen." },
            drohn: { titel: "Der Drohn", desc: "Entspannt und friedlich. Du genießt das Leben in vollen Zügen." }
        };

        document.getElementById('result-title').innerText = resultDaten[gewinnerRolle].titel;
        document.getElementById('result-desc').innerText = resultDaten[gewinnerRolle].desc;
        if (typeof lucide !== 'undefined') lucide.createIcons();
    }
});