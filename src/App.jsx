import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Apply from "./pages/Apply";
import Faq from "./pages/Faq";
import Terms from "./pages/Terms";
import Policy from "./pages/Policy";
import ScrollToTop from "./ScrolltoTop";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />

      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/career" element={<div>Career</div>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/policy" element={<Policy />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;