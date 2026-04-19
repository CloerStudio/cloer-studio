import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const questions = [
    { q: 'Ile trwa realizacja jednego zlecenia?', a: 'Standardowy czas montażu rolki to 24-48h od momentu przesłania materiałów.' },
    { q: 'Czy muszę dostarczyć własne nagrania?', a: 'Tak, montuję z Twoich materiałów, ale chętnie doradzę, jak je nagrać.' },
  ];

  return (
    <section id="faq" style={{ padding: 'var(--section-padding)' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <h2 className="section-title">Częste Pytania</h2>
        <div>
          {questions.map((item, index) => (
            <div key={index} style={{ marginBottom: '1rem', borderBottom: '1px solid var(--clr-sage-light)' }}>
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                style={{
                  width: '100%',
                  padding: '1.5rem 0',
                  display: 'flex',
                  justifyContent: 'space-between',
                  background: 'none',
                  border: 'none',
                  fontFamily: 'var(--ff-heading)',
                  fontSize: '1.3rem',
                  color: 'var(--clr-sage-dark)',
                  cursor: 'pointer'
                }}
              >
                {item.q}
                <span>{activeIndex === index ? '−' : '+'}</span>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    style={{ overflow: 'hidden' }}
                  >
                    <p style={{ paddingBottom: '1.5rem', opacity: 0.8 }}>{item.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
