## Proponowana struktura prezentacji

### Slajd 1 — Tytułowy

**Tytuł:**
**Subdomena a Bounded Context — dlaczego to nie są synonimy?**

**Tekst na slajdzie:**

* Dwa pojęcia, które w DDD często występują obok siebie
* Dwa różne sposoby patrzenia na system
* Klucz do sensownego wyznaczania granic

**Co powiedzieć:**
Na wejściu ustawiasz problem: wiele osób traktuje te pojęcia jak to samo, bo oba dotyczą podziału systemu. Ale to prowadzi do błędów projektowych.

**Grafika:**
Prosty diagram z dwoma okręgami lub kartami:

* **Subdomena = biznes**
* **Bounded Context = model**

Bez ikon technicznych. Bardziej „myślenie vs modelowanie”.

---

### Slajd 2 — O co dziś chodzi

**Tytuł:**
**Nie porównujemy definicji — porównujemy perspektywy**

**Tekst na slajdzie:**

* Nie chodzi o uczenie się dwóch definicji osobno
* Chodzi o zrozumienie relacji między nimi
* Błąd w tym miejscu psuje później granice systemu

**Co powiedzieć:**
Podkreśl, że największy problem nie polega na braku definicji, tylko na błędnym założeniu, że oba pojęcia znaczą to samo.

**Grafika:**
Brak konieczności. Ten slajd może być czysty i mocno „otwierający temat”.

---

### Slajd 3 — Najkrótsze rozróżnienie

**Tytuł:**
**Subdomena patrzy od strony biznesu, Bounded Context od strony modelu**

**Tekst na slajdzie:**
**Subdomena**

* jaki fragment problemu biznesowego analizujemy

**Bounded Context**

* gdzie obowiązuje konkretny model
* gdzie pojęcia mają jedno, spójne znaczenie

**Co powiedzieć:**
To jest najważniejszy slajd całej prezentacji. Możesz go nawet wyróżnić kolorem albo większą typografią.

**Grafika:**
Dwie kolumny:

* lewa: „problem space”
* prawa: „solution/model space”

To dobrze oddaje sens i jest zgodne z ujęciem, że bounded context wyznacza granicę, w której dany model jest poprawny i spójny. ([Microsoft Learn][2])

---

### Slajd 4 — Przykład biznesowy: wypożyczalnia samochodów

**Tytuł:**
**Jak biznes naturalnie dzieli problem**

**Tekst na slajdzie:**
Przykładowe obszary biznesowe:

* rezerwacje
* flota pojazdów
* wydanie i zwrot auta
* rozliczenia
* obsługa klienta

**Co powiedzieć:**
To jest moment, w którym pokazujesz Subdomeny jako naturalny podział problemu biznesowego. Jeszcze bez modelowania technicznego.

**Grafika:**
Polecam prosty diagram obszarów biznesowych — np. 5 prostokątów wokół centralnego napisu „System wypożyczalni”.

**Z internetu:**
Nie trzeba nic brać. To jest Twój własny, dobry przykład.

---

### Slajd 5 — Tu jeszcze jesteśmy na poziomie Subdomen

**Tytuł:**
**Subdomena pomaga odpowiedzieć: co istnieje w biznesie?**

**Tekst na slajdzie:**
Na poziomie Subdomen chcemy zrozumieć:

* jakie obszary działalności istnieją
* za co odpowiadają
* gdzie przebiegają biznesowe odpowiedzialności

**Co powiedzieć:**
Podkreśl, że na tym etapie nie wyznaczasz jeszcze granic modelu. Analizujesz biznes, a nie strukturę kodu.

**Grafika:**
Brak konieczności.

---

### Slajd 6 — Gdzie zaczyna się komplikacja

**Tytuł:**
**Biznes widzi jeden obszar, model może widzieć kilka perspektyw**

**Tekst na slajdzie:**
Przykład: „wynajem samochodów”

* rezerwacja
* wydanie pojazdu
* zwrot pojazdu
* rozliczenie

Biznesowo: jeden większy obszar
Modelowo: różne reguły, różne pojęcia, różne odpowiedzialności

**Co powiedzieć:**
To jest przejście od Subdomeny do Bounded Contextów. Ten slajd ma pokazać moment, w którym prosty podział biznesowy przestaje wystarczać.

**Grafika:**
Jedna duża ramka „Wynajem samochodów”, a w środku 3–4 mniejsze sekcje:

* Rezerwacja
* Wydanie
* Zwrot
* Rozliczenie

---

### Slajd 7 — Najważniejsza konsekwencja

**Tytuł:**
**Relacja nie musi być 1:1**

**Tekst na slajdzie:**

* jedna Subdomena może wymagać wielu Bounded Contextów
* jeden obszar biznesowy nie daje automatycznie jednej granicy modelu
* granice odkrywamy przez analizę spójności modelu

**Co powiedzieć:**
To jest drugi najważniejszy slajd. Tu pada główna teza praktyczna: nie wolno mechanicznie mapować nazwy obszaru biznesowego na jeden kontekst.

**Grafika:**
Bardzo polecam prosty schemat:

* po lewej: 1 Subdomena
* po prawej: 3 Bounded Contexty

**Opcjonalny cytat:**
Możesz dodać małą stopką myśl w rodzaju:
„A bounded context defines the boundary within a domain where a specific domain model applies.” ([Microsoft Learn][2])

To dobry cytat, bo wspiera tezę, że chodzi o granicę **modelu**, nie po prostu nazwany obszar biznesu.

---

### Slajd 8 — Ale to nie znaczy, że są oderwane

**Tytuł:**
**Najlepiej, gdy da się je mapować blisko 1:1 — ale nie zakładamy tego z góry**

**Tekst na slajdzie:**
Dobry rezultat to sytuacja, w której:

* obszar biznesowy jest wyraźny
* model pozostaje spójny
* granice pokrywają się możliwie naturalnie

**Co powiedzieć:**
Tu łagodzisz przekaz. Nie mówisz „nigdy 1:1”, tylko „czasem tak — ale to jest wynik analizy, nie założenie początkowe”.

**Grafika:**
Dwa niemal pokrywające się prostokąty:

* Subdomena
* Bounded Context

To może być estetyczny kontrast do poprzedniego slajdu.

---

### Slajd 9 — Przykład sytuacji bliskiej ideałowi

**Tytuł:**
**Flota pojazdów: kiedy 1 Subdomena = 1 Bounded Context ma sens**

**Tekst na slajdzie:**
Jeśli pojęcia są spójne w całym obszarze:

* dostępność
* stan techniczny
* przypisanie do oddziału
* klasy pojazdów

…to jeden kontekst może być naturalnym wyborem.

**Co powiedzieć:**
To dobry kontrprzykład dla zbyt agresywnego dzielenia systemu. Nie wszystko trzeba rozcinać.

**Grafika:**
Ikona floty / zestawu samochodów albo prosty diagram „jedna rama = jeden spójny model”.

---

### Slajd 10 — Przykład sytuacji, gdzie 1:1 nie wystarcza

**Tytuł:**
**Wynajem samochodów: jeden obszar biznesowy, kilka modeli**

**Tekst na slajdzie:**
**Rezerwacja:**

* termin
* dostępność
* miejsce odbioru i zwrotu
* warunki oferty

**Wydanie auta:**

* uprawnienia klienta
* paliwo
* przebieg
* stan pojazdu

**Zwrot i rozliczenie:**

* opóźnienia
* uszkodzenia
* dopłaty
* limit kilometrów

**Co powiedzieć:**
Na tym slajdzie pokazujesz, że to samo „wynajmujemy auto” ma zupełnie inne reguły w zależności od etapu.

**Grafika:**
Bardzo warto. Najlepiej oś procesu:
**Rezerwacja → Wydanie → Zwrot → Rozliczenie**

To będzie najbardziej intuicyjny slajd całej prezentacji.

---

### Slajd 11 — Częsty błąd

**Tytuł:**
**Nazwy obszarów biznesowych nie wyznaczają jeszcze Bounded Contextów**

**Tekst na slajdzie:**
To, że mamy nazwy:

* rezerwacje
* rozliczenia
* flota

…nie oznacza jeszcze, że to są dobre granice kontekstów.

O granicy kontekstu decyduje:

* spójność pojęć
* spójność reguł
* jedna odpowiedzialność modelowa

**Co powiedzieć:**
Tu możesz mocno zaakcentować praktyczny antywzorzec: „robię konteksty według nazw z menu w systemie” albo według działów w firmie.

**Grafika:**
Może być symbol „warning” lub rozjechane puzzle. Bez przesady — raczej minimalistycznie.

---

### Slajd 12 — Połączenie obu perspektyw

**Tytuł:**
**Dopiero razem dają dobrą architekturę**

**Tekst na slajdzie:**

* Subdomena pomaga zrozumieć biznes
* Bounded Context pomaga bezpiecznie modelować
* dopiero razem pozwalają wyznaczyć sensowne granice

**Co powiedzieć:**
Ten slajd spina całość i przygotowuje do podsumowania.

**Grafika:**
Dwie strzałki schodzące się do jednego punktu:

* biznes
* model
  ↓
  architektura

To dobrze podsumowuje tok lekcji.

---

### Slajd 13 — Finał / podsumowanie

**Tytuł:**
**Najważniejsza myśl do zapamiętania**

**Tekst na slajdzie:**
Subdomena wskazuje **obszar biznesowy**.
Bounded Context wyznacza **granicę modelu**.

Czasem ich granice są podobne.
Czasem nie.

Dojrzałe projektowanie polega na tym, żeby:

* tego nie zgadywać
* tylko świadomie to odkrywać

**Co powiedzieć:**
To powinien być mocny, krótki finał. Bez przeładowania.

**Grafika:**
Brak konieczności. Lepiej zostawić dużo światła i mocną typografię.

---

