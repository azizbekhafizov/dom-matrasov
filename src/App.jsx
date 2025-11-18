import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "./componnts/Navbar";
import Hero from "./componnts/Hero";
import About from "./componnts/About";
import WhyChooseUs from "./componnts/WhyChooseUs";
import Contact from "./componnts/Contact";
import Footer from "./componnts/Footer";
import Loading from "./componnts/Loading";
import Types from "./componnts/Types";
import Products from "./componnts/Products";

function App() {
  const { i18n } = useTranslation();
  const [loading, setLoading] = useState(true);

  // Sahifa birinchi yuklanishida
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // 1.5s
    return () => clearTimeout(timer);
  }, []);

  // Til almashtirishda loading
  useEffect(() => {
    const handleLanguageChange = () => {
      setLoading(true);
      setTimeout(() => setLoading(false), 2000); // 2s loading
    };

    i18n.on("languageChanged", handleLanguageChange);
    return () => i18n.off("languageChanged", handleLanguageChange);
  }, [i18n]);

  return (
    <Router>
      {loading ? (
        <Loading />
      ) : (
        <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <About />
                  <WhyChooseUs />
                  <Types />
                  <Contact />
                  <Products />
                </>
              }
            />
          </Routes>
          <Footer />
        </div>
      )}
      
    </Router>
  );
}

export default App;
