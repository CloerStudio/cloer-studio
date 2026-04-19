import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="glass-nav" style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      padding: '1.2rem 0',
      background: 'rgba(253, 253, 253, 0.85)',
      backdropFilter: 'blur(15px)',
      borderBottom: '1px solid rgba(152, 168, 154, 0.2)'
    }}>
      <nav className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="logo" style={{ fontFamily: 'var(--ff-heading)', fontSize: '1.8rem', fontWeight: 700, color: 'var(--clr-sage-dark)' }}>
          {/* MIEJSCE NA LOGO: assets/logo.png */}
          Cloer Studio
        </div>
        <ul className="nav-links" style={{ display: 'flex', gap: '2.5rem', listStyle: 'none' }}>
          <li><a href="#hero">Start</a></li>
          <li><a href="#about">O mnie</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#contact">Kontakt</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
