# **Plan Prezentacji: Trzy Prawa Architektury**

## **Slajd 1: Tytułowy**

**Wizualizacja:** Centralnie umieszczony duży, elegancki napis. Dużo "white space".

* **Nagłówek:** Trzy Prawa Architektury  
* **Podtytuł:** Wspólny język decyzji projektowych.  
* **Element graficzny:** Trzy cienkie, pionowe linie o różnej wysokości (symbolizujące balans/trade-off).

## **Slajd 2: Wprowadzenie**

**Wizualizacja:** Krótkie, mocne hasło na środku.

* **Treść:** Architekt nie szuka "najlepszych" rozwiązań. Architekt zarządza ceną decyzji.  
* **Notatka:** To slajd wprowadzający do filozofii trade-offu.

## **Slajd 3: I Prawo Architektury**

**Wizualizacja:** Numer "01" w tle (duży, o niskim kontraście).

* **Nagłówek:** WSZYSTKO to trade-off.  
* **Treść:** Nie ma idealnych rozwiązań. Są tylko kompromisy.  
* **Ikona:** Prosta waga szalkowa w formie geometrycznej.

## **Slajd 4: Przykłady Trade-offów (Tabela Balansu)**

**Wizualizacja:** Dwie kolumny, zestawione jako przeciwieństwa.

* **Treść:**  
  * Bezpieczeństwo ↔ Wydajność  
  * Dostępność ↔ Spójność (CAP)  
  * Elastyczność ↔ Prostota  
  * Time-to-market ↔ Doskonałość techniczna

## **Slajd 5: Najmniej złe rozwiązanie**

**Wizualizacja:** Słowo "KONTEKST" wyróżnione innym kolorem.

* **Nagłówek:** Szukamy "najmniej złego" rozwiązania.  
* **Cytat:** "Jeśli nie wiesz, co tracisz – nie rozumiesz swojej decyzji."  
* **Dół slajdu:** Pytania kontrolne: Co zyskuję? Co tracę? Jaka jest cena?

## **Slajd 6: II Prawo Architektury**

**Wizualizacja:** Numer "02" w tle.

* **Nagłówek:** Prawo Conwaya  
* **Treść:** Architektura systemu odzwierciedla strukturę komunikacyjną organizacji.  
* **Element graficzny:** Schemat: Po lewej 3 grupy kropek (zespoły), po prawej 3 połączone kwadraty (moduły). Linie połączeń są identyczne.

## **Slajd 7: Odwrócone Prawo Conwaya**

**Wizualizacja:** Infografika procesu.

* **Treść:** Chcesz zmienić architekturę? Zmień strukturę zespołów.  
* **Przykład:** Spotify (Squads & Tribes).  
* **Hasło:** Granice komunikacji \= Granice systemu.

## **Slajd 8: Sygnały Ostrzegawcze (Conway)**

**Wizualizacja:** Minimalistyczna lista z ikonami ostrzegawczymi.

* **Treść:**  
  * Niekończące się spotkania o "kontraktach".  
  * Powielona logika w różnych zespołach.  
  * Distributed Monolith (wspólne deploymenty).  
  * Zespół platformowy jako wąskie gardło.

## **Slajd 9: III Prawo Architektury**

**Wizualizacja:** Numer "03" w tle.

* **Nagłówek:** Adaptowalność \> Perfekcja  
* **Treść:** Oprogramowanie to proces, nie stan.  
* **Cytat:** "Make the change easy, then make the easy change." – Kent Beck

## **Slajd 10: Koszt Zmiany**

**Wizualizacja:** Wykres liniowy.

* **Oś Y:** Koszt  
* **Oś X:** Rozmiar zmiany  
* **Linia:** Proporcjonalna (dobra architektura) vs Wykładnicza (zła architektura).  
* **Hasło:** Architektura ma absorbować zmiany z gracją.

## **Slajd 11: Zielone vs Czerwone Światła**

**Wizualizacja:** Podział slajdu na pół (lewa/prawa).

* **Zielone (Adaptowalność):** Niezależny deployment, onboarding w tydzień, zmiany w jednym miejscu.  
* **Czerwone (Sztywność):** "Nie ruszaj, bo się posypie", dwa sprinty na nowe pole, koordynacja wielu zespołów.

## **Slajd 12: Synteza: Case Study**

**Wizualizacja:** Prosty diagram e-commerce (Monolit \-\> Mikroserwisy).

* **Zysk:** Skalowanie, niezależność.  
* **Koszt (Trade-off):** Spójność ewentualna, monitoring, sieć.  
* **Warunek sukcesu:** Podział zespołów wg domen (Conway).

## **Slajd 13: Self-Reflection (Zadanie)**

**Wizualizacja:** Trzy duże znaki zapytania.

* **Pytanie 1:** Ostatni trade-off w Twoim projekcie?  
* **Pytanie 2:** Gdzie przebiegają linie sporu między zespołami?  
* **Pytanie 3:** Jak trudno byłoby zmienić model płatności?

## **Slajd 14: Podsumowanie (The Takeaway)**

**Wizualizacja:** Trzy punkty w formie ikon.

1. **Trade-off:** Nie ma ideałów.  
2. **Conway:** Ludzie kształtują kod.  
3. **Adaptowalność:** Projektuj pod zmianę.