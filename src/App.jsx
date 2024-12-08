import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import PageNotFound from "./components/PageNotFound";
import About from "./components/About";
import Services from "./components/Services";
import ScrollToTop from "./components/ScrollToTop";
import { ThemeContext } from "./contexts/ThemeContext";
// import { useContext } from "react";
import { useState } from "react";
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
  const [isLight, setIsLight] = useState(
    JSON.parse(localStorage.getItem("isLightMode")) || true
  );

  return (
    <>
      <ThemeContext.Provider value={[isLight, setIsLight]}>
        <div className={`max-w-screen ${isLight ? "lightMode" : ""}`}>
          <Router>
            <ScrollToTop />
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
            <Footer />
            <ScrollToTopButton />
          </Router>
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
