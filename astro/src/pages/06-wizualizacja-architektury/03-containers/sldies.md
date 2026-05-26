**Slajd 1**

**Wejście:** Na początku lekcji, przy słowach *„przyjrzymy się bliżej poziomowi C4 Container"*

**Tytuł:** C4 Container — techniczny kształt systemu

**Opis:** Slajd tytułowy lekcji. Zawiera tytuł „C4 Container Level" oraz podtytuł: „Od ogólnego obrazu systemu do jego technicznej budowy". Minimalistyczny — pełni funkcję wprowadzającą i sygnalizuje temat.

---

**Slajd 2**

**Wejście:** Przy słowach *„Można to porównać do Google Maps"*

**Tytuł:** Poziomy przybliżenia w C4

**Opis:** Slajd z grafiką porównawczą. Po lewej stronie: widok mapy z dużego oddalenia (poziom Context) z etykietą „System z lotu ptaka". Po prawej: widok przybliżony na dzielnice i drogi (poziom Container) z etykietą „Główne części systemu". Na dole adnotacja: „Container ≠ kod, klasy, endpointy".

*Sugestia: prosta grafika z dwoma poziomami zoomu mapy.*

---

**Slajd 3**

**Wejście:** Przy słowach *„słowo Container w modelu C4 nie oznacza automatycznie kontenera Dockerowego"*

**Tytuł:** Container w C4 — definicja

**Opis:** Slajd wyjaśniający, porządkujący nieporozumienie terminologiczne. Dwie sekcje:

- **Container ≠** Docker image, pod K8s, infrastruktura uruchomieniowa
- **Container =** aplikacja, usługa, proces, baza danych, kolejka, magazyn plików — dowolny element z wyraźną odpowiedzialnością

Pod spodem krótka lista przykładów ułożonych w jednym wierszu lub siatce ikon: aplikacja webowa, aplikacja mobilna, backend API, worker, baza PostgreSQL, broker wiadomości, cache, adapter integracyjny.

*Sugestia: ikony ilustrujące poszczególne typy kontenerów.*

---

**Slajd 4**

**Wejście:** Przy słowach *„Dobry diagram C4 Container powinien odpowiadać na pytanie: z czego technicznie składa się nasz system"*

**Tytuł:** Przykład — system sprzedażowy

**Opis:** Slajd z diagramem poglądowym. Pokazuje uproszczony diagram kontenerów dla systemu sprzedażowego:

- Aplikacja frontendowa (SPA)
- Backend API
- Baza danych
- Moduł przetwarzania zdarzeń
- Kolejka komunikatów
- System płatności (zewnętrzny)
- System wysyłki wiadomości (zewnętrzny)

Każdy element ma: nazwę, technologię, jednozdaniowy opis odpowiedzialności. Na tym slajdzie nie rozróżniamy jeszcze granicy systemu — to pojawi się później.

*Sugestia: diagram w konwencji C4 — prostokąty z etykietami, strzałki z opisami kierunku komunikacji.*

---

**Slajd 5**

**Wejście:** Przy słowach *„Nie chodzi jednak tylko o samo narysowanie prostokątów. Każdy element powinien mieć nazwę, technologię i krótki opis odpowiedzialności"*

**Tytuł:** Co powinien zawierać opis kontenera?

**Opis:** Slajd pokazujący strukturę pojedynczego elementu na diagramie C4. Powiększony widok jednego prostokąta-kontenera z trzema wyraźnie oznaczonymi polami:

1. **Nazwa** — np. „Orders API"
2. **Technologia** — np. „ASP.NET Core"
3. **Odpowiedzialność** — np. „Obsługuje proces składania i śledzenia zamówień"

Poniżej kontrast — źle opisany element: prostokąt z napisem „Backend" i nic więcej, oznaczony jako niewystarczający.

---

**Slajd 6**

**Wejście:** Przy słowach *„Lepiej powiedzieć, że mamy ASP.NET Core API odpowiedzialne za obsługę operacji biznesowych, PostgreSQL przechowujący dane aplikacyjne, Redis wykorzystywany jako cache oraz RabbitMQ"*

**Tytuł:** Ogólny vs. konkretny opis kontenera

**Opis:** Slajd porównawczy w układzie dwukolumnowym:

| ❌ Ogólnikowo | ✅ Konkretnie |
|---|---|
| Backend | ASP.NET Core API — obsługa operacji biznesowych |
| Database | PostgreSQL — dane aplikacyjne |
| Cache | Redis — cache sesji i wyników zapytań |
| Queue | RabbitMQ — asynchroniczna komunikacja między usługami |

Slajd wspiera argument prowadzącego, że wartość diagramu zależy od jakości opisów, nie od samej obecności prostokątów.

---

**Slajd 7**

**Wejście:** Przy słowach *„Na poziomie Container bardzo istotne są również relacje między elementami"*

**Tytuł:** Komunikacja między kontenerami

**Opis:** Slajd z diagramem pokazującym trzy przykładowe relacje z opisem technicznym:

1. **Aplikacja webowa → API** — wywołanie przez HTTPS / REST
2. **API → PostgreSQL** — zapis danych przez Entity Framework Core
3. **Serwis zamówień → Broker** — publikacja zdarzenia „OrderPlaced"

Strzałki mają kierunek i etykiety opisujące protokół lub mechanizm. Slajd podkreśla zasadę: kto → z kim, w jakim kierunku, jaką technologią.

*Sugestia: prosty diagram ze strzałkami kierunkowymi i etykietami.*

---

**Slajd 8**

**Wejście:** Przy słowach *„C4 Container jest szczególnie przydatny w rozmowach z programistami, architektami, liderami technicznymi, DevOpsami"*

**Tytuł:** Dla kogo jest Container Diagram?

**Opis:** Slajd pozycjonujący diagram na osi odbiorców i poziomu szczegółowości. Prosta skala:

- **Zbyt ogólne** (Context) ← → **Zbyt szczegółowe** (Component / Code)
- Container Diagram zaznaczony pośrodku jako „złoty środek"

Pod spodem lista odbiorców: programiści, architekci, tech leadzi, DevOpsi, techniczni stakeholderzy biznesowi.

Oraz lista typowych pytań, na które diagram odpowiada: Jedna baza czy kilka? Komunikacja synchroniczna czy asynchroniczna? Gdzie logika biznesowa? Jak izolujemy odpowiedzialności?

---

**Slajd 9**

**Wejście:** Przy słowach *„diagram Container nie zawsze będzie wyglądał tak samo dla każdego stylu architektonicznego"*

**Tytuł:** Container Diagram a styl architektoniczny

**Opis:** Slajd porównawczy — trzy kolumny lub sekcje:

| Monolit modułowy | Mikroserwisy | Clean Architecture |
|---|---|---|
| Jeden kontener uruchomieniowy, logiczne obszary wewnątrz | Wiele usług, często osobne bazy danych | Warstwy domenowa i aplikacyjna = część tego samego kontenera, nie osobne procesy |

Kluczowa adnotacja na dole slajdu: „Container ≠ warstwa logiczna kodu. Container = element uruchomieniowy z odpowiedzialnością i komunikacją."

---

**Slajd 10**

**Wejście:** Przy słowach *„Dobrze przygotowany diagram Container powinien mieć wyraźną granicę systemu"*

**Tytuł:** Granica systemu

**Opis:** Slajd z diagramem. Prostokąt oznaczony jako „system boundary". Wewnątrz: kontenery należące do naszego systemu. Na zewnątrz: systemy zewnętrzne — np. system płatności, dostawca poczty, usługa autoryzacyjna — oznaczone innym kolorem lub kreską przerywaną. Strzałki między wnętrzem a zewnętrzem opisane protokołem komunikacji.

*Sugestia: diagram z wyraźną ramką boundary i elementami wewnętrznymi/zewnętrznymi.*

---

**Slajd 11**

**Wejście:** Przy słowach *„Na tym poziomie warto też uważać na ilość szczegółów. Bardzo łatwo jest zamienić go w diagram od wszystkiego"*

**Tytuł:** Anty-wzorzec: przeładowany diagram

**Opis:** Slajd ostrzegawczy. Po lewej stronie: czytelny diagram z 5–7 kontenerami (etykieta: „Właściwy poziom abstrakcji"). Po prawej: ten sam diagram zaśmiecony endpointami, tabelami, load balancerami, replikami, nodami klastra — nieczytelny chaos (etykieta: „Diagram od wszystkiego").

Lista elementów, które NIE należą do Container Diagram:
- endpointy i klasy serwisowe → poziom Component
- tabele bazy danych → poziom Component/Code
- load balancery, repliki, nody → widok Deployment

*Sugestia: grafika porównawcza — czytelny vs. przeładowany diagram.*

---

**Slajd 12**

**Wejście:** Przy słowach *„Bardzo praktyczną zasadą jest to, że każdy Container powinien dać się opisać jednym lub dwoma zdaniami"*

**Tytuł:** Test jednego zdania

**Opis:** Slajd z zasadą praktyczną i przykładem:

**Zasada:** „Jeśli nie potrafisz opisać kontenera w 1–2 zdaniach, to albo nie rozumiesz jeszcze architektury, albo element jest na niewłaściwym poziomie."

**Dobry przykład:**
*„Orders API — obsługuje składanie i śledzenie zamówień, publikuje zdarzenia domenowe po zmianie statusu, zapisuje dane w bazie zamówień."*

**Niewystarczający przykład:**
*„OrderService — obsługuje zamówienia."* → zbyt ogólne, prawdopodobnie już poziom komponentów, nie kontenerów.

---

**Slajd 13**

**Wejście:** Przy słowach *„Chodzi o to, żeby stworzyć wspólny język rozmowy o systemie"*

**Tytuł:** Czy diagram spełnia swoją rolę?

**Opis:** Slajd z checklistą weryfikacyjną. Po zobaczeniu diagramu odbiorca powinien szybko odpowiedzieć na pytania:

- Gdzie jest logika biznesowa?
- Gdzie są dane?
- Z czym integruje się system?
- Które elementy są od siebie zależne?
- Jakie decyzje technologiczne zostały podjęte?

Jeśli odpowiedzi przychodzą łatwo — diagram działa. Jeśli nie — wymaga przebudowy.

---

**Slajd 14**

**Wejście:** Przy słowach *„Podsumowując, C4 Container to poziom, na którym pokazujemy techniczny kształt systemu, ale bez wchodzenia w kod"*

**Tytuł:** Podsumowanie — C4 Container Level

**Opis:** Slajd zamykający lekcję. Zwięzła lista kluczowych wniosków:

- Pokazuje aplikacje, bazy, kolejki, procesy, integracje
- Container ≠ Docker container
- Każdy element: nazwa + technologia + odpowiedzialność
- Relacje: kto → z kim, czym, w jakim kierunku
- Granica systemu: nasze vs. zewnętrzne
- Właściwy poziom abstrakcji: nie kod, nie infrastruktura
- Cel: wspólny język rozmowy o architekturze