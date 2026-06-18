import "./Contact.css";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

function Contact() {
  return (
    <div className="contactPage">
      <motion.section
        className="contactHero"
        initial="hidden"
        animate="show"
        variants={stagger}
      >
        <motion.span className="contactBadge" variants={fadeUp}>
          Kontakt
        </motion.span>

        <motion.h1 variants={fadeUp}>Skontaktuj się z nami</motion.h1>

        <motion.p variants={fadeUp}>
          Masz pytania? Jesteśmy tutaj, aby pomóc. Napisz do nas, a odpowiemy
          tak szybko, jak to możliwe.
        </motion.p>
      </motion.section>

      <motion.section
        className="contactInfo"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={stagger}
      >
       <ContactCard
  icon={
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
      viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
  }
  title="Adres"
  text={
    <>
      28 pułkowników strzelców kaniowskich 61/63
      <br />
      90-558 Łódź, Polska
      <br />
    </>
  }
/>

<ContactCard
  icon={
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
      viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
      <rect x="2" y="4" width="20" height="16" rx="2"></rect>
    </svg>
  }
  title="Email"
  text={
    <>
       wbialas@frog.info.pl
      <br />
    </>
  }
/>

<ContactCard
  icon={
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
      viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
    </svg>
  }
  title="Numer telefonu"
  text="+48 884 549 803"
/>

<ContactCard
  icon={
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
      viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 6v6l4 2"></path>
      <circle cx="12" cy="12" r="10"></circle>
    </svg>
  }
  title="Godziny otwarcia"
  text={
    <>
      Pon. - Pt.: 8:00 - 16:00
      <br />
      Sob. - Nd.: Zamknięte
    </>
  }
/>

        <motion.div className="followBox" variants={fadeUp}>
          <h3>Obserwuj nas</h3>

          <div className="socials">
   
<motion.a
  href="
  https://www.instagram.com/froglodz/"
  whileHover={{ y: -5 }}
  whileTap={{ scale: 0.95 }}
  className="socialIcon"
>
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
    viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
  </svg>
</motion.a>


          </div>
        </motion.div>
      </motion.section>

      <motion.section
        className="mapSection"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={stagger}
      >
        <motion.div className="mapBox" variants={fadeUp}>
   <iframe
  title="Frog Group Łódź"
  src="https://www.google.com/maps?q=Andrzeja+Struga+66,+Łódź,+Poland&output=embed"
  loading="lazy"
></iframe>
        </motion.div>
      </motion.section>
    </div>
  );
}

function ContactCard({ icon, title, text }) {
  return (
    <motion.div className="contactCard" variants={fadeUp} whileHover={{ y: -10 }}>
      <div className="contactIcon">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </motion.div>
  );
}

export default Contact;