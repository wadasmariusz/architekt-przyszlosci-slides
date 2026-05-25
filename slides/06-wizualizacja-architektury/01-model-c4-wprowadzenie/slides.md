# Opisy slajdów — Lekcja: Model C4

---

## Slajd 1

**Wejście:** Na początku lekcji, przy słowach *„Cześć, witaj w kolejnej lekcji. Zaczniemy ją od problemu…"*

**Tytuł:** Problem z diagramami architektury

**Opis slajdu:**
Slajd otwierający, który wizualnie pokazuje problem opisywany przez prowadzącego. Centralnym elementem powinna być **grafika/ilustracja**: uproszczona parodia „typowego" diagramu architektury — gęsty, chaotyczny rysunek pełen prostokątów, strzałek w różnych kierunkach, przerywanych linii, losowych kolorów, dopisanych skrótów technologii. Celowo nieczytelny i przesycony informacjami.

Pod grafiką lub obok niej krótki tekst-pytanie: „Co oznacza ten prostokąt — system, serwis, klasę, a może serwer?"

Slajd nie wymaga żadnych wypunktowań. Ma działać jako wizualne otwarcie problemu — odbiorca od razu rozpoznaje sytuację z własnego doświadczenia.

---

## Slajd 2

**Wejście:** Przy słowach *„Problem polega na tym, że bardzo często taki diagram próbuje pokazać wszystko naraz."*

**Tytuł:** Jeden diagram, wiele problemów

**Opis slajdu:**
Slajd porządkujący — przedstawia trzy-cztery kluczowe problemy wymieniane przez prowadzącego, ale w formie zwięzłych haseł, nie pełnych zdań. Układ może być kolumnowy lub kafelkowy:

- **Brak wspólnej notacji** — każdy zespół rysuje inaczej, strzałki oznaczają co innego
- **Brak odbiorcy** — diagram jednocześnie dla biznesu, architekta i nowego developera
- **Mieszanie poziomów** — Redis obok konceptu biznesowego na jednym widoku
- **Brak aktualizacji** — diagram opisuje rzeczywistość, która już nie istnieje

Slajd wspiera fragment o tym, dlaczego diagramy „all-in-one" utrudniają rozmowę o architekturze zamiast ją ułatwiać.

---

## Slajd 3

**Wejście:** Przy słowach *„I właśnie w tym miejscu pojawia się potrzeba bardziej uporządkowanego podejścia do wizualizowania architektury"*

**Tytuł:** Model C4 — geneza

**Opis slajdu:**
Slajd informacyjny z kontekstem historycznym. Powinien zawierać:

- Imię i nazwisko twórcy: **Simon Brown** — architekt oprogramowania, konsultant, autor książki „The C4 Model" (O'Reilly, 2026) oraz „Software Architecture for Developers"
- Krótka nota: Model powstawał w latach 2006–2011; nazwa „C4" po raz pierwszy użyta w 2011 roku. Powstał z obserwacji, że uczestnicy szkoleń z architektury rozumieli systemy, ale nie potrafili ich czytelnie zwizualizować
- Umiejscowienie C4 na osi między dwoma skrajnościami, najlepiej w formie **prostego diagramu/osi**: po lewej „UML — formalny, rozbudowany, ciężki do utrzymania", po prawej „rysunki ad hoc — szybkie, niespójne, niepowtarzalne", a pośrodku „C4 — uporządkowane, lekkie, pragmatyczne"

Slajd buduje wiarygodność modelu i pokazuje, że C4 nie pojawił się w próżni — jest odpowiedzią na realne problemy praktyki.

---

## Slajd 4

**Wejście:** Przy słowach *„Najprościej mówiąc, C4 to sposób tworzenia mapy systemu na różnych poziomach przybliżenia. Bardzo dobra jest tutaj metafora Google Maps."*

**Tytuł:** Metafora Google Maps

**Opis slajdu:**
Slajd wizualny, oparty na metaforze przybliżania mapy. **Grafika/diagram:** Cztery ramki ułożone obok siebie (lub kaskadowo), symulujące zoom:

1. Widok kraju/regionu → odpowiada poziomowi Kontekstu
2. Widok miasta → odpowiada poziomowi Kontenerów
3. Widok dzielnicy → odpowiada poziomowi Komponentów
4. Widok konkretnej ulicy → odpowiada poziomowi Kodu

Pod każdą ramką etykieta z nazwą poziomu C4. Całość powinna wizualnie komunikować ideę: „nie pokazujemy wszystkiego naraz — wybieramy poziom przybliżenia."

Cytat Simona Browna na slajdzie (opcjonalnie, mniejszą czcionką): *„A way to create maps of your code, at various levels of detail, in the same way you would use something like Google Maps to zoom in and out of an area you are interested in."*

---

## Slajd 5

**Wejście:** Przy słowach *„W C4 ważne są trzy rzeczy: prostota, hierarchia abstrakcji i samoopisowość diagramów."*

**Tytuł:** Trzy zasady C4

**Opis slajdu:**
Slajd z trzema kolumnami lub blokami, każdy z hasłem i jednozdaniowym rozwinięciem:

- **Prostota** — model łatwy do nauczenia; nie wymaga znajomości skomplikowanej notacji
- **Hierarchia abstrakcji** — świadomy wybór poziomu szczegółowości, bez mieszania na jednym rysunku
- **Samoopisowość** — diagram daje się zrozumieć bez autora stojącego obok; każdy element ma nazwę, typ, opis; relacje są opisane

Przy „samoopisowości" warto dodać adnotację: *„Diagram powinno dać się przeczytać na głos."*

---

## Slajd 6

**Wejście:** Przy słowach *„Sam model opiera się na kilku podstawowych pojęciach."*

**Tytuł:** Słownik pojęć C4

**Opis slajdu:**
Slajd referencyjny/definicyjny. **Diagram lub tabela** z pięcioma pojęciami, każde z krótkim objaśnieniem:

| Pojęcie | Znaczenie w C4 |
|---|---|
| **Person** | Użytkownik lub rola korzystająca z systemu |
| **Software System** | Większa całość dostarczająca wartość biznesową |
| **Container** | Uruchamialna/wdrażalna jednostka (aplikacja webowa, API, baza danych, worker, kolejka) — nie mylić z kontenerem Docker |
| **Component** | Większy moduł wewnątrz kontenera z wyraźną odpowiedzialnością |
| **Relationship** | Opis komunikacji: kto, z kim, po co, w jaki sposób |

Przy „Container" wyraźne ostrzeżenie wizualne (np. ikonka uwagi lub inny kolor): **≠ Docker container**. Ten punkt prowadzący szczególnie akcentuje w skrypcie.

---

## Slajd 7

**Wejście:** Przy słowach *„Pierwszy poziom C4 to diagram kontekstu systemu. To najbardziej ogólny widok, z lotu ptaka"*

**Tytuł:** Poziom 1 — System Context

**Opis slajdu:**
**Diagram przykładowy** — uproszczony diagram kontekstu dla fikcyjnego systemu (np. system bankowy lub e-commerce). Centralnie: nasz system jako jeden blok. Wokół niego: ikony/bloki użytkowników (Person) oraz systemów zewnętrznych, z których każdy ma nazwę, typ i jednozdaniowy opis relacji.

Tekst towarzyszący na slajdzie:

- Odpowiada na pytanie: jak nasz system wygląda z zewnątrz?
- Odbiorcy: wszyscy — biznes, product owner, architekci, nowi w zespole
- Nie pokazujemy: klas, baz danych, frameworków
- Pokazujemy: granice systemu i jego otoczenie

Diagram powinien być celowo prosty — kilka elementów, czytelne etykiety, zero szczegółów technicznych.

---

## Slajd 8

**Wejście:** Przy słowach *„Drugi poziom to diagram kontenerów. Tutaj przybliżamy się o jeden krok"*

**Tytuł:** Poziom 2 — Containers

**Opis slajdu:**
**Diagram przykładowy** — ten sam fikcyjny system co na slajdzie 7, ale teraz „otwarty" na kontenery. Widoczne elementy: frontend (SPA), backend API, baza danych (np. PostgreSQL), aplikacja mobilna, usługa powiadomień, ewentualnie worker/proces w tle. Między nimi strzałki z dopisanymi protokołami (HTTPS, AMQP, SQL).

Tekst towarzyszący:

- Z jakich głównych części składa się system?
- Odbiorcy: architekci, tech leadzi, developerzy
- Na tym poziomie dopisujemy technologie i protokoły komunikacji

Slajd powinien wizualnie pokazać „zoom in" — granica systemu z poziomu 1 jest teraz rozwiniętą strukturą wewnętrzną.

---

## Slajd 9

**Wejście:** Przy słowach *„Trzeci poziom to diagram komponentów. Tutaj schodzimy do wnętrza konkretnego kontenera."*

**Tytuł:** Poziom 3 — Components

**Opis slajdu:**
**Diagram przykładowy** — wnętrze jednego kontenera z poprzedniego poziomu (np. backend API). Widoczne komponenty: moduł autoryzacji, obsługa zamówień, integracja z płatnościami, komponent wysyłający zdarzenia do kolejki. Między nimi relacje wewnętrzne.

Tekst towarzyszący:

- Co jest wewnątrz kontenera?
- Odbiorcy: developerzy pracujący nad danym fragmentem
- Komponent ≠ pojedyncza klasa — to większy moduł z wyraźną odpowiedzialnością

Ważne: diagram powinien wyraźnie „wyrastać" z jednego kontenera z poziomu 2, żeby widać było hierarchię przybliżenia.

---

## Slajd 10

**Wejście:** Przy słowach *„Czwarty poziom to kod. I tutaj warto powiedzieć uczciwie, że ten poziom jest używany najrzadziej"*

**Tytuł:** Poziom 4 — Code (opcjonalny)

**Opis slajdu:**
Slajd z odmiennym tonem niż poprzednie trzy — sygnalizuje ostrożność. Zamiast pełnego diagramu przykładowego, slajd zawiera:

- Krótki opis: diagramy klas, encji, relacji między obiektami — najniższy poziom szczegółowości
- Kluczowy komunikat wyróżniony wizualnie: **„Kod zmienia się szybko — ręcznie utrzymywane diagramy łatwo się dezaktualizują"**
- Rekomendacja: generowanie takich widoków przez IDE lub narzędzia, nie ręczne tworzenie
- Podsumowanie podejścia C4: „Rób to wtedy, kiedy rzeczywiście daje to wartość"

Slajd nie wymaga rozbudowanego diagramu — chodzi o komunikat pragmatyczny, że nie każdy poziom trzeba tworzyć.

---

## Slajd 11

**Wejście:** Przy słowach *„Ważne jest też to, że C4 nie kończy się wyłącznie na tych czterech poziomach. Istnieją też diagramy uzupełniające"*

**Tytuł:** Diagramy uzupełniające

**Opis slajdu:**
Slajd porządkujący trzy dodatkowe perspektywy. Układ: trzy bloki/karty, każdy z nazwą, krótkim opisem i wskazaniem zastosowania:

**System Landscape**
— Wiele systemów w organizacji i ich powiązania. Przydatny w większych firmach, gdzie system rzadko działa samotnie.

**Deployment Diagram**
— Jak elementy logiczne są uruchomione w środowisku (produkcja, test, dev). Pokazuje load balancery, instancje, regiony chmurowe, klastry. Uzupełnia C4, który opisuje głównie architekturę logiczną.

**Dynamic Diagram**
— Zachowanie systemu w czasie — jak elementy współpracują w konkretnym scenariuszu. Odpowiednik diagramu sekwencji w stylu C4.

Slajd nie wymaga grafiki — trzy zwięzłe bloki tekstowe wystarczą do wsparcia narracji.

---

## Slajd 12

**Wejście:** Przy słowach *„Jedna rzecz, którą warto powiedzieć wprost: C4 nie zastępuje UML-a."*

**Tytuł:** C4 a UML — nie wojna, lecz uzupełnienie

**Opis slajdu:**
Slajd porównawczy. **Tabela lub układ dwukolumnowy:**

| | C4 | UML |
|---|---|---|
| **Fokus** | Struktura systemu (boxy i strzałki) | Zachowanie (sekwencje, stany, aktywności) |
| **Siła** | Lekki, pragmatyczny, szybki start | Formalny, precyzyjny, bogata notacja |
| **Kiedy stosować** | Codzienne rysowanie architektury strukturalnej | Modelowanie zachowań, maszyny stanów, diagramy sekwencji |

Kluczowy komunikat na dole slajdu: *„Jeśli UML w zespole działa — nie rezygnuj. Jeśli nie działa — C4 jest lżejszym punktem startu."*

Slajd wspiera prowadzącego w deeskalacji potencjalnego antagonizmu „C4 vs UML" wśród doświadczonych architektów na sali.

---

## Slajd 13

**Wejście:** Przy słowach *„Na koniec warto powiedzieć o najczęstszych mitach i błędach."*

**Tytuł:** Mity i częste błędy

**Opis slajdu:**
Slajd podzielony na dwie sekcje: **Mity** i **Błędy**.

**Mity:**
- „C4 ma jedną obowiązkową notację graficzną" → Model jest niezależny od notacji; liczy się spójność, tytuł, opisane elementy i relacje
- „Diagramy C4 pokazują decyzje architektoniczne" → Pokazują wynik decyzji (aktualny kształt systemu); same decyzje lepiej dokumentować w ADR-ach (Architecture Decision Records — format zaproponowany przez Michaela Nygarda w 2011 roku, opisujący kontekst, rozważane opcje i konsekwencje każdej decyzji)
- „C4 nadaje się tylko do monolitów" → Działa równie dobrze dla mikroserwisów i systemów rozproszonych

**Błędy:**
- Mieszanie poziomów abstrakcji na jednym diagramie (baza danych + klasa repozytorium obok siebie)
- Zbyt wiele elementów na jednym widoku (30 boxów na diagramie kontenerów = nieczytelność)

Układ powinien wizualnie oddzielać mity (np. przekreślone) od błędów (np. ostrzegawcze).

---

## Slajd 14

**Wejście:** Przy słowach *„Podsumowując, C4 jest przede wszystkim praktycznym sposobem myślenia o komunikowaniu architektury."*

**Tytuł:** Podsumowanie — 4 poziomy, 1 zasada

**Opis slajdu:**
Slajd zamykający lekcję. **Grafika/diagram:** Cztery poziomy C4 ułożone pionowo jako schody lub piramida zoom-in:

1. **Context** → Czym jest system i jak pasuje do otoczenia?
2. **Containers** → Z jakich głównych części się składa?
3. **Components** → Co jest wewnątrz kontenera?
4. **Code** → Jak wygląda implementacja? (tylko gdy daje wartość)

Pod diagramem kluczowe zdanie podsumowujące, wyróżnione: *„Nie chodzi o narzędzie ani kolory — chodzi o pokazywanie systemu na właściwym poziomie szczegółowości, właściwym osobom, we właściwym kontekście."*

Slajd domyka lekcję, zostawiając odbiorcę z jasnym mentalnym modelem hierarchii i jej celem komunikacyjnym.