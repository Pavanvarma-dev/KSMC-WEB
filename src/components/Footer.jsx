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

  const handleLinkClick = (section, e) => {
    if (onNavClick) {
      onNavClick(section, e);
    }
  };

  return (
    <footer id="contact" className="bg-brand-dark text-white py-16 mt-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">

          {/* Brand Col */}
          <div className="lg:col-span-3 space-y-4">
            <div className="flex items-center gap-3">
              <img src={logoImg} className="h-20 w-auto" alt="KSMCM Logo" />
              <div>
                <span className="block text-lg font-bold text-white tracking-wide">KSMCM</span>
                <span className="block text-[10px] font-semibold tracking-wider text-emerald-400 uppercase">INDUSTRIES</span>
              </div>
            </div>
            <p className="text-sm text-white/70 max-w-sm leading-relaxed">
              Leading rural commerce and services ecosystem. Connecting rural households to world-class opportunities.
            </p>
          </div>

          {/* Company Col */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-emerald-400">Company</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="#about" onClick={(e) => handleLinkClick('about', e)} className="hover:text-emerald-300 transition-colors block">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleLinkClick('services', e)} className="hover:text-emerald-300 transition-colors block">
                  Services
                </a>
              </li>
              <li>
                <a href="#partners" onClick={(e) => handleLinkClick('partners', e)} className="hover:text-emerald-300 transition-colors block">
                  Partners
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Col */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-emerald-400">Legal</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); alert('Privacy policy is coming soon...'); }} className="hover:text-emerald-300 transition-colors block">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); alert('Terms of service is coming soon...'); }} className="hover:text-emerald-300 transition-colors block">
                  Terms &amp; Services
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); alert('Terms of use is coming soon...'); }} className="hover:text-emerald-300 transition-colors block">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); alert('Refund policy is coming soon...'); }} className="hover:text-emerald-300 transition-colors block">
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-emerald-400">Reach us</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-0.5 text-emerald-400 shrink-0" />
                <span className="hover:text-white transition-colors">+91 9876543210</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-0.5 text-emerald-400 shrink-0" />
                <span className="hover:text-white transition-colors break-all">ksmcm.mart@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-emerald-400 shrink-0" />
                <span className="hover:text-white transition-colors">Vizag, Andhra Pradesh, India</span>
              </li>
            </ul>
          </div>

          {/* Newsletter Col */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-emerald-400">Join Our Newsletter</h4>
            <div className="space-y-3 text-xs text-white/70">
              <p className="leading-relaxed">Stay updated with our latest features, expansion plans, and wholesale price drops.</p>
              <form className="flex flex-col sm:flex-row gap-2 mt-3" onSubmit={handleFooterSubscribe}>
                <input
                  type="email"
                  className="w-full px-3 py-2 rounded bg-white/10 text-white border border-white/20 placeholder-white/50 focus:outline-none focus:border-emerald-400 transition-colors text-xs"
                  placeholder="Your email address..."
                  value={footerEmail}
                  onChange={(e) => setFooterEmail(e.target.value)}
                />
                <button type="submit" className="px-4 py-2 font-semibold rounded bg-brand-green hover:bg-brand-green/80 text-white transition-colors whitespace-nowrap text-xs">
                  Subscribe
                </button>
              </form>
              {footerSubscribed && (
                <div className="text-emerald-400 font-semibold mt-1">✓ Subscribed successfully!</div>
              )}
              <div className="text-[10px] opacity-50 leading-tight">* We will send you weekly updates for your better tool management.</div>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/50 text-center sm:text-left">
          <div>© {new Date().getFullYear()} KSMCM Industries. All rights reserved.</div>
          <div className="flex items-center gap-3 flex-wrap justify-center">
            <a href="#" className="hover:text-emerald-400 transition-colors">Techlabz Keybox</a>
            <span>|</span>
            <a href="#" className="hover:text-emerald-400 transition-colors">Downloads</a>
            <span>|</span>
            <a href="#" className="hover:text-emerald-400 transition-colors">Forum</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
