import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" style={{ padding: 'var(--section-padding)' }}>
      <div className="container">
        <div className="about-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          alignItems: 'center'
        }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="about-image"
            style={{ position: 'relative' }}
          >
            {/* ZDJECIE O MNIE: assets/profile.jpg */}
            <div style={{
                width: '100%',
                aspectRatio: '1/1',
                borderRadius: '20px',
                backgroundColor: 'var(--clr-sage-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '30px 30px 0px var(--clr-sage-light)',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                color: 'var(--clr-sage-dark)'
            }}>
                ZDJECIE O MNIE
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="about-text"
          >
            <h2 className="section-title" style={{ textAlign: 'left' }}>O mnie</h2>
            <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem', opacity: 0.85 }}>
              Pomagam twórcom odzyskać czas, przejmując najbardziej czasochłonny etap tworzenia treści – montaż. 
              Moim celem jest sprawienie, aby Twoje social media wyglądały profesjonalnie i spójnie.
            </p>
            <p style={{ fontSize: '1.1rem', opacity: 0.85 }}>
              Działam w estetyce "clean & modern", dbając o każdy detal.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
