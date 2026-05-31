Na podstawie skryptu lekcji.

## Slajd 1

**Wejście slajdu:**
Po słowach: „największym problemem nie jest sam kod, tylko utrata kontekstu.”

**Tytuł slajdu:**
Utrata kontekstu decyzji

**Opis slajdu:**
Slajd powinien pokazać, że problemem w długotrwałym rozwoju systemu nie jest wyłącznie kod, ale brak pamięci o powodach decyzji. Warto umieścić hasła: „co wybraliśmy?”, „dlaczego?”, „jakie ograniczenia?”, „jakie konsekwencje?”. Slajd wspiera otwarcie lekcji i ustawia ADR-y jako odpowiedź na realny problem zespołów technicznych.

**Charakter slajdu:**
Problemowy, porządkujący.

**Sugestia wizualna:**
Prosty schemat: decyzja techniczna → upływ czasu → utrata uzasadnienia → ryzyko błędnej interpretacji.

---

## Slajd 2

**Wejście slajdu:**
Po słowach: „Właśnie ten problem rozwiązują ADR-y”

**Tytuł slajdu:**
ADR jako zapis decyzji

**Opis slajdu:**
Slajd powinien zdefiniować ADR jako krótki dokument opisujący jedną konkretną decyzję architektoniczną. Należy zaakcentować trzy pytania: „jaka decyzja?”, „w jakim kontekście?”, „jakie konsekwencje?”. Slajd nie powinien rozbudowywać definicji, tylko utrwalić podstawowy sens narzędzia.

**Charakter slajdu:**
Definicyjny, wyjaśniający.

**Sugestia wizualna:**
Brak — slajd tekstowo-strukturalny.

---

## Slajd 3

**Wejście slajdu:**
Po słowach: „Natomiast ADR wyjaśnia, dlaczego system wygląda właśnie w taki sposób.”

**Tytuł slajdu:**
Co wyjaśnia ADR

**Opis slajdu:**
Slajd powinien porównać role różnych źródeł wiedzy: kod pokazuje „co działa”, dokumentacja techniczna „jak działa”, diagramy „z czego się składa”, a ADR „dlaczego tak zdecydowano”. To pomoże odbiorcom odróżnić ADR od zwykłej dokumentacji systemu.

**Charakter slajdu:**
Porównawczy, porządkujący.

**Sugestia wizualna:**
Tabela porównawcza: Kod / Dokumentacja / Diagramy / ADR.

---

## Slajd 4

**Wejście slajdu:**
Po słowach: „Dobry ADR opisuje jedną decyzję.”

**Tytuł slajdu:**
Jedna decyzja na ADR

**Opis slajdu:**
Slajd powinien pokazać zasadę atomowości ADR-ów. Warto zestawić dobre przykłady: wybór bazy danych, architektura event-driven, strategia autentykacji — oraz zły przykład: jeden wielki dokument „architektura systemu”. Slajd wspiera zrozumienie utrzymywalności i wyszukiwalności decyzji.

**Charakter slajdu:**
Praktyczny, architektoniczny.

**Sugestia wizualna:**
Proste porównanie: „dobry ADR: jedna decyzja” vs „zły ADR: wiele decyzji w jednym dokumencie”.

---

## Slajd 5

**Wejście slajdu:**
Po słowach: „Klasyczny ADR składa się zwykle z kilku prostych części.”

**Tytuł slajdu:**
Struktura ADR

**Opis slajdu:**
Slajd powinien pokazać podstawowe sekcje ADR-a: tytuł, status, kontekst, decyzja, konsekwencje. Szczególnie należy wyróżnić kontekst jako kluczowy element pozwalający zrozumieć ograniczenia, wymagania i sytuację zespołu w momencie podejmowania decyzji.

**Charakter slajdu:**
Strukturalny, wyjaśniający.

**Sugestia wizualna:**
Schemat blokowy dokumentu ADR z wyróżnioną sekcją „Kontekst”.

---

## Slajd 6

**Wejście slajdu:**
Po słowach: „Ta część powinna być krótka i jednoznaczna.”

**Tytuł slajdu:**
Decyzja musi być jednoznaczna

**Opis slajdu:**
Slajd powinien pokazać różnicę między decyzją a listą pomysłów. Warto umieścić przykłady zdań decyzyjnych: „użyjemy PostgreSQL…”, „komunikujemy moduły przez RabbitMQ…”, „zostajemy przy monolicie modułowym…”. Slajd wspiera praktyczne pisanie ADR-ów.
W samym przykładzie pliku ADR (markdown) dodaj komentarze `<!-- ... -->` przy sekcji `Decision`, które podpowiadają: ma być jeden konkretny wybór, język decyzyjny („użyjemy…”, „zostajemy…”) oraz zakres obowiązywania decyzji.

**Charakter slajdu:**
Praktyczny, wyjaśniający.

**Sugestia wizualna:**
Brak — slajd tekstowo-strukturalny.

---

## Slajd 7

**Wejście slajdu:**
Po słowach: „Architektura oprogramowania polega na trade-offach.”

**Tytuł slajdu:**
Konsekwencje i trade-offy

**Opis slajdu:**
Slajd powinien pokazać, że sekcja konsekwencji musi obejmować zarówno zyski, jak i koszty. Należy podkreślić uczciwość architektoniczną: dobra decyzja nie jest pozbawiona wad, tylko świadomie akceptuje określone ograniczenia.

**Charakter slajdu:**
Architektoniczny, pokazujący trade-offy.

**Sugestia wizualna:**
Waga lub macierz „zyskujemy / tracimy”.

---

## Slajd 8

**Wejście slajdu:**
Po słowach: „Wybierając mikroserwisy, możemy zyskać większą niezależność zespołów”

**Tytuł slajdu:**
Monolit modułowy vs mikroserwisy

**Opis slajdu:**
Slajd powinien zestawić konsekwencje dwóch decyzji omawianych w skrypcie. Monolit modułowy: prostszy deployment, mniejszy narzut operacyjny, szybsza praca małego zespołu, ale ograniczone niezależne skalowanie. Mikroserwisy: większa niezależność zespołów i wdrożeń, ale większa złożoność komunikacji, monitoringu, testowania i infrastruktury.

**Charakter slajdu:**
Porównawczy, architektoniczny.

**Sugestia wizualna:**
Tabela trade-offów lub dwukolumnowe porównanie.

---

## Slajd 9

**Wejście slajdu:**
Po słowach: „ADR nie jest potrzebny dla każdej decyzji.”

**Tytuł slajdu:**
Kiedy warto pisać ADR

**Opis slajdu:**
Slajd powinien wskazać kryteria kwalifikujące decyzję do ADR-a: trudna do odwrócenia, kosztowna, kontrowersyjna, wpływająca na wiele komponentów lub zespołów, związana z wymaganiami jakościowymi albo taka, do której ktoś wróci z pytaniem „dlaczego?”. Slajd pomaga odróżnić decyzje architektoniczne od lokalnych decyzji implementacyjnych.

**Charakter slajdu:**
Decyzyjny, praktyczny.

**Sugestia wizualna:**
Mapa decyzji lub checklist „Czy to kandydat na ADR?”.

---

## Slajd 10

**Wejście slajdu:**
Po słowach: „najlepiej w repozytorium, na przykład w katalogu docs/adr.”

**Tytuł slajdu:**
ADR blisko kodu

**Opis slajdu:**
Slajd powinien pokazać, dlaczego repozytorium jest naturalnym miejscem dla ADR-ów: wersjonowanie, review, powiązanie ze zmianami w systemie, mniejsze ryzyko oderwania dokumentacji od pracy zespołu. Należy zaakcentować ADR jako element procesu inżynierskiego, a nie formalność.

**Charakter slajdu:**
Procesowy, praktyczny.

**Sugestia wizualna:**
Prosty przepływ: Pull Request → Review → ADR → Kod.

---

## Slajd 11

**Wejście slajdu:**
Po słowach: „Ważny jest też cykl życia ADR-a.”

**Tytuł slajdu:**
Cykl życia ADR

**Opis slajdu:**
Slajd powinien pokazać statusy decyzji: proponowana, zaakceptowana, odrzucona, przestarzała, zastąpiona. Ważne jest podkreślenie, że historii nie należy przepisywać — nowy ADR zastępuje stary, a poprzedni pozostaje częścią śladu decyzyjnego.

**Charakter slajdu:**
Procesowy, pokazujący zależności.

**Sugestia wizualna:**
Oś czasu lub diagram stanów ADR-a.

---

## Slajd 12

**Wejście slajdu:**
Po słowach: „Decyzja, która była dobra dwa lata temu, może być zła dzisiaj”

**Tytuł slajdu:**
Decyzje zależą od kontekstu

**Opis slajdu:**
Slajd powinien pokazać, że ocena decyzji architektonicznej bez znajomości kontekstu prowadzi do błędnych wniosków. Należy podkreślić zmienność: wielkość zespołu, dojrzałość produktu, ruch, priorytety biznesowe, tempo dostarczania funkcji. Slajd wspiera dojrzałe myślenie architektoniczne zamiast oceny ex post.

**Charakter slajdu:**
Architektoniczny, refleksyjny.

**Sugestia wizualna:**
Oś czasu: „kontekst wtedy” vs „kontekst dziś”.

---

## Slajd 13

**Wejście slajdu:**
Po słowach: „Największą wartością ADR-ów jest to, że wymusza doprecyzowanie problemu”

**Tytuł slajdu:**
ADR jako narzędzie myślenia

**Opis slajdu:**
Slajd powinien zebrać główne wartości ADR-ów: doprecyzowanie problemu, nazwanie ograniczeń, porównanie opcji, zapisanie konsekwencji, ograniczenie impulsywnych decyzji i łatwiejsza komunikacja w organizacji. Slajd wzmacnia przekaz, że ADR to nie tylko dokument, ale praktyka decyzyjna.

**Charakter slajdu:**
Syntetyzujący, procesowy.

**Sugestia wizualna:**
Brak — slajd tekstowo-strukturalny.

---

## Slajd 14

**Wejście slajdu:**
Po słowach: „Podsumowując, ADR to proste, ale bardzo skuteczne narzędzie”

**Tytuł slajdu:**
Pamięć architektoniczna projektu

**Opis slajdu:**
Slajd powinien podsumować lekcję przez cztery cechy dobrego ADR-a: krótki, konkretny, osadzony w kontekście, uczciwy wobec konsekwencji. Powinien zamknąć narrację myślą, że architektura staje się historią świadomych wyborów i kompromisów, a nie zbiorem niejasnych ustaleń.

**Charakter slajdu:**
Podsumowujący.

**Sugestia wizualna:**
Brak — slajd tekstowo-strukturalny.
