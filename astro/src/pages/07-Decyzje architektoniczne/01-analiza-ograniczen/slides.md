Na podstawie dostarczonego skryptu.

### Slajd 1

**Wejście po słowach:** „Dzisiaj porozmawiamy o analizie ograniczeń.”
**Tytuł:** Analiza ograniczeń
**Opis slajdu:** -
**Grafika/diagram:** Prosta grafika: decyzja architektoniczna umieszczona wewnątrz ramy z podpisami: biznes, technologia, zespół, prawo, czas, budżet.

### Slajd 2

**Wejście po słowach:** „Zawsze działamy w jakimś kontekście.”
**Tytuł:** Kontekst zawęża wybór
**Opis slajdu:** Pokazać, że architekt nie wybiera technologii w próżni. Teksty na slajdzie: „cele biznesowe”, „istniejące systemy”, „kompetencje zespołu”, „budżet”, „regulacje”, „terminy”, „ryzyka”, „wcześniejsze decyzje”. Slajd ma wspierać narrację o tym, że ignorowanie kontekstu prowadzi do rozwiązań atrakcyjnych na diagramie, ale nietrafionych operacyjnie.

### Slajd 3

**Wejście po słowach:** „Przez ograniczenie rozumiem warunek brzegowy…”
**Tytuł:** Czym jest ograniczenie?
**Opis slajdu:** Slajd porządkujący definicję. Tekst główny: „Ograniczenie = warunek, którego decyzja musi przestrzegać”. Dodatkowo trzy krótkie rozróżnienia: „nie decyzja”, „nie preferencja”, „nie luźna sugestia”. Przykłady: „dane w konkretnym regionie”, „regulacje prawne”, „3 miesiące na MVP”. Osobno wyróżnić przykład do weryfikacji: „zawsze robimy to w Javie”.

### Slajd 4

**Wejście po słowach:** „Nie istnieje jedna architektura, która jest najlepsza w każdym kontekście.”
**Tytuł:** Dopasowanie zamiast ideału
**Opis slajdu:** Slajd porównawczy: po lewej „duża organizacja: wiele zespołów, wysoka skala, dojrzałe operacje”, po prawej „mały zespół: MVP, krótki termin, ograniczone zasoby”. W centrum tekst: „Dobra decyzja = kontekst + cele + ograniczenia + ryzyka”. Ma wspierać tezę, że decyzja architektoniczna nie jest abstrakcyjnie „najlepsza”, tylko adekwatna do sytuacji.

### Slajd 5

**Wejście po słowach:** „Ograniczenia mogą mieć różny charakter.”
**Tytuł:** Typy ograniczeń
**Opis slajdu:** Slajd-mapowanie całej kolejnej części lekcji. Pokazać pięć kategorii: biznesowe, techniczne, regulacyjne/prawne, organizacyjne, czasowe i budżetowe. Przy każdej kategorii jedno krótkie hasło: „cel”, „system”, „compliance”, „zdolność organizacji”, „zasoby”.

### Slajd 6

**Wejście po słowach:** „Część z nich wynika z biznesu.”
**Tytuł:** Ograniczenia biznesowe
**Opis slajdu:** Teksty: „time-to-market”, „kampania marketingowa”, „koszty operacyjne”, „vendor lock-in”. Dodać krótką adnotację: „Architektura wspiera cel biznesowy, nie istnieje sama dla siebie”. Slajd powinien pomóc odbiorcy zobaczyć, że argument biznesowy może zmienić priorytety techniczne.

### Slajd 7

**Wejście po słowach:** „Inny typ ograniczeń to ograniczenia techniczne.”
**Tytuł:** Ograniczenia techniczne
**Opis slajdu:** Pokazać przykłady: „legacy ERP”, „SOAP API”, „istniejąca baza danych”, „Kubernetes”, „dostawca chmury”, „API z limitem przepustowości”. Na dole kontrast: „realne ograniczenie techniczne” vs „przyzwyczajenie techniczne”.
**Grafika/diagram:** Prosty diagram integracji z systemem legacy jako źródłem ograniczenia.

### Slajd 8

**Wejście po słowach:** „Szczególną kategorią są ograniczenia regulacyjne i prawne.”
**Tytuł:** Compliance jako ograniczenie
**Opis slajdu:** Teksty: „prywatność”, „bezpieczeństwo”, „audytowalność”, „retencja danych”, „certyfikacja”, „lokalizacja danych”. Dodać akcent: „Zasada bywa nienegocjowalna, sposób spełnienia — architektoniczny”. Slajd ma wspierać rozróżnienie między ogólnym hasłem typu „RODO” a konkretnym wpływem na projekt systemu.

### Slajd 9

**Wejście po słowach:** „Bardzo istotne są też ograniczenia organizacyjne.”
**Tytuł:** Organizacja też ogranicza
**Opis slajdu:** Teksty: „brak SRE”, „deployment raz w miesiącu”, „brak doświadczenia z technologią”, „długi security review”. Puenta na slajdzie: „Nie każdą architekturę organizacja umie utrzymać”. Slajd powinien uwypuklić ryzyko projektowania ponad realne możliwości zespołów.

### Slajd 10

**Wejście po słowach:** „Do tego dochodzą ograniczenia czasowe i budżetowe.”
**Tytuł:** Ambicja vs zasoby
**Opis slajdu:** Slajd porównawczy: „MVP / mały zespół / krótki termin → prostsza architektura, np. modularny monolit” oraz „wiele zespołów / duża skala / niezależne wdrożenia → bardziej rozproszony model”. Slajd ma wspierać narrację o trade-offie między ambicją architektoniczną a realnymi zasobami.

### Slajd 11

**Wejście po słowach:** „Kiedy zbierzemy już wszystkie ograniczenia…”
**Tytuł:** Konflikty ograniczeń
**Opis slajdu:** Pokazać pary napięć: „termin vs zakres”, „budżet vs niezawodność”, „region danych vs koszt dostawcy”. Tekst główny: „Konflikt ograniczeń to normalny stan, nie błąd analizy”.
**Grafika/diagram:** Diagram napięć, np. trzy osie trade-offów.

### Slajd 12

**Wejście po słowach:** „Pomaga tu rozdzielenie ograniczeń na nienegocjowalne i negocjowalne…”
**Tytuł:** Co naprawdę jest twarde?
**Opis slajdu:** Dwie kolumny: „nienegocjowalne” i „negocjowalne”. Pod spodem tekst: „Rolą architekta jest pokazać konsekwencje wyboru”. Dodać krótką adnotację: „Decyzję zapisz — za pół roku kontekst może być nieczytelny”.

### Slajd 13

**Wejście po słowach:** „Najważniejszym elementem analizy ograniczeń jest jednak odróżnienie ograniczenia realnego od ograniczenia założonego.”
**Tytuł:** Realne czy założone?
**Opis slajdu:** Slajd porównawczy. „Realne: źródło, właściciel, konsekwencje”. „Założone: opinia, interpretacja, nawyk, preferencja”. Przykład konsekwencji: „audyt, SLA, budżet, integracja”. Slajd ma wspierać kluczową umiejętność architekta: weryfikowanie twardości ograniczeń.

### Slajd 14

**Wejście po słowach:** „Dlatego warto zadawać pytania weryfikujące.”
**Tytuł:** Pytania weryfikujące
**Opis slajdu:** Lista pytań jako checklist: „Kto to mówi?”, „Z czego to wynika?”, „Jakie jest źródło?”, „Co się stanie, jeśli tego nie spełnimy?”, „Czy nadal jest aktualne?”, „Czy można negocjować?”, „Czy istnieje inny sposób spełnienia warunku?”. Slajd praktyczny — do wykorzystania przez architekta w rozmowach z interesariuszami.

### Slajd 15

**Wejście po słowach:** „To ostatnie pytanie jest szczególnie ważne…”
**Tytuł:** Warunek ≠ implementacja
**Opis slajdu:** Pokazać trzy przykłady rozdzielenia potrzeby od rozwiązania: „audytowalność ≠ konkretne narzędzie”, „dane w UE ≠ jeden dostawca”, „komunikacja asynchroniczna ≠ Kafka”. Tekst główny: „Ograniczenie opisuje warunek, nie narzuca rozwiązania — chyba że istnieje ku temu powód”.

### Slajd 16

**Wejście po słowach:** „W codziennej pracy architekta warto być więc szczególnie wyczulonym…”
**Tytuł:** Sygnały do doprecyzowania
**Opis slajdu:** Slajd kończący dostępny fragment. Pokazać cytaty jako „czerwone flagi”: „u nas zawsze tak robimy”, „biznes chce real-time”, „musimy mieć mikroserwisy”, „nie możemy użyć chmury”, „to musi być skalowalne”. Obok adnotacja: „Nie odrzucaj — doprecyzuj”. Slajd powinien wspierać praktyczne przejście od słyszanego hasła do mierzalnego ograniczenia. 
