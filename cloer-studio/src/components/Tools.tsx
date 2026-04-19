import React from 'react';

const Tools: React.FC = () => {
  const tools = ['Canva', 'CapCut', 'Notion', 'Instagram'];
  
  return (
    <section id="tools" style={{ padding: '4rem 0', backgroundColor: 'var(--clr-sage-dark)', color: 'white' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 className="section-title" style={{ color: 'white' }}>Czego używam?</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '4rem', flexWrap: 'wrap' }}>
          {tools.map(tool => (
            <div key={tool} style={{ fontSize: '1.2rem', fontWeight: 600, opacity: 0.7 }}>
              {tool}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
