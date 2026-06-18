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
  0:'sun', 1:'sun', 2:'cloud-sun', 3:'cloud',
  45:'cloud-fog', 48:'cloud-fog',
  51:'cloud-rain', 53:'cloud-rain', 55:'cloud-rain',
  61:'cloud-rain', 63:'cloud-rain', 65:'cloud-rain',
  71:'snowflake', 73:'snowflake', 75:'snowflake',
  80:'cloud-rain', 81:'cloud-rain', 82:'cloud-rain',
  85:'snowflake', 86:'snowflake',
  95:'cloud-lightning', 96:'cloud-lightning', 99:'cloud-lightning',
};

const WEATHER_TEXTS = {
'Klar':     { Überschrift:'Klar',     icon:'sun',             titel:'Perfekter Bienentag!',   text:'Heute fliegen die Bienen den ganzen Tag über und besuchen die Blumen in ihrer Umgebung.', farbe:'green' },
'Bewölkt':  { Überschrift:'Bewölkt',  icon:'cloud',           titel:'Ruhiges Wetter',         text:'Die Bienen sind aktiv, aber dennoch etwas zurückgehalten. ', farbe:'green' },
'Nebel':    { Überschrift:'Nebel',    icon:'cloud-fog',       titel:'Neblige Morgenstimmung', text:'Die Bienen fliegen wahrscheinlich nicht aus, da es ihnen zu neblig ist.', farbe:'yellow' },
'Regen':    { Überschrift:'Regen',    icon:'cloud-rain',      titel:'Regentag',               text:'Die Bienen bleiben bei Regen im Stock und warten auf besseres Wetter.', farbe:'red' },
'Schnee':   { Überschrift:'Schnee',   icon:'snowflake',       titel:'Winterruhe',             text:'Das Volk sitzt in der Wintertraube. Erst im Frühling werden sie wieder aktiv.', farbe:'red' },
'Gewitter': { Überschrift:'Gewitter', icon:'cloud-lightning', titel:'Gewitterwarnung',        text:'Die Bienen sind reizbar und bleiben im Stock.', farbe:'red' },
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

const STANDARD_STADT = 'Linz';
const startIndex = CITIES.findIndex(c => c.name === STANDARD_STADT);

select.value = String(startIndex);   // Dropdown zeigt Linz
loadCity(CITIES[startIndex]);         // Wetter überall = Linz

async function loadCity(city) {
  const fg = document.getElementById('forecast-grid');
  fg.innerHTML = '<span style="font-size:13px;color:red"><i data-lucide="triangle-alert"></i> Fehler beim Laden</span>';
  lucide.createIcons();

  try {
    const res = await fetch(
      `https://api.open-meteo.com/v1/forecast` +
      `?latitude=${city.lat}&longitude=${city.lon}` +
      `&current=weather_code` +
      `&hourly=weather_code` +
`&daily=temperature_2m_max,temperature_2m_min,weather_code,sunrise,sunset,wind_speed_10m_max` +
      `&timezone=Europe%2FVienna&forecast_days=7`
    );

    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const data  = await res.json();
    const daily = data.daily;

    fg.innerHTML = '';
    let todayCode = null;

    for (let i = 0; i < 7; i++) {
      const date = new Date(daily.time[i] + 'T12:00:00');
      const dow  = i === 0 ? 'He' : (i === 1 ? 'Mg' : DAYS[date.getDay()]);

      // Wetter um 13:00 statt Tages-Aggregat → kein "Morgennebel den ganzen Tag"
      const middayTime = daily.time[i] + 'T13:00';
      const hIdx = data.hourly.time.indexOf(middayTime);
      const code = hIdx !== -1 ? data.hourly.weather_code[hIdx] : daily.weather_code[i];

      if (i === 0) todayCode = code;

      const card = document.createElement('div');
      card.className = 'day-card';
      card.innerHTML = `
        <div class="day-name">${dow}</div>
    <span class="day-icon"><i data-lucide="${WMO_ICON[code] ?? 'cloud'}"></i></span>
        <div class="day-desc">${WMO_LABEL[code] ?? '—'}</div>
        <div class="day-max">${Math.round(daily.temperature_2m_max[i])}°</div>
        <div class="day-min">${Math.round(daily.temperature_2m_min[i])}°</div>
      `;
      fg.appendChild(card);
    }

    // Box aus demselben Wert wie die heutige Karte (13-Uhr-Wert)
    const todayLabel = WMO_LABEL[todayCode] ?? 'Klar';
    updateWeatherBox(todayLabel);
    updateFlugfenster(daily);
    lucide.createIcons();

  } catch (err) {
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
    <p class="wx-label">So geht es den Bienen heute</p>
    <h2 class="wx-ueberschrift">${content.Überschrift}</h2>
  </div>

  <div class="wx-icon"><i data-lucide="${content.icon ?? 'sun'}"></i></div>

  <div class="wx-bottom">
    <p class="wx-titel">${content.titel}</p>
    <p class="wx-text">${content.text}</p>
  </div>
`;
  }


function updateFlugfenster(daily) {
  const box = document.getElementById('flugfenster');
  if (!box) return;

  const sunrise = daily.sunrise[0].slice(11, 16);   // "05:12"
  const sunset  = daily.sunset[0].slice(11, 16);    // "20:48"
  const windMax = Math.round(daily.wind_speed_10m_max[0]);
  const tMin = Math.round(daily.temperature_2m_min[0]);
const tMax = Math.round(daily.temperature_2m_max[0]);

  // Tageslänge aus den beiden Zeiten
  const ms = new Date(daily.sunset[0]) - new Date(daily.sunrise[0]);
  const h  = Math.floor(ms / 3600000);
  const m  = Math.round((ms % 3600000) / 60000);

  // kleiner Bienen-Hinweis je nach Wind (ab ~25–30 km/h wird Fliegen schwierig)
  const windHint = windMax >= 30 ? 'böig' : windMax >= 20 ? 'mäßig' : 'ruhig';

box.innerHTML = `
  <h3 class="ff-title"><i data-lucide="hexagon"></i> Flugfenster heute</h3>
  <div class="ff-row"><span><i data-lucide="sunrise"></i> Sonnenaufgang</span><strong>${sunrise} Uhr</strong></div>
  <div class="ff-row"><span><i data-lucide="sunset"></i> Sonnenuntergang</span><strong>${sunset} Uhr</strong></div>
  <div class="ff-row"><span><i data-lucide="sun"></i> Tageslänge</span><strong>${h} h ${m} min</strong></div>
  <div class="ff-row"><span><i data-lucide="wind"></i> Wind (max)</span><strong>${windMax} km/h · ${windHint}</strong></div>
  <div class="ff-row"><span><i data-lucide="thermometer"></i> Temperatur</span><strong>${tMin}° / ${tMax}°</strong></div>
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
const rest = events.slice(1, 6);  

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
    <button class="plant-more-btn ev-cal-btn" onclick="location.href='../seiten/Vereinskalender.html'">
      Zum Kalender
    </button>
  `;

  // Hover-Logik
  document.querySelectorAll('.ev-row').forEach(row => {
    row.addEventListener('mouseenter', () => {
      const rect = row.getBoundingClientRect();
popup.innerHTML = `
  <div style="font-weight:bold;font-size:13px;margin-bottom:4px">${row.dataset.thema}</div>
  <div><i data-lucide="calendar"></i> ${row.dataset.datum}</div>
  <div><i data-lucide="clock"></i> ${row.dataset.uhrzeit} Uhr</div>
  <div><i data-lucide="map-pin"></i> ${row.dataset.verein}</div>
  <div style="font-size:11px;opacity:0.7"><i data-lucide="house"></i> ${row.dataset.adresse}</div>
`;
lucide.createIcons();   // ← direkt nach dem innerHTML

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