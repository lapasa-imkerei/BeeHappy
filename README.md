# Projekt: BeeHappy

## Projektbeschreibung: 
BeeHappy ist eine interaktive Web-Plattform, die als Brücke zwischen komplexen Umweltdaten und der breiten Bevölkerung dient. Wir kombinieren Echtzeit-Wetterdaten mit imkerlichem Fachwissen, um den Lebensraum von Bienen aktiv zu schützen und zu fördern.

## Link zur Startseite:
https://beehapy.netlify.app/
- Die Seite wird von GitLab geklont und über Netlify gehostet.

## Lokale Ausführung
Statische Website ohne Build-Schritt. Repo klonen und `public/` über einen
lokalen Server öffnen (z. B. VS-Code „Live Server" oder `python -m http.server`),
da ein direktes Öffnen der index.html via file:// die Navigation/Pfade bricht.

## Endbericht zum Projekt
Eine Reflexion und einen kurzen Endbericht zum Projekt findest du in unserem Wiki unter:

https://git.sbg.ac.at/s1109621/beehappy/-/wikis/Endbericht


## Konzept für das Projekt
Ein detailliertes Konzept findest du in unserem Wiki unter:

https://git.sbg.ac.at/s1109621/beehappy/-/wikis/Konzept


## Team & Aufgabenverteilung

*  **Philip Staudacher**: Teamleitung & Lead Development
*  **Natalie Neumayer**: Lead Design & Usability
*  **Patrizia Lacher**: Data Management & Content

## Ziele & Zielgruppen

1.  **Laien:** Bieneninteressierte ohne Vorwissen.
2.  **Imker*innen:** Erfahrene Nutzer mit Fokus auf Daten.
3.  **Ältere Personen:** Fokus auf einfache Bedienung und Lesbarkeit.

## Übersicht & Guidelines

### CSS-Struktur
- **style.css**: globales Stylesheet für Design Tokens, Reset, Basis-Typografie.
- **fonts.css**: Lokale Einbindung der Schriftarten (DSGVO-konform)
- **sidebar.css**: Logik und Styling für die Sidebar --> Navigationselement. 
- **isolierung.css**: Reste aus veralteten Stylesheets, die man in Zukunft evtl. verwenden kann. 
- **[seite].css**: Seitenspezifische Layouts (Impressum, Dashboard,...) --> Jede Registerkarte hat ihre eigene CSS-Datei. 

### JS-Struktur
- **[seite].js**: Jede Seite hat eine eigene JS-Datei, in welcher die einfachen kurzen JS-Anwendungen ausgeführt werden.
- **[widget].js**: In einigen Fällen (speziell im Dashboard) wurden für die einzelnen Widgets eigene JS-Dateien angelegt.

## Technische Hilfeleistungen:
- Interaktive Karte mit Hilfe von **"Leaflet"** (https://leafletjs.com/) und **"OSM"** (osmfoundation.org/wiki/Privacy_Policy)
- Die Bienenwaage benutzt Daten von "Wolfwaagen" Standort Mattighofen, Oberösterreich.

### Open-Meteo API (https://open-meteo.com/)
- Die Open-Meteo API wird im Dashboard für die verschiedenen Wettervorhersagen benutzt.
- Open-Meteo API lässt 10 000 freie Aufrufe am Tag zu, was in unserer Größenordnung genügend ist.
- Der tägliche „Weather Code" von Open-Meteo richtet sich nach der schwersten Wetterlage des Tages (Worst-Case), wodurch z. B. Vormittagsnebel das Tagesergebnis verzerren kann. Deshalb verwenden wir stattdessen den Wettercode um 13:00 Uhr, damit die Tagesmitte ausschlaggebend ist (mit Rückgriff auf den Tageswert, falls dieser Stundenwert fehlt).

### Hinweise
1.  **Farben & Design:** Wir verwenden kaum Hex-Werte. Wenn möglich wurden die in style.css definierten Variablen (z. B. var(--c-accent)) verwendet.
2.  **HTML-Struktur:** Alle Inhaltsseiten werden mit der Klasse `.layout-wrapper` ausgestattet, um die Bugs von der Sidebar zu verhindern. 
3.  **Icons:** Icons werden von "https://lucide.dev/icons/" übernommen.

## Features & Inhalte
*   **Bienenstock:** Im Bienenstock bekommt man einen detaillierten Überblick über alles rund um das Thema Biene. Zudem kann man eine Live-Bienenwaage betrachten – die zugehörigen Informationen werden direkt mit erklärt.
*   **Dashboard:** Im Dashboard werden Wetterprognosen einfach und verständlich dargestellt und erklärt. Aus diesen Vorhersagen wird außerdem die Bienenflugstärke abgeleitet, die gerade für angehende Imker*innen anschaulich aufbereitet ist. Ergänzend werden weitere Bienen- und Pflanzenfakten gezeigt. Das Dashboard dient zugleich als Navigation zu den übrigen Seiten der Website.
*   **Bienenoase:** Die Bienenoase ist ein saisonales Wiki für Pflanzen. Die aufgelisteten Blumen lassen sich in eine Liste aufnehmen und als PDF exportieren, sodass eine Art Einkaufsliste entsteht.
*   **Kalender mit interaktiver Map:** Der Kalender bietet eine Übersicht über Vereins- und Imkertreffen. Bei Auswahl eines Datums werden die Treffen inklusive aller Informationen angezeigt. Zusätzlich lässt sich der Standort auf einer Karte finden, und es kann die Strecke von einem ausgewählten Ort zum Treffpunkt berechnet und angezeigt werden.
*   **Bienenquiz:** Im Quiz lässt sich testen, welche von sechs Bienen-Persönlichkeiten am besten zu einem passt. Für das Ergebnis werden verschiedene Fragen mit jeweils eigenen Gewichtungen gestellt.


## Tech-Stack
- **Frontend:** HTML5, CSS3, JavaScript (Vanilla, ohne Framework)
- **Icons:** Lucide (https://lucide.dev/) – ISC-Lizenz
- **Wetterdaten:** Open-Meteo API (https://open-meteo.com/) – CC BY 4.0, Namensnennung erforderlich
- **Karte:** Leaflet (https://leafletjs.com/) mit Kartenmaterial von OpenStreetMap (© OpenStreetMap-Mitwirkende)
- **PDF-Export (Bienen-Oase):** Browser-Druckfunktion (Print-to-PDF) – druckfertige HTML-Seite via window.print(), ohne externe Library
- **Bienenwaagen-Daten:** Wolfwaagen, Standort Mattighofen (OÖ)
- **Hosting:** Netlify (automatisches Deployment aus GitLab)
- **Versionsverwaltung:** GitLab (git.sbg.ac.at)
