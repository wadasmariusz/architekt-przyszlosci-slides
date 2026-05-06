# Prezentacja: Event-Driven Architecture — lekcja dla architektów oprogramowania

Poniżej znajdziesz propozycję podziału materiału na slajdy wraz z opisami treści.

---

## SLAJD 1 — Slajd otwierający

**Tytuł:** Event-Driven Architecture
**Podtytuł:** Jak projektować systemy, które reagują, zamiast pytać
**Cel slajdu:** Zaintrygować temat i zapowiedzieć, czego dotyczy lekcja.
**Treść:**
- Architektura sterowana zdarzeniami w praktyce
- Dla architektów oprogramowania
- Od teorii do realnych pułapek wdrożeniowych

[Warto dodać grafikę: symboliczny przepływ zdarzeń — jeden punkt rozsyłający sygnał do wielu odbiorców]

---

## SLAJD 2 — Czym jest EDA

**Tytuł:** Co to znaczy „sterowana zdarzeniami"
**Cel slajdu:** Wprowadzić definicję EDA jednym, prostym ujęciem.
**Treść (hasło + rozwinięcie):**
> System, w którym najważniejszy jest fakt, że *coś się wydarzyło*.

- Zdarzenie = informacja o zmianie stanu lub wykonaniu akcji
- Producent publikuje, broker przenosi, konsument reaguje
- Producent i konsument **nie muszą się znać**

[Warto pokazać jako schemat: Producer → Event Broker → wielu Consumerów]

---

## SLAJD 3 — Przykłady zdarzeń z życia

**Tytuł:** Jak wyglądają zdarzenia w praktyce
**Cel slajdu:** Uzmysłowić słuchaczom, że zdarzenia to nie abstrakcja.
**Treść (lista przykładów):**
- `ReservationPlaced` — klient zarezerwował samochód
- `PaymentConfirmed` — płatność za wynajem zakończona sukcesem
- `VehicleHandedOver` — pojazd wydany klientowi
- `ReservationStatusChanged` — zmiana statusu rezerwacji

[Warto pokazać na przykładzie: scenariusz wypożyczalni samochodów jako wątek przewodni całej prezentacji]

---

## SLAJD 4 — Jaki problem rozwiązuje EDA

**Tytuł:** Problem ciasnych powiązań
**Cel slajdu:** Pokazać, dlaczego klasyczne podejście request-response staje się niewygodne.
**Treść (porównanie):**

| Klasyczne request-response | Event-Driven |
|---|---|
| Usługa musi wiedzieć, kogo wywołać | Publikuje fakt do brokera |
| Pyta cyklicznie: „czy coś się zmieniło?" | Reaguje, gdy zmiana faktycznie nastąpi |
| Trudna obsługa ruchu skokowego | Naturalny fan-out i buforowanie |
| Zmiana = przeróbka źródła | Zmiana = nowy konsument |

[Warto pokazać animacją: przejście od plątaniny strzałek między usługami do uporządkowanego przepływu przez broker]

---

## SLAJD 5 — Push zamiast pull

**Tytuł:** Od „pytania" do „reagowania"
**Cel slajdu:** Pokazać zmianę modelu myślenia.
**Treść (hasło + rozwinięcie):**
> Nie pytaj. Bądź powiadomiony.

- Polling = koszty, opóźnienia, niepotrzebne obciążenie
- Push-based = informacja dostarczana w momencie zmiany
- Mniej pracy, mniej zależności, szybsza reakcja

---

## SLAJD 6 — Sedno EDA: trzy wzorce zdarzeń

**Tytuł:** Trzy sposoby na zdarzenie (wg Martina Fowlera)
**Cel slajdu:** Pokazać, że „zdarzenie" to nie jeden uniwersalny format.
**Treść (3 kolumny / 3 bloki):**

1. **Event Notification** — minimalna informacja (np. ID), odbiorca dociąga szczegóły
2. **Event-Carried State Transfer** — pełny stan w samym zdarzeniu, brak powrotów do źródła
3. **Event Sourcing** — zdarzenia są źródłem prawdy, stan odtwarzany z historii

[Warto pokazać jako porównanie: tabela z kolumnami „ile danych w zdarzeniu", „czy konsument musi pytać źródło", „złożoność"]

---

## SLAJD 7 — Co naprawdę zmienia EDA

**Tytuł:** Asynchroniczność = swoboda rozwoju
**Cel slajdu:** Podkreślić istotę luźnego sprzężenia.
**Treść (3 punkty):**
- Producent publikuje fakt i nie czeka na odpowiedź
- Często **nie wie**, kto słucha
- Nowe funkcje = nowy konsument, bez ruszania źródła

---

## SLAJD 8 — Przykład praktyczny: rezerwacja samochodu

**Tytuł:** `ReservationPlaced` — jedno zdarzenie, pięć reakcji
**Cel slajdu:** Pokazać EDA na konkretnym, realnym scenariuszu.
**Treść (sekwencja równoległa):**

Klient rezerwuje pojazd → publikacja `ReservationPlaced` → równolegle:
- Flota: blokuje dostępność samochodu
- Płatności: autoryzuje transakcję
- Ubezpieczenia: aktywuje polisę na okres wynajmu
- Powiadomienia: wysyła e-mail z potwierdzeniem
- Analityka: zapisuje dane do raportowania

> Nowy wymóg (np. punkty lojalnościowe)? Wystarczy dopiąć kolejnego konsumenta.

[Warto pokazać jako schemat / fan-out: jedno zdarzenie rozchodzące się do pięciu niezależnych usług]

---

## SLAJD 9 — Choreography vs Orchestration

**Tytuł:** Kto dyryguje przepływem?
**Cel slajdu:** Pokazać dwa style koordynacji procesów w EDA.
**Treść (porównanie):**

| Choreography | Orchestration |
|---|---|
| Każda usługa sama wie, na co reagować | Centralny koordynator (np. saga) |
| Większa autonomia usług | Centralizacja logiki procesowej |
| Trudniej śledzić cały przepływ | Łatwiej wymusić kolejność i kompensacje |
| Zero punktów zależności | Dodatkowy punkt zależności |

> W praktyce wiele systemów łączy oba podejścia na różnych poziomach.

[Warto pokazać jako dwa diagramy obok siebie: chmura usług reagujących same vs centralny dyrygent]

---

## SLAJD 10 — Modele komunikacji

**Tytuł:** Pub-Sub vs Event Streaming
**Cel slajdu:** Pokazać różnicę między dwoma popularnymi modelami.
**Treść (porównanie):**

| Publish-Subscribe | Event Streaming |
|---|---|
| Broker rozsyła do subskrybentów | Trwały, uporządkowany log |
| Brak historii — nowy subskrybent „nie zobaczy" wcześniejszych zdarzeń | Replay, ponowne przetwarzanie po awarii |
| AWS SNS, RabbitMQ fanout | Apache Kafka, Kinesis, Pulsar |

> Granica się zaciera — Kafka z consumer groups daje pub-sub na trwałym logu.

---

## SLAJD 11 — Backpressure i odporność

**Tytuł:** Co, jeśli konsument nie nadąża?
**Cel slajdu:** Wprowadzić mechanizmy chroniące system asynchroniczny.
**Treść (4 punkty):**
- **Backpressure** — konsument kontroluje tempo pobierania zdarzeń
- **Retry** — ponowne próby przy błędach
- **Idempotencja** — bezpieczne ponowne dostarczenie tego samego zdarzenia
- **Dead-letter queue** — przechwytywanie zdarzeń niedostarczonych

[Warto pokazać animacją: kolejka, konsument zwalniający tempo, zdarzenia trafiające do DLQ]

---

## SLAJD 12 — Zalety EDA

**Tytuł:** Co realnie zyskujemy
**Cel slajdu:** Zebrać główne korzyści w jeden czytelny slajd.
**Treść (5 punktów):**
- Luźne sprzężenie → niezależne wdrożenia i skalowanie
- Odporność — awaria jednego konsumenta nie blokuje całości
- Reakcja w czasie rzeczywistym lub bliskim rzeczywistemu
- Brak kosztów pollingu
- Łatwe rozszerzanie systemu o nowe scenariusze biznesowe

---

## SLAJD 13 — Wady i koszty

**Tytuł:** Za co płacimy
**Cel slajdu:** Uczciwie pokazać, że EDA nie jest „za darmo".
**Treść (lista wyzwań):**
- Większa złożoność systemu rozproszonego
- **Eventual consistency** zamiast natychmiastowej spójności
- Problemy z kolejnością zdarzeń i duplikatami
- Trudniejsza obsługa błędów w świecie asynchronicznym
- Wymóg dojrzałości projektowej i operacyjnej

---

## SLAJD 14 — Observability: największe wyzwanie operacyjne

**Tytuł:** Jak debugować kaskadę zdarzeń?
**Cel slajdu:** Uświadomić, że bez tracingu EDA staje się nieczytelna.
**Treść (hasło + rozwinięcie):**
> Jeden fakt biznesowy = kaskada zdarzeń w wielu usługach.

- **Correlation ID** propagowany w nagłówkach każdego zdarzenia
- Distributed tracing: OpenTelemetry, Jaeger, Zipkin
- Projektuj propagację kontekstu **od pierwszego dnia**, nie później

[Warto pokazać jako schemat: jedno żądanie → łańcuch zdarzeń z tym samym correlation ID przebiegający przez wiele usług]

---

## SLAJD 15 — Zarządzanie schematami zdarzeń

**Tytuł:** Zdarzenie to kontrakt
**Cel slajdu:** Zwrócić uwagę na kompatybilność i wersjonowanie.
**Treść (4 punkty):**
- Schemat zdarzenia = umowa między producentem a konsumentem
- Konsumenci muszą obsłużyć starą **i** nową wersję
- **Schema Registry** — Confluent, AWS Glue
- Strategie kompatybilności: backward, forward, full

[Warto pokazać na przykładzie: dodanie nowego pola do `ReservationPlaced` bez psucia starych konsumentów]

---

## SLAJD 16 — Najczęstsze błędy

**Tytuł:** Czego unikać przy wdrażaniu EDA
**Cel slajdu:** Skondensować typowe pułapki.
**Treść (lista):**
- Projektowanie EDA tak, jakby był synchroniczny
- Brak idempotencji → np. dwa e-maile, podwójne obciążenie karty
- **Dual write** — zapis do bazy i osobno publikacja zdarzenia bez atomowości
- Błędne założenia o kolejności zdarzeń
- Brak dead-letter queue
- Jeden „wielki" konsument sterujący wszystkim
- Mylenie EDA z event sourcingiem

---

## SLAJD 17 — Wzorzec: Transactional Outbox

**Tytuł:** Jak rozwiązać problem dual write
**Cel slajdu:** Pokazać konkretne rozwiązanie najtrudniejszego z błędów.
**Treść (sekwencja kroków):**

```
[Aplikacja]
   │
   ▼  (jedna transakcja DB)
[Tabela stanu]  +  [Tabela outbox]
                         │
                         ▼
                   [Relay / CDC np. Debezium]
                         │
                         ▼
                     [Broker]
```

- Zdarzenie i zmiana stanu zapisywane **w tej samej transakcji**
- Albo oba zapisy się udają, albo żaden
- Osobny proces odczytuje outbox i publikuje do brokera

[Warto pokazać jako diagram / proces — to slajd kluczowy dla architektów]

---

## SLAJD 18 — Kiedy wybrać EDA

**Tytuł:** Gdzie EDA naprawdę błyszczy
**Cel slajdu:** Pomóc słuchaczowi podjąć decyzję architektoniczną.
**Treść (porównanie ✅ / ❌):**

**Wybierz EDA, gdy:**
- system ma reagować szybko na zmiany
- ruch jest duży lub nierównomierny
- jedno zdarzenie ma trafić do wielu odbiorców
- zespoły rozwijają komponenty niezależnie
- to IoT, streaming danych, mikroserwisy

**Pomyśl dwa razy, gdy:**
- prosty CRUD, mała aplikacja
- niewiele integracji
- brak realnej potrzeby reakcji w czasie rzeczywistym

> EDA dla prostego CRUD-a = przerost formy nad treścią.

---

## SLAJD 19 — Pytanie do sali

**Tytuł:** A w Waszym systemie?
**Cel slajdu:** Aktywizacja słuchaczy przed podsumowaniem.
**Treść (pytania):**
- Gdzie pojawia się polling, którego nie potrzebujecie?
- Gdzie jeden moduł musi „wiedzieć o wszystkich"?
- Czy zmiana biznesowa wymaga przebudowy rdzenia?

[Warto dodać grafikę: pole na notatki / krótka pauza dla dyskusji]

---

## SLAJD 20 — Slajd końcowy / podsumowanie

**Tytuł:** Event-Driven Architecture w pigułce
**Cel slajdu:** Domknąć narrację i zostawić słuchacza z jasnym przekazem.
**Treść (4 wnioski):**
- EDA = reakcja na fakty, nie bezpośrednie wywołania
- Siła: luźne sprzężenia, skalowalność, otwartość na rozwój
- Cena: asynchroniczność, eventual consistency, idempotencja
- Sukces zależy od: **observability**, **schematów**, **świadomego wyboru choreografii vs orkiestracji**

> Dobrze zaprojektowana EDA przyspiesza rozwój produktu.
> Źle wdrożona — zamienia się w trudny do diagnozowania układ zależności.


---

## 🎯 Miejsca, gdzie szczególnie warto urozmaicić przekaz

1. **Slajd 8 (przykład rezerwacji samochodu)** — to naturalne miejsce na **animację fan-out**: jedno zdarzenie rozchodzące się równolegle do pięciu konsumentów. Najlepiej zapada w pamięć i staje się punktem odniesienia dla reszty prezentacji.

2. **Slajd 17 (Transactional Outbox)** — to slajd techniczny, który warto pokazać jako **rozbudowany diagram procesu** lub krótki fragment kodu/pseudokodu. Architekci najczęściej wracają właśnie do tego wzorca po lekcji.

3. **Slajd 14 (Observability)** — warto pokazać **realny przykład correlation ID** wędrującego przez nagłówki kilku zdarzeń w różnych usługach. To temat, który wielu zespołom wydaje się abstrakcyjny, dopóki nie zobaczą konkretnego przepływu.