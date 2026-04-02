Utwórz kolejny slajd prezentacji HTML na podstawie podanego opisu: $ARGUMENTS

## Instrukcje

1. **Ustal numer slajdu**: Sprawdź istniejące pliki `slides-*.html` w katalogu projektu i nadaj kolejny numer (np. jeśli istnieje `slides-05.html`, utwórz `slides-06.html`).

2. **Przeczytaj skrypt**: Otwórz `slides.md` i `skrypt.md`, znajdź treść odpowiadającą podanemu opisowi slajdu.

3. **Przeczytaj poprzedni slajd**: Otwórz ostatni istniejący plik `slides-XX.html` aby upewnić się o spójności stylu.

4. **Utwórz plik HTML** z zachowaniem poniższego systemu projektowego:

### Paleta kolorów (CSS custom properties)
```css
:root {
    --cyan-400: #22d3ee;
    --cyan-500: #06b6d4;
    --cyan-600: #0891b2;
    --cyan-700: #0e7490;
    --cyan-900: #164e63;
    --dark-bg: #0a0e17;
    --dark-surface: #111827;
}
```

### Typografia
- Font: `'Inter', sans-serif` (import z Google Fonts: wght 300, 400, 600, 800)
- Kolor tekstu: `#f0f4f8`
- Kolor drugorzędny: `#94a3b8`
- Kolor przyciemniony: `#64748b`

### Tło slajdu (obowiązkowe warstwy)
Każdy slajd MUSI zawierać te elementy tła:
```html
<div class="slide">
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
        <!-- treść slajdu -->
    </div>
</div>
```

### Styl tła (obowiązkowy CSS)
```css
.slide {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
}

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

.particle {
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: var(--cyan-400);
    opacity: 0;
    animation: float 8s ease-in-out infinite;
}

/* rozmieść particles w różnych miejscach z różnymi animation-delay */

@keyframes float {
    0%   { opacity: 0; transform: translateY(0) scale(1); }
    20%  { opacity: 0.8; }
    80%  { opacity: 0.8; }
    100% { opacity: 0; transform: translateY(-120px) scale(0.5); }
}
```

### Corner accents (obowiązkowy CSS)
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

### Styl treści
```css
.content {
    position: relative;
    z-index: 2;
    text-align: center;
    width: 100%;
    max-width: 1100px;
    padding: 0 3rem;
}
```

### Wzorce animacji wejścia
- Używaj `fadeUp` jako główną animację wejścia:
```css
@keyframes fadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
}
```
- Elementy zaczynają z `opacity: 0` i mają `animation: fadeUp 0.8s ease-out Xs forwards` z rosnącym delay (0.3s, 0.6s, 0.9s, ...)
- Dla kart/elementów listy używaj kaskadowego opóźnienia (0.3s odstępu)

### Wzorce komponentów

**Tytuł sekcji:**
```css
.section-title {
    font-size: clamp(1.6rem, 3.5vw, 2.6rem);
    font-weight: 800;
    margin-bottom: 3.5rem;
}

.section-title .highlight {
    background: linear-gradient(135deg, var(--cyan-400), var(--cyan-600));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}
```

**Karty/boxy:**
```css
/* Użyj tych wzorców dla kart */
border-radius: 16px;
background: rgba(17,24,39,0.7);
border: 1px solid rgba(6,182,212,0.15);
backdrop-filter: blur(8px);

/* hover: */
border-color: var(--cyan-500);
background: rgba(6,182,212,0.08);
transform: translateY(-6px);
box-shadow: 0 8px 32px rgba(6,182,212,0.15);
```

**Aktywny/wyróżniony element:**
```css
border-color: var(--cyan-500);
background: rgba(6,182,212,0.06);
box-shadow: 0 0 24px rgba(6,182,212,0.15);
/* + animacja pulsującego glow */
```

**Chipy/tagi:**
```css
font-size: 0.75rem;
padding: 0.35em 1em;
border-radius: 100px;
background: rgba(6,182,212,0.08);
border: 1px solid rgba(6,182,212,0.2);
color: var(--cyan-400);
```

**Podpis/caption:**
```css
font-size: 0.95rem;
font-weight: 300;
color: #64748b;
/* Ważne słowa: */
color: var(--cyan-400);
font-weight: 600;
```

### Zasady ogólne
- Każdy slajd to osobny plik HTML (self-contained ze stylami w `<style>`)
- Język: polski
- Slajd musi mieścić się w 100vw x 100vh bez scrollowania
- Używaj kreatywnych wizualizacji (diagramy CSS, animacje, ikony emoji) zamiast prostego tekstu
- Tekst powinien być zwięzły - slajd to nie ściana tekstu
- Animacje wejścia powinny się odtwarzać automatycznie po załadowaniu strony
- Każdy slajd musi być samodzielny (nie wymaga JS ani zewnętrznych zasobów poza Google Fonts)

5. **Zapisz plik** jako `slides-XX.html` w katalogu projektu.