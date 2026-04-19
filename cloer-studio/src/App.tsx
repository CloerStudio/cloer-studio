import React from 'react';
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

function App() {
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
      
      <a href="#contact" className="fixed-cta">Zacznijmy współpracę</a>
    </div>
  );
}

export default App;
