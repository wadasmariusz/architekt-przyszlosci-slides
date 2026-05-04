# Propozycje slajdów – Modularny Monolit

---

## Slajd 1 — Tytuł
**Typ:** Minimalistyczna grafika tytułowa

**Zawartość:**
Tytuł: „Modularny Monolit"
Podtytuł: „Porządek architektoniczny bez kosztu mikroserwisów"

**Wizualizacja:**
Duży, czysty napis na ciemnym tle. W tle subtelna siatka lub plaster miodu — metafora modułowości. Brak nadmiaru elementów.

---

## Slajd 2 — Czym jest modularny monolit?
**Typ:** Diagram porównawczy (dwa obok siebie)

**Zawartość:**
Dwie kolumny:
- **Monolit klasyczny** — jeden blok, bez podziałów, chaotyczne strzałki wewnątrz
- **Modularny monolit** — jeden blok, ale w środku wyraźnie podzielony na kolorowe sekcje (moduły) z czystymi granicami

Pod spodem jedna linia: „Wdrażamy jako jedno, projektujemy jako wiele."

**Wizualizacja:**
Prosta grafika wektorowa — dwa prostokąty. Lewy pełen splątanych linii, prawy podzielony na schludne, kolorowe segmenty.

---

## Slajd 3 — Monolit spaghetti vs modularny monolit
**Typ:** Grafika ilustracyjna / metafora

**Zawartość:**
Po lewej: wizualizacja splątanego spaghetti (przypadkowe połączenia, klasy zależne od wszystkiego)
Po prawej: ta sama liczba elementów, ale ułożonych w wyraźne grupy z kontrolowanymi połączeniami

**Wizualizacja:**
Inspiracja: klasyczne porównanie „spaghetti code" vs „clean architecture". Można użyć metafory węzłów grafu — z chaosu do porządku.

---

## Slajd 4 — Dlaczego nie od razu mikroserwisy?
**Typ:** Slajd z tezą i kontrargumentem

**Zawartość:**
Teza po lewej: „Mamy bałagan → przejdźmy na mikroserwisy"
Kontrargument po prawej: „Prawdziwy problem? Zły podział odpowiedzialności w kodzie"

Pod spodem: „Modularny monolit rozwiązuje problem u źródła."

**Wizualizacja:**
Dwie dymki (jak w komiksie) — jedna czerwona z błędnym wnioskiem, jedna zielona z właściwą diagnozą. Minimalistyczny styl ilustracyjny.

---

## Slajd 5 — Klucz: granice biznesowe, nie techniczne
**Typ:** Diagram dwóch podejść do struktury

**Zawartość:**
Podejście A (anty-wzorzec):
```
/controllers
/services
/repositories
/entities
```

Podejście B (modularny monolit):
```
/orders
/payments
/identity
/notifications
```

Pod spodem: „Nie pytamy: gdzie są serwisy? Pytamy: kto odpowiada za zamówienia?"

**Wizualizacja:**
Dwie struktury katalogów obok siebie, wyraźnie skontrastowane. Podejście B podświetlone na zielono.

---

## Slajd 6 — Przykładowa struktura modułu
**Typ:** Slajd z przykładem kodu / struktury plików

**Zawartość:**
Rozwinięta struktura modułu `orders`:

```
/orders
  /domain
    Order.ts
    OrderStatus.ts
    OrderRepository.ts (interfejs)
  /application
    PlaceOrderUseCase.ts
    CancelOrderUseCase.ts
  /infrastructure
    PostgresOrderRepository.ts
  /api
    OrdersController.ts
  index.ts  ← publiczny interfejs modułu
```

Pod spodem: „Inne moduły widzą tylko `index.ts`. Reszta jest ukryta."

**Wizualizacja:**
Drzewo plików z wyróżnionym `index.ts` — ikona zamkniętej kłódki przy wewnętrznych plikach.

---

## Slajd 7 — System wypożyczalni samochodów — podział na moduły
**Typ:** Diagram architektoniczny

**Zawartość:**
Cztery moduły jako kolorowe kafelki wewnątrz jednego dużego prostokąta (aplikacja):
- 🚗 **Katalog pojazdów**
- 📋 **Zamówienia**
- 💳 **Płatności**
- 🔔 **Powiadomienia**

Strzałki między modułami pokazują kierunek komunikacji (tylko przez publiczne interfejsy).

**Wizualizacja:**
Schludny diagram pudełkowy. Moduły w różnych kolorach, granice wyraźnie zaznaczone. Całość otoczona etykietą „Jeden deployment".

---

## Slajd 8 — Jak moduły się komunikują?
**Typ:** Diagram przepływu (flow diagram)

**Zawartość:**
Krok po kroku:
1. Żądanie HTTP → moduł Zamówień
2. Walidacja + zapis zamówienia
3. Publikacja zdarzenia: `OrderPlaced`
4. Moduł Powiadomień nasłuchuje → wysyła e-mail

Pod spodem: „Nie ma HTTP między modułami. Komunikacja przez kontrakt lub zdarzenie wewnętrzne."

**Wizualizacja:**
Sekwencja kroków z ikonami (strzałki, koperta, checkbox). Styl: timeline poziomy lub swimlane.

---

## Slajd 9 — Zalety modularnego monolitu
**Typ:** Slajd ikonograficzny (ikony + krótkie opisy)

**Zawartość:**
Pięć kafelków z ikonami:

| Ikona | Zaleta |
|---|---|
| ⚡ | Jeden deployment — prosta operacyjność |
| 🗂️ | Czytelny podział odpowiedzialności |
| 🧪 | Łatwiejsze testowanie warstw |
| 🔄 | Niższy koszt zmian na wczesnym etapie |
| 🚀 | Dobra baza pod ewentualną ekstrakcję serwisów |

**Wizualizacja:**
Grid 2×3 lub 1×5 z ikonami i krótkimi podpisami. Minimalistyczny, elegancki layout.

---

## Slajd 10 — Pułapki i słabe strony
**Typ:** Slajd ostrzegawczy — lista z ikonami alertów

**Zawartość:**
- ⚠️ Granice nie są wymuszane przez infrastrukturę — wymagają dyscypliny zespołu
- ⚠️ Skalowanie tylko całości, nie pojedynczych modułów
- ⚠️ Wspólna baza danych łatwo rozmywa granice
- ⚠️ Ryzyko „pozornej modularności" — ładne foldery, silne sprzężenie
- ⚠️ Wymaga dojrzałości organizacyjnej i świadomości domenowej

**Wizualizacja:**
Ciemniejsze tło slajdu, ikony trójkąta ostrzegawczego przy każdym punkcie. Kontrast z poprzednim slajdem zalet.

---

## Slajd 11 — Anty-wzorzec: jeden wspólny model dla wszystkich
**Typ:** Diagram ewolucji modelu (zanim / potem)

**Zawartość:**
Encja `User` rozrastająca się w czasie:
- Wersja 1: 5 pól
- Wersja 2: 12 pól (bo moduł Płatności dołożył swoje)
- Wersja 3: 20 pól + wyjątki + logika z trzech modułów

Pod spodem: „Zamiast tego: każdy moduł ma swój lokalny widok użytkownika."

**Wizualizacja:**
Animowana (lub statyczna) sekwencja puchnącej klasy. Trzy kadry pokazujące narastający chaos. Alternatywnie — trzy osobne, małe pudełka `User` w różnych modułach z różnymi polami.

---

## Slajd 12 — Anty-wzorzec: zbyt ciasne połączenia
**Typ:** Diagram złego przepływu

**Zawartość:**
Moduł Zamówień wywołuje synchronicznie jeden po drugim:
- Zamówienia → Płatności → Dostawa → Powiadomienia → Użytkownicy

Każde połączenie wymaga odpowiedzi tu i teraz.

Pod spodem: „Formalnie moduły, praktycznie jeden duży łańcuch zależności."

**Wizualizacja:**
Diagram sekwencji lub łańcuch pudełek połączonych strzałkami. Całość otoczona czerwoną ramką. Kontrast z prawidłowym diagramem przepływu ze slajdu 8.

---

## Slajd 13 — Kiedy warto wybrać modularny monolit?
**Typ:** Slajd decyzyjny / checklisty

**Zawartość:**
Trzy sytuacje, w których to dobry wybór:

✅ System ma kilka wyraźnych obszarów biznesowych, ale skala nie uzasadnia mikroserwisów

✅ Zespół jest mały lub średni i nie chce inwestować w infrastrukturę rozproszoną

✅ Produkt jest w fazie intensywnych zmian — granice domenowe wciąż dojrzewają

**Wizualizacja:**
Trzy karty (cards) z ikoną i krótkim opisem. Styl: jasne tło, duże checkmarki, czytelna typografia.

---

## Slajd 14 — Modularny monolit jako architektura docelowa
**Typ:** Slajd z silną tezą — typograficzny

**Zawartość:**
Duży cytat w centrum slajdu:

> „Modularny monolit nie musi być etapem przejściowym.  
> Może być świadomie wybraną, dojrzałą architekturą na lata."

Pod spodem mały dopisek: „Nie każdy system musi zostać rozbity na mikroserwisy."

**Wizualizacja:**
Minimalistyczny slajd typograficzny — duży tekst, proste tło (granatowe lub ciemnoszare), brak grafik. Siła przekazu tkwi w samym zdaniu.

---

## Slajd 15 — Podsumowanie
**Typ:** Slajd z kluczowymi takeaway'ami

**Zawartość:**
Pięć punktów:

1. Modularny monolit = jeden deployment, wiele modułów biznesowych
2. Granice oparte o domenę, nie o warstwy techniczne
3. Moduły ukrywają implementację, wystawiają kontrakt
4. Bez dyscypliny modularność istnieje tylko w folderach
5. Może być architekturą docelową, nie tylko etapem

Na końcu jedno zdanie podsumowujące: **„Porządek architektoniczny bez natychmiastowego wejścia w koszt architektury rozproszonej."**

**Wizualizacja:**
Pięć ponumerowanych punktów z krótkimi opisami. Ostatnie zdanie wyróżnione — większa czcionka, pogrubienie lub inny kolor. Styl spójny z resztą prezentacji.

---
