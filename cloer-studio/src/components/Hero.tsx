import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero-section" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '80px',
      background: 'linear-gradient(135deg, #fdfdfd 0%, #f1f4f2 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
          style={{ maxWidth: '850px' }}
        >
          <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4.2rem)', marginBottom: '1.5rem', color: 'var(--clr-sage-dark)' }}>
            Chcesz działać <span style={{ color: 'var(--clr-sage)', fontStyle: 'italic' }}>regularnie</span>, ale brak Ci czasu na montaż?
          </h1>
          <p className="subtitle" style={{ fontSize: '1.25rem', marginBottom: '3rem', opacity: 0.9 }}>
            Zajmij się tworzeniem, ja zajmę się resztą. Profesjonalny montaż rolek i postów dopasowany do Twojej marki.
          </p>
          <div className="hero-cta" style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#contact" className="btn btn-primary">Zacznijmy współpracę</a>
            <a href="#portfolio" className="btn btn-secondary">Zobacz portfolio</a>
          </div>
        </motion.div>
      </div>

      {/* ZDJECIE HERO: assets/hero-bg.jpg */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        style={{
          position: 'absolute',
          right: '-10%',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '50%',
          height: '70%',
          backgroundColor: 'var(--clr-sage-light)',
          opacity: 0.3,
          borderRadius: '100px 0 0 100px',
          zIndex: 1,
          transformOrigin: 'right',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '0.8rem',
          color: 'var(--clr-sage-dark)',
          fontWeight: 'bold'
        }}
      >
        ZDJECIE HERO
      </motion.div>
    </section>
  );
};

export default Hero;
