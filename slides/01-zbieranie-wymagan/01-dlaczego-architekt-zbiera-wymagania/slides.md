1. **Tytuł / Hook**

    * Dlaczego architekt powinien zbierać wymagania?
    * Problem space before solution space
    * Architektura zaczyna się przed projektowaniem
    * Sugestia grafiki: split-screen „problem vs solution”

2. **Case study: źle zadane pytania = zła architektura**

    * Overengineering HA dla małego biura
    * Brak przygotowania na realny spike ruchu
    * Feature zgodny ze specyfikacją ≠ rozwiązanie problemu
    * Root cause: brak discovery
    * Sugestia grafiki: schemat „expected load vs real load”

3. **Typowy anty-pattern inżynierski**

    * Ticket → design → implementacja
    * Pominięcie analizy problemu
    * Projektowanie na bazie cudzych założeń
    * Optymalizacja niewłaściwego rozwiązania
    * Sugestia grafiki: pipeline z brakującym etapem discovery

4. **Problem Space vs Solution Space**

    * Ticket = sugestia rozwiązania
    * Nie gwarantuje poprawnej definicji problemu
    * Najpierw domena i kontekst
    * Dopiero później architektura
    * Inspiracja: DDD modelling process
    * Sugestia grafiki: dwie warstwy „discover → design”

5. **Cel IT: rozwiązać problem biznesowy**

    * Kod nie jest produktem końcowym
    * Wartość = rozwiązany problem
    * Czasem rozwiązaniem nie jest software
    * Architekt musi umieć zakwestionować potrzebę budowy
    * Sugestia grafiki: business problem → options analysis

6. **Kiedy NIE budować systemu**

    * Wystarczy zmiana procesu
    * Excel zamiast custom software
    * Gotowe rozwiązanie z rynku
    * ROI nie uzasadnia inwestycji
    * Sugestia grafiki: decision tree build / buy / simplify

7. **Discovery jako fundamental skill architekta**

    * Senior developer pisze kod
    * Architekt odkrywa potrzeby
    * Rozmowy z biznesem
    * Analiza kontekstu
    * Ocena wartości biznesowej
    * Sugestia grafiki: ikony people / business / tech bridge

8. **Owner atrybutów jakościowych**

    * Architekt odpowiada za quality attributes
    * Performance
    * Availability
    * Security
    * Cost
    * Scalability
    * Jeśli pytania nie padły → nadal twój problem
    * Sugestia grafiki: radar chart quality attributes

9. **BA vs Architekt**

    * BA: wymagania funkcjonalne
    * Architekt: wymagania architektoniczne
    * Co system robi vs jak system ma działać
    * Obie role są komplementarne
    * Sugestia grafiki: comparison matrix

10. **Przykład: “wysoka dostępność” nic nie znaczy**

* Ile uptime?
* Akceptowalny downtime?
* RTO / RPO?
* Co z transakcjami podczas awarii?
* Queue czy loss?
* Odpowiedzi determinują architekturę
* Sugestia grafiki: HA decision diagram

11. **Winda architekta**

* Biznes ↔ Technologia
* Procesy ↔ API
* Problemy ↔ Mikroserwisy
* Budżet ↔ Feasibility
* Architekt jako tłumacz kontekstów
* Sugestia grafiki: elevator between business and engineering floors

12. **3 zadania architekta na spotkaniu discovery**

* Zbiera wymagania aktywnie
* Słucha architektonicznie
* Ocenia wykonalność i koszt
* High-level feasibility assessment
* Sugestia grafiki: 3-column framework

13. **Słuchanie architektoniczne**

* Szpital → reliability / compliance
* Startup e-commerce → scalability / speed
* Kontekst zmienia priorytety jakościowe
* Architekt musi to wychwycić natychmiast
* Sugestia grafiki: domain context cards

14. **Warsztat jako narzędzie discovery**

* Nie czekaj na gotowe wymagania
* Facilitate wspólne zrozumienie
* Biznes + technologia w jednym pokoju
* Rysowanie problemu razem
* Sugestia grafiki: collaborative whiteboard

15. **Co daje dobrze poprowadzony warsztat**

* Ukryte założenia wychodzą na jaw
* Sprzeczności między działami
* Shared understanding
* Relacja partnerstwa z klientem
* Wczesna walidacja myślenia
* Sugestia grafiki: sticky notes / collaborative board

16. **Kiedy proponować warsztat**

* Start projektu
* Przed ważną decyzją architektoniczną
* Gdy wymagania są sprzeczne
* Gdy problemu nie da się jasno narysować
* Sugestia grafiki: project timeline markers

17. **Techniki warsztatowe**

* Domain Storytelling
* Event Storming Big Picture
* Wizualizacja domeny
* Wspólny język zespołu
* Diagram > długa rozmowa
* Sugestia grafiki: przykładowe boardy warsztatowe

18. **Siła wizualizacji**

* „Nie, to nie tak”
* Natychmiastowy feedback
* Szybsze wykrywanie błędnych założeń
* Diagram jako medium komunikacji
* Sugestia grafiki: annotated workflow sketch

19. **Kluczowy takeaway**

* Architekt bez zrozumienia problemu:
* projektuje niepotrzebne rozwiązania
* optymalizuje niewłaściwe rzeczy
* zwiększa koszt zmian
* Sugestia grafiki: warning / architecture mismatch

20. **Closing slide**

* Participate in discovery
* Zadawaj właściwe pytania
* Szukaj architektonicznie istotnych informacji
* Architektura zaczyna się od zrozumienia problemu
* Sugestia grafiki: minimalistyczny diagram “understand → design → build”
