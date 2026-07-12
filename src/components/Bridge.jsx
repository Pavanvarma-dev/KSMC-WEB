import { MessageCircle, Home, Cpu, ArrowUpCircle, Play } from 'lucide-react';

export default function Bridge({ onWatchVideoClick }) {
  return (
    <section className="bridge-section">
      <div className="container bridge-row-layout">
        
        {/* Left: Speech Bubble */}
        <div className="bridge-left-quote-col">
          <div className="quote-icon-container-vert">
            <span className="quote-mark-large green-quote">“</span>
            <h3>Bridging the gap between villages and opportunities.</h3>
            <p>
              We are not just a platform, We are a movement towards a digitally empowered rural India.
            </p>
            <span className="quote-mark-large green-quote quote-right">”</span>
          </div>
        </div>

        {/* Middle: 3 focal point columns with vertical borders */}
        <div className="bridge-middle-cards-col">
          <div className="bridge-divider-card">
            <div className="divider-icon-box"><Home size={22} /></div>
            <h4>Rural Focused</h4>
            <p>Built for Villages and Mandals with deep understanding of rural needs.</p>
          </div>
          <div className="bridge-divider-card">
            <div className="divider-icon-box"><Cpu size={22} /></div>
            <h4>Technology Driven</h4>
            <p>Using digital innovation to deliver world-class services at your doorstep.</p>
          </div>
          <div className="bridge-divider-card">
            <div className="divider-icon-box"><ArrowUpCircle size={22} /></div>
            <h4>Sustainable Growth</h4>
            <p>Creating long-term impact through responsible and sustainable practices.</p>
          </div>
        </div>

        {/* Right: Our Story Dark Green Card */}
        <div className="bridge-right-story-col">
          <div className="story-card-premium" onClick={onWatchVideoClick}>
            <div className="story-card-top-row">
              <div className="story-play-circle">
                <Play fill="white" size={16} style={{marginLeft: '2px'}} />
              </div>
              <div className="story-card-title-group">
                <h3>Our Story</h3>
                <p>Every Village has a dream. We help turn those dreams into reality.</p>
              </div>
            </div>
            <button className="story-watch-video-btn">
              Watch Video <span className="arrow-right">→</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
