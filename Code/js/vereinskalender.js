let alleTermine = [];

async function initialisiereKalender() {
    try {
        // Pfad zu deiner JSON-Datei anpassen
        const response = await fetch('../js/termine.json');
        alleTermine = await response.json();
        
        const monthSelect = document.getElementById('monthSelect');
        const yearSelect = document.getElementById('yearSelect');

        // Event-Listener für die Dropdowns
        monthSelect.addEventListener('change', renderCalendar);
        yearSelect.addEventListener('change', renderCalendar);

        // Initiale Anzeige
        renderCalendar();
    } catch (e) {
        console.error("Fehler beim Laden der Termine:", e);
    }
}

function renderCalendar() {
    const grid = document.getElementById('calendarGrid');
    const display = document.getElementById('monthDisplay');
    
    // Werte aus Dropdowns lesen
    const monatIdx = parseInt(document.getElementById('monthSelect').value);
    const jahr = parseInt(document.getElementById('yearSelect').value);

    // Titel-Anzeige aktualisieren
    const monate = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
    display.textContent = `${monate[monatIdx]} ${jahr}`;

    // Altes Gitter leeren (außer Kopfzeile)
    const labels = Array.from(document.querySelectorAll('.day-label'));
    grid.innerHTML = '';
    labels.forEach(label => grid.appendChild(label));

    // Berechnen: Erster Wochentag & Tage im Monat
    const ersterTag = new Date(jahr, monatIdx, 1).getDay();
    const startOffset = (ersterTag === 0) ? 6 : ersterTag - 1; // Mo=0 bis So=6
    const tageAnzahl = new Date(jahr, monatIdx + 1, 0).getDate();

    // 1. Leere Felder am Monatsanfang
    for (let i = 0; i < startOffset; i++) {
        const empty = document.createElement('div');
        empty.className = 'day empty';
        grid.appendChild(empty);
    }

    // 2. Tage mit Terminen befüllen
    for (let tag = 1; tag <= tageAnzahl; tag++) {
        const dayBox = document.createElement('div');
        dayBox.className = 'day';
        dayBox.innerHTML = `<span class="day-number">${tag}</span>`;

        // Datum im Format YYYY-MM-DD erzeugen
        const datumKey = `${jahr}-${(monatIdx + 1).toString().padStart(2, '0')}-${tag.toString().padStart(2, '0')}`;
        
        // Termine für diesen Tag filtern
        const treffer = alleTermine.filter(t => {
            // Fix für das abweichende Format DD-MM-YYYY in deinen Rohdaten
            let formatted = t.datum;
            if (formatted.includes('-2026') && formatted.indexOf('-') === 2) {
                const parts = formatted.split('-');
                formatted = `${parts[2]}-${parts[1]}-${parts[0]}`;
            }
            return formatted === datumKey;
        });

        treffer.forEach(t => {
            const ev = document.createElement('div');
            ev.className = `event ${t.typ.toLowerCase().includes('bezirk') ? 'event-bezirk' : 'event-verein'}`;
            ev.innerHTML = `<strong>${t.uhrzeit}</strong><br>${t.verein}`;
            dayBox.appendChild(ev);
        });

        grid.appendChild(dayBox);
    }
}

document.addEventListener('DOMContentLoaded', initialisiereKalender);