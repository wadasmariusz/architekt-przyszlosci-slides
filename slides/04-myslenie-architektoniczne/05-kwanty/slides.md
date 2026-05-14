# Kwanty architektury — opisy slajdów do lekcji

---

## Slajd 1

**Wejście po słowach:** *„Dzisiaj porozmawiamy o kwantach architektury"*

**Tytuł:** Kwanty architektury

**Opis:** Slajd tytułowy lekcji. Tytuł „Kwanty architektury" (ang. *Architecture Quantum*). Podtytuł lub adnotacja: „Jak znaleźć właściwą jednostkę analizy w systemie". Minimalistyczny design, bez dodatkowych treści — slajd pełni funkcję otwierającą i pozwala prowadzącemu swobodnie wprowadzić temat.

---

## Slajd 2

**Wejście po słowach:** *„Mamy system złożony z wielu serwisów, powiedzmy kilkunastu mikroserwisów."*

**Tytuł:** Problem: na jakim poziomie definiować wymagania?

**Opis:** Slajd problemowy, porządkujący kontekst. Trzy poziomy analizy ułożone pionowo lub jako oś — od najszerszego do najwęższego:

- **Cały system** → zbyt ogólne, jedno wymaganie nie pasuje do wszystkiego
- **Pojedynczy serwis** → zbyt wąskie, serwis nie działa w izolacji
- **??? (kwant)** → brakujący środek, właściwa jednostka analizy

Slajd ma pokazać lukę, którą wypełnia pojęcie kwantu. Element „???" powinien wizualnie sygnalizować, że odpowiedź pojawi się za chwilę.

---

## Slajd 3

**Wejście po słowach:** *„Narzucanie mu tych samych wymagań co checkoutowi oznacza niepotrzebne koszty i złożoność."*

**Tytuł:** Przykład: checkout vs. rekomendacje

**Opis:** Slajd porównawczy. Dwie kolumny zestawiające dwa moduły sklepu internetowego:

| | Checkout | Rekomendacje produktowe |
|---|---|---|
| Konsekwencja niedostępności | stracone zamówienia, realne straty | użytkownik zobaczy generyczne wyniki |
| Wymagana dostępność | wysoka (np. 99,9%) | niska |
| Uzasadnienie kosztów | tak | nie |

Cel slajdu: pokazać, że jednolite wymagania dla całego systemu prowadzą albo do nadmiarowych kosztów, albo do kompromisu, który nikogo nie zadowala.

---

## Slajd 4

**Wejście po słowach:** *„Kwant architektury to najmniejsza jednostka w naszym systemie, którą możemy wdrożyć niezależnie i która zawiera w sobie wszystko, czego potrzebuje do prawidłowego działania."*

**Tytuł:** Definicja kwantu architektury

**Opis:** Slajd definicyjny — centralny punkt lekcji. Pełna definicja wyróżniona typograficznie:

> **Kwant architektury** — najmniejsza niezależnie wdrażalna jednostka systemu, zawierająca wszystko, czego potrzebuje do prawidłowego działania.

Poniżej trzy filary jako krótkie etykiety (bez rozwinięcia — prowadzący omawia je kolejno):

1. Niezależna wdrażalność
2. Wysoka spójność funkcjonalności
3. Konascencja synchroniczna

---

## Slajd 5

**Wejście po słowach:** *„Pierwszy filar to niezależna wdrażalność."*

**Tytuł:** Filar 1: Niezależna wdrażalność

**Opis:** Slajd wyjaśniający z praktycznym testem. Treść:

- Kwant można wdrożyć na produkcję bez jednoczesnego wdrażania czegokolwiek innego.
- **Test:** „Czy mogę wdrożyć tę rzecz osobno i system dalej będzie działał?"
    - TAK → osobny kwant
    - NIE → elementy należą do jednego kwantu

**Grafika/diagram:** Prosty schemat — dwa serwisy (A i B). Wariant 1: strzałka „deploy" prowadzi do każdego niezależnie (dwa kwanty). Wariant 2: strzałka „deploy" obejmuje oba łącznie (jeden kwant).

---

## Slajd 6

**Wejście po słowach:** *„Drugi filar to wysoka spójność funkcjonalności."*

**Tytuł:** Filar 2: Wysoka spójność funkcjonalności

**Opis:** Slajd wyjaśniający. Treść:

- Kwant realizuje spójny fragment funkcjonalności biznesowej — nie losowy zbiór komponentów, lecz konkretny kawałek domeny.
- **Przykład:** kwant płatności = serwis płatności + baza danych + integracja z bramką płatniczą — wszystko, co jest potrzebne, żeby płatność przeszła od początku do końca.

**Grafika/diagram:** Mała ilustracja kwantu płatności jako zamknięta obwiednia grupująca trzy elementy (serwis, baza, bramka) wewnątrz jednego prostokąta z etykietą „Kwant: Płatności".

---

## Slajd 7

**Wejście po słowach:** *„Trzeci filar to konascencja synchroniczna."*

**Tytuł:** Filar 3: Konascencja synchroniczna

**Opis:** Slajd wyjaśniający kluczowe pojęcie.

- **Konascencja synchroniczna** — dwa elementy muszą współdziałać w czasie rzeczywistym: jeden woła drugi i czeka na odpowiedź.
- Jeśli serwis zamówień wywołuje synchronicznie serwis płatności i czeka na odpowiedź → ich losy są splecione → jeden kwant.

**Diagram:** Serwis zamówień → (wywołanie synchroniczne, np. REST) → Serwis płatności. Strzałka z podpisem „czeka na odpowiedź". Oba serwisy otoczone wspólną obwiednią oznaczoną „Jeden kwant".

---

## Slajd 8

**Wejście po słowach:** *„Porównajmy to z sytuacją asynchroniczną."*

**Tytuł:** Konascencja synchroniczna vs. asynchroniczna

**Opis:** Slajd porównawczy — kluczowy dla zrozumienia granic kwantów. Dwie strony slajdu:

**Lewa strona — synchroniczna:**
Serwis zamówień → (REST, czeka) → Serwis płatności
→ Jeden kwant. Jeśli płatności padną, zamówienia też nie działają.

**Prawa strona — asynchroniczna:**
Serwis zamówień → (zdarzenie na Kafkę) → Serwis powiadomień
→ Dwa osobne kwanty. Zamówienie przejdzie nawet jeśli powiadomienia są chwilowo niedostępne.

**Diagram:** Dwie ścieżki obok siebie. Lewa z pełną strzałką (synchroniczna) i wspólną obwiednią kwantu. Prawa z przerywaną strzałką przez ikonę kolejki (Kafka) i dwiema osobnymi obwiedniami kwantów.

Na dole slajdu wyróżnione zdanie: *Zamiana zależności synchronicznej na asynchroniczną = rozbicie jednego kwantu na dwa.*

---

## Slajd 9

**Wejście po słowach:** *„Zacznijmy od monolitu."*

**Tytuł:** Kwanty w różnych stylach architektonicznych

**Opis:** Slajd porównawczy obejmujący trzy style architektoniczne. Układ: trzy kolumny lub trzy bloki, każdy z prostym schematem i kluczową charakterystyką.

**Monolit klasyczny:**
Jeden prostokąt, jedna baza, podpis „1 kwant".
Adnotacja: Wszystkie charakterystyki wspólne. Skalujemy wszystko albo nic.

**Mikroserwisy:**
Kilka oddzielnych prostokątów, każdy z własną bazą, podpis „wiele kwantów (potencjalnie)".
Adnotacja: Każdy serwis ze swoimi zależnościami to osobny kwant — o ile nie jest połączony synchronicznie z innymi.

**Modularny monolit:**
Jeden prostokąt podzielony wewnętrznie na moduły, jedna baza, podpis „1 kwant (z opcją rozbicia)".
Adnotacja: Wydzielone moduły, kontrolowane interfejsy. Opcja wyciągnięcia modułu do osobnego kwantu, gdy biznes tego wymusi.

**Diagram:** Trzy proste schematy blokowe obok siebie — wizualnie pokazujące różnicę w liczbie i strukturze kwantów.

---

## Slajd 10

**Wejście po słowach:** *„ale tak naprawdę ich serwisy są tak mocno ze sobą splecione synchronicznymi zależnościami, że de facto mają rozproszonego monolita"*

**Tytuł:** Antypattern: rozproszony monolit

**Opis:** Slajd ostrzegawczy, wyróżniony wizualnie (np. ramka, ikona ostrzeżenia). Treść:

- Wiele mikroserwisów połączonych synchronicznymi zależnościami = **jeden wielki kwant podzielony na wiele procesów**.
- „Najgorszy możliwy scenariusz: cała złożoność systemu rozproszonego bez żadnych korzyści z niezależności."

**Diagram:** Kilka serwisów powiązanych gęstą siatką synchronicznych strzałek, całość otoczona jedną obwiednią kwantu. Wizualny kontrast z poprzednim slajdem, gdzie mikroserwisy miały osobne obwiednie.

---

## Slajd 11

**Wejście po słowach:** *„Wróćmy teraz do tego, co moim zdaniem jest praktyczną wartością kwantów — do sposobu, w jaki definiujemy charakterystyki architektoniczne."*

**Tytuł:** Charakterystyki architektoniczne na poziomie kwantu

**Opis:** Slajd porządkujący zasadę. Treść:

- Charakterystyki architektoniczne (wydajność, skalowalność, dostępność, odporność na błędy…) definiujemy **na poziomie kwantu**, nie całego systemu.

Tabela z przykładem sklepu internetowego — trzy kwanty, trzy zestawy wymagań:

| Kwant | Ruch | Spójność transakcyjna | Dostępność | Tolerancja błędów |
|---|---|---|---|---|
| Katalog produktów | duży | niska (agresywne cache'owanie) | standardowa | średnia |
| Checkout | mniejszy | silna (nie można zapłacić 2× / zgubić zamówienia) | 99,9% | niska |
| Rekomendacje | duże zbiory danych | niska | standardowa | wysoka (generyczne rekomendacje zamiast spersonalizowanych) |

Slajd ma pokazać, jak radykalnie różne są wymagania poszczególnych kwantów i dlaczego jedno wspólne wymaganie dla systemu jest niewystarczające.

---

## Slajd 12

**Wejście po słowach:** *„Kiedy rozmawiasz z product ownerem albo ze stakeholderem biznesowym o wymaganiach jakościowych"*

**Tytuł:** Kwanty jako narzędzie komunikacji z biznesem

**Opis:** Slajd o roli komunikacyjnej. Krótka treść:

- Zamiast mówić abstrakcyjnie o „systemie" — rozmawiaj o konkretnych kwantach.
- Biznes często nie wie, że różne części systemu mogą mieć różne wymagania.
- Kwanty dają wspólny język do rozmowy o priorytetach, kosztach i kompromisach.

Slajd tekstowy, bez diagramu — pełni funkcję mostu między częścią techniczną a perspektywą biznesową.

---

## Slajd 13

**Wejście po słowach:** *„Warto sobie też zdać sprawę z jednej rzeczy — decyzje o granicach kwantów to zawsze kompromisy."*

**Tytuł:** Trade-offy: więcej vs. mniej kwantów

**Opis:** Slajd porównawczy podsumowujący trade-offy. Dwie kolumny:

| Więcej kwantów | Mniej kwantów |
|---|---|
| większa niezależność zespołów | prostota |
| lepsza skalowalność | łatwiejsze transakcje |
| dopasowanie technologii do problemu | łatwiejsze zrozumienie systemu |
| **ale:** złożoność operacyjna, trudniejsze debugowanie, komunikacja rozproszona, ewentualna spójność danych | **ale:** mniejsza elastyczność i niezależność |

Na dole wyróżnione zdanie: *Architektura to nie szukanie idealnego rozwiązania — to szukanie najlepszego kompromisu dla konkretnego kontekstu.*

---

## Slajd 14

**Wejście po słowach:** *„Podsumowując, kwant architektury to bardzo praktyczne pojęcie"*

**Tytuł:** Podsumowanie

**Opis:** Slajd zamykający lekcję. Kluczowe wnioski:

- Kwant architektury = najmniejsza sensownie wdrażalna jednostka systemu.
- To nie jest moduł, nie jest tożsamy z mikroserwisem, nie zawsze pokrywa się z bounded contextem.
- Trzy filary: niezależna wdrażalność, spójna odpowiedzialność, siła zależności (sync vs. async).
- Pomaga podejmować decyzje o: podziale systemu, granicach wdrożeń, skalowaniu, wymaganiach jakościowych.

Slajd zwięzły,  porządkujący — nie powtarza całej lekcji, a jedynie przypomina szkielet koncepcji.