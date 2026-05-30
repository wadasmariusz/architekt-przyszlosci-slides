Poniżej opisy slajdów dopasowane chronologicznie do skryptu.

### Slajd 1

**Wejście po słowach:** „przechodzimy do poziomu Component, czyli do diagramu komponentów”
OPIS: slajs anlogiczny jak w przypadku containers i context.

### Slajd 2

**Wejście po słowach:** „wybieramy jeden konkretny kontener i zaglądamy do jego środka”
**Tytuł:** Otwieramy czarną skrzynkę
**Opis:** Pokazać, że backend/API jako jeden prostokąt na poziomie Container ukrywa wewnętrzne odpowiedzialności. Teksty: „Container: jeden większy blok” oraz „Component: główne odpowiedzialności wewnątrz”.
**Grafika/diagram:** Kontener API jako „czarna skrzynka” rozbijana na kilka komponentów.

Masz rację — poprzednia wersja miejscami była zbyt „warsztatowa”, a za mało architektoniczna. Poniżej wersja bardziej profesjonalna: slajdy są nadal ściśle oparte na skrypcie, ale język akcentuje odpowiedzialności, granice, zależności, poziom abstrakcji i wartość decyzyjną diagramu komponentów.


### Slajd 3

**Wejście po słowach:** „Diagram komponentów pozwala nam tę czarną skrzynkę otworzyć”
**Tytuł:** Od czarnej skrzynki do odpowiedzialności
**Opis slajdu:**
Slajd powinien wspierać wyjaśnienie, że poziom Component ujawnia organizację logiki wewnątrz aplikacji. Nie chodzi jeszcze o klasy, metody czy strukturę katalogów, ale o główne role pełnione przez części aplikacji.

**Tekst na slajdzie:**

* Co realizuje dany kontener?
* Gdzie znajdują się główne obszary logiki?
* Jakie części współpracują przy realizacji funkcji biznesowych?

**Grafika/diagram:**
Po lewej: „API Application” jako pojedynczy prostokąt. Po prawej: ten sam kontener rozbity na komponenty reprezentujące odpowiedzialności, np. kontrolery, komponent bezpieczeństwa, integracje, dostęp do danych.

---

### Slajd 4

**Wejście po słowach:** „Na poziomie Component pokazujemy większe, logiczne części aplikacji”
**Tytuł:** Komponent jako jednostka odpowiedzialności
**Opis slajdu:**
Slajd definicyjny, ale sformułowany profesjonalnie. Powinien jasno pokazać, że komponent w C4 to istotna architektonicznie część kontenera, posiadająca określoną odpowiedzialność i znaczenie dla zrozumienia struktury aplikacji.

**Tekst na slajdzie:**

* Komponent reprezentuje istotną odpowiedzialność wewnątrz kontenera
* Może grupować logikę biznesową, orkiestrację, integrację lub dostęp do danych
* Jest pokazywany wtedy, gdy pomaga zrozumieć strukturę i zależności aplikacji

**Przykłady na slajdzie:**

* moduł rezerwacji
* moduł płatności
* serwis aplikacyjny
* kontroler API
* adapter integracyjny
* repozytorium danych
* handler komend
* komponent powiadomień

**Grafika/diagram:**
Kafelki pogrupowane według charakteru odpowiedzialności: „Logika biznesowa”, „Warstwa aplikacyjna”, „Integracje”, „Dane”, „Komunikacja”.

---

### Slajd 5

**Wejście po słowach:** „Bardzo często problem polega na tym, że słowo „komponent” jest rozumiane zbyt technicznie albo zbyt implementacyjnie”
**Tytuł:** Poziom abstrakcji komponentu
**Opis slajdu:**
Slajd powinien wyraźnie odróżnić komponent architektoniczny od detalu implementacyjnego. To ważny moment lekcji, bo porządkuje ryzyko zbyt niskiego poziomu szczegółowości na diagramie.

**Tekst na slajdzie:**
**Komponent w C4 nie musi być:**

* osobnym mikroserwisem
* osobnym procesem
* osobnym repozytorium
* biblioteką techniczną
* klasą lub komponentem frameworka

**Komponent w C4 powinien:**

* mieć jasno określoną odpowiedzialność
* być istotny dla zrozumienia architektury kontenera
* pokazywać organizację aplikacji na poziomie wyższym niż kod

**Grafika/diagram:**
Tabela porównawcza „Nie mylić z detalem implementacyjnym” / „Traktować jako element struktury architektonicznej”.

---

### Slajd 6

**Wejście po słowach:** „Weźmy klasyczny przykład Internet Banking System”
**Tytuł:** Przykład: Internet Banking System
**Opis slajdu:**
Slajd powinien wprowadzić przykład używany w dalszej części narracji. Celem jest pokazanie, że poziom Component analizuje wybrany kontener z wcześniejszego diagramu Container.

**Tekst na slajdzie:**

* System: Internet Banking System
* Wybrany kontener: API Application
* Cel: pokazać wewnętrzną strukturę odpowiedzialności tego kontenera

**Grafika/diagram:**
Uproszczony widok kontenerów: Web Application, Mobile Application, API Application, Database. Kontener API Application powinien być wyraźnie wyróżniony jako przedmiot dalszej analizy.

---

### Slajd 7

**Wejście po słowach:** „Oficjalny opis C4 mówi, że diagram komponentów służy do rozbicia jednego kontenera na komponenty”
**Tytuł:** Cel diagramu komponentów
**Opis slajdu:**
Slajd powinien formalnie doprecyzować funkcję diagramu komponentów. Warto pokazać trzy główne elementy: komponenty, odpowiedzialności i istotne szczegóły implementacyjne — ale bez schodzenia do poziomu kodu.

**Tekst na slajdzie:**
Diagram komponentów pokazuje:

* komponenty wewnątrz jednego kontenera
* odpowiedzialności poszczególnych komponentów
* istotne zależności i punkty integracji
* wybrane szczegóły technologiczne, jeśli pomagają zrozumieć architekturę

**Grafika/diagram:**
Prosty układ „Container boundary → Components → Responsibilities → Relationships”.

---

### Slajd 8

**Wejście po słowach:** „wewnątrz API Application znajdują się komponenty odpowiedzialne za konkretne obszary działania systemu”
**Tytuł:** Struktura API Application
**Opis slajdu:**
Slajd powinien pokazać przykładowy zestaw komponentów wewnątrz API Application. Ważne, aby nie była to tylko lista nazw, ale wizualne przedstawienie ról: obsługa przypadków użycia, bezpieczeństwo, komunikacja z systemami zewnętrznymi i izolacja integracji.

**Tekst na slajdzie:**

* Sign In Controller — obsługa logowania
* Reset Password Controller — resetowanie hasła
* Accounts Summary Controller — udostępnianie informacji o rachunkach
* Security Component — uwierzytelnianie i autoryzacja
* E-mail Component — komunikacja z systemem pocztowym
* Mainframe Facade — izolacja integracji z systemem legacy

**Grafika/diagram:**
Diagram komponentów wewnątrz ramki „API Application”. Komponenty zewnętrzne, takie jak system pocztowy i mainframe, mogą być pokazane poza ramką jako zależności.

---

### Slajd 9

**Wejście po słowach:** „Taki diagram zaczyna być już dużo bardziej techniczny niż diagram kontekstowy czy kontenerowy”
**Tytuł:** Techniczny, ale nadal architektoniczny
**Opis slajdu:**
Slajd powinien zaznaczyć właściwy poziom szczegółowości. Diagram komponentów jest bardziej techniczny, ale jego celem nie jest dokumentowanie klas, metod ani pełnego modelu kodu. Ma wspierać zrozumienie architektury aplikacji.

**Tekst na slajdzie:**

* Więcej szczegółów niż na poziomie Container
* Nadal wyżej niż diagram klas lub kodu
* Koncentracja na odpowiedzialnościach, zależnościach i strukturze aplikacji

**Grafika/diagram:**
Oś poziomu szczegółowości: Context → Container → Component → Code. Podświetlony Component jako poziom pośredni między architekturą systemu a szczegółami implementacji.

---

### Slajd 10

**Wejście po słowach:** „Celem diagramu jest żeby zrozumieć, jak aplikacja jest podzielona”
**Tytuł:** Wartość dla zespołu technicznego
**Opis slajdu:**
Slajd powinien pokazać, po co architekci, tech leadzi i programiści korzystają z diagramu komponentów. Nacisk na zrozumienie podziału aplikacji, zależności i miejsc odpowiedzialnych za realizację funkcji biznesowych.

**Tekst na slajdzie:**
Diagram komponentów pomaga odpowiedzieć:

* gdzie znajduje się dana odpowiedzialność?
* które komponenty współpracują przy realizacji funkcji?
* gdzie występują integracje z systemami zewnętrznymi?
* które zależności są istotne architektonicznie?

**Grafika/diagram:**
Możliwy układ w formie czterech pytań diagnostycznych dla architekta lub tech leada.

---

### Slajd 11

**Wejście po słowach:** „Na diagramie komponentów bardzo ważne są również relacje”
**Tytuł:** Relacje między komponentami
**Opis slajdu:**
Slajd powinien wyjaśnić, że wartość diagramu wynika nie tylko z nazw komponentów, ale także z poprawnie opisanych zależności. Relacje powinny pokazywać kierunek współpracy, inicjatora operacji i sens biznesowy interakcji.

**Tekst na slajdzie:**
Relacje powinny pokazywać:

* kto inicjuje operację
* który komponent wykorzystuje inny komponent
* gdzie następuje odczyt lub zapis danych
* gdzie przebiega integracja z systemem zewnętrznym
* jaki jest cel danej interakcji

**Grafika/diagram:**
Krótki przykład: Accounts Summary Controller → Mainframe Facade → Mainframe Banking System.

---

### Slajd 12

**Wejście po słowach:** „opisy relacji powinny mówić o intencji, a nie tylko o mechanice technicznej”
**Tytuł:** Opisuj intencję, nie tylko protokół
**Opis slajdu:**
Slajd porównawczy. Powinien pokazać różnicę między opisem technicznym a opisem architektonicznie użytecznym. Technologia może być dopisana, ale nie powinna zastępować znaczenia relacji.

**Tekst na slajdzie:**
**Słabszy opis relacji:**

* HTTP
* REST
* JSON
* wywołuje metodę

**Lepszy opis relacji:**

* uwierzytelnia klienta
* pobiera podsumowanie rachunków
* resetuje hasło
* wysyła wiadomość e-mail z potwierdzeniem

**Adnotacja:**
Technologia opisuje mechanizm. Intencja opisuje powód istnienia zależności.

**Grafika/diagram:**
Dwa równoległe przykłady tej samej relacji: jeden opisany protokołem, drugi opisany intencją biznesową.

---

### Slajd 13

**Wejście po słowach:** „Kluczowa jest też granica kontenera”
**Tytuł:** Granica analizowanego kontenera
**Opis slajdu:**
Slajd powinien podkreślić, że diagram komponentów zawsze dotyczy jednego kontenera. Trzeba jednoznacznie odróżnić komponenty znajdujące się wewnątrz analizowanego kontenera od systemów, kontenerów i usług zewnętrznych.

**Tekst na slajdzie:**
Wewnątrz API Application:

* kontrolery API
* komponent bezpieczeństwa
* fasady integracyjne
* komponenty aplikacyjne

Poza API Application:

* aplikacja webowa
* aplikacja mobilna
* system pocztowy
* system mainframe
* baza danych

**Grafika/diagram:**
Ramka „API Application” z komponentami wewnątrz i zależnościami zewnętrznymi poza ramką. Granica powinna być wizualnie bardzo czytelna.

---

### Slajd 14

**Wejście po słowach:** „Dzięki temu odbiorca diagramu wie, za co odpowiada dany kontener, a co jest jego zewnętrzną zależnością”
**Tytuł:** Odpowiedzialność vs zależność zewnętrzna
**Opis slajdu:**
Slajd powinien wspierać myślenie architektoniczne o granicach odpowiedzialności. Dobrze pokazać, że poprawne rozdzielenie wnętrza kontenera i zależności zewnętrznych pomaga analizować wpływ zmian, ryzyka integracyjne oraz zakres odpowiedzialności zespołu.

**Tekst na slajdzie:**

* Co należy do odpowiedzialności kontenera?
* Co jest zależnością zewnętrzną?
* Które integracje wpływają na stabilność rozwiązania?
* Gdzie przebiega granica zmiany i utrzymania?

**Grafika/diagram:**
Diagram z wyraźnym rozdzieleniem: „Kontrolujemy wewnątrz kontenera” oraz „Integrujemy się na zewnątrz kontenera”.

---

### Slajd 15

**Wejście po słowach:** „żeby diagram komponentów nie stał się tylko technologiczną mapą aplikacji”
**Tytuł:** Nie tylko mapa technologii
**Opis slajdu:**
Slajd ostrzegawczy. Powinien pokazać typowy błąd: diagram, który wymienia technologie, protokoły i frameworki, ale nie wyjaśnia odpowiedzialności. Należy podkreślić, że technologia jest istotna tylko wtedy, gdy pomaga zrozumieć decyzję architektoniczną lub zależność.

**Tekst na slajdzie:**
Diagram komponentów nie powinien ograniczać się do:

* REST
* kolejki
* bazy danych
* frameworków
* bibliotek technicznych

Główny cel:

* struktura odpowiedzialności
* zależności między komponentami
* architektonicznie istotne punkty integracji

**Grafika/diagram:**
Dwie kolumny: „Mapa technologii” kontra „Mapa odpowiedzialności”. Slajd powinien wzmacniać różnicę między dokumentacją techniczną a modelem architektury.

---

### Slajd 16

**Wejście po słowach:** „poziom Component jest miejscem, w którym zaczynamy rozmawiać o wnętrzu aplikacji, ale nadal z perspektywy architektury”
**Tytuł:** Architektura wnętrza aplikacji
**Opis slajdu:**
Slajd powinien podsumować praktyczne zastosowanie poziomu Component. Warto pokazać, jakie obszary aplikacji stają się widoczne: logika biznesowa, integracje, adaptery, baza danych oraz współpraca między częściami aplikacji.

**Tekst na slajdzie:**
Poziom Component pomaga zlokalizować:

* logikę biznesową
* integracje zewnętrzne
* adaptery i fasady
* dostęp do danych
* współpracę komponentów przy realizacji funkcji biznesowych

**Grafika/diagram:**
Mapa odpowiedzialności aplikacji podzielona na obszary: „Business Logic”, „Application Services”, „Integrations”, „Data Access”, „Notifications”.

---

### Slajd 17

**Wejście po słowach:** „Jest to też bardzo dobry materiał onboardingowy dla nowych osób w zespole”
**Tytuł:** Wsparcie onboardingu i komunikacji
**Opis slajdu:**
Slajd powinien pokazać, że diagram komponentów ma wartość nie tylko projektową, ale też komunikacyjną. Pomaga szybciej zrozumieć strukturę aplikacji bez konieczności natychmiastowego analizowania kodu.

**Tekst na slajdzie:**
Diagram komponentów wspiera:

* onboarding nowych członków zespołu
* komunikację między architektem, tech leadem i programistami
* analizę wpływu zmian
* rozmowę o odpowiedzialnościach i zależnościach

**Grafika/diagram:**
Możliwy prosty schemat: „Diagram → wspólne zrozumienie → szybsze decyzje techniczne”.

---

### Slajd 18

**Wejście po słowach:** „Podsumowując, diagram komponentów to mapa wnętrza jednego kontenera”
**Tytuł:** Diagram komponentów: sedno
**Opis slajdu:**
Slajd końcowy powinien zebrać najważniejsze kryteria dobrego diagramu komponentów. Ma utrwalić różnicę między poziomem Component a szczegółowym diagramem kodu.

**Tekst na slajdzie:**
Dobry diagram komponentów pokazuje:

* najważniejsze logiczne części jednego kontenera
* odpowiedzialności komponentów
* zależności i kierunki współpracy
* istotne integracje zewnętrzne
* właściwy poziom szczegółowości — architektura, nie kod

**Grafika/diagram:**
Krótka checklista „dobrego diagramu Component”. Może być użyta jako slajd domykający lekcję.
