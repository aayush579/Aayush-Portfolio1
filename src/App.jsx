import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import ToggleDark from './components/ToggleDark';

function App() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-all">
      <ToggleDark />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;