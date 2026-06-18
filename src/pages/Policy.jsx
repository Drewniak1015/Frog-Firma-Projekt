// policy.jsx
import "./Policy.css";

const SECTIONS = [
  {
    id: 1,
    title: "1. Dane, które zbieramy",
    icon: (
      <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" />
        <path d="M6 20v-1a6 6 0 0 1 12 0v1" />
      </svg>
    ),
    paragraphs: [
      "Zbieramy różne rodzaje danych osobowych w zależności od sposobu korzystania z naszych usług. Gdy aplikujesz, zbieramy Twoje dane identyfikacyjne (imię, nazwisko), dane kontaktowe (e-mail, telefon), CV i dokumenty aplikacyjne, a także Twoje preferencje językowe.",
      "Podczas przeglądania naszej strony możemy zbierać dane techniczne, takie jak adres IP, typ przeglądarki, odwiedzone strony i czas trwania wizyt. Informacje te pomagają nam doskonalić wrażenia użytkownika.",
      "Jeśli się z nami kontaktujesz, przechowujemy treść Twoich wiadomości oraz wszelkie informacje, które zdecydujesz się nam udostępnić.",
    ],
  },
  {
    id: 2,
    title: "2. Jak wykorzystujemy Twoje dane",
    icon: (
      <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" />
      </svg>
    ),
    paragraphs: [
      "Twoje dane osobowe są wykorzystywane do przetwarzania i zarządzania wnioskami o pracę, komunikowania się z Tobą w sprawie możliwości zawodowych, doskonalenia naszych usług i strony internetowej oraz wypełniania naszych zobowiązań prawnych.",
      "Używamy również Twoich danych do przesyłania informacji o naszych wydarzeniach i możliwościach kariery, wyłącznie jeśli wyraziłeś na to zgodę. Możesz w każdej chwili zrezygnować z subskrypcji.",
      "Nigdy nie sprzedajemy Twoich danych osobowych osobom trzecim. Twoje informacje pozostają ściśle poufne i są udostępniane wyłącznie członkom zespołu zaangażowanym w proces rekrutacji.",
    ],
  },
  {
    id: 3,
    title: "3. Bezpieczeństwo danych",
    icon: (
      <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l8 4.5v5c0 4-3.5 7.7-8 9-4.5-1.3-8-5-8-9v-5L12 3z" />
      </svg>
    ),
    paragraphs: [
      "Wdrażamy odpowiednie techniczne i organizacyjne środki bezpieczeństwa w celu ochrony Twoich danych osobowych przed utratą, nieuprawnionym dostępem, modyfikacją lub ujawnieniem.",
      "Nasze systemy są regularnie aktualizowane, a pracownicy są przeszkoleni w zakresie najlepszych praktyk ochrony danych. Dostęp do Twoich danych jest ściśle ograniczony do osób, które potrzebują ich do wykonywania swoich obowiązków.",
      "W przypadku naruszenia danych mogącego stanowić ryzyko dla Twoich praw i wolności poinformujemy Cię oraz właściwy organ ochrony danych w terminach przewidzianych przez prawo.",
    ],
  },
  {
    id: 4,
    title: "4. Pliki cookie i podobne technologie",
    icon: (
      <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <circle cx="9" cy="10" r="1" fill="currentColor" />
        <circle cx="14" cy="9" r="1" fill="currentColor" />
        <circle cx="10" cy="15" r="1" fill="currentColor" />
        <circle cx="15" cy="14" r="1" fill="currentColor" />
      </svg>
    ),
    paragraphs: [
      "Nasza strona internetowa używa plików cookie w celu poprawy komfortu przeglądania. Niezbędne pliki cookie są konieczne do prawidłowego funkcjonowania strony i nie mogą być wyłączone.",
      "Analityczne pliki cookie pomagają nam zrozumieć, jak odwiedzający korzystają z naszej strony, co pozwala nam nieustannie doskonalić nasze usługi. Marketingowe pliki cookie służą do oferowania spersonalizowanych treści.",
      "Możesz zarządzać preferencjami dotyczącymi plików cookie w dowolnym momencie za pośrednictwem naszego banera zgody lub ustawień przeglądarki. Więcej informacji znajdziesz w naszej szczegółowej polityce cookie.",
    ],
  },
  {
    id: 5,
    title: "5. Okres przechowywania danych",
    icon: (
      <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" />
      </svg>
    ),
    paragraphs: [
      "Przechowujemy Twoje dane osobowe tak długo, jak jest to konieczne do celów opisanych w niniejszej polityce lub do wypełnienia naszych obowiązków prawnych.",
      "Dane aplikacyjne są przechowywane przez maksymalnie 2 lata od ostatniego kontaktu, chyba że poprosisz nas o ich wcześniejsze usunięcie lub wyrazisz zgodę na dłuższy okres przechowywania.",
      "Dane dotyczące przeglądania i analityki są co do zasady przechowywane przez maksymalnie 13 miesięcy zgodnie z zaleceniami CNIL.",
    ],
  },
  {
    id: 6,
    title: "6. Twoje prawa",
    icon: (
      <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M9 9h6M9 13h4" />
      </svg>
    ),
    paragraphs: [
      "Na mocy RODO przysługują Ci rozległe prawa w odniesieniu do Twoich danych osobowych. Masz prawo dostępu do swoich danych, ich sprostowania, jeśli są niedokładne, oraz żądania ich usunięcia w określonych okolicznościach.",
      "Możesz również żądać ograniczenia przetwarzania swoich danych, wnieść sprzeciw wobec określonego przetwarzania oraz zażądać przeniesienia swoich danych do innego administratora.",
      "Aby skorzystać z tych praw, skontaktuj się z nami pod adresem wbialas@frog.info.pl Odpowiemy na Twoje żądanie w ciągu miesiąca. Jeśli uważasz, że Twoje prawa nie są respektowane, możesz złożyć skargę do Belgijskiego Urzędu Ochrony Danych.",
    ],
  },
];

function SectionIcon({ children }) {
  return (
    <div className="policy-section__icon" aria-hidden="true">
      {children}
    </div>
  );
}

function PolicySection({ section }) {
  return (
   
    <article className="policy-section" id={`section-${section.id}`}>
      <div className="policy-section__header">
        <SectionIcon>{section.icon}</SectionIcon>
        <h2 className="policy-section__title">{section.title}</h2>
      </div>
      <div className="policy-section__body">
        {section.paragraphs.map((text, i) => (
          <p key={i}>{text}</p>
        ))}
      </div>
    </article>
  );
}

export default function PrivacyPolicy() {
  return (
       <div className="bg-terms">
    <main className="policy-page">
      <header className="policy-hero">
        <div className="policy-hero__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3l8 4.5v5c0 4-3.5 7.7-8 9-4.5-1.3-8-5-8-9v-5L12 3z" />
          </svg>
        </div>
        <h1 className="policy-hero__title">Polityka prywatności</h1>
        <p className="policy-hero__subtitle">
          W Frog Group dbamy o ochronę Twojej prywatności i danych osobowych.
        </p>
        <p className="policy-hero__date">Ostatnia aktualizacja: 20 grudnia 2025</p>
      </header>

      <p className="policy-intro">
        Frog Group („my", „nas" lub „Frog Group") jest zobowiązana do ochrony prywatności
        naszych użytkowników, kandydatów i partnerów biznesowych. Niniejsza polityka prywatności
        wyjaśnia, w jaki sposób zbieramy, wykorzystujemy, przechowujemy i chronimy Twoje dane
        osobowe zgodnie z Ogólnym Rozporządzeniem o Ochronie Danych (RODO) i obowiązującym prawem
        belgijskim.
      </p>

      {SECTIONS.map((section) => (
        <PolicySection key={section.id} section={section} />
      ))}

      <section className="policy-contact" aria-label="Kontakt">
        <h2 className="policy-contact__title">Skontaktuj się z nami</h2>
        <p className="policy-contact__text">
          Jeśli masz jakiekolwiek pytania dotyczące niniejszej polityki prywatności lub przetwarzania
          Twoich danych osobowych, nie wahaj się z nami skontaktować.
        </p>
        <a href="mailto:wbialas@frog.info.pl" className="policy-contact__link">
          wbialas@frog.info.pl
        </a>
      </section>
    </main></div>
  );
}