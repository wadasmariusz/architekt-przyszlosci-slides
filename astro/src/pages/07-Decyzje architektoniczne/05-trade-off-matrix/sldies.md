### Slajd 1

**Wejście po słowach:** „dziś porozmawiamy o kompromisach”
**Tytuł:** Trade-off matrix
**Grafika/diagram:** prosta waga: „korzyść” vs „koszt”.

### Slajd 2

**Wejście po słowach:** „Trade-off oznacza, że wybierając jedną korzyść, akceptujemy pewien koszt.”
**Tytuł:** Czym jest trade-off?
**Opis slajdu:** Pokazać definicję oraz 2 przykłady: mikroserwisy = niezależność + złożoność; monolit = szybkość + ryzyko sprzężenia.

### Slajd 3

**Wejście po słowach:** „najlepsze w naszym kontekście”
**Tytuł:** Decyzja zależy od kontekstu
**Opis slajdu:** Wypunktować: ograniczenia, ryzyka, kompetencje zespołu, cele biznesowe, etap produktu.

### Slajd 4

**Wejście po słowach:** „Trade-off matrix, czyli macierz kompromisów”
**Tytuł:** Trade-off matrix
**Opis slajdu:** Pokazać ideę macierzy: opcje po jednej osi, kryteria po drugiej. Slajd ma wyjaśniać, że macierz porządkuje dyskusję, a nie zastępuje decyzję.

### Slajd 5

**Wejście po słowach:** „Wyobraźmy sobie przykład z naszej platformy wynajmu pojazdów.”
**Tytuł:** Przykład: platforma wynajmu pojazdów
**Opis slajdu:** Kontekst decyzji: szybkie MVP, przyszły wzrost, nowe lokalizacje, płatności, flota, partnerzy.
**Grafika/diagram:** uproszczony schemat domen: rezerwacje, płatności, flota, użytkownicy, powiadomienia.

### Slajd 6

**Wejście po słowach:** „Jedna osoba w zespole proponuje modularny monolit”
**Tytuł:** Opcja 1: modularny monolit
**Opis slajdu:** Pokazać zalety: szybsze dostarczanie, prostsze testy lokalne, łatwiejsze transakcje, brak komunikacji sieciowej między usługami. Dodać koszt: ryzyko sprzężenia i trudniejsze skalowanie organizacyjne w przyszłości.

### Slajd 7

**Wejście po słowach:** „Ktoś inny proponuje mikroserwisy”
**Tytuł:** Opcja 2: mikroserwisy
**Opis slajdu:** Pokazać zalety: niezależne wdrażanie, osobne skalowanie, autonomiczne obszary biznesowe. Dodać koszt: złożoność operacyjna, debugowanie, komunikacja sieciowa, obserwowalność.

### Slajd 8

**Wejście po słowach:** „Jeszcze inna osoba proponuje podejście ewolucyjne”
**Tytuł:** Opcja 3: podejście ewolucyjne
**Opis slajdu:** Pokazać start od modularnego monolitu z granicami modułów przygotowanymi pod przyszłe wydzielanie usług.
**Animacja:** przejście: monolit modularny → wybrane moduły jako mikroserwisy.

### Slajd 9

**Wejście po słowach:** „Najpierw określamy, jakie warianty rozważamy.”
**Tytuł:** Jak budować macierz?
**Opis slajdu:** Kroki: 1. warianty, 2. kryteria, 3. wagi, 4. ocena, 5. komentarze i ryzyka.

### Slajd 10

**Wejście po słowach:** „kryteria nie były przypadkowe”
**Tytuł:** Kryteria z driverów
**Opis slajdu:** Pokazać przykładowe kryteria: time-to-market, prostota, skalowalność, niezawodność, spójność danych, koszt operacyjny, kompetencje zespołu.

### Slajd 11

**Wejście po słowach:** „Kolejnym krokiem jest nadanie wag”
**Tytuł:** Wagi zmieniają decyzję
**Opis slajdu:** Porównać dwa konteksty: MVP — większa waga prostoty i time-to-market; system finansowy — większa waga spójności, bezpieczeństwa i niezawodności.

### Slajd 12

**Wejście po słowach:** „Możemy użyć prostej skali, na przykład od jednego do pięciu”
**Tytuł:** Ocena to nie prawda absolutna
**Opis slajdu:** Pokazać skalę 1–5 i ostrzeżenie: Wynik liczbowy strukturyzuje rozmowę, ale nie powinien automatycznie rozstrzygać decyzji.

### Slajd 13

**Wejście po słowach:** „Największą wartością jest rozmowa”
**Tytuł:** Najważniejsza jest dyskusja
**Opis slajdu:** Pokazać przykłady konsekwencji: REST API, event-driven architecture, wspólna baza danych. Slajd ma wspierać rozmowę o kosztach, nie tylko punktach.

### Slajd 14

**Wejście po słowach:** „Trade-off matrix pomaga też ograniczyć wpływ opinii”
**Tytuł:** Mniej opinii, więcej kryteriów
**Opis slajdu:** Pokazać zasadę: „Jeśli rozwiązanie jest najlepsze — względem jakich kryteriów?” Slajd porządkujący dyskusję zespołową.

### Slajd 15

**Wejście po słowach:** „żeby do macierzy dodawać jakościowe komentarze”
**Tytuł:** Komentarze wyjaśniają liczby
**Opis slajdu:** Pokazać przykład oceny: „Niezawodność: 4/5 — istnieją retry, zespół zna technologię, infrastruktura już działa.” Podkreślić, że komentarz utrwala kontekst decyzji.

### Slajd 16

**Wejście po słowach:** „gdy łączymy trade-off matrix z ADR-em”
**Tytuł:** Od macierzy do ADR
**Opis slajdu:** Pokazać mapowanie: kontekst → opcje → kryteria → decyzja → konsekwencje.
**Diagram:** prosty przepływ z trade-off matrix do ADR.

### Slajd 17

**Wejście po słowach:** „trade-off matrix najlepiej działa jako narzędzie zespołowe”
**Tytuł:** Decyzja zespołowa
**Opis slajdu:** Pokazać role i perspektywy: developerzy, DevOps/SRE, product owner, security engineer. Każda rola wnosi inne ryzyka i kryteria.

### Slajd 18

**Wejście po słowach:** „Ostatecznie trade-off matrix jest narzędziem”
**Tytuł:** Świadoma decyzja
**Opis slajdu:** Podsumować proces: kontekst → kryteria → opcje → wagi → ryzyka → decyzja → powrót do założeń. Slajd końcowy ma wzmacniać myśl: architektura to transparentne decyzje, nie szukanie ideału.
