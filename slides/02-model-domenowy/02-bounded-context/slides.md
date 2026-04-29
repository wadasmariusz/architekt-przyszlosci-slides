# Opis slajdów do prezentacji: Bounded Context


## Slajd 1 - Tytułowy

**Treść:**
- Tytuł: „Bounded Context - jak nie skończyć z wielką kulą błota"
- Podtytuł: „Praktyczne podejście do porządkowania systemów"
- Imię prelegenta / data

**Grafika:** Minimalistyczne tło z subtelnym motywem „pudełek" / boxów połączonych liniami w tle. Kontrastowa kolorystyka (np. granat + akcent pomarańczowy lub turkusowy).

**Animacja:** Tytuł pojawia się literka po literce („typewriter effect"), boxy w tle delikatnie pulsują.

---

## Slajd 2 - Problem: znajomy scenariusz

**Treść:**
- „Zaczynamy świeży projekt..."
- Punkty (pojawiające się stopniowo):
    - Czysta architektura ✨
    - Nowe technologie 🚀
    - Wszystko ma działać świetnie 💪
- A potem... mija rok, dwa...

**Grafika:** Oś czasu pozioma - po lewej stronie świeży, kolorowy projekt (czyste prostokąty z ikonami), po prawej

## Slajd 2 - Problem: znajomy scenariusz (kontynuacja)

**Grafika (c.d.):** ...po prawej stronie ta sama struktura, ale elementy są splątane, kolory wyblakłe, połączenia chaotyczne. Wizualne przejście od porządku do chaosu wzdłuż osi czasu.

**Animacja:** Oś czasu „rysuje się" od lewej do prawej. Najpierw pojawiają się czyste bloki, potem stopniowo zaczynają się plątać linie między nimi - coraz więcej, coraz bardziej chaotycznie. Efekt narastającego bałaganu.

---

## Slajd 3 - Wielka kula błota

**Treść:**
- „Każda zmiana wpływa na wiele innych miejsc"
- „System staje się trudny w utrzymaniu"
- Centralny napis: **Big Ball of Mud**

**Grafika:** Duża, ciemna, bezkształtna „kula" w centrum slajdu - coś między kłębkiem kabli a kulą smoły. Z kuli wychodzą chaotyczne strzałki i linie prowadzące do rozrzuconych etykiet: „zamówienia", „płatności", „użytkownicy", „raporty" - wszystko ze wszystkim powiązane.

---

## Slajd 4 - Czym jest Bounded Context?

**Treść:**
- Definicja: „Biznesowo-techniczny podział systemu"
- Kluczowe cechy:
    - Każda część odpowiada za konkretny obszar biznesowy
    - Zawiera własne modele, reguły i procesy
    - Wnętrze jest chronione - inne części nie mają do niego bezpośredniego dostępu

**Grafika:** Prostokąt z wyraźną grubą obwódką (symbolizujący „granicę"). Wewnątrz ikony: model danych, reguły (tarcza), procesy (koła zębate). Na zewnątrz delikatne kontury innych prostokątów - widać, że istnieją, ale nie przenikają do środka.

---

## Slajd 5 - Bounded Context Canvas - widok z lotu ptaka

**Treść:**
- „Wyobraź sobie zamknięty box"
- W środku:
    - Modele - dopasowane do problemu
    - Reguły biznesowe - co wolno, czego nie wolno
    - Procesy - jak to przebiega po kolei
    - Logika - to, co wszystko spina

---

## Slajd 6 - Wejścia do kontekstu

**Treść:**
- „Co wpływa do naszego kontekstu?"
- Trzy typy wejść:
    - **Komenda** - „Utwórz zamówienie" (ktoś chce coś zrobić)
    - **Zapytanie** - „Pokaż status zamówienia" (ktoś chce dane)
    - **Zdarzenie** - „Płatność została zakończona" (ktoś nas informuje)

**Grafika:** Box kontekstu po prawej stronie slajdu. Z lewej strony trzy strzałki wchodzące do boxa, każda w innym kolorze i z inną ikoną: komenda (wykrzyknik), zapytanie (znak zapytania), zdarzenie (błyskawica). Przy każdej strzałce przykład w dymku.

**Animacja:** Strzałki „wlatują" po kolei od lewej do boxa - najpierw komenda, potem zapytanie, potem zdarzenie. Każda z lekkim efektem świecenia po dotarciu do boxa.

---

## Slajd 7 - Wyjścia z kontekstu

**Treść:**
- „Co nasz kontekst wysyła na zewnątrz?"
- Trzy typy wyjść (lustrzane odbicie wejść):
    - **Komenda** - zlecamy coś innym
    - **Zapytanie** - pytamy innych o dane
    - **Zdarzenie** - informujemy świat, że coś się wydarzyło

**Grafika:** Odwrócony układ - box po lewej, strzałki wychodzą w prawo. Te same kolory i ikony co na slajdzie 6, ale kierunek odwrotny. Spójna wizualnie para ze slajdem 6.

---

## Slajd 8 - Pełny obraz komunikacji

**Treść:**
- „Zamiast bezpośrednich zależności - jasna, kontrolowana komunikacja"
- „Każdy kontekst wystawia swoje API i kontrakty"
- Kluczowe korzyści: wiemy kto za co odpowiada, wiemy jak się integrować, możemy zmieniać wnętrze bez wpływu na resztę

**Grafika:** Widok trzech kontekstów (trzech boxów) ułożonych obok siebie. Między nimi uporządkowane strzałki (komendy, zapytania, zdarzenia) z etykietami. Kontrast z slajdem 3 - tu panuje porządek, strzałki są czytelne i symetryczne.

**Animacja:** Najpierw pojawia się jeden box, potem drugi i trzeci. Na końcu „rysują się" strzałki między nimi - widać jak system się składa w spójną całość. Efektowne podsumowanie wizualne.

---

## Slajd 9 - Zalety podejścia

**Treść:**
- Trzy filary:
    1. **Jasne odpowiedzialności** - wiemy, który kontekst za co odpowiada
    2. **Lokalne zmiany** - modyfikacja w jednym miejscu bez ryzyka zepsucia w innym
    3. **System jak klocki** - rozwijamy, rozbudowujemy, reorganizujemy bez strachu

**Grafika:** Trzy kolumny z ikonami: cel/tarcza (odpowiedzialności), zamek/tarcza (lokalne zmiany), klocki LEGO (modularność). Czysta, symetryczna kompozycja. Każda kolumna w jednym z kolorów przewodnich prezentacji.

---

## Slajd 10 - Bounded Context vs Moduł vs Mikroserwis

**Treść:**
- Nagłówek: „Te pojęcia często się mieszają"
- Trzy wiersze porównania:
    - **Moduł** - ogólne pojęcie techniczne, nie musi mieć związku z biznesem
    - **Mikroserwis** - fizyczny podział systemu, ale nie gwarantuje dobrego podziału domenowego
    - **Bounded Context** - podział domenowy, fundament dla decyzji technicznych

**Grafika:** Tabela lub trzy karty ułożone obok siebie. Każda karta ma nazwę, krótki opis i wizualną ikonę: moduł (folder), mikroserwis (serwer/chmura), bounded context (ramka z domeną wewnątrz). Pod kartą mikroserwisu mały „warning" - trójkąt z wykrzyknikiem.

---

## Slajd 11 - Pułapka: rozproszony monolit

**Treść:**
- „10 mikroserwisów, które współdzielą modele, odwołują się do tych samych tabel, mają cykliczne zależności..."
- Punchline: **„Rozproszony monolit - kupa błota rozrzucona po sieci"**

**Grafika:** Kilka małych serwerów (ikon mikroserwisów) rozrzuconych po slajdzie, ale połączonych gęstą siecią chaotycznych linii - wszystko wraca do jednej wspólnej bazy danych na dole. Wizualnie przypomina slajd 3, ale z pozorem uporządkowania (osobne serwery, a mimo to bałagan).

**Animacja:** Najpierw pojawiają się „czyste" mikroserwisy - wyglądają elegancko. Potem stopniowo „wyrastają" między nimi linie zależności, coraz więcej, coraz gęściej. Na końcu pojawia się etykieta „rozproszony monolit" - efekt rozczarowania.

---

## Slajd 12 - Przykład: rezerwacja w różnych kontekstach

**Treść:**
- „To samo słowo, inne znaczenie"
- Kontekst A - Rezerwacja: blokada auta na dany termin (kalendarz + samochód)
- Kontekst B - Rezerwacja: pełna umowa z ceną i płatnością (dokument + pieniądze)
- Wspólne: własne reguły biznesowe, własny spójny język, brak współdzielenia modeli

**Grafika:** Dwa boxy obok siebie. W lewym box „Rezerwacja" z ikonami kalendarza i auta - prosta, lekka wizualizacja. W prawym box „Rezerwacja" z ikonami umowy, ceny, karty płatniczej - bardziej złożona. Między nimi wyraźna linia podziału z przekreśloną strzałką (nie współdzielą modeli).

---

## Slajd 13 - Podsumowanie

**Treść:**
- „Bounded Context to fundament budowania systemów, które są:"
    - Skalowalne
    - Zrozumiałe
    - Odporne na zmiany
- „Bez niego prędzej czy później trafimy w miejsce, gdzie rozwój staje się bardzo trudny"
- Zamknięcie: „Stosując to podejście mamy szansę budować systemy, które przetrwają lata"

**Grafika:** Trzy ikony w rzędzie (skalowalność - strzałka w górę, zrozumiałość - żarówka, odporność - tarcza) z hasłami pod nimi. Na dole slajdu motyw z pudełek (bounded contextów) z slajdu tytułowego - zamknięcie pętli wizualnej.

**Animacja:** Trzy ikony pojawiają się jedna po drugiej z efektem scale-up. Na końcu pojawia się zdanie zamykające - fade in na dole slajdu.

---

## Slajd 14 - Zakończenie / Q&A

**Treść:**
- „Dziękuję!"
- „Pytania?"
- Dane kontaktowe / social media

**Grafika:** Minimalistyczny slajd, ten sam motyw kolorystyczny co tytułowy. Logo / awatar prelegenta.

---