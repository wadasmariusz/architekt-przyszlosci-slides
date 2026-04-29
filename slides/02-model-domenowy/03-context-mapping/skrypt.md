#Context Mapping — architektura społeczna systemu

Systemy są złożone. To nie jest opinia to fakt. Biznesowe problemy mają masę reguł, wyjątków, zależności, i nie ma jednej osoby która ogarnia to wszystko naraz. Dlatego dzielimy je na mniejsze, rozwiązywalne kawałki — każdy taki kawałek to Bounded Context, ze swoim modelem domenowym, swoim językiem, swoim teamem.

I to działa. Ale jest jedno "ale".

Te konteksty muszą ze sobą integraujac, aby dostarczyc calosciowa funkcjonalnosc.

I tu zaczyna się problem którego żaden styl architektury nie rozwiązuje za ciebie. Możesz mieć mikroserwisy, event-driven, modularny monolit — nieważne. Jeśli twój zespol czeka dwa sprinty żeby inny zespol wrzucił coś do backloga, twoja architektura nie działa. Nie technicznie — organizacyjnie.

Zalozmy ze Zespol odpowiedzialny za zamowienie potrzebuje jednej zmiany w API katalogu. Dodatkowe pole w response. Prosty ticket. Trafia do backloga katalogu, oni sa odzielny zespolem maja swojego PO,swoja roadmape musze to uzwglednic. Ticket leży. Tydzień, dwa, miesiąc. Team zamówień buduje workaround — scrapuje dane z innego endpointu, sam liczy to czego potrzebuje. Sześć miesięcy później workaround zaczyna zwracać błędne dane dla jednej kategorii. Dwa tygodnie szukania przyczyny. Nikt już nie kojarzy że to stamtąd.

Jestem ciekaw — czy masz w swoim projekcie coś takiego? Ticket który leży w backlogu innego teamu i blokuję twój development? Zostaw w komentarzu.

Bo właśnie od tego jest Context Mapping.

Context Map rysujesz w dwóch sytuacjach. Pierwsza: projektujesz system od zera — greenfield. Zanim zaczniesz pisać kod, musisz wiedzieć jak podzielisz odpowiedzialności, które teamy będą ze sobą współpracować i kto będzie na kogo zależny. Bez mapy te decyzje podejmujesz intuicyjnie i odkrywasz konsekwencje po pół roku. Druga: wchodzisz w istniejący system — brownfield. Context Mapping pokazuje ci co faktycznie istnieje, nie to co stoi w dokumentacji sprzed trzech lat. I dopiero z tą mapą w ręku podejmujesz świadome decyzje: gdzie postawić granicę, który wzorzec wybrać, gdzie jest ryzyko którego nie widać w kodzie.

-----SOCIO-TECHNICAL ARCHITECTURE----------------

Zanim przejdziemy do typow relacji. Zrozumny inna prespektywe

Socio-technical architecture. To podejcie gdzie patrzymy na komponetny techniczne i oraganiazacje zespolow.

"Socio" to ludzie, teamy, organizacja. "Technical" to kod. I te dwie rzeczy są nierozłączne — bo kod piszą ludzie, a jak ci ludzie są zorganizowani, tak wygląda kod który tworzą. Prawo Conveya, Grawitacja to juz wiemy.
Context Mapping to narzędzie które to pokazuje Bouded context i typ wspolpracy zespolow.

Jako architekt który organizuje pracę wielu zespołów, musisz wiedzieć kto na kogo czeka, kto blokuje kogo i gdzie są zależności których nie widać w kodzie. Context Mapping daje ci tę świadomość — zanim te zależności zamienią się w opóźnienia.

Context Map nie pokazuje jak moduły integrauja technicznie. Pokazuje kto na kogo czeka, kto ma władzę, gdzie jest bottleneck, gdzie jeden team blokuje pięć innych. I co ważne — jest niezależna od stylu architektury. W monolicie te relacje też istnieją, tylko ich nie widać. Widać je dopiero jako bugi i opóźnienia.

Jak narysować Context Mapę? Nie potrzebujesz specjalnego narzędzia. Mozesz to zrobic w dowolnym narzedzi do diagramow.

Jest jeden termin który musisz rozumieć zanim przejdziemy dalej.

Upstream i downstream.

Upstream ma władzę. Decyduje co zmienia, kiedy wdraza, co wchodzi do backloga i w jakiej kolejności. Downstream dostosowuje się. Czeka. Reaguje.

Pomyśl o rzece. Upstream to źródło — decyduje co i kiedy płynie. Downstream dostaje to co upstream wyśle, w takiej formie w jakiej to wyśle. Jeśli upstream ma awarię, downstream stoi. Jeśli upstream zmienia format danych, downstream musi się dostosować.

Często jest tak że nasz kontekst tylko coś wyświetla albo przetwarza — a całą odpowiedzialność za dane ma upstream. Wtedy nasza praca zależy bezpośrednio od tego czy upstream działa i co dostarcza.

Przykladowo mam zespol ktory odpowiada za sklep a drugi za procesowanie zamowien. Jesli zamowienie nie przyszlo ze sklepu w widoku procesowania sie zamowinie sie nie pojawi dopoki upstream nie dziala, downstream tez nie zadziala.

Wróćmy do przykładu — team zamówień pisze ticket do katalogu. Katalog ma własnego PO, własne priorytety. Ticket czeka. Team zamówień jest downstream i nie może nic zrobić poza czekaniem albo budowaniem workaroundów.

Zanim zaczniesz projektować jakąkolwiek integrację — odpowiedz sobie na jedno pytanie: kto tu jest upstream? Skąd ta władza pochodzi? Ze struktury organizacji? Z kontraktu z zewnętrznym vendorem? Z tego że jeden serwis ma 12 lat i wszyscy się do niego dopasowali?

To od razu mówi ci który wzorzec tu pasuje i gdzie będą tarcia.


Jeszcze jeden aspekt, temopo dostarczania funkcjonalnosci.
Jeden zespol moze dostarczac 2x na tydzien i inny wdrozenie raz na miesiac bo legacy, mniejszy team to tez bedzie mialow wplyw.

Jestem ciekawy — jak to wygląda u Ciebie? Masz w projekcie sytuację gdzie nikt tak naprawdę nie wie kto jest upstream? Daj znać w komentarzu.

---

Ok, mamy upstream i downstream — teraz zobaczmy jak ta relacja wygląda w praktyce. Jest kilka wzorców. Eric Evans opisuje je w swojej książce o DDD — jeśli jej nie czytałeś, warto. Tu przejdziemy przez nie konkretnie, na przykładach.

---

Pierwsza sytuacja: dwa teamy które są od siebie totalnie zależne. Jeśli team płatności nie dostarczy, team zamówień też nie może deployować. Jeśli team zamówień zmienia kontrakt, płatności muszą wiedzieć z wyprzedzeniem. Planują razem, testują razem, mają jeden board. W Context Mapping to się nazywa sie to relacja **Partnership**.

Kiedy działa: team płatności i team zamówień w e-commerce, wspólny PO, podobne tempo. Obaj wiedzą co się dzieje u sąsiadniego zepsolu.

Kiedy to się sypie? team katalogu deployuje dwa razy w tygodniu, team notyfikacji raz na dwa tygodnie. Każdy PR czeka na approve drugiej strony. Po kwartale team katalogu zaczyna pushować zmiany bez pytania. Atmosfera pada, partnership zostaje tylko w dokumentacji.

Przed wejściem w ten układ sprawdź dwie rzeczy: czy oba teamy mają podobne velocity i czy jest jeden człowiek który decyduje gdy interesy się kłócą. Bez tego nie ta metoda pracy nie zadziala.

---

Druga sytuacja: jest ktoś kto dostarcza i ktoś kto konsumuje. Team zamówień przychodzi do katalogu: "potrzebujemy pole `currencyCode` w response". Katalog wrzuca do backloga, planuje w sprincie, dostarcza. Downstream czeka, ale wie kiedy dostanie i może negocjować co dokładnie. To **Customer/Supplier** — najczystszy układ gdy masz jasno oddzielone konteksty.

Problem: gdy jeden upstream obsługuje dziesięć downstream teamów. Każdy ma pilne tickety. Backlog katalogu rośnie. Zmiana która powinna trwać dzień czeka miesiąc, bo zawsze jest coś ważniejszego.

Więcej niż cztery downstream teamy to sygnał — ten układ zaczyna się kruszyć. I tu wchodzi kolejna opcja.

---

Jeśli jeden kontekst obsługuje wielu konsumentów — zamiast robić prywatne integracje dla każdego z osobna, publikuje formalny wersjonowany protokół. To **Open Host Service**.

Przykład który rozumie każdy: serwis do generowania dokumentów — umów, faktur, potwierdzeń. Ma publiczne API i każdy w organizacji o tym wie. Team sprzedaży chce wygenerować umowę? Nie pisze tego sam — idzie do API serwisu dokumentów. Team HR potrzebuje potwierdzenia zatrudnienia? To samo API. Team finansów — faktury? To samo API.

Serwis dokumentów nie robi nikomu nic "pod zamówienie". Ma publiczny kontrakt, dokumentację, changelog. Chcesz coś zmienić — zgłaszasz propozycję. Decyzję podejmuje właściciel serwisu. Jeden kontekst, jedno API, wszyscy wiedzą gdzie iść.

Często chodzi razem z **Published Language** — formalnym schematem który opisuje co można wygenerować i w jakim formacie. Downstream nie musi zgadywać jak się dointegrauja z serwisem dokumentów — jest kontrakt i się go trzymasz.

Od trzech-czterech downstream teamów zacznij myśleć o tym układzie. Wersjonuj od początku. Traktuj to jak publiczne API — bo nim jest.

---

Trzecia sytuacja to integracja z zewnętrznym systemem. Nie ma żadnych negocjacji. Masz zewnętrzny SaaS — Stripe, SendGrid, dowolny vendor — i ich API jest jakie jest. Adaptujesz się albo nie używasz. To **Conformist** — bierzesz model upstream taki jaki jest, bez wpływu na jego kształt.

Jaka tutaj jest pulapka: gdy model zewnętrznego vendora zaczyna wsiąkać głęboko do twojego kodu. Team płatności używa klas SDK Stripe bezpośrednio w logice domenowej. `StripePaymentIntent` zamiast własnego `PaymentOrder`. Rok działa świetnie. Stripe wydaje nową wersję SDK, zmienia strukturę klas. Refaktor trwa trzy tygodnie — nie dlatego że warstwa integracji jest duża, ale dlatego że klasy vendora są wszędzie głęboko w kodzie.

I właśnie do tego służy kolejna wzorzec.

---

Jeśli musisz żyć z cudzym modelem — zbuduj warstwę tłumaczącą. Na wejściu brudny model z zewnątrz, na wyjściu czysty obiekt domenowy. Reszta kodu nie wie że cokolwiek zewnętrznego istnieje. To **Anti-Corruption Layer**, w skrócie ACL.

Przykład: legacy system magazynowy, dwadzieścia lat kodu, `Order` to tabela z 60 polami, połowa deprecated, nazwy kolumn z lat 90. Team pisze nowy serwis który musi czytać stany magazynowe. Zamiast importować ten chaos, buduje ACL: wchodzi legacy `Order`, wychodzi czysty `InventoryStatus` z pięcioma polami których faktycznie potrzebuje. Za trzy lata wymieniasz legacy — zmieniasz tylko ACL. Reszta kodu się nie rusza.

Przy każdej integracji z legacy albo zewnętrznym systemem którego model odbiega od twojego — buduj ACL. Koszt to dodatkowa warstwa. Zysk to izolacja. Conformist bez ACL to dług który kiedyś spłacisz refaktorem, pytanie tylko kiedy i ile.

---

Kolejna sytuacja podejmujemy swiadoma decyzje ze nie robimy integracji. Każdy rozwiązuje swój problem lokalnie. Brzmi jak błąd. Często jest najlepszą decyzją — i ma nazwę: **Separate Ways**.

Trzy pytania decyzyjne: Czy integracja kosztuje więcej niż duplikacja? Czy coupling tych kontekstów spowolni oba teamy? Czy każdy może żyć bez spójności danych z drugim? Tak na wszystkie trzy — rozchodzisz się.

Team sprzedaży, team magazynu i team logistyki — każdy generuje swój raport lokalnie z własnej bazy, eksportuje CSV. Trzy pliki zamiast jednego "idealnego" dashboardu. Żaden team nie czeka na nikogo, każdy deploy niezależny.

Zanim odrzucisz ten wariant jako nieelegancki — policz faktyczny koszt integracji: czas developmentu, overhead koordynacji, ryzyko kaskadowych deployów. Duplikacja jest tańsza niż myślisz. Coupling jest droższy niż wygląda.

---

Ostatni wzorzec: dwa konteksty współdzielają fragment kodu i modelu w postaci współdzielonej paczki — biblioteki którą oba teamy wersjonują i utrzymują razem. Każda zmiana wymaga zgody obu stron. To **Shared Kernel**.

Kiedy to ma sens: masz logikę biznesową która jest zbyt skomplikowana żeby ją kopiować i musi być identyczna w kilku miejscach. Klasyczny przykład — kalkulator rabatów. Team sprzedaży i team zamówień obaj go potrzebują, ale reguły są złożone: progi kwotowe, segmenty klientów, wyjątki sezonowe, stackowanie promocji. Zduplikujesz — za pół roku masz dwie wersje które powoli zaczynają się różnić i nikt nie wie która jest prawdziwa. Wydzielasz do Shared Kernel — masz jedno miejsce, jeden właściciel reguły, jedną wersję prawdy.

To samo dotyczy wspólnych reguł biznesowych które definiują jak działa firma — na przykład reguły walidacji zamówień które muszą być spójne między kontekstem przyjęcia zamówienia i kontekstem jego realizacji.

Ale jest pułapka: Shared Kernel kusi właśnie tym że "wygląda efektywnie — po co duplikować?" I przez to rośnie. Zaczyna od kalkulatora rabatów, kończy na 40% wspólnego modelu. Kto robi review PRa? Kto blokuje merge gdy obie strony chcą czegoś innego? Kto testuje? Kto jest właścicielem?

Team zamówień i team magazynu zaczynają od "kilku shared event types". Przez dwa lata kernel rośnie do 40% wspólnego modelu. Oba teamy przestają móc deployować niezależnie. Nikt nie wie co do kernela należy, a co nie.

Zasada: do Shared Kernel trafia tylko to co jest zbyt złożone żeby duplikować i zbyt krytyczne żeby mieć dwie wersje. Wszystko inne — duplikuj albo wydziel jako Open Host Service. Kernel musi mieć jasno zdefiniowanego właściciela i granicę której pilnujesz aktywnie.
---

Ok, masz mapę. Co z nią robisz?

Nie traktujesz jej jak dokumentacji. Traktujesz jak listę pytań do zadania na najbliższym spotkaniu z teamem.

Szukasz trzech sygnałów.

Pierwszy: łańcuchy zależności. A zależy od B, B od C, C od D. Zmiana w D musi przejść przez trzy backlogi i trzech product ownerów zanim dotrze do A. To najwolniejsza ścieżka w twoim projekcie. Jeśli biznes chce szybkich zmian właśnie tu masz strukturalny problem którego żadna prędkość developmentu nie naprawi.

Drugi: kontekst z za dużą liczbą strzałek wchodzących. Pięć, sześć teamów od niego zależy. Albo jest permanentnie przeciążony, albo stał się god contextem — wie o wszystkim, każda zmiana gdzie indziej do niego uderza. Bottleneck i single point of failure w jednym.

Trzeci: Conformist bez ACL przy krytycznym zewnętrznym systemie. Twoja Core Domain bezpośrednio zależy od vendora który może zmienić API bez pytania. To ryzyko — nazwij je wprost na mapie, zamiast chować w kodzie.

Context Mapping nie mówi ci co zrobić. Mówi ci gdzie patrzeć. I daje ci język do rozmów których nie możesz prowadzić samym kodem.

Pokażesz tę mapę PO i nagle rozumie dlaczego "prosta zmiana" czeka już dwa sprinty — widzi przez ile rąk musi przejść każdy ticket. Pokażesz CTO i ma podstawę do decyzji o własności danych która blokuje projekt od roku.

To jest wartość socio-technical podejścia. Nie rysujesz architektury technicznej. Rysujesz organizację ukrytą za kodem.


I jedno pytanie na koniec: czy ten wzorzec wybrałeś świadomie — czy po prostu tak wyszło?

Jeśli "tak wyszło" — napisz w komentarzu jaki wzorzec masz i jak do tego doszło. Jestem ciekawy czy to co opisuję pasuje do tego co widzisz na co dzień w swojej robocie.

Do zobaczenia.
