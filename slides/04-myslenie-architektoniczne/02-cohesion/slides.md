# Opisy slajdów — Lekcja: Spójność (Cohesion)

---

## Slajd 1

**Wejście po słowach:** *„Cześć, W tej lekcji porozmawiamy sobie o spójności z angielskiego kohision."*

**Tytuł:** Spójność (Cohesion)

**Opis:** Slajd tytułowy lekcji. Tytuł w dwóch językach: „Spójność" z podtytułem „Cohesion". Nazwa kursu / moduł, do którego należy lekcja. Minimalistyczny — pełni funkcję otwierającą i orientacyjną.

---

## Slajd 2

**Wejście po słowach:** *„Spójność odpowiada na pytanie, czy elementy znajdujące się wewnątrz jednego modułu rzeczywiście należą do siebie i czy razem tworzą sensowną całość."*

**Tytuł:** Czym jest spójność?

**Opis:** Slajd definicyjny. Kluczowe sformułowanie: spójność opisuje, jak bardzo odpowiedzialności wewnątrz modułu są ze sobą logicznie związane. Poniżej dwa krótkie kontrasty:

- Wysoka spójność → moduł ma jasny cel, można go nazwać i opisać jednym zdaniem.
- Niska spójność → moduł robi „po trochu wszystkiego" — logika biznesowa obok obsługi maili, logowania, walidacji, dostępu do bazy i formatowania PDF-ów.

Slajd wspiera moment, w którym prowadzący buduje intuicję pojęcia, zanim przejdzie do systematyki.

---

## Slajd 3

**Wejście po słowach:** *„Dobrze jest od razu rozróżnić spójność od sprzężenia, bo te pojęcia bardzo często występują razem."*

**Tytuł:** Spójność vs. sprzężenie

**Opis:** Slajd porównawczy. **Sugestia: prosty diagram.** Grafika przedstawia jeden moduł (prostokąt) z dwiema strzałkami-perspektywami:

- Strzałka skierowana do wewnątrz modułu → podpis „Spójność (cohesion) — co dzieje się w środku?"
- Strzałka skierowana na zewnątrz, ku innym modułom → podpis „Sprzężenie (coupling) — jakie są relacje z innymi?"

Pod diagramem cel architektoniczny: „Wysoka spójność wewnątrz + luźne powiązanie na zewnątrz."

Slajd porządkuje relację między dwoma pojęciami, które bywają mylone.

---

## Slajd 4

**Wejście po słowach:** *„Jest cała skala, cała taksonomia, którą zaproponowali Leri Konstyntin i Edłerd Jordon jeszcze w latach siedemdziesiątych…"*

**Tytuł:** Skala spójności — Constantine & Yourdon

**Opis:** Slajd orientacyjny / „mapa" całej taksonomii. **Sugestia: diagram — pionowa skala (termometr lub oś) od dołu do góry**, z siedmioma poziomami oznaczonymi nazwami polskimi i angielskimi:

1. Przypadkowa (Coincidental) — najgorsza
2. Logiczna (Logical)
3. Czasowa (Temporal)
4. Proceduralna (Procedural)
5. Komunikacyjna (Communicational)
6. Sekwencyjna (Sequential)
7. Funkcyjna (Functional) — najlepsza

Bez szczegółowych opisów — slajd pełni rolę nawigacyjną. Prowadzący będzie teraz omawiał każdy poziom po kolei, a odbiorca widzi całość i wie, gdzie w skali się znajduje. Ten slajd może pozostać widoczny jako „tło" lub miniatura podczas omawiania poszczególnych typów.

---

## Slajd 5

**Wejście po słowach:** *„Na samym dole mamy spójność przypadkową, po angielsku coincidental cohesion."*

**Tytuł:** Spójność przypadkowa (Coincidental)

**Opis:** Slajd wyjaśniający z przykładem. Treść:

- Definicja: elementy nie mają ze sobą nic wspólnego — są razem, bo ktoś nie miał lepszego pomysłu, gdzie je umieścić.
- Przykład: klasa `Utils` / `Helpers` — formatowanie daty, walidacja e-mail, obliczanie odległości, parsowanie XML w jednej klasie.
- Efekt: „worek na śmieci", który z czasem rośnie do klasy z dziesiątkami metod bez żadnej tożsamości.

Slajd powinien wizualnie wyróżniać ten typ jako najgorszy (np. czerwone oznaczenie poziomu na skali z poprzedniego slajdu lub czerwony pasek u góry).

---

## Slajd 6

**Wejście po słowach:** *„Krok wyżej mamy spójność logiczną, logical cohesion."*

**Tytuł:** Spójność logiczna (Logical)

**Opis:** Slajd wyjaśniający z przykładem i analogią. Treść:

- Definicja: elementy robią rzeczy „logicznie podobne", ale nie współpracują ze sobą.
- Przykład: klasa grupująca wszystkie walidatory (adresu, telefonu, kodu pocztowego, PESEL-u) — łączy je tylko słowo „validate", choć operują na różnych danych i kontekstach.
- Analogia z narracji: „Jak wrzucenie do jednego pudełka wszystkich niebieskich rzeczy w domu — skarpetki, długopis, książka. Kryterium jest, ale bezużyteczne."

Analogia powinna być wyróżniona graficznie (np. boczny panel / ikona / inny kolor tła) — pełni rolę zapamiętywania.

---

## Slajd 7

**Wejście po słowach:** *„Następny typ to spójność czasowa, temporal cohesion."*

**Tytuł:** Spójność czasowa (Temporal)

**Opis:** Slajd wyjaśniający z przykładem. Treść:

- Definicja: elementy są razem, bo wykonują się w tym samym momencie.
- Przykład: metoda `onAppStartup()` / `initialize()`, która realizuje wiele niepowiązanych zadań: ładowanie konfiguracji, połączenie z bazą, rejestracja handlerów, ustawienie locale, ping do monitoringu, tworzenie katalogu logów.
- Wyróżnik: jedynym spoiwem jest punkt w czasie; przy zmianie kolejności inicjalizacji wiele elementów mogłoby żyć w osobnych modułach.

---

## Slajd 8

**Wejście po słowach:** *„Potem mamy spójność proceduralną, procedural cohesion."*

**Tytuł:** Spójność proceduralna (Procedural)

**Opis:** Slajd wyjaśniający z przykładem. Treść:

- Definicja: elementy są razem, bo następują po sobie w sekwencji kroków.
- Przykład: moduł, który kolejno sprawdza uprawnienia → pobiera dane z bazy → loguje operację. Kroki nie dzielą między sobą danych — łączy je tylko to, że ktoś je ułożył w sekwencję.
- Różnica względem spójności czasowej: jest logiczna kolejność, ale wciąż brak wspólnego kontekstu danych.

---

## Slajd 9

**Wejście po słowach:** *„Kolejny typ to spójność komunikacyjna, communicational cohesion…"*

**Tytuł:** Spójność komunikacyjna (Communicational)

**Opis:** Slajd wyjaśniający z przykładem. Treść:

- Definicja: elementy operują na tych samych danych — mają wspólny kontekst.
- Przykład: moduł zamówienia z metodami: walidacja zamówienia, obliczenie wartości, zastosowanie rabatu, wygenerowanie potwierdzenia — wszystkie pracują na tym samym obiekcie `Order`.
- Wyróżnik: to pierwszy typ, w którym grupowanie ma silne uzasadnienie merytoryczne (wspólne dane).

**Sugestia:** Drobna grafika — jeden obiekt „Zamówienie" w centrum, a wokół niego 4 operacje wskazujące na niego strzałkami. Czytelnie pokazuje ideę wspólnego kontekstu danych.

---

## Slajd 10

**Wejście po słowach:** *„Jeszcze wyżej mamy spójność sekwencyjną, sequential cohesion."*

**Tytuł:** Spójność sekwencyjna (Sequential)

**Opis:** Slajd wyjaśniający z przykładem. **Sugestia: diagram pipeline.** Treść:

- Definicja: wyjście jednego elementu jest wejściem kolejnego — jak linia produkcyjna.
- Przykład jako diagram: `Pobranie danych` → `Czyszczenie i transformacja` → `Walidacja` → `Zapis do bazy`. Strzałki między krokami symbolizują przepływ danych.
- Wyróżnik: usunięcie jednego kroku rozbija cały pipeline. Powiązanie jest nie tylko logiczne, ale i strukturalne (przepływ danych).

Diagram pipeline jest tu wyjątkowo pomocny — wizualnie odróżnia ten typ od spójności proceduralnej (tam kroki nie przekazują sobie danych).

---

## Slajd 11

**Wejście po słowach:** *„I wreszcie na samym szczycie mamy spójność funkcyjną, functional cohesion."*

**Tytuł:** Spójność funkcyjna (Functional)

**Opis:** Slajd wyjaśniający — wyróżniony wizualnie jako „ideał" (np. zielone oznaczenie, ikona celu). Treść:

- Definicja: wszystkie elementy współpracują, by zrealizować jedną, dobrze zdefiniowaną funkcję. Żadnego nie można usunąć bez zniszczenia tej funkcji.
- Przykład: moduł autoryzacji płatności — walidacja karty, komunikacja z bramką płatniczą, obsługa odpowiedzi, logowanie transakcji. Wszystko podporządkowane jednemu celowi.
- Test litmusowy (wyróżniony): „Jeśli potrafisz opisać swoją klasę jednym zdaniem bez użycia słowa »i« — prawdopodobnie masz spójność funkcyjną."

---

## Slajd 12

**Wejście po słowach:** *„Teraz warto odpowiedzieć na pytanie, po co nam właściwie wysoka spójność."*

**Tytuł:** Korzyści z wysokiej spójności

**Opis:** Slajd porządkujący — lista pięciu korzyści wymienianych w skrypcie:

1. **Czytelność** — moduł z jasnym celem szybciej się rozumie; łatwiejsze wdrożenie nowych osób.
2. **Łatwiejsze zmiany** — zmiany w jednym obszarze zamykają się w jednym miejscu.
3. **Testowalność** — mniej zależności i efektów ubocznych → łatwiejsze testy jednostkowe.
4. **Reużywalność** — wyspecjalizowany moduł łatwiej zastosować w innym kontekście.
5. **Mniejsze ryzyko efektów ubocznych** — poprawka w jednej części nie psuje innej.

Tu lista jest uzasadniona — prowadzący wymienia pięć punktów w szybkim tempie. Slajd pomaga je zapamiętać.

---

## Slajd 13

**Wejście po słowach:** *„Spójność ma też ogromne znaczenie przy wyznaczaniu granic architektonicznych na wyższym poziomie, nie tylko klas."*

**Tytuł:** Spójność na poziomie architektury

**Opis:** Slajd pokazujący skalowanie zasady spójności poza poziom klas. **Sugestia: diagram warstwowy / zagnieżdżone prostokąty** — od najmniejszego do największego: klasa → pakiet → moduł aplikacyjny → bounded context → mikroserwis.

Wspólne pytanie dla każdego poziomu: „Co naprawdę należy do siebie i co wspiera jeden obszar odpowiedzialności?"

Antyprzykład z narracji: mikroserwis, który jednocześnie obsługuje płatności, katalog produktów i rekomendacje marketingowe — zbyt szeroka granica.

---

## Slajd 14

**Wejście po słowach:** *„…spójność nie jest tylko problemem technicznym. To bardzo mocno łączy się z domeną biznesową."*

**Tytuł:** Spójność a domena biznesowa

**Opis:** Slajd porównawczy — dwa podejścia do grupowania kodu:

| Grupowanie wg domeny biznesowej | Grupowanie wg typu technicznego |
|---|---|
| Zamówienia, Płatności, Rozliczenia, Faktury, Zwroty | Kontrolery, Serwisy, Repozytoria, Helpery |
| Wyższa szansa na spójność | Ryzyko utraty sensu odpowiedzialności |

Komentarz: podział techniczny bywa potrzebny, ale sam w sobie nie gwarantuje dobrej architektury. Najbardziej naturalnie spójne moduły powstają wokół pojęć domenowych.

Slajd podkreśla perspektywę architektoniczną — decyzja o sposobie grupowania ma realne konsekwencje dla spójności.

---

## Slajd 15

**Wejście po słowach:** *„Podsumowując, spójność to jedno z fundamentów dobrej architektury…"*

**Tytuł:** Podsumowanie

**Opis:** Slajd zamykający lekcję. Trzy–cztery kluczowe tezy do zapamiętania:

- Spójność mówi, czy wnętrze modułu ma sens jako całość.
- Wysoka spójność = elementy należą do siebie i realizują jeden cel → czytelność, testowalność, bezpieczeństwo zmian.
- Niska spójność = moduły przypadkowe, przeładowane, trudne w utrzymaniu.
- Pytanie końcowe (wyróżnione): „Nie wystarczy zapytać, na ile części podzieliliśmy system. Trzeba zapytać, czy każda z nich jest wewnętrznie sensowna."

Slajd domyka narrację i zostawia odbiorcę z jednym, zapamiętanym zdaniem.