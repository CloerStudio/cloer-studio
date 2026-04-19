# 🧩 Szczegółowy Plan Komponentów - Cloer Studio

Ten dokument zawiera techniczne i wizualne detale każdego komponentu, który tworzy stronę Cloer Studio. Każdy moduł został zaprojektowany tak, aby wspierać estetykę "clean girl / studio look" oraz wysoką konwersję.

---

## 1. Header (Nawigacja)
**Plik:** `src/components/Header.tsx`
- **Cel:** Zapewnienie szybkiej nawigacji i identyfikacji marki.
- **Kroki planu:**
    - [x] Implementacja "Sticky Header" (podąża za skrolującym użytkownikiem).
    - [x] Dodanie efektu `backdrop-filter: blur(10px)` dla nowoczesnego wyglądu na tle sekcji Hero.
    - [x] Responsywne menu (hamburger na urządzeniach mobilnych).
    - [x] Linki: O mnie, Portfolio, Usługi, FAQ, Kontakt.

## 2. Hero Section (Sekcja powitalna)
**Plik:** `src/components/Hero.tsx`
- **Cel:** Natychmiastowe przyciągnięcie uwagi i przekazanie głównej wartości.
- **Kroki planu:**
    - [x] Dodanie dużego nagłówka (H1) z fontem Anton: "Chcesz działać regularnie...".
    - [x] Implementacja przycisku "Poznaj usługi" z płynnym przewijaniem do sekcji Usługi.
    - [x] Integracja tła: Wysokiej jakości grafika studio (wygenerowana).
    - [x] Animacja wejścia (fade-in + slide-up) dla tekstów.

## 3. About (O mnie)
**Plik:** `src/components/About.tsx`
- **Cel:** Budowanie zaufania i personalizacja marki.
- **Kroki planu:**
    - [x] Układ "Split Layout": Zdjęcie po jednej stronie, tekst po drugiej.
    - [x] Stylizacja zdjęcia: Cienka ramka, zaokrąglone rogi.
    - [x] Dodanie bio podkreślającego współpracę i oszczędność czasu.

## 4. Portfolio (Realizacje)
**Plik:** `src/components/Portfolio.tsx`
- **Cel:** Prezentacja jakości contentu.
- **Kroki planu:**
    - [x] Stworzenie zakładek (Tabs): "Wszystkie", "Rolki" oraz "Posty".
    - [x] **Rolki:** Pionowe kontenery (9:16) z estetycznymi przykładami montażu.
    - [x] **Posty:** Kwadratowa siatka (1:1) z wykorzystaniem przesłanych grafik.
    - [x] Efekt hover z nakładką (overlay) i animacją przy użyciu Framer Motion.

## 5. Services (Usługi)
**Plik:** `src/components/Services.tsx`
- **Cel:** Jasne przedstawienie oferty.
- **Kroki planu:**
    - [x] Trzy karty usług:
        1. Tworzenie contentu (wideo/foto).
        2. Wsparcie Social Media (strategia).
        3. Copywriting (teksty, które sprzedają).
    - [x] Dodanie delikatnych ikon lub ilustracji liniowych dla każdej usługi.
    - [x] Efekt hover na kartach: subtelny cień i podniesienie (lift up).

## 6. Tools (Narzędzia)
**Plik:** `src/components/Tools.tsx`
- **Cel:** Podkreślenie profesjonalizmu przez używane narzędzia.
- **Kroki planu:**
    - [x] Pasek z monochromatycznymi ikonami (Canva, CapCut, Notion, DaVinci Resolve, Photoshop).
    - [x] Płynne przewijanie ikon (Infinite Marquee) lub statyczny, elegancki rząd.

## 7. FAQ (Częste pytania)
**Plik:** `src/components/FAQ.tsx`
- **Cel:** Rozwianie wątpliwości przed kontaktem.
- **Kroki planu:**
    - [x] Implementacja komponentu typu Accordion (rozwijane listy).
    - [x] Płynne animacje otwierania/zamykania (używając Framer Motion lub CSS Transitions).
    - [x] Pytania o: czas realizacji, proces pracy, wycenę.

## 8. Contact (Formularz)
**Plik:** `src/components/Contact.tsx`
- **Cel:** Umożliwienie szybkiego wysłania zapytania.
- **Kroki planu:**
    - [x] Pola: Imię, E-mail, Temat, Wiadomość.
    - [x] Walidacja pól "na żywo".
    - [x] Design w stylu "Minimal Form" - cienkie linie, brak grubych obramowań.

## 9. Footer (Stopka)
**Plik:** `src/components/Footer.tsx`
- **Cel:** Informacje prawne i social media.
- **Kroki planu:**
    - [ ] Linki do Instagrama, TikToka, LinkedIn.
    - [ ] Prawa autorskie: "© 2024 Cloer Studio".
    - [ ] Subtelny link "Back to top".

## 10. Popout & CTA (Konwersja)
**Plik:** `src/components/Popout.tsx` oraz `src/App.tsx` (CTA)
- **Cel:** Złapanie uwagi uciekającego użytkownika.
- **Kroki planu:**
    - [x] **Fixed CTA:** Stały przycisk "Zacznijmy współpracę" w prawym dolnym rogu.
    - [x] **Popout:** Okienko z ofertą specjalną lub lead magnetem, pojawiające się po scrollu 50% strony lub po 30 sekundach.

---

### 🎨 Wspólne detale wizualne dla wszystkich komponentów:
- **Border-radius:** 12px - 24px (miękkie wykończenie).
- **Cienie:** Bardzo delikatne, szeroko rozproszone (`box-shadow: 0 4px 20px rgba(152, 168, 154, 0.1)`).
- **Odstępy (Padding):** Dużo przestrzeni między sekcjami (80px - 120px na desktopie).
