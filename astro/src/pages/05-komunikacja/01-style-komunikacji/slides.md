### Slajd 1

**Po jakich słowach wejście slajdu:**
„I dzisiaj o tym porozmawiamy.”

**Tytuł slajdu:**
Wyzwania komunikacji asynchronicznej

**Opis slajdu:**
Slajd otwierający temat lekcji. Powinien pokazać, że komunikacja asynchroniczna nie jest wyłącznie techniką integracji, ale decyzją architektoniczną z konsekwencjami.

Tekst na slajdzie:

* Asynchroniczność zwiększa elastyczność i odporność systemu
* Jednocześnie przenosi złożoność do obsługi błędów
* Kluczowe pytania architekta:

    * co się stanie przy awarii?
    * czy operacja może wykonać się więcej niż raz?
    * czy kolejność zdarzeń ma znaczenie?

**Grafika/diagram/animacja:**
Brak konieczności rozbudowanej grafiki. Wystarczy prosty układ: „zalety” po lewej, „koszty złożoności” po prawej.

---

### Slajd 2

**Po jakich słowach wejście slajdu:**
„Masz publishera, masz kolejkę, masz consumera”

**Tytuł slajdu:**
Model na papierze

**Opis slajdu:**
Slajd ma wesprzeć kontrast między prostym modelem teoretycznym a rzeczywistością produkcyjną.

Tekst na slajdzie:

* Publisher publikuje wiadomość
* Broker/kolejka przechowuje wiadomość
* Consumer pobiera i przetwarza wiadomość
* Diagram wygląda prosto, ale nie pokazuje awarii, retry, timeoutów i duplikatów

**Grafika/diagram/animacja:**
Prosty diagram liniowy:
`Publisher → Queue/Broker → Consumer`
Można dodać małą adnotację pod diagramem: „To jeszcze nie jest model produkcyjny”.

---

### Slajd 3

**Po jakich słowach wejście slajdu:**
„Pomyśl o płatności w sklepie online”

**Tytuł slajdu:**
Przykład: płatność online

**Opis slajdu:**
Slajd wprowadza konkretny scenariusz biznesowo-techniczny, na którym będzie oparty dalszy tok wyjaśnienia.

Tekst na slajdzie:

* Worker pobiera wiadomość z kolejki
* Wywołuje zewnętrzny system płatności, np. Stripe
* Otrzymuje status poprawnego obciążenia karty
* Zapisuje informację o zakończonej transakcji

**Grafika/diagram/animacja:**
Diagram sekwencji uproszczony:
`Queue → Payment Worker → Stripe → Database`
Na tym etapie bez błędu, tylko „happy path”.

---

### Slajd 4

**Po jakich słowach wejście slajdu:**
„i w tym momencie aplikacja padła”

**Tytuł slajdu:**
Krytyczne okno awarii

**Opis slajdu:**
Slajd powinien pokazać najważniejszy moment problemu: efekt uboczny już zaszedł, ale broker nie dostał jeszcze potwierdzenia.

Tekst na slajdzie:

* Płatność została wykonana
* Stan lokalny mógł zostać zapisany
* Consumer nie zdążył wysłać ACK
* Broker nadal nie ma pewności, że wiadomość została obsłużona

Adnotacja techniczna:

* Awaria może wynikać z braku pamięci, restartu poda, deploymentu albo ubicia procesu przez orkiestrator

**Grafika/diagram/animacja:**
Diagram z osią czasu:

1. Message received
2. Stripe charged
3. Local state saved
4. Crash
5. ACK not sent

Warto wyróżnić punkt „Crash before ACK”.

---

### Slajd 5

**Po jakich słowach wejście slajdu:**
„Kolejka ma zawsze jakiś ustalony timeout”

**Tytuł slajdu:**
Timeout i ponowne dostarczenie

**Opis slajdu:**
Slajd wyjaśnia mechanizm działania brokera po stronie infrastruktury.

Tekst na slajdzie:

* Consumer pobiera wiadomość i blokuje ją na czas przetwarzania
* Broker oczekuje na ACK przez określony timeout
* Brak ACK oznacza dla brokera: wiadomość nie została skutecznie przetworzona
* Wiadomość wraca do kolejki i może trafić do innego workera

**Grafika/diagram/animacja:**
Prosta animacja lub diagram stanu wiadomości:
`Available → Locked/In-flight → Timeout → Available again`

---

### Slajd 6

**Po jakich słowach wejście slajdu:**
„wysyłają drugi raz inny worker”

**Tytuł slajdu:**
Duplikat operacji biznesowej

**Opis slajdu:**
Slajd ma pokazać konsekwencję techniczną i biznesową retry bez idempotentności.

Tekst na slajdzie:

* Ta sama wiadomość może zostać obsłużona ponownie
* Drugi worker wykonuje ten sam scenariusz
* Zewnętrzne API może potraktować request jako nową operację
* Efekt: klient zostaje obciążony dwa razy

Adnotacja architektoniczna:

* Problem nie kończy się w infrastrukturze — przenosi się na klienta, support i finanse

**Grafika/diagram/animacja:**
Diagram porównujący dwa przebiegi:

* Pierwsze przetworzenie: `Charge OK → Crash before ACK`
* Drugie przetworzenie: `Redelivery → Charge again`

---

### Slajd 7

**Po jakich słowach wejście slajdu:**
„I czy to jest bug w kodzie? Najczęściej nie.”

**Tytuł slajdu:**
To nie bug — to kontrakt brokera

**Opis slajdu:**
Slajd powinien ugruntować najważniejszą zmianę perspektywy: broker nie gwarantuje dokładnie jednego wykonania efektu biznesowego.

Tekst na slajdzie:

* Worker mógł wykonać poprawną logikę
* Broker mógł działać zgodnie ze specyfikacją
* Mimo tego efekt biznesowy wystąpił dwa razy
* Architektura musi zakładać duplikaty

**Grafika/diagram/animacja:**
Slajd porządkujący, bez konieczności diagramu. Można zastosować mocne hasło na środku:
„Correct infrastructure ≠ exactly-once business effect”.

---

### Slajd 8

**Po jakich słowach wejście slajdu:**
„Wiadomość dotrze raz, przynajmniej raz, a może więcej?”

**Tytuł slajdu:**
At-least-once delivery

**Opis slajdu:**
Slajd definiuje gwarancję dostarczania, która jest podstawą dalszej części lekcji.

Tekst na slajdzie:

* Broker gwarantuje: wiadomość zostanie dostarczona co najmniej raz
* Nie gwarantuje: wiadomość zostanie przetworzona dokładnie raz
* Duplikaty są normalnym scenariuszem pracy systemu
* Handler musi być przygotowany na wielokrotne wywołanie

Adnotacja:

* Dotyczy typowych rozwiązań kolejkowych i event-driven, np. RabbitMQ, Kafka, Service Bus

**Grafika/diagram/animacja:**
Prosty wykres/diagram:
`1 message published → 1..N deliveries → handler`

---

### Slajd 9

**Po jakich słowach wejście slajdu:**
„idempotentność to jest warunek brzegowy”

**Tytuł slajdu:**
Idempotentność jako wymaganie

**Opis slajdu:**
Slajd pokazuje idempotentność jako zasadę projektową, nie jako optymalizację.

Tekst na slajdzie:

* Handler może zostać uruchomiony wiele razy
* Wynik biznesowy powinien pozostać taki sam
* Operacje z efektami ubocznymi wymagają szczególnej ochrony
* Brak idempotentności = ukryte ryzyko produkcyjne

Adnotacja architektoniczna:

* W systemach event-driven idempotentność powinna być traktowana jak wymaganie niefunkcjonalne

**Grafika/diagram/animacja:**
Można pokazać prostą zależność:
`Duplicate delivery → repeated handler execution → same final state`

---

### Slajd 10

**Po jakich słowach wejście slajdu:**
„Albo tworzysz tabelę procesy message z Message ID”

**Tytuł slajdu:**
Deduplication store

**Opis slajdu:**
Slajd wyjaśnia pierwszy praktyczny sposób obsługi duplikatów: zapamiętywanie przetworzonych wiadomości.

Tekst na slajdzie:

* Każda wiadomość ma unikalne Message ID
* Handler sprawdza, czy Message ID było już przetworzone
* Jeśli tak — pomija ponowne wykonanie efektu ubocznego
* Jeśli nie — przetwarza wiadomość i zapisuje Message ID jako obsłużone

Adnotacja:

* Kluczowe jest atomowe powiązanie logiki biznesowej z zapisem informacji o przetworzeniu

**Grafika/diagram/animacja:**
Diagram decyzyjny:
`Receive message → Check processed_messages → Seen? → Skip / Process`

---

### Slajd 11

**Po jakich słowach wejście slajdu:**
„wysyłasz idempotency key w nagłówkach”

**Tytuł slajdu:**
Idempotency key

**Opis slajdu:**
Slajd pokazuje drugi sposób ochrony przed duplikacją — szczególnie przy integracji z zewnętrznymi API.

Tekst na slajdzie:

* Dla operacji wysyłany jest stabilny idempotency key
* Zewnętrzny system rozpoznaje powtórzony request
* Ta sama operacja nie zostaje wykonana drugi raz
* Szczególnie ważne przy płatnościach i innych operacjach z kosztownym efektem ubocznym

**Grafika/diagram/animacja:**
Diagram:
`Worker → API request + Idempotency-Key → Payment Provider`
Pod spodem:
`same key = same operation, not a new charge`

---

### Slajd 12

**Po jakich słowach wejście slajdu:**
„Kolejnym z podejść jest to, że Biznesowo Twój handler jest impotentny”

**Tytuł slajdu:**
Idempotentna logika biznesowa

**Opis slajdu:**
Slajd uzupełnia poprzednie wzorce o projektowanie handlera tak, aby wielokrotne wykonanie nie zmieniało końcowego rezultatu.

Tekst na slajdzie:

* Handler może zostać wykonany kilka razy
* Końcowy stan systemu pozostaje taki sam
* Przykładowe podejścia:

    * upsert zamiast insert
    * ustawienie statusu zamiast dodawania kolejnego efektu
    * logika odporna na powtórzenia
* Celem jest brak dodatkowych skutków ubocznych przy duplikacie

**Grafika/diagram/animacja:**
Porównanie dwóch podejść:

* Nieidempotentne: `execute + execute = double effect`
* Idempotentne: `execute + execute = same final state`

---

### Slajd 13

**Po jakich słowach wejście slajdu:**
„Drugie wyzwanie”

**Tytuł slajdu:**
Drugie wyzwanie: kolejność

**Opis slajdu:**
Slajd otwiera nowy segment tematyczny i oddziela problem duplikatów od problemu kolejności wiadomości.

Tekst na slajdzie:

* Broker nie musi gwarantować globalnej kolejności przetwarzania
* Kolejność publikacji nie zawsze oznacza kolejność obsługi
* Problem ujawnia się szczególnie przy wielu consumerach, retry i opóźnieniach
* Architekt musi określić, gdzie kolejność jest wymagana biznesowo

**Grafika/diagram/animacja:**
Slajd przejściowy, może zawierać prostą ikonę kolejki i komunikat:
`Delivery order ≠ processing order`

---

### Slajd 14

---

## Slajd 15

**Wejście po słowach:**
„**Drugie wyzwanie, której gwarancji nie daje Ci broker to globalna kolejność wiadomości.**”

**Tytuł:**
**Brak globalnej kolejności**

**Tekst na slajdzie:**

* Broker nie gwarantuje globalnej kolejności przetwarzania wiadomości
* Eventy mogą zostać opublikowane w jednej kolejności, ale obsłużone w innej
* Przyczyny: wielu consumerów, retry, opóźnienia, różne instancje

**Opis / rola slajdu:**
Slajd otwiera temat głównego problemu: w komunikacji asynchronicznej kolejność wysłania nie oznacza kolejności przetworzenia. Ma ustawić kontekst przed przykładami `PaymentInitialized → PaymentPaid → PaymentRefunded` oraz `OrderConfirmed` przed `OrderPlaced`.

**Grafika / diagram / animacja:**
Prosty diagram:
`Publisher → Queue → Consumer A / Consumer B`
Z trzema eventami, które wychodzą w kolejności `1, 2, 3`, ale do consumerów trafiają jako `2, 1, 3`.

---

## Slajd 16

**Wejście po słowach:**
„**Konsument zobaczy Order Confirm, zanim dotrze do niego Order Places.**”

**Tytuł:**
**Out-of-order w praktyce**

**Tekst na slajdzie:**

* `OrderConfirmed` przychodzi przed `OrderPlaced`
* Consumer nie zna jeszcze zamówienia
* Efekt: błąd, retry, opóźnienie, przypadkowa naprawa po czasie
* Problem techniczny staje się problemem procesu biznesowego

**Opis / rola slajdu:**
Ten slajd pokazuje praktyczny skutek braku kolejności. Nie chodzi już tylko o mechanikę brokera, ale o konsekwencję domenową: system próbuje wykonać operację na stanie, którego jeszcze nie ma.

**Grafika / diagram / animacja:**
Mała oś czasu z dwoma wariantami:

Oczekiwane:
`OrderPlaced → OrderConfirmed`

Rzeczywiste:
`OrderConfirmed → error/retry → OrderPlaced → retry OK`

---

## Slajd 17

**Wejście po słowach:**
„**Gwarancją kolejnosci jest tylko to, tylko to co jest w obrębie danej partycji.**”

**Tytuł:**
**Kolejność w partycji**

**Tekst na slajdzie:**

* Gwarancja kolejności działa tylko w obrębie tej samej partycji
* Eventy dla jednej encji powinny mieć ten sam `partition key`
* Dla zamówień naturalnym kandydatem bywa `OrderId`

**Opis / rola slajdu:**
Slajd przeprowadza odbiorcę od problemu do pierwszego rozwiązania architektonicznego: partycjonowania. Ma jasno pokazać, że broker może dawać pewne gwarancje, ale tylko lokalnie — w ramach partycji, nie globalnie.

**Grafika / diagram / animacja:**
Diagram z trzema partycjami:

* Partition 1: `OrderId=123`: `Placed → Paid → Confirmed`
* Partition 2: `OrderId=456`: inne eventy
* Partition 3: `OrderId=789`: inne eventy

---

## Slajd 18

**Wejście po słowach:**
„**W przypadku zamówień wybór partition key to architektoniczna decyzja.**”

**Tytuł:**
**Partition key: trade-off**

**Tekst na slajdzie:**

* Zbyt szeroki klucz: hot partition, słabe skalowanie
* Zbyt wąski klucz: brak gwarancji kolejności tam, gdzie jest potrzebna
* Dobór klucza musi wynikać z reguł biznesowych
* To decyzja, która często zostaje z systemem na lata

**Opis / rola slajdu:**
Slajd ma podkreślić wagę decyzji architektonicznej. Nie pokazuje partycjonowania jako prostego ustawienia technicznego, tylko jako wybór wpływający na skalowanie, poprawność biznesową i koszty utrzymania.

**Grafika / diagram / animacja:**
Tabela porównawcza:

| Wybór klucza   | Skutek                     |
| -------------- | -------------------------- |
| Region / temat | Ryzyko hot partition       |
| GUID per event | Brak kolejności biznesowej |
| `OrderId`      | Kolejność per zamówienie   |

---

## Slajd 19

**Wejście po słowach:**
„**Druga droga jeśli partycjonowanie nie wchodzi w grę, nie pasuje do danego problemu...**”

**Tytuł:**
**Consumer odporny na kolejność**

**Tekst na slajdzie:**

* Consumer może obsługiwać eventy w dowolnej kolejności
* Potrzebne mechanizmy:

  * wersja stanu
  * sprawdzenie poprzednika
  * kolejka oczekujących
* Większa elastyczność, ale wyższy koszt utrzymania

**Opis / rola slajdu:**
Slajd pokazuje alternatywę dla partycjonowania. Ważne, żeby odbiorca zrozumiał trade-off: można przenieść odpowiedzialność za kolejność do consumera, ale wtedy rośnie złożoność implementacji i testowania.

**Grafika / diagram / animacja:**
Prosty schemat:

`Event arrives → Czy poprzedni stan istnieje? → TAK: przetwarzaj / NIE: odłóż do pending`

---

## Slajd 20

**Wejście po słowach:**
„**Klasyczny problem. Chcesz coś zapisać w Chandler do bazy danych i opublikować event?**”

**Tytuł:**
**Problem dwóch zapisów**

**Tekst na slajdzie:**

* Zapis stanu w bazie danych
* Publikacja eventu do brokera
* Awaria jednego z kroków = niespójność
* Ryzyko: proces biznesowy utknie albo pójdzie błędną ścieżką

**Opis / rola slajdu:**
Ten slajd wprowadza problem, który prowadzi do Outbox Pattern. Ma pokazać, że zapis do bazy i wysłanie eventu to dwa osobne efekty uboczne, których nie da się traktować naiwnie jako jednej bezpiecznej operacji.

**Grafika / diagram / animacja:**
Diagram z dwoma gałęziami:

`Handler → Database`
`Handler → Broker`

Z oznaczonymi punktami awarii:

* DB zapisany, event niewysłany
* Event wysłany, DB niezaktualizowana

---

## Slajd 21

**Wejście po słowach:**
„**Jakie jest na to rozwiązanie? Nie publikujesz bezpośrednio do brokera.**”

**Tytuł:**
**Outbox Pattern**

**Tekst na slajdzie:**

* Event zapisywany do tabeli `Outbox`
* W tej samej transakcji co zmiana biznesowa
* Osobny proces publikuje eventy do brokera
* Publikacja jest ponawiana aż do skutku

**Opis / rola slajdu:**
Slajd wyjaśnia wzorzec Outbox jako rozwiązanie problemu dwóch zapisów. Powinien wspierać narrację o tym, że zmiana biznesowa i informacja o evencie commitują się razem, a publikacja do brokera może być wykonana później.

**Grafika / diagram / animacja:**
Diagram sekwencji:

`Handler`
→ transakcja: `Business table + Outbox table`
→ `Outbox Publisher`
→ `Broker`

Można zaznaczyć:
`commit razem` oraz `retry publikacji`.

---

## Slajd 22

**Wejście po słowach:**
„**Inbox Pattern to to samo, ale po drugiej stronie odbierasz wiadomość...**”

**Tytuł:**
**Inbox Pattern**

**Tekst na slajdzie:**

* Odbierana wiadomość trafia najpierw do `Inbox`
* `MessageId` jako unikalny identyfikator
* Duplikat zostaje odrzucony przez constraint
* Handler wykonuje logikę domenową tylko raz

**Opis / rola slajdu:**
Slajd pokazuje Inbox jako mechanizm idempotentności po stronie consumera. Ma podkreślić, że odporność na duplikaty nie powinna zależeć wyłącznie od dyscypliny programisty, ale być częścią protokołu przetwarzania wiadomości.

**Grafika / diagram / animacja:**
Schemat:

`Message → Inbox(MessageId unique) → Handler → Domain change`

Dodatkowo obok:
`Duplicate MessageId → rejected / ignored`

---

## Slajd 23

**Wejście po słowach:**
„**Trzeci wzorzec i też technologia, która jest wbudowana w kolejki to Deadletter.**”

**Tytuł:**
**Dead Letter Queue**

**Tekst na slajdzie:**

* Zatruta wiadomość nie blokuje głównej kolejki
* Po kilku nieudanych próbach trafia do DLQ
* Główny pipeline działa dalej
* DLQ wymaga triage’u: alert, dashboard, retry albo drop

**Opis / rola slajdu:**
Slajd ma pokazać Dead Letter Queue jako mechanizm izolacji problematycznych wiadomości. Ważne jest też podkreślenie pułapki ze skryptu: sama DLQ nie rozwiązuje problemu, jeśli nikt jej nie monitoruje.

**Grafika / diagram / animacja:**
Diagram:

`Main Queue → Consumer → fail/retry → DLQ`

Obok DLQ trzy akcje operacyjne:

* sprawdź
* napraw
* retry/drop

---

## Slajd 24

**Wejście po słowach:**
„**Teraz najtrudniejsza część. Debugowanie.**”

**Tytuł:**
**Debugowanie asynchroniczne**

**Tekst na slajdzie:**

* Wiadomość żyje poza jednym procesem
* Może być w brokerze, retry, consumerze albo DLQ
* Stan systemów może być chwilowo niespójny
* Potrzebne standardy troubleshootingu

**Opis / rola slajdu:**
Slajd zmienia perspektywę z projektowania na utrzymanie systemu. Ma pokazać, że debugowanie asynchronicznego flow jest trudniejsze niż klasyczny stack trace w komunikacji synchronicznej.

**Grafika / diagram / animacja:**
Mapa przepływu:

`Publisher → Broker → Retry → Consumer → DLQ`

Z ikonami miejsc, w których trzeba szukać informacji:

* logi
* metryki
* trace
* stan bazy
* wiadomość w kolejce

---

## Slajd 25

**Wejście po słowach:**
„**Jedną z takich istotnych rzeczy, które warto mieć z tyłu głowy projektując takie flow zdarzeniowe, to to, ażeby zapewnić im poprawną obserwowalność.**”

**Tytuł:**
**TraceId w eventach**

**Tekst na slajdzie:**

* Propaguj `TraceId` i `ParentId` w metadanych wiadomości
* Łącz HTTP, kolejki i handlery w jeden trace
* Loguj `TraceId` podczas przetwarzania eventu
* Cel: widoczna pełna ścieżka procesu biznesowego

**Opis / rola slajdu:**
Slajd wspiera fragment o observability. Powinien pokazać, że kolejki nie mogą być „czarną dziurą” między requestem HTTP a dalszymi handlerami. Trace powinien przechodzić przez eventy tak samo jak przez komunikację synchroniczną.

**Grafika / diagram / animacja:**
Diagram rozproszonego trace’a:

`HTTP request`
→ `Publish event`
→ `Queue`
→ `Consumer A`
→ `Publish next event`
→ `Consumer B`

Nad całością wspólny:
`TraceId = abc-123`

---

## Slajd 26

**Wejście po słowach:**
„**Jeszcze jedna tutaj istotna sprawa, jeśli chodzi o komunikację asynchroniczną.**”

**Tytuł:**
**Backlog i alerting**

**Tekst na slajdzie:**

* Consumer może nie nadążać z przetwarzaniem
* Kluczowa metryka: liczba aktywnych wiadomości
* Spike jest akceptowalny, stały przyrost jest problemem
* Alerty powinny obejmować główną kolejkę i DLQ

**Opis / rola slajdu:**
Slajd zamyka część operacyjną. Ma podkreślić, że poprawnie zaprojektowana komunikacja asynchroniczna wymaga monitorowania pojemności i tempa przetwarzania, a nie tylko poprawnego kodu handlera.

**Grafika / diagram / animacja:**
Wykres liniowy:

* krótki spike, który wraca do zera
* drugi wykres / druga linia: backlog stale rośnie i przekracza próg alertu

Na slajdzie można dodać prosty próg:
`Queue depth > threshold → alert`

---