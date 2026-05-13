# Opisy slajdów — lekcja: Coupling

---

## Slajd 1 — Slajd tytułowy

**Wejście:** od początku lekcji, przy słowach *„Cześć, Dzisiaj porozmawiamy o couplingu, czyli o sprzężeniu między modułami."*

**Tytuł:** Coupling — sprzężenie między modułami

**Opis zawartości:**
Slajd tytułowy lekcji. Tytuł główny: „Coupling". Podtytuł: „Sprzężenie między modułami w architekturze oprogramowania". Nazwa kursu, numer lub oznaczenie lekcji (jeśli dotyczy). Slajd pozostaje na ekranie przez pierwsze sekundy wprowadzenia.

---

## Slajd 2 — Definicja couplingu

**Wejście:** przy słowach *„Najprościej mówiąc, coupling to miara tego, jak silnie dwa moduły są ze sobą połączone."*

**Tytuł:** Czym jest coupling?

**Opis zawartości:**
Zwięzła definicja: coupling jako miara siły powiązania między modułami. Pod definicją dwa kontrastujące bloki — po lewej „silne sprzężenie" z krótkimi hasłami: duża wzajemna zależność, znajomość wnętrza, zmiana wywołuje lawinę; po prawej „słabe sprzężenie" z hasłami: niezależność modułów, elastyczność, łatwiejsze testowanie i rozwój.

> **Sugestia graficzna:** Prosty diagram — dwa moduły połączone grubą linią (silne coupling) versus dwa moduły połączone cienką przerywaną linią (słabe coupling). Wizualizacja powinna natychmiast komunikować skalę różnicy.

---

## Slajd 3 — Coupling nie jest z definicji zły

**Wejście:** przy słowach *„Z definicji Coupling nie jest czymś złym."*

**Tytuł:** Coupling ≠ problem

**Opis zawartości:**
Kluczowy komunikat: zależności między modułami są naturalne i nieuniknione — moduły wymieniają dane, wywołują funkcje, reagują na zdarzenia. Problemem nie jest istnienie couplingu, lecz jego forma, siła i zasięg. Krótki cytat-teza na slajdzie: „Dobra architektura nie polega na usuwaniu wszystkich zależności, ale na tym, żeby zależności były świadome, ograniczone, czytelne i stabilne."

---

## Slajd 4 — Coupling, cohesion, modułowość

**Wejście:** przy słowach *„W tym miejscu bardzo dobrze widać związek coupling z modułowością i cohesion."*

**Tytuł:** Trójkąt: modułowość – cohesion – coupling

**Opis zawartości:**
Slajd porządkujący relacje między trzema pojęciami. Trzy elementy z krótkim objaśnieniem roli każdego: modułowość — dzielenie systemu na zarządzalne części; cohesion — czy zawartość modułu realizuje wspólną odpowiedzialność; coupling — jak bardzo moduł zależy od innych. Na dole slajdu zasada projektowa: „Wysoka spójność wewnątrz modułów + niskie sprzężenie między nimi."

> **Sugestia graficzna:** Diagram trójkątny lub trzy powiązane okręgi (nie Venn — raczej schemat relacji), który pokazuje, że te trzy koncepcje współgrają i wzajemnie się warunkują.

---

## Slajd 5 — Content coupling

**Wejście:** przy słowach *„Najbardziej problematyczne jest content coupling."*

**Tytuł:** Content coupling — ingerencja we wnętrze modułu

**Opis zawartości:**
Definicja: moduł A opiera się na wewnętrznej implementacji modułu B zamiast na publicznym interfejsie. Kluczowe zagrożenie: złamanie enkapsulacji — zmiana wnętrza jednego modułu natychmiast psuje drugi. Krótka analogia ze skryptu: „zamiast współpracy przez kontrakt mamy ingerencję w cudzą prywatność". Przykład sytuacji: manipulowanie stanem innej części systemu w sposób nieobjęty publicznym API.

> **Sugestia graficzna:** Schemat dwóch modułów — moduł A „wchodzi" strzałką do wnętrza modułu B (zaznaczonego jako strefa prywatna), z przekreśleniem poprawnego interfejsu.

---

## Slajd 6 — Common coupling

**Wejście:** przy słowach *„Kolejny typ to common coupling, czyli sprzężenie przez wspólny stan."*

**Tytuł:** Common coupling — wspólny, mutowalny stan

**Opis zawartości:**
Definicja: wiele modułów odczytuje i modyfikuje ten sam globalny obiekt (singleton z mutowalnym stanem, globalna konfiguracja, współdzielona pamięć). Problem: ukryte zależności — jeden moduł zmienia stan, inny nagle zachowuje się inaczej bez bezpośredniego wywołania. Konsekwencje: trudność w debugowaniu, wrażliwość na kolejność wywołań, pozornie niewinna zmiana powoduje awarię.

> **Sugestia graficzna:** Diagram — centralny element „wspólny stan" z kilkoma modułami dookoła, z których każdy ma strzałkę odczytu i zapisu. Jedna ze strzałek zapisu jest wyróżniona kolorem ostrzegawczym, żeby zilustrować ryzyko niekontrolowanej modyfikacji.

---

## Slajd 7 — External coupling

**Wejście:** przy słowach *„Jest też external coupling, czyli sprzężenie zewnętrzne."*

**Tytuł:** External coupling — zależność od świata zewnętrznego

**Opis zawartości:**
Definicja: moduły zależą od wspólnego zewnętrznego formatu, protokołu lub systemu (zewnętrzne API, format pliku, baza danych, kolejka, kontrakt JSON). Nie jest z zasady zły, ale staje się groźny, gdy logika systemu jest bezpośrednio uzależniona od konkretnego formatu lub dostawcy. Dobra praktyka wskazana w skrypcie: izolowanie zależności zewnętrznych za pomocą adapterów, warstw pośrednich, własnych modeli domenowych.

---

## Slajd 8 — Control coupling

**Wejście:** przy słowach *„Bardzo częsty w codziennym kodzie jest control coupling."*

**Tytuł:** Control coupling — sterowanie flagami

**Opis zawartości:**
Definicja: moduł wywołujący steruje zachowaniem wywoływanego za pomocą flag i parametrów sterujących (mode, isAdmin, isTest, includeDetails). Sygnał architektoniczny: wywołujący zna zbyt wiele szczegółów wewnętrznej logiki. Konsekwencja: metoda staje się „kombajnem" obsługującym wiele scenariuszy — spadek czytelności, trudniejsze testowanie, rosnąca złożoność z każdym kolejnym parametrem.

---

## Slajd 9 — Stamp coupling vs. Data coupling

**Wejście:** przy słowach *„Mamy też stamp coupling, czyli sprzężenie przez strukturę danych."*

**Tytuł:** Stamp coupling vs. data coupling

**Opis zawartości:**
Slajd porównawczy — dwie kolumny. Lewa kolumna — stamp coupling: przekazujemy cały obiekt (np. User z dziesiątkami pól), choć potrzebny jest tylko fragment; moduł zależy od szerszej struktury niż wymaga; zmiana modelu rozlewa się niepotrzebnie. Prawa kolumna — data coupling: przekazujemy wyłącznie potrzebne dane (np. email + treść wiadomości); moduł deklaruje wprost, czego potrzebuje; mniejsza podatność na efekty uboczne; oznaka dojrzałego projektowania.

> **Sugestia graficzna:** Po lewej ikona dużego obiektu z wyróżnionym jednym polem (reszta wyszarzona — „niepotrzebna"), po prawej ikona dwóch małych, konkretnych wartości przekazanych wprost.

---

## Slajd 10 — Message coupling

**Wejście:** przy słowach *„Jeszcze luźniejszą formą bywa message coupling, czyli sprzężenie przez komunikaty albo zdarzenia."*

**Tytuł:** Message coupling — komunikacja przez zdarzenia

**Opis zawartości:**
Definicja: moduł publikuje zdarzenie lub komunikat, a zainteresowane komponenty reagują samodzielnie — nadawca nie wie, kto obsłuży wiadomość ani co z nią zrobi. Zastosowanie: architektury zdarzeniowe, systemy rozproszone, ograniczanie bezpośrednich zależności. Trade-off wskazany w skrypcie: luźniejsze coupling kosztem rozproszonej logiki i trudniejszego śledzenia przepływu.

---

## Slajd 11 — Spektrum typów couplingu

**Wejście:** ten slajd powinien pojawić się jako podsumowanie całego bloku o typach, tuż po omówieniu message coupling, przed przejściem do objawów — czyli przed słowami *„W praktyce warto patrzeć na coupling przede wszystkim przez objawy."*

**Tytuł:** Spektrum couplingu — od najsilniejszego do najluźniejszego

**Opis zawartości:**
Slajd porządkujący i podsumowujący. Wizualna skala (oś pionowa lub pozioma) od najsilniejszego sprzężenia do najluźniejszego, z wszystkimi omówionymi typami ułożonymi w kolejności: content → common → external → control → stamp → data → message. Przy każdym typie jednozdaniowe hasło przypominające istotę. Skala kolorystyczna od czerwonego (najsilniejsze) do zielonego (najluźniejsze).

> **Sugestia graficzna:** Gradient bar lub schodkowy diagram z etykietami typów — kluczowy slajd referencyjny, do którego prowadzący może wracać.

---

## Slajd 12 — Objawy zbyt wysokiego couplingu

**Wejście:** przy słowach *„W praktyce warto patrzeć na coupling przede wszystkim przez objawy. Po czym poznać, że sprzężenie jest zbyt wysokie?"*

**Tytuł:** Objawy za silnego sprzężenia

**Opis zawartości:**
Trzy główne sygnały ostrzegawcze z treści skryptu: (1) zmiana w jednym miejscu wymaga poprawek w wielu innych — efekt lawiny; (2) test jednostkowy nie uruchomi się bez połowy aplikacji, bazy, kolejki i zewnętrznych zależności; (3) klasy znają za dużo szczegółów o sobie nawzajem — zamiast kontraktu mamy pełną wiedzę o strukturze, stanach i sekwencji działań. Slajd powinien mieć charakter diagnostycznej checklisty — czytelne, krótkie punkty, które architekt może odnieść do własnego systemu.

---

## Slajd 13 — Konsekwencje wysokiego couplingu

**Wejście:** przy słowach *„Wysokie coupling ma bardzo konkretne konsekwencje."*

**Tytuł:** Konsekwencje wysokiego couplingu

**Opis zawartości:**
Pięć konsekwencji wymienionych w skrypcie, ujętych jako zwięzłe hasła: (1) wyższy koszt zmiany — każda modyfikacja droższa i bardziej ryzykowna; (2) spadek testowalności — trudna izolacja, trudne podstawianie zależności; (3) mniejsza zrozumiałość — nie da się zrozumieć modułu bez znajomości kilku innych; (4) ryzyko regresji — nieprzewidziane skutki uboczne; (5) problem organizacyjny — rozmyte granice odpowiedzialności, trudna praca równoległa w zespole.

Slajd powinien czytelnie oddzielać konsekwencje techniczne (1–4) od organizacyjnej (5), np. cienką linią lub zmianą koloru.

---

## Slajd 14 — Praktyki ograniczania couplingu

**Wejście:** przy słowach *„Jak w takim razie projektować systemy, które mają zdrowy poziom coupling?"*

**Tytuł:** Jak ograniczać coupling?

**Opis zawartości:**
Zbiór konkretnych praktyk z treści skryptu: wyraźne granice modułów i komunikacja przez kontrakty; enkapsulacja — ukrywanie implementacji; dependency injection — oddzielenie użycia od tworzenia zależności; przekazywanie tylko potrzebnych danych (nie całych obiektów); rozbijanie funkcji sterowanych flagami na mniejsze operacje; oddzielanie świata zewnętrznego od rdzenia domenowego. Wzorce dla większej skali: porty i adaptery, warstwa antykorupcyjna, komunikacja zdarzeniowa.

---

## Slajd 15 — Przykład: zamówienie i wysyłka maili

**Wejście:** przy słowach *„Żeby to lepiej zrozumieć, weźmy sobie prosty przykład. Mamy moduł odpowiedzialny za składanie zamówienia i moduł odpowiedzialny za wysyłkę maili."*

**Tytuł:** Przykład — zamówienie vs. wysyłka maili

**Opis zawartości:**
Slajd porównawczy z dwoma wariantami. Wariant „słaby projekt" (po lewej): moduł zamówień zna szczegóły SMTP, buduje treść wiadomości, wybiera szablon, wywołuje bibliotekę wysyłki — wysokie coupling z logiką mailową. Wariant „lepszy projekt" (po prawej): moduł zamówień zgłasza zdarzenie „zamówienie złożone" lub wywołuje prosty interfejs „powiadom o złożeniu zamówienia" — reszta dzieje się poza nim. Zysk: wymiana dostawcy poczty, dodanie kolejki lub zmiana szablonów nie wymaga zmian w logice zamówień.

> **Sugestia graficzna:** Dwa schematy blokowe obok siebie. Lewy: moduł zamówień ze strzałkami do SMTP, szablonu, biblioteki. Prawy: moduł zamówień z jedną strzałką do interfejsu/zdarzenia, a dalej osobne bloki obsługi maila. Czytelne oznaczenie „wysokie coupling" vs. „niskie coupling".

---

## Slajd 16 — Przykład: współdzielony model danych

**Wejście:** przy słowach *„Drugim dobrym przykładem jest praca z modelami danych."*

**Tytuł:** Przykład — wspólny model vs. lokalne kontrakty

**Opis zawartości:**
Problem: gdy warstwa prezentacji, logika biznesowa, integracje i zapis do bazy operują na tych samych strukturach, każda zmiana modelu dotyka wielu miejsc. Rozwiązanie: poszczególne części systemu posiadają własne, lokalne modele dopasowane do swoich potrzeb — zmiany stają się ograniczone i lokalne. Trade-off wskazany w skrypcie: nadmiar mapowania też bywa kosztowny — trzeba wyważyć. Zasada: im mniej zbędnej wiedzy o innych modułach, tym większa autonomia.

> **Sugestia graficzna:** Diagram warstwowy. Wariant A: jeden centralny model, z którego korzystają cztery warstwy (prezentacja, logika, integracja, persystencja) — zaznaczone linie zależności prowadzą do jednego punktu. Wariant B: każda warstwa z własnym modelem, połączenia tylko przez mapowanie na granicach.

---

## Slajd 17 — Podsumowanie lekcji

**Wejście:** przy słowach *„Podsumowując, coupling to nic innego jak siła powiązań pomiędzy częściami systemu"*

**Tytuł:** Podsumowanie

**Opis zawartości:**
Slajd zamykający lekcję. Trzy–cztery kluczowe tezy: (1) coupling to siła powiązań między częściami systemu — za tą definicją stoi duża część jakości architektury; (2) zbyt wysokie sprzężenie = sztywność, trudne testowanie, kosztowny rozwój; (3) dobrze kontrolowane sprzężenie = niezależne moduły, lokalne i przewidywalne zmiany; (4) cel: nie eliminować zależności, lecz budować je świadomie, ograniczać i opierać na dobrych kontraktach. Końcowy cytat ze skryptu: „Coupling pokazuje nie tylko, czy system działa dzisiaj, ale też czy będzie się dało z nim rozsądnie żyć jutro, za miesiąc i za kilka lat."

---
