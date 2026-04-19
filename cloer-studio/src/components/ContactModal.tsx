import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setIsSubmitting(true);
      // Symulacja wysyłania
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => {
          setIsSuccess(false);
          onClose();
        }, 3000);
      }, 1000);
    }
  };

  const inputStyle = {
    width: '100%',
    padding: '0.8rem 0',
    background: 'transparent',
    border: 'none',
    borderBottom: '1px solid rgba(44, 54, 48, 0.2)',
    fontFamily: 'var(--ff-body)',
    fontSize: '0.95rem',
    color: 'var(--clr-graphite)',
    outline: 'none',
    transition: 'border-color 0.3s ease'
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(44, 54, 48, 0.5)',
            backdropFilter: 'blur(5px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: '1rem'
          }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            style={{
              background: 'var(--clr-white)',
              padding: '2.5rem',
              borderRadius: '24px',
              maxWidth: '400px',
              width: '100%',
              position: 'relative',
              boxShadow: '0 25px 50px rgba(0,0,0,0.1)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={onClose}
              style={{ 
                position: 'absolute', 
                top: '1rem', 
                right: '1.2rem', 
                fontSize: '1.8rem', 
                border: 'none', 
                background: 'none', 
                cursor: 'pointer', 
                color: 'var(--clr-graphite)',
                opacity: 0.5,
                lineHeight: 1
              }}
            >
              &times;
            </button>

            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                style={{ textAlign: 'center', padding: '2rem 0' }}
              >
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✨</div>
                <h3 style={{ fontFamily: 'var(--ff-heading)', fontSize: '1.8rem', color: 'var(--clr-sage-dark)' }}>Wiadomość wysłana!</h3>
                <p style={{ opacity: 0.8, fontSize: '0.9rem', marginTop: '0.5rem' }}>Odezwę się najszybciej jak to możliwe.</p>
              </motion.div>
            ) : (
              <>
                <h3 style={{ 
                  fontFamily: 'var(--ff-heading)', 
                  fontSize: '1.8rem',
                  color: 'var(--clr-sage-dark)',
                  marginBottom: '0.5rem',
                  textTransform: 'uppercase',
                  fontWeight: 400
                }}>
                  Napisz do mnie
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--clr-graphite)', opacity: 0.8, marginBottom: '1.5rem' }}>
                  Zostaw wiadomość, a wrócę do Ciebie z wyceną.
                </p>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <input 
                    type="text" 
                    placeholder="Imię" 
                    required 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    style={inputStyle}
                  />
                  <input 
                    type="email" 
                    placeholder="E-mail" 
                    required 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    style={inputStyle}
                  />
                  <textarea 
                    placeholder="Opisz krótko swój projekt..." 
                    required 
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    style={{...inputStyle, resize: 'none'}}
                  />
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="btn btn-primary"
                    style={{ width: '100%', marginTop: '1rem', opacity: isSubmitting ? 0.7 : 1 }}
                  >
                    {isSubmitting ? 'Wysyłanie...' : 'Wyślij zapytanie'}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
