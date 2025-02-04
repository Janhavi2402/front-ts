import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Recommend from "./components/Recommend";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import ReligionPage from "./pages/ReligionPage";
import StatePage from "./pages/StatePage";
import scrollreveal from "scrollreveal";

export default function App() {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });
    sr.reveal(
      `
        nav,
        #hero,
        #services,
        #recommend,
        #testimonials,
        footer
      `,
      {
        opacity: 0,
        interval: 300,
      }
    );
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Services />
              <Recommend />
              <Testimonials />
              <Footer />
            </>
          }
        />
        <Route path="/recommend" element={<Recommend />} />
        <Route path="/religion/:religion" element={<ReligionPage />} />
        <Route path="/religion/:religion/:state" element={<StatePage />} />
      </Routes>
    </Router>
  );
}
