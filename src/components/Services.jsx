import { ShoppingCart, Laptop, Stethoscope, Briefcase, CreditCard, ChevronRight } from 'lucide-react';

import familyPhone from '../assets/images/F.png';
import truckBg from '../assets/images/2.png';
import womanPhone from '../assets/images/4.png';
import appMockup from '../assets/images/Q.png';

export default function Services({ onNavClick }) {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Our Services At A Glance</span>
          <h2 className="section-title">Bringing Crucial Solutions <span>to the Doorstep</span></h2>
          <p className="section-desc">
            We cater to diverse needs in rural landscapes, bridging modern convenience with rural simplicity.
          </p>
        </div>

        <div className="services-grid">
          <div className="service-card sc-smartmart">
            <div className="service-icon-wrapper"><ShoppingCart size={24} /></div>
            <h3>Smart Mart</h3>
            <p>Groceries & daily essentials delivered within 12 hours straight to your house.</p>
            <a href="#availability" onClick={(e) => onNavClick('availability', e)} className="service-action-btn">
              Shop Now <ChevronRight size={16} />
            </a>
            <img src={familyPhone} className="service-thumb" alt="Smart Mart thumb" />
          </div>

          <div className="service-card sc-electronics">
            <div className="service-icon-wrapper"><Laptop size={24} /></div>
            <h3>Electronics</h3>
            <p>Utilities, laptops, devices & smart appliances delivered in 24 hours.</p>
            <a href="#availability" onClick={(e) => onNavClick('availability', e)} className="service-action-btn">
              Explore <ChevronRight size={16} />
            </a>
            <img src={truckBg} className="service-thumb" alt="Electronics thumb" />
          </div>

          <div className="service-card sc-healthcare">
            <div className="service-icon-wrapper"><Stethoscope size={24} /></div>
            <h3>Healthcare</h3>
            <p>Online doctor consultation & digital health checks at your fingertips.</p>
            <a href="#availability" onClick={(e) => onNavClick('availability', e)} className="service-action-btn">
              Consult Now <ChevronRight size={16} />
            </a>
            <img src={womanPhone} className="service-thumb" alt="Healthcare thumb" />
          </div>

          <div className="service-card sc-legal">
            <div className="service-icon-wrapper"><Briefcase size={24} /></div>
            <h3>Legal Services</h3>
            <p>Expert online legal advice, document drafting, and general guidance.</p>
            <a href="#availability" onClick={(e) => onNavClick('availability', e)} className="service-action-btn">
              Get Help <ChevronRight size={16} />
            </a>
            <img src={familyPhone} className="service-thumb" alt="Legal Services thumb" />
          </div>

          <div className="service-card sc-credit">
            <div className="service-icon-wrapper"><CreditCard size={24} /></div>
            <h3>Credit Facility</h3>
            <p>Buy now, pay later with easy monthly credit tailored for village micro-purchases.</p>
            <a href="#availability" onClick={(e) => onNavClick('availability', e)} className="service-action-btn">
              Explore <ChevronRight size={16} />
            </a>
            <img src={appMockup} className="service-thumb" alt="Credit thumb" />
          </div>
        </div>
      </div>
    </section>
  );
}
