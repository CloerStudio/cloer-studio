import React from 'react';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  const services = [
    { icon: '🎬', title: 'Montaż Rolek', desc: 'Dynamiczny montaż, napisy i dobór muzyki. Sprawię, że Twoje wideo będą viralowe.' },
    { icon: '🎨', title: 'Grafika Social Media', desc: 'Projektowanie spójnych postów i karuzeli, które budują silną markę osobistą.' },
    { icon: '💡', title: 'Strategia Contentu', desc: 'Pomoc w zaplanowaniu publikacji, które angażują Twoją społeczność.' },
  ];

  return (
    <section id="services" style={{ padding: 'var(--section-padding)' }}>
      <div className="container">
        <h2 className="section-title">W czym mogę Ci pomóc?</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              style={{
                padding: '3rem 2rem',
                background: 'white',
                borderRadius: '20px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
                textAlign: 'center'
              }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>{s.icon}</div>
              <h3 style={{ marginBottom: '1rem', color: 'var(--clr-sage-dark)' }}>{s.title}</h3>
              <p style={{ opacity: 0.8 }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
