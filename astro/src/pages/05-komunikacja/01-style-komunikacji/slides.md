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

**Po jakich słowach wejście slajdu:**
„Payment Initialize Payment Paid payment Refound”

**Tytuł slajdu:**
Kolejność zdarzeń płatności

**Opis slajdu:**
Slajd pokazuje konkretny przykład domenowy, w którym kolejność zdarzeń ma znaczenie.

Tekst na slajdzie:

* PaymentInitialized
* PaymentPaid
* PaymentRefunded

Adnotacja:

* To sekwencja logiczna z punktu widzenia domeny
* System asynchroniczny nie gwarantuje automatycznie, że tak zostanie przetworzona

**Grafika/diagram/animacja:**
Oś czasu z poprawną kolejnością zdarzeń:
`Initialized → Paid → Refunded`
Obok warto pokazać alternatywny, błędny scenariusz przetwarzania:
`Refunded → Paid → Initialized`

---

### Slajd 15

**Po jakich słowach wejście slajdu:**
„Może podebrać jedną wiadomość wcześniej, inny consumer”

**Tytuł slajdu:**
Skąd bierze się zmiana kolejności

**Opis slajdu:**
Slajd wyjaśnia mechanizmy techniczne prowadzące do przetwarzania out-of-order.

Tekst na slajdzie:

* Równoległe instancje consumerów
* Różne czasy przetwarzania wiadomości
* Retry pojedynczej wiadomości
* Opóźnienia sieciowe lub infrastrukturalne
* Czasowa niedostępność zależności

**Grafika/diagram/animacja:**
Diagram z trzema wiadomościami trafiającymi do różnych consumerów:
`M1 → Consumer A`, `M2 → Consumer B`, `M3 → Consumer C`
Każdy consumer kończy w innym czasie, co zmienia kolejność efektów.

---

### Slajd 16

**Po jakich słowach wejście slajdu:**
„To jest jedna z największych wyzwań jeśli chodzi o komunikacja asynchroniczną”

**Tytuł slajdu:**
Konsekwencje out-of-order

**Opis slajdu:**
Slajd podsumowuje drugi problem w sposób architektoniczny: wiadomości mogą przychodzić w dowolnej kolejności i na różnych instancjach consumerów.

Tekst na slajdzie:

* Zdarzenia mogą dotrzeć później niż zdarzenia od nich zależne
* Różne instancje consumerów mogą widzieć różne fragmenty procesu
* Retry może przesunąć starsze zdarzenie na koniec
* Model domenowy musi uwzględniać brak globalnej kolejności

Adnotacja końcowa:

* Asynchroniczność wymaga projektowania pod duplikaty i nieuporządkowane dostarczenie

**Grafika/diagram/animacja:**
Slajd podsumowujący z dwoma filarami:

* At-least-once → duplikaty
* Brak globalnej kolejności → out-of-order
