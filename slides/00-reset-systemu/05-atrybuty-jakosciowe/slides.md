# Slajdy do lekcji: Atrybuty jakościowe

---

## Slajd 1 - Tytuł
**Nagłówek:**
Atrybuty jakościowe

**Podtytuł:**
Fundament decyzji architektonicznych

**Layout:**
- Dużo pustej przestrzeni
- Jedno mocne hasło na środku
- Delikatne tło (np. gradient / ciemny)

---

## Slajd 2 - Problem
**Nagłówek:**
System działa… aż do produkcji

**Treść (krótkie hasła):**
- Wszystkie feature’y gotowe
- Testy przechodzą
- Produkcja → awaria

**Dół slajdu (wyróżnienie):**
Kto za to odpowiada?

**Layout:**
- 3 punkty + jedno mocne pytanie

---

## Slajd 3 - Odpowiedzialność
**Nagłówek:**
Odpowiedzialność architekta

**Treść:**
- Nie feature’y
- Nie backlog
- **Jakość systemu**

**Wyróżnienie:**
Architekt odpowiada za atrybuty jakościowe

---

## Slajd 4 - Góra lodowa
**Nagłówek:**
Wymagania systemu

image_group{"aspect_ratio":"1:1","query":["iceberg diagram visible hidden requirements software","iceberg metaphor business hidden complexity","iceberg ocean minimal illustration","software requirements iceberg diagram"],"num_per_query":1}

**Overlay tekstowy:**
- Nad wodą: funkcjonalności
- Pod wodą: atrybuty jakościowe

---

## Slajd 5 - Dwa typy wymagań
**Nagłówek:**
Dwa światy

**Kolumny:**

**Funkcjonalne**
- Logowanie
- Zamówienie
- Raport

**Jakościowe**
- Wydajność
- Bezpieczeństwo
- Skalowalność

---

## Slajd 6 - Problem nazewnictwa
**Nagłówek:**
"Wymagania niefunkcjonalne"?

**Treść:**
- Brzmi jak: mniej ważne
- Traktowane jako techniczny detal

**Wyróżnienie (duże):**
Mów: jakość systemu

---

## Slajd 7 - Kontekst ma znaczenie
**Nagłówek:**
To zależy od systemu

**Treść (2 przykłady):**
- Szpital → dostępność = krytyczna
- Startup MVP → szybkość zmian

**Wniosek (wyróżnienie):**
Priorytety zależą od biznesu

---

## Slajd 8 - Trade-offy
**Nagłówek:**
Nie da się mieć wszystkiego

**Treść:**
- Bezpieczeństwo ↑ → wydajność ↓
- Dostępność ↑ → złożoność ↑

**Wyróżnienie:**
Zawsze wybierasz kompromisy

---

## Slajd 9 - Etykiety vs znaczenie
**Nagłówek:**
"System ma być szybki"

**Treść:**
To nie jest wymaganie

**Wyróżnienie:**
To tylko etykieta

---

## Slajd 10 - Wydajność vs skalowalność
**Nagłówek:**
Dwa różne pojęcia

**Treść (porównanie):**

**Wydajność**
- Szybkość odpowiedzi

**Skalowalność**
- Zachowanie przy wzroście ruchu

---

## Slajd 11 - arc42
**Nagłówek:**
arc42

**Treść:**
- Framework dokumentacji architektury
- Definicje atrybutów jakościowych
- Gotowa struktura

---

## Slajd 12 - Model atrybutu
**Nagłówek:**
Atrybut jakościowy = 3 elementy

**Treść (poziomo):**
- Atrybut
- Scenariusz
- Metryka

---

## Slajd 13 - Najważniejszy element
**Nagłówek:**
Scenariusz

**Treść:**
Najczęściej pomijany

**Wyróżnienie:**
Bez scenariusza - brak kontekstu

---

## Slajd 14 - Przykład
**Nagłówek:**
Wydajność

**Tabela:**
- Atrybut: wydajność
- Scenariusz: 1000 użytkowników jednocześnie
- Metryka: < 300 ms (p99)

---

## Slajd 15 - Kluczowa zasada
**Nagłówek:**
To nie jest wymaganie

**Wyróżnienie (duże):**
Atrybut bez scenariusza i metryki = życzenie

---

## Slajd 16 - Wpływ na architekturę
**Nagłówek:**
Atrybuty kształtują architekturę

**Treść:**
- Dostępność → redundancja
- Modyfikowalność → modularność
- Bezpieczeństwo → kontrola danych

---

## Slajd 17 - Podsumowanie
**Nagłówek:**
Najważniejsza myśl

**Wyróżnienie (centralnie):**
Atrybuty jakościowe kształtują architekturę

---

## Slajd 18 - Call to action
**Nagłówek:**
Zanim wybierzesz architekturę

**Treść:**
Zadaj pytanie:

**Wyróżnienie:**
Jakie są atrybuty jakościowe?

---