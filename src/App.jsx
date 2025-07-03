import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import SessionFees from "./components/SessionFees";
import StatsSection from "./components/StatsSection";
function App() {
  return (
    <div className="font-sans text-gray-800">
      <Hero />
      <StatsSection />
      <Services />
      <About />

      <SessionFees />
      <FAQ />
      <Contact />
    </div>
  );
}

export default App;
