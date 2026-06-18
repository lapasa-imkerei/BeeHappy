// infobox.js — Dezente Info-Boxen oben rechts in den Widgets

document.addEventListener("DOMContentLoaded", () => {

  // Welche Widgets bekommen eine Info-Box? (Selektor + Text)
  const INFO_BOXES = [
    {
      selector: '#weather-text-box',
      text: 'Diese Einschätzung beruht auf dem Wetter um 13 Uhr und zeigt, wie aktiv die Bienen heute voraussichtlich sind. <br><br>Ist die Box <span style="color:green; font-weight:bold;">grün</span>, fliegen die Bienen aus. Bei <span style="color:#a16207; font-weight:bold;">gelb </span>fliegen sie oder auch nicht und bei <span style="color:#b91c1c; font-weight:bold;">rot </span>bleiben sie im Stock.'
    },
{
  selector: '.item-wide',
  text:
    'Die Bienenflugstärke beschreibt einen <strong>geschätzten Wert</strong> wie viele Bienen pro Minute ausfliegen. ' +
    'Ein Modell bewertet das Tageswetter und rechnet es in „Bienen/min" um ' +
    '(max. 60 bei perfekten Bedingungen).' +
    '<br><br>' +
    'Gewichtung: Temperatur 40 %, Regen 25 %, Wind 22 %, Bewölkung 13 %.<br>' +
    'Ideal sind <span style="color:var(--wx-green-text); font-weight:bold;">18–25 °C, trocken und windstill</span>.'
},
    {
      selector: '#flugfenster',
      text: 'Das Flugfenster zeigt Sonnenzeiten, Tageslänge, Wind und Temperatur – die wichtigsten Faktoren für den Bienenflug.'
    },
  ];

  function attachInfoBox(el, text) {
    if (!el) return;

    function ensure() {
      if (el.querySelector(':scope > .info-corner')) return;   // schon da
      const btn = document.createElement('div');
      btn.className = 'info-corner';
      btn.innerHTML = 'i<span class="info-tip"></span>';
 btn.querySelector('.info-tip').innerHTML = text;
      el.appendChild(btn);
    }

    ensure();
    // Info-Box automatisch wieder einsetzen, wenn das Widget neu rendert:
    new MutationObserver(ensure).observe(el, { childList: true });
  }

  INFO_BOXES.forEach(cfg => {
    attachInfoBox(document.querySelector(cfg.selector), cfg.text);
  });

});