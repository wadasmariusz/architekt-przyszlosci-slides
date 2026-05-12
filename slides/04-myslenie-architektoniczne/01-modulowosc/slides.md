# Opisy slajdów — Lekcja: Modułowość

Kurs dla architektów oprogramowania

---

## Slajd 1 — Slajd tytułowy

**Wejście:** Na początku lekcji, przy słowach *„Cześć, w dzisiejszej lekcji chce żebyśmy spojrzeli na architekturę trochę bardziej praktycznie."*

**Tytuł:** Modułowość

**Opis slajdu:**
Slajd tytułowy lekcji. Tytuł „Modułowość" jako centralna fraza. Podtytuł: „Fundament architektury oprogramowania". Minimalistyczny layout, bez punktów — sam tytuł buduje ramy dla całej lekcji.

---

## Slajd 2 — Problem złożoności

**Wejście:** Przy słowach *„większość problemów, które pojawiają się w dużych systemach, bierze się z tego, że system staje się zbyt trudny do zrozumienia, zbyt trudny do zmiany i zbyt mocno powiązany sam ze sobą"*

**Tytuł:** Źródło problemów w dużych systemach

**Opis slajdu:**
Trzy hasła ułożone pionowo, jedno pod drugim, narastająco:
- Zbyt trudny do zrozumienia
- Zbyt trudny do zmiany
- Zbyt mocno powiązany sam ze sobą

Slajd pełni funkcję diagnostyczną — nazywa symptomy, na które odpowiedzią jest modułowość. Prosty układ tekstowy, bez grafiki. Każde hasło powinno być wystarczająco wyeksponowane, żeby prowadzący mógł się przy nim zatrzymać.

---

## Slajd 3 — Czym jest modułowość

**Wejście:** Przy słowach *„Najprościej mówiąc, modułowość to umiejętność podzielenia systemu na mniejsze części w taki sposób, żeby każda z tych części miała swój sens, swoją odpowiedzialność i swoje granice."*

**Tytuł:** Modułowość — definicja robocza

**Opis slajdu:**
Centralna definicja w formie wyróżnionego cytatu lub bloku tekstowego:
*Podział systemu na części, z których każda ma własny sens, odpowiedzialność i granice.*

Pod spodem krótkie zestawienie kontrastowe (dwie kolumny lub dwa bloki):
- **Nie:** jedna wielka masa kodu, gdzie wszystko zależy od wszystkiego
- **Tak:** zbiór elementów, które można rozumieć, rozwijać i utrzymywać lokalnie

Slajd porządkujący — pozwala zakotwić definicję, zanim prowadzący przejdzie do szczegółów.

---

## Slajd 4 — Czym jest moduł

**Wejście:** Przy słowach *„Ale czym w ogóle jest moduł. Moduł to nie musi być od razu osobny mikroserwis, osobne repozytorium czy osobna aplikacja."*

**Tytuł:** Moduł ≠ jednostka deploymentu

**Opis slajdu:**
Slajd wyjaśniający, który rozbija potoczne utożsamienie modułu z mikroserwisem.

Górna część — przekreślone lub wyszarzone przykłady tego, czym moduł *nie musi* być: mikroserwis, osobne repozytorium, osobna aplikacja.

Dolna część — lista przykładów, czym moduł *może* być: komponent, pakiet, biblioteka, fragment monolitu, odseparowany obszar kodu.

Kluczowe zdanie na slajdzie: *„Moduł to świadomie postawiona granica, nie konkretny element technologiczny."*

---

## Slajd 5 — Dobre vs złe granice

**Wejście:** Przy słowach *„Bardzo często źródłem problemów w systemie nie jest sama ilość kodu, tylko to, że granice zostały źle postawione."*

**Tytuł:** Konsekwencje źle postawionych granic

**Opis slajdu:**
**Sugestia: diagram lub prosta grafika porównawcza.**

Dwie strony slajdu:

**Lewa strona — źle postawione granice:**
- Logika rozlewa się po wielu miejscach
- Zmiana w jednym obszarze wymusza zmiany w kilku innych
- Nieprzewidywalny zasięg modyfikacji

**Prawa strona — dobrze postawione granice:**
- Każda część systemu jest przewidywalna
- Zmiany mają ograniczony zasięg
- Zaufanie do systemu

Alternatywnie: dwa uproszczone diagramy modułów — jeden z gęstą siecią zależności (spaghetti), drugi z wyraźnymi, uporządkowanymi połączeniami. Diagram nie musi być skomplikowany — wystarczą prostokąty i strzałki, żeby wizualnie pokazać różnicę.

---

## Slajd 6 — Modułowość a Bounded Context

**Wejście:** Przy słowach *„Warto tu doprecyzować jedno, bo te pojęcia lubią się mieszać. W DDD mamy bounded contexty i subdomeny"*

**Tytuł:** Moduł vs Bounded Context

**Opis slajdu:**
Slajd porównawczy, krótki i precyzyjny.

Dwa bloki obok siebie:

| Moduł | Bounded Context |
|---|---|
| Pojęcie ogólnoarchitektoniczne | Pojęcie z DDD |
| Dowolne kryterium podziału | Granica językowa/domenowa |
| Bounded Context bywa modułem… | …ale moduł nie musi być Bounded Contextem |

Zdanie kluczowe: *„To różne odpowiedzi na to samo pytanie: gdzie postawić granice."*

Slajd rozwiewa częste nieporozumienie — ważny szczególnie dla odbiorców, którzy znają DDD i mogą utożsamiać oba pojęcia.

---

## Slajd 7 — Information Hiding (Parnas)

**Wejście:** Przy słowach *„Z modułowością bardzo mocno wiąże się też idea ukrywania szczegółów."*

**Tytuł:** Ukrywanie informacji (Information Hiding)

**Opis slajdu:**
Slajd wyjaśniający kluczową koncepcję — powinien utrzymać się na ekranie przez dłuższy fragment narracji.

Główna myśl: *Dobry moduł ukrywa sposób, w jaki realizuje swoją odpowiedzialność. Otoczenie zna tylko interfejs, nie wewnętrzne decyzje.*

Odwołanie do źródła:
- David Parnas, *„On the Criteria To Be Used in Decomposing Systems into Modules"* (1972)
- Kryterium dekompozycji: nie kroki przetwarzania, lecz **decyzje projektowe, które mogą się zmienić**

**Sugestia: prosty diagram** — moduł jako prostokąt z widocznym interfejsem (wąski pasek na górze) i ukrytym wnętrzem (zaciemniona/zasłonięta reszta). Strzałki od innych modułów trafiają tylko do interfejsu. Diagram powinien pokazywać, że inne moduły nie mają dostępu do wnętrza.

---

## Slajd 8 — Trzy filary oceny granic

**Wejście:** Przy słowach *„I tu pojawia się naturalne pytanie skąd wiemy, czy nasze granice są dobre?"*

**Tytuł:** Trzy filary oceny modułowości

**Opis slajdu:**
Slajd porządkujący — zapowiada kolejne lekcje i daje strukturę do zapamiętania.

Trzy elementy wyeksponowane równorzędnie (np. trzy kolumny lub trzy bloki):

1. **Cohesion (spójność)** — na ile elementy wewnątrz jednego modułu są ze sobą powiązane
2. **Coupling (sprzężenie)** — jak silnie moduły zależą od siebie nawzajem
3. **Connascence (współzależność/konascencja)** — termin uzupełniający, rozwinięty w kolejnych lekcjach

Adnotacja na slajdzie: *„Szczegóły w kolejnych lekcjach"* — sygnał, że to zapowiedź, nie pełne omówienie.

---

## Slajd 9 — Zalety modułowości

**Wejście:** Przy słowach *„Zalety modułowości są więc bardzo konkretne."*

**Tytuł:** Co daje dobra modułowość

**Opis slajdu:**
Pięć konkretnych korzyści, każda w jednym zwięzłym zdaniu:

1. Łatwiejsze zrozumienie systemu — patrzenie fragmentami, nie na całość
2. Łatwiejsze wprowadzanie zmian — ograniczony zasięg modyfikacji
3. Łatwiejsze testowanie — wyraźniejsze granice, jednoznaczne zachowania
4. Łatwiejsza praca zespołowa — mniej kolizji w kodzie
5. Łatwiejsze utrzymanie — architektura wolniej się degraduje

Slajd podsumowujący argumenty „za". Układ listowy jest tu uzasadniony, bo prowadzący wymienia korzyści jedną po drugiej.

---

## Slajd 10 — Koszty modułowości

**Wejście:** Przy słowach *„Jednocześnie trzeba powiedzieć, że modułowość ma też swoją cenę."*

**Tytuł:** Cena modułowości

**Opis slajdu:**
Slajd pokazujący trade-off — równoważy wcześniejszy slajd o zaletach.

Koszty wymienione na slajdzie:
- Projektowanie komunikacji między modułami
- Pilnowanie interfejsów
- Decyzje o widoczności (co publiczne, co prywatne)
- Ryzyko przeciekania szczegółów implementacji
- Potrzeba ewolucji granic w czasie — idealny podział rzadko istnieje od początku

Kluczowe zdanie: *„Modułowość wymaga dyscypliny i świadomego projektowania."*

Brak sugestii grafiki — slajd tekstowy, który stanowi kontrast wobec optymistycznego tonu poprzedniego slajdu.

---

## Slajd 11 — Podsumowanie

**Wejście:** Przy słowach *„Podsumowując celem Modułowości jest to, żeby system był łatwiejszy do zrozumienia, łatwiejszy do zmiany i łatwiejszy do utrzymania."*

**Tytuł:** Cel modułowości

**Opis slajdu:**
Slajd zamykający lekcję. Prosty test sensowności podziału na moduły, sformułowany jako dwa scenariusze kontrastowe:

**Podział ma sens, gdy:**
→ szybciej rozumiesz, jak coś działa; łatwiej wprowadzasz zmiany; łatwiej testujesz; łatwiej przewidujesz skutki uboczne

**Podział jest zły, gdy:**
→ każda zmiana wymaga skakania po wielu miejscach i pociąga za sobą kolejne

Zdanie końcowe na slajdzie: *„Modułowość to fundament architektury — wyznaczaj granice tak, żeby kolejna zmiana nie była walką z całym systemem."*