document.addEventListener("DOMContentLoaded", () => {
const factText  = document.getElementById("fact-text");
  const factText2 = document.getElementById("fact-text-2");
  if (!factText) return;

    const beeFacts = [
        "Für 1kg Honig müssen Arbeiterinnen 3kg Nektar sammeln.",
        "Während Schmetterlinge den Nektar noch bis zu 4cm tief in einer Blüte erreichen könne, brauchen Bienen besser erreichbaren Nektar denn ihr Rüssel ist nur 1.5cm lang.",
        "Während bei europäischen Bienen die Arbeiterinnen in einer Lebensphase den Stock bewachen, gibt es bei bestimmten stachelllosen bienen eine eigene Klasse von Wächterbienen, die schon als Larven mehr Nahrung bekommen und dadurch größer werden.",
        "Bienen können elektrische Ladung mit ihren Fühlern wahrnehmen. Wahrscheinlich hilft ihnen dieser Sinn, zu erkennen, ob eine Blüte schon von anderen Insekten besucht worden ist.",
        "Eine Biene fliegt etwa für eine halbe Stunde aus und besucht in dieser Zeit bis zu 200 Blüten. Davon bringt sie im Durchschnitt 0.04kg Nektar in den Stock.",
        "Für 1kg Honig legen die Arbeiterinnen insgesamt eine Flugstrecke von 100.000km zurück und besuchen bis zu 14 Millionen Blüten.",
        "Wenn Bienen für ihre Sammelleistung den gesetzlichen Mindest-Stundenlohn bekämen, würde ein Pfund Honig über 130.000€ kosten.",
        "Bienen fliegen mit ca. 250 Flügelschlägen pro Sekunde. Sie erreichen eine Geschwindigkeit von bis zu 30km/h.",
        "Wenn die Temperatur im Bienenstock auf unter 10 °C fällt, koppeln die Bienen ihre Flügel von den dazugehörigen Muskeln ab und bewegen diese schnell auf der Stelle. Durch dieses zittern halten sie den Bienenstock warm.",
        "An einem schönen Tag können Arbeiterinnen 20 bis 30 mal pro Tag ausfliegen, für jeweils 30min. So legen sie am Tag ~85km zurück.",
        "Es gibt mehr als 20.000 Bienenarten auf der Welt und nicht alle leben in Gemeinschaften. Es somit auch Solitärbienen.",
        "Eine Arbeitsbiene wiegt ca. 8 Milligramm. Ihr Pollenhöschen kann bis zu 20 Milligramm wiegen.",
        "Bienen können nicht hören. Sie nehmen Töne nur als Vibrationen am Körper und an den Fühlern wahr.",
        "In einem Bienenvolk leben bis zu 50.000 Individuen. Im Winter etwa 5.000.",
        "Eine Arbeitsbiene wird im Sommer ~7 Wochen alt. Die Bienen die das Volk überwintern, leben bis zum Frühjahr.",
        "Eine Bienenkönigin kann bis zu 5 Jahre alt werden, wird aber meist schon früher von dem Imker oder dem eigenen Volk ausgetauscht.",
        "Bienen überwintern eng aneinander geschmiegt in einer großen Traube im Bienenstock. Die Königin sitzt in der Mitte der Traube. An den äußeren Plätzen wechseln sich die Arbeiterinnen regelmäßig ab.",
        "Auf den beiden Fühlern haben Bienen ungefähr 60.000 Duftrezeptoren.",
    ];

  // Ein Fakt pro Woche – wechselt automatisch
  const MS_PER_WEEK = 7 * 24 * 60 * 60 * 1000;
const weekIndex = Math.floor(Date.now() / MS_PER_WEEK);
  factText.textContent = beeFacts[weekIndex % beeFacts.length];
  if (factText2) factText2.textContent = beeFacts[(weekIndex + 1) % beeFacts.length];
});


