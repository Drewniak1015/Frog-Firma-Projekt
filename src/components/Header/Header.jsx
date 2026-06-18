import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./Header.css";
import frog from "../../assets/frog.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "O nas" },
    { to: "/FAQ", label: "FAQ" },
    { to: "/contact", label: "Kontakt" },
  ];

  return (
    <motion.header
      className={`header ${scrolled ? "headerScrolled" : "headerGlass"}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="headerInner">

        {/* LOGO */}
        <NavLink to="/" className="logo" onClick={closeMenu}>
          <motion.img
            src={frog}
            alt="Frog Group"
            className="logoImg"
            whileHover={{ scale: 1.06 }}
            transition={{ type: "spring", stiffness: 400 }}
          />
        </NavLink>

        {/* DESKTOP NAV */}
        <nav className="navDesktop">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                isActive ? "navLink navLinkActive" : "navLink"
              }
            >
              {({ isActive }) => (
                <motion.span className="navLinkInner">
                  {label}

                  {isActive && (
                    <motion.span
                      className="navUnderline"
                      layoutId="underline"
                    />
                  )}
                </motion.span>
              )}
            </NavLink>
          ))}
        </nav>

        {/* APPLY BTN */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="applyWrap"
        >
          <NavLink to="/apply" className="applyBtn" onClick={closeMenu}>
            Aplikuj teraz
          </NavLink>
        </motion.div>

        {/* BURGER */}
        <motion.button
          className={isOpen ? "burger burgerOpen" : "burger"}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
          whileTap={{ scale: 0.9 }}
        >
          <span></span>
          <span></span>
          <span></span>
        </motion.button>

      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobileMenu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div className="mobileMenuInner">

              {navLinks.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  className="mobileLink"
                  onClick={closeMenu}
                >
                  {label}
                </NavLink>
              ))}

              <NavLink
                to="/apply"
                className="applyBtnMobile"
                onClick={closeMenu}
              >
                Aplikuj teraz
              </NavLink>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Header;