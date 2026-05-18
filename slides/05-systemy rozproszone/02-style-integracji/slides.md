---

**Slajd 0**

**Tytuł:** Style integracji modułów

**Adnotacja:** Minimalistyczny slajd z tytułem

---

**Slajd 1**

**Wejście po słowach:** *„Jak właściwie te moduły mają ze sobą gadać?"*

**Tytuł:** Cztery style integracji modułów

**Opis:** Slajd tytułowo-porządkujący otwierający lekcję. Zawiera cztery nazwy stylów integracji ułożone w kolumnie lub wierszu: **File Transfer**, **Shared Database**, **Direct Call**, **Messaging**. Przy każdym krótka etykieta jednozdaniowa — np. „plik jako medium", „wspólny schemat", „synchroniczne wywołanie", „zdarzenia przez brokera". Pod spodem jedno zdanie-teza lekcji: *„Każdy z tych stylów odpowiada na to samo pytanie — ale nie w tej samej sytuacji."*

**Adnotacja:** Diagram — cztery ikony/bloki reprezentujące style, ułożone w linii lub siatce 2×2, bez strzałek między nimi (na tym etapie nie porównujemy, tylko nazywamy).

---

**Slajd 2**

**Wejście po słowach:** *„Jak to działa? Jeden moduł wypluwa dane do pliku. Drugi moduł ten plik czyta."*

**Tytuł:** File Transfer — mechanizm działania

**Opis:** Slajd wyjaśniający przepływ danych w stylu File Transfer. Pokazuje schemat: Moduł A → zapisuje plik (CSV / XML / JSON / Parquet) → lokalizacja współdzielona (SFTP, dysk, bucket) → Moduł B czyta plik. Kluczowy element: oś czasu pod spodem pokazująca, że zapis i odczyt nie muszą nastąpić w tym samym momencie (np. „eksport: 03:00", „import: 08:00"). Brak strzałki zwrotnej — komunikacja jednokierunkowa, brak potwierdzenia odbioru.

**Adnotacja:** Diagram przepływu z osią czasu.

---

**Slajd 3**

**Wejście po słowach:** *„łatwo wpaść w pułapkę myślenia, że File to zero couplingu. To nieprawda."*

**Tytuł:** Coupling w File Transfer — na czym opiera się zależność

**Opis:** Slajd z dwoma kolumnami. Lewa kolumna: **„Co jest współdzielone"** — format pliku, schemat/nazwy kolumn, kodowanie znaków, lokalizacja pliku, harmonogram. Prawa kolumna: **„Czego NIE trzeba współdzielić"** — język programowania, baza danych, środowisko uruchomieniowe, dostępność w czasie rzeczywistym. Na dole slajdu wyróżnione zdanie: *„Jeden moduł nie musi nawet wiedzieć, kto czyta jego pliki."*

---

**Slajd 4**

**Wejście po słowach:** *„Zespół po drugiej stronie dodał nową kolumnę w środku pliku CSV."*

**Tytuł:** Case study — cicha zmiana kontraktu w CSV

**Opis:** Slajd narracyjny ilustrujący konkretny incydent. Pokazuje uproszczoną tabelkę CSV „przed" i „po" zmianie — widać, jak dodanie kolumny w środku przesuwa wartości: cena trafia do kolumny „kategoria", kategoria do „stan magazynowy". Pod tabelką timeline: dzień 1 — zmiana formatu, dzień 1–3 — dane ładują się bez błędu, dzień 3 — analityk zgłasza dziwne raporty. Kluczowy wniosek na dole: *„Kontrakt się zmienił, ale nikt nikomu nie powiedział."*

**Adnotacja:** Grafika — dwie mini-tabelki CSV (przed/po) z zaznaczonymi przesunięciami kolumn kolorem.

---

**Slajd 5**

**Wejście po słowach:** *„Dlatego jeśli wybierasz File jako styl integracji, musisz ten kontrakt traktować poważnie."*

**Tytuł:** File Transfer — ochrona kontraktu

**Opis:** Slajd z listą praktyk zabezpieczających kontrakt plikowy. Elementy: (1) Wersjonowanie — nazwa pliku lub schematu zawiera wersję; (2) Walidacja po stronie konsumenta — głośny błąd przy nieoczekiwanym formacie zamiast cichego załadowania; (3) Współdzielona schema — Avro, JSON Schema jako formalny kontrakt obu stron; (4) Proces komunikacji zmian — ustalony kanał powiadamiania o zmianach formatu. Na dole wyróżnione zdanie: *„File wybacza wszystko oprócz cichej zmiany kontraktu."*

---

**Slajd 6**

**Wejście po słowach:** *„Duży retailer. Z jednej strony platforma sprzedaży online. Z drugiej strony zewnętrzna platforma analityczna."*

**Tytuł:** Kiedy File Transfer wygrywa — case study: retailer + SaaS

**Opis:** Slajd pokazujący konkretny scenariusz integracji. Diagram: platforma e-commerce → (plik z transakcjami, codziennie o 03:00) → SFTP → platforma analityczna SaaS (pobranie rano). Pod diagramem trzy przekreślone alternatywy z krótkim uzasadnieniem: Direct Call — *„brak stabilnego API, ich awaria blokuje sprzedaż"*; Messaging — *„wymaga uzgodnienia brokera, retry, kontraktów"*; Shared DB — *„zewnętrzny SaaS, brak dostępu"*. Wniosek: *„Działa od 5 lat. Zero zależności od ich uptime."*

**Adnotacja:** Diagram przepływu z przekreślonymi alternatywami.

---

**Slajd 7**

**Wejście po słowach:** *„Transfer plików w obrębie jednego systemu prawie się nie zdarza."*

**Tytuł:** File Transfer — gdzie szukać zastosowań

**Opis:** Slajd podsumowujący domenę zastosowania stylu File. Krótka lista kontekstów, w których File Transfer jest naturalnym wyborem: integracja z partnerem zewnętrznym, SaaS bez stabilnego API, system legacy / ERP, środowiska o różnych cyklach życia. Obok: jedno wyróżnione ograniczenie — *„Cena: aktualność danych. Eksport o północy = cały dzień na danych sprzed kilkunastu godzin."* Kontekst: tam, gdzie opóźnienie jest akceptowalne, plik jest najtańszym i najprostszym rozwiązaniem.

---

**Slajd 8**

**Wejście po słowach:** *„Drugi styl jest z drugiego końca skali. Shared Database."*

**Tytuł:** Shared Database — wspólny schemat, natychmiastowa spójność

**Opis:** Slajd wyjaśniający mechanizm. Diagram: dwa (lub więcej) moduły połączone strzałkami do jednej bazy danych / jednego schematu. Obie strzałki dwukierunkowe (read/write). Kluczowa zaleta wypisana obok: *„Dane spójne natychmiast po COMMIT. Brak brokera, brak API, brak kolejki."* Slajd powinien wizualnie sygnalizować prostotę tego podejścia — mniej elementów niż w pozostałych stylach.

**Adnotacja:** Prosty diagram — dwa moduły, jedna baza.

---

**Slajd 9**

**Wejście po słowach:** *„Zmieniasz kolumnę w jednej tabeli. I nagle drugi moduł, którego nawet nie tknąłeś, przestaje działać."*

**Tytuł:** Shared Database — ukryty coupling na schemacie

**Opis:** Slajd pokazujący ryzyko architektoniczne. Diagram: wspólna tabela z podświetloną kolumną, do której prowadzą strzałki z trzech modułów (Moduł A, B, C). Zmiana nazwy kolumny przez jeden zespół = potencjalna awaria w dwóch pozostałych. Obok cytat ze skryptu oddany własnymi słowami: *„Kto jeszcze stąd czyta? — Nikt nie wie. Wszyscy boją się ruszyć. Nic się nie zmienia przez pół roku."* Pod diagramem nota: *„Refaktoryzacja schematu to już nie migracja SQL — to projekt z trzema zespołami w kalendarzu."*

**Adnotacja:** Diagram zależności modułów od wspólnej tabeli.

---

**Slajd 10**

**Wejście po słowach:** *„Shared Database ma sens w prostych systemach, gdzie modularność nie jest priorytetem."*

**Tytuł:** Shared Database — kiedy TAK, kiedy NIE

**Opis:** Slajd porównawczy, dwie kolumny. **Kiedy ma sens:** wewnętrzne narzędzie, prototyp, mały serwis jednego programisty, brak potrzeby niezależnego deploymentu. **Kiedy przeszkadza:** niezależne deploymenty, osobne zespoły, skalowanie poszczególnych modułów osobno. Wyróżnione zdanie na dole: *„Im później to zauważysz, tym drożej będzie to rozplątać."*

---

**Slajd 11**

**Wejście po słowach:** *„Trzeci styl prawdopodobnie znasz najlepiej. Direct Call."*

**Tytuł:** Direct Call — synchroniczne wywołanie

**Opis:** Slajd wyjaśniający mechanizm. Diagram: Moduł A → wywołanie (REST / gRPC / GraphQL / wywołanie metody) → Moduł B → odpowiedź → Moduł A kontynuuje. Kluczowe cechy wypisane obok diagramu: natychmiastowa spójność danych, odpowiedź dostępna od razu, błąd widoczny natychmiast. Pod spodem jedno ostrzeżenie: *„Coupling czasowy — oba moduły muszą działać w tej samej sekundzie."*

**Adnotacja:** Diagram sekwencji (request → response).

---

**Slajd 12**

**Wejście po słowach:** *„Cennik padł? Zamówienia nie wyliczą kosztu. Inventory ma trzysekundowe latency? Twój checkout się ślimaczy."*

**Tytuł:** Kaskada awarii w łańcuchu synchronicznym

**Opis:** Slajd ilustrujący efekt domina. Diagram łańcucha wywołań: Checkout → Inventory → Pricing → Discount → … Jeden element w środku łańcucha oznaczony jako niedostępny (czerwony X lub ikona awarii). Strzałki za nim przerywane — cała operacja zablokowana. Pod diagramem: *„Im dłuższy łańcuch synchronicznych wywołań, tym większa szansa, że coś po drodze padnie i zablokuje całe żądanie użytkownika."*

**Adnotacja:** Diagram łańcucha z wizualizacją punktu awarii i efektu propagacji.

---

**Slajd 13**

**Wejście po słowach:** *„Dwa wzorce, żeby to oswoić. Po stronie dostawcy stosujesz Facade."*

**Tytuł:** Facade i Gateway — wzorce obronne dla Direct Call

**Opis:** Slajd z dwoma blokami. **Strona dostawcy — Facade:** moduł wewnętrzny (skomplikowany, zmienny) ukryty za czystym, stabilnym interfejsem wystawionym na zewnątrz. **Strona konsumenta — Gateway:** jedno miejsce w kodzie, które tłumaczy model zewnętrznego systemu na model wewnętrzny. Zmiana interfejsu zewnętrznego = zmiana w jednym punkcie, nie w dziesięciu miejscach. Każdy blok to mały diagram (2–3 prostokąty ze strzałką).

**Adnotacja:** Dwa mini-diagramy obok siebie (Facade po lewej, Gateway po prawej).

---

**Slajd 14**

**Wejście po słowach:** *„To ma swoją nazwę. Distributed big ball of mud. Rozproszony monolit."*

**Tytuł:** Distributed Big Ball of Mud

**Opis:** Slajd ostrzegawczy. Wizualizacja: siatka mikroserwisów, gdzie każdy jest połączony synchronicznie z wieloma innymi — gęsta pajęczyna strzałek. Pod spodem krótka charakterystyka: *„Wszystkie wady mikroserwisów (kompleksowość, latency, problemy z deploymentem) + żadna z ich zalet (nic nie jest naprawdę niezależne)."* Wyróżnione zdanie: *„Taki system bardzo szybko nadaje się tylko do przepisania od zera."*

**Adnotacja:** Grafika — gęsty graf połączeń między serwisami (celowo chaotyczny, kontrastujący z uporządkowanymi diagramami z wcześniejszych slajdów).

---

**Slajd 15**

**Wejście po słowach:** *„Więc kiedy Direct Call ma sens? Wtedy gdy ktoś czeka na odpowiedź i naprawdę nie da się go zostawić w zawieszeniu."*

**Tytuł:** Direct Call — uzasadnione zastosowania

**Opis:** Slajd z trzema konkretnymi scenariuszami ułożonymi w pionie. (1) **Sprawdzenie stanu magazynowego** — „produkt jest na stanie" / „nie ma" — odpowiedź potrzebna natychmiast, by użytkownik mógł kupić. (2) **Płatność kartą** — bramka odpowiada OK lub odmowa w sekundę — nie ma opcji „odezwiemy się". (3) **Logowanie** — system sprawdza hasło i wpuszcza lub nie — asynchroniczne logowanie nie istnieje. Pod spodem wspólny mianownik: *„Wynik wywołania jest wejściem do następnego kroku. Bez odpowiedzi nie ma jak iść dalej."*

---

**Slajd 16**

**Wejście po słowach:** *„I wreszcie czwarty styl. Messaging. Komunikacja przez wiadomości."*

**Tytuł:** Messaging — komunikacja przez zdarzenia

**Opis:** Slajd wyjaśniający mechanizm. Diagram: Moduł Zamówienia publikuje zdarzenie „OrderPlaced" do szyny (Event Bus / Kafka / RabbitMQ / Azure Service Bus). Z szyny wychodzą strzałki do trzech niezależnych konsumentów: Warehouse, Notification, Billing. Każdy reaguje niezależnie, we własnym tempie. Kluczowy element: brak strzałki zwrotnej do producenta — producent nie czeka na odpowiedź, nie wie kto subskrybuje.

**Adnotacja:** Diagram pub/sub z jednym producentem i wieloma konsumentami.

---

**Slajd 17**

**Wejście po słowach:** *„W Direct Call jeden moduł niedostępny zatrzymuje drugi. W Messagingu jeden moduł niedostępny tylko opóźnia reakcję drugiego."*

**Tytuł:** Direct Call vs Messaging — zachowanie przy awarii

**Opis:** Slajd porównawczy, dwie kolumny. **Direct Call:** Moduł B niedostępny → Moduł A zablokowany, operacja przerwana. **Messaging:** Moduł B niedostępny → zdarzenia czekają w kolejce, Moduł A działa dalej, Moduł B przetworzy zdarzenia po powrocie. Wizualnie: po lewej czerwona blokada, po prawej żółte opóźnienie (ale system działa). Pod spodem: *„To zmienia wszystko z punktu widzenia dostępności i odporności systemu."*

**Adnotacja:** Diagram porównawczy — dwa scenariusze awarii obok siebie.

---

**Slajd 18**

**Wejście po słowach:** *„Tylko że to jest najbardziej złożony styl ze wszystkich."*

**Tytuł:** Messaging — koszt złożoności

**Opis:** Slajd z listą wyzwań operacyjnych związanych z Messagingiem. Elementy: (1) **Broker** — dodatkowa infrastruktura do utrzymania i monitorowania; (2) **Outbox Pattern** — gwarancja, że zdarzenia nie giną przy awarii bazy; (3) **Inbox Pattern** — ochrona przed podwójnym przetworzeniem przy retry; (4) **Eventual Consistency** — konsument przetworzy zdarzenie „za chwilę", nie natychmiast; (5) **Debugowanie** — brak klasycznego stack trace'a, nowe pytania: „czy zdarzenie się wysłało? broker je dostał? konsument je przeczytał? padł w połowie? przerobił dwa razy?"

---

**Slajd 19**

**Wejście po słowach:** *„Jak więc wybrać? Zamiast pamiętać tabelę porównawczą, zadaj sobie trzy pytania."*

**Tytuł:** Trzy pytania decyzyjne

**Opis:** Slajd podsumowujący — framework decyzyjny. Trzy pytania ułożone w pionie, każde z krótkim wskazaniem konsekwencji:

**1. Ile kosztuje nieaktualność danych?**
Niska cena → File / Messaging. Wysoka cena → Direct Call / Shared DB.

**2. Ile kosztuje niedostępność modułu?**
Akceptowalna → Direct Call. Nieakceptowalna → Messaging.

**3. Ile złożoności jestem w stanie utrzymać?**
Mały zespół / mało doświadczenia → zaczynaj prościej. Messaging dopiero wtedy, gdy faktycznie potrzebujesz.

Pod spodem zdanie zamykające: *„Umiejętność architekta to nie znać wszystkie wzorce — to widzieć, który pasuje do konkretnego kontekstu."*

**Adnotacja:** Można rozważyć prosty diagram decyzyjny (drzewo decyzji) jako alternatywę dla listy — jeśli graficznie zmieści się czytelnie na jednym slajdzie.