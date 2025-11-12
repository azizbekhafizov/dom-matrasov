import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./componnts/Navbar";
import Hero from "./componnts/Hero";
import About from "./componnts/About";
import Products from "./componnts/Products";
import WhyChooseUs from "./componnts/WhyChooseUs";
import Showroom from "./componnts/Showroom";
import Contact from "./componnts/Contact";
import Footer from "./componnts/Footer";

function App() {
  return (
    <Router>
      <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Products />
                <WhyChooseUs />
                <Showroom />
                <Contact />
              </>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
