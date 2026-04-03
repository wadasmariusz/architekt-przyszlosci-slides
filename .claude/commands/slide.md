Utwórz kolejny slajd prezentacji HTML na podstawie podanego opisu: $ARGUMENTS

## Instrukcje

1. **Ustal numer slajdu**: Sprawdź istniejące pliki `slides-*.html` w katalogu projektu i nadaj kolejny numer (np. jeśli istnieje `slides-05.html`, utwórz `slides-06.html`).

2. **Przeczytaj skrypt**: Otwórz `slides.md` i `skrypt.md`, znajdź treść odpowiadającą podanemu opisowi slajdu.

3. **Przeczytaj poprzedni slajd**: Otwórz ostatni istniejący plik `slides-XX.html` aby upewnić się o spójności stylu.

4. **Przeczytaj `styles.css`**: Zapoznaj się ze współdzielonymi stylami — NIE duplikuj ich w `<style>` slajdu. W `<style>` slajdu umieszczaj **tylko style specyficzne** dla tego slajdu.

5. **Przeczytaj `template.html`**: Użyj go jako bazowej struktury HTML.

6. **Utwórz plik HTML** z zachowaniem poniższego systemu projektowego:

### Struktura HTML (obowiązkowa)
Każdy slajd MUSI używać tej struktury (zgodnej z `template.html`):
```html
<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Slide XX — Tytuł slajdu</title>
    <link rel="stylesheet" href="styles.css">
    <style>
        /* TYLKO style specyficzne dla tego slajdu */
        /* NIE powtarzaj stylów z styles.css */
    </style>
</head>
<body>
    <div class="stage" id="stage">
        <div class="background">
            <div class="bg-grid"></div>
            <div class="bg-glow"></div>
            <div class="particle"></div>
            <div class="particle"></div>
            <div class="particle"></div>
            <div class="particle"></div>
            <div class="particle"></div>
            <div class="particle"></div>
            <div class="particle"></div>
            <div class="particle"></div>
            <div class="corner corner--tl"></div>
            <div class="corner corner--br"></div>
        </div>

        <!-- CONTENT — treść slajdu -->
        <div class="content">
            <!-- treść specyficzna dla slajdu -->
        </div>

        <!-- CAMERA BOX — obowiązkowy w każdym slajdzie -->
        <div class="camera-box">
            <div class="camera-box__placeholder">kamera 480 &times; 270</div>
        </div>

        <div class="overlay"></div>
    </div>

    <script>
        (function () {
            const stage = document.getElementById('stage');
            function rescale() {
                stage.style.transform = 'scale(' + Math.min(innerWidth / 1920, innerHeight / 1080) + ')';
            }
            addEventListener('resize', rescale);
            rescale();
        })();
    </script>
</body>
</html>
```

### Współdzielone klasy CSS (zdefiniowane w `styles.css` — NIE duplikuj)
Te klasy są już dostępne i gotowe do użycia:
- **Layout**: `.stage`, `.background`, `.bg-grid`, `.bg-glow`, `.particle`, `.corner`, `.corner--tl`, `.corner--br`, `.content`, `.camera-box`, `.camera-box__placeholder`, `.overlay`
- **Typografia**: `.title` (72px), `.title .highlight`, `.section-title` (56px), `.section-title .highlight`, `.subtitle` (26px), `.module-label` (16px), `.divider`
- **Chipy**: `.era-chips`, `.chip` (16px), `.era-chip` (16px, uppercase, z animacją fadeUp)
- **Lesson box**: `.lesson`, `.lesson-icon` (24px), `.lesson-text` (22px), `.lesson-text strong`
- **Animacje**: `fadeUp`, `gridMove`, `pulse`, `float`

### Rozmiary czcionek (wytyczne)
Czcionki muszą być duże i wyraźne — prezentacja jest wyświetlana na ekranie 1920×1080:
- Tytuły główne: **72px**
- Tytuły sekcji: **56px**
- Podtytuły: **26px**
- Tekst w kartach/bulletach: **18-22px** (nie mniej niż 16px)
- Opisy drugorzędne: **16px** minimum
- Chipy/tagi: **16px**
- Ikony emoji: **24-36px**

### Ważne szczegóły layoutu
- `.stage` ma stały rozmiar 1920×1080px i jest skalowany JS-em do viewportu
- `.content` jest pozycjonowany absolutnie z `bottom: 310px` — to zostawia miejsce na `.camera-box` (480×270px) w prawym dolnym rogu
- `.camera-box` jest pozycjonowany absolutnie: `right: 40px; bottom: 40px`
- Treść slajdu musi się zmieścić w obszarze `.content` bez nachodzenia na camera-box

### Paleta kolorów (dostępna jako CSS custom properties)
- `--cyan-400` do `--cyan-900` — kolory akcentowe
- `--dark-bg`, `--dark-surface` — tła
- Tekst: `#f0f4f8` (główny), `#94a3b8` (drugorzędny), `#64748b` (przyciemniony)

### Wzorce animacji wejścia
- Używaj `fadeUp` jako główną animację wejścia (zdefiniowaną w `styles.css`)
- Elementy zaczynają z `opacity: 0` i mają `animation: fadeUp 0.8s ease-out Xs forwards` z rosnącym delay (0.3s, 0.6s, 0.9s, ...)
- Dla kart/elementów listy używaj kaskadowego opóźnienia (0.3s odstępu)

### Wzorce komponentów (definiuj w `<style>` slajdu tylko gdy potrzebne)

**Karty/boxy:**
```css
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
```

### Zasady ogólne
- Każdy slajd importuje `styles.css` via `<link>` — NIE kopiuj tych stylów do `<style>`
- W `<style>` slajdu definiuj **tylko** klasy specyficzne dla tego slajdu
- Język: polski
- Slajd musi mieścić się w 1920×1080 bez scrollowania
- Używaj kreatywnych wizualizacji (diagramy CSS, animacje, ikony emoji) zamiast prostego tekstu
- Tekst powinien być zwięzły — slajd to nie ściana tekstu
- Animacje wejścia powinny się odtwarzać automatycznie po załadowaniu strony
- Każdy slajd musi zawierać camera-box z placeholderem
- Skrypt skalujący `rescale()` jest obowiązkowy w każdym slajdzie

7. **Zapisz plik** jako `slides-XX.html` w katalogu projektu.