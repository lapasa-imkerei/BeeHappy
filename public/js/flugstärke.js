const FLUG_BASIS = 60;

function flugScore(tempMax, tempMin, windMax, regenMm, bewoelkungPct) {
  const temp = (tempMax + tempMin) / 2;

  let t;
  if (temp >= 18 && temp <= 25)      t = 1.0;
  else if (temp >= 12 && temp < 18)  t = 0.3 + (temp - 12) / 6 * 0.7;
  else if (temp > 25 && temp <= 32)  t = 1.0 - (temp - 25) / 7 * 0.4;
  else if (temp < 12)                t = Math.max(0, temp / 12 * 0.3);
  else                               t = Math.max(0, 0.6 - (temp - 32) / 10);

  let w;
  if (windMax <= 8)       w = 1.0;
  else if (windMax <= 20) w = 1.0 - (windMax - 8) / 12 * 0.5;
  else if (windMax <= 35) w = 0.5 - (windMax - 20) / 15 * 0.45;
  else                    w = Math.max(0, 0.05 - (windMax - 35) / 20);

  let r;
  if (regenMm < 0.1)      r = 1.0;
  else if (regenMm < 1.0) r = 1.0 - regenMm * 0.7;
  else if (regenMm < 3.0) r = 0.3 - (regenMm - 1.0) / 2.0 * 0.3;
  else                    r = 0;

  const b = 1.0 - bewoelkungPct / 100 * 0.55;

  return Math.min(1, t * 0.40 + w * 0.22 + r * 0.25 + b * 0.13);
}

function staerkeInfo(bpm) {
  if (bpm < 5)   return { label: 'Kein Ausflug', farbe: '#B0B0B0' };
  if (bpm < 20)  return { label: 'Schwach',      farbe: '#B0B0B0' };
  if (bpm < 50)  return { label: 'Mittel',       farbe: '#E8A020' };
  if (bpm < 100) return { label: 'Stark',        farbe: '#A06010' };
  return               { label: 'Sehr stark',    farbe: '#2D5A27' };
}

(function initMarkup() {
  const container = document.querySelector('.item-wide');
  if (!container) return;
  container.innerHTML =
`<span class="fg-titel"><i data-lucide="hexagon"></i> Bienenflugstärke</span>` +
    `<div class="fg-heute">` +
      `<div class="fg-heute-left">` +
        `<span class="fg-heute-tag">Heute</span>` +
        `<span class="fg-heute-bpm">—</span>` +
        `<span class="fg-heute-einheit">Bienen / min</span>` +
      `</div>` +
      `<div class="fg-heute-right">` +
        `<span class="fg-staerke-label">—</span>` +
        `<div class="fg-balken-bg"><div class="fg-balken-fill" style="width:0%"></div></div>` +
        `<span class="fg-heute-temp"></span>` +
      `</div>` +
    `</div>` +
    `<div class="fg-grid"></div>`;
    lucide.createIcons();
})();

async function ladeFlugstaerke(city) {
  const container = document.querySelector('.item-wide');
  if (!container) return;

  try {
    const res = await fetch(
      `https://api.open-meteo.com/v1/forecast` +
      `?latitude=${city.lat}&longitude=${city.lon}` +
      `&daily=temperature_2m_max,temperature_2m_min,weathercode,` +
      `precipitation_sum,windspeed_10m_max,cloudcover_mean` +
      `&timezone=Europe%2FVienna&forecast_days=7`
    );
    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const data = await res.json();
    const d    = data.daily;

    const idx0 = flugScore(d.temperature_2m_max[0], d.temperature_2m_min[0], d.windspeed_10m_max[0], d.precipitation_sum[0], d.cloudcover_mean[0]);
    const bpm0 = Math.round(idx0 * FLUG_BASIS);
    const si0  = staerkeInfo(bpm0);

    container.querySelector('.fg-heute-bpm').textContent        = bpm0;
    container.querySelector('.fg-heute-bpm').style.color        = si0.farbe;
    container.querySelector('.fg-staerke-label').textContent    = si0.label;
    container.querySelector('.fg-staerke-label').style.color    = si0.farbe;
    container.querySelector('.fg-balken-fill').style.width      = Math.round(idx0 * 100) + '%';
    container.querySelector('.fg-balken-fill').style.background = si0.farbe;
    container.querySelector('.fg-heute-temp').innerHTML =
      `<i data-lucide="thermometer"></i> ${Math.round(d.temperature_2m_max[0])}° / ${Math.round(d.temperature_2m_min[0])}°` +
      `&nbsp;<i data-lucide="wind"></i> ${Math.round(d.windspeed_10m_max[0])} km/h` +
      `&nbsp;<i data-lucide="droplets"></i> ${d.precipitation_sum[0].toFixed(1)} mm`;

    const grid = container.querySelector('.fg-grid');
    grid.innerHTML = '';
    for (let j = 1; j <= 6; j++) {
      const idx = flugScore(d.temperature_2m_max[j], d.temperature_2m_min[j], d.windspeed_10m_max[j], d.precipitation_sum[j], d.cloudcover_mean[j]);
      const bpm = Math.round(idx * FLUG_BASIS);
      const si  = staerkeInfo(bpm);
      const dow = j === 1 ? 'Mg' : DAYS[new Date(d.time[j] + 'T12:00:00').getDay()];

      const card = document.createElement('div');
      card.className = 'fg-day';
      card.innerHTML =
        `<span class="fg-day-name">${dow}</span>` +
`<span class="fg-day-icon"><i data-lucide="${WMO_ICON[d.weathercode[j]] ?? 'cloud'}"></i></span>`+
        `<span class="fg-day-bpm" style="color:${si.farbe}">${bpm}</span>` +
        `<span class="fg-day-unit">B/min</span>` +
        `<span class="fg-day-label">${si.label}</span>`;
      grid.appendChild(card);
    }
lucide.createIcons();
  } catch (err) {
    container.querySelector('.fg-heute-bpm').textContent = '⚠️';
    console.error('Flugstärke-Fehler:', err);
  }
}

document.getElementById('city-select').addEventListener('change', function () {
  ladeFlugstaerke(CITIES[Number(this.value)]);
});

ladeFlugstaerke(CITIES[0]);