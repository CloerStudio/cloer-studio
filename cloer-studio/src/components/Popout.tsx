import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Popout: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Logic 1: Appear after 7 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 7000);

    // Logic 2: Appear after scrolling 50% of the page
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.offsetHeight;
      const winHeight = window.innerHeight;
      const scrollPercent = scrollTop / (docHeight - winHeight);

      if (scrollPercent > 0.5) {
        setIsVisible(true);
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const closePopout = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(44, 54, 48, 0.4)',
            backdropFilter: 'blur(5px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999
          }}
          onClick={closePopout}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            style={{
              background: 'var(--clr-white)',
              padding: '3.5rem 3rem',
              borderRadius: '24px',
              maxWidth: '450px',
              width: '90%',
              position: 'relative',
              textAlign: 'center',
              boxShadow: '0 25px 50px rgba(0,0,0,0.1)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closePopout}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                fontSize: '2rem',
                border: 'none',
                background: 'none',
                cursor: 'pointer',
                color: 'var(--clr-graphite)',
                opacity: 0.5,
                lineHeight: 1
              }}
            >
              &times;
            </button>

            <h3 style={{
              fontFamily: 'var(--ff-heading)',
              fontSize: '2.5rem',
              color: 'var(--clr-sage-dark)',
              marginBottom: '1rem',
              fontWeight: 400,
              textTransform: 'uppercase'
            }}>
              Darmowa<br />Konsultacja
            </h3>

            <p style={{
              marginBottom: '2rem',
              color: 'var(--clr-graphite)',
              opacity: 0.8,
              lineHeight: 1.6
            }}>
              Zostaw swój email, a odezwę się, by umówić darmową 15-minutową rozmowę o Twoich potrzebach.
            </p>

            <form
              onSubmit={(e) => { e.preventDefault(); closePopout(); }}
              style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
            >
              <input
                type="email"
                placeholder="Twój email"
                required
                style={{
                  padding: '1rem',
                  borderRadius: '12px',
                  border: '1px solid rgba(44, 54, 48, 0.2)',
                  fontFamily: 'var(--ff-body)',
                  fontSize: '1rem',
                  outline: 'none'
                }}
              />
              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%', marginTop: '0.5rem' }}
              >
                Odbierz Konsultację
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Popout;
