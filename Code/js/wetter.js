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
  {name:'Amstetten',   lat:48.122, lon:14.872},
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
  51:'Regen', 53:'Regen', 55:'Regen',
  61:'Regen', 63:'Regen', 65:'Regen',
  71:'Schnee', 73:'Schnee', 75:'Schnee',
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

const DAYS = ['So','Mo','Di','Mi','Do','Fr','Sa'];

// Dropdown befüllen
const select = document.getElementById('city-select');
CITIES.forEach((c, i) => {
  const opt = document.createElement('option');
  opt.value = i;
  opt.textContent = c.name;
  select.appendChild(opt);
});

// Bei Auswahl Wetter laden
select.addEventListener('change', () => {
  loadCity(CITIES[select.value]);
});

select.value = 0;
loadCity(CITIES[0]);

async function loadCity(city) {
  const fg = document.getElementById('forecast-grid');
  fg.innerHTML = 'Wird geladen…';

  const res  = await fetch(
    `https://api.open-meteo.com/v1/forecast` +
    `?latitude=${city.lat}&longitude=${city.lon}` +
    `&daily=temperature_2m_max,temperature_2m_min,weathercode` +
    `&timezone=Europe%2FVienna&forecast_days=7`
  );
  const data  = await res.json();
  const daily = data.daily;

  fg.innerHTML = '';
  for (let i = 0; i < 7; i++) {
    const date = new Date(daily.time[i] + 'T12:00:00');
    const dow  = i === 0 ? 'Heute' : (i === 1 ? 'Morgen' : DAYS[date.getDay()]);
    const code = daily.weathercode[i];

    const card = document.createElement('div');
    card.className = 'day-card';
    card.innerHTML = `
      <div class="day-name">${dow}</div>
      <span class="day-icon">${WMO_ICON[code] || '?'}</span>
      <div class="day-desc">${WMO_LABEL[code] || '—'}</div>
      <div class="day-max">${Math.round(daily.temperature_2m_max[i])}°</div>
      <div class="day-min">${Math.round(daily.temperature_2m_min[i])}°</div>
    `;
    fg.appendChild(card);
  }
}