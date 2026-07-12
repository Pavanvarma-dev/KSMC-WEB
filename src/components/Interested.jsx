import { ShoppingCart, ShieldCheck, Layers, Globe, Award, ArrowRight } from 'lucide-react';

export default function Interested() {
  const cards = [
    {
      icon: <ShoppingCart size={20} />,
      title: 'Best Prices',
      desc: 'Competitive wholesale prices on everyday products directly from manufacturers.',
      alertText: 'Redirecting to wholesale catalogue...'
    },
    {
      icon: <ShieldCheck size={20} />,
      title: 'Quality Assured',
      desc: '100% certified quality checked products with replacement guarantees.',
      alertText: 'Redirecting to quality norms...'
    },
    {
      icon: <Layers size={20} />,
      title: 'Hassle-free Returns',
      desc: 'Easy returns and immediate refunds within 7 days of delivery.',
      alertText: 'Redirecting to refund policy...'
    },
    {
      icon: <Globe size={20} />,
      title: 'Community First',
      desc: 'We reinvest a portion of every transaction back into local rural schools and clinics.',
      alertText: 'Redirecting to community projects...'
    },
    {
      icon: <Award size={20} />,
      title: 'Data Privacy',
      desc: 'We implement state-of-the-art encryption to keep your digital identity secure.',
      alertText: 'Redirecting to privacy policy...'
    }
  ];

  return (
    <section className="interested-section">
      <div className="container">
        <div className="section-header" style={{marginBottom: '40px'}}>
          <h3 style={{fontSize: '1.6rem', color: 'var(--primary-green-dark)'}}>You May Be Interested In</h3>
        </div>
        <div className="interested-grid">
          {cards.map((card, idx) => (
            <div className="interested-card" key={idx}>
              <div className="interested-icon-box">{card.icon}</div>
              <h4>{card.title}</h4>
              <p>{card.desc}</p>
              <a 
                href="#" 
                className="interested-link" 
                onClick={(e) => { e.preventDefault(); alert(card.alertText); }}
              >
                Learn More <ArrowRight size={12} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
