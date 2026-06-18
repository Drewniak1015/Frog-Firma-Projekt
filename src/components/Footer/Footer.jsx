import "./Footer.css";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
function Footer() {
  return (
    <footer className="footer">
      <div className="footerContainer">

        <div className="footerColumn">
          <div className="footerLogo">
            Frog
            <br />
            Group
          </div>

          <p>
            Frog Group wspiera firmy w rozwoju poprzez skalowalne usługi
            sprzedażowe i marketingowe.
          </p>

          <div className="footerSocials">

<a href="https://www.instagram.com/froglodz/" className="socialIcon">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
    viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
  </svg>
</a>


          </div>
        </div>

        <div className="footerColumn">
          <h4>Firma</h4>

<NavLink to="/" end className="applyLink">
  Home
</NavLink>

<NavLink to="/about" className="applyLink">
  O Nas
</NavLink>

<NavLink to="/faq" className="applyLink">
  FAQ
</NavLink>

<NavLink to="/contact" className="applyLink">
  Kontakt
</NavLink>
        </div>

        <div className="footerColumn">
          <h4>Wsparcie</h4>

<NavLink to="/apply" className="navCta">
  Aplikuj teraz
</NavLink>

          <NavLink to="/Policy" className="applyLink">
Polityka prywatności
</NavLink><NavLink to="/Terms" className="applyLink">
  Regulamin
</NavLink>
        </div>

        <div className="footerColumn">
          <h4>Kontakt</h4>

     <div className="contactItem">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
    viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    className="icon">
    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>

  <p>
   28 pułkowników strzelców kaniowskich 61/63
    <br />
    90-558 Łódź, Polska
  </p>
</div>

<div className="contactItem">
 
 <svg xmlns="http://www.w3.org/2000/svg"  width="16" height="16"
    viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    className="icon">
    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
  </svg>
<a className="email-link" href="mailto:wbialas@frog.info.pl">
  wbialas@frog.info.pl
</a>
</div>

<div className="contactItem">
 
<svg xmlns="http://www.w3.org/2000/svg"  width="16" height="16"
    viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    className="icon">
    <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
  </svg>
  <p> +48 884 549 803 </p>
</div>
        </div>

      </div>

      {/* 🔥 FIXED FOOTER BOTTOM */}
      <div className="footerBottom">
        <div className="footerBottomInner">
          <span>© 2026 Frog Group. Wszelkie prawa zastrzeżone.</span>

          <div className="footerBottomLinks">
    
          <NavLink to="/Policy" className="applyLink">
Polityka prywatności
</NavLink><NavLink to="/Terms" className="applyLink">
  Regulamin
</NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;