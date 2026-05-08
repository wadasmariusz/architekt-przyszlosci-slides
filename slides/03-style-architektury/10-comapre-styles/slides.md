**Slajd 0**
**Wejście po słowach:** „Zanim zaczniemy omawiać poszczególne wiersze, zobaczmy całą tabelę w jednym miejscu”
**Tytuł:** Architecture Styles Worksheet
**Opis slajdu:**

* Pełna tabela z pliku `architecture-styles-worksheet (1).pdf`, przerysowana na ciemnym motywie prezentacji.
* Osiem stylów architektonicznych: layered, modular monolith, microkernel, microservices, service-based, service-oriented, event-driven, space-based.
* Wiersze porównania: partitioning, cost, maintainability, testability, deployability, simplicity, scalability, elasticity, responsiveness, fault-tolerance, evolvability, abstraction, interoperability.
* **Grafika/diagram:** jedna kompaktowa tabela porównawcza z ikonami stylów, kosztami i gwiazdkami w kolorystyce slajdów.

**Slajd 1**
**Wejście po słowach:** „Cześć, w dzisiejszej lekcji skupimy się na tabelce ‘Architecture Worksheet’”
**Tytuł:** Jak czytać tę tabelę
**Opis slajdu:**

* Krótka legenda: gwiazdki nie oznaczają „dobre / złe”, tylko pokazują typowe mocne strony i koszty danego stylu.
* Cztery porównywane style: architektura warstwowa, monolit modularny, mikroserwisy, event-driven.
* Krótka adnotacja na dole: „To porównanie wspiera decyzję architektoniczną, nie zastępuje kontekstu projektu”.
* **Grafika/diagram:** prosta plansza z 4 kolumnami reprezentującymi style architektoniczne.

**Slajd 2**
**Wejście po słowach:** „Pierwszy wiersz dotyczy sposobu podziału systemu”
**Tytuł:** Podział systemu: technical vs domain
**Opis slajdu:**

* Dwie osie porównania:

    * **Podział techniczny**: API, serwisy, repozytoria, broker, konsumenci.
    * **Podział domenowy**: katalog, koszyk, płatności, wysyłka.
* Krótki komentarz: techniczny podział jest łatwiejszy na start, domenowy lepiej wspiera rozwój produktu.
* Wyróżnienie architektur: layered i event-driven po stronie „technical”, modular monolith i microservices po stronie „domain”.
* **Diagram:** dwa uproszczone schematy pudełkowe obok siebie — „wg warstw” i „wg domen”.

**Slajd 3**
**Wejście po słowach:** „Warto tutaj zatrzymać się na chwilę przy klasyfikacji event-driven jako ‘technical’”
**Tytuł:** Event-driven jako architektura hybrydowa
**Opis slajdu:**

* Główna teza slajdu:

    * **Topologia** event-driven jest techniczna.
    * **Zdarzenia** są zwykle domenowe.
* Przykłady zdarzeń biznesowych: „Złożono zamówienie”, „Płatność zaakceptowana”.
* Adnotacja dla architekta: przy event-driven trzeba oddzielać ocenę topologii od jakości modelowania domeny.
* **Diagram:** dwa poziomy — „infrastruktura komunikacyjna” i „semantyka zdarzeń”.

**Slajd 4**
**Wejście po słowach:** „Drugi wiersz to koszt”
**Tytuł:** Koszt architektury
**Opis slajdu:**

* Porównanie kosztu całkowitego, nie tylko infrastruktury.
* Na slajdzie krótkie hasła per styl:

    * Layered: niski koszt wejścia.
    * Modular monolith: nadal tani, lepszy porządek wewnętrzny.
    * Microservices: najwyższy koszt operacyjny i organizacyjny.
    * Event-driven: koszt asynchronicznej infrastruktury i obsługi błędów.
* Wyróżnione pojęcia: observability, deployment wielu usług, kontrakty, retry, duplikaty zdarzeń.
* **Forma:** porównawcza tabela 4 kolumny × 3 wiersze: „start”, „operacje”, „utrzymanie”.

**Slajd 5**
**Wejście po słowach:** „Potem utrzymywalność”
**Tytuł:** Utrzymywalność systemu
**Opis slajdu:**

* Krótkie porównanie:

    * Layered: ryzyko „big ball of mud rozłożonego na warstwy”.
    * Modular monolith: dobra lokalizacja odpowiedzialności przy sensownych granicach modułów.
    * Microservices: wysoka utrzymywalność tylko przy dobrym cięciu granic.
    * Event-driven: luźne powiązanie pomaga, ale proces biznesowy jest rozproszony.
* Na dole slajdu jedna ramka: „Moc architektury zależy od jakości granic, nie od samej etykiety stylu”.

**Slajd 6**
**Wejście po słowach:** „Trzeba tutaj uczciwie zaznaczyć, że dwie gwiazdki dla modularnego monolitu to ocena...”
**Tytuł:** Korekta oceny: modularny monolit
**Opis slajdu:**

* Slajd polemiczny, wspierający narrację prowadzącego.
* Teza: dobrze zaprojektowany modularny monolit może być łatwiejszy w utrzymaniu niż mikroserwisy.
* Krótkie argumenty: brak problemów sieciowych, brak transakcji rozproszonych, prostsze diagnozowanie, mniejsza złożoność operacyjna.
* Wyróżnienie: „Tabela pokazuje przypadek typowy, nie najlepszy możliwy”.
* **Forma:** slajd z jedną centralną tezą i trzema krótkimi argumentami.

**Slajd 7**
**Wejście po słowach:** „Następny wiersz to testowalność”
**Tytuł:** Testowalność
**Opis slajdu:**

* Porównanie sposobu testowania w każdym stylu:

    * Layered / monolit: przewaga cięższych testów integracyjnych.
    * Modular monolith: lepiej, jeśli moduły są odseparowane.
    * Microservices: testy serwisowe, kontraktowe, integracyjne, e2e.
    * Event-driven: trudność przez asynchroniczność, kolejność, powtórzenia, eventual consistency.
* W stopce: „wysoka testowalność nie wynika z samego podziału, tylko z dyscypliny projektowej i testowej”.

**Slajd 8**
**Wejście po słowach:** „Podobnie jak w przypadku utrzymywalności, dwie gwiazdki za testowalność modularnego monolitu...”
**Tytuł:** Testowalność bez rozproszenia
**Opis slajdu:**

* Teza: modularny monolit może osiągać testowalność zbliżoną do mikroserwisów.
* Na slajdzie dwa bloki:

    * **Zaleta mikroserwisów:** izolacja odpowiedzialności.
    * **Zaleta modularnego monolitu:** brak contract testing między procesami, prostszy setup, szybsze testy integracyjne.
* Akcent: kluczowa jest separacja modułów, nie liczba deployowalnych jednostek.

**Slajd 9**
**Wejście po słowach:** „Kolejny wiersz to łatwość wdrażania”
**Tytuł:** Wdrażanie zmian
**Opis slajdu:**

* Krótki przekaz:

    * Layered: wdrażamy całość.
    * Modular monolith: nadal zwykle wspólny deployment.
    * Microservices: wdrożenie tylko zmienionego serwisu.
    * Event-driven: większa niezależność, ale konieczna zgodność komunikatów i schematów.
* Dobrze pokazać konsekwencję biznesową: wpływ na lead time i częstotliwość dostarczania zmian.
* **Diagram:** oś „wspólny deployment → niezależny deployment”.

**Slajd 10**
**Wejście po słowach:** „Potem mamy czyli prostotę”
**Tytuł:** Prostota i złożoność operacyjna
**Opis slajdu:**

* Slajd ma uporządkować główny trade-off:

    * Layered i modular monolith: prostszy model mentalny.
    * Microservices: prostsze lokalnie, trudniejsze globalnie.
    * Event-driven: silna moc architektoniczna, ale mniej intuicyjny przepływ.
* W centrum slajdu jedno zdanie: „Lokalna prostota komponentu nie oznacza prostoty całego systemu”.
* **Diagram:** dwa poziomy: „prostota pojedynczego elementu” vs „złożoność ekosystemu”.

**Slajd 11**
**Wejście po słowach:** „Dalej mamy skalowalność”
**Tytuł:** Skalowalność
**Opis slajdu:**

* Porównanie sposobu skalowania:

    * Layered / modular monolith: skalowanie całej aplikacji.
    * Microservices: skalowanie konkretnego hot spotu.
    * Event-driven: dobra obsługa dużego wolumenu i skoków ruchu.
* Warto dodać przykłady z narracji: wyszukiwanie, raporty, płatności, e-commerce promo, logistyka, IoT.
* **Diagram:** jeden system z wyróżnionym „wąskim gardłem” i dwoma strategiami skalowania.

**Slajd 12**
**Wejście po słowach:** „Następny wiersz to elastyczność skalowania pod obciążenie”
**Tytuł:** Elasticity pod ruchem
**Opis slajdu:**

* Ten slajd powinien odróżnić „skalowalność” od „reakcji na chwilowy pik”.
* Hasła:

    * Monolit: zwiększamy instancje całej aplikacji.
    * Microservices: doskalowujemy przeciążony fragment.
    * Event-driven: kolejka jako bufor + doskalowanie konsumentów.
* Dla odbiorcy technicznego: to slajd o efektywnym wykorzystaniu zasobów, nie tylko o maksymalnym throughput.
* **Grafika:** prosty wykres piku ruchu z buforem kolejki.

**Slajd 13**
**Wejście po słowach:** „Potem w tabeli pojawia się responsywność”
**Tytuł:** Responsywność systemu
**Opis slajdu:**

* Wyjaśnienie, dlaczego „nowocześniejsze” nie znaczy automatycznie „szybsze dla użytkownika”.
* Na slajdzie dwa modele:

    * synchroniczny łańcuch wywołań w mikroserwisach,
    * szybkie przyjęcie żądania + dalsze przetwarzanie asynchroniczne w event-driven.
* Kluczowy przekaz: event-driven wygrywa tam, gdzie użytkownik nie musi czekać na pełne zakończenie procesu.
* **Diagram:** porównanie request-response vs accept-event-process-later.

**Slajd 14**
**Wejście po słowach:** „Warto jednak dodać, że dwie gwiazdki dla mikroserwisów opisują domyślny tryb komunikacji synchronicznej”
**Tytuł:** Mikroserwisy + event-driven w praktyce
**Opis slajdu:**

* Slajd ma pokazać, że style można łączyć.
* Treść: CQRS, cache na poziomie serwisów, API gateway z agregacją, połączenie microservices + event-driven.
* Główna teza w środku: „Tabela ocenia style osobno, architekt projektuje także ich kombinacje”.
* **Diagram:** mikroserwisy z warstwą event bus / broker pośrodku.

**Slajd 15**
**Wejście po słowach:** „Kolejna rzecz to odporność na awarie”
**Tytuł:** Odporność na awarie
**Opis slajdu:**

* Porównanie potencjału odporności: monolit vs mikroserwisy vs event-driven.
* Obowiązkowo dodać ostrzeżenie: 5 gwiazdek dla mikroserwisów oznacza potencjał, nie gwarancję.
* Osobna wyróżniona ramka: „Rozproszony monolit = najgorsze z obu światów”.
* W ramce ma się znaleźć przykład łańcucha A→B→C→D i wzorce ograniczające kaskadę: timeout, circuit breaker, bulkhead, fallback.
* **Diagram:** łańcuch synchronicznych wywołań z zaznaczonym punktem awarii.

**Slajd 16**
**Wejście po słowach:** „Dalej mamy zdolność do rozwoju i wprowadzania zmian”
**Tytuł:** Evolvability systemu
**Opis slajdu:**

* Krótki przekaz:

    * Layered: na starcie wygodne, później spowalnia przez narastające zależności.
    * Modular monolith: dobry kompromis, jeśli pilnujemy granic modułów.
    * Microservices: mocne przy wzroście skali systemu i liczby zespołów.
    * Event-driven: łatwo dołączać nowych konsumentów bez przebudowy producenta.
* Warto pokazać przykład z narracji: po zdarzeniu „zamówienie opłacone” dokładamy kolejne reakcje biznesowe.
* Dodatkowa adnotacja: nie zrównywać modularnego monolitu z klasyczną architekturą warstwową.

**Slajd 17**
**Wejście po słowach:** „Potem dochodzimy do poziomu abstrakcji”
**Tytuł:** Abstrakcja i interoperacyjność
**Opis slajdu:**

* Dwie sekcje na jednym slajdzie:

    * **Abstrakcja:** event-driven oddziela producenta od odbiorców przez zdarzenie.
    * **Interoperacyjność:** microservices i event-driven lepiej współpracują z innymi systemami dzięki kontraktom, API i zdarzeniom.
* Wyróżnienie ryzyka: słaba semantyka zdarzeń prowadzi do chaosu integracyjnego.
* **Diagram:** producent zdarzenia → wielu odbiorców + obok integracja system-system.

**Slajd 18**
**Wejście po słowach:** „Podsumowując, ta tabela bardzo dobrze pokazuje...”
**Tytuł:** Kiedy który styl ma przewagę
**Opis slajdu:**

* Slajd syntetyczny, ale nie streszczający całej lekcji 1:1.
* Cztery krótkie pozycje:

    * Layered — dobry start i niski koszt.
    * Modular monolith — rozsądny środek i dobra organizacja domeny bez kosztu rozproszenia.
    * Microservices — niezależność, skala, organizacja wielozespołowa.
    * Event-driven — responsywność, luźne powiązanie, reakcja na zdarzenia.
* Na dole jedno zdanie: „Wybór architektury = dopasowanie do produktu, zespołu, skali i tempa zmian”.
* **Forma:** 4 kafelki z jednym zdaniem każdy.

**Slajd 19**
**Wejście po słowach:** „Na koniec ważna refleksja metodologiczna”
**Tytuł:** Tabela nie jest wyrocznią
**Opis slajdu:**

* Ostatni slajd powinien zamknąć lekcję na poziomie architektonicznym.
* Treść: oceny gwiazdkowe pokazują przypadek typowy, nie jakość konkretnej implementacji.
* Krótkie pytania decyzyjne na slajdzie:

    * Dojrzałość zespołu?
    * Wymagania biznesowe?
    * Budżet?
    * Tempo zmian?
    * Gotowość operacyjna?
* Finalna teza: „Tabela jest punktem wyjścia do rozmowy o trade-offach, nie gotową odpowiedzią”.
