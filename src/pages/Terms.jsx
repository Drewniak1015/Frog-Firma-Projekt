// terms.jsx
import "./Terms.css";

const SECTIONS = [
  {
    id: 1,
    title: "1. Akceptacja warunków",
    icon: (
      <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12l2 2l4 -4" />
        <path d="M12 3a9 9 0 1 0 0 18A9 9 0 0 0 12 3z" />
      </svg>
    ),
    paragraphs: [
      "Korzystając z tej strony internetowej, potwierdzasz, że przeczytałeś, zrozumiałeś i zgadzasz się na przestrzeganie niniejszych warunków korzystania z usług oraz naszej polityki prywatności.",
      "Niniejsze warunki stanowią prawnie wiążącą umowę między Tobą a Frog Group. Jeśli korzystasz z tej strony w imieniu firmy lub innego podmiotu, oświadczasz, że posiadasz niezbędne uprawnienia do związania tego podmiotu.",
      "Zastrzegamy sobie prawo do zmiany niniejszych warunków w dowolnym momencie. Zmiany wchodzą w życie z chwilą ich opublikowania na stronie. Dalsze korzystanie ze strony po wprowadzeniu zmian oznacza akceptację nowych warunków.",
    ],
  },
  {
    id: 2,
    title: "2. Opis usług",
    icon: (
      <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M9 9h6M9 13h4" />
      </svg>
    ),
    paragraphs: [
      "Frog Group to firma specjalizująca się w usługach sprzedaży i marketingu w Belgii. Nasza strona internetowa dostarcza informacji o naszych usługach, ofertach pracy i wydarzeniach.",
      "Oferujemy możliwości kariery w bezpośredniej sprzedaży i marketingu dla młodych profesjonalistów. Nasza platforma umożliwia kandydatom składanie wniosków i otrzymywanie informacji o dostępnych stanowiskach.",
      "Organizujemy również wydarzenia networkingowe i szkolenia zawodowe. Informacje o tych wydarzeniach są publikowane na naszej stronie i mogą ulec zmianie bez powiadomienia.",
    ],
  },
  {
    id: 3,
    title: "3. Obowiązki użytkownika",
    icon: (
      <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" />
        <path d="M6 20v-1a6 6 0 0 1 12 0v1" />
      </svg>
    ),
    paragraphs: [
      "Zgadzasz się korzystać z tej strony wyłącznie w celach zgodnych z prawem i w sposób, który nie narusza praw innych osób ani nie ogranicza lub uniemożliwia innym użytkownikom korzystania ze strony.",
      "Składając wniosek lub wypełniając jakikolwiek formularz, zobowiązujesz się podawać dokładne, kompletne i aktualne informacje. Ponosisz odpowiedzialność za prawidłowość przekazywanych nam danych.",
      "Zgadzasz się nie używać automatycznych narzędzi do uzyskiwania dostępu do strony, nie próbować naruszać bezpieczeństwa strony ani nie używać jej do rozpowszechniania złośliwych lub niezamówionych treści.",
    ],
  },
  {
    id: 4,
    title: "4. Zabronione działania",
    icon: (
      <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M5.636 5.636l12.728 12.728" />
      </svg>
    ),
    paragraphs: [
      "Surowo zabrania się korzystania z tej strony w celach oszukańczych, rozpowszechniania fałszywych lub wprowadzających w błąd informacji oraz podejmowania jakichkolwiek działań mogących zaszkodzić Frog Group lub osobom trzecim.",
      "Nie wolno kopiować, reprodukować, modyfikować, rozpowszechniać ani komercyjnie wykorzystywać treści tej strony bez naszej uprzedniej pisemnej zgody. Dotyczy to tekstów, obrazów, logotypów i wszelkich innych elementów chronionych prawem własności intelektualnej.",
      "Wszelkie próby uzyskania nieautoryzowanego dostępu do naszych systemów, zbierania danych osobowych innych użytkowników lub zakłócania normalnego funkcjonowania strony są surowo zabronione i mogą skutkować postępowaniem prawnym.",
    ],
  },
  {
    id: 5,
    title: "5. Ograniczenie odpowiedzialności",
    icon: (
      <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l8 4.5v5c0 4-3.5 7.7-8 9-4.5-1.3-8-5-8-9v-5L12 3z" />
      </svg>
    ),
    paragraphs: [
      'Niniejsza strona i jej zawartość są udostępniane "w stanie takim, jakim są", bez jakiejkolwiek gwarancji, wyraźnej ani dorozumianej. Frog Group nie gwarantuje, że strona będzie zawsze dostępna, wolna od błędów lub wirusów.',
      "W zakresie dozwolonym przez prawo Frog Group wyłącza wszelką odpowiedzialność za bezpośrednie, pośrednie, przypadkowe lub wynikowe szkody powstałe w związku z korzystaniem lub niemożnością korzystania z tej strony.",
      "Linki do stron internetowych podmiotów trzecich są udostępniane wyłącznie dla Twojej wygody. Nie kontrolujemy tych stron i nie ponosimy żadnej odpowiedzialności za ich treść ani praktyki dotyczące prywatności.",
    ],
  },
  {
    id: 6,
    title: "6. Zmiany strony i usług",
    icon: (
      <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
      </svg>
    ),
    paragraphs: [
      "Zastrzegamy sobie prawo do modyfikowania, zawieszania lub zaprzestania świadczenia jakiegokolwiek aspektu strony lub naszych usług w dowolnym momencie i bez powiadomienia.",
      "Możemy aktualizować zawartość strony, modyfikować dostępne funkcje lub zmieniać prezentację i projekt bez uprzedniego powiadomienia.",
      "W przypadku istotnej zmiany niniejszych warunków korzystania z usług dołożymy wszelkich starań, aby Cię o tym poinformować, na przykład poprzez zamieszczenie stosownego komunikatu na stronie.",
    ],
  },
  {
    id: 7,
    title: "7. Prawo właściwe i jurysdykcja",
    icon: (
      <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12h18M12 3v18M5.636 5.636l12.728 12.728M18.364 5.636L5.636 18.364" />
      </svg>
    ),
    paragraphs: [
      "Niniejsze warunki korzystania z usług podlegają prawu polskiemu. Wszelkie spory związane z niniejszymi warunkami będą podlegać wyłącznej jurysdykcji sądów w Brukseli w Belgii.",
      "Jeżeli jakiekolwiek postanowienie niniejszych warunków zostanie uznane za nieważne lub niewykonalne, pozostałe postanowienia pozostają w pełnej mocy i są skuteczne.",
      "Niewykonanie prawa wynikającego z niniejszych warunków nie stanowi zrzeczenia się tego prawa. Niniejsze warunki stanowią całość porozumienia między Tobą a Frog Group w zakresie korzystania ze strony.",
    ],
  },
];

function SectionIcon({ children }) {
  return (
    <div className="terms-section__icon" aria-hidden="true">
      {children}
    </div>
  );
}

function TermsSection({ section }) {
  return (
    <article className="terms-section" id={`section-${section.id}`}>
      <div className="terms-section__header">
        <SectionIcon>{section.icon}</SectionIcon>
        <h2 className="terms-section__title">{section.title}</h2>
      </div>
      <div className="terms-section__body">
        {section.paragraphs.map((text, i) => (
          <p key={i}>{text}</p>
        ))}
      </div>
    </article>
  );
}

export default function TermsOfService() {
  return (
    <div className="bg-terms">
    <main className="terms-page">
      <header className="terms-hero">
        <div className="terms-hero__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8">
            <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
            <polyline points="14 3 14 9 20 9" />
            <line x1="9" y1="13" x2="15" y2="13" />
            <line x1="9" y1="17" x2="13" y2="17" />
          </svg>
        </div>
        <h1 className="terms-hero__title">Warunki korzystania z usług</h1>
        <p className="terms-hero__subtitle">
          Prosimy o uważne przeczytanie niniejszych warunków przed korzystaniem z naszej strony i usług.
        </p>
        <p className="terms-hero__date">Ostatnia aktualizacja: 20 grudnia 2025</p>
      </header>

      <p className="terms-intro">
        Niniejsze warunki korzystania z usług regulują dostęp do strony internetowej Frog Group
        i korzystanie z niej oraz z naszych usług. Korzystając z naszej strony lub usług, zgadzasz
        się na przestrzeganie tych warunków. Jeśli nie akceptujesz niniejszych warunków, prosimy
        o niekorzystanie z naszej strony.
      </p>

      {SECTIONS.map((section) => (
        <TermsSection key={section.id} section={section} />
      ))}

      <section className="terms-legal" aria-label="Pytania prawne">
        <h2 className="terms-legal__title">Pytania prawne</h2>
        <p className="terms-legal__text">
          Jeśli masz jakiekolwiek pytania dotyczące niniejszych warunków korzystania z usług, skontaktuj się z nami.
        </p>
     <a href="mailto:wbialas@frog.info.pl" className="policy-contact__link">
          wbialas@frog.info.pl
        </a>
      </section>
    </main>
    </div>
  );
}