# Projekt: BeeHappy

## Endbericht zum Projekt
Eine Reflexion und einen kurzen Endbericht zum Projekt findest du in unserem Wiki unter:

https://git.sbg.ac.at/s1109621/beehappy/-/wikis/Endbericht


## Konzept für das Projekt
Ein detailliertes Konzept findest du in unserem Wiki unter:

https://git.sbg.ac.at/s1109621/beehappy/-/wikis/Konzept


### Projektbeschreibung: 
BeeHappy ist eine interaktive Web-Plattform, die als Brücke zwischen komplexen Umweltdaten und der breiten Bevölkerung dient. Wir kombinieren Echtzeit-Wetterdaten mit imkerlichem Fachwissen, um den Lebensraum von Bienen aktiv zu schützen und zu fördern.

## Team & Aufgabenverteilung

*  **Philip Staudacher**: Teamleitung & Lead Development
*  **Natalie Neumayer**: Lead Design & Usability
*  **Patrizia Lacher**: Data Management & Content

## Ziele & Zielgruppen

1.  **Laien:** Bieneninteressierte ohne Vorwissen.
2.  **ImkerInnen:** Erfahrene Nutzer mit Fokus auf Daten.
3.  **Ältere Personen:** Fokus auf einfache Bedienung und Lesbarkeit.

## Übersicht & Guidelines

### CSS-Struktur
- **style.css**: globales Stylesheet für Design Tokens, Reset, Basis-Typografie.
- **fonts.css**: Lokale Einbindung der Schriftarten (DSGVO konform)
- **sidebar.css**: Logik und Styling f. die Sidebar --> Navigationselement. 
- **isolierung.css**: Reste aus veralteten Stylesheets, die man in Zukunft evtl. verwenden kann. 
- **[seite].css**: Seiten spezifische Layouts (Impressum, Dashboard,...) --> Jede Registerkarte hat ihre eigene CSS-File. 

### Hinweise
1.  **Farben & Design:** Keine Hex-Werte verwenden. Nutze immer die Variablen aus der `style.css` (z.B. `var(--c-accent)`).
2.  **HTML-Struktur:** Alle Inhaltsseiten werden vermutlich mit der Klasse `.layout-wrapper` ausgestattet werden, um die Bugs von der Sidebar zu verhindern. 
3.  **Icons:** Derzeitige Nutzung von Material Symbols (Google). Umstellung auf lokale SVGs läuft. 

## Features & Inhalte
*   **Wetterdaten OÖ:** Analyse der Bedingungen speziell für den Bienenflug.
*   **Dashboard:** Visualisierung von Temperatur, Windstärke und Niederschlag inkl. Empfehlungen.
*   **Bienenfreundliche Pflanzen:** Saisonales Wiki für Pflanzen und OPTIONAL: Pollenfarben.
*   **Interaktive Map:** Standorte der Vereins- und Imkertreffen.
*   **Kalender:** Übersicht für Vereins- und Imkertreffen.
*   **Optional: Bienenquiz** 