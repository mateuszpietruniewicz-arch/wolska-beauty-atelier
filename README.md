# Aleksandra Wolska — Beauty Atelier

Statyczna, jednostronicowa strona wizytówkowa na bazie szablonu [Astral by
HTML5 UP](https://html5up.net/astral) (licencja CCA 3.0), zrestylowana pod
branżę beauty.

## Do zrobienia ręcznie przed publikacją

Poniższe pliki to placeholdery (szare tło + napis "Miejsce na zdjęcie") —
podmień je na finalne zdjęcia, zachowując te same nazwy i ścieżki, bez
ruszania kodu HTML/CSS:

- `images/hero.jpg` — zdjęcie w sekcji Home
- `images/gallery/pic01.jpg` … `pic12.jpg` — zdjęcia w Galerii (kolejność
  podpisów zgodna z `index.html`, sekcja `#work`)
- `images/og-image.jpg` — obrazek podglądu przy udostępnianiu linku
  (Open Graph); może być kopią `hero.jpg`

Dodatkowo:

- W `index.html`, w sekcji `#contact`, podmień
  `action="https://formspree.io/f/TWOJ_ID"` na prawdziwy endpoint
  Formspree (po założeniu konta na [formspree.io](https://formspree.io) i
  utworzeniu formularza).

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
    lightbox.js       — lightbox galerii (vanilla JS)
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
