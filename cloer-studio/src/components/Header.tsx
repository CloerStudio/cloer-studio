import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'O mnie', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Usługi', href: '#services' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Kontakt', href: '#contact' },
  ];

  return (
    <header 
      className={`header ${scrolled ? 'scrolled' : ''}`}
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1000,
        transition: 'var(--transition)',
        padding: scrolled ? '0.8rem 0' : '1.5rem 0',
        background: scrolled ? 'rgba(253, 253, 253, 0.8)' : 'transparent',
        backdropFilter: scrolled ? 'blur(15px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(152, 168, 154, 0.1)' : '1px solid transparent'
      }}
    >
      <nav className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="logo" 
          style={{ 
            fontFamily: 'var(--ff-heading)', 
            fontSize: '1.8rem', 
            fontWeight: 700, 
            color: 'var(--clr-sage-dark)',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}
        >
          Cloer Studio
        </motion.div>

        {/* Desktop Nav */}
        <ul className="nav-links desktop-only" style={{ display: 'flex', gap: '2.5rem', listStyle: 'none' }}>
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href}
                style={{
                  textDecoration: 'none',
                  color: 'var(--clr-sage-dark)',
                  fontWeight: 500,
                  fontSize: '0.95rem',
                  transition: 'var(--transition)',
                  opacity: 0.8
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.8')}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <div className="mobile-only" style={{ display: 'none' }}>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--clr-sage-dark)' }}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              background: 'var(--clr-off-white)',
              overflow: 'hidden',
              borderBottom: '1px solid rgba(152, 168, 154, 0.1)'
            }}
          >
            <ul style={{ listStyle: 'none', padding: '2rem' }}>
              {navLinks.map((link) => (
                <li key={link.name} style={{ marginBottom: '1.5rem' }}>
                  <a 
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    style={{
                      textDecoration: 'none',
                      color: 'var(--clr-sage-dark)',
                      fontSize: '1.5rem',
                      fontWeight: 600,
                      fontFamily: 'var(--ff-heading)'
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
      
      <style>{`
        @media (max-width: 768px) {
          .desktop-only { display: none !important; }
          .mobile-only { display: block !important; }
        }
      `}</style>
    </header>
  );
};

export default Header;
