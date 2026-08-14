# Aleksandra Wolska — Beauty Atelier

Statyczna, jednostronicowa strona wizytówkowa na bazie szablonu [Astral by
HTML5 UP](https://html5up.net/astral) (licencja CCA 3.0), zrestylowana pod
branżę beauty.

## Do zrobienia ręcznie przed publikacją

- W `index.html`, w sekcji `#contact`, podmień
  `action="https://formspree.io/f/TWOJ_ID"` na prawdziwy endpoint
  Formspree (po założeniu konta na [formspree.io](https://formspree.io) i
  utworzeniu formularza).

### Podmiana zdjęć w przyszłości — kompresja

Przy każdej kolejnej podmianie zdjęć w `images/hero.jpg`,
`images/gallery/pic01.jpg` … `pic12.jpg` i `images/og-image.jpg`,
skompresuj je najpierw — zdjęcia prosto z telefonu/aparatu (kilka MB,
kilka tysięcy px szerokości) mocno spowalniają ładowanie strony:

- maksymalnie **1200 px** dłuższego boku
- JPEG jakość **ok. 75–80%** (albo format WebP, jeśli używasz nowoczesnego
  hostingu)
- docelowo **40–80 KB na zdjęcie** (obecne zdjęcia w galerii ważą
  100–160 KB — da się jeszcze zejść niżej)

Najprościej przez [squoosh.app](https://squoosh.app) — wrzuć zdjęcie,
ustaw resize + jakość, pobierz i wgraj do `/images/gallery/` pod tą samą
nazwą.

## Struktura projektu

```
index.html
assets/
  css/
    main.css       — style bazowe szablonu Astral (bez zmian strukturalnych)
    custom.css      — restyling pod beauty (paleta, typografia, nowe komponenty)
    noscript.css
    fontawesome-all.min.css
  js/
    main.js          — logika paneli/nawigacji z oryginału Astral
    lightbox.js       — lightbox galerii + fade-in zdjęć po załadowaniu (vanilla JS)
    jquery.min.js, browser.min.js, breakpoints.min.js, util.js
  webfonts/          — czcionki Font Awesome
images/
  hero.jpg, og-image.jpg, favicon.svg
  gallery/pic01.jpg … pic12.jpg
```

## Podgląd lokalny

```
cd html5up-astral
python3 -m http.server 8000
```

i otwórz `http://localhost:8000`.
