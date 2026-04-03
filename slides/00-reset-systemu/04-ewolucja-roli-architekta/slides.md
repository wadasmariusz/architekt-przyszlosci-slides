# Moduł 0 — Ewolucja roli architekta oprogramowania

---

## Slide 1: Tytuł
**Architekt oprogramowania w erze AI**
*Jak zmieniała się rola architekta przez 7 dekad — i dokąd zmierza*

---

## Slide 2: Oś czasu (animowana)
Wizualizacja: pozioma oś czasu z ikonami kolejnych er

```
[1950s]        [1970s]        [1990s]        [2000s]        [2006+]        [2020s+]
  🖥️              💾             🌐              ☁️              🐳              🤖
Mainframe    Minikomputery   Internet      Chmura       Mikrousługi       AI
```
> Animacja: kolejne ery pojawiają się jedna po drugiej

---

## Slide 3: ERA Mainframe
**Jeden człowiek, jedna maszyna**

Wizualizacja: duży komputer + mała postać obok

- Brak pojęcia "architekt" — był **główny programista**
- Decyzje podyktowane przez sprzęt
- 4 KB pamięci = zmieść program w 4 KB

> 💡 Lekcja na dziś: **zasoby zawsze mają swoją cenę** — nawet w chmurze

---

## Slide 4: ERA Minikomputerów
**Z budynku — na biurko**

Wizualizacja: animacja zmniejszającego się komputera

```
[Cały budynek] → [Pokój] → [Biurko]
```

Nowy problem:
- Wielu użytkowników
- Wiele maszyn
- Ktoś inny musi to utrzymywać

---

## Slide 5: David Parnas (1972)
**Ukryj decyzję projektową**

Wizualizacja: moduły jako klocki z zamkniętymi wnętrzami

```
┌──────────┐   ┌──────────┐   ┌──────────┐
│ Moduł A  │   │ Moduł B  │   │ Moduł C  │
│ ┌──────┐ │   │ ┌──────┐ │   │ ┌──────┐ │
│ │??????│ │   │ │??????│ │   │ │??????│ │
│ └──────┘ │   │ └──────┘ │   │ └──────┘ │
└──────────┘   └──────────┘   └──────────┘
```

> Zmieniasz jedną decyzję bez obaw o resztę systemu

---

## Slide 6: ERA Klient–Serwer
**Gdzie postawić granicę?**

Wizualizacja: waga/balans z dwoma szalkami

```
        ⚖️
       / \
      /   \
 Klient   Serwer
 (szybko)  (bezpiecznie)
```

Walidacja: tu czy tam? A może w obu?

> Animacja: strzałki przeskakujące między klientem a serwerem

---

## Slide 7: ERA Internetu
**Z tysięcy użytkowników — na miliony**

Wizualizacja: wykres eksplodującej skali

```
Przed:  👤 👤 👤 (setki)
Po:     👤👤👤👤👤👤👤👤👤👤👤👤👤👤👤 × 1 000 000
        Amazon · Yahoo · eBay
        24/7 · cały świat · zero przerw
```

> Nie ma już "spokojnego momentu"

---

## Slide 8: ERA Chmury i Mikrousług
**Netflix — od awarii do rewolucji**

Wizualizacja: animacja rozbijania monolitu

```
   ┌─────────────┐          ┌───┐ ┌───┐ ┌───┐
   │             │          │ μ │ │ μ │ │ μ │
   │   MONOLIT   │   →→→    ├───┤ ├───┤ ├───┤
   │             │          │ μ │ │ μ │ │ μ │
   └─────────────┘          └───┘ └───┘ └───┘
```

- Każda usługa = własna baza danych
- Małe zmiany, dziesiątki razy dziennie
- Kubernetes, Terraform, CI/CD

---

## Slide 9: Nowe wymagania wobec architekta
**Architekt musi rozumieć infrastrukturę**

Wizualizacja: diagram umiejętności (radar chart)

```
         Projektowanie
              ▲
             /|\
            / | \
  Biznes ──/──+──\── Infrastruktura
            \ | /
             \|/
              ▼
          Zespół/Ludzie
```

> Nie ekspert od wszystkiego — ale rozumie zasady

---

## Slide 10: ERA AI — Wielka zmiana
**Niedeterminizm jako cecha systemu**

Wizualizacja: animowane porównanie

```
Klasyczny system:          System z AI:

  Input → [System] → Output    Input → [LLM] → Output A
  Input → [System] → Output    Input → [LLM] → Output B
  Input → [System] → Output    Input → [LLM] → Output C
  ✅ Zawsze to samo              ⚠️ Za każdym razem inaczej
```

---

## Slide 11: Cytat Fowlera
**"To jak przejście z assembly na języki wysokiego poziomu"**
— Martin Fowler

Wizualizacja: zmiana paradygmatu myślenia

```
Stary świat:  KOD → Wynik (przewidywalny)
Nowy świat:   PROMPT → Wynik (probabilistyczny)
```

> Nie trudniej technicznie — zmienia się sposób myślenia

---

## Slide 12: Anegdota — Tolerancje
**"Jakie są tolerancje?"**

Wizualizacja: most z oznaczonymi tolerancjami

```
     🌬️ wiatr     ☀️ temperatura
         ↓              ↓
    ════════════════════════
    ║    MOST    ║
    ════════════════════════
         ↑              ↑
    📏 zużycie    📐 odchylenia
```

> Pytanie inżyniera konstrukcyjnego, które dziś musi zadawać architekt IT

---

## Slide 13: Gdzie niedeterminizm jest OK?
**Świadoma decyzja architektoniczna**

Wizualizacja: skala ryzyka (animowana — elementy pojawiają się od lewej)

```
  ✅ Chatbot          ⚠️ Rekomendacje       ❌ Decyzja kredytowa
  ✅ Podsumowanie     ⚠️ Wyszukiwarka        ❌ Dawka leku
  ✅ Tłumaczenie      ⚠️ Kategoryzacja       ❌ Diagnostyka medyczna

  ←── mniejsze ryzyko ──────────── większe ryzyko ──→
```

---

## Slide 14: Dwa rodzaje niedeterminizmu
**Techniczny vs Semantyczny**

Wizualizacja: dwie kolumny z porównaniem

```
┌─────────────────────┐    ┌─────────────────────┐
│   TECHNICZNY        │    │   SEMANTYCZNY        │
│                     │    │                      │
│  Sieć padła → retry │    │  Odpowiedź OK, ale   │
│  Konflikt → idempo- │    │  logicznie błędna     │
│  tencja             │    │                      │
│                     │    │  Sprzeczna z          │
│  Wiemy co może      │    │  poprzednią           │
│  pójść nie tak      │    │                      │
│                     │    │  Nie problem infra-   │
│  Mamy wzorce ✅     │    │  struktury — problem  │
│                     │    │  ZNACZENIA ⚠️         │
└─────────────────────┘    └─────────────────────┘
```

---

## Slide 15: Nowe podejścia architektoniczne
**ReAct: Reason + Act**

Wizualizacja: animowany cykl

```
    ┌──────────┐
    │  MYŚL    │ ← Model "zastanawia się"
    └────┬─────┘
         ↓
    ┌──────────┐
    │  DZIAŁAJ │ ← Wykonuje konkretny krok
    └────┬─────┘
         ↓
    ┌──────────┐
    │ OBSERWUJ │ ← Analizuje wynik
    └────┬─────┘
         ↓
        🔄 powtórz
```

> Rozdzielenie myślenia od działania = bardziej przewidywalne efekty

---

## Slide 16: AI jako współpracownik
**Na każdym etapie**

Wizualizacja: pipeline z ikonami AI na każdym kroku

```
  Wymagania → Projektowanie → Kod → Testy → Wdrożenie
      🤖           🤖         🤖     🤖        🤖
```

Mniejsze zespoły · Różne kompetencje · Skupienie na wartości

---

## Slide 17: Zmiana tożsamości programisty
**Od pisania kodu → do projektowania systemu**

Wizualizacja: animowana transformacja

```
  WCZORAJ                      DZIŚ
  ┌──────────────┐             ┌──────────────┐
  │ Wymagania    │             │ Wymagania    │ ← tu jest wartość
  │ ────────     │             │ ════════     │
  │ Architektura │             │ Architektura │ ← tu jest wartość
  │ ────────     │             │ ════════     │
  │ KOD ████████ │ ← tu czas  │ Kod (+ AI)   │
  │ ────────     │             │ ────────     │
  │ Testy        │             │ Testy        │ ← tu jest wartość
  └──────────────┘             └──────────────┘
```

> Granica programista ↔ architekt zaciera się

---

## Slide 18: Podsumowanie
**Architekt przyszłości**

Wizualizacja: 4 kluczowe filary (animowane — pojawiają się kolejno)

```
  ┌────────────┐  ┌────────────┐  ┌────────────┐  ┌────────────┐
  │ Zarządza   │  │ Projektuje │  │ Decyduje   │  │ Składa     │
  │ RYZYKIEM   │  │ GRANICE    │  │ gdzie AI   │  │ CAŁOŚĆ     │
  │            │  │ systemu    │  │ a gdzie nie│  │ z elementów│
  └────────────┘  └────────────┘  └────────────┘  └────────────┘
```

> **Nie przestajemy być potrzebni.**
> Przestajemy być tylko projektantami systemów deterministycznych.

---

## Slide 19: Zamknięcie
**Naszym zadaniem jest sprawić, żeby mimo nieprzewidywalnych komponentów — cały system działał stabilnie i przewidywalnie.**

```
  Nieprzewidywalny komponent
         ↓
  ┌──────────────────┐
  │   ARCHITEKTURA   │ ← nasze ramy, guardrails, fallbacki
  └──────────────────┘
         ↓
  Przewidywalny system
```
