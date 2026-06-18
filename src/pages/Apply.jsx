import React from "react";
import "./Apply.css";
import { motion } from "framer-motion";
import Form from '../components/Form/Form'

/* ── ICONS ── */
const IconClock = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 6v6l4 2" />
    <circle cx="12" cy="12" r="10" />
  </svg>
);

const IconAward = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
    <circle cx="12" cy="8" r="6" />
  </svg>
);

const IconUsers = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <path d="M16 3.128a4 4 0 0 1 0 7.744" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <circle cx="9" cy="7" r="4" />
  </svg>
);

/* ── FEATURES ── */
const features = [
{
  icon: <IconClock />,
  title: "Cenimy Twój czas",
  desc: "dlatego odpowiadamy sprawnie i dbamy o to, abyś nie musiał długo czekać na informację zwrotną.",
},
{
  icon: <IconAward />,
  title: "Nie wymagamy doświadczenia",
  desc: "Zapewniamy kompleksowe szkolenia dla wszystkich nowych członków zespołu.",
},
{
  icon: <IconUsers />,
  title: "Dołącz do młodego zespołu",
  desc: "Pracuj z dynamicznymi specjalistami w wspierającym środowisku.",
},
];

/* ── ANIMATIONS ── */
const heroVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const cardsContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 20, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

export default function Apply() {
  return (
    <div className="apply-page">

      {/* HERO WRAPPER */}
      <div className="apply-hero-wrapper">
        <motion.div
          className="apply-hero"
          variants={heroVariant}
          initial="hidden"
          animate="show"
        >
          <button className="apply-badge">Aplikuj</button>

          <h1 className="apply-heading">
                        Rozpocznij swoją karierę w Frog
          </h1>

          <p className="apply-subheading">
              Zgłoś się i rozpocznij swoją drogę! Dołącz do naszego młodego i
            innowacyjnego zespołu, który zapewnia stałe wsparcie i możliwości rozwoju.
          </p>
        </motion.div>
      </div>

      {/* CARDS */}
      <div className="apply-cards-section">
        <motion.div
          className="apply-cards"
          variants={cardsContainer}
          initial="hidden"
          animate="show"
        >
          {features.map((feature, i) => (
            <motion.div
              className="apply-card"
              key={i}
              variants={cardVariant}
              whileHover={{ y: -6, scale: 1.02 }}
            >
              <div className="apply-card-icon">
                {feature.icon}
              </div>

              <div className="apply-card-body">
                <h3 className="apply-card-title">
                  {feature.title}
                </h3>

                <p className="apply-card-desc">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* CTA BUTTON (BOTTOM) */}
      <motion.div
        className="apply-cta-wrap"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
     
<Form></Form>     
      </motion.div>

    </div>
  );
}