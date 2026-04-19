import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('all');

  const items = [
    { 
      id: 1, 
      type: 'reels', 
      video: 'https://videos.pexels.com/video-files/7793354/7793354-sd_506_960_25fps.mp4', 
      title: 'Content Creation',
      subtitle: 'CREATE.'
    },
    { 
      id: 2, 
      type: 'posts', 
      image: '/assets/portfolio-post-1.png', 
      title: 'Creative Brand Post' 
    },
    { 
      id: 3, 
      type: 'reels', 
      video: 'https://videos.pexels.com/video-files/7806863/7806863-sd_506_960_25fps.mp4', 
      title: 'Behind The Scenes',
      subtitle: 'DETAILS.'
    },
    { 
      id: 4, 
      type: 'posts', 
      image: '/assets/portfolio-post-2.jpg', 
      title: 'Modern Product Post' 
    },
    { 
      id: 5, 
      type: 'reels', 
      video: 'https://videos.pexels.com/video-files/8283626/8283626-sd_506_960_25fps.mp4', 
      title: 'Studio Session',
      subtitle: 'VIBE.'
    },
  ];

  const filteredItems = filter === 'all' ? items : items.filter(i => i.type === filter);

  return (
    <section id="portfolio" style={{ padding: 'var(--section-padding)', backgroundColor: 'var(--clr-off-white)' }}>
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
            Portfolio
          </h2>
          <p style={{ opacity: 0.7, maxWidth: '600px', margin: '0 auto' }}>
            Przegląd moich najnowszych realizacji. Wybierz kategorię, aby zobaczyć konkretne formaty.
          </p>
        </motion.div>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '4rem' }}>
          {[
            { id: 'all', label: 'Wszystkie' },
            { id: 'reels', label: 'Rolki (Video)' },
            { id: 'posts', label: 'Posty' }
          ].map(t => (
            <button
              key={t.id}
              onClick={() => setFilter(t.id)}
              style={{
                padding: '0.8rem 2rem',
                border: filter === t.id ? '1px solid var(--clr-sage-dark)' : '1px solid rgba(0,0,0,0.1)',
                borderRadius: '50px',
                cursor: 'pointer',
                backgroundColor: filter === t.id ? 'var(--clr-sage-dark)' : 'white',
                color: filter === t.id ? 'white' : 'var(--clr-sage-dark)',
                transition: 'var(--transition)',
                fontSize: '0.9rem',
                fontWeight: 600
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
            gap: '2.5rem',
            alignItems: 'start'
          }}
        >
          <AnimatePresence mode='popLayout'>
            {filteredItems.map(item => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                style={{
                  position: 'relative',
                  borderRadius: '25px',
                  overflow: 'hidden',
                  boxShadow: '0 15px 35px rgba(0,0,0,0.08)',
                  cursor: 'pointer',
                  width: '100%',
                }}
                whileHover={{ y: -10 }}
              >
                {item.type === 'reels' ? (
                  <div style={{ position: 'relative', width: '100%', aspectRatio: '9/16', backgroundColor: '#000' }}>
                    <video 
                      src={item.video} 
                      autoPlay 
                      muted 
                      loop 
                      playsInline
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    {/* Dynamic Subtitles */}
                    <div style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '100%',
                      textAlign: 'center',
                      pointerEvents: 'none'
                    }}>
                      <motion.span
                        animate={{ opacity: [0.5, 1, 0.5], scale: [0.95, 1.05, 0.95] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        style={{
                          fontFamily: 'var(--ff-heading)',
                          fontSize: '3rem',
                          color: 'white',
                          textShadow: '0 0 20px rgba(0,0,0,0.5)',
                          letterSpacing: '5px'
                        }}
                      >
                        {item.subtitle}
                      </motion.span>
                    </div>
                  </div>
                ) : (
                  <img 
                    src={item.image} 
                    alt={item.title}
                    style={{
                      width: '100%',
                      height: 'auto',
                      display: 'block',
                      transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                    }} 
                    className="portfolio-img" 
                  />
                )}
                
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(44, 54, 48, 0.8), transparent)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  padding: '2rem',
                  opacity: 0,
                  transition: '0.3s opacity',
                  color: 'white'
                }} className="portfolio-overlay">
                  <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '0.5rem' }}>
                    {item.type === 'reels' ? 'Montaż Rolki' : 'Projekt Posta'}
                  </span>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 600, textAlign: 'center' }}>{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <style>{`
        .portfolio-img:hover { transform: scale(1.05); }
        div[style*="pointer"]:hover .portfolio-overlay { opacity: 1 !important; }
      `}</style>
    </section>
  );
};

export default Portfolio;
