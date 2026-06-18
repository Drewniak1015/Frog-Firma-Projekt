import { useState } from "react";
import "./Faq.css";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
const faqs = [
  {
    q: "Czy muszę mieć doświadczenie w sprzedaży?",
    a: "Nie. Większość naszego zespołu zaczynała bez żadnego doświadczenia w sprzedaży. Zapewniamy pełne szkolenie od pierwszego dnia — liczy się nastawienie, nie CV.",
  },
  {
    q: "Jak wygląda pierwszy dzień w pracy?",
    a: "Zaczynasz od wprowadzenia do zespołu i szkolenia z naszego modelu działania. Nie rzucamy na głęboką wodę — przez pierwsze dni towarzyszysz doświadczonemu członkowi zespołu i uczysz się w praktyce.",
  },
  {
    q: "Czy to praca na pełen etat?",
    a: "Tak. Szukamy osób dostępnych w pełnym wymiarze godzin. Działamy w Łodzi, w dwóch biurach.",
  },
  {
    q: "Jak szybko można awansować?",
    a: "Ścieżka kariery zależy wyłącznie od Twoich wyników i zaangażowania — nie od stażu pracy. Najszybsi nasi ludzie przechodzili do roli lidera zespołu w ciągu kilku miesięcy.",
  },
  {
    q: "Czy bierzecie udział w eventach i wyjazdach?",
    a: "Tak. Organizujemy regularne eventy w Polsce i za granicą — konferencje, spotkania networkingowe i wyjazdy integracyjne.",
  },
  {
    q: "Jak przebiega rekrutacja?",
    a: "Aplikujesz, oddzwaniamy najszybciej jak możemy, umawiamy krótką rozmowę i jeśli jest dopasowanie — ustalamy start. Cały proces trwa zazwyczaj kilka dni.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const ChevronIcon = ({ open }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{
      transform: open ? "rotate(180deg)" : "rotate(0deg)",
      transition: "transform 0.25s ease",
    }}
  >
    <path d="M6 9l6 6 6-6" />
  </svg>
);

export default function FAQ() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(null);

  const toggle = (i) => setOpen(open === i ? null : i);

  return (
    <div className="faqPage">

      {/* HERO WRAPPER (CENTER FIX) */}
      <div className="faqHeroWrapper">
        <motion.section
          className="faqHero"
          initial="hidden"
          animate="show"
          variants={stagger}
        >
          <motion.div className="faqHeroInner" variants={fadeUp}>
            <span className="faqBadge">FAQ</span>

            <motion.h1 className="faqHeading" variants={fadeUp}>
              Często zadawane pytania
            </motion.h1>

            <motion.p className="faqSubheading" variants={fadeUp}>
              Wszystko, co chcesz wiedzieć przed aplikacją. Jeśli coś jest niejasne — napisz do nas.
            </motion.p>
          </motion.div>
        </motion.section>
      </div>

      {/* ACCORDION */}
      <div className="faqAccordionWrapper">
        <motion.div
          className="faqAccordion"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          {faqs.map((item, i) => (
            <motion.div
              key={i}
              className={`faqItem ${open === i ? "faqItem--open" : ""}`}
              onClick={() => toggle(i)}
              variants={fadeUp}
              whileHover={{ scale: 1.01 }}
            >
              <div className="faqQuestion">
                <span>{item.q}</span>
                <div className={`faqChevron ${open === i ? "faqChevron--open" : ""}`}>
                  <ChevronIcon open={open === i} />
                </div>
              </div>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    className="faqAnswer"
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{item.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* CTA */}
      <motion.section
        className="faqCta"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={stagger}
      >
        <motion.h2 variants={fadeUp}>Gotowy na pierwszą rozmowę?</motion.h2>
        <motion.p variants={fadeUp}>
          Dołącz do Frog Group i zacznij rozwijać swoją karierę w sprzedaży.
        </motion.p>

<motion.button
  variants={fadeUp}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.97 }}
  onClick={() => navigate("/apply")}
>
  Aplikuj Teraz →
</motion.button>
      </motion.section>
    </div>
  );
}