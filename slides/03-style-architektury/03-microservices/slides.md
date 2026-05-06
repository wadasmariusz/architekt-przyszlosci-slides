# Mikroserwisy — propozycja slajdów

---

## Slajd 1 — Otwarcie

**Tytuł:** Mikroserwisy — styl premium

**Cel slajdu:** Zaintrygować odbiorcę i zasygnalizować, że to nie jest "domyślny" wybór architektoniczny.

**Treść:**
- Kolejny styl architektoniczny w naszej serii
- Najczęściej wybierany przez duże platformy (Netflix, Amazon)
- Dziś: czym jest, co daje, ile kosztuje i kiedy ma sens

> *"Ten styl nazywam stylem premium. Dlaczego — dowiesz się za chwilę."*

[Warto dodać grafikę: logo Netflix/Amazon/Spotify jako wizualne zakotwiczenie skojarzeń]

---

## Slajd 2 — Czym są mikroserwisy?

**Cel slajdu:** Jednoznacznie zdefiniować styl jednym zdaniem-hasłem.

**Hasło:** Wiele niezależnych jednostek wdrożeniowych zamiast jednej.

**Rozwinięcie:**
- Każda domena biznesowa = osobny serwis
- Osobny proces, osobny deployment, osobny pipeline
- Każdy serwis żyje własnym życiem

---

## Slajd 3 — Monolit vs Mikroserwisy

**Cel slajdu:** Pokazać fundamentalną różnicę względem stylów omówionych wcześniej.

**Porównanie (tabela / dwie kolumny):**

| Layered / Modular Monolith | Mikroserwisy |
|---|---|
| Jedna jednostka wdrożeniowa | Wiele jednostek wdrożeniowych |
| Jeden artefakt, jeden proces | Osobny proces na serwis |
| Cały system trafia na produkcję razem | Każdy serwis deployowany osobno |
| Podział w **kodzie** | Podział w **deploymencie** |

[Warto pokazać jako schemat: po lewej jeden duży prostokąt "monolit", po prawej kilka mniejszych, niezależnych prostokątów połączonych liniami]

---

## Slajd 4 — Skąd się wzięły mikroserwisy?

**Cel slajdu:** Pokazać, że styl powstał z konkretnej potrzeby biznesowej, nie z mody.

**Treść (sekwencja / timeline):**
- **Netflix, Amazon** — tysiące, dziesiątki tysięcy inżynierów
- **Problem:** jak zsynchronizować pracę tysięcy ludzi w jednym systemie?
- **2014** — Martin Fowler i James Lewis nazywają i opisują styl
- **Korzeń idei:** DDD i Bounded Context (znacznie starsze)

[Warto pokazać jako timeline: DDD → Bounded Context → Mikroserwisy 2014]

---

## Slajd 5 — Mikroserwis = Bounded Context

**Cel slajdu:** Zakotwiczyć kryterium podziału — to nie technika, to domena.

**Hasło:** Jeden mikroserwis = jeden Bounded Context.

**Rozwinięcie:**
- Kryterium podziału to **granica biznesowa**, nie rozmiar pliku ani liczba linii kodu
- Jeśli serwis przecina kilka Bounded Contexts → źle narysowane granice domenowe
- Żadna technologia nie naprawi błędu w modelowaniu domeny

[Warto pokazać na przykładzie: e-commerce z zaznaczonymi BC: Zamówienia, Płatności, Katalog, Dostawy, Powiadomienia → 1:1 mapowanie na serwisy]

---

## Slajd 6 — Co naprawdę charakteryzuje serwis?

**Cel slajdu:** Pokazać konkretne, techniczne cechy mikroserwisu.

**Treść (5 punktów):**
- Osobny proces i osobny kontener
- Własny pipeline CI/CD
- **Własna baza danych** — nie dzielona z innymi
- Komunikacja przez sieć: HTTP, gRPC, kolejka (Kafka, RabbitMQ)
- Deploy całkowicie niezależny od reszty systemu

[Warto pokazać jako schemat: serwis = kontener + baza + pipeline; strzałki sieciowe między serwisami]

---

## Slajd 7 — Sedno stylu

**Cel slajdu:** Wybić jednym zdaniem to, co odróżnia mikroserwisy od reszty.

**Hasło na środku slajdu:**
> Sednem mikroserwisów nie jest cecha techniczna.
> Sednem jest **niezależność organizacyjna**.

**Krótkie rozwinięcie:**
- Inne zespoły nie muszą wiedzieć
- Nie muszą czekać
- Nie muszą koordynować

---

## Slajd 8 — Problem: 5 zespołów, 1 monolit

**Cel slajdu:** Postawić konkretny scenariusz, w którym monolit zaczyna boleć.

**Treść (scenariusz):**
- 5 zespołów × 5 osób
- Domeny: Zamówienia, Płatności, Katalog, Dostawy, Powiadomienia
- Wspólny, dobrze pomodularyzowany monolit

**Pytanie do publiczności:**
> Co się dzieje, kiedy każdy z nich chce deployować?

[Warto pokazać grafiką: 5 zespołów wskazujących strzałkami na jeden duży monolit]

---

## Slajd 9 — Koszt koordynacji

**Cel slajdu:** Pokazać, jak narasta tarcie organizacyjne w monolicie wieloosobowym.

**Treść (sekwencja sytuacji):**
- Zespół A skończył funkcję → musi czekać na zespół B (niedokończona zmiana)
- Zespół C ma pilny bugfix → nie może iść sam
- Spotkanie koordynacyjne, okienko, plan rollbacku
- **Efekt:** deploy raz na kilka tygodni. W korporacji — raz na kwartał

[Warto pokazać jako oś czasu: powtarzające się "czekam na…", "okienko za 3 tygodnie"]

---

## Slajd 10 — To samo, ale w mikroserwisach

**Cel slajdu:** Kontrastywnie pokazać, co rozwiązuje ten styl.

**Hasło:** Każdy zespół deployuje, kiedy chce.

**Rozwinięcie:**
- Bez pytania nikogo
- Bez okienek serwisowych
- 5 deploymentów dziennie? Nie ma problemu
- 50? Tym lepiej

[Warto pokazać animacją: zespoły deployują niezależnie w różnych momentach — bez kolejki]

---

## Slajd 11 — Cztery zalety stylu

**Cel slajdu:** Pokazać "co kupujesz", zanim przejdziemy do ceny.

**Treść (4 punkty z krótkim opisem):**
1. **Niezależne wdrożenie** — jedyna rzecz nieosiągalna w żadnym innym stylu
2. **Izolacja błędów / blast radius** — pada raporty, koszyk działa
3. **Skalowalność per serwis** — Black Friday: koszyk × 10 replik, powiadomienia × 1
4. **Zgodność ze strukturą zespołów** — Conway's Law po twojej stronie

[Warto pokazać jako 4 ikony/karty obok siebie]

---

## Slajd 12 — Zaleta #1: Niezależne wdrożenie

**Cel slajdu:** Pogłębić najważniejszą zaletę.

**Treść:**
- W modularnym monolicie: świetne granice, ale nadal **jeden deploy**
- W mikroserwisach: zespół płatności deployuje, kiedy chce
- Bez pytania, bez ryzyka zetknięcia z niegotową zmianą

**Wniosek:**
> Przy 10 zespołach — to nie jest niuans. To jest game changer.

---

## Slajd 13 — Zaleta #2: Blast radius

**Cel slajdu:** Pokazać konkretny scenariusz odporności.

**Scenariusz:**
- Moduł raportów ma wyciek pamięci
- Stary kod, nikt go nie tykał od lat

**Co się dzieje?**
- 🔴 Sypie się serwis raportów
- 🟢 Zamówienia obsługują użytkowników normalnie
- 🟢 Płatności obsługują użytkowników normalnie

[Warto pokazać grafiką: jeden płonący kontener, reszta świeci na zielono]

---

## Slajd 14 — Zaleta #3: Skalowanie per serwis

**Cel slajdu:** Połączyć architekturę z konkretnymi pieniędzmi.

**Przykład: Black Friday**
- Koszyk → 10 replik
- Powiadomienia → 1 replika (tyle wystarczy)
- Wyszukiwarka → instancje CPU-heavy
- Reszta → bez zmian

**Wniosek:** Skalujesz dokładnie to, co jest przeciążone. Płacisz tylko za to.

[Warto pokazać jako wykres słupkowy: zużycie zasobów per serwis przed/po peaku]

---

## Slajd 15 — Zaleta #4: Conway's Law

**Cel slajdu:** Wprowadzić zasadę i pokazać, że mikroserwisy ją wykorzystują.

**Cytat na slajdzie:**
> "Systemy odzwierciedlają strukturę komunikacyjną organizacji, która je buduje."
> — Melvin Conway

**Konsekwencja:**
- Mikroserwisy pozwalają **świadomie** zaprojektować ten odbicie
- Filozofia Amazona: **"You build it, you run it."**

---

## Slajd 16 — Teraz cena. Trzy pułapki.

**Cel slajdu:** Slajd-przejście, ostrzeżenie przed kolejną częścią.

**Hasło:** Mikroserwisy zawsze kosztują. Pytanie tylko — czy jesteś gotów zapłacić.

**Zapowiedź trzech pułapek:**
1. Distributed monolith
2. Złożoność rozproszona
3. Zbyt wczesny podział

---

## Slajd 17 — Pułapka #1: Distributed monolith

**Cel slajdu:** Pokazać najczęstszą porażkę wdrożenia mikroserwisów.

**Definicja:**
> Osobne serwisy, ale tak silnie sprzężone, że trzeba je deployować razem.

**Sygnały:**
- Zmiana w jednym wymaga zmiany w trzech innych
- Długie łańcuchy synchronicznych wywołań między serwisami
- Formalnie mikroserwisy. Faktycznie monolit — tylko trudniejszy w utrzymaniu

[Warto pokazać jako diagram: serwisy połączone gęstą siatką synchronicznych zależności]

---

## Slajd 18 — Pułapka #2: Złożoność rozproszona

**Cel slajdu:** Uświadomić, że złożoność nie znika — zmienia adres.

**Hasło:** Mikroserwisy nie eliminują złożoności. Przenoszą ją z kodu do sieci.

**Co musisz obsłużyć świadomie:**
- Distributed transactions
- Timeouty i retries
- Circuit breakery
- Eventual consistency

[Warto pokazać porównanie: monolit — 1 transakcja DB | mikroserwisy — koordynacja przez 4 serwisy z własnymi bazami]

---

## Slajd 19 — Pułapka #3: Zbyt wczesny podział

**Cel slajdu:** Ostrzec przed utrwalaniem złych decyzji w infrastrukturze.

**Treść:**
- Granice domenowe niedojrzałe? → mikroserwisy je **zabetonują**
- Zmiana granicy serwisu jest dużo droższa niż refaktor w monolicie

**Cytat Martina Fowlera:**
> "Zacznij od monolitu. Podziel na serwisy, kiedy wiesz, gdzie są granice — i kiedy masz konkretny powód."

---

## Slajd 20 — Kiedy warto rozmawiać o mikroserwisach?

**Cel slajdu:** Dać konkretną listę sygnałów "TAK".

**Treść (checklista):**
- ☑ Wiele zespołów się wzajemnie blokuje
- ☑ Słyszysz: *"Deploy raz na miesiąc to i tak nieźle."*
- ☑ Aplikacja zarabia, ma użytkowników, ma ruch
- ☑ Wysoka dostępność = wymaganie, nie życzenie
- ☑ Organizacja stać na DevOps, chmurę, observability

[Warto pokazać jako checklistę z odhaczaniem]

---

## Slajd 21 — Kiedy NIE wybierać mikroserwisów?

**Cel slajdu:** Symetria — równie ważna lista "NIE".

**Treść (4 punkty):**
- 🚫 Startup szukający product-market fit
- 🚫 Mały zespół bez kultury DevOps
- 🚫 Granice domenowe jeszcze nieznane
- 🚫 System, który po prostu nie jest skomplikowany

**Liczba do zapamiętania:**
> W 99% przypadków — jeśli aplikacja nie zarabia, to nie jest moment na mikroserwisy.

---

## Slajd 22 — Złota zasada

**Cel slajdu:** Wybić jedno zdanie, które zostaje w głowie po prezentacji.

**Hasło na całym slajdzie:**
> Jeśli możesz sobie poradzić prostszym stylem — skorzystaj z prostszego stylu.
>
> Mikroserwisy kupujesz, kiedy konkretne zalety są warte konkretnej ceny.

---

## Slajd 23 — Strangler Fig — wprowadzenie

**Cel slajdu:** Wprowadzić wzorzec migracji w sposób obrazowy.

**Hasło:** Figowiec dusicielski.

**Jak działa drzewo:**
- Kiełkuje w koronie innego drzewa
- Powoli obrasta je od zewnątrz
- Zapuszcza korzenie w dół
- Stopniowo zastępuje gospodarza

**Analogia:** Dokładnie tak migrujesz monolit do mikroserwisów.

[Warto dodać grafikę: zdjęcie figowca dusicielskiego oplatającego drzewo-gospodarza]

---

## Slajd 24 — Strangler Fig w praktyce

**Cel slajdu:** Przełożyć metaforę na konkretny proces migracji.

**Sekwencja kroków:**
1. Monolit zostaje — nie wyłączasz go
2. Nowe funkcjonalności trafiają do nowych serwisów
3. Stare, stabilne części zostają, dopóki nie ma powodu by je wydzielać
4. Ruch prowadzisz przez **API Gateway**
5. Z zewnątrz: jeden system. W środku: nowa architektura rośnie obok

[Warto pokazać jako diagram architektoniczny: API Gateway → Monolit + nowe serwisy obok]

---

## Slajd 25 — Pierwszy serwis — konkretna rada

**Cel slajdu:** Dać praktyczną wskazówkę startową.

**Hasło:** Nie bierz na pierwszy ogień najtrudniejszej domeny.

**Dobry kandydat na #1:**
- Powiadomienia
- Raporty
- Coś prostego i izolowanego

**Cel pierwszego serwisu (uwaga — nie kod!):**
- Pipeline CI/CD ✓
- Konteneryzacja ✓
- Observability ✓
- Contract testing ✓
- **Zaufanie organizacji do kolejnych kroków** ✓

[Warto pokazać na przykładzie: prosty diagram serwisu Notifications wyciągniętego z monolitu]

---

## Slajd 26 — Iteracja

**Cel slajdu:** Pokazać, że to nie jest one-shot, tylko proces.

**Treść:**
- Domena po domenie — wyciągasz kolejne serwisy
- **Tylko tam, gdzie masz konkretny argument**
- Tempo dostosowane do tego, co organizacja jest w stanie wchłonąć

**Wskazówka:**
> Repo `evolutionary-architecture-by-example`, rozdział 3 — wzorzec krok po kroku, na działającym kodzie.

---

## Slajd 27 — Podsumowanie: co kupujesz

**Cel slajdu:** Domknąć główną tezę prezentacji.

**Treść (4 punkty):**
- Niezależne wdrożenie
- Łatwiejsze skalowanie
- Wysoka dostępność (jeden pada, reszta działa)
- Architektura, która **przyspiesza** pracę zamiast ją spowalniać

---

## Slajd 28 — Podsumowanie: co płacisz

**Cel slajdu:** Symetryczne podsumowanie kosztów.

**Treść:**
- Dobrze zorganizowane zespoły
- Jasno narysowane Bounded Contexts
- Rozbudowana infrastruktura (DevOps, observability, CI/CD)
- Świadoma obsługa złożoności rozproszonej

**Antypattern:**
> "Chcemy być jak Netflix" — to nie jest argument.

---

## Slajd 29 — Slajd końcowy / wnioski

**Cel slajdu:** Mocne, zapamiętywalne zamknięcie.

**Trzy zdania na slajdzie:**
> **Mikroserwisy są kosztowne.**
> Bierzesz je, gdy masz mocne argumenty.
> Gdy masz — nie zatrzymuj developmentu. Użyj Strangler Fig.

**Call to action:**
- Zacznij od jednego prostego serwisu
- Udowodnij podejście
- Potem skaluj

---

# Dodatki

## Propozycja slajdu otwierającego

**Tytuł:** Mikroserwisy — styl premium
**Podtytuł:** Co dostajesz, ile to kosztuje i kiedy ma sens
**Element wizualny:** krótkie pytanie/hasło zaczepne np. *"Jeden deploy dla 50 zespołów. Brzmi znajomo?"*

## Propozycja slajdu końcowego

**Tytuł:** Złota zasada
**Treść (jedno zdanie na środku):**
> Jeśli możesz sobie poradzić prostszym stylem — skorzystaj z prostszego stylu.
**Element domykający:** odesłanie do repo `evolutionary-architecture-by-example` + ewentualne dane kontaktowe / Q&A.

---

## 3 miejsca, gdzie szczególnie warto urozmaicić przekaz

### 1. Slajdy 8–10 (Scenariusz 5 zespołów)
To **emocjonalny moment** prezentacji — odbiorca ma poczuć ból koordynacji w monolicie. Warto dodać:
- Animację zespołów czekających w kolejce do deployu (slajd 9)
- Kontrast: ta sama animacja, ale każdy zespół deployuje niezależnie (slajd 10)
- Ewentualnie krótki dialog/scenkę: *"Czekamy na płatności…"*

### 2. Slajd 23 (Strangler Fig — metafora)
Metafora figowca dusicielskiego jest **najmocniejszym obrazem** w całej prezentacji. Warto:
- Pokazać prawdziwe zdjęcie figowca oplatającego drzewo
- Albo animację: drzewo-gospodarz znika, drzewo-figowiec zostaje
- To zostaje w głowie dłużej niż jakikolwiek diagram

### 3. Slajd 13 (Blast radius)
Odporność systemu najlepiej widać wizualnie. Warto:
- Pokazać kontrast: jeden płonący kontener vs reszta świecąca na zielono
- Albo demo / screenshot dashboardu observability, gdzie jeden serwis jest down, a reszta działa
- To natychmiast komunikuje wartość biznesową stylu

---

## Dodatkowe sugestie urozmaicenia (różnorodność slajdów)

W prezentacji świadomie zastosowano różne formaty:
- **Tabele porównawcze** — slajdy 3, 18
- **Sekwencje / timeline** — slajdy 4, 9, 24
- **Checklisty** — slajdy 20, 21
- **Cytaty** — slajdy 15, 19, 29
- **Scenariusze "co się dzieje?"** — slajdy 8, 13
- **Hasła-pytania** — slajdy 7, 22, 25
- **Diagramy architektoniczne** — slajdy 6, 17, 24

Dzięki temu rytm prezentacji nie staje się monotonny.