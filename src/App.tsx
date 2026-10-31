import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Education } from "./components/Education";
import { GameBoost } from "./components/GameBoost";
import { Projects } from "./components/Projects";
import { FreelanceExperience } from "./components/FreelanceExperience";
import { Skills } from "./components/Skills";
import { LearningGoals } from "./components/LearningGoals";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-bg text-text-primary overflow-x-hidden w-full">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent focus:text-bg focus:rounded focus:text-sm focus:font-medium"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />
        <About />
        <Education />
        <GameBoost />
        <Projects />
        <FreelanceExperience />
        <Skills />
        <LearningGoals />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
