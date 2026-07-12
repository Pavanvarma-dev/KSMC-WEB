import { Check, MapPin, ShieldCheck, Phone } from 'lucide-react';
import truckBg from '../assets/images/2.png';

export default function TrustTech() {
  return (
    <section className="trust-tech-section">
      <div className="container trust-tech-grid">
        <div className="trust-tech-left">
          <span className="section-label">Delivering Trust, Every Step</span>
          <h2>Built on Trust. Backed by Technology.</h2>
          <p className="section-desc" style={{color: '#536b5d'}}>
            Our advanced technology platform ensures real-time tracking, secure payments, and a seamless logistics network designed specifically for the unique dynamics of rural India.
          </p>
          <div className="trust-tech-scene">
            <img src={truckBg} alt="KSMCM Logistics and Delivery truck on village road" />
          </div>
          <ul className="trust-tech-bullets">
            <li>
              <div className="bullet-icon-box"><Check size={16} /></div>
              Real-time order tracking
            </li>
            <li>
              <div className="bullet-icon-box"><Check size={16} /></div>
              Secure digital payments
            </li>
            <li>
              <div className="bullet-icon-box"><Check size={16} /></div>
              24/7 customer support
            </li>
            <li>
              <div className="bullet-icon-box"><Check size={16} /></div>
              Easy returns & refunds
            </li>
          </ul>
        </div>

        <div className="trust-tech-right">
          <div className="tech-feature-card">
            <div className="tech-feature-icon-box"><MapPin /></div>
            <div className="tech-feature-info">
              <h4>Live Tracking</h4>
              <p>Track your delivery truck in real-time from our local warehouses to your home.</p>
            </div>
          </div>
          <div className="tech-feature-card">
            <div className="tech-feature-icon-box"><ShieldCheck /></div>
            <div className="tech-feature-info">
              <h4>Secure Payments</h4>
              <p>Multiple safe options: UPI, debit cards, cash on delivery, or monthly credit limits.</p>
            </div>
          </div>
          <div className="tech-feature-card">
            <div className="tech-feature-icon-box"><Phone /></div>
            <div className="tech-feature-info">
              <h4>24/7 Local Support</h4>
              <p>Our dedicated support team is fluent in local languages to solve your issues instantly.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
