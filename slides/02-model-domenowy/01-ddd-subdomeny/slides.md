# Plan prezentacji: Subdomeny w strategicznym DDD

---

## Slajd 1 — Tytułowy

**Zawartość:**
- Tytuł główny: *Subdomeny w strategicznym DDD*
- Podtytuł: *Core, Supporting, Generic — jak odkryć, co naprawdę buduje przewagę firmy*
- Numer lekcji / nazwa kursu (jeśli to część serii)

**Grafika:** Abstrakcyjna ilustracja — mapa podzielona na kawałki o różnej "wadze" (różne wielkości, różne kolory). Sugeruje, że zaraz będziemy coś dzielić i klasyfikować.

**Animacja:** Tytuł pojawia się z lekkim fade-in, kawałki mapy "wsuwają się" po kolei z różnych stron.

---

## Slajd 2 — Problem, z którego wyrósł DDD

**Zawartość:**
- Nagłówek: *Dlaczego w ogóle o tym mówimy?*
- Krótki opis problemu: zespoły traktują każdy fragment systemu tak samo — płatności, logowanie, wysyłka maili
- Puenta na dole: *Tyle samo energii w rzeczy, które wyróżniają firmę, co w te, które można kupić za 5$/mies.*

**Grafika:** Trzy identyczne "klocki" kodu obok siebie, podpisane: Płatności / Logowanie / Maile. Wszystkie w tym samym kolorze, tej samej wielkości — wizualnie podkreśla, że traktujemy je identycznie, mimo że nie powinniśmy.

**Animacja:** Klocki pojawiają się po kolei, a na końcu nad nimi wyskakuje znak zapytania / sygnał "coś tu nie gra".

---

## Slajd 3 — Domena vs Subdomena

**Zawartość:**
- Dwie kolumny obok siebie:
    - **Domena** — cały obszar biznesowy firmy (bank → bankowość, Uber → przewozy + marketplace)
    - **Subdomena** — logiczny, spójny wycinek domeny
- Na dole mocny cytat: *Domena istnieje, nawet jakbyś wyłączył wszystkie serwery.*

**Grafika:** Duży okrąg = Domena. W środku kilka mniejszych, nieregularnych kształtów = Subdomeny. Obok — ikona banku / Ubera jako przykład.

**Animacja:** Najpierw pojawia się duży okrąg (Domena), potem "rozsypują" się w środku mniejsze kawałki (Subdomeny).

---

## Slajd 4 — Fundamentalna myśl lekcji

**Zawartość:**
- Tylko jedno, duże zdanie na środku slajdu: **Subdomen się nie projektuje. Subdomeny się odkrywa.**
- Pod spodem mniejszy tekst: *HR istnieje. Księgowość istnieje. Obsługa klienta istnieje — nawet zanim przyjdzie zespół developerski.*
- Rola architekta: **zidentyfikować, nie wymyślić.**

**Grafika:** Lupa nad mapą biznesu — metafora odkrywania, nie tworzenia.

**Animacja:** Tekst wjeżdża stopniowo słowo po słowie (efekt "typewriter" lub fade), żeby zmusić widza do przeczytania powoli. Lupa porusza się delikatnie nad mapą.

---

## Slajd 5 — Subdomena ≠ Bounded Context

**Zawartość:**
- Nagłówek: *Nie myl tych dwóch pojęć*
- Tabela / dwie kolumny:
    - **Subdomena** → przestrzeń problemu → *co biznes robi* → **odkrywasz**
    - **Bounded Context** → przestrzeń rozwiązania → *jak modelujesz w kodzie* → **projektujesz**
- Na dole ostrzeżenie: *Mieszanie tych pojęć to pierwszy grzech DDD.*

**Grafika:** Dwa obszary oddzielone pionową linią. Z lewej ikona "biznes" (budynek/ludzie), z prawej ikona "kod" (nawiasy klamrowe lub schemat).

**Animacja:** Obie kolumny wjeżdżają symetrycznie z lewej i prawej. Linia oddzielająca je pulsuje na końcu, podkreślając rozdział.

---

## Slajd 6 — Trzy typy subdomen (wprowadzenie)

**Zawartość:**
- Nagłówek: *Nie wszystkie subdomeny są sobie równe*
- Trzy kafelki w rzędzie, na razie tylko nazwy:
    - **Core** (akcent kolorystyczny — np. mocny kolor, bo to "gwiazda")
    - **Supporting** (stonowany, neutralny)
    - **Generic** (szary / wyblakły)
- Pod spodem: *Ten podział zmienia wszystko — od architektury, przez zespół, po budżet.*

**Grafika:** Trzy ikony: korona (Core), filar/kolumna (Supporting), pudełko z kodem kreskowym (Generic — "produkt z półki").

**Animacja:** Kafelki pojawiają się po kolei, każdy z krótką pauzą, żeby widz zdążył przyswoić wagę różnic.

---

## Slajd 7 — Core: mit do obalenia

**Zawartość:**
- Nagłówek: *Core ≠ "ważne"*
- Duże przekreślone: ~~krytyczne~~ ~~najważniejsze~~ ~~kluczowe dla biznesu~~
- Pod spodem podkreślone: **Core to obszar, w którym firma MUSI być lepsza od konkurencji**
- Przykład Ubera: algorytm dopasowania kierowcy + dynamiczne ceny
- Ważna uwaga: *Core to nie zawsze algorytm — bywa procesem (IKEA) albo efektem sieciowym*

**Grafika:** Ikona Ubera / samochodu + mini-diagram: kierowca ↔ algorytm ↔ pasażer. Można dodać ikony IKEA (meble) i efektu sieciowego (węzły grafu).

**Animacja:** Najpierw pojawiają się przekreślone hasła (jedno po drugim, z efektem przekreślenia na żywo), potem wjeżdża prawdziwa definicja Core.

---

## Slajd 8 — Core: gdzie inwestować

**Zawartość:**
- Nagłówek: *Core to nie to, co firma robi najwięcej. To to, co robi inaczej.*
- Lista (krótka, 3 punkty):
    - Najlepsi ludzie
    - Najwięcej czasu
    - Najgłębsze modele domenowe + pełna moc taktycznego DDD

**Grafika:** Wykres / heatmapa: różne obszary firmy, ale jeden świeci jaśniej niż reszta — to Core. Reszta w cieniu.

**Animacja:** Obszary firmy zapalają się kolejno różnymi odcieniami, na końcu jeden "wybucha" jasnym kolorem — to Core.

---

## Slajd 9 — Supporting: solidna inżynieria bez fajerwerków

**Zawartość:**
- Nagłówek: *Supporting — ważne, ale nie wyróżniające*
- Przykłady (Allegro): system zwrotów, katalog kategorii, panel sprzedawcy
- Cytat: *Nikt nie wybiera Allegro dlatego, że mają najlepszy panel sprzedawcy.*
- Krytyczna zasada w ramce: **Supporting służy Core — nie odwrotnie. Jeśli Supporting dyktuje warunki Core'owi, coś jest do góry nogami.**

**Grafika:** Core jako gwiazda w centrum, Supporting jako orbity wokół niej — wizualnie podkreśla, że Supporting "krąży" wokół Core.

**Animacja:** Gwiazda Core pojawia się w centrum, potem orbity Supporting wsuwają się wokół niej. Można dodać delikatny ruch orbitujący.

---

## Slajd 10 — Generic: kupuj, integruj, zapomnij

**Zawartość:**
- Nagłówek: *Generic — Twój problem to problem tysiąca innych firm*
- Przykłady z logotypami (lub ikonami): Auth (OAuth), Maile (SendGrid), Płatności (Stripe)
- Pod spodem mocne hasło: **Kup. Zintegruj. Zapomnij.**

**Grafika:** Półka sklepowa / regał z gotowymi "produktami" — każdy to subdomena generyczna do wzięcia. Logotypy (jeśli pozwolenie) lub uniwersalne ikony.

**Animacja:** Półka pojawia się, na niej kolejno "lądują" pudełka z ikonami dostawców.

---

## Slajd 11 — Pułapka #1: "Zbudujmy własne, to proste"

**Zawartość:**
- Nagłówek: *Pułapka #1 — "Zbudujmy własne"*
- Historia w 3 krokach (np. poziomy pasek czasu):
    1. "To proste, zróbmy sami" (miesiąc 1)
    2. OAuth, rotacja haseł, 2FA… (miesiąc 6)
    3. Niedopracowana biblioteka + zero czasu na Core (miesiąc 12)

**Grafika:** Oś czasu ze smutną krzywą — zaczyna się z entuzjazmem, kończy wypaleniem.

**Animacja:** Kroki pojawiają się sekwencyjnie, krzywa "spada" w dół w miarę dochodzenia do punktu 3.

---

## Slajd 12 — Pułapka #2: Over-engineering w Supporting

**Zawartość:**
- Nagłówek: *Pułapka #2 — Event sourcing w panelu zarządzania*
- Opis: seniorskie zespoły potrafią wrzucić CQRS do fakturowania "bo się przyda"
- Puenta: *Over-engineering tam, gdzie wystarczył CRUD + wypalenie na rzeczach, które nikogo nie interesują.*

**Grafika:** Kontrast: mała prosta skrzynka (CRUD wystarczy) vs. wielka maszyna Rube'a Goldberga (przesadne rozwiązanie). Obok ikona wypalonego dewelopera.

**Animacja:** Najpierw pojawia się prosta skrzynka, potem "rozrasta się" w absurdalną maszynę — wizualny gag, który zapada w pamięć.

---

## Slajd 13 — Dlaczego ten podział ma znaczenie

**Zawartość:**
- Nagłówek: *Klasyfikacja = decyzja o alokacji zasobów*
- Trzy kolumny (Core / Supporting / Generic), a w każdej:
    - Ludzie (ile, jakiej seniorności)
    - Czas (ile inwestujemy)
    - Podejście (taktyczne DDD / solidna inżynieria / kup gotowe)

**Grafika:** Tabela porównawcza, ale wizualna — słupki różnej wysokości pokazujące intensywność inwestycji w każdy obszar.

**Animacja:** Słupki rosną jeden po drugim — Core najwyższy, Generic najkrótszy.

---

## Slajd 14 — Subdomeny podróżują

**Zawartość:**
- Nagłówek: *Subdomeny nie są raz na zawsze*
- Dwa przykłady ruchu w przeciwnych kierunkach:
    - **Wyszukiwarka pełnotekstowa:** Core (20 lat temu) → Generic (dziś, Elasticsearch)
    - **Panel administracyjny:** Supporting (start) → Core (jeśli okaże się wyróżnikiem)
- Konkluzja: *Żywa mapa — wracaj do niej co kilka miesięcy.*

**Grafika:** Strzałki pokazujące ruch między trzema obszarami (Core ↔ Supporting ↔ Generic). Małe ikony "podróżujące" między nimi.

**Animacja:** Ikony "wędrują" po strzałkach między kategoriami, podkreślając dynamikę.

---

## Slajd 15 — Jak rozpoznać subdomeny? Trzy pytania

**Zawartość:**
- Nagłówek: *Trzy pytania biznesowe*
- Trzy duże pytania, każde w osobnej ramce:
    1. **Gdzie zmienia się odpowiedzialność?** (inny dział, inne cele, inne wskaźniki)
    2. **Jak wyglądałaby ta subdomena jako osobna firma?** (czy ma swoich klientów, miary sukcesu?)
    3. **Co by się stało, gdybyśmy oddali ten obszar na zewnątrz?**

**Grafika:** Trzy ikony znaków zapytania / lup, każda prowadzi do osobnej "ścieżki myślenia".

**Animacja:** Pytania pojawiają się kolejno, każde z krótką pauzą na przeczytanie.

---

## Slajd 16 — Pytanie trzecie: klasyfikator decyzyjny

**Zawartość:**
- Nagłówek: *Co by się stało, gdybyśmy oddali ten obszar na zewnątrz?*
- Trzy odpowiedzi = trzy klasyfikacje:
    - *"Nic, zaoszczędzilibyśmy czas"* → **Generic**
    - *"Dałoby się, ale stracilibyśmy elastyczność"* → **Supporting**
    - *"Stracilibyśmy przewagę konkurencyjną"* → **Core**

**Grafika:** Drzewo decyzyjne / flowchart — jedno pytanie, trzy rozgałęzienia prowadzące do klasyfikacji.

**Animacja:** Flowchart buduje się gałąź po gałęzi, każda kończy się "etykietą" (Core/Supporting/Generic) z odpowiednim kolorem.

---

## Slajd 17 — Najczęstszy błąd: "Wszystko jest Core"

**Zawartość:**
- Duże zdanie na środku: **Jeśli wszystko jest Core — to nic nie jest Core.**
- Pod spodem: Realistycznie w większości firm: **1–2 Core**, reszta to Supporting i Generic
- Kontr-pułapka: nie widź subdomen wszędzie — zacznij od jednej Core, którą dobrze rozumiesz

**Grafika:** Diagram "źle" vs "dobrze":
- ŹLE: 10 kafelków, wszystkie oznaczone Core
- DOBRZE: 10 kafelków, 1-2 Core, kilka Supporting, reszta Generic

**Animacja:** Najpierw wersja ŹLE (wszystko świeci na czerwono jako "Core"), potem transformacja — kolory się układają w zdrowy rozkład.

---

## Slajd 18 — DDD to rozmowa, nie ćwiczenie techniczne

**Zawartość:**
- Nagłówek: *Nie rób tego sam przy biurku*
- Treść: Usiądź z domain expertem — kimś, kto rozumie, gdzie firma zarabia
- Podsekcja: *A jeśli nie masz z kim?*
    - AI jako partner do rozmowy
    - Wrzuć listę obszarów → poproś o wstępną klasyfikację
    - Cel: **nie uwierzyć, tylko mieć od czego się odbić**

**Grafika:** Dwa scenariusze obok siebie:
- Idealny: architekt + domain expert przy tablicy
- Realny: architekt + AI jako rozmówca

**Animacja:** Dymki rozmowy pojawiają się między postaciami — pokazują, że to dialog, nie monolog.

---

## Slajd 19 — Podsumowanie: trzy rzeczy

**Zawartość:**
- Nagłówek: *Zabierz z tej lekcji trzy rzeczy*
- Trzy duże punkty:
    1. **Subdomen się nie projektuje — tylko odkrywa.** One już są w biznesie.
    2. **Core to przewaga konkurencyjna.** Nie "ważność". Nie wszystko jest Core.
    3. **Typ subdomeny to decyzja strategiczna.** Mówi, gdzie inwestować, gdzie solidnie pracować, a gdzie kupować gotowce.

**Grafika:** Trzy duże numery (1, 2, 3) z krótkimi ikonami obok (lupa, korona, mapa decyzji).

**Animacja:** Każdy punkt pojawia się z lekkim bounce, żeby podkreślić wagę.

---

## Slajd 20 — Zakończenie

**Zawartość:**
- Proste podziękowanie / zapowiedź: *W następnej lekcji — Bounded Contexts*
- Ewentualnie CTA (pytania, materiały dodatkowe)

**Grafika:** Powrót do wizualu z pierwszego slajdu (mapa z kawałkami), ale teraz kawałki są pokolorowane zgodnie z klasyfikacją Core/Supporting/Generic — pokazuje, że widz właśnie nauczył się "odczytywać" tę mapę.

**Animacja:** Kawałki mapy "zapalają się" kolorami w finale — domykamy narracyjną klamrę.

---
