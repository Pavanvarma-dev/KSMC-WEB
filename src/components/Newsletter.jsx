import { useState } from 'react';
import { Download, MessageCircle } from 'lucide-react';
import logoImg from '../assets/images/KSMCM LOGO.png';

export default function Newsletter({ onNavClick }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) {
      alert('Please enter a valid email address.');
      return;
    }
    setNewsletterSubscribed(true);
    setNewsletterEmail('');
    setTimeout(() => setNewsletterSubscribed(false), 5000);
  };

  return (
    <section id="careers" className="download-section">
      <div className="container download-grid">
        <div className="download-left">
          <h2>Be a Part of a Digital Revolution That Empowers Rural India</h2>
          <p>
            Join millions of families who trust KSMCM Industries for their daily needs, essential utility services, and career-building entrepreneurship opportunities.
          </p>
          <div className="download-buttons">
            <button className="btn btn-primary" onClick={() => alert('App store download starting...')}>
              <Download size={18} /> Download App
            </button>
            <a href="#contact" onClick={(e) => onNavClick('contact', e)} className="btn btn-outline">Become a Partner</a>
            <a href="#about" onClick={(e) => onNavClick('about', e)} className="btn btn-outline">Join Our Mission</a>
          </div>
          <div className="qr-card">
            <div className="qr-img">
              <img src={logoImg} alt="KSMCM QR Code placeholder" />
            </div>
            <div className="qr-info">
              <h4>Scan to Download</h4>
              <p>Available on both Android & iOS systems.</p>
              <div className="app-store-logos">
                <span style={{fontSize: '0.75rem', fontWeight: 'bold', background: 'rgba(255,255,255,0.1)', padding: '4px 8px', borderRadius: '4px'}}>Google Play</span>
                <span style={{fontSize: '0.75rem', fontWeight: 'bold', background: 'rgba(255,255,255,0.1)', padding: '4px 8px', borderRadius: '4px'}}>App Store</span>
              </div>
            </div>
          </div>
        </div>

        <div className="download-right">
          <div className="newsletter-card">
            <h3>Stay Connected</h3>
            <p>Follow us on social media for updates, rural success stories, offers and more.</p>
            <div className="newsletter-social-icons">
              <a href="#" className="n-social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="n-social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="n-social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z"/><path d="m10 15 5-3-5-3z"/></svg>
              </a>
              <a href="#" className="n-social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="#" className="n-social-icon"><MessageCircle size={18} /></a>
            </div>
            <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
              <input 
                type="email" 
                className="newsletter-input" 
                placeholder="Enter your email address"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
              />
              <button type="submit" className="newsletter-btn">Subscribe</button>
            </form>
            {newsletterSubscribed && (
              <div className="newsletter-status-msg">✓ Subscribed successfully! Thank you.</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
