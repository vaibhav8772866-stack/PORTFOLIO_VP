import { useCallback, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import IntroScreen from './components/IntroScreen';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import FeaturedProject from './components/FeaturedProject';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import GithubSection from './components/GithubSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import NotFound from './components/NotFound';

function PortfolioPage() {
  const [introComplete, setIntroComplete] = useState(false);
  const handleIntroComplete = useCallback(() => setIntroComplete(true), []);

  return (
    <>
      <CustomCursor />
      <IntroScreen onComplete={handleIntroComplete} />
      <ScrollProgress />

      <div className="min-h-screen bg-background relative overflow-x-hidden text-gray-100">
        <div className="fixed inset-0 pointer-events-none -z-10">
          <div className="absolute top-0 right-0 w-[70vw] h-[70vh] rounded-full bg-primary/5 blur-[120px] opacity-60" />
          <div className="absolute bottom-1/4 left-0 w-[50vw] h-[50vh] rounded-full bg-accent/5 blur-[100px] opacity-50" />
        </div>

        <div
          className="fixed inset-0 pointer-events-none -z-10 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />

        <Navbar visible={introComplete} />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
          <Hero visible={introComplete} />

          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-8" />

          <About />
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-8" />

          <Skills />
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-8" />

          <FeaturedProject />
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-8" />

          <Projects />
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-8" />

          <Experience />
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-8" />

          <Certifications />
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-8" />

          <GithubSection />
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-8" />

          <Contact />
        </main>

        <Footer />
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PortfolioPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
