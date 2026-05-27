const CITIES = [
  {name:'Linz',        lat:48.306, lon:14.286},
  {name:'Wels',        lat:48.157, lon:14.024},
  {name:'Steyr',       lat:48.042, lon:14.421},
  {name:'Leonding',    lat:48.266, lon:14.254},
  {name:'Traun',       lat:48.222, lon:14.237},
  {name:'Gmunden',     lat:47.919, lon:13.799},
  {name:'Bad Ischl',   lat:47.712, lon:13.622},
  {name:'Vöcklabruck', lat:48.004, lon:13.657},
  {name:'Braunau',     lat:48.259, lon:13.034},
  {name:'Ried i.I.',   lat:48.210, lon:13.488},
  {name:'Freistadt',   lat:48.513, lon:14.499},
  {name:'Perg',        lat:48.249, lon:14.631},
  {name:'Enns',        lat:48.209, lon:14.472},
  {name:'Ansfelden',   lat:48.208, lon:14.289},
  {name:'Marchtrenk',  lat:48.185, lon:14.111},
  {name:'Rohrbach',    lat:48.576, lon:13.990},
  {name:'Schärding',   lat:48.454, lon:13.434},
  {name:'Kirchdorf',   lat:47.900, lon:14.124},
];

const WMO_LABEL = {
  0:'Klar', 1:'Klar', 2:'Bewölkt', 3:'Bewölkt',
  45:'Nebel', 48:'Nebel',
  51:'Regen', 53:'Regen', 55:'Regen', 56:'Regen', 57:'Regen',
  61:'Regen', 63:'Regen', 65:'Regen',66:'Regen', 67:'Regen',
  71:'Schnee', 73:'Schnee', 75:'Schnee',77:'Schnee',
  80:'Regen', 81:'Regen', 82:'Regen',
  85:'Schnee', 86:'Schnee',
  95:'Gewitter', 96:'Gewitter', 99:'Gewitter',
};

const WMO_ICON = {
  0:'☀️', 1:'☀️', 2:'⛅', 3:'☁️',
  45:'🌫', 48:'🌫',
  51:'🌧', 53:'🌧', 55:'🌧',
  61:'🌧', 63:'🌧', 65:'🌧',
  71:'❄️', 73:'❄️', 75:'❄️',
  80:'🌧', 81:'🌧', 82:'🌧',
  85:'❄️', 86:'❄️',
  95:'⛈', 96:'⛈', 99:'⛈',
};

const WEATHER_TEXTS = {
  'Klar':     { Überschrift: "Klar", titel: '☀️ Perfekter Bienentag!',    text: 'Heute fliegen de', farbe: "green"  },
  'Bewölkt':  { Überschrift: "Bewölkt",titel: '⛅ Ruhiges Wetter',           text: 'Die Bienen sind aktiv Lorem ipsum dolonecessitatibus alias sit amet cg elit. A, libero molestiae esse praesentium tempore obcaecati eligendi, culpa veniam laboriosam, deleniti suscipit eius? Veritatis impedit voluptatem officiis necessitatibus alias obcaecati rem!' , farbe: "green"},
  'Nebel':    { Überschrift: "Nebel",titel: '🌫 Neblige Morgenstimmung',   text: 'Joa ned so' , farbe :"yellow"},
  'Regen':    { Überschrift: "Regen",titel: '🌧 Regentag',                 text: 'Die Bienen bleiben im Stock. ' ,farbe: "yellow"},
  'Schnee':   { Überschrift: "Schnee",titel: '❄️ Winterruhe',               text: 'Das Volk sitzt in der Wintertraube. ' ,farbe: "red"},
  'Gewitter': { Überschrift: "Gewitter",titel: '⛈ Gewitterwarnung',           text: 'Bienen sind reizbar ' ,farbe: "red"},
};

const DAYS = ['So','Mo','Di','Mi','Do','Fr','Sa'];

// Dropdown befüllen
// Dropdown befüllen
const select = document.getElementById('city-select');
CITIES.forEach((c, i) => {
  const opt = document.createElement('option');
  opt.value = i;
  opt.textContent = c.name;
  select.appendChild(opt);
});

select.addEventListener('change', () => {
  loadCity(CITIES[Number(select.value)]);
});

select.selectedIndex = 0;
loadCity(CITIES[0]);

async function loadCity(city) {
  const fg = document.getElementById('forecast-grid');
  fg.innerHTML = '<span style="font-size:13px">Wird geladen…</span>';

  try {
    const res = await fetch(
      `https://api.open-meteo.com/v1/forecast` +
      `?latitude=${city.lat}&longitude=${city.lon}` +
      `&daily=temperature_2m_max,temperature_2m_min,weathercode` +
      `&timezone=Europe%2FVienna&forecast_days=7`
    );

    // Fix: HTTP-Fehler abfangen (z.B. 429, 500)
    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const data  = await res.json();
    const daily = data.daily;

    fg.innerHTML = '';
    for (let i = 0; i < 7; i++) {
      const date = new Date(daily.time[i] + 'T12:00:00');
      const dow  = i === 0 ? 'He' : (i === 1 ? 'Mg' : DAYS[date.getDay()]);
      const code = daily.weathercode[i];

      const card = document.createElement('div');
      card.className = 'day-card';
      card.innerHTML = `
        <div class="day-name">${dow}</div>
        <span class="day-icon">${WMO_ICON[code] ?? '?'}</span>
        <div class="day-desc">${WMO_LABEL[code] ?? '—'}</div>
        <div class="day-max">${Math.round(daily.temperature_2m_max[i])}°</div>
        <div class="day-min">${Math.round(daily.temperature_2m_min[i])}°</div>
      `;
      fg.appendChild(card);
    }
    // direkt nach der for-Schleife in loadCity():
    const todayLabel = WMO_LABEL[daily.weathercode[0]] ?? 'Klar';
      updateWeatherBox(todayLabel);

  } catch (err) {
    // Fix: Fehlermeldung anzeigen statt endlosem "Wird geladen…"
    fg.innerHTML = '<span style="font-size:13px;color:red">Fehler beim Laden ⚠️</span>';
    console.error('Wetter-Fehler:', err);
  }
}

// ─── WEtter Text
function updateWeatherBox(conditionLabel) {
    const box = document.getElementById('weather-text-box');
    if (!box) return;

    const content = WEATHER_TEXTS[conditionLabel] ?? {
        Überschrift: conditionLabel,
        titel: '—',
        text: 'Aktuelle Wetterlage.',
        farbe: 'green'
    };

    // Farb-Klasse tauschen
    box.classList.remove('wx-green', 'wx-yellow', 'wx-red');
    box.classList.add('wx-' + content.farbe);

    box.innerHTML = `
    <div class="wx-top">
        <p class="wx-label">So geht es den bienen heute</p>
        <h2 class="wx-ueberschrift">${content.Überschrift}</h2>
    </div>

    <div class="wx-icon">${content.titel.split(' ')[0]}</div>

    <div class="wx-bottom">
        <p class="wx-titel">${content.titel.split(' ').slice(1).join(' ')}</p>
        <p class="wx-text">${content.text}</p>
    </div>
`;
  }

// ─── Events-Widget ───────────────────────────────────────────────────────────
const rawEvents = [
  { typ: "Monatsversammlung", datum: "2026-03-05", uhrzeit: "18:30", thema: "Monatsbetrachtung: Frühjahrsrevision", verein: "Schalchen/Mattighofen", adresse_vollständig: "Hauptstraße 9, 5231 Schalchen" },
  { typ: "Monatsversammlung", datum: "2026-04-09", uhrzeit: "18:30", thema: "Monatsbetrachtung: Honigraum aufsetzen", verein: "Schalchen/Mattighofen", adresse_vollständig: "Hauptstraße 9, 5231 Schalchen" },
  { typ: "Monatsversammlung", datum: "2026-05-07", uhrzeit: "18:30", thema: "Monatsbetrachtung: Schwarmmanagement", verein: "Schalchen/Mattighofen", adresse_vollständig: "Hauptstraße 9, 5231 Schalchen" },
  { typ: "Monatsversammlung", datum: "2026-06-04", uhrzeit: "18:30", thema: "Monatsbetrachtung: Honigernte (Blütenhonig)", verein: "Schalchen/Mattighofen", adresse_vollständig: "Hauptstraße 9, 5231 Schalchen" },
  { typ: "Monatsversammlung", datum: "2026-07-02", uhrzeit: "18:30", thema: "Monatsbetrachtung: Abschleudern, Auffüttern, Varroabehandlung", verein: "Schalchen/Mattighofen", adresse_vollständig: "Hauptstraße 9, 5231 Schalchen" },
  { typ: "Monatsversammlung", datum: "2026-08-06", uhrzeit: "18:30", thema: "Monatsbetrachtung: Beurteilung Volksstärke, Königin tauschen", verein: "Schalchen/Mattighofen", adresse_vollständig: "Hauptstraße 9, 5231 Schalchen" },
  { typ: "Monatsversammlung", datum: "2026-09-03", uhrzeit: "18:30", thema: "Monatsbetrachtung: Varroa Herbstbehandlung", verein: "Schalchen/Mattighofen", adresse_vollständig: "Hauptstraße 9, 5231 Schalchen" },
  { typ: "Monatsversammlung", datum: "2026-10-01", uhrzeit: "18:30", thema: "Monatsbetrachtung: Einwinterung abschliessen", verein: "Schalchen/Mattighofen", adresse_vollständig: "Hauptstraße 9, 5231 Schalchen" },
  { typ: "Monatsversammlung", datum: "2026-11-05", uhrzeit: "18:30", thema: "Monatsbetrachtung: Jahresabschluss", verein: "Schalchen/Mattighofen", adresse_vollständig: "Hauptstraße 9, 5231 Schalchen" },
  { typ: "Monatsversammlung", datum: "2026-03-13", uhrzeit: "19:30", thema: "Monatsbetrachtung", verein: "Pischelsdorf", adresse_vollständig: "Schmidham 4, 5233 Schmidham" },
  { typ: "Monatsversammlung", datum: "2026-04-11", uhrzeit: "19:30", thema: "Monatsbetrachtung", verein: "Pischelsdorf", adresse_vollständig: "Pischelsdorf am Engelbach 32, 5233 Pischelsdorf am Engelbach" },
  { typ: "Monatsversammlung", datum: "2026-08-14", uhrzeit: "19:30", thema: "Monatsbetrachtung", verein: "Pischelsdorf", adresse_vollständig: "Kaltenhausen 1, 5233 Pischelsdorf am Engelbach" },
  { typ: "Monatsversammlung", datum: "2026-09-11", uhrzeit: "19:30", thema: "Monatsbetrachtung", verein: "Pischelsdorf", adresse_vollständig: "Wagenham 14, 5233 Pischelsdorf am Engelbach" },
  { typ: "Bezirksversammlung - Braunau", datum: "2026-06-12", uhrzeit: "19:30", thema: "Schwarmmanagement und Königinnenzucht", verein: "Bezirk Braunau", adresse_vollständig: "Schmidham 4, 5233 Schmidham" },
  { typ: "Bezirksversammlung - Braunau", datum: "2026-05-08", uhrzeit: "19:30", thema: "Oxymel - Vortragender: DR. Puttinger", verein: "Bezirk Braunau", adresse_vollständig: "Schmidham 4, 5233 Schmidham" },
  { typ: "Bezirksversammlung - Braunau", datum: "2026-07-10", uhrzeit: "19:30", thema: "Abschleudern und erste Varroa", verein: "Bezirk Braunau", adresse_vollständig: "Schmidham 4, 5233 Schmidham" },
  { typ: "Monatsversammlung", datum: "2026-02-13", uhrzeit: "19:30", thema: "Thema offen", verein: "Pischelsdorf", adresse_vollständig: "Schmidham 4, 5233 Schmidham" }
];

(function () {
  const widget = document.getElementById('events-widget');
  if (!widget) return;

  function getNow() { return new Date(); }
  const now = getNow();

  const events = rawEvents
    .map(e => ({ ...e, _dt: new Date(e.datum + 'T' + e.uhrzeit) }))
    .filter(e => e._dt >= now)
    .sort((a, b) => a._dt - b._dt);

  function countdown(dt) {
    const days = Math.ceil((dt - getNow()) / 86400000);
    if (days === 0) return 'Heute';
    if (days === 1) return 'Morgen';
    return 'In ' + days + ' Tagen';
  }

  function formatShort(dt) {
    return dt.toLocaleDateString('de-AT', { day: '2-digit', month: 'short' });
  }

  if (events.length === 0) {
    widget.innerHTML = '<span style="font-size:13px;color:var(--c-text-light)">Keine Termine</span>';
    return;
  }

  // Popup einmalig ans body hängen
  const popup = document.createElement('div');
  popup.id = 'ev-popup';
  popup.style.cssText = `
    position: fixed;
    z-index: 999;
    background: var(--c-white);
    border: 1px solid var(--c-border);
    border-radius: var(--radius-l);
    box-shadow: var(--shadow);
    padding: 12px 16px;
    font-size: 12px;
    color: var(--c-text);
    pointer-events: none;
    opacity: 0;
    transform: translateY(4px);
    transition: opacity 0.2s ease, transform 0.2s ease;
    min-width: 220px;
    line-height: 1.8;
    font-family: var(--f-body);
  `;
  document.body.appendChild(popup);

  const next = events[0];
  const rest = events.slice(1, 4);

  const restHTML = rest.map(e => `
    <div class="ev-row"
         data-thema="${e.thema}"
         data-datum="${e._dt.toLocaleDateString('de-AT', { weekday: 'long', day: '2-digit', month: 'long' })}"
         data-uhrzeit="${e.uhrzeit}"
         data-verein="${e.verein}"
         data-adresse="${e.adresse_vollständig}">
        <span class="ev-date">${formatShort(e._dt)}</span>
        <span class="ev-name">${e.thema}</span>
    </div>
  `).join('');

  widget.innerHTML = `
    <div class="ev-label">Nächste Veranstaltung</div>
    <div class="ev-next">
      <div class="ev-next-title">${next.thema}</div>
      <div class="ev-next-meta">
        ${next._dt.toLocaleDateString('de-AT', { weekday: 'short', day: '2-digit', month: 'long' })},
        ${next.uhrzeit} Uhr
      </div>
      <div class="ev-next-meta">${next.verein}</div>
      <span class="ev-badge">${countdown(next._dt)}</span>
    </div>
    ${rest.length ? '<div class="ev-divider"></div><div class="ev-upcoming">' + restHTML + '</div>' : ''}
  `;

  // Hover-Logik
  document.querySelectorAll('.ev-row').forEach(row => {
    row.addEventListener('mouseenter', () => {
      const rect = row.getBoundingClientRect();
      popup.innerHTML = `
        <div style="font-weight:bold;font-size:13px;margin-bottom:4px">${row.dataset.thema}</div>
        <div>📅 ${row.dataset.datum}</div>
        <div>🕐 ${row.dataset.uhrzeit} Uhr</div>
        <div>📍 ${row.dataset.verein}</div>
        <div style="font-size:11px;opacity:0.7">🏠 ${row.dataset.adresse}</div>
      `;

      const popupWidth = 240;
      const left = rect.right + 10;
      const finalLeft = left + popupWidth > window.innerWidth
        ? rect.left - popupWidth - 10
        : left;

      popup.style.left = finalLeft + 'px';
      popup.style.top  = (rect.top - 10) + 'px';
      popup.style.opacity = '1';
      popup.style.transform = 'translateY(0)';
    });

    row.addEventListener('mouseleave', () => {
      popup.style.opacity = '0';
      popup.style.transform = 'translateY(4px)';
    });
  });

})();