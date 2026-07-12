import { Briefcase, Heart, Smartphone, Users, TrendingUp, ChevronRight, User, BookOpen, Play } from 'lucide-react';
import womanPhone from '../assets/images/4.png';
import familyPhone from '../assets/images/F.png';
import truckBg from '../assets/images/2.png';
import logoImg from '../assets/images/KSMCM LOGO.png';

export default function Impact({ onNavClick, onWatchVideoClick }) {
  return (
    <section id="impact" className="impact-section">
      <div className="container impact-three-column-grid">
        
        {/* Column 1: Left Text, CTA and Image collage */}
        <div className="impact-left-collage-col">
          <span className="section-label-small">CREATING REAL IMPACT</span>
          <h2 className="impact-col-title">Empowering Villages. <br />Transforming Lives.</h2>
          <p className="impact-col-para">
            We are more than a platform - we are a movement dedicated to building self-reliant villages through technology, trust and opportunities.
          </p>
          
          <button className="impact-action-pill-btn" onClick={onWatchVideoClick}>
            Our Impact in Action 
            <div className="impact-play-dot">
              <Play fill="currentColor" size={10} style={{marginLeft: '1px'}} />
            </div>
          </button>

          {/* Image Collage container */}
          <div className="impact-collage-wrapper">
            <div className="main-landscape-img-box">
              <img src={womanPhone} alt="Empowering Villages collage showing rural activities and smartphone access" />
            </div>
          </div>
        </div>

        {/* Column 2: Middle Timeline */}
        <div className="impact-middle-timeline-col">
          <div className="timeline-vertical-line"></div>
          
          <div className="timeline-node-item">
            <div className="timeline-node-icon bg-green-timeline">
              <User size={18} />
            </div>
            <div className="timeline-node-text">
              <h4>Employment Generation</h4>
              <p>Creating Local jobs and self-employment opportunities in rural areas.</p>
            </div>
          </div>

          <div className="timeline-node-item">
            <div className="timeline-node-icon bg-green-timeline">
              <Heart size={18} />
            </div>
            <div className="timeline-node-text">
              <h4>Health Access</h4>
              <p>Bringing quality healthcare and consultations closer to every village.</p>
            </div>
          </div>

          <div className="timeline-node-item">
            <div className="timeline-node-icon bg-green-timeline">
              <Smartphone size={18} />
            </div>
            <div className="timeline-node-text">
              <h4>Digital Inclusion</h4>
              <p>Empowering communities with digital Services and access.</p>
            </div>
          </div>

          <div className="timeline-node-item">
            <div className="timeline-node-icon bg-green-timeline">
              <Users size={18} />
            </div>
            <div className="timeline-node-text">
              <h4>Women Empowerment</h4>
              <p>Supporting women entrepreneurs and building financial independence.</p>
            </div>
          </div>

          <div className="timeline-node-item">
            <div className="timeline-node-icon bg-green-timeline">
              <TrendingUp size={18} />
            </div>
            <div className="timeline-node-text">
              <h4>Community Growth</h4>
              <p>Strengthening rural communities for a better tomorrow.</p>
            </div>
          </div>
        </div>

        {/* Column 3: Right Stack of Statistics Cards */}
        <div className="impact-right-stats-col">
          <div className="impact-stats-card-vertical">
            
            <div className="stat-card-item">
              <div className="stat-card-icon-circle"><Users size={20} /></div>
              <div className="stat-card-text">
                <h3>5,000+</h3>
                <p>Women Empowered</p>
              </div>
            </div>

            <div className="stat-card-item">
              <div className="stat-card-icon-circle"><Briefcase size={20} /></div>
              <div className="stat-card-text">
                <h3>1,500+</h3>
                <p>Local Jobs Created</p>
              </div>
            </div>

            <div className="stat-card-item">
              <div className="stat-card-icon-circle"><User size={20} /></div>
              <div className="stat-card-text">
                <h3>200+</h3>
                <p>Women Entrepreneurs</p>
              </div>
            </div>

            <div className="stat-card-item">
              <div className="stat-card-icon-circle"><BookOpen size={20} /></div>
              <div className="stat-card-text">
                <h3>300+</h3>
                <p>Digital Literacy Programs</p>
              </div>
            </div>

            <a href="#services" onClick={(e) => onNavClick('services', e)} className="impact-view-more-link">
              View More Impact <ChevronRight size={16} />
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}
