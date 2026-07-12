import { ShoppingBag, Grid, Users, ShieldCheck, Check } from 'lucide-react';
import familyPhone from '../assets/images/F.png';
import appMockup from '../assets/images/1.png';

export default function About({ onNavClick }) {
  return (
    <section id="about" className="one-platform-section">
      <div className="container">
        
        {/* Top 5 Horizontal Stats Cards */}
        <div className="about-stats-grid">
          <div className="about-stat-card">
            <div className="about-stat-icon-box">
              <ShoppingBag size={22} />
            </div>
            <div className="about-stat-text-box">
              <h4>10,000+</h4>
              <p>Products Available <br />Across Categories</p>
            </div>
          </div>
          <div className="about-stat-card">
            <div className="about-stat-icon-box">
              {/* Custom 12h Clock SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/><text x="8" y="13.5" fontSize="4.5" fontWeight="bold" fill="currentColor" stroke="none">12h</text></svg>
            </div>
            <div className="about-stat-text-box">
              <h4>12 Hours</h4>
              <p>Grocery Delivery <br />Promise</p>
            </div>
          </div>
          <div className="about-stat-card">
            <div className="about-stat-icon-box">
              {/* Custom 24h Clock SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/><text x="8" y="13.5" fontSize="4.5" fontWeight="bold" fill="currentColor" stroke="none">24h</text></svg>
            </div>
            <div className="about-stat-text-box">
              <h4>24 Hours</h4>
              <p>Electronics Delivery <br />Promise</p>
            </div>
          </div>
          <div className="about-stat-card">
            <div className="about-stat-icon-box">
              <Grid size={22} />
            </div>
            <div className="about-stat-text-box">
              <h4>Multiple</h4>
              <p>Service Categories <br />In One Platform</p>
            </div>
          </div>
          <div className="about-stat-card">
            <div className="about-stat-icon-box">
              <Users size={22} />
            </div>
            <div className="about-stat-text-box">
              <h4>Growing</h4>
              <p>Across 500+ Villages <br />And Counting</p>
            </div>
          </div>
        </div>

        {/* 4-Column Layout */}
        <div className="about-main-layout">
          {/* Column 1: Left Text content */}
          <div className="about-left-text-col">
            <span className="subheading-small">EVERYTHING YOU NEED, IN ONE PLACE</span>
            <h2 className="about-col-title">One Platform. <br />Many Solutions.</h2>
            <p className="about-col-para">
              KSMCM Industries brings together essential products and services that make life simpler, healthier and better for rural families and communities.
            </p>
            <ul className="about-checkmark-list">
              <li>
                <div className="checkmark-circle-icon"><Check size={14} /></div>
                <span>Wide range of quality products</span>
              </li>
              <li>
                <div className="checkmark-circle-icon"><Check size={14} /></div>
                <span>Expert consultations from anywhere</span>
              </li>
              <li>
                <div className="checkmark-circle-icon"><Check size={14} /></div>
                <span>Affordable pricing with credit options</span>
              </li>
              <li>
                <div className="checkmark-circle-icon"><Check size={14} /></div>
                <span>Local support you can always rely on</span>
              </li>
            </ul>
          </div>

          {/* Column 2: Middle App Mockups */}
          <div className="about-middle-app-col">
            <div className="about-app-mockup-wrapper">
              <img src={appMockup} className="about-app-mockup-img" alt="KSMCM Mobile App Interface" />
            </div>
            <div className="about-available-now-block">
              <span className="available-now-title">AVAILABLE NOW</span>
              <div className="app-download-badges-row">
                <a href="#" className="download-badge-btn" onClick={(e) => { e.preventDefault(); alert('Google Play Store Download starting...'); }}>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M3,5.277L13.541,12L3,18.723V5.277 M17.067,9.754l-2.618,1.662L3.926,4.686L17.067,9.754 M17.067,14.246L3.926,19.314 l10.523-6.73L17.067,14.246 M18.847,12.585L17.77,12l1.077-.585c0.551-.3,0.732-.962,0.432-1.513c-.3-.551-.962-.732-1.513-.432l-1.077.585 L14.73,8.718l2.618-1.662c0.474-.301,0.612-.924,0.311-1.398s-.924-.612-1.398-.311L3.72,11.08c-0.655,0.416-0.785,1.272-.29,1.86 l11.83,7.563c0.474,0.301,1.097,0.163,1.398-.311c0.301-.474,0.163-1.097-.311-1.398l-2.618-1.662l1.959-1.337l1.077.585 c0.551,0.3,1.213,0.119,1.513-.432C19.579,13.547,19.398,12.885,18.847,12.585z"/></svg>
                  <div>
                    <span className="dl-subtext">GET IT ON</span>
                    <span className="dl-title">Google Play</span>
                  </div>
                </a>
                <a href="#" className="download-badge-btn" onClick={(e) => { e.preventDefault(); alert('Apple App Store Download starting...'); }}>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,22C14.32,22.05 13.89,21.23 12.37,21.23C10.84,21.23 10.37,21.97 9.09,22.05C7.79,22.13 6.8,20.79 5.96,19.5C4.26,17 2.97,12.4 4.72,9.37C5.59,7.87 7.13,6.92 8.82,6.9C10.1,6.87 11.3,7.76 12.08,7.76C12.86,7.76 14.32,6.67 15.89,6.83C16.55,6.86 18.4,7.1 19.58,8.83C19.49,8.89 17.35,10.15 17.37,12.75C17.4,15.86 20.03,16.9 20.06,16.93C20.04,16.98 19.63,18.4 18.71,19.5M15.97,4.17C16.63,3.37 17.07,2.28 16.95,1C15.85,1.04 14.51,1.73 13.73,2.64C13.07,3.41 12.49,4.52 12.64,5.78C13.87,5.87 15.12,5.17 15.97,4.17Z"/></svg>
                  <div>
                    <span className="dl-subtext">Download on the</span>
                    <span className="dl-title">App Store</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Safe. Secure. Reliable. Green Card */}
          <div className="about-security-card-col">
            <div className="about-security-badge-card">
              <div className="about-security-title">
                <ShieldCheck size={20} />
                Safe. Secure. Reliable.
              </div>
              <p className="about-security-desc">
                Your security is our priority. We use advanced technology to protect your data and ensure safe transactions.
              </p>
              <ul className="about-security-points">
                <li>
                  <div className="about-sec-dot"><Check size={10} /></div>
                  <div>
                    <strong>Secure Payments</strong>
                    <span>100% safe & encrypted</span>
                  </div>
                </li>
                <li>
                  <div className="about-sec-dot"><Check size={10} /></div>
                  <div>
                    <strong>Trusted Partners</strong>
                    <span>Verified & background checked</span>
                  </div>
                </li>
                <li>
                  <div className="about-sec-dot"><Check size={10} /></div>
                  <div>
                    <strong>Privacy Protection</strong>
                    <span>Your data is always safe</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 4: Far-Right Family Photo with overlay badge and rings */}
          <div className="about-family-photo-col">
            <div className="about-family-image-box">
              <img src={familyPhone} className="about-family-img" alt="Happy Indian Rural Family" />
              
              {/* Floating Shield Check badge overlay */}
              <div className="floating-check-badge-wrapper">
                <div className="floating-check-circle">
                  <ShieldCheck size={20} />
                </div>
                <div className="floating-rings-deco">
                  <div className="ring ring-1"></div>
                  <div className="ring ring-2"></div>
                  <div className="ring ring-3"></div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
