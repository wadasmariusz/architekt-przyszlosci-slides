# Context Mapping — propozycja slajdów

---

## Slajd 1 — Problem

**Treść:**

* Systemy są złożone
* Wiele zespołów, wiele zależności
* Problemy nie są techniczne — są organizacyjne

**Grafika:**

* Diagram wielu zespołów połączonych zależnościami (chaotyczna sieć)

---

## Slajd 2 — Bounded Context

**Treść:**

* Dzielimy system na Bounded Contexty
* Każdy ma:

    * własny model
    * własny język
    * własny zespół

**Grafika:**

* Podział jednego systemu na kilka wyraźnych bloków

---

## Slajd 3 — Gdzie pojawia się problem

**Treść:**

* Konteksty muszą się integrować
* Zależności między zespołami
* Bottlenecki w backlogach

**Grafika:**

* Strzałki między kontekstami z oznaczonym opóźnieniem

---

## Slajd 4 — Przykład z życia

**Treść:**

* Zespół A potrzebuje zmiany od zespołu B
* Ticket trafia do backlogu
* Czas oczekiwania → workaround
* Workaround → bug po czasie

**Grafika:**

* Timeline: ticket → czekanie → workaround → problem

---

## Slajd 5 — Context Mapping

**Treść:**

* Narzędzie do zrozumienia zależności
* Pokazuje relacje między kontekstami
* Pokazuje relacje między zespołami

**Grafika:**

* Prosta mapa kontekstów z relacjami

---

## Slajd 6 — Kiedy używać

**Treść:**

* Greenfield — przed budową systemu
* Brownfield — analiza istniejącego systemu

**Grafika:**

* Podział na „nowy system” vs „istniejący system”

---

## Slajd 7 — Socio-Technical Architecture

**Treść:**

* Architektura = kod + organizacja
* Zespoły wpływają na kod
* Prawo Conveya

**Grafika:**

* Diagram: struktura zespołów → struktura systemu

---

## Slajd 8 — Co pokazuje Context Map

**Treść:**

* Kto na kogo czeka
* Kto ma władzę
* Gdzie są bottlenecki

**Grafika:**

* Mapa z oznaczonymi zależnościami i blokadami

---

## Slajd 9 — Upstream vs Downstream

**Treść:**

* Upstream decyduje
* Downstream się dostosowuje

**Grafika:**

* Metafora rzeki (źródło → przepływ → ujście)

---

## Slajd 10 — Wpływ upstream

**Treść:**

* Zmiany upstream wpływają na downstream
* Awaria upstream = blokada downstream

**Grafika:**

* Jeden komponent blokujący kilka innych

---

## Slajd 11 — Tempo zespołów

**Treść:**

* Różne tempo deploymentów
* Wpływ na współpracę

**Grafika:**

* Oś czasu z różnymi częstotliwościami release

---

## Slajd 12 — Partnership

**Treść:**

* Wspólne planowanie
* Wspólne deploymenty
* Wysoka zależność

**Grafika:**

* Dwa zespoły połączone symetrycznie

---

## Slajd 13 — Kiedy Partnership się psuje

**Treść:**

* Różne tempo pracy
* Konflikty priorytetów

**Grafika:**

* Rozchodzące się strzałki / napięcie między zespołami

---

## Slajd 14 — Customer / Supplier

**Treść:**

* Jeden dostarcza, drugi konsumuje
* Negocjacje backlogu

**Grafika:**

* Strzałka od upstream do downstream

---

## Slajd 15 — Problem wielu downstream

**Treść:**

* Jeden upstream, wielu klientów
* Przeciążony backlog

**Grafika:**

* Jeden centralny komponent + wiele strzałek do niego

---

## Slajd 16 — Open Host Service

**Treść:**

* Publiczne API
* Wersjonowanie
* Jeden kontrakt dla wielu

**Grafika:**

* API jako centralny hub

---

## Slajd 17 — Published Language

**Treść:**

* Formalny kontrakt
* Spójny model komunikacji

**Grafika:**

* Schemat danych / kontrakt API

---

## Slajd 18 — Conformist

**Treść:**

* Brak wpływu na upstream
* Adaptacja do API

**Grafika:**

* Zewnętrzny system → nasz system

---

## Slajd 19 — Ryzyko Conformist

**Treść:**

* Vendor lock-in
* Zmiany wpływają na cały system

**Grafika:**

* System zależny od zewnętrznego API

---

## Slajd 20 — Anti-Corruption Layer

**Treść:**

* Warstwa tłumacząca
* Izolacja domeny

**Grafika:**

* Warstwa pośrednia między systemami

---

## Slajd 21 — Separate Ways

**Treść:**

* Brak integracji
* Niezależność zespołów

**Grafika:**

* Dwa niezależne systemy bez połączenia

---

## Slajd 22 — Shared Kernel

**Treść:**

* Współdzielony kod
* Wspólna odpowiedzialność

**Grafika:**

* Wspólna część między dwoma kontekstami

---

## Slajd 23 — Ryzyko Shared Kernel

**Treść:**

* Rosnący coupling
* Brak niezależności

**Grafika:**

* Rozrastający się wspólny obszar

---

## Slajd 24 — Co analizować

**Treść:**

* Łańcuchy zależności
* Bottlenecki
* Ryzyka integracyjne

**Grafika:**

* Mapa z zaznaczonymi problemami

---

## Slajd 25 — Wartość Context Mapping

**Treść:**

* Lepsze decyzje architektoniczne
* Widoczność problemów
* Język do rozmów biznesowych

**Grafika:**

* Mapa + ikony decyzji / komunikacji

---

## Slajd 26 — Pytanie końcowe

**Treść:**

* Czy ten wzorzec wybrałeś świadomie?
* Czy „tak wyszło”?

**Grafika:**

* Prosty znak zapytania / decyzja

---
