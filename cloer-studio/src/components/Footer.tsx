import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{ padding: '4rem 0', textAlign: 'center', backgroundColor: '#f0f3f1', color: 'var(--clr-sage-dark)' }}>
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Cloer Studio. Wszystkie prawa zastrzeżone.</p>
      </div>
    </footer>
  );
};

export default Footer;
