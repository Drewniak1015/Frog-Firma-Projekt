import "./About.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const IconCalendar = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M8 2v4"/><path d="M16 2v4"/>
    <rect width="18" height="18" x="3" y="4" rx="2"/>
    <path d="M3 10h18"/>
  </svg>
);
const IconUsers = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
    <path d="M16 3.128a4 4 0 0 1 0 7.744"/>
    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
    <circle cx="9" cy="7" r="4"/>
  </svg>
);
const IconMapPin = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);
const IconAward = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/>
    <circle cx="12" cy="8" r="6"/>
  </svg>
);

function About() {
  const navigate = useNavigate();
  return (
    <div className="aboutPage">

      {/* TLO 1: niebieskoszary gradient */}
      <motion.section className="aboutHero" initial="hidden" animate="show" variants={stagger}>
        <div className="aboutHeroInner">

        {/* Tekst — ograniczona szerokość */}
        <div className="aboutHeroContent">
          <motion.span className="aboutBadge" variants={fadeUp}>O nas</motion.span>
          <div className="aboutHeroGrid">
            <motion.h1 variants={fadeUp}>
            Dynamiczny wzrost w sprzedaży i marketingu — prosto z Łodzi
            </motion.h1>
            <motion.p variants={fadeUp}>
           FROG wspiera firmy w osiąganiu wzrostu. Oferujemy skalowalne usługi sprzedaży i marketingu dopasowane do konkretnych potrzeb biznesowych — od pozyskiwania klientów, przez budowanie relacji, aż po rozwój zespołów sprzedażowych.
Jesteśmy częścią międzynarodowej grupy firm działających w tym samym modelu biznesowym na rynkach europejskich. To środowisko dało nam fundament, sprawdzone metody i sieć wsparcia, dzięki którym od pierwszego dnia działamy na wysokim poziomie.

            </motion.p>
          </div>
        </div>

        {/* TLO 2: białe tło nakłada się na gradient z margin-top ujemnym */}

        </div>
      </motion.section>
        <motion.div className="aboutStatsBox" variants={fadeUp}>
          <Stat icon={<IconCalendar />} number="2025" label="Założenie" />
          <Stat icon={<IconUsers />}    number="40+" label="Członków zespołu" />
          <Stat icon={<IconMapPin />}   number="PL"   label="Cała Polska" />
          <Stat icon={<IconAward />}    number="1000+"  label="Klientów" />
        </motion.div>

      <motion.section className="missionSection" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} variants={stagger}>
      <InfoCard
  icon={
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <circle cx="12" cy="12" r="6"></circle>
      <circle cx="12" cy="12" r="2"></circle>
    </svg>
  }
  title="Misja"
>
  Wzmacniamy młode talenty poprzez sprzedaż bezpośrednią i marketing,
  pomagając firmom osiągać cele rozwojowe.
</InfoCard>

<InfoCard
  icon={
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
      <circle cx="12" cy="12" r="3"></circle>
    </svg>
  }
  title="Wizja"
>
  Chcemy być wiodącym dostawcą skalowalnych usług sprzedażowych i marketingowych w Polsce.
</InfoCard>

<InfoCard
  icon={
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
    </svg>
  }
  title="Wartości"
>
  Elastyczność, rozwój, innowacja i wsparcie. Wierzymy w budowanie potencjału i tworzenie możliwości.
</InfoCard>
      </motion.section>

      <motion.section className="journey" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
        <motion.h2 variants={fadeUp}>Nasza historia</motion.h2>
        <motion.p variants={fadeUp}>Od Małego Startupu do Globalnego Przedsiębiorstwa</motion.p>
        <div className="timeline">
          <TimelineItem year="2024"  title="Początek w Warszawie"   text="Nasza historia zaczęła się w 2024 roku w Warszawie, gdzie nasz założyciel stawiał pierwsze kroki w branży sprzedaży bezpośredniej jako część jednej z firm należących do naszej grupy. To tam zdobył doświadczenie, poznał model biznesowy i przekonał się, że działa."                side="left"  />
          <TimelineItem year="2025"  title="Otworzenie własnej firmy  "     text="W 2025 roku podjął decyzję o założeniu własnej firmy — tak powstał FROG w Łodzi. Od pierwszych miesięcy budowaliśmy zespół oparty na wartościach: ambicji, wzajemnym wsparciu i ciągłym rozwoju."              side="right" />
          <TimelineItem year="2026"  title="Ekspansja"    text="W 2026 roku, napędzani wynikami i rosnącym zespołem, otworzyliśmy drugi oddział w Łodzi — potwierdzając, że FROG to nie chwilowy projekt, lecz dynamicznie rozwijająca się organizacja."                                    side="left"  />
             <TimelineItem year="2026"  title="FROG dziś
"    text="Dziś FROG to około 40 osób, ponad 1000 pozyskanych klientów miesięcznie i pozycja wiodącej organizacji sprzedażowej w Łodzi. Wierzymy, że najlepsze wyniki osiąga się przez ludzi — dlatego inwestujemy w każdego członka zespołu od pierwszego dnia.
Oferujemy szkolenia, mentoring i realną ścieżkę kariery — od Brand Ambassadora aż po lidera własnego zespołu lub biura."                                    side="right"  />
        </div>
      </motion.section>

      <motion.section className="aboutCta" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={stagger}>
        <motion.h2 variants={fadeUp}>Gotowy na krok w karierze?</motion.h2>
        <motion.p variants={fadeUp}>
          Zrób kolejny krok w przyszłość sprzedaży bezpośredniej. Dołącz do
          naszego zespołu i odblokuj swój potencjał.
        </motion.p>
       <motion.button
  variants={fadeUp}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.97 }}
  onClick={() => navigate("/apply")} className="ctaPrimary"
>
  Aplikuj Teraz →
</motion.button>
      </motion.section>

    </div>
  );
}

function Stat({ icon, number, label }) {
  return (
    <motion.div className="aboutStat" whileHover={{ y: -6 }}>
      <div className="aboutStatIcon">{icon}</div>
      <strong>{number}</strong>
      <small>{label}</small>
    </motion.div>
  );
}

function InfoCard({ icon, title, children }) {
  return (
    <motion.div className="infoCard" variants={fadeUp} whileHover={{ y: -10 }}>
      <div className="infoIcon">{icon}</div>
      <h3>{title}</h3>
      <p>{children}</p>
    </motion.div>
  );
}

function TimelineItem({ year, title, text, side }) {
  return (
    <motion.div className={`timelineItem ${side}`} variants={fadeUp} whileHover={{ scale: 1.03 }}>
      <span>{year}</span>
      <h3>{title}</h3>
      <p>{text}</p>
    </motion.div>
  );
}

export default About;