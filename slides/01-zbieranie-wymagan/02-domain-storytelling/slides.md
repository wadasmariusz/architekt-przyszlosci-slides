# Slajdy do lekcji: Domain Storytelling

---

## Slajd 1 - Tytuł

**Nagłówek:**
Domain Storytelling

**Podtytuł:**
Modelowanie procesów przez opowieść

**Autorzy:**
Stefan Hofer & Henning Schwentner

**Layout:**

* Dużo pustej przestrzeni
* Jedno centralne hasło
* Autorzy mniejszą czcionką pod podtytułem
* Tło minimalistyczne / ciemne
* Styl wprowadzający, spokojny

---

## Slajd 2 - Problem notacji

**Nagłówek:**
Dlaczego biznes nie lubi diagramów

**Treść (krótkie hasła):**

* UML niezrozumiały
* BPMN wymaga nauki
* Dokumenty zabijają kontekst

**Dół slajdu (wyróżnienie):**
Ludzie naturalnie rozumieją historie

**Layout:**

* Kontrast między „formalną analizą" a „naturalnym opowiadaniem"
* Mocne zdanie na dole

---

## Slajd 3 - Pięć elementów notacji

**Nagłówek:**
Z czego składa się diagram

**Treść:**

* **Aktor** — osoba lub system, który coś robi. Pojawia się na diagramie tylko raz.
* **Obiekt roboczy** — rzecz, na której aktor operuje (zamówienie, ticket, raport). Może pojawiać się wielokrotnie.
* **Aktywność** — strzałka z numerem łącząca aktora z obiektem. Numery tworzą kolejność historii.
* **Adnotacja** — komentarz na marginesie. Obsługuje wyjątki bez przerywania głównej historii.
* **Grupa** — zarys otaczający fragment diagramu. Pokazuje granice organizacyjne lub powtarzające się aktywności.

**Layout:**

* 5 elementów w układzie kafelkowym, każdy z ikoną i krótkim opisem
* Jeden diagram = jedna historia

---

## Slajd 4 - Czas teraźniejszy

**Nagłówek:**
Ekspert zaczyna opowiadać

**Treść:**

* Wymagania piszemy w czasie przyszłym: „system powinien umożliwiać..."
* Podczas sesji ekspert mówi w czasie teraźniejszym:
* „Klient wypełnia formularz"
* „Kasjer pobiera plan sali"

**Wyróżnienie:**
Mniej spekulacji, więcej konkretu — ekspert przestaje zgadywać i zaczyna opowiadać

---

## Slajd 5 - Kino Metropolis

**Nagłówek:**
Przykład: sprzedaż biletu w kinie

**Treść:**

1. Widz kupuje bilet u kasjera
2. Opcjonalnie — kupuje przekąski przy barze
3. Bileter sprawdza bilet i wpuszcza na salę
4. Projekcjonista uruchamia seans
5. Widz ogląda film

**Wyróżnienie:**
Zero technikaliów — żadnych baz danych, API, systemów. Czysta historia biznesowa.

---

## Slajd 6 - Co widzi architekt

**Nagłówek:**
Biznes widzi proces — architekt widzi ryzyko

**Treść:**

* Plan sali to współdzielony zasób
* Dwóch kasjerów szuka wolnych miejsc jednocześnie
* Potencjalny konflikt współbieżności

**Wyróżnienie:**
Biznes opowiada proces swoimi słowami, a Ty słyszysz ryzyka których oni nie widzą

---

## Slajd 7 - Rola moderatora

**Nagłówek:**
Ty jesteś moderatorem

**Treść:**

* Eksperci opowiadają — Ty rysujesz
* Ty słuchasz, Ty decydujesz co ląduje na diagramie
* Ty zadajesz pytania

**Wyróżnienie:**
Bądź jak dziecko które dopiero poznaje świat — zacznij od tego co zwykłe

---

## Slajd 8 - Happy Path

**Nagłówek:**
Zawsze zaczynaj od Happy Path

**Treść:**

* Żeby zrozumieć wyjątek, musisz najpierw wiedzieć co jest normą
* Architekci i developerzy naturalnie myślą o tym co może pójść nie tak — to pułapka
* Happy Path daje fundament, na którym budujesz resztę

**Wyróżnienie:**
Najpierw norma, potem wyjątki

---

## Slajd 9 - Wyjątki

**Nagłówek:**
A co jeśli coś pójdzie nie tak?

**Treść:**

* Nie przerywaj historii — zapisz jako adnotację
* Wróć do głównej opowieści
* Po zakończeniu Happy Path — modeluj wyjątek na osobnym diagramie

**Wyróżnienie:**
Jeden diagram, jedna historia

---

## Slajd 10 - Bez technologii

**Nagłówek:**
Najpierw czysty biznes

**Treść:**

* Modeluj jakby żadnego oprogramowania nie było
* Ludzie pracujący latami z legacy opisują proces przez pryzmat ograniczeń systemu
* Po kilku latach nie wiedzą że to ograniczenie — myślą że to natura procesu

**Dół slajdu (wyróżnienie):**
Kiedy prowadzisz sesję bez ekranu — ludzie odkrywają swoją domenę na nowo

---

## Slajd 11 - Excel jako sygnał ostrzegawczy

**Nagłówek:**
„Eksportuję do Excela i wklejam do drugiego systemu"

**Treść:**

* To nie jest proces biznesowy — to workaround
* Ale dla osoby która robi to od pięciu lat — „to właśnie jest jak to działa"
* Bez kontekstu starego systemu pojawiają się pytania: „po co w ogóle eksportujemy?"

**Wyróżnienie:**
Workaround ≠ wymaganie biznesowe

---

## Slajd 12 - Trzy wymiary zakresu

**Nagłówek:**
Zakres diagramu

**Treść:**

* **Ziarnistość** — jak szczegółowy jest diagram (gruboziarnisty vs. drobnoziarnisty)
* **Punkt w czasie** — As-Is (jak jest dziś) vs. To-Be (jak ma być po wdrożeniu)
* **Czystość domenowa** — czysty biznes vs. diagram z systemami informatycznymi

**Wyróżnienie:**
Kopiuj diagram przed każdą zmianą zakresu — masz historię decyzyjną

---

## Slajd 13 - Ewolucja diagramów

**Nagłówek:**
Od zrozumienia do projektu

**Treść:**

1. Czysty biznes, gruboziarnisty, as-is
2. Więcej szczegółów
3. Dodanie technologii
4. Projekt rozwiązania — scyfryzowany, drobnoziarnisty, to-be

**Layout:**

* Sekwencja / progres kroków
* Każde przejście to osobny diagram

---

## Slajd 14 - Rozmowa ponad diagram

**Nagłówek:**
Diagram to nie wszystko

**Treść:**

* Technika nie nazywa się Domain Story Writing — nazywa się Domain Storytelling
* Kontekst, emocje, momenty „aha" zostają w sali
* Developer który dostaje diagram mailem patrzy na obrazek, nie na wiedzę

**Wyróżnienie:**
Rozmowa jest ważniejsza niż model

---

## Slajd 15 - Podsumowanie

**Nagłówek:**
Najważniejsze wnioski

**Treść:**

* Słuchaj i rysuj
* Happy Path najpierw
* Czysty biznes bez technologii jako punkt startowy
* Rozmowa jest kluczowa

**Narzędzie:**
Egon.io — bezpłatne, stworzone przez autorów, pilnuje poprawnej notacji

**Dół slajdu (wyróżnienie):**
Najwięcej odkrywasz, gdy ekspert zaczyna opowiadać

---