# Changelog

Historia zmian na stronie Aleksandra Wolska — Beauty Atelier.

## 2026-08-14 (4) — Stopka: przygaszony credit HTML5 UP

- "Design: HTML5 UP" zostaje w kodzie (wymóg licencji CCA 3.0 szablonu
  Astral — usunięcie/ukrycie byłoby jej złamaniem), ale kolor
  przygaszony do `rgba(43,36,32,0.35)`, żeby wzrok szedł na
  "Wykonanie: widacwas.pl"

## 2026-08-14 (3) — Audyt i poprawki po wgraniu zdjęć

**Galeria "wyblakła" / wolno się ładująca**
- Pierwsze 6 zdjęć (`pic01`–`pic06`) ładuje się od razu przy starcie
  strony w tle (usunięty `loading="lazy"`), pozostałe 6 zostały leniwe
- Dodane jawne `width="800" height="600"` na wszystkich 12 `<img>` —
  brak skoku layoutu przed załadowaniem
- Kremowe tło placeholdera pod kafelkami (`background-color:
  var(--color-bg)`) zamiast białego/wyblakłego prostokąta
- Płynny fade-in po załadowaniu: `assets/js/lightbox.js` dodaje klasę
  `.loaded` na `load`, `custom.css` animuje `opacity`

**Fonty**
- Zamiana Playfair Display + Lato (oklepany zestaw beauty/AI) na
  Fraunces (nagłówki) + Work Sans (tekst) — mniej szablonowe, wciąż
  darmowe z Google Fonts

**Pusta przestrzeń na szerokich ekranach**
- `#wrapper` poszerza się do `64em` powyżej `1400px` szerokości ekranu
- Po drodze poprawiony realny bug: `main.css` ustawia sztywny
  `width: 45em` na `#wrapper`, więc samo nadpisanie `max-width` nic nie
  zmieniało — trzeba było nadpisać też `width`
- Zostawiona jako komentarz alternatywa (Opcja B: rozmyte tło za kartą)

**Drobne**
- Zweryfikowano: kolejność `main.css` → `custom.css` była już poprawna,
  kolor przycisku "Wyślij wiadomość" faktycznie odpowiada
  `var(--color-ink)` (`#2B2420`)
- Zostawiony komentarz w CSS: po wgraniu docelowych pionowych zbliżeń
  (oko/brwi) rozważyć zmianę `aspect-ratio` galerii z `4/3` na `3/4`
- README: dopisana instrukcja kompresji zdjęć przed wgraniem (max
  1200px, JPEG 75–80%, 40–80 KB/zdjęcie, squoosh.app)

## 2026-08-14 (2) — Wgranie i optymalizacja realnych zdjęć

- Naprawiona literówka w nazwie pliku: `og-imagine.jpg` → `og-image.jpg`
- Zdjęcia z telefonu (43 MB łącznie, pojedyncze pliki do 7 MB)
  zmniejszone i skompresowane do ~2 MB łącznie
- Poprawiona orientacja zdjęć z błędnym EXIF (obrócone/na boku)
- Siatka galerii: stały box `aspect-ratio: 4/3` + `object-fit: cover`,
  żeby mieszane zdjęcia pionowe/poziome nie rozjeżdżały rzędów
- Oryginalne pliki w pełnej rozdzielczości zachowane w
  `../oryginalne-zdjecia-backup/` (poza repo, na dysku lokalnym)
- Dodany `.gitignore` dla `.DS_Store`

## 2026-08-14 (1) — Pierwsza wersja strony

- Zbudowana jednostronicowa strona na bazie szablonu Astral (HTML5 UP),
  zrestylowana pod branżę beauty: paleta kremowo-różowo-złota,
  typografia, sekcje Home / O mnie / Oferta / Galeria / Opinie / Kontakt
- Lightbox galerii w vanilla JS, formularz kontaktowy podłączony pod
  Formspree (placeholder endpointu do podmiany)
- Placeholdery zdjęć wygenerowane pod docelowe ścieżki
- Repo utworzone na GitHubie, GitHub Pages włączone:
  https://mateuszpietruniewicz-arch.github.io/wolska-beauty-atelier/
- Dodana atrybucja "Wykonanie: widacwas.pl" w stopce
