import React from 'react';

const Tools: React.FC = () => {
  const tools = [
    { name: 'Canva', iconSrc: '/assets/logo-canva.png' },
    { name: 'CapCut', iconSrc: '/assets/logo-capcut.png' },
    { name: 'Notion', iconSrc: 'https://cdn.simpleicons.org/notion/white' },
    { name: 'DaVinci Resolve', iconSrc: 'https://cdn.simpleicons.org/davinciresolve/white' },
    { name: 'Photoshop', iconSrc: '/assets/logo-photoshop.png' }
  ];
  
  // Duplicate array multiple times for a very smooth infinite loop
  const marqueeTools = [...tools, ...tools, ...tools, ...tools, ...tools, ...tools];

  return (
    <section id="tools" style={{ 
      padding: '5rem 0 4rem', 
      backgroundColor: 'var(--clr-graphite)', 
      color: 'var(--clr-off-white)',
      overflow: 'hidden',
      borderTop: '1px solid rgba(255,255,255,0.05)',
      borderBottom: '1px solid rgba(255,255,255,0.05)'
    }}>
      <div className="container">
        <h2 style={{ 
          fontFamily: 'var(--ff-heading)', 
          fontSize: 'clamp(2rem, 4vw, 3rem)', 
          color: 'var(--clr-off-white)',
          marginBottom: '3rem',
          textAlign: 'center',
          textTransform: 'uppercase',
          fontWeight: 400
        }}>
          Czego używam?
        </h2>
      </div>

      <div style={{ position: 'relative', width: '100%', display: 'flex', alignItems: 'center' }}>
        
        {/* Subtle gradient masks for the edges to blend the scroll */}
        <div style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: '150px',
          background: 'linear-gradient(to right, var(--clr-graphite), transparent)',
          zIndex: 2
        }} />
        <div style={{
          position: 'absolute',
          right: 0,
          top: 0,
          bottom: 0,
          width: '150px',
          background: 'linear-gradient(to left, var(--clr-graphite), transparent)',
          zIndex: 2
        }} />

        {/* The scrolling track */}
        <div className="marquee-track" style={{ display: 'flex', whiteSpace: 'nowrap' }}>
          {marqueeTools.map((tool, index) => (
            <div 
              key={index} 
              style={{ 
                display: 'flex', 
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0 4rem',
                opacity: 0.8,
                transition: 'opacity 0.3s ease',
                cursor: 'default'
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '0.8'}
            >
              <img 
                src={tool.iconSrc} 
                alt={`${tool.name} logo`}
                style={{ 
                  width: '50px', 
                  height: '50px', 
                  objectFit: 'contain',
                  marginBottom: '1rem',
                  filter: tool.iconSrc.includes('simpleicons') ? 'drop-shadow(0 4px 6px rgba(0,0,0,0.3))' : 'none'
                }} 
              />
              <span style={{ 
                fontSize: '1rem', 
                fontWeight: 500, 
                textTransform: 'uppercase',
                letterSpacing: '1px',
                fontFamily: 'var(--ff-body)'
              }}>
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); } 
        }
        
        .marquee-track {
          animation: scroll 40s linear infinite;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Tools;
