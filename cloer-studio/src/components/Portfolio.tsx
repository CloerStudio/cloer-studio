import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('all');

  const items = [
    { id: 1, type: 'reels', label: 'ZDJECIE ROLKA 1', title: 'Reel Example 1' },
    { id: 2, type: 'posts', label: 'ZDJECIE POST 1', title: 'Post Example 1' },
    { id: 3, type: 'reels', label: 'ZDJECIE ROLKA 2', title: 'Reel Example 2' },
    { id: 4, type: 'posts', label: 'ZDJECIE POST 2', title: 'Post Example 2' },
  ];

  const filteredItems = filter === 'all' ? items : items.filter(i => i.type === filter);

  return (
    <section id="portfolio" style={{ padding: 'var(--section-padding)', backgroundColor: '#f8faf9' }}>
      <div className="container">
        <h2 className="section-title">Moje Prace</h2>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3rem' }}>
          {['all', 'reels', 'posts'].map(t => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`tab-btn ${filter === t ? 'active' : ''}`}
              style={{
                padding: '0.5rem 2rem',
                border: '1px solid var(--clr-sage-light)',
                borderRadius: '30px',
                cursor: 'pointer',
                backgroundColor: filter === t ? 'var(--clr-sage-dark)' : 'transparent',
                color: filter === t ? 'white' : 'inherit',
                transition: 'all 0.3s ease'
              }}
            >
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}
        >
          <AnimatePresence>
            {filteredItems.map(item => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                style={{
                  position: 'relative',
                  borderRadius: '15px',
                  overflow: 'hidden',
                  aspectRatio: item.type === 'reels' ? '4/5' : '1/1',
                  backgroundColor: 'var(--clr-sage-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--clr-sage-dark)',
                  fontWeight: 'bold',
                  fontSize: '0.9rem'
                }}
              >
                {/* MIEJSCE NA ZDJECIE: {item.label} */}
                <span>{item.label}</span>
                
                <div className="portfolio-overlay" style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(74, 93, 83, 0.8)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: 0,
                  transition: '0.3s opacity',
                  color: 'white'
                }}>
                  <span>Zobacz projekt</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
