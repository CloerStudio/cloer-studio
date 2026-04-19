import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const questions = [
    { 
      q: 'Jak długo czekam na zmontowane materiały?', 
      a: 'Zależy mi na jakości i dopracowaniu każdego detalu, dlatego standardowy czas montażu pojedynczej rolki to 2-3 dni robocze od otrzymania plików. Przy większych pakietach termin publikacji ustalamy wspólnie w harmonogramie.' 
    },
    { 
      q: 'Od czego zależą ceny Twoich usług?', 
      a: 'Moje stawki są idealne dla osób, które chcą rozpocząć profesjonalne działania w social mediach bez przepalania ogromnych budżetów. Cena montażu jednej rolki zaczyna się już od ok. 60-80 zł. Pakiety stałej współpracy wyceniam indywidualnie, w zależności od ilości materiałów i Twoich potrzeb.' 
    },
    { 
      q: 'Jak wygląda proces naszej współpracy?', 
      a: 'Po krótkiej rozmowie i ustaleniu celu, przesyłasz mi surowe materiały (wideo/zdjęcia). Następnie ja zajmuję się montażem, dobieram trendy muzykę i dodaję dynamiczne napisy. Przed publikacją zawsze wysyłam Ci projekt do akceptacji – w cenie masz jedną turę poprawek.' 
    },
    { 
      q: 'Czy muszę dostarczyć własne nagrania?', 
      a: 'Tak, pracuję na Twoich materiałach wideo i zdjęciach, ale chętnie doradzę Ci, jak je najlepiej nagrać (kwestie oświetlenia, kadrów) lub pomogę w ułożeniu scenariusza, żeby efekt końcowy był jak najlepszy.' 
    },
  ];

  return (
    <section id="faq" style={{ padding: 'var(--section-padding)', backgroundColor: 'var(--clr-off-white)' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 style={{ 
            fontFamily: 'var(--ff-heading)', 
            fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
            color: 'var(--clr-sage-dark)',
            marginBottom: '1rem',
            textTransform: 'uppercase',
            fontWeight: 400
          }}>
            Częste Pytania
          </h2>
          <p style={{ opacity: 0.7, fontSize: '1.1rem' }}>Rozwiejmy Twoje wątpliwości przed startem współpracy.</p>
        </motion.div>

        <div>
          {questions.map((item, index) => {
            const isActive = activeIndex === index;
            return (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                style={{ 
                  marginBottom: '1.5rem', 
                  backgroundColor: 'white',
                  borderRadius: '16px',
                  boxShadow: isActive ? '0 15px 30px rgba(0,0,0,0.04)' : '0 5px 15px rgba(0,0,0,0.02)',
                  border: '1px solid rgba(152, 168, 154, 0.15)',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease'
                }}
              >
                <button
                  onClick={() => setActiveIndex(isActive ? null : index)}
                  style={{
                    width: '100%',
                    padding: '1.8rem 2rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: 'none',
                    border: 'none',
                    fontFamily: 'var(--ff-body)',
                    fontSize: '1.15rem',
                    fontWeight: 600,
                    color: isActive ? 'var(--clr-accent)' : 'var(--clr-graphite)',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'color 0.3s ease'
                  }}
                >
                  <span style={{ paddingRight: '2rem' }}>{item.q}</span>
                  <motion.div
                    animate={{ rotate: isActive ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    style={{ color: isActive ? 'var(--clr-accent)' : 'var(--clr-sage)' }}
                  >
                    <ChevronDown size={24} />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p style={{ 
                        padding: '0 2rem 1.8rem', 
                        color: 'var(--clr-graphite)', 
                        opacity: 0.8,
                        lineHeight: 1.7,
                        fontSize: '1rem'
                      }}>
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
