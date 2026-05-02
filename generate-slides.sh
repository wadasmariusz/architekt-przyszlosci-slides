#!/bin/bash

# =============================================================
# Generator slajdów prezentacji
# Używa Claude Code CLI do tworzenia slajdów HTML
# =============================================================

SLIDES_DIR="$(cd "$(dirname "$0")" && pwd)/slides"
INSTRUKCJE="INSTRUKCJE-SLAJDY.md"

# ---------- Kolory ----------
RED='\033[0;31m'
GREEN='\033[0;32m'
CYAN='\033[0;36m'
YELLOW='\033[1;33m'
BOLD='\033[1m'
NC='\033[0m'

# ---------- Funkcje ----------

list_modules() {
    local i=1
    MODULES=()
    while IFS= read -r dir; do
        if [ -f "$dir/slides.md" ]; then
            local rel="${dir#$SLIDES_DIR/}"
            rel="${rel%/}"
            MODULES+=("$dir")
            local progress_file="$dir/.slide-progress"
            local current=0
            [ -f "$progress_file" ] && current=$(cat "$progress_file")

            # Policz slajdy w slides.md
            local total
            total=$(grep -c '^## Slajd [0-9]' "$dir/slides.md" 2>/dev/null || echo 0)

            # Policz istniejące pliki HTML
            local existing
            existing=$(ls "$dir"/slides-*.html 2>/dev/null | wc -l | tr -d ' ')

            printf "  ${CYAN}%2d)${NC} %-55s ${GREEN}[%s/%s gotowych, progress: %s]${NC}\n" \
                "$i" "$rel" "$existing" "$total" "$current"
            i=$((i + 1))
        fi
    done < <(find "$SLIDES_DIR" -mindepth 2 -maxdepth 2 -type d | sort)
}

count_slides_in_md() {
    grep -c '^## Slajd [0-9]' "$1/slides.md" 2>/dev/null || echo 0
}

# ---------- Menu: wybór modułu ----------

echo ""
echo -e "${BOLD}=== Generator slajdów prezentacji ===${NC}"
echo ""
echo -e "Dostępne moduły (z plikiem ${YELLOW}slides.md${NC}):"
echo ""
list_modules
echo ""

if [ ${#MODULES[@]} -eq 0 ]; then
    echo -e "${RED}Nie znaleziono modułów z plikiem slides.md${NC}"
    exit 1
fi

read -rp "Wybierz moduł (numer): " MODULE_NUM

if ! [[ "$MODULE_NUM" =~ ^[0-9]+$ ]] || [ "$MODULE_NUM" -lt 1 ] || [ "$MODULE_NUM" -gt ${#MODULES[@]} ]; then
    echo -e "${RED}Nieprawidłowy wybór.${NC}"
    exit 1
fi

MODULE_DIR="${MODULES[$((MODULE_NUM - 1))]}"
MODULE_REL="${MODULE_DIR#$SLIDES_DIR/}"
MODULE_REL="${MODULE_REL%/}"
PROGRESS_FILE="$MODULE_DIR/.slide-progress"
SLIDES_MD="$MODULE_DIR/slides.md"
TOTAL_IN_MD=$(count_slides_in_md "$MODULE_DIR")

echo ""
echo -e "${BOLD}Wybrany moduł:${NC} $MODULE_REL"
echo -e "${BOLD}Slajdów w slides.md:${NC} $TOTAL_IN_MD"

# ---------- Odczyt postępu ----------

CURRENT=0
[ -f "$PROGRESS_FILE" ] && CURRENT=$(cat "$PROGRESS_FILE")
echo -e "${BOLD}Obecny postęp:${NC} $CURRENT"

# ---------- Menu: zakres slajdów ----------

echo ""
read -rp "Od którego slajdu zacząć? [$((CURRENT + 1))]: " START_INPUT
START=${START_INPUT:-$((CURRENT + 1))}

read -rp "Do którego slajdu generować? [$TOTAL_IN_MD]: " END_INPUT
END=${END_INPUT:-$TOTAL_IN_MD}

# Walidacja
if ! [[ "$START" =~ ^[0-9]+$ ]] || ! [[ "$END" =~ ^[0-9]+$ ]]; then
    echo -e "${RED}Podaj prawidłowe numery slajdów.${NC}"
    exit 1
fi

if [ "$START" -lt 1 ] || [ "$START" -gt "$TOTAL_IN_MD" ]; then
    echo -e "${RED}Numer startowy poza zakresem (1-$TOTAL_IN_MD).${NC}"
    exit 1
fi

if [ "$END" -lt "$START" ] || [ "$END" -gt "$TOTAL_IN_MD" ]; then
    echo -e "${RED}Numer końcowy poza zakresem ($START-$TOTAL_IN_MD).${NC}"
    exit 1
fi

echo ""
echo -e "${BOLD}Plan:${NC} generowanie slajdów ${CYAN}$START${NC} do ${CYAN}$END${NC} ($(( END - START + 1 )) slajdów)"
echo ""
read -rp "Rozpocząć? [T/n]: " CONFIRM
CONFIRM=${CONFIRM:-T}

if [[ ! "$CONFIRM" =~ ^[TtYy]$ ]]; then
    echo "Anulowano."
    exit 0
fi

# ---------- Generowanie slajdów ----------

echo ""
SLIDES_MD_REL="slides/${MODULE_REL}/slides.md"

for i in $(seq "$START" "$END"); do
    SLIDE_NUM=$(printf "%02d" "$i")
    TARGET_FILE="$MODULE_DIR/slides-${SLIDE_NUM}.html"

    echo -e "${BOLD}════════════════════════════════════════════════${NC}"
    echo -e "${CYAN}>>> Slajd $i / $END${NC}  (plik: slides-${SLIDE_NUM}.html)"
    echo -e "${BOLD}════════════════════════════════════════════════${NC}"
    echo ""

    # Sprawdź czy plik już istnieje
    if [ -f "$TARGET_FILE" ]; then
        echo -e "${YELLOW}Plik slides-${SLIDE_NUM}.html już istnieje.${NC}"
        read -rp "Nadpisać? [t/N]: " OVERWRITE
        OVERWRITE=${OVERWRITE:-N}
        if [[ ! "$OVERWRITE" =~ ^[TtYy]$ ]]; then
            echo -e "Pomijam slajd $i."
            echo "$i" > "$PROGRESS_FILE"
            echo ""
            continue
        fi
    fi

    PROMPT="Na podstawie @${INSTRUKCJE} przygotuj mi slajd do pliku slides/${MODULE_REL}/slides-${SLIDE_NUM}.html na podstawie informacji z @${SLIDES_MD_REL} — tylko slajd numer $i"

    (cd "$(dirname "$0")" && echo "$PROMPT" | claude -p --allowedTools 'Write,Edit,Read,Glob,Grep,Bash(readonly)')

    if [ $? -eq 0 ]; then
        echo "$i" > "$PROGRESS_FILE"
        echo ""
        echo -e "${GREEN}>>> Slajd $i ukończony.${NC}"
        echo ""
    else
        echo ""
        echo -e "${RED}!!! Błąd przy generowaniu slajdu $i.${NC}"
        echo -e "${RED}!!! Aby wznowić, uruchom skrypt ponownie.${NC}"
        exit 1
    fi
done

echo ""
echo -e "${GREEN}${BOLD}════════════════════════════════════════════════${NC}"
echo -e "${GREEN}${BOLD}=== Wygenerowano slajdy $START–$END dla: $MODULE_REL ===${NC}"
echo -e "${GREEN}${BOLD}════════════════════════════════════════════════${NC}"
echo ""
