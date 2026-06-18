import "./Home.css";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import jarek from "../assets/jarek.png";
import Ania from "../assets/Ania.png";
import Wiczka from "../assets/Wiczka.png";
import event1 from "../assets/even6.jpg";
import event2 from "../assets/even2.jpg";
import event3 from "../assets/even3.jpg";
import event4 from "../assets/even4.jpg";
import event10 from "../assets/even10.jpg";
import { useNavigate } from "react-router-dom";
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

// Icons as SVG components
const icons = {
  support: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  learning: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
    </svg>
  ),
  career: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
    </svg>
  ),
  team: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
    </svg>
  ),
  growth: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
    </svg>
  ),
  practice: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
    </svg>
  ),
  network: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
    </svg>
  ),
  sales: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
    </svg>
  ),
  partner: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  event: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/>
      <line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  ),
  freelance: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
      <line x1="7" y1="7" x2="7.01" y2="7"/>
    </svg>
  ),
  franchise: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  ),
};

const testimonials = [
  {
    id: 1,
    name: "Eryk",
    role: "Crew Lider",
    image: jarek,
  text: "Zaczynałem bez żadnego doświadczenia. Dzięki szkoleniom i wsparciu zespołu szybko rozwinąłem swoje umiejętności i awansowałem na stanowisko lidera.",
  },
  {
    id: 2,
    name: "Kajetan",
    role: "Crew Lider",
    image: Wiczka,
  text: "Najbardziej cenię tutaj atmosferę i możliwość ciągłego rozwoju. Od pierwszego dnia czułem, że jestem częścią zgranego zespołu.",
  },
  {
    id: 3,
    name: "Ania",
    role: "Owner",
  image: Ania,
 text: "Budujemy miejsce, w którym liczą się zaangażowanie, ambicja i chęć nauki. Wiele osób zaczyna od zera i osiąga świetne wyniki w krótkim czasie.",
  },
];

function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
const navigate = useNavigate();

  return (
    <div className="home">
      {/* ── HERO ── */}
      <section className="hero">
        <motion.div
          className="heroContent"
          initial="hidden"
          animate="show"
          variants={stagger}
        >
          <motion.span className="badge" variants={fadeUp}>
            Witamy w Frog - Twojej przyszłości sprzedażowej
          </motion.span>

          <motion.h1 variants={fadeUp}>
            Odblokuj swój <span>potencjał sprzedażowy</span>
            <br />
            FROG
          </motion.h1>

          <motion.p variants={fadeUp}>
       Dołącz do naszego młodego i dynamicznego zespołu — stałe wsparcie, dynamiczne eventy i kampanie B2B oraz D2D, które pomogą Ci zbudować udaną karierę w sprzedaży.

          </motion.p>

          <motion.div className="heroButtons" variants={fadeUp}>
  <motion.button
  variants={fadeUp}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.97 }}
  onClick={() => navigate("/apply")}
>
  Aplikuj Teraz →
</motion.button>
  <motion.button
      className="outline"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      onClick={() => navigate("/about")} // albo inna trasa
    >
      Poznaj naszą przeszłość
    </motion.button>
          </motion.div>

          <motion.div className="stats" variants={fadeUp}>
            <motion.div whileHover={{ y: -5 }}>

              <strong>2025</strong>
              <small>od</small>
            </motion.div>
            <motion.div whileHover={{ y: -5 }}>
              <strong>40+</strong>
              <small>członków zespołu</small>
            </motion.div>
            <motion.div whileHover={{ y: -5 }}>
              <strong>Łódź</strong>
              <small>Polska</small>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* ── WHY CHOOSE ── */}
      <motion.section
        className="section choose"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={stagger}
      >
        <motion.h2 variants={fadeUp}>Dlaczego warto wybrać FROG?</motion.h2>
        <motion.p variants={fadeUp}>
          Dołącz do naszego zespołu, który oferuje stałe wsparcie, dynamiczne
          wydarzenia i kampanie B2B, które pomagają Ci odkryć swój potencjał.
        </motion.p>

        <motion.div className="cards" variants={stagger}>
          <Feature
            icon={icons.support}
            title="Elastyczne wsparcie i swoboda działania"
            desc="Oferujemy elastyczne wsparcie, które pozwala Ci działać samodzielnie, ucząc się od doświadczonych liderów zespołu."
          />
          <Feature
            icon={icons.learning}
            title="Możliwości nauki i rozwoju kariery"
            desc="Kompleksowe programy szkoleniowe z coachingiem osobistym, które pomagają rozwijać się i zostawać skutecznymi sprzedawcami."
          />
          <Feature
            icon={icons.career}
            title="Rozpocznij swoją karierę w sprzedaży"
            desc="Doświadczenie w sprzedaży bezpośredniej, zaprojektowane by pomóc Ci odkryć swój potencjał."
          />
          <Feature
            icon={icons.team}
            title="Młody i innowacyjny zespół"
            desc="Dołącz do dynamicznego zespołu młodych profesjonalistów, których pasją jest stymulowanie wzrostu biznesu."
          />
          <Feature
            icon={icons.growth}
            title="Obiecujące możliwość otworzenia własnej firmy"
            desc="Możliwości rozwoju polegające na zarządzaniu własnym zespołem sprzedaży lub biurem w całej Polsce."
          />
          <Feature
            icon={icons.practice}
            title="Doświadczenie przez praktykę"
            desc="Staże zaprojektowane, aby zapewnić doświadczenie z pierwszej ręki, z praktycznym szkoleniem na żywych rynkach."
          />
        </motion.div>
      </motion.section>

      {/* ── ABOUT ── */}
      <motion.section
        className="about"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
  <motion.div className="aboutImg" variants={fadeUp}>
  <img src={event10} alt="About" className="aboutImg"/>
</motion.div>

        <motion.div className="aboutText" variants={stagger}>
          <motion.span className="smallBadge" variants={fadeUp}>O nas</motion.span>
          <motion.h2 variants={fadeUp}>
           Dynamiczny wzrost w sprzedaży i marketingu — prosto z Łodzi
          </motion.h2>
          <motion.p variants={fadeUp}>
        
FROG wspiera firmy w osiąganiu wzrostu. Oferujemy skalowalne usługi sprzedaży i marketingu dopasowane do konkretnych potrzeb biznesowych. Założona w 2025 roku w Łodzi, już w 2026 roku otworzyliśmy drugi oddział — umacniając naszą pozycję jako wiodącej organizacji sprzedażowej w regionie.
Nasz zespół liczy dziś około 40 osób i nieustannie się rozwija. Wierzymy w siłę młodych talentów i stawiamy na ich rozwój poprzez specjalizację w sprzedaży osobistej i marketingu bezpośrednim.

          </motion.p>
          <motion.p variants={fadeUp}>
            Nasz zespół jest nastawiony na wzmacnianie talentów poprzez sprzedaż
            bezpośrednią i działania marketingowe oferujące spersonalizowane usługi i
            współpracę, które pomagają firmom rosnąć.
          </motion.p>

          <motion.div className="aboutStats" variants={stagger}>
            <motion.div whileHover={{ y: -5 }}>
              <strong>2025</strong>
              <small>Rok założenia</small>
            </motion.div>
            <motion.div whileHover={{ y: -5 }}>
              <strong>40+</strong>
              <small>Członków zespołu</small>
            </motion.div>
            <motion.div whileHover={{ y: -5 }}>
              <strong>1000+</strong>
              <small>Klientów</small>
            </motion.div>
          </motion.div>

   <motion.button
  variants={fadeUp}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.97 }}
  onClick={() => navigate("/apply")}
>
  Aplikuj Teraz →
</motion.button>
        </motion.div>
      </motion.section>

      {/* ── SERVICES ── */}
      <motion.section
        className="section services"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={stagger}
      >
        <motion.h2 variants={fadeUp}>Nasze usługi</motion.h2>
        <motion.p variants={fadeUp}>
          Skalowalne usługi sprzedaży i marketingu dostosowane do potrzeb
          konkretnego biznesu.
        </motion.p>

        <motion.div className="serviceGrid" variants={stagger}>
          <ServiceCard
            icon={icons.network}
            title="Networking"
            desc="Budowanie silnych relacji w sieci i rozwijanie wartościowych połączeń biznesowych."
          />
          <ServiceCard
            icon={icons.sales}
            title="Sprzedaż bezpośrednia"
            desc="Budowanie relacji sprzedaży bezpośredniej z naciskiem na satysfakcję klienta i skuteczność."
          />
          <ServiceCard
            icon={icons.partner}
            title="Partnerstwa"
            desc="Sukces sprzedaży poprzez partnerstwa, rozwijanie współpracy i relacji biznesowych dla wzrostu."
          />
          <ServiceCard
            icon={icons.event}
            title="Eventy"
            desc="Organizowanie generujących wzrost wydarzeń, które tworzą niezapomniane doświadczenia i możliwości biznesowe."
          />
          <ServiceCard
            icon={icons.freelance}
            title="Rozwój freelancerów"
            desc="Programy wzrostu freelancerów z elastycznością i wsparciem dla niezależnych profesjonalistów."
          />
          <ServiceCard
            icon={icons.franchise}
            title="Firma"
            desc="Możliwości otworzenia własnej firmy dla ambitnych liderów, którzy chcą prowadzić własny biznes pod naszą marką."
          />
        </motion.div>
      </motion.section>

      {/* ── TESTIMONIALS ── */}
      <section className="testimonials">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          <motion.h2 variants={fadeUp}>Co mówi nasz zespół</motion.h2>
          <motion.p variants={fadeUp}>
            Posłuchaj osób, które rozwinęły się razem z Frog'a.
          </motion.p>

          <motion.div className="testimonialCard" variants={fadeUp}>
            <div className="testimonialLogos">
           {testimonials.map((t, i) => (
  <button
    key={t.id}
    className={`testimonialAvatar ${i === activeTestimonial ? "active" : ""}`}
    onClick={() => setActiveTestimonial(i)}
    aria-label={t.name}
  >
    <img src={t.image} alt={t.name} />
  </button>
))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                className="testimonialBody"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="stars">★★★★★</div>
                <p className="testimonialQuote">
                  „{testimonials[activeTestimonial].text}"
                </p>
                <div className="testimonialMeta">
                  <strong>{testimonials[activeTestimonial].name}</strong>
                  <span>{testimonials[activeTestimonial].role}</span>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="testimonialDots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`dot ${i === activeTestimonial ? "activeDot" : ""}`}
                  onClick={() => setActiveTestimonial(i)}
                  aria-label={`Opinia ${i + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ── EVENTS ── */}
      <motion.section
        className="section events"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={stagger}
      >
        <motion.h2 variants={fadeUp}>Eventy</motion.h2>
        <motion.p variants={fadeUp}>
          Dołącz do naszych dynamicznych wydarzeń w całej Europie. Sprawdź
          najważniejsze momenty z naszych ostatnich spotkań.
        </motion.p>

        <motion.div className="gallery" variants={stagger}>
          <motion.div
  className="photo tall"
  style={{ backgroundImage: `url(${event1})` }}
  variants={fadeUp}
  whileHover={{ scale: 1.02 }}
/>

<motion.div
  className="photo"
  style={{ backgroundImage: `url(${event2})` }}
  variants={fadeUp}
  whileHover={{ scale: 1.02 }}
/>

<motion.div
  className="photo"
  style={{ backgroundImage: `url(${event3})` }}
  variants={fadeUp}
  whileHover={{ scale: 1.02 }}
/>

<motion.div
  className="photo wide"
  style={{ backgroundImage: `url(${event4})` }}
  variants={fadeUp}
  whileHover={{ scale: 1.02 }}
/>
        </motion.div>
      </motion.section>

      {/* ── CTA ── */}
      <motion.section
        className="cta"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={stagger}
      >
        <motion.span className="ctaBadge" variants={fadeUp}>Rozpocznij swoją drogę</motion.span>
        <motion.h2 variants={fadeUp}>Gotowy na krok w karierze?</motion.h2>
        <motion.p variants={fadeUp}>
          Zrób kolejny krok w swojej przyszłości sprzedażowej i dołącz do
          naszego zespołu już dziś. Zaczniemy razem.
        </motion.p>
        <motion.div className="ctaButtons" variants={fadeUp}>
     <motion.button
  variants={fadeUp}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.97 }}
  onClick={() => navigate("/apply")} className="ctaPrimary"
>
  Aplikuj Teraz
</motion.button>
          <motion.button className="ctaSecondary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}  onClick={() => navigate("/contact")}>
            Skontaktuj się z nami
          </motion.button>

          
        </motion.div>
      </motion.section>
    </div>
  );
}

function Feature({ icon, title, desc }) {
  return (
    <motion.div className="feature" variants={fadeUp} whileHover={{ y: -8, boxShadow: "0 20px 50px rgba(0,115,216,0.12)" }}>
      <div className="icon">{icon}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </motion.div>
  );
}

function ServiceCard({ icon, title, desc }) {
  return (
    <motion.div className="serviceCard" variants={fadeUp} whileHover={{ y: -8, boxShadow: "0 20px 50px rgba(0,115,216,0.1)" }}>
      <div className="serviceIcon">{icon}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </motion.div>
  );
}

function BlogCard({ img, date, readTime, tag, title, desc }) {
  return (
    <motion.article className="blogCard" variants={fadeUp} whileHover={{ y: -8 }}>
      <div className="blogImg" style={{ backgroundImage: `url('${img}')` }} />
      <div className="blogBody">
        <div className="blogMeta">
          <small>{date}</small>
          <span className="blogDot">•</span>
          <small>{readTime}</small>
        </div>
        <span className="blogTag">{tag}</span>
        <h3>{title}</h3>
        <p>{desc}</p>
        <a href="#">Czytaj więcej →</a>
      </div>
    </motion.article>
  );
}

export default Home;