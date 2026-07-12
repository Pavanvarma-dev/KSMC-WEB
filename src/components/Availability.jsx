import { useState } from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import india from "/src/assets/images/india.jpg";


export default function Availability() {
  const [pincode, setPincode] = useState('');
  const [pincodeStatus, setPincodeStatus] = useState(null);

  const handlePincodeCheck = (e) => {
    e.preventDefault();
    if (!/^\d{6}$/.test(pincode)) {
      setPincodeStatus({
        type: 'error',
        message: 'Please enter a valid 6-digit Pincode.'
      });
      return;
    }

    const firstDigit = pincode[0];
    if (firstDigit === '5' || firstDigit === '6') {
      setPincodeStatus({
        type: 'success',
        message: `✓ Currently Serving! Delivers to Andhra Pradesh / Telangana area within 12 hours.`
      });
    } else {
      setPincodeStatus({
        type: 'error',
        message: `Sorry, we do not deliver to this location yet. We are expanding rapidly!`
      });
    }
  };

  return (
    <section id="availability" className="availability-section">
      <div className="container">
        <div className="availability-card">
          <div className="availability-grid">
            <div className="pincode-checker-box">
              <span className="section-label" style={{alignSelf: 'flex-start'}}>Service Reach</span>
              <h3>Do We Deliver in Your Area?</h3>
              <p>Enter your 6-digit village/town Pincode below to check if KSMCM services are available in your location.</p>
              
              <form className="pincode-form" onSubmit={handlePincodeCheck}>
                <MapPin className="pincode-input-icon" size={20} />
                <input 
                  type="text" 
                  className="pincode-input" 
                  placeholder="Enter village name or Pincode..."
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                />
                <button type="submit" className="pincode-submit-btn">
                  Check Now <ArrowRight size={16} />
                </button>
              </form>

              {pincodeStatus && (
                <div className={`pincode-status-msg ${pincodeStatus.type === 'success' ? 'status-success' : 'status-error'}`}>
                  {pincodeStatus.message}
                </div>
              )}

              <div className="availability-serving-stats">
                <div>
                  <div className="serving-stat-value">500+</div>
                  <div className="serving-stat-lbl">Villages<br />Currently Served</div>
                </div>
                <div style={{borderLeft: '1px solid #ddd', paddingLeft: '20px'}}>
                  <div className="serving-stat-value">5</div>
                  <div className="serving-stat-lbl">States<br />Active Presence</div>
                </div>
              </div>
            </div>

            <div className="availability-right">
              <h4>Expansion in Progress</h4>
              <p>We are actively scaling up operations. If your village isn't listed, check our expansion timelines.</p>
              <button className="btn btn-outline-green" onClick={() => alert('Expansion map & timelines will be published soon!')}>
                See Expansion Plan <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
