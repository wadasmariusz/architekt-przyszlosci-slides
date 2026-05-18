# Opisy slajdów — Osiem mitów systemów rozproszonych

Lekcja kursu dla architektów oprogramowania

---

## Slajd 1

**Wejście po słowach:** *„Systemy rozproszone to temat, który na początku często wydaje się prosty."*

**Tytuł:** Systemy rozproszone — obietnica vs. rzeczywistość

**Opis:**
Slajd podzielony na dwie kolumny kontrastujące ze sobą wizualnie.

Lewa kolumna — „Obietnica" (jasne tło, pozytywny ton):
- Niezależne mikroserwisy
- Automatyczne skalowanie
- Odporność na awarie
- Wdrożenia w Kubernetesie

Prawa kolumna — „Rzeczywistość produkcyjna" (ciemniejsze tło, sygnalizujące ostrzeżenie):
- Nieprzewidywalna komunikacja
- Rosnące opóźnienia
- Brak synchronizacji danych
- Błędy w nieoczekiwanych miejscach

Slajd pełni funkcję **otwierającą lekcję** — buduje napięcie między oczekiwaniami a praktyką i uzasadnia, dlaczego temat mitów jest istotny.

---

## Slajd 2

**Wejście po słowach:** *„I właśnie dlatego powstała koncepcja tak zwanych ośmiu mitów systemów rozproszonych."*

**Tytuł:** 8 mitów systemów rozproszonych

**Opis:**
Slajd prezentuje numerowaną listę wszystkich ośmiu mitów — pełni funkcję **mapy lekcji**, do której prowadzący może wracać:

1. Sieć jest niezawodna
2. Opóźnienie jest zerowe
3. Przepustowość jest nieskończona
4. Sieć jest bezpieczna
5. Topologia się nie zmienia
6. Istnieje jeden administrator
7. Koszt transportu jest zerowy
8. Sieć jest jednorodna

Adnotacja u dołu: *Sun Microsystems, lata 90. — Peter Deutsch, James Gosling i in.*

Slajd powinien być zaprojektowany tak, żeby mógł pełnić rolę **punktu nawigacyjnego** — np. z wyróżnieniem aktualnie omawianego mitu przy kolejnych powrotach, jeśli format kursu na to pozwala.

---

## Slajd 3

**Wejście po słowach:** *„Pierwszy mit mówi, że sieć jest niezawodna."*

**Tytuł:** Mit #1 — Sieć jest niezawodna

**Opis:**
Slajd skupiony na mechanizmach awarii sieci. Zawiera dwie warstwy informacji.

Górna część — źródła problemów (krótkie hasła):
- Timeout / brak odpowiedzi
- Błędy DNS
- Przeciążenie load balancera
- Awaria regionu chmurowego

Dolna część — kluczowy cytat lub wyróżnienie koncepcyjne:
*„Usługa działa poprawnie, ale odpowiedź przychodzi zbyt późno — dla użytkownika efekt jest taki sam jak awaria."*

Slajd nie prezentuje jeszcze mechanizmów obronnych — te wchodzą na następnym slajdzie. Rozdzielenie problemu od rozwiązania pozwala prowadzącemu zbudować narrację „problem → konsekwencja → odpowiedź".

---

## Slajd 4

**Wejście po słowach:** *„Dlatego w systemach rozproszonych tak ważne są tajmauty, polityka ponowień, syrkit brejkery oraz idempotencja."*

**Tytuł:** Wzorce odporności na awarię sieci

**Opis:**
Slajd porządkujący — przedstawia cztery mechanizmy obronne w formie **diagramu przepływu lub schematu blokowego** pokazującego, w jakiej kolejności wchodzą w grę:

Żądanie → **Timeout** (ogranicza czas oczekiwania) → **Retry z idempotencją** (bezpieczne ponowienie) → **Circuit Breaker** (zatrzymanie wywołań przy masowych błędach) → Odpowiedź lub kontrolowana degradacja

Przy każdym elemencie krótka adnotacja:
- Timeout — zapobiega efektowi domina
- Retry + idempotencja — wielokrotne wywołanie = ten sam efekt (przykład: podwójna płatność)
- Circuit Breaker — tymczasowe odcięcie wadliwej usługi

**Sugestia:** diagram przepływu (flowchart), ponieważ pokazuje **sekwencję podejmowania decyzji**, a nie tylko listę pojęć. Znacząco ułatwia zrozumienie relacji między mechanizmami.

---

## Slajd 5

**Wejście po słowach:** *„Drugi mit zakłada, że opóźnienie jest zerowe."*

**Tytuł:** Mit #2 — Opóźnienie jest zerowe

**Opis:**
Slajd zawiera **prostą wizualizację narastania latencji** — drzewko wywołań:

Endpoint użytkownika
├── Usługa A (~15 ms)
│   ├── Usługa D (~12 ms)
│   ├── Usługa E (~18 ms)
│   └── Usługa F (~10 ms)
├── Usługa B (~20 ms)
│   ├── Usługa G (~14 ms)
│   └── ...
└── Usługa C (~11 ms)
└── ...

Na dole: **Sumaryczne opóźnienie odczuwane przez użytkownika: ~800+ ms → kilka sekund**

**Sugestia:** diagram drzewiasty (call tree), ponieważ wizualizuje problem opisywany w skrypcie — jeden endpoint wywołujący pięć usług, z których każda wywołuje kolejne trzy. Statyczny tekst tego efektu kumulacji nie oddaje.

---

## Slajd 6

**Wejście po słowach:** *„Dlatego architekci muszą świadomie wybierać pomiędzy komunikacją synchroniczną i asynchroniczną."*

**Tytuł:** Synchroniczna vs. asynchroniczna komunikacja

**Opis:**
Slajd **porównawczy** w układzie dwukolumnowym:

| | Synchroniczna | Asynchroniczna |
|---|---|---|
| Mechanizm | Żądanie → oczekiwanie → odpowiedź | Zdarzenie / wiadomość → przetworzenie w swoim czasie |
| Zaleta | Prostota implementacji, natychmiastowa odpowiedź | Odporność na awarie, mniejsze sprzężenie czasowe |
| Ryzyko | Kaskadowe opóźnienia, zależność od dostępności | Złożona logika spójności danych, trudniejsze debugowanie |
| Typowe użycie | Zapytania wymagające natychmiastowego wyniku | Event-driven architecture, kolejki, CQRS |

Slajd nie faworyzuje jednego podejścia — pokazuje **trade-off**, który architekt musi świadomie ocenić.

---

## Slajd 7

**Wejście po słowach:** *„Trzeci mit mówi, że przepustowość jest nieskończona."*

**Tytuł:** Mit #3 — Przepustowość jest nieskończona

**Opis:**
Slajd wyjaśniający — w centrum pojęcie **wąskiego gardła (bottleneck)** z trzema strzałkami wskazującymi źródła problemu:

1. Liczba połączeń (connection pool, limity TCP)
2. Koszt serializacji (JSON, XML — narzut CPU/pamięć)
3. Przepustowość infrastruktury (sieć, message broker, baza danych)

Pod spodem sekcja „Mechanizmy ochronne" — hasła:
- Batching (grupowanie operacji)
- Cache
- Kompresja
- Streaming
- **Backpressure** — kontrola przepływu, gdy producent jest szybszy niż konsument

Slajd łączy diagnozę problemu z odpowiedzią architektoniczną w jednym widoku, ponieważ skrypt omawia je łącznie.

---

## Slajd 8

**Wejście po słowach:** *„Czwarty mit zakłada, że sieć jest bezpieczna."*

**Tytuł:** Mit #4 — Sieć jest bezpieczna

**Opis:**
Slajd skoncentrowany wokół koncepcji **Zero Trust**. Struktura:

Nagłówek koncepcyjny: *„Nie można ufać sieci — nawet wewnątrz własnej infrastruktury"*

Elementy podejścia Zero Trust (wylistowane jako warstwy lub bloki):
- Wzajemne uwierzytelnianie usług (mTLS)
- Tokeny JWT / OAuth 2.0
- Rotacja sekretów
- Kontrola dostępu (RBAC / ABAC)

Osobna sekcja na dole (oddzielona wizualnie):
*„Bezpieczeństwo ≠ tylko szyfrowanie"*
- Audyt i logowanie operacji
- Distributed tracing bezpieczeństwa
- Ograniczanie blast radius (zasięgu potencjalnego ataku)

Slajd podkreśla, że bezpieczeństwo w systemach rozproszonych to **ciągły proces wielowarstwowy**, nie jednorazowa konfiguracja.

---

## Slajd 9

**Wejście po słowach:** *„Piąty mit mówi, że topologia sieci się nie zmienia."*

**Tytuł:** Mit #5 — Topologia jest stała

**Opis:**
Slajd ilustrujący dynamiczność środowiska. Zawiera **uproszczony diagram** pokazujący zmienność topologii:

Warstwa wizualna — schemat klastra z elementami pojawiającymi się i znikającymi:
- Kontenery tworzone / usuwane
- Instancje skalowane w górę / w dół
- Serwisy migrujące między węzłami
- Load balancer przekierowujący ruch

Warstwa tekstowa — mechanizmy odpowiedzi:
- Service Discovery (wykrywanie usług)
- Service Registry (rejestr usług)
- Dynamiczna konfiguracja
- DNS wewnętrzny (np. CoreDNS w Kubernetes)

Kluczowy przekaz: *„Adres usługi nie może być zakodowany na sztywno."*

**Sugestia:** prosty diagram z animowanymi elementami (np. migające węzły, pojawiające się/znikające pody), jeśli format kursu to umożliwia. Statyczny schemat z ikonami „+" i „–" przy węzłach też spełni zadanie.

---

## Slajd 10

**Wejście po słowach:** *„Szósty mit zakłada, że istnieje jeden administrator."*

**Tytuł:** Mit #6 — Jeden administrator

**Opis:**
Slajd o **wymiarze organizacyjnym**, nie tylko technicznym. Struktura:

Górna część — wizualizacja problemu:
Wiele zespołów → różne priorytety → różne rytmy wdrożeń → **brak centralnej kontroli**

Dolna część — konsekwencje architektoniczne i odpowiedzi:
- API jako kontrakt między zespołami
- Kompatybilność wsteczna (backward compatibility)
- Wersjonowanie API
- Obserwowalność: logi, metryki, distributed tracing

Wyróżniony fragment: *„Zmiana formatu odpowiedzi bez komunikacji z innymi zespołami → awaria całego ekosystemu"*

Slajd jest istotny, ponieważ to jedyny mit w zestawie, który bezpośrednio adresuje **ryzyko organizacyjne**, a nie tylko techniczne.

---

## Slajd 11

**Wejście po słowach:** *„Siódmy mit mówi, że koszt transportu jest zerowy."*

**Tytuł:** Mit #7 — Koszt transportu jest zerowy

**Opis:**
Slajd **porównawczy**, pokazujący trzy wymiary kosztu komunikacji:

| Wymiar kosztu | Przykład |
|---|---|
| Technologiczny | Serializacja / deserializacja (CPU, pamięć) |
| Wydajnościowy | Narzut sieciowy per wywołanie × tysiące wywołań |
| Finansowy | Transfer danych między regionami chmury (egress costs) |

Pod tabelą — kluczowy trade-off wyróżniony graficznie:

**Mikroserwisy ≠ cel, mikroserwisy = kompromis**
- ✅ Niezależność zespołów, skalowalność organizacyjna
- ⚠️ Koszt komunikacji, złożoność operacyjna

*„Nadmierna granularność mikroserwisów może dać system droższy i wolniejszy niż dobrze zaprojektowany monolit."*

Ten slajd jest kluczowy z perspektywy decyzji architektonicznych — bezpośrednio adresuje **pułapkę over-engineeringu**.

---

## Slajd 12

**Wejście po słowach:** *„Ostatni mit zakłada, że sieć jest jednorodna."*

**Tytuł:** Mit #8 — Sieć jest jednorodna

**Opis:**
Slajd pokazujący **różnorodność technologiczną** typowego systemu rozproszonego.

Wizualizacja centralna — uproszczony diagram ekosystemu z heterogenicznymi komponentami:
- Języki: .NET, Node.js, Go, Python
- Protokoły: REST, GraphQL, gRPC, kolejki (Kafka, RabbitMQ)
- Różne wersje bibliotek, systemy legacy

Strzałki między komponentami komunikującymi się różnymi protokołami — podkreślenie chaosu integracyjnego.

Pod diagramem — odpowiedzi architektoniczne:
- Standaryzacja kontraktów (np. OpenAPI, Protocol Buffers)
- Standaryzacja formatów danych
- Contract testing (testowanie zgodności kontraktów)

**Sugestia:** diagram, ponieważ sam tekst nie oddaje skali heterogeniczności — wizualizacja wielu technologii w jednym ekosystemie jest zdecydowanie czytelniejsza niż lista.

---

## Slajd 13

**Wejście po słowach:** *„Wszystkie te mity prowadzą do jednego bardzo ważnego wniosku."*

**Tytuł:** Projektuj na awarie, nie przeciw nim

**Opis:**
Slajd **podsumowujący i konsolidujący** — zbiera przekaz całej lekcji w jeden obraz mentalny.

Centralne hasło (duży font): *„Awaria jest normą, nie wyjątkiem."*

Pod spodem — filary architektury odpornej (4–5 bloków, równorzędnych):
- Wzorce odporności (retry, circuit breaker, bulkhead, timeout)
- Obserwowalność (logi, metryki, distributed tracing)
- Automatyzacja (CI/CD, self-healing, auto-scaling)
- Świadome zarządzanie zależnościami (loose coupling, contract-first)

Slajd zamyka merytoryczną część lekcji — nie powtarza listy mitów, lecz formułuje **zasadę projektową**, która z nich wynika.

---

## Slajd 14

**Wejście po słowach:** *„Podsumowując, osiem mitów systemów rozproszonych to nie teoria akademicka, ale bardzo praktyczny zbiór ostrzeżeń"*

**Tytuł:** Podsumowanie — 8 mitów w praktyce architekta

**Opis:**
Slajd **zamykający** lekcję. Kompaktowe zestawienie wszystkich mitów z jednozdaniową konsekwencją architektoniczną dla każdego:

1. Sieć jest niezawodna → projektuj z timeoutami, retry i circuit breakerami
2. Opóźnienie jest zerowe → mierz latencję, wybieraj sync vs. async świadomie
3. Przepustowość jest nieskończona → stosuj batching, cache, backpressure
4. Sieć jest bezpieczna → wdrażaj Zero Trust, mTLS, rotację sekretów
5. Topologia jest stała → używaj service discovery i dynamicznej konfiguracji
6. Jeden administrator → API jako kontrakt, wersjonowanie, obserwowalność
7. Koszt transportu jest zerowy → waż granularność mikroserwisów vs. koszty
8. Sieć jest jednorodna → standaryzuj kontrakty, testuj zgodność

Slajd działa jako **ściągawka do zapamiętania** — uczestnik kursu może do niego wrócić po lekcji jako do syntetycznego podsumowania.