import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" style={{ padding: 'var(--section-padding)', backgroundColor: '#f1f4f2' }}>
      <div className="container">
        <div style={{
          maxWidth: '700px',
          margin: '0 auto',
          background: 'white',
          padding: '4rem',
          borderRadius: '30px',
          boxShadow: '0 30px 60px rgba(0,0,0,0.05)'
        }}>
          <h2 className="section-title" style={{ textAlign: 'left' }}>Zacznijmy tworzyć</h2>
          <p>Opisz swój projekt, a ja odezwę się do Ciebie w ciągu 24h.</p>
          <form style={{ display: 'grid', gap: '1.5rem', marginTop: '2rem' }}>
            <input type="text" placeholder="Imię" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Twoja wiadomość..." rows={5} required />
            <button type="submit" className="btn btn-primary">Wyślij wiadomość</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
