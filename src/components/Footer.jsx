import { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import logoImg from '../assets/images/KSMCM LOGO.png';

export default function Footer({ onNavClick }) {
  const [footerEmail, setFooterEmail] = useState('');
  const [footerSubscribed, setFooterSubscribed] = useState(false);

  const handleFooterSubscribe = (e) => {
    e.preventDefault();
    if (!footerEmail || !footerEmail.includes('@')) {
      alert('Please enter a valid email address.');
      return;
    }
    setFooterSubscribed(true);
    setFooterEmail('');
    setTimeout(() => setFooterSubscribed(false), 5000);
  };

  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-top-grid">
          <div className="footer-col">
            <div className="footer-logo-block">
              <img src={logoImg} className="footer-logo" alt="KSMCM Logo" />
              <div className="brand-text" style={{color: 'white'}}>
                KSMCM
                <span className="brand-sub" style={{color: '#a4f2cc'}}>INDUSTRIES</span>
              </div>
            </div>
            <p className="footer-desc">
              Leading rural commerce and services ecosystem. Connecting rural households to world-class opportunities.
            </p>
          </div>

          <div className="footer-col">
            <h4>Reach us</h4>
            <ul className="footer-contact-list">
              <li>
                <Phone className="footer-contact-icon" size={16} />
                <span>+91 9876543210</span>
              </li>
              <li>
                <Mail className="footer-contact-icon" size={16} />
                <span>ksmcm.mart@gmail.com</span>
              </li>
              <li>
                <MapPin className="footer-contact-icon" size={16} />
                <span>Vizag, Andhra Pradesh, India</span>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul className="footer-menu">
              <li><a href="#about" onClick={(e) => onNavClick('about', e)}>About Us</a></li>
              <li><a href="#services" onClick={(e) => onNavClick('services', e)}>Services</a></li>
              <li><a href="#partners" onClick={(e) => onNavClick('partners', e)}>Partners</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Legal</h4>
            <ul className="footer-menu">
              <li><a href="#" onClick={(e) => {e.preventDefault(); alert('Privacy policy is coming soon...');}}>Privacy Policy</a></li>
              <li><a href="#" onClick={(e) => {e.preventDefault(); alert('Terms of service is coming soon...');}}>Terms & Services</a></li>
              <li><a href="#" onClick={(e) => {e.preventDefault(); alert('Terms of use is coming soon...');}}>Terms of Use</a></li>
              <li><a href="#" onClick={(e) => {e.preventDefault(); alert('Refund policy is coming soon...');}}>Refund Policy</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Join Our Newsletter</h4>
            <div className="footer-newsletter-box">
              <p>Stay updated with our latest features, expansion plans, and wholesale price drops.</p>
              <form className="footer-newsletter-form" onSubmit={handleFooterSubscribe}>
                <input 
                  type="email" 
                  className="footer-newsletter-input" 
                  placeholder="Your email address..."
                  value={footerEmail}
                  onChange={(e) => setFooterEmail(e.target.value)}
                />
                <button type="submit" className="footer-newsletter-btn">Subscribe</button>
              </form>
              {footerSubscribed && (
                <div className="newsletter-status-msg" style={{color: '#a4f2cc'}}>✓ Subscribed successfully!</div>
              )}
              <span style={{fontSize: '0.72rem', opacity: 0.5}}>* We will send you weekly updates for your better tool management.</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div>© {new Date().getFullYear()} KSMCM Industries. All rights reserved.</div>
          <div>Quick Links: Techlabz Keybox | Downloads | Forum</div>
        </div>
      </div>
    </footer>
  );
}
