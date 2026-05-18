## Opisy slajdów — lekcja: DRY na poziomie architektury

---
  
**Slajd 1**

- **Wejście po słowach:** *„DRY. Don't Repeat Yourself. Każdy to zna."*
- **Tytuł:** DRY — co wiemy (i co nam się wydaje)
- **Opis:** Slajd otwierający. Tytuł z rozwinięciem akronimu DRY. Poniżej dwa krótkie przykłady znane każdemu programiście: „dwie metody robiące to samo → wyciągnij do wspólnej" oraz „zduplikowany model w dwóch klasach → wspólna klasa bazowa / interfejs". Slajd pełni funkcję zakotwiczenia — pokazuje punkt startowy, z którego większość inżynierów wychodzi, żeby za chwilę skonfrontować go z poziomem architektonicznym.

---

**Slajd 2**

- **Wejście po słowach:** *„Na poziomie architektury DRY zastosowane bez myślenia może ci dosłownie rozwalić mikroserwisy albo modularny monolit."*
- **Tytuł:** DRY w architekturze — inna skala, inne ryzyko
- **Opis:** Slajd kontrastowy. Po lewej stronie uproszczony diagram: kilka niezależnych serwisów (pożądany stan). Po prawej: te same serwisy połączone gęstą siatką zależności przez centralną bibliotekę — wizualizacja „big ball of mud". Poniżej krótka adnotacja: *„Wygląda jak mikroserwisy na diagramie, zachowuje się jak monolit przy każdej zmianie."* **Sugestia: diagram/grafika** porównawcza (before/after lub pożądany vs. rzeczywisty stan).

---

**Slajd 3**

- **Wejście po słowach:** *„Widziałem organizację, która miała bibliotekę o nazwie common."*
- **Tytuł:** Case study: biblioteka `common`
- **Opis:** Slajd narracyjny, wspierający opowiadaną historię. Prosta oś czasu lub schemat narastania zależności: `common` → 2 serwisy → 4 → 12. Punkt kulminacyjny zaznaczony wyraźnie: dodanie jednego pola `delivery_instructions` do modelu adresu wymaga koordynacji 7 zespołów, tygodnia planowania i jednoczesnego release'u. Slajd pokazuje skalę konsekwencji pozornie niewinnej decyzji. **Sugestia: prosta animacja/oś czasu** narastania zależności.

---

**Slajd 4**

- **Wejście po słowach:** *„Andy Hunt i Dave Thomas napisali w The Pragmatic Programmer: Every piece of knowledge must have a single, unambiguous, authoritative representation within a system."*
- **Tytuł:** DRY — oryginalna definicja
- **Opis:** Slajd cytatowy z wyróżnieniem. Cytat z „The Pragmatic Programmer" wyeksponowany jako główny element. Poniżej kluczowe rozróżnienie, podkreślone wizualnie (np. kolor, rozmiar fontu): **„Wiedza, nie kod."** Slajd pełni funkcję przełomową w narracji — od tego momentu prowadzący redefiniuje sposób myślenia o DRY.

---

**Slajd 5**

- **Wejście po słowach:** *„Pomyśl o modelu użytkownika."*
- **Tytuł:** Trzy konteksty, trzy definicje „User"
- **Opis:** Slajd porównawczy w układzie trzech kolumn. Każda kolumna to osobny serwis z własną definicją User:
    - **Authentication Service:** email, hasło, role, status konta
    - **Profile Service:** imię, avatar, preferencje powiadomień
    - **Notification Service:** adres email, język komunikacji

  Pod kolumnami jednoznaczna konkluzja: *„Trzy klasy o tej samej nazwie ≠ naruszenie DRY. To trzy osobne definicje wiedzy."*

---

**Slajd 6**

- **Wejście po słowach:** *„Albo weź przykład z ecommerce."*
- **Tytuł:** Produkt ≠ Produkt ≠ Produkt
- **Opis:** Slajd analogiczny strukturą do poprzedniego, ale z modelem Product w e-commerce. Trzy kolumny:
    - **Catalog Service:** opis, zdjęcia, tagi SEO, cena katalogowa
    - **Order Service:** cena w momencie zakupu, ilość, SKU
    - **Warehouse Service:** lokalizacja półki, waga, wymiary

  Poniżej ostrzeżenie wizualnie oddzielone: *„Scalenie w jedną klasę Product w common = klasa z 40 polami, z których każdy serwis używa 10. Reszta: null."* Slajd wzmacnia argument konkretem bliskim doświadczeniu architekta e-commerce.

---

**Slajd 7**

- **Wejście po słowach:** *„To samo działa w modularnym monolicie."*
- **Tytuł:** Modularny monolit — ten sam problem
- **Opis:** Slajd krótki, klaryfikujący. Prosty diagram: dwa moduły (Zamówienia i Wysyłka) wewnątrz jednego procesu, połączone wspólnym modelem adresu. Adnotacja: *„Jeden deployment, jeden proces — ale coupling identyczny jak w mikroserwisach. Zmiana modelu = przegląd obu modułów, testy obu ścieżek, koordynacja deweloperów."* **Sugestia: diagram** dwóch modułów ze wspólną zależnością.

---

**Slajd 8**

- **Wejście po słowach:** *„Odpowiedź, którą trudno przełknąć: autonomia serwisu ważniejsza jest niż brak duplikacji kodu."*
- **Tytuł:** Autonomia > eliminacja duplikacji
- **Opis:** Slajd z tezą centralną lekcji, wyróżnioną wizualnie (duży font, kontrast). Poniżej dwa scenariusze zestawione obok siebie:
    - **Serwis wysyłki:** dodaje pole dla kuriera i okno czasowe dostawy — niezależnie, bez koordynacji.
    - **Serwis fakturowania:** zmienia walidację kodu pocztowego pod nowy rynek — niezależnie, bez wspólnego release'u.

  Na dole slajdu wniosek: *„Duplikacja kodu między serwisami nie zabija autonomii. Współdzielona biblioteka domenowa — tak."*

---

**Slajd 9**

- **Wejście po słowach:** *„Sandi Metz powiedziała coś, co warto zapamiętać…"*
- **Tytuł:** Koszt abstrakcji vs. koszt duplikacji
- **Opis:** Slajd z cytatem Sandi Metz jako punktem wyjścia, ale rozbudowany o porównanie kosztów. Dwie sekcje:
    - **Duplikacja kodu:** koszt jednorazowy, lokalny, przewidywalny.
    - **Zła abstrakcja:** koszt kumulujący się przy każdej zmianie, przy każdym nowym serwisie dołączającym do `common`.

  Slajd pełni funkcję argumentacyjną — daje prowadzącemu narzędzie do podsumowania „dlaczego duplikacja bywa lepsza".

---

**Slajd 10**

- **Wejście po słowach:** *„Jedna prosta heurystyka: jeśli zmiana w jednym serwisie albo module zawsze pociąga za sobą zmianę w drugim…"*
- **Tytuł:** Heurystyka: duplikacja wiedzy vs. duplikacja kodu
- **Opis:** Slajd decyzyjny / diagnostyczny. Prosty schemat rozgałęzienia (drzewo decyzyjne lub tabela 2×2):
    - *Zmiana w serwisie A wymusza zmianę w serwisie B?* → **Duplikacja wiedzy** — problem do rozwiązania.
    - *Serwisy mogą ewoluować niezależnie bez szkody dla biznesu?* → **Duplikacja kodu** — dopuszczalna, wręcz pożądana.

  **Sugestia: diagram drzewa decyzyjnego** — prosty, czytelny, do zapamiętania.

---

**Slajd 11**

- **Wejście po słowach:** *„Ale uwaga, to nie znaczy, że DRY przestaje obowiązywać wszędzie poza kodem domenowym."*
- **Tytuł:** Gdzie DRY nadal obowiązuje
- **Opis:** Slajd porządkujący z dwoma wyraźnymi sekcjami:
    - **Wewnątrz serwisu:** ta sama logika walidacji w 3 miejscach jednego serwisu = naruszenie DRY. Jeden kontekst, jeden zespół, jeden dług techniczny przy każdym bugfixie.
    - **Infrastruktura (cross-cutting concerns):** konfiguracja loggingu, konwencje messagingu, middleware autentykacji, helpery do resilience. Wspólna biblioteka ma sens, bo standaryzuje infrastrukturę, nie wiąże logiki domenowej.

  Na dole slajdu wyraźna granica: *„Biblioteka infrastrukturalna — tak. Biblioteka domenowa — ostrożnie."*

---

**Slajd 12**

- **Wejście po słowach:** *„Open Host Service to w praktyce serwis, który publikuje swoją zdolność, capability, jako ustandaryzowany, publiczny interfejs."*
- **Tytuł:** Open Host Service — DRY przez publiczny kontrakt
- **Opis:** Slajd z przykładem `Currency Service`. Diagram: centralny serwis walutowy z publicznym API, wokół niego kilka serwisów-klientów (Orders, Invoicing, Reporting) wywołujących endpoint. Kontrastowo zaznaczony scenariusz „bez OHS": każdy serwis z własną logiką zaokrągleń, własnym źródłem kursów, rozbieżnymi edge case'ami. Kluczowa adnotacja: *„Wiedza o tym, jak przeliczyć walutę, ma jedno autorytatywne miejsce. Klienci są decoupled — kontrakt publiczny, za którym host robi co chce."* **Sugestia: diagram** — gwiazda z centralnym serwisem vs. rozproszony chaos.

---

**Slajd 13**

- **Wejście po słowach:** *„A Shared Kernel? To jest wyjątek, który potwierdza regułę."*
- **Tytuł:** Shared Kernel — świadomy wyjątek
- **Opis:** Slajd ostrzegawczy. Przykład: model `Money` (precyzja dziesiętna + waluta) w systemie finansowym — błędna duplikacja kosztuje dosłownie pieniądze. Dwa warunki dopuszczalności wyróżnione wizualnie:
    1. Oba zespoły świadomie akceptują współzależność.
    2. Ustalony proces koordynacji zmian.

  Ostrzeżenie na dole: *„Shared Kernel bez tej umowy = tykająca bomba. Z czasem staje się kolejnym common."*

---

**Slajd 14**

- **Wejście po słowach:** *„Moja rekomendacja jako architekta…"*
- **Tytuł:** Rekomendacja — kiedy stosować DRY
- **Opis:** Slajd podsumowujący, porządkujący całą lekcję w formie trzech jednoznacznych reguł:
    - **Wewnątrz serwisu** — DRY zawsze.
    - **Infrastruktura** — DRY zawsze.
    - **Logika domenowa między serwisami** — DRY tylko przy świadomym Shared Kernel i porozumieniu między zespołami.

  Slajd ma charakter referencyjny — coś, co uczestnik kursu może zapamiętać lub zapisać jako quick reference.

---

**Slajd 15**

- **Wejście po słowach:** *„Zapamiętaj jedną rzecz z tej lekcji…"*
- **Tytuł:** DRY to zasada o wiedzy, nie o wyglądzie kodu
- **Opis:** Slajd zamykający lekcję. Jedna myśl dominująca, wyeksponowana typograficznie. Poniżej dwa uzupełniające zdania:
    - *„Kod wyglądający podobnie w osobnych kontekstach to nie naruszenie DRY — to szacunek dla granic."*
    - *„Projektując domeny, myśl o autonomii i usuwalności. Przedwczesna abstrakcja odbiera ci tę swobodę."*

  Slajd nie wprowadza nowych treści — domyka narrację i zostawia uczestnika z jednym kluczowym wnioskiem.