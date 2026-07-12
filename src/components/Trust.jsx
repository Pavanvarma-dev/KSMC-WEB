import { ShieldCheck, Award, Users, Star, Target, Check } from 'lucide-react';

import msmeLogo from '../assets/images/5.png';
import startupIndiaLogo from '../assets/images/6.png';
import digitalIndiaLogo from '../assets/images/Screenshot 2026-06-21 141020.png';
import womenEmpInitiativeLogo from '../assets/images/Screenshot 2026-06-21 141026.png';
import nitiAayogLogo from '../assets/images/Screenshot 2026-06-21 141044.png';
import gemLogo from '../assets/images/Screenshot 2026-06-21 141049.png';
import azadiLogo from '../assets/images/Screenshot 2026-06-21 141057.png';

export default function Trust() {
  const logos = [
    { src: msmeLogo, name: 'MSME Registered', status: 'MSME Registered' },
    { src: startupIndiaLogo, name: 'Startup India', status: 'Startup India Recognized' },
    { src: digitalIndiaLogo, name: 'Digital India', status: 'Digital India Supported' },
    { src: womenEmpInitiativeLogo, name: 'WE Initiative', status: 'Women Empowerment' },
    { src: nitiAayogLogo, name: 'NITI Aayog', status: 'NITI Aayog Partner' },
    { src: gemLogo, name: 'GeM Seller', status: 'GeM Registered' },
    { src: azadiLogo, name: 'Azadi Mahotsav', status: 'Proud to be Part of New India' },
  ];

  return (
    <section id="partners" className="trust-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Trust & Recognition</span>
          <h2 className="section-title">Recognized. Trusted. Committed <span>to Rural India.</span></h2>
          <p className="section-desc">
            KSMCM Industries is proudly recognized by government bodies and organizations that share our vision of building a digitally empowered rural India.
          </p>
        </div>

        {/* Scrolling Marquee Slider */}
        <div className="logo-slider-container">
          <div className="logo-marquee-track">
            {/* Render logos list twice for seamless wrapping */}
            {logos.concat(logos).map((logo, idx) => (
              <div className="partner-logo-card" key={idx}>
                <div className="partner-logo-box">
                  <img src={logo.src} alt={`${logo.name} Logo`} />
                </div>
                <div className="partner-logo-name">{logo.name}</div>
                <span className="partner-logo-status">
                  <Check size={12} style={{ marginRight: '4px', color: '#27ae60' }} /> {logo.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Recognition Badges */}
        <div className="trust-badges-grid">
          <div className="trust-badge-card">
            <div className="badge-icon-box"><ShieldCheck size={20} /></div>
            <h4>100% Compliant</h4>
            <p>We follow all government guidelines and regulations.</p>
          </div>
          <div className="trust-badge-card">
            <div className="badge-icon-box"><Award size={20} /></div>
            <h4>Verified & Certified</h4>
            <p>All registrations and documents are verified and authentic.</p>
          </div>
          <div className="trust-badge-card">
            <div className="badge-icon-box"><Users size={20} /></div>
            <h4>Community Focused</h4>
            <p>Aligned with national goals for rural development.</p>
          </div>
          <div className="trust-badge-card">
            {/* Custom clean Handshake / Award icon */}
            <div className="badge-icon-box">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m11 17 2 2a1 1 0 0 0 1.4 0l6.5-6.5a1 1 0 0 0 0-1.4l-8-8a1 1 0 0 0-1.4 0L9 5"/><path d="m3 14 8-8"/><path d="m14 18 3 3a1 1 0 0 0 1.4 0l2.5-2.5a1 1 0 0 0 0-1.4l-3-3"/><path d="M5 12a1 1 0 0 0-1 1v4a3 3 0 0 0 3 3h4a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H7a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1z"/></svg>
            </div>
            <h4>Trusted by Partners</h4>
            <p>Building strong partnerships for a stronger tomorrow.</p>
          </div>
          <div className="trust-badge-card">
            <div className="badge-icon-box"><Star size={20} /></div>
            <h4>Commitment to Impact</h4>
            <p>Every recognition inspires us to do more for Bharat.</p>
          </div>
          <div className="trust-badge-card">
            <div className="badge-icon-box"><Target size={20} /></div>
            <h4>Driven by Purpose</h4>
            <p>Our purpose is to empower every village in India.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
