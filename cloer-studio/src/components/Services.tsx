import React from 'react';
import { motion } from 'framer-motion';
import { Video, BarChart3, PenTool } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    { 
      icon: <Video size={36} strokeWidth={1.5} />, 
      title: 'Tworzenie Contentu', 
      desc: 'Dynamiczny montaż rolek, posty i karuzele. Przejmuję od Ciebie najbardziej czasochłonny proces, dbając o najwyższą estetykę i angażujące formy wideo/foto.' 
    },
    { 
      icon: <BarChart3 size={36} strokeWidth={1.5} />, 
      title: 'Wsparcie Social Media', 
      desc: 'Pomoc w strategii, planowaniu publikacji i doborze odpowiednich trendów. Buduję spójny wizerunek Twojej marki, który przyciąga zaangażowaną społeczność.' 
    },
    { 
      icon: <PenTool size={36} strokeWidth={1.5} />, 
      title: 'Copywriting', 
      desc: 'Tworzę teksty, które nie tylko ładnie wyglądają, ale przede wszystkim sprzedają i budują relacje. Od angażujących opisów postów po scenariusze rolek.' 
    },
  ];

  return (
    <section id="services" style={{ padding: 'var(--section-padding)', backgroundColor: 'var(--clr-white)' }}>
      <div className="container">
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
            marginBottom: '1.5rem',
            textTransform: 'uppercase',
            fontWeight: 400
          }}>
            W czym mogę Ci pomóc?
          </h2>
          <p style={{ opacity: 0.7, maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
            Skup się na tworzeniu, a resztę zostaw mi. Oferuję kompleksowe wsparcie w prowadzeniu Twoich profili.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              whileHover={{ 
                y: -15, 
                boxShadow: '0 25px 50px rgba(152, 168, 154, 0.15)',
                borderColor: 'var(--clr-sage)'
              }}
              style={{
                padding: '3.5rem 2.5rem',
                backgroundColor: 'var(--clr-off-white)',
                borderRadius: '24px',
                border: '1px solid rgba(152, 168, 154, 0.2)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.02)',
                textAlign: 'left',
                transition: 'border-color 0.3s ease'
              }}
            >
              <div style={{ 
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                backgroundColor: 'var(--clr-white)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--clr-sage-dark)',
                marginBottom: '2rem',
                border: '1px solid rgba(152, 168, 154, 0.2)',
              }}>
                {s.icon}
              </div>
              <h3 style={{ 
                marginBottom: '1rem', 
                color: 'var(--clr-sage-dark)', 
                fontSize: '1.5rem',
                fontFamily: 'var(--ff-heading)',
                letterSpacing: '0.5px'
              }}>
                {s.title}
              </h3>
              <p style={{ color: 'var(--clr-graphite)', opacity: 0.8, lineHeight: 1.7 }}>
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
