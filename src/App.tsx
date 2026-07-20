import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import ScrollToTop from "./components/ScrollToTop";
import Hero from "./components/Hero";
import IntegrationsMarquee from "./components/IntegrationsMarquee";
import HowItWorks from "./components/HowItWorks";
import Benefits from "./components/Benefits";
import HandledForYou from "./components/HandledForYou";
import Expertise from "./components/Expertise";
import Differentiator from "./components/Differentiator";
import ProofBand from "./components/ProofBand";
import Founder from "./components/Founder";
import Security from "./components/Security";
import Faq from "./components/Faq";
import FinalCta from "./components/FinalCta";
import Footer from "./components/Footer";
import Pricing from "./pages/Pricing";
import StartTrial from "./pages/StartTrial";

function HomePage() {
  return (
    <>
      <Hero />
      <IntegrationsMarquee />
      <HowItWorks />
      <Benefits />
      <HandledForYou />
      <Expertise />
      <Differentiator />
      <ProofBand />
      <Founder />
      <Security />
      <Faq />
      <FinalCta />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/start" element={<StartTrial />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
