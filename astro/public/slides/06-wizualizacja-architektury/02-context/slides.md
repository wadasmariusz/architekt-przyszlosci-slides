# Opisy slajdów — Lekcja: Diagram kontekstowy (C4, poziom 1)

---

## Slajd 1

**Wejście po słowach:** *„Zrobiliśmy sobie już taki przelot nad całym modelem C4. Patrzyliśmy na niego z lotu ptaka…"*

**Tytuł:** Diagram kontekstowy — poziom 1 modelu C4

**Opis:** Slajd tytułowy lekcji. Zawiera tytuł „Diagram kontekstowy (Context) — C4, poziom 1", podtytuł w stylu „System widziany z najwyższego poziomu". Opcjonalnie: krótka wizualna przypominajka — cztery poziomy C4 ułożone pionowo (Context → Container → Component → Code), z wyraźnym wyróżnieniem pierwszego poziomu jako aktywnego tematu lekcji. Reszta poziomów wyszarzona lub wyciszona wizualnie.

---

## Slajd 2

**Wejście po słowach:** *„Ja bardzo lubię porównywać C4 do Google Maps, bo ta metafora naprawdę dobrze to ilustruje."*

**Tytuł:** Metafora: C4 jak Google Maps

**Opis:** Slajd wizualny z analogią do map. Po lewej stronie — sekwencja zoomowania mapy: kraj → miasto → dzielnica → ulica → budynek (może być uproszczona grafika lub seria ikon z etykietami). Po prawej — odpowiadające im poziomy C4: Context → Container → Component → Code. Strzałki lub linie łączą odpowiadające sobie pary. Kluczowy przekaz wizualny: diagram kontekstowy = widok satelitarny, najwyższy poziom oddalenia.

**Adnotacja:** Grafika/diagram porównawczy. Statyczne zestawienie dwóch kolumn z dopasowaniem poziomów.

---

## Slajd 3

**Wejście po słowach:** *„Jeszcze nie interesuje nas, ile mamy serwisów, jak wygląda baza danych, gdzie jest API, jakie są kolejki, jakie są frameworki. Na tym etapie zadajemy tylko jedno pytanie…"*

**Tytuł:** Czym jest ten system i jak wpasowuje się w świat dookoła?

**Opis:** Slajd z wyraźnie wyeksponowanym centralnym pytaniem jako tytułem. Pod spodem dwa bloki:

Pierwszy blok — pytania, na które odpowiada diagram kontekstowy:
- Kto korzysta z systemu?
- Z jakimi systemami się integruje?
- Gdzie przebiega granica odpowiedzialności?
- Co system daje światu zewnętrznemu i czego od niego potrzebuje?

Drugi blok — lista elementów, które na tym poziomie świadomie pomijamy: serwisy, bazy danych, API, kolejki, frameworki, klasy, tabele. Lista przekreślona lub wyszarzona, żeby wizualnie podkreślić, że to nie jest temat tego poziomu.

Slajd porządkujący — definiuje zakres i granice tego, o czym będziemy mówić, i jednocześnie daje widzowi ramę pytań na całą lekcję.

---

## Slajd 4

**Wejście po słowach:** *„Diagram kontekstowy pokazuje nasz system jako jeden prostokąt w centrum, otoczony użytkownikami i innymi systemami."*

**Tytuł:** Anatomia diagramu kontekstowego

**Opis:** Slajd z uproszczonym, schematycznym diagramem kontekstowym — jeszcze nie przykład bankowy, tylko generyczny szablon. W centrum prostokąt z etykietą „Nasz system (czarna skrzynka)". Wokół niego: ikony osób z etykietą „Użytkownicy / Aktorzy (role)" oraz prostokąty z etykietą „Systemy zewnętrzne". Między elementami strzałki z etykietą „Relacje". Każdy typ elementu oznaczony innym kolorem lub kształtem, zgodnie z konwencją C4. Slajd pełni funkcję referencyjną — prezentuje pełen zestaw klocków, z których składa się ten typ diagramu.

**Adnotacja:** Diagram. Powinien być czytelny i schematyczny, nie konkretny — to szablon, nie przykład.

---

## Slajd 5a

**Wejście po słowach:** *„Spójrzmy teraz na przykład Internet Banking System, czyli klasyczny przykład używany przy C4."*

**Tytuł:** Przykład: Internet Banking System — system

**Opis:** Pierwszy slajd z serii budującej diagram krok po kroku. Na środku ekranu sam prostokąt „Internet Banking System" z krótkim opisem: *„Pozwala klientom banku sprawdzać saldo, wykonywać przelewy i zarządzać podstawowymi usługami bankowymi online."* Reszta diagramu jeszcze nie widoczna — puste otoczenie. Widz skupia uwagę na centralnym elemencie i jego opisie. Układ przestrzenny identyczny jak na docelowym pełnym diagramie, żeby kolejne slajdy naturalnie go dopełniały.

**Adnotacja:** Diagram — fragment. Wzorcowy przykład C4 Simona Browna. Układ przestrzenny musi być spójny z slajdami 5b–5d.

---

## Slajd 5b

**Wejście po słowach:** *„Dookoła systemu mamy osoby. W C4 często mówi się o aktorach, ale ważne jest, że nie chodzi o konkretne jednostki, tylko o role."*

**Tytuł:** Przykład: Internet Banking System — aktor

**Opis:** Diagram z poprzedniego slajdu wzbogacony o aktora. Obok prostokąta systemu pojawia się ikona osoby z etykietą „Personal Banking Customer". Strzałka od aktora do systemu jeszcze bez opisu lub z opisem, jeśli układ na to pozwala. Reszta diagramu nadal pusta. Widz widzi, że diagram buduje się przyrostowo — teraz wie, kto korzysta z systemu.

**Adnotacja:** Diagram — rozbudowa poprzedniego slajdu o jedną warstwę.

---

## Slajd 5c

**Wejście po słowach:** *„Następny element to systemy zewnętrzne. To są systemy, z którymi nasz system się komunikuje, ale które są poza jego granicą odpowiedzialności."*

**Tytuł:** Przykład: Internet Banking System — systemy zewnętrzne

**Opis:** Diagram rozbudowany o systemy zewnętrzne. Do istniejącego układu (system + aktor) dochodzą prostokąty systemów zewnętrznych, np. „E-mail System", „Mainframe Banking System". Widoczne jest teraz pełne otoczenie systemu — aktor i systemy zewnętrzne — ale jeszcze bez opisanych relacji między nimi.

**Adnotacja:** Diagram — kolejna warstwa. Systemy zewnętrzne wizualnie odróżnione kolorem od centralnego systemu (zgodnie z konwencją C4).

---

## Slajd 5d

**Wejście po słowach:** *„No i mamy relacje, czyli strzałki między elementami."*

**Tytuł:** Przykład: Internet Banking System — pełny diagram

**Opis:** Kompletny diagram kontekstowy z wszystkimi relacjami. Strzałki między elementami mają opisy intencji biznesowej (np. „wysyła powiadomienia e-mail", „pobiera informacje o koncie"). To jest docelowa, pełna wersja diagramu — widz zbudował go razem z prowadzącym krok po kroku przez slajdy 5a–5d. Slajd pozostaje widoczny jeszcze przez moment, zanim prowadzący przejdzie do omawiania dobrych praktyk.

**Adnotacja:** Diagram — pełna wersja. To jest slajd referencyjny, do którego prowadzący może wracać w dalszej części lekcji.

---

## Slajd 6

**Wejście po słowach:** *„Nie wystarczy sama nazwa, bo sama nazwa bardzo często jest myląca albo zbyt ogólna."*

**Tytuł:** Jak opisywać system na diagramie

**Opis:** Slajd z wytyczną dotyczącą opisu centralnego prostokąta. Dwie kolumny porównawcze:
- **Źle:** sam prostokąt z napisem „Internet Banking System" — brak kontekstu, zbyt ogólne.
- **Dobrze:** prostokąt z nazwą + 1–2 zdania opisu odpowiedzialności systemu.

Krótka adnotacja pod spodem: *„Nazwa + krótki opis odpowiedzialności — standard na diagramach C4."* Slajd porównawczy — uczy dobrej praktyki przez kontrast.

---

## Slajd 7

**Wejście po słowach:** *„Rysujemy więc nie «Jana Kowalskiego», tylko na przykład klienta banku, pracownika obsługi…"*

**Tytuł:** Aktorzy = role, nie osoby

**Opis:** Slajd wyjaśniający koncepcję aktora w diagramie kontekstowym. Grafika: jedna ikona osoby z etykietą roli (np. „Klient banku"), a od niej odchodzą cienkie linie do wielu małych ikon symbolizujących tysiące prawdziwych użytkowników. Przekaz wizualny: jedna ikona reprezentuje całą grupę. Pod grafiką krótka lista przykładowych ról: klient banku, pracownik obsługi, administrator, zewnętrzny partner, operator. Slajd wyjaśniający — prostuje częste nieporozumienie, że aktor = konkretna osoba.

**Adnotacja:** Prosta grafika ilustrująca relację 1 rola → wielu użytkowników.

---

## Slajd 8

**Wejście po słowach:** *„Systemy zewnętrzne to systemy, z którymi nasz system się komunikuje, ale które znajdują się poza jego granicą odpowiedzialności."*

**Tytuł:** Systemy zewnętrzne — poza granicą odpowiedzialności

**Opis:** Slajd definiujący, czym jest system zewnętrzny w kontekście diagramu. Krótka definicja: *„System, z którym się integrujemy, ale którego nie kontrolujemy."* Pod spodem — źródła systemów zewnętrznych jako zwięzła lista: inny zespół, inny dział, inna firma, partner technologiczny, zewnętrzny dostawca. Obok lub niżej — konkretne przykłady z domeny bankowej: system e-mail, system SMS, zewnętrzny system płatności, system scoringowy, system weryfikacji tożsamości.

---

## Slajd 9

**Wejście po słowach:** *„Bardzo ważna zasada: pokazujemy tylko bezpośrednie integracje."*

**Tytuł:** Zasada: tylko bezpośrednie integracje

**Opis:** Slajd z prostym diagramem ilustrującym zasadę. Dwa warianty:
- **Dobrze:** „Nasz system" → strzałka → „System A" (System A jest na diagramie).
- **Źle:** „Nasz system" → „System A" → „System B" (System B niepotrzebnie na diagramie naszego systemu, zaznaczony jako błąd — przekreślenie lub czerwona ramka).

Pod diagramem tekst: *„Context pokazuje bezpośrednie otoczenie, nie cały ekosystem organizacji."* Slajd z regułą i anty-wzorcem — uczy przez kontrast dobrej i złej praktyki.

**Adnotacja:** Diagram porównawczy (dobrze vs. źle).

---

## Slajd 10

**Wejście po słowach:** *„Warto też nazywać systemy po imieniu. Nie piszemy «API», «zewnętrzny endpoint» albo «baza danych partnera»."*

**Tytuł:** Nazywaj systemy po imieniu

**Opis:** Slajd porównawczy z parami zestawionymi obok siebie:

| Źle | Dobrze |
|---|---|
| API płatności | Stripe — dostawca płatności |
| endpoint SMS | Twilio — system wysyłki SMS |
| baza danych partnera | System scoringowy KRD |

Każda para w osobnym wierszu, żeby wzrok naturalnie porównywał złą i dobrą wersję tego samego przypadku.

Krótka adnotacja pod tabelą: *„Diagram kontekstowy odpowiada na pytanie biznesowe i architektoniczne, nie dokumentuje mechanizmu połączenia."*

---

## Slajd 11

**Wejście po słowach:** *„Na przykład: «wysyła dane faktury», «pobiera status płatności»…"*

**Tytuł:** Relacje — intencja biznesowa, nie implementacja

**Opis:** Slajd z przykładami dobrze opisanych relacji. Lista strzałek z opisami:
- „wysyła dane faktury"
- „pobiera status płatności"
- „wysyła powiadomienia"
- „uwierzytelnia użytkownika"
- „sprawdza dostępność samochodu"
- „przekazuje dane rezerwacji"

Pod spodem kontrprzykłady — jak NIE opisywać relacji: „POST /api/v2/payments", „TCP/443", „REST call" — przekreślone lub wyszarzone. Kluczowy przekaz: opisujemy CO się dzieje, nie JAK technicznie.

---

## Slajd 12

**Wejście po słowach:** *„Najtrudniejszym elementem diagramu kontekstowego jest granica systemu."*

**Tytuł:** Najtrudniejsze: granica systemu

**Opis:** Slajd podkreślający kluczowy problem. Centralny tekst, wyróżniony wizualnie: *„Co jest w środku, a co jest na zewnątrz?"* Pod spodem wyjaśnienie w formie krótkiego zdania: *„Granica systemu = deklaracja odpowiedzialności. Za to odpowiadamy, to utrzymujemy. Reszta jest poza nami."* Slajd celowo minimalistyczny — ma zatrzymać uwagę na jednym kluczowym pytaniu, które prowadzący rozwinie w narracji.

---

## Slajd 13

**Wejście po słowach:** *„I dlatego Context potrafi uruchomić bardzo dobre rozmowy. Nagle okazuje się, że różne osoby w organizacji mają różne wyobrażenia o tym, czym właściwie jest system."*

**Tytuł:** Jedno pytanie, różne odpowiedzi

**Opis:** Slajd ilustrujący rozbieżności w postrzeganiu granic systemu przez różne osoby w organizacji. Forma: ta sama uproszczona sylwetka systemu, ale z różnymi granicami rysowanymi przez różne role:
- **Deweloper:** frontend + backend + baza danych
- **DevOps / zespół platformowy:** + procesy batchowe
- **Osoba biznesowa:** cała usługa kliencka, łącznie z elementami innych zespołów
- **Architekt:** jeszcze inny przebieg granicy

Każda granica narysowana innym kolorem lub stylem linii, z etykietą roli. Slajd wizualizuje problem, który prowadzący opisuje — diagram kontekstowy zmusza do wyciągnięcia tych ukrytych założeń na stół.

**Adnotacja:** Diagram z wieloma nakładającymi się granicami. Kluczowa grafika lekcji — wizualizuje, dlaczego ustalanie granicy systemu jest trudne i wartościowe.

---

## Slajd 14

**Wejście po słowach:** *„Na tym etapie wiecie już, czym jest diagram kontekstowy, po co go robimy, z jakich elementów się składa i gdzie najczęściej pojawiają się pułapki."*

**Tytuł:** Podsumowanie — diagram kontekstowy

**Opis:** Slajd podsumowujący lekcję. Zwięzłe zestawienie kluczowych punktów:
- System jako czarna skrzynka w centrum
- Aktorzy = role, nie osoby
- Systemy zewnętrzne = tylko bezpośrednie integracje
- Relacje opisane intencją biznesową
- Najtrudniejsze: świadome określenie granicy systemu

Slajd zamykający blok merytoryczny — porządkuje to, co zostało omówione.

---

## Slajd 15

**Wejście po słowach:** *„W następnym odcinku weźmiemy naszą wypożyczalnię samochodów, którą znacie już z Event Stormingu…"*

**Tytuł:** Następna lekcja — budujemy diagram kontekstowy od zera

**Opis:** Slajd zapowiadający kolejną lekcję. Krótki tekst: *„Diagram kontekstowy dla wypożyczalni samochodów — od zera."* Pod spodem zapowiedź tego, co będzie ustalane: użytkownicy systemu, systemy zewnętrzne, granica odpowiedzialności, opisy relacji czytelne dla zespołu technicznego i biznesowego. Opcjonalnie: ikonka lub miniatura nawiązująca do domeny wypożyczalni (samochód, klucz, kalendarz). Slajd pełni funkcję bridge'a do następnego odcinka.

---

**Podsumowanie zmian w tej wersji:**

Slajd 5 rozbity na cztery osobne slajdy (5a–5d), budujące diagram Internet Banking System krok po kroku: system → aktor → systemy zewnętrzne → pełny diagram z relacjami. Układ przestrzenny spójny między slajdami, żeby widz miał wrażenie narastania jednego diagramu.

Slajd 3 wzbogacony o cztery pytania, na które odpowiada diagram kontekstowy. Daje widzowi ramę na całą lekcję.

Slajd 6 — złagodzone sformułowanie z „Zawsze" na „standard na diagramach C4".

Slajd 10 — przeformatowany na pary zestawione w tabeli (źle/dobrze dla tego samego przypadku), czytelniejsze w polskojęzycznym kursie.

Łączna liczba slajdów: **18** (numeracja: 1, 2, 3, 4, 5a, 5b, 5c, 5d, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15).