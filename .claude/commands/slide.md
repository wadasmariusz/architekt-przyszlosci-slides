Utwórz kolejny slajd prezentacji HTML na podstawie podanego opisu: $ARGUMENTS

## Instrukcje

1. **Ustal numer slajdu**: Sprawdź istniejące pliki `slides-*.html` w katalogu projektu i nadaj kolejny numer (np. jeśli istnieje `slides-07.html`, utwórz `slides-08.html`).

2. **Przeczytaj skrypt**: Otwórz `slides.md` i `skrypt.md`, znajdź treść odpowiadającą podanemu opisowi slajdu.

3. **Przeczytaj poprzedni slajd**: Otwórz ostatni istniejący plik `slides-XX.html` aby upewnić się o spójności stylu i podejścia wizualnego.

4. **Utwórz samodzielny plik HTML** — każdy slajd jest w pełni autonomiczny (wszystkie style inline, zewnętrzne CDN-y). Nie używaj zewnętrznego `styles.css`.

### Struktura HTML (obowiązkowa)

```html
<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Slide XX — Tytuł slajdu</title>
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Tabler Icons -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css" />
    <style>
        /* ===== CSS Custom Properties ===== */
        :root {
            --cyan-400: #22d3ee;
            --cyan-500: #06b6d4;
            --cyan-700: #0e7490;
            --dark-900: #030712;
        }

        /* ===== Base ===== */
        body {
            background-color: var(--dark-900);
            color: white;
            font-family: 'Inter', sans-serif;
            overflow: hidden;
            margin: 0;
        }

        .stage {
            width: 1920px;
            height: 1080px;
            position: relative;
            background: radial-gradient(circle at 50% 50%, #0f172a 0%, #030712 100%);
            overflow: hidden;
        }

        /* ===== Tło ===== */
        .bg-grid {
            position: absolute;
            inset: 0;
            background-image:
                linear-gradient(to right, rgba(6,182,212,0.05) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(6,182,212,0.05) 1px, transparent 1px);
            background-size: 60px 60px;
        }

        .bg-glow {
            position: absolute;
            top: 50%; left: 50%;
            transform: translate(-50%, -50%);
            width: 800px; height: 800px;
            background: radial-gradient(circle, rgba(6,182,212,0.07) 0%, transparent 70%);
            pointer-events: none;
        }

        /* ===== Content layout ===== */
        .content {
            position: absolute;
            top: 80px;
            left: 50%;
            transform: translateX(-50%);
            width: 1500px;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        /* ===== Typografia ===== */
        .highlight {
            color: var(--cyan-400);
            text-shadow: 0 0 30px rgba(6,182,212,0.5);
        }

        /* ===== Camera Box ===== */
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

        /* ===== Logo ===== */
        .slide-logo {
            position: absolute;
            z-index: 4;
            bottom: 40px;
            left: 40px;
            height: 100px;
            width: auto;
            opacity: 0.85;
            pointer-events: none;
        }

        /* ===== Animacje ===== */
        @keyframes fadeUp {
            from { opacity: 0; transform: translateY(40px); }
            to   { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeIn {
            from { opacity: 0; }
            to   { opacity: 1; }
        }

        /* ===== Style specyficzne dla tego slajdu ===== */
        /* ... tutaj dodaj style unikalne dla slajdu ... */
    </style>
</head>
<body>
    <div class="stage" id="stage">
        <div class="bg-grid"></div>
        <div class="bg-glow"></div>

        <div class="content">
            <!-- Treść slajdu -->
        </div>

        <!-- Logo — obowiązkowe -->
        <img src="logo/Architekt_Przyszłości_horizontal_gradient_light.png"
             alt="Architekt Przyszłości" class="slide-logo">

        <!-- Camera box — obowiązkowy -->
        <div class="camera-box">
            kamera 480 &times; 270
        </div>
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

### System projektowy

#### Paleta kolorów
- **Akcent**: `--cyan-400` (#22d3ee), `--cyan-500` (#06b6d4), `--cyan-700` (#0e7490)
- **Tło**: `--dark-900` (#030712), gradient `#0f172a → #030712`
- **Powierzchnie**: `rgba(30,41,59,0.5)` z `backdrop-filter: blur(12px)`
- **Tekst główny**: `white`
- **Tekst drugorzędny**: `#94a3b8`
- **Obramowania**: `rgba(255,255,255,0.1)`, akcentowane `rgba(6,182,212,0.3-0.4)`

#### Rozmiary czcionek (1920×1080 — muszą być duże i czytelne)
| Element | Rozmiar | Waga |
|---------|---------|------|
| Tytuł główny | **64px** | 800 |
| Tytuł sekcji | **48-56px** | 700 |
| Podtytuł | **24-26px** | 500 |
| Tekst w kartach/bulletach | **20-22px** | 400 |
| Chip/tag | **14px** | 600, uppercase, letter-spacing 2px |
| Ikony w kartach | **48px** | — |

#### Komponenty (wzorce do stosowania)

**Era Chip** (nad tytułem):
```css
background: rgba(6,182,212,0.1);
border: 1px solid rgba(6,182,212,0.3);
color: var(--cyan-400);
padding: 8px 20px;
border-radius: 9999px;
font-weight: 600;
text-transform: uppercase;
letter-spacing: 2px;
font-size: 14px;
```

**Karta (card)**:
```css
background: rgba(30,41,59,0.5);
border: 1px solid rgba(255,255,255,0.1);
border-radius: 32px;
padding: 40px;
backdrop-filter: blur(12px);
```

**Karta wyróżniona (accent)**:
```css
border-color: rgba(6,182,212,0.4);
background: linear-gradient(145deg, rgba(30,41,59,0.5) 0%, rgba(6,182,212,0.05) 100%);
```

**Ikona w karcie**:
```css
font-size: 48px;
background: rgba(15,23,42,0.8);
width: 80px; height: 80px;
display: flex; align-items: center; justify-content: center;
border-radius: 20px;
border: 1px solid rgba(255,255,255,0.1);
```

**Lesson bar (dolny pasek z wnioskiem)**:
```css
padding: 24px 48px;
background: rgba(6,182,212,0.1);
border: 1px solid rgba(6,182,212,0.3);
border-radius: 20px;
```

**Feature list (lista cech z bullet)**:
```css
.feature-item {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 20px;
    color: #94a3b8;
}
.feature-item strong { color: white; }
.feature-item i { color: var(--cyan-400); font-size: 14px; }
```

#### Ikony
- Używaj **Tabler Icons** (klasy `ti ti-*`) zamiast emoji
- Popularne ikony: `ti-server`, `ti-network`, `ti-code`, `ti-database`, `ti-cloud`, `ti-shield`, `ti-rocket`, `ti-bulb`, `ti-chart-bar`, `ti-users`, `ti-lock`, `ti-arrow-right`, `ti-check`
- Pełna lista: https://tabler.io/icons

#### Animacje wejścia
- Elementy zaczynają z `opacity: 0` i `transform: translateY(30px)`
- Animacja: `fadeUp 0.8s ease-out [delay] forwards`
- Kaskadowe opóźnienia: 0.5s, 1.0s, 1.5s, ... (co 0.5s)
- Lesson bar / podsumowanie: `fadeIn 1s ease-out 1.8s forwards`
- Hover na kartach: `transition: all 0.5s ease` z delikatnym `transform: scale(1.05)`

#### Layout i rozmieszczenie
- `.stage` = 1920×1080px, skalowany JS-em do viewportu (centrowany)
- `.content` = szerokość 1500px, wycentrowany, `top: 80-100px`
- Camera box: `480×270px`, prawy dolny róg (`right: 40px; bottom: 40px`)
- Logo: lewy dolny róg (`left: 40px; bottom: 40px; height: 100px`)
- Treść musi się zmieścić bez nachodzenia na camera-box i logo
- Karty porównawcze: `flex` z `gap: 40px`, `max-width: 600px` każda

### Zasady ogólne

1. **Samodzielny plik** — każdy slajd jest kompletny, nie zależy od `styles.css`
2. **Tailwind CSS** via CDN — używaj do utility classes tam gdzie wygodne
3. **Tabler Icons** via CDN — używaj ikon zamiast emoji
4. **Język**: polski
5. **Bez scrollowania** — treść musi się zmieścić w 1920×1080
6. **Zwięzły tekst** — slajd to nie ściana tekstu, używaj kart, ikon, wizualizacji
7. **Kreatywne wizualizacje** — diagramy CSS, karty porównawcze, animowane elementy, progress bary, ikony
8. **Logo obowiązkowe** — `logo/Architekt_Przyszłości_horizontal_gradient_light.png` w lewym dolnym rogu
9. **Camera box obowiązkowy** — w prawym dolnym rogu
10. **Skrypt skalujący obowiązkowy** — centrujący stage na stronie

5. **Zapisz plik** jako `slides-XX.html` w katalogu projektu.