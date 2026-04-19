import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" style={{ padding: 'var(--section-padding)', background: 'var(--clr-off-white)' }}>
      <div className="container">
        <div className="about-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '6rem',
          alignItems: 'center'
        }}>
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="about-image-wrapper"
            style={{ position: 'relative' }}
          >
            {/* The "Thin Frame" */}
            <div style={{
              position: 'relative',
              width: '100%',
              maxWidth: '450px',
              margin: '0 auto',
              padding: '10px',
              border: '1px solid var(--clr-sage-light)',
              borderRadius: '20px',
              backgroundColor: 'white',
              boxShadow: '0 20px 40px rgba(0,0,0,0.05)'
            }}>
              <div style={{
                width: '100%',
                aspectRatio: '3/4',
                backgroundImage: 'url(/assets/about-me.png)',
                backgroundSize: 'contain',
                backgroundPosition: 'bottom center',
                backgroundRepeat: 'no-repeat',
                borderRadius: '10px',
                position: 'relative',
                zIndex: 1,
                backgroundColor: '#f1f4f2' // Soft background color to highlight the cutout
              }} />
              
              {/* Decorative element */}
              <motion.div 
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 2, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  position: 'absolute',
                  top: '-20px',
                  right: '-20px',
                  width: '80px',
                  height: '80px',
                  border: '1px solid var(--clr-accent)',
                  borderRadius: '50%',
                  zIndex: 0,
                  opacity: 0.4
                }}
              />
            </div>
          </motion.div>

          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="about-text"
          >
            <h2 style={{ 
              fontFamily: 'var(--ff-heading)', 
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', 
              color: 'var(--clr-sage-dark)',
              marginBottom: '2rem',
              textTransform: 'uppercase',
              letterSpacing: '-1px',
              fontWeight: 400
            }}>
              Poznajmy się <br />
              <span style={{ color: 'var(--clr-sage)', fontSize: '1.2rem', fontFamily: 'var(--ff-body)', textTransform: 'none', letterSpacing: '0', display: 'block', marginTop: '0.5rem' }}>
                tworzę z pasją i precyzją
              </span>
            </h2>
            
            <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem', color: 'var(--clr-graphite)', lineHeight: 1.8 }}>
              Cześć! Jestem Twoim partnerem w tworzeniu contentu, który nie tylko wygląda dobrze, ale przede wszystkim **angażuje**. 
              Specjalizuję się w montażu dynamicznych rolek i projektowaniu postów, które oddają unikalny charakter Twojej marki.
            </p>
            
            <p style={{ marginBottom: '2rem', fontSize: '1.1rem', color: 'var(--clr-graphite)', lineHeight: 1.8 }}>
              Wiem, jak cennym zasobem jest Twój czas. Moim zadaniem jest odciążenie Cię od technicznych aspektów produkcji wideo, 
              tak abyś mógł skupić się na tym, co robisz najlepiej – tworzeniu i inspirowaniu swojej społeczności.
            </p>
            
            <a href="#contact" className="btn btn-secondary" style={{ padding: '0.8rem 2rem' }}>
              Dowiedz się więcej o współpracy
            </a>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { 
            grid-template-columns: 1fr !important;
            gap: 4rem !important;
            text-align: center;
          }
          .about-text h2 { font-size: 2.5rem !important; }
        }
      `}</style>
    </section>
  );
};

export default About;
