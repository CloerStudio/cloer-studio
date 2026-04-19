import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateField = (name: string, value: string) => {
    let error = '';
    if (name === 'name' && value.trim().length < 2) error = 'Imię jest za krótkie.';
    if (name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = 'Niepoprawny adres e-mail.';
    if (name === 'subject' && value.trim().length < 3) error = 'Podaj temat wiadomości.';
    if (name === 'message' && value.trim().length < 10) error = 'Wiadomość jest zbyt krótka.';

    setErrors(prev => ({ ...prev, [name]: error }));
    return error === '';
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      validateField(name, value);
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    validateField(e.target.name, e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isNameValid = validateField('name', formData.name);
    const isEmailValid = validateField('email', formData.email);
    const isSubjectValid = validateField('subject', formData.subject);
    const isMessageValid = validateField('message', formData.message);

    if (isNameValid && isEmailValid && isSubjectValid && isMessageValid) {
      setIsSubmitting(true);
      // Symulacja wysyłania
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setIsSuccess(false), 5000);
      }, 1500);
    }
  };

  const inputStyle = {
    width: '100%',
    padding: '1rem 0',
    background: 'transparent',
    border: 'none',
    borderBottom: '1px solid rgba(44, 54, 48, 0.2)',
    fontFamily: 'var(--ff-body)',
    fontSize: '1rem',
    color: 'var(--clr-graphite)',
    outline: 'none',
    transition: 'border-color 0.3s ease'
  };

  const errorStyle = {
    color: '#d65d5d',
    fontSize: '0.8rem',
    marginTop: '0.5rem',
    display: 'block'
  };

  return (
    <section id="contact" style={{ padding: 'var(--section-padding)', backgroundColor: 'var(--clr-white)' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          alignItems: 'start'
        }}>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 style={{
              fontFamily: 'var(--ff-heading)',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              color: 'var(--clr-sage-dark)',
              marginBottom: '1.5rem',
              textTransform: 'uppercase',
              fontWeight: 400
            }}>
              Zacznijmy tworzyć
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--clr-graphite)', opacity: 0.8, marginBottom: '2rem', lineHeight: 1.8 }}>
              Masz pomysł na współpracę? Potrzebujesz kogoś, kto przejmie montaż Twoich materiałów?
              Napisz do mnie, a odezwę się z propozycją działania w ciągu 24 godzin.
            </p>
            <div style={{ marginTop: '3rem' }}>
              <h4 style={{ fontSize: '1.2rem', color: 'var(--clr-sage-dark)', marginBottom: '0.5rem' }}>Email</h4>
              <a href="mailto:parczyk.praca@gmail.com" style={{ color: 'var(--clr-accent)', textDecoration: 'none', fontSize: '1.1rem' }}>parczyk.praca@gmail.com</a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              background: 'var(--clr-off-white)',
              padding: '3.5rem',
              borderRadius: '24px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.03)'
            }}
          >
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ textAlign: 'center', padding: '3rem 0' }}
              >
                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>✨</div>
                <h3 style={{ fontFamily: 'var(--ff-heading)', fontSize: '2rem', color: 'var(--clr-sage-dark)', marginBottom: '1rem' }}>Wiadomość wysłana!</h3>
                <p style={{ opacity: 0.8 }}>Dziękuję za kontakt. Odezwę się do Ciebie najszybciej jak to możliwe.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Twoje imię"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    style={{ ...inputStyle, borderColor: errors.name ? '#d65d5d' : 'rgba(44, 54, 48, 0.2)' }}
                  />
                  {errors.name && <span style={errorStyle}>{errors.name}</span>}
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Adres e-mail"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    style={{ ...inputStyle, borderColor: errors.email ? '#d65d5d' : 'rgba(44, 54, 48, 0.2)' }}
                  />
                  {errors.email && <span style={errorStyle}>{errors.email}</span>}
                </div>

                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Temat (np. Montaż rolek)"
                    value={formData.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    style={{ ...inputStyle, borderColor: errors.subject ? '#d65d5d' : 'rgba(44, 54, 48, 0.2)' }}
                  />
                  {errors.subject && <span style={errorStyle}>{errors.subject}</span>}
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder="Napisz kilka słów o swoim projekcie..."
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    style={{ ...inputStyle, resize: 'none', borderColor: errors.message ? '#d65d5d' : 'rgba(44, 54, 48, 0.2)' }}
                  />
                  {errors.message && <span style={errorStyle}>{errors.message}</span>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary"
                  style={{
                    marginTop: '1rem',
                    width: '100%',
                    opacity: isSubmitting ? 0.7 : 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  {isSubmitting ? 'Wysyłanie...' : 'Wyślij wiadomość'}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>

      <style>{`
        input:focus, textarea:focus {
          border-color: var(--clr-sage-dark) !important;
        }
        @media (max-width: 768px) {
          form > div { margin-bottom: 0.5rem; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
