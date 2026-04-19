import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero-section" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '80px',
      background: 'var(--clr-off-white)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container" style={{ 
        position: 'relative', 
        zIndex: 2, 
        display: 'flex', 
        alignItems: 'center',
        width: '100%'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="hero-content"
          style={{ 
            flex: '1',
            maxWidth: '600px', // Restricted width to prevent overlap
            paddingRight: '2rem'
          }}
        >
          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            style={{ 
              fontSize: 'clamp(2.5rem, 6vw, 4.8rem)', 
              lineHeight: 0.9,
              marginBottom: '2rem', 
              color: 'var(--clr-sage-dark)',
              textTransform: 'uppercase',
              letterSpacing: '-2px',
              fontWeight: 400
            }}
          >
            Chcesz działać <br />
            <span style={{ color: 'var(--clr-accent)' }}>regularnie</span>, <br />
            ale brak Ci czasu?
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="subtitle" 
            style={{ 
              fontSize: '1.1rem', 
              marginBottom: '3rem', 
              opacity: 0.8,
              maxWidth: '500px',
              lineHeight: 1.6
            }}
          >
            Zajmij się tworzeniem, ja zajmę się resztą. Profesjonalny montaż rolek i postów, który sprawi, że Twoja marka zabłyśnie.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="hero-cta" 
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
          >
            <a href="#contact" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1rem' }}>
              Zacznijmy współpracę
            </a>
            <a href="#services" className="btn btn-secondary" style={{ padding: '1rem 2.5rem', fontSize: '1rem' }}>
              Poznaj usługi
            </a>
          </motion.div>
        </motion.div>

        {/* Hero Visual Element - Moved inside container to stay relative to text on large screens */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="hero-image-container"
          style={{
            flex: '1',
            height: '70vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative'
          }}
        >
          <div style={{
            width: '110%', // Bleed slightly to the right
            height: '100%',
            backgroundImage: 'url(/assets/hero-bg.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '40px',
            boxShadow: '-20px 20px 60px rgba(0,0,0,0.1)',
          }} />
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .container { flex-direction: column !important; text-align: center; }
          .hero-content { 
            maxWidth: 100% !important; 
            padding-right: 0 !important; 
            margin-bottom: 3rem;
            z-index: 2;
          }
          .hero-cta { justify-content: center; }
          .hero-image-container { 
            width: 100% !important; 
            height: 40vh !important;
            order: -1;
            margin-bottom: 2rem;
          }
        }
        
        @media (min-width: 1400px) {
          .hero-image-container div {
            width: 130% !important;
            margin-right: -30%;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
