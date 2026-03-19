/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import SoftwareDevelopment from "./pages/SoftwareDevelopment";
import DigitalMarketing from "./pages/DigitalMarketing";
import TrainingPlacement from "./pages/TrainingPlacement";
import Career from "./pages/Career";
import ContactPage from "./pages/ContactPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import Portfolio from "./pages/Portfolio";
import Clients from "./pages/Clients";
import ScrollToTop from "./components/ScrollToTop";
import PageTransition from "./components/PageTransition";

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <div key={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/about" element={<PageTransition><About /></PageTransition>} />
          <Route path="/portfolio" element={<PageTransition><Portfolio /></PageTransition>} />
          <Route path="/clients" element={<PageTransition><Clients /></PageTransition>} />
          <Route path="/software-development" element={<PageTransition><SoftwareDevelopment /></PageTransition>} />
          <Route path="/digital-marketing" element={<PageTransition><DigitalMarketing /></PageTransition>} />
          <Route path="/training-placement" element={<PageTransition><TrainingPlacement /></PageTransition>} />
          <Route path="/career" element={<PageTransition><Career /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
          <Route path="/privacy-policy" element={<PageTransition><PrivacyPolicy /></PageTransition>} />
          <Route path="/terms-conditions" element={<PageTransition><TermsConditions /></PageTransition>} />
        </Routes>
      </div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </div>
    </BrowserRouter>
  );
}
