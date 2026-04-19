import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Tools from './components/Tools';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Popout from './components/Popout';
import ContactModal from './components/ContactModal';

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Services />
        <Tools />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <Popout />
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
      
      <button onClick={() => setIsContactModalOpen(true)} className="fixed-cta" style={{ border: 'none', cursor: 'pointer' }}>
        Zacznijmy współpracę
      </button>
    </div>
  );
}

export default App;
