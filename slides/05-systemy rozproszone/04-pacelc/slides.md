Przeanalizowałam skrypt i przygotowuję opisy slajdów. Zanim to zrobię, pozwól że sprawdzę kilka rzeczy, które mogą wzbogacić opisy.Mam pełny obraz. Poniżej znajdziesz zaprojektowane opisy slajdów — ściśle w chronologii skryptu.

---

## Slajd 1

**Wejście po słowach:** *„Cześć, Dzisiaj chciałbym opowiedzieć o PACELC"*

**Tytuł:** PACELC — kompromisy w systemach rozproszonych

**Opis:** Slajd tytułowy lekcji. Zawiera tytuł „PACELC — kompromisy w systemach rozproszonych na co dzień", podtytuł z informacją o autorze twierdzenia (Daniel J. Abadi, Yale University, 2010/2012) oraz kontekst kursu: „Lekcja dla architektów oprogramowania". Slajd powinien jasno komunikować, że temat dotyczy praktycznych decyzji architektonicznych, nie tylko teorii — zgodnie z otwarciem skryptu.

---

## Slajd 2

**Wejście po słowach:** *„Żeby dobrze zrozumieć PACELC, warto zacząć od prostszego modelu, czyli CAP"*

**Tytuł:** CAP — punkt wyjścia

**Opis:** Slajd przypominający model CAP w zwięzłej formie. Trzy elementy: Consistency, Availability, Partition Tolerance — z krótkim wyjaśnieniem każdego (1 zdanie). Kluczowy komunikat na slajdzie: „CAP opisuje sytuację awaryjną — co robimy, gdy pojawia się partycja sieciowa?" Slajd pełni funkcję porządkującą — ustala bazę wiedzy, od której prowadzący przechodzi do PACELC. Nie ma potrzeby rozbudowywać — CAP to tu jedynie trampolina.

---

## Slajd 3

**Wejście po słowach:** *„Większość decyzji architektonicznych podejmujemy wtedy, kiedy wszystko działa normalnie"*

**Tytuł:** Ograniczenie CAP — co z codziennością?

**Opis:** Slajd z kluczowym pytaniem, które motywuje wprowadzenie PACELC. Centralny tekst: „Większość życia systemu nie dzieje się w czasie awarii." Poniżej pytanie architektoniczne: „Kiedy sieć działa, usługi działają, baza działa — czy odpowiadamy szybko, czy gwarantujemy świeżość danych?" Slajd ma charakter przejściowy — buduje napięcie przed wyjaśnieniem PACELC. Może zawierać cytat z oryginalnej pracy Abadiego: *„Ignoring the consistency/latency tradeoff of replicated systems is a major oversight, as it is present at all times during system operation."*

---

## Slajd 4

**Wejście po słowach:** *„PACELC można rozumieć tak: jeśli jest partycja sieciowa, wybieramy między dostępnością a spójnością"*

**Tytuł:** PACELC — pełny model

**Opis:** Slajd wyjaśniający strukturę akronimu PACELC.

**Grafika/diagram:** Schemat w formie warunkowej (if/else):
- **IF Partition** → wybór: **A** (Availability) vs **C** (Consistency)
- **ELSE** (brak partycji) → wybór: **L** (Latency) vs **C** (Consistency)

Wyraźne wizualne zaznaczenie, że część „Else" opisuje codzienność systemu i jest najważniejsza z perspektywy architekta. Diagram powinien być czytelny i stanowić referencję, do której prowadzący może wracać w dalszej części lekcji.

---

## Slajd 5

**Wejście po słowach:** *„nawet kiedy nie ma żadnej awarii, silna spójność kosztuje. I najczęściej płacimy za nią latencją"*

**Tytuł:** Silna spójność kosztuje — nawet bez awarii

**Opis:** Slajd wzmacniający kluczowy wniosek z modelu PACELC. Główny komunikat: „Silna spójność = dodatkowy koszt w czasie odpowiedzi." Poniżej krótkie wyjaśnienie mechanizmu: jeśli chcemy gwarancji aktualności danych, system musi wykonać dodatkową koordynację (np. komunikacja z liderem, potwierdzenie zapisu na wielu replikach, synchronizacja między regionami). Slajd ma charakter pojęciowy — utrwala zrozumienie trade-offu L vs C przed przejściem do przykładów.

---

## Slajd 6

**Wejście po słowach:** *„Weźmy nasz wypożyczalnię samochodów. Mamy oddziały w Rzeszowie, Warszawie i Gdańsku"*

**Tytuł:** Scenariusz: wypożyczalnia samochodów — Toyota Corolla

**Opis:** Slajd wprowadzający przykład przewodni lekcji.

**Grafika/diagram:** Prosta mapa/schemat z trzema węzłami: Rzeszów, Warszawa, Gdańsk — połączonymi liniami symbolizującymi replikację danych. Na węźle Rzeszów: akcja „Wydanie ostatniej Toyoty Corolli". Na węźle Gdańsk: klient otwiera aplikację i widzi „Toyota Corolla — dostępna". Pomiędzy nimi: oznaczenie „replika jeszcze nie zsynchronizowana". Kluczowy podpis: „Brak awarii. Sieć działa. System zdrowy. A mimo to — niespójność." Slajd ilustruje, że problem dotyczy codzienności, nie katastrofy.

---

## Slajd 7

**Wejście po słowach:** *„Odpowiedź brzmi: to zależy od operacji"*

**Tytuł:** Spójność per operacja, nie per system

**Opis:** Slajd formułujący jedną z najważniejszych zasad architektonicznych w lekcji. Centralny komunikat: „Nie projektujemy jednego poziomu spójności dla całego systemu — decydujemy osobno dla każdej operacji." Poniżej dwa kontrastowe przykłady z jednego procesu biznesowego:
- **Przeglądanie oferty** → szybko, lokalna replika, akceptowalna chwilowa nieaktualność
- **Finalizacja rezerwacji** → silna walidacja dostępności, spójność krytyczna

Slajd pełni funkcję porządkującą — jest fundamentem dla dalszych porównań EL vs EC.

---

## Slajd 8

**Wejście po słowach:** *„PACELC pomaga nam nazwać dwa podejścia w normalnym działaniu systemu"*

**Tytuł:** EL vs EC — dwa podejścia w normalnym działaniu

**Opis:** Slajd porównawczy (np. dwie kolumny lub tabela).

| | **EL — niska latencja** | **EC — silna spójność** |
|---|---|---|
| Priorytet | Szybkość odpowiedzi | Gwarancja aktualności |
| Mechanizm | Odczyt z lokalnej repliki / projekcji | Koordynacja, quorum, lider |
| Akceptacja | Dane mogą być chwilowo starsze | Odpowiedź trwa dłużej |
| Koszt | Chwilowa niespójność | Wyższa latencja |

Slajd powinien być czytelny i działać jako punkt odniesienia dla kolejnych przykładów z wypożyczalni.

---

## Slajd 9

**Wejście po słowach:** *„Żeby to było bardziej konkretne, porównajmy kilka przypadków z wypożyczalni"*

**Tytuł:** Przykłady operacji: EL vs EC w wypożyczalni

**Opis:** Slajd z trzema konkretnymi przypadkami z domeny wypożyczalni, każdy z przypisaną klasyfikacją i krótkim uzasadnieniem:

1. **Dynamiczny cennik samochodów → EL** — cena sprzed kilkunastu sekund na stronie przeglądania jest akceptowalna; silna spójność przy każdym odświeżeniu spowalniałaby ładowanie bez wymiernego zysku biznesowego. Aktualna cena weryfikowana dopiero przy finalizacji rezerwacji.

2. **Status dostępności konkretnego auta → EC** — zmiana z „dostępny" na „wypożyczony" jest krytyczna; chwilowa niespójność prowadzi do podwójnej rezerwacji lub próby wydania auta, którego fizycznie nie ma. Koszt latencji akceptowalny.

3. **Walidacja prawa jazdy klienta → EC** — weryfikacja wykonana w Warszawie musi być natychmiast widoczna w Rzeszowie; powtórna weryfikacja to frustracja klienta i nieprofesjonalny wizerunek.

Slajd pełni funkcję ilustracyjną — pokazuje, że ten sam system może łączyć oba podejścia w zależności od operacji.

---

## Slajd 10

**Wejście po słowach:** *„W architekturze oprogramowania PACELC jest ważny dlatego, że wpływa na wiele decyzji projektowych. Pierwsza z nich to model danych."*

**Tytuł:** Wpływ PACELC: model danych

**Opis:** Slajd porządkujący podział danych według wagi i wymagań spójności. Główna teza: „Nie wszystkie dane w systemie mają tę samą wagę."

Podział na kategorie (np. w formie warstw lub kolorowego schematu):
- **Dane transakcyjne / decyzyjne** (status auta, rezerwacja, blokada) → mogą wymagać silnej spójności
- **Dane raportowe / pomocnicze** (historia serwisowa, opinie klientów) → spójność po pewnym czasie wystarczy

Kluczowy wniosek: „Architekt powinien rozróżniać dane transakcyjne, decyzyjne, raportowe i pomocnicze."

---

## Slajd 11

**Wejście po słowach:** *„Druga decyzja dotyczy granic usług"*

**Tytuł:** Wpływ PACELC: granice usług

**Opis:** Slajd pokazujący konsekwencje trade-offu L/C dla projektowania granic mikroserwisów.

**Grafika/diagram:** Schemat dwóch wariantów:
- **Wariant A:** Usługa Rezerwacji synchronicznie odpytuje Usługę Floty przy każdej rezerwacji → silne sprzężenie, zależność latencyjna.
- **Wariant B:** Usługa Rezerwacji korzysta z lokalnej projekcji dostępności (aktualizowanej eventami), ale przy finalizacji wykonuje silną walidację.

Kluczowe pytanie na slajdzie: „Jeśli dwie usługi muszą być przy każdej operacji silnie spójne — czy granica między nimi jest dobrze narysowana?"

---

## Slajd 12

**Wejście po słowach:** *„Trzecia rzecz to styl komunikacji"*

**Tytuł:** Wpływ PACELC: styl komunikacji

**Opis:** Slajd porównawczy łączący wybór EL/EC ze stylem komunikacji między komponentami.

| | **EC → komunikacja synchroniczna** | **EL → komunikacja asynchroniczna** |
|---|---|---|
| Mechanizmy | Żądanie-odpowiedź, quorum, lider | Eventy, kolejki, replikacja, projekcje |
| Gwarancje | Mocniejsze | Słabsze (eventual) |
| Wrażliwość | Na opóźnienia i awarie zależności | Na duplikaty, zmianę kolejności zdarzeń |
| Wymaga od architekta | Zarządzania timeoutami, fallbackami | Projektowania pod niespójność: idempotencja, kompensacje, retry |

Slajd pomaga zobaczyć, że wybór L vs C nie jest abstrakcyjny — przekłada się na konkretne wzorce integracyjne.

---

## Slajd 13

**Wejście po słowach:** *„Czwarty obszar to UX, czyli doświadczenie użytkownika"*

**Tytuł:** Wpływ PACELC: doświadczenie użytkownika

**Opis:** Slajd zwracający uwagę, że kompromisy PACELC nie kończą się w backendzie — mają bezpośredni wpływ na UX. Kluczowy komunikat: „Kompromisy spójności i latencji muszą być widoczne w interfejsie."

Przykłady z lekcji:
- Przy EL: pokaż timestamp ostatniej aktualizacji danych, komunikat „ceny mogą się różnić od finalnych"
- Przy EC: użytkownik akceptuje dłuższy czas oczekiwania, ale dostaje pewną informację

Slajd jest krótki, ale ważny — przypomina, że architektura to nie tylko backend.

---

## Slajd 14

**Wejście po słowach:** *„Praktyczne znaczenie PACELC jest takie, że pomaga rozmawiać z biznesem"*

**Tytuł:** PACELC jako język rozmowy z biznesem

**Opis:** Slajd pokazujący, jak techniczny trade-off tłumaczyć na decyzję produktową. Dwa przykłady z lekcji w formie par „zamiast → powiedz":

- ❌ *„Potrzebujemy consistency level quorum"*
  ✅ *„Jeśli chcemy mieć pewność, że auto nie zostanie zarezerwowane dwa razy, użytkownik może poczekać dodatkowe kilkadziesiąt milisekund"*

- ❌ *„Dane będą eventually consistent"*
  ✅ *„Dashboard załaduje się bardzo szybko, ale dane będą aktualizowane co minutę — pokażemy timestamp"*

Kluczowy podpis: „Kompromis techniczny staje się decyzją produktową."

---

## Slajd 15

**Wejście po słowach:** *„Wracając do przykładu z Toyotą Corollą"*

**Tytuł:** Poprawne podejście: łączenie EL i EC w jednym procesie

**Opis:** Slajd podsumowujący poprawny wzorzec architektoniczny na przykładzie z lekcji.

**Grafika/diagram:** Schemat dwuetapowego procesu rezerwacji:
1. **Przeglądanie floty** → odczyt z lokalnej repliki (EL), szybko, minimalne opóźnienie danych akceptowalne
2. **Finalizacja rezerwacji** → silna walidacja dostępności (EC), sprawdzenie aktualnego stanu w źródle prawdy

Pomiędzy etapami: oznaczenie „granica zmiany poziomu spójności".

Podpis ostrzegawczy: „Jeśli system pozwala potwierdzić rezerwację bez ponownego sprawdzenia stanu — to błąd projektowy."

---

## Slajd 16

**Wejście po słowach:** *„Najważniejsze nie jest więc to, żeby znać skrót PACELC na pamięć"*

**Tytuł:** Kluczowe pytanie architekta

**Opis:** Slajd zamykający lekcję. Centralnie umieszczone pytanie przewodnie:

> „W tej konkretnej operacji — wolimy odpowiedzieć szybciej i zaakceptować chwilową rozbieżność, czy wolimy poczekać dłużej i mieć mocniejszą gwarancję spójności?"

Poniżej trzy cechy dobrze zaprojektowanego systemu (z ostatniego zdania skryptu):
- Technicznie poprawny
- Sensowny biznesowo
- Zrozumiały dla użytkownika

Slajd podsumowujący — powinien zostać na ekranie do końca lekcji.