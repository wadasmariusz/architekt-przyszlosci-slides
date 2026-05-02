# Globalne instrukcje tworzenia slajdów prezentacji

---

## 1. Format i technologia

### Plik slajdu
- Każdy slajd to **osobny plik HTML** (`slides-XX.html`), w pełni samodzielny (inline CSS + inline JS).
- Numeracja dwucyfrowa: `slides-01.html`, `slides-02.html`, ..., `slides-26.html`.
- Język dokumentu: `<html lang="pl">`.
- Kodowanie: UTF-8.

### Plik indeksu
- Każdy moduł prezentacji ma plik `index.html` — spis slajdów z linkami.
- Index używa TailwindCSS (CDN) i prostą listę `<ol>` z linkami do poszczególnych slajdów.

### Plik opisu (slides.md)
- Każdy moduł ma plik `slides.md` — opis merytoryczny wszystkich slajdów w formacie Markdown.
- Zawiera: tytuł slajdu, zawartość, opis grafiki, opis animacji.

---

## 2. Struktura katalogów

```
slides/
├── XX-nazwa-modulu/
│   ├── YY-nazwa-lekcji/
│   │   ├── index.html          # Spis slajdów
│   │   ├── slides.md           # Opis merytoryczny
│   │   ├── slides-01.html      # Slajd tytułowy
│   │   ├── slides-02.html      # Kolejne slajdy
│   │   └── ...
```

Przykład: `slides/02-model-domenowy/01-ddd-subdomeny/`

---

## 3. Rozdzielczość i skalowanie (Stage)

### Wymiary bazowe
- **Szerokość:** 1920px
- **Wysokość:** 1080px (proporcje 16:9)

### Kontener `.stage`
```css
.stage {
    width: 1920px;
    height: 1080px;
    position: relative;
    overflow: hidden;
}
```

### Skrypt skalujący (obowiązkowy na końcu `<body>`)
```javascript
(function () {
    const stage = document.getElementById('stage');
    function rescale() {
        const scale = Math.min(innerWidth / 1920, innerHeight / 1080);
        stage.style.transformOrigin = 'top left';
        stage.style.transform = 'scale(' + scale + ')';
        stage.style.left = (innerWidth - 1920 * scale) / 2 + 'px';
        stage.style.top = (innerHeight - 1080 * scale) / 2 + 'px';
    }
    window.addEventListener('resize', rescale);
    rescale();
})();
```

---

## 4. Paleta kolorów

### Zmienne CSS (obowiązkowe w `:root`)
```css
:root {
    --cyan-400: #22d3ee;
    --cyan-500: #06b6d4;
    --cyan-600: #0891b2;
    --cyan-700: #0e7490;
    --cyan-900: #164e63;
    --dark-bg: #0a0e17;        /* lub #030712 */
    --dark-surface: #111827;
}
```

### Kolory funkcjonalne
| Rola | Kolor | Hex |
|------|-------|-----|
| Tło główne | Ciemny granat | `#0a0e17` lub `#030712` |
| Powierzchnia (karty, panele) | Ciemny szary | `#111827` z opacity 0.7 |
| Tekst główny | Prawie biały | `#f0f4f8` lub `#f8fafc` |
| Tekst stonowany | Szary | `#94a3b8` |
| Tekst najciemniejszy | Ciemny szary | `#64748b` |
| Akcent główny (highlight) | Cyan | `#22d3ee` → `#0891b2` gradient |
| Ostrzeżenie / błąd | Czerwony | `#ef4444` / `#f43f5e` (rose) |
| Akcent dodatkowy 1 | Pomarańczowy | `#f59e0b` / `#d97706` |
| Akcent dodatkowy 2 | Fioletowy | `#8b5cf6` / `#7c3aed` |
| Akcent dodatkowy 3 | Zielony | `#10b981` (emerald) |
| Neutralny | Szary | `#64748b` / `#475569` |

### Gradient highlight (tekst)
```css
.highlight {
    background: linear-gradient(135deg, var(--cyan-400), var(--cyan-600));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}
```

---

## 5. Typografia

### Font
- **Font:** `'Inter'` — importowany z Google Fonts.
- **Wagi:** 300 (light), 400 (regular), 600 (semibold), 800 (extra bold).

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&display=swap" rel="stylesheet">
```

### Rozmiary tekstu
| Element | Rozmiar | Waga |
|---------|---------|------|
| Tytuł główny (h1, slajd tytułowy) | `clamp(2.2rem, 5vw, 4.2rem)` lub `78-82px` (stały) | 800 |
| Tytuł sekcji (h2) | `clamp(1.6rem, 3.5vw, 2.6rem)` | 800 |
| Tekst treści | `0.95rem` – `1.15rem` | 300–400 |
| Podtytuł / subtitle | `clamp(1rem, 1.8vw, 1.35rem)` | 300 |
| Etykiety / chipy | `0.75rem` – `0.85rem` | 600 |
| Eyebrow (nadtytuł) | `24px` | 600, uppercase, letter-spacing: 4px |

### Letter-spacing
- Tytuły: `-1px` (ujemny, ścieśniony)
- Uppercase labels: `1px` – `4px`
- Tekst normalny: domyślny

---

## 6. Ikony

### Biblioteka
- **Tabler Icons** (webfont) — CDN:
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css" />
```

### Użycie
```html
<i class="ti ti-nazwa-ikony"></i>
```

### Częste ikony
- `ti-search` — odkrywanie, szukanie
- `ti-crown` — Core domain
- `ti-map` — mapa, strategia
- `ti-users` / `ti-users-group` — zespoły
- `ti-alert-triangle` — ostrzeżenie
- `ti-building` / `ti-building-community` — biznes
- `ti-credit-card` — płatności
- `ti-lock` — bezpieczeństwo
- `ti-mail` — komunikacja
- `ti-server-bolt` — serwer/API
- `ti-stack-2` — złożoność
- `ti-refresh` — zmiana
- `ti-device-mobile` — aplikacja mobilna
- `ti-shopping-cart` — zamówienia
- `ti-headset` — support

---

## 7. Tło i efekty wizualne (obowiązkowe warstwy)

### 7.1 Siatka (bg-grid) — ZAWSZE
```css
.bg-grid {
    position: absolute;
    inset: 0;
    background-image:
        linear-gradient(rgba(6,182,212,0.04) 1px, transparent 1px),
        linear-gradient(90deg, rgba(6,182,212,0.04) 1px, transparent 1px);
    background-size: 60px 60px;
    animation: gridMove 20s linear infinite;
}

@keyframes gridMove {
    0%   { background-position: 0 0; }
    100% { background-position: 60px 60px; }
}
```

### 7.2 Poświata centralna (bg-glow) — ZAWSZE
```css
.bg-glow {
    position: absolute;
    width: 700px;
    height: 700px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: pulse 6s ease-in-out infinite;
}

@keyframes pulse {
    0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
    50%      { transform: translate(-50%, -50%) scale(1.15); opacity: 0.9; }
}
```

### 7.3 Cząsteczki (particles) — ZAWSZE (6 sztuk)
```css
.particle {
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: var(--cyan-400);
    opacity: 0;
    animation: float 8s ease-in-out infinite;
}

/* Pozycje i opóźnienia — różne na każdym slajdzie: */
.particle:nth-child(3) { top: 15%; left: 10%; animation-delay: 0s; }
.particle:nth-child(4) { top: 70%; left: 85%; animation-delay: 1.5s; }
.particle:nth-child(5) { top: 30%; left: 75%; animation-delay: 3s; }
.particle:nth-child(6) { top: 80%; left: 20%; animation-delay: 4.5s; }
.particle:nth-child(7) { top: 50%; left: 50%; animation-delay: 6s; }
.particle:nth-child(8) { top: 20%; left: 60%; animation-delay: 2s; }

@keyframes float {
    0%   { opacity: 0; transform: translateY(0) scale(1); }
    20%  { opacity: 0.8; }
    80%  { opacity: 0.8; }
    100% { opacity: 0; transform: translateY(-120px) scale(0.5); }
}
```

**WAŻNE:** Pozycje cząsteczek (top/left) MUSZĄ być nieco różne na każdym slajdzie, by uniknąć monotonii.

### 7.4 Narożniki (corner accents) — ZAWSZE
```css
.corner {
    position: absolute;
    width: 60px;
    height: 60px;
    z-index: 1;
}

.corner::before,
.corner::after {
    content: '';
    position: absolute;
    background: var(--cyan-700);
}

.corner--tl { top: 30px; left: 30px; }
.corner--tl::before { width: 24px; height: 2px; top: 0; left: 0; }
.corner--tl::after  { width: 2px; height: 24px; top: 0; left: 0; }

.corner--br { bottom: 30px; right: 30px; }
.corner--br::before { width: 24px; height: 2px; bottom: 0; right: 0; }
.corner--br::after  { width: 2px; height: 24px; bottom: 0; right: 0; }
```

### 7.5 Opcjonalne: Kolorowe akcenty (blur)
Dla bardziej rozbudowanych slajdów (np. tytułowy context-mapping):
```css
.accent {
    position: absolute;
    border-radius: 50%;
    filter: blur(70px);
    opacity: 0.12;
    z-index: 0;
}
```

---

## 8. Elementy stałe slajdu

### 8.1 Logo (lewy dolny róg) — ZAWSZE
```html
<img src="../../../logo/Architekt_Przyszłości_horizontal_gradient_light.png" 
     alt="Architekt Przyszłości" class="slide-logo">
```

```css
.slide-logo {
    position: absolute;
    z-index: 100;
    bottom: 40px;
    left: 40px;
    height: 100px;
    width: auto;
    opacity: 0.85;
    pointer-events: none;
}
```

**WAŻNE:** Ścieżka do logo zależy od głębokości zagnieżdżenia. Zazwyczaj `../../../logo/`.

### 8.2 Ramka kamery (prawy dolny róg) — ZAWSZE
```html
<div class="camera-box">kamera 480 &times; 270</div>
```

```css
.camera-box {
    position: absolute;
    bottom: 40px;
    right: 40px;
    width: 480px;
    height: 270px;
    background: rgba(0,0,0,0.4);
    border: 2px dashed rgba(255,255,255,0.2);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(255,255,255,0.3);
    font-size: 14px;
    z-index: 100;
}
```

Ta ramka oznacza miejsce, w którym OBS overlay wstawi obraz z kamery prowadzącego. Wymiary: **480x270px**.

---

## 9. Animacje

### Standardowe animacje wejścia
```css
@keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
}

@keyframes fadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
}

@keyframes slideFromLeft {
    from { opacity: 0; transform: translateX(-60px); }
    to   { opacity: 1; transform: translateX(0); }
}

@keyframes slideFromRight {
    from { opacity: 0; transform: translateX(60px); }
    to   { opacity: 1; transform: translateX(0); }
}

@keyframes slideFromTop {
    from { opacity: 0; transform: translateY(-60px); }
    to   { opacity: 1; transform: translateY(0); }
}

@keyframes slideFromBottom {
    from { opacity: 0; transform: translateY(60px); }
    to   { opacity: 1; transform: translateY(0); }
}

@keyframes scaleIn {
    from { opacity: 0; transform: scale(0.6); }
    to   { opacity: 1; transform: scale(1); }
}

@keyframes bounceIn {
    0%   { opacity: 0; transform: translateY(30px) scale(0.95); }
    60%  { opacity: 1; transform: translateY(-6px) scale(1.02); }
    100% { opacity: 1; transform: translateY(0) scale(1); }
}

@keyframes popIn {
    0%   { opacity: 0; transform: scale(0.3); }
    60%  { opacity: 1; transform: scale(1.2); }
    100% { opacity: 1; transform: scale(1); }
}
```

### Zasady animacji
1. **Elementy startują z `opacity: 0`** — animacja je ujawnia.
2. **Opóźnienia kaskadowe** — kolejne elementy pojawiają się z przesunięciem ~0.2–0.4s.
3. **Tytuł wchodzi pierwszy** (~0.3s delay), potem treść (~0.6s+), na końcu akcenty (~1.5s+).
4. **Czas animacji:** typowo 0.6s–0.8s (`ease-out`).
5. **Używaj `forwards` przy `animation`** — żeby element nie znikał po animacji.
6. **Tło jest animowane ciągle** (grid, glow, particles) — treść animuje się jednorazowo.

### Wzór zastosowania
```css
.element {
    opacity: 0;
    animation: fadeUp 0.8s ease-out 0.3s forwards;
}
```

---

## 10. Komponenty UI (wzorce)

### 10.1 Karta (glass morphism)
```css
.card {
    border-radius: 16px;
    background: rgba(17,24,39,0.7);
    border: 1px solid rgba(6,182,212,0.15);
    backdrop-filter: blur(8px);
    padding: 1.5rem 2rem;
}
```

### 10.2 Karta z hover
```css
.card:hover {
    border-color: var(--cyan-500);
    background: rgba(6,182,212,0.08);
    transform: translateY(-6px);
    box-shadow: 0 8px 32px rgba(6,182,212,0.15);
}
```

### 10.3 Badge / Chip
```css
.chip {
    display: inline-flex;
    align-items: center;
    gap: 0.8rem;
    padding: 0.8rem 2rem;
    border-radius: 100px;
    background: rgba(6,182,212,0.08);
    border: 1px solid rgba(6,182,212,0.25);
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: var(--cyan-400);
}
```

### 10.4 Punkt / Item listy
```css
.point {
    display: flex;
    align-items: center;
    gap: 18px;
    padding: 20px 26px;
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 18px;
    background: rgba(17,24,39,0.62);
    color: #94a3b8;
    font-size: 30px;
    font-weight: 600;
    backdrop-filter: blur(6px);
}

.point i {
    flex: 0 0 auto;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: rgba(6,182,212,0.11);
    color: var(--cyan-400);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;
}
```

### 10.5 Ostrzeżenie (warning box)
```css
.warning {
    display: inline-flex;
    align-items: center;
    gap: 0.7rem;
    padding: 0.9rem 2rem;
    border-radius: 12px;
    background: rgba(239,68,68,0.06);
    border: 1px solid rgba(239,68,68,0.2);
}
```

### 10.6 Takeaway (element podsumowania)
```css
.takeaway {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    padding: 1.5rem 2rem;
    border-radius: 16px;
    background: rgba(17,24,39,0.7);
    border: 1px solid rgba(6,182,212,0.15);
    backdrop-filter: blur(8px);
    text-align: left;
}

.takeaway-num {
    width: 56px;
    height: 56px;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--dark-bg);
    background: linear-gradient(135deg, var(--cyan-400), var(--cyan-600));
    box-shadow: 0 0 20px rgba(34,211,238,0.3);
}
```

---

## 11. Layouty slajdów

### 11.1 Centrycznie (domyślny)
```css
.content {
    position: relative;
    z-index: 10;
    text-align: center;
    width: 100%;
    max-width: 1100px;
    padding: 0 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}
```

### 11.2 Dwie kolumny (grid)
```css
.content {
    position: relative;
    z-index: 10;
    width: 100%;
    padding: 0 170px;
    display: grid;
    grid-template-columns: 1fr 620px;
    align-items: center;
    gap: 110px;
}
```

### 11.3 Header + główna sekcja
```css
.content {
    position: relative;
    z-index: 10;
    width: 100%;
    height: 100%;
    padding: 86px 130px 150px;
}

.header {
    text-align: center;
    max-width: 1180px;
    margin: 0 auto 34px;
}
```

---

## 12. Struktura HTML slajdu (szablon)

```html
<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Slide XX - Tytuł slajdu</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css" />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&display=swap" rel="stylesheet">
    <style>
        :root {
            --cyan-400: #22d3ee;
            --cyan-500: #06b6d4;
            --cyan-600: #0891b2;
            --cyan-700: #0e7490;
            --cyan-900: #164e63;
            --dark-bg: #0a0e17;
            --dark-surface: #111827;
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }

        body {
            background: var(--dark-bg);
            color: #f0f4f8;
            font-family: 'Inter', sans-serif;
            overflow: hidden;
        }

        .stage {
            width: 1920px;
            height: 1080px;
            position: relative;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        /* === Background layers === */
        /* ... bg-grid, bg-glow, particles, corners ... */

        /* === Content === */
        .content {
            position: relative;
            z-index: 10;
            text-align: center;
            width: 100%;
            max-width: 1100px;
            padding: 0 3rem;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        /* === Specyficzne style slajdu === */
        /* ... */

        /* === Animations === */
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes fadeUp {
            from { opacity: 0; transform: translateY(24px); }
            to   { opacity: 1; transform: translateY(0); }
        }

        .camera-box { /* ... */ }
        .slide-logo { /* ... */ }
    </style>
</head>
<body>
    <div class="stage" id="stage">
        <!-- background layers -->
        <div class="bg-grid"></div>
        <div class="bg-glow"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>

        <!-- corner accents -->
        <div class="corner corner--tl"></div>
        <div class="corner corner--br"></div>

        <!-- slide content -->
        <div class="content">
            <!-- TUTAJ TREŚĆ SLAJDU -->
        </div>

        <!-- logo -->
        <img src="../../../logo/Architekt_Przyszłości_horizontal_gradient_light.png" 
             alt="Architekt Przyszłości" class="slide-logo">

        <!-- camera overlay -->
        <div class="camera-box">kamera 480 &times; 270</div>
    </div>

    <script>
        (function () {
            const stage = document.getElementById('stage');
            function rescale() {
                const scale = Math.min(innerWidth / 1920, innerHeight / 1080);
                stage.style.transformOrigin = 'top left';
                stage.style.transform = 'scale(' + scale + ')';
                stage.style.left = (innerWidth - 1920 * scale) / 2 + 'px';
                stage.style.top = (innerHeight - 1080 * scale) / 2 + 'px';
            }
            window.addEventListener('resize', rescale);
            rescale();
        })();
    </script>
</body>
</html>
```

---

## 13. Typy slajdów i ich wzorce

### 13.1 Slajd tytułowy (pierwszy w module)
- Centralne wyrównanie.
- Duży tytuł z `.highlight` na kluczowym słowie.
- Podtytuł mniejszym fontem (waga 300, kolor `#94a3b8`).
- Abstrakcyjna ilustracja/diagram nad tytułem.
- Animacje wejścia: ilustracja → tytuł → podtytuł (kaskadowo).

### 13.2 Slajd problemowy
- Layout dwukolumnowy (tekst + diagram).
- Eyebrow (nadtytuł uppercase, cyan).
- Lista punktów z ikonami (3 punkty max).
- Diagram po prawej stronie (SVG lub pozycjonowane divy).

### 13.3 Slajd definicyjny (pojęcie)
- Dwie karty obok siebie lub diagram + definicje.
- Cytat/puenta na dole.
- Czysty podział wizualny między pojęciami.

### 13.4 Slajd porównawczy (vs / ≠)
- Dwie kolumny oddzielone pionową linią.
- Symbol porównania w kole na środku linii.
- Każda kolumna ma: ikonę, nazwę, chip, opis, akcję.

### 13.5 Slajd z główną myślą (statement)
- Jedno duże zdanie na środku, animowane słowo po słowie.
- Wspierająca ilustracja nad lub pod.
- Badge/chip na dole z rolą/wnioskiem.

### 13.6 Slajd z listą/kafelkami
- 3 kafelki w rzędzie (flex, gap).
- Każdy kafelek: ikona + tytuł + krótki opis.
- Kaskadowa animacja wejścia.

### 13.7 Slajd podsumowujący
- Numerowane punkty (1, 2, 3).
- Numer w kolorowym kwadracie (gradient cyan).
- Ikona + główny tekst + podtekst.
- Animacja: bounceIn z kaskadowym opóźnieniem.

### 13.8 Slajd z diagramem/wizualizacją
- Header z tytułem i podtytułem.
- Duża sekcja diagramowa (SVG z animowanymi ścieżkami).
- Komponenty pozycjonowane absolutnie.
- Animowane linie SVG (stroke-dasharray + stroke-dashoffset).

---

## 14. Zasady projektowe

### Ilość treści
- **Maksymalnie 3 kluczowe punkty** na slajd.
- Tekst zwięzły — slajd to nie artykuł.
- Jedna główna myśl = jeden slajd.

### Hierarchia wizualna
1. Tytuł/nagłówek (największy, najjaśniejszy)
2. Treść główna (średni rozmiar)
3. Podtekst/puenta (mniejszy, ciemniejszy)
4. Tło i dekoracje (najciemniejsze, najsubtelniejsze)

### Przestrzeń
- Dużo "oddechu" — nie zapychaj slajdu.
- `max-width: 1100px` na content (centryczny).
- Marginesy: min 3rem od krawędzi content area.
- Pamiętaj o **camera-box** (480x270px prawy dolny róg) — nie umieszczaj tam ważnej treści!
- Pamiętaj o **logo** (lewy dolny róg) — nie umieszczaj tam ważnej treści!

### Kontrast i czytelność
- Białe lub jasne tekst na ciemnym tle.
- Highlight (cyan gradient) tylko na kluczowych słowach — nie na całych zdaniach.
- Akcenty kolorowe oszczędnie — max 2-3 kolory poza cyan na slajd.

---

## 15. Zewnętrzne zasoby (CDN)

| Zasób | URL |
|-------|-----|
| Inter font | `https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&display=swap` |
| Tabler Icons | `https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css` |
| TailwindCSS (tylko index.html) | `https://cdn.tailwindcss.com` |

---

## 16. Logo

- **Plik:** `Architekt_Przyszłości_horizontal_gradient_light.png`
- **Lokalizacja:** `/logo/` w katalogu głównym projektu.
- **Ścieżka względna** zależy od głębokości zagnieżdżenia pliku slajdu.
- Przykład z poziomu `slides/02-model-domenowy/01-ddd-subdomeny/`: `../../../logo/`

---

## 17. Cechy charakterystyczne stylu

1. **Dark mode** — zawsze ciemne tło, nigdy jasne.
2. **Glassmorphism** — karty z `backdrop-filter: blur(8px)` i półprzezroczystym tłem.
3. **Cyan jako kolor wiodący** — gradient 135deg cyan-400 → cyan-600.
4. **Animowana siatka w tle** — subtelna, powolna (20s).
5. **Pulsująca poświata** — centralny blur radialny.
6. **Cząsteczki unoszące się** — 6 małych kropek animowanych ciągle.
7. **Narożnikowe L-kształty** — geometryczne akcenty w rogach (top-left, bottom-right).
8. **Kaskadowe animacje wejścia** — elementy pojawiają się sekwencyjnie.
9. **Brak zewnętrznych frameworków CSS** na slajdach — czysty CSS (Tailwind tylko w index).
10. **Responsywne skalowanie** — slajd zawsze 1920x1080, skalowany JS do okna.

---

## 18. Checklist tworzenia nowego slajdu

- [ ] Plik HTML z poprawną strukturą (DOCTYPE, lang, meta)
- [ ] Import fontu Inter + Tabler Icons
- [ ] Zmienne CSS w `:root`
- [ ] Reset CSS (`* { margin: 0; padding: 0; box-sizing: border-box; }`)
- [ ] `.stage` 1920x1080
- [ ] `.bg-grid` z animacją
- [ ] `.bg-glow` z animacją pulse
- [ ] 6 `.particle` z unikalnymi pozycjami
- [ ] `.corner--tl` i `.corner--br`
- [ ] `.content` z treścią slajdu
- [ ] Logo (`<img class="slide-logo">`)
- [ ] Camera box (`<div class="camera-box">`)
- [ ] Skrypt skalujący na końcu `<body>`
- [ ] Animacje wejścia na elementach treści (opacity: 0 → forwards)
- [ ] Tytuł w `<title>`: "Slide XX - Nazwa"
- [ ] Unikalne pozycje particles (różne od sąsiednich slajdów)

---

## 19. Dodatkowe wzorce SVG

### Animowane linie SVG (connections / links)
```css
.link {
    stroke: rgba(148,163,184,0.34);
    stroke-width: 2;
    fill: none;
    stroke-dasharray: 760;
    stroke-dashoffset: 760;
    animation: drawLink 1.5s ease-out forwards;
}

@keyframes drawLink {
    to { stroke-dashoffset: 0; }
}
```

### Pulsujący pierścień (emphasis)
```css
.pulse-ring {
    border-radius: 50%;
    border: 2px solid rgba(244,63,94,0.22);
    opacity: 0;
    animation: pulseRing 2.8s ease-out infinite;
}

@keyframes pulseRing {
    0% { opacity: 0.65; transform: scale(0.72); }
    100% { opacity: 0; transform: scale(1.35); }
}
```

---

## 20. Język i ton treści

- Język: **polski** (pl).
- Ton: profesjonalny, ale bezpośredni — jak rozmowa z doświadczonym architektem.
- Krótkie zdania, konkrety.
- Puenty / cytaty na dole slajdu — stylizowane kursywą lub mocnym fontem.
- Używaj `<strong>` / `<span class="highlight">` / `<span class="hl">` na kluczowych słowach.
