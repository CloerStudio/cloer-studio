import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Popout: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!localStorage.getItem('popoutShown')) {
        setIsVisible(true);
      }
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  const closePopout = () => {
    setIsVisible(false);
    localStorage.setItem('popoutShown', 'true');
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
            background: 'rgba(44, 54, 48, 0.8)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2000
          }}
          onClick={closePopout}
        >
          <motion.div
            initial={{ scale: 0.8, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 20 }}
            style={{
              background: 'white',
              padding: '4rem',
              borderRadius: '30px',
              maxWidth: '500px',
              width: '90%',
              position: 'relative',
              textAlign: 'center'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={closePopout}
              style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', fontSize: '2rem', border: 'none', background: 'none', cursor: 'pointer', color: '#999' }}
            >
              &times;
            </button>
            <h3 style={{ fontFamily: 'var(--ff-heading)', marginBottom: '1rem' }}>Pobierz darmowy Planner! 🎁</h3>
            <p style={{ marginBottom: '2rem' }}>Zorganizuj swoje publikacje i działaj regularnie.</p>
            <form style={{ display: 'grid', gap: '1rem' }}>
              <input type="email" placeholder="Email" required style={{ padding: '1rem', borderRadius: '12px', border: '1px solid #eee' }} />
              <button type="submit" className="btn btn-primary">Odbieram</button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Popout;
