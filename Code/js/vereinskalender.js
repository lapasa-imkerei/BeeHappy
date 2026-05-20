document.addEventListener('DOMContentLoaded', function() {
    const monthYearE1 = document.getElementById('month-year');
    const daysE1 = document.getElementById('days');
    const prevMonthBtn = document.getElementById('prev-month');
    const nextMonthBtn = document.getElementById('next-month');
    const todayBtn = document.getElementById('today-btn');
    const eventPanel = document.getElementById('event-panel');
    const eventDateE1 = document.getElementById('event-date');
    const eventListE1 = document.getElementById('event-list');

    let currentDate = new Date();
    let selectedDate = new Date(); // Standardmäßig auf heute setzen

    // Deine JSON-Daten direkt als JavaScript-Array eingefügt
    const rawEvents = [
        { "typ": "Monatsversammlung", "datum": "2026-03-05", "uhrzeit": "18:30", "thema": "Monatsbetrachtung: Frühjahrsrevision", "verein": "Schalchen/Mattighofen", "adresse_vollständig": "Hauptstraße 9, 5231 Schalchen" },
        { "typ": "Monatsversammlung", "datum": "2026-04-09", "uhrzeit": "18:30", "thema": "Monatsbetrachtung: Honigraum aufsetzen", "verein": "Schalchen/Mattighofen", "adresse_vollständig": "Hauptstraße 9, 5231 Schalchen" },
        { "typ": "Monatsversammlung", "datum": "2026-05-07", "uhrzeit": "18:30", "thema": "Monatsbetrachtung: Schwarmmanagement", "verein": "Schalchen/Mattighofen", "adresse_vollständig": "Hauptstraße 9, 5231 Schalchen" },
        { "typ": "Monatsversammlung", "datum": "2026-06-04", "uhrzeit": "18:30", "thema": "Monatsbetrachtung: Honigernte (Blütenhonig)", "verein": "Schalchen/Mattighofen", "adresse_vollständig": "Hauptstraße 9, 5231 Schalchen" },
        { "typ": "Monatsversammlung", "datum": "2026-07-02", "uhrzeit": "18:30", "thema": "Monatsbetrachtung: Abschleudern, Auffüttern, Varroabehandlung", "verein": "Schalchen/Mattighofen", "adresse_vollständig": "Hauptstraße 9, 5231 Schalchen" },
        { "typ": "Monatsversammlung", "datum": "2026-08-06", "uhrzeit": "18:30", "thema": "Monatsbetrachtung: Beurteilung Volksstärke, Königin tauschen", "verein": "Schalchen/Mattighofen", "adresse_vollständig": "Hauptstraße 9, 5231 Schalchen" },
        { "typ": "Monatsversammlung", "datum": "2026-09-03", "uhrzeit": "18:30", "thema": "Monatsbetrachtung: Varroa Herbstbehandlung", "verein": "Schalchen/Mattighofen", "adresse_vollständig": "Hauptstraße 9, 5231 Schalchen" },
        { "typ": "Monatsversammlung", "datum": "2026-10-01", "uhrzeit": "18:30", "thema": "Monatsbetrachtung: Einwinterung abschliessen", "verein": "Schalchen/Mattighofen", "adresse_vollständig": "Hauptstraße 9, 5231 Schalchen" },
        { "typ": "Monatsversammlung", "datum": "2026-11-05", "uhrzeit": "18:30", "thema": "Monatsbetrachtung: Jahresabschluss", "verein": "Schalchen/Mattighofen", "adresse_vollständig": "Hauptstraße 9, 5231 Schalchen" },
        { "typ": "Monatsversammlung", "datum": "2026-03-13", "uhrzeit": "19:30", "thema": "Monatsbetrachtung", "verein": "Pischelsdorf", "adresse_vollständig": "Schmidham 4, 5233 Schmidham" },
        { "typ": "Monatsversammlung", "datum": "2026-04-11", "uhrzeit": "19:30", "thema": "Monatsbetrachtung", "verein": "Pischelsdorf", "adresse_vollständig": "Pischelsdorf am Engelbach 32, 5233 Pischelsdorf am Engelbach" },
        { "typ": "Monatsversammlung", "datum": "2026-08-14", "uhrzeit": "19:30", "thema": "Monatsbetrachtung", "verein": "Pischelsdorf", "adresse_vollständig": "Kaltenhausen 1, 5233 Pischelsdorf am Engelbach" },
        { "typ": "Monatsversammlung", "datum": "2026-09-11", "uhrzeit": "19:30", "thema": "Monatsbetrachtung", "verein": "Pischelsdorf", "adresse_vollständig": "Wagenham 14, 5233 Pischelsdorf am Engelbach" },
        { "typ": "Bezirksversammlung - Braunau", "datum": "2026-06-12", "uhrzeit": "19:30", "thema": "Schwarmmanagement und Königinnenzucht", "verein": "Bezirk Braunau", "adresse_vollständig": "Schmidham 4, 5233 Schmidham" },
        { "typ": "Bezirksversammlung - Braunau", "datum": "2026-05-08", "uhrzeit": "19:30", "thema": "Oxymel - Vortragender: DR. Puttinger", "verein": "Bezirk Braunau", "adresse_vollständig": "Schmidham 4, 5233 Schmidham" },
        { "typ": "Bezirksversammlung - Braunau", "datum": "2026-07-10", "uhrzeit": "19:30", "thema": "Abschleudern und erste Varroa", "verein": "Bezirk Braunau", "adresse_vollständig": "Schmidham 4, 5233 Schmidham" },
        { "typ": "Monatsversammlung", "datum": "2026-02-13", "uhrzeit": "19:30", "thema": "Thema offen", "verein": "Pischelsdorf", "adresse_vollständig": "Schmidham 4, 5233 Schmidham" }
    ];

    const events = {};

    rawEvents.forEach(item => {
        const [year, month, day] = item.datum.split('-').map(Number);
        const dateKey = `${year}-${month}-${day}`;

        if (!events[dateKey]) {
            events[dateKey] = [];
        }

        events[dateKey].push({
            time: item.uhrzeit,
            text: `<strong>${item.typ} (${item.verein})</strong><br>${item.thema}<br><small>📍 ${item.adresse_vollständig}</small>`
        });
    });

    function renderCalendar() {
        const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
        const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
        const prevLastDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);

        let firstDayIndex = firstDay.getDay() - 1; 
        if (firstDayIndex === -1) firstDayIndex = 6;
        
        const lastDayIndex = lastDay.getDay();
        
        let nextDays = 7 - lastDayIndex;
        if (lastDayIndex === 0) nextDays = 0; 

        const months = ["Jänner", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
        monthYearE1.innerHTML = `${months[currentDate.getMonth()]} ${currentDate.getFullYear()}`;

        let days = "";

        for (let x = firstDayIndex; x > 0; x--) {
            const prevDate = prevLastDay.getDate() - x + 1;
            const viewYear = prevLastDay.getFullYear();
            const viewMonth = prevLastDay.getMonth() + 1; 
            const dateKey = `${viewYear}-${viewMonth}-${prevDate}`;
            const hasEvent = events[dateKey] !== undefined;

            days += `<div class="day other-month${hasEvent ? ' has-events' : ''}" data-date="${dateKey}">${prevDate}</div>`;
        }
        
        for (let i = 1; i <= lastDay.getDate(); i++) {
            const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), i);
            const dateKey = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${i}`;
            const hasEvent = events[dateKey] !== undefined;

            let dayClass = 'day';

            if (
                date.getDate() === new Date().getDate() &&
                date.getMonth() === new Date().getMonth() &&
                date.getFullYear() === new Date().getFullYear()
            ) {
                dayClass += ' today';
            }

            if (
                selectedDate &&
                date.getDate() === selectedDate.getDate() &&
                date.getMonth() === selectedDate.getMonth() &&
                date.getFullYear() === selectedDate.getFullYear()
            ) {
                dayClass += ' selected';
            }

            if (hasEvent) {
                dayClass += ' has-events';
            }

            days += `<div class="${dayClass}" data-date="${dateKey}">${i}</div>`;
        }

        const nextMonthObj = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
        for (let j = 1; j <= nextDays; j++) {
            const viewYear = nextMonthObj.getFullYear();
            const viewMonth = nextMonthObj.getMonth() + 1;
            const dateKey = `${viewYear}-${viewMonth}-${j}`;
            const hasEvent = events[dateKey] !== undefined;

            days += `<div class="day other-month${hasEvent ? ' has-events' : ''}" data-date="${dateKey}">${j}</div>`;
        }

        daysE1.innerHTML = days;

        document.querySelectorAll('.day').forEach(day => {
            day.addEventListener('click', () => {
                const dateStr = day.getAttribute('data-date');
                const [year, month, dayNum] = dateStr.split('-').map(Number);
                selectedDate = new Date(year, month - 1, dayNum);
                
                if (month - 1 !== currentDate.getMonth()) {
                    currentDate.setMonth(month - 1);
                }
                
                renderCalendar();
                showEvents(dateStr);
            });
        });
    }

    function showEvents(dateStr) {
        const [year, month, day] = dateStr.split('-').map(Number);
        const dateObj = new Date(year, month - 1, day);
        const months = ["Jänner", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
    
        const dayNames = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"];
        let dayIndex = dateObj.getDay() - 1; 
        if (dayIndex === -1) dayIndex = 6;
        const dayName = dayNames[dayIndex];

        eventDateE1.textContent = `${dayName}, ${day}. ${months[dateObj.getMonth()]} ${year}`;
        eventListE1.innerHTML = '';

        if (events[dateStr]) {
            events[dateStr].forEach(event => {
                const eventItem = document.createElement('div');
                eventItem.className = 'event-item';
                eventItem.innerHTML = `<div class="event-color"></div><div class="event-time">${event.time}</div><div class="event-text">${event.text}</div>`;
                eventListE1.appendChild(eventItem);
            });
        } else {
            eventListE1.innerHTML = '<div class="no-events">Keine Veranstaltung eingetragen</div>';
        }
    }

    prevMonthBtn.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar();
        resetEventPanel();
    });

    nextMonthBtn.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar();
        resetEventPanel();
    });

    todayBtn.addEventListener('click', () => {
        currentDate = new Date();
        selectedDate = new Date();
        renderCalendar();
        const dateStr = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`;
        showEvents(dateStr);
    });

    function resetEventPanel() {
        eventDateE1.textContent = 'Datum auswählen';
        eventListE1.innerHTML = '<div class="no-events">Keine Veranstaltung eingetragen</div>';
    }

    renderCalendar();
    const initialDateStr = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`;
    showEvents(initialDateStr);
});