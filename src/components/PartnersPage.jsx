import { useState } from "react";
import {
  Users,
  MapPin,
  Handshake,
  Star,
  Home as HomeIcon,
  Heart,
  Cpu,
  ArrowRight,
  ShieldCheck,
  Target,
  TrendingUp,
  Share2,
  Lightbulb,
  Leaf,
  Download,
  X,
  Check,
  Upload
} from "lucide-react";

import handshakeImg from "../assets/images/partners-images/handshek.jpeg";
import indiaImg from "../assets/images/partners-images/india.jpeg";
import partnerLogosImg from "../assets/images/partners-images/partners.jpeg";

export default function PartnersPage() {
  const [partnerModalOpen, setPartnerModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [partnerName, setPartnerName] = useState("");
  const [partnerEmail, setPartnerEmail] = useState("");
  const [partnerOrg, setPartnerOrg] = useState("");
  const [partnerType, setPartnerType] = useState("Banking");
  const [partnerMessage, setPartnerMessage] = useState("");

  const ecosystemCards = [
    {
      title: "Banking & Financial Partners",
      description: "Empowering lives with financial inclusion and credit support.",
      icon: HomeIcon,
      accentBorder: "border-emerald-100",
      iconColor: "text-emerald-600 bg-emerald-50"
    },
    {
      title: "Healthcare Partners",
      description: "Delivering quality healthcare services to every village community.",
      icon: Heart,
      accentBorder: "border-blue-100",
      iconColor: "text-blue-600 bg-blue-50"
    },
    {
      title: "Technology Partners",
      description: "Delivering quality services to every village community.",
      icon: Cpu,
      accentBorder: "border-purple-100",
      iconColor: "text-purple-600 bg-purple-50"
    },
    {
      title: "NGO & Social Partners",
      description: "Delivering quality services to every village community.",
      icon: Users,
      accentBorder: "border-rose-100",
      iconColor: "text-rose-600 bg-rose-50"
    }
  ];

  const whyPartnerCards = [
    {
      title: "Wider Reach",
      description: "Access to 500+ villages and growing customer base.",
      icon: Target
    },
    {
      title: "Meaningful Impact",
      description: "Be a part of real change in rural communities.",
      icon: TrendingUp
    },
    {
      title: "Trusted Platform",
      description: "Collaborate with a transparent and reliable organization.",
      icon: ShieldCheck
    },
    {
      title: "Strong Network",
      description: "Leverage our strong ecosystem and local presence.",
      icon: Share2
    },
    {
      title: "Innovation Driven",
      description: "Work together on tech-enabled solutions.",
      icon: Lightbulb
    },
    {
      title: "Sustainable Future",
      description: "Building a self-reliant and empowered rural India.",
      icon: Leaf
    }
  ];

  const handlePartnerSubmit = (e) => {
    e.preventDefault();
    if (partnerName && partnerEmail && partnerOrg) {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setPartnerModalOpen(false);
        setPartnerName("");
        setPartnerEmail("");
        setPartnerOrg("");
        setPartnerMessage("");
      }, 3000);
    }
  };

  const handleDownloadBrochure = (e) => {
    e.preventDefault();
    alert("Partnership Brochure downloaded successfully!");
  };

  return (
    <div className="bg-[#fcfdfc] text-gray-800 pt-28">
      {/* 1. Hero Section */}
      <section className="relative py-12 lg:py-16 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column - Copy */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold tracking-[0.2em] text-brand-green uppercase inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-green animate-pulse" />
                Our Partnerships
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-dark tracking-tight leading-[1.12]">
                Stronger Together,<br />
                <span className="text-brand-green">Greater Impact.</span>
              </h1>
              <p className="text-sm sm:text-base text-gray-600 max-w-xl leading-relaxed font-sans">
                We collaborate with trusted partners who share our vision of empowering rural India. Together, we build commercial and digital bridges to transform village livelihoods.
              </p>

              {/* Check stats bullet list */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-light text-brand-green border border-emerald-100">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="text-xs font-bold text-brand-dark">Shared Vision</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-light text-brand-green border border-emerald-100">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="text-xs font-bold text-brand-dark">Trust &amp; Integrity</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-light text-brand-green border border-emerald-100">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="text-xs font-bold text-brand-dark">Stronger Community</span>
                </div>
              </div>
            </div>

            {/* Right Column - Handshake Image */}
            <div className="lg:col-span-6 relative flex justify-center">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white w-full max-w-2xl bg-white">
                <img
                  src={handshakeImg}
                  alt="Mutual partnership handshake"
                  className="w-full h-auto object-contain block"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Our Partner Ecosystem Section */}
      <section className="py-8 bg-[#fafcfa] border-y border-emerald-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-bold tracking-[0.2em] text-brand-green uppercase">
              Our Partner Ecosystem
            </span>
            <h2 className="text-3xl font-extrabold text-brand-dark">
              Collaborative Ecosystem Structure
            </h2>
            <div className="flex justify-center items-center gap-1 mt-1">
              <span className="h-0.5 w-8 bg-brand-green/30" />
              <Handshake className="h-4 w-4 text-brand-green" />
              <span className="h-0.5 w-8 bg-brand-green/30" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ecosystemCards.map((c, i) => {
              const IconComponent = c.icon;
              return (
                <div
                  key={i}
                  className={`bg-white rounded-3xl p-6 border ${c.accentBorder} shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-6`}
                >
                  <div className="space-y-4">
                    <span className={`flex h-11 w-11 items-center justify-center rounded-2xl ${c.iconColor}`}>
                      <IconComponent className="h-5.5 w-5.5" />
                    </span>
                    <h3 className="text-sm font-extrabold text-brand-dark">{c.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed font-sans">{c.description}</p>
                  </div>
                  <button
                    onClick={() => setPartnerModalOpen(true)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-green hover:underline justify-start w-fit pt-2"
                  >
                    View Partners
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Partners in Numbers Section */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative rounded-3xl bg-[#0b331c] px-6 py-8 overflow-hidden shadow-lg border border-emerald-800/20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(31,122,61,0.15),transparent_60%)]" />

            <div className="relative z-10 text-center max-w-lg mx-auto mb-8">
              <span className="text-[10px] font-bold tracking-widest text-emerald-400 uppercase">
                Partners in Numbers
              </span>
            </div>

            <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-6 text-white max-w-5xl mx-auto">
              <div className="flex items-center gap-4 justify-center">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-emerald-400 border border-white/5">
                  <Users className="h-5.5 w-5.5" />
                </span>
                <div className="leading-tight text-left">
                  <h4 className="text-2xl font-extrabold">150+</h4>
                  <p className="text-[10px] text-emerald-100/60 font-bold uppercase tracking-wider">Active Partners</p>
                </div>
              </div>

              <div className="flex items-center gap-4 justify-center">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-emerald-400 border border-white/5">
                  <MapPin className="h-5.5 w-5.5" />
                </span>
                <div className="leading-tight text-left">
                  <h4 className="text-2xl font-extrabold">500+</h4>
                  <p className="text-[10px] text-emerald-100/60 font-bold uppercase tracking-wider">Districts Covered</p>
                </div>
              </div>

              <div className="flex items-center gap-4 justify-center">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-emerald-400 border border-white/5">
                  <Handshake className="h-5.5 w-5.5" />
                </span>
                <div className="leading-tight text-left">
                  <h4 className="text-2xl font-extrabold">25+</h4>
                  <p className="text-[10px] text-emerald-100/60 font-bold uppercase tracking-wider">Strategic Alliances</p>
                </div>
              </div>

              <div className="flex items-center gap-4 justify-center">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-emerald-400 border border-white/5">
                  <Star className="h-5.5 w-5.5" />
                </span>
                <div className="leading-tight text-left">
                  <h4 className="text-2xl font-extrabold">100%</h4>
                  <p className="text-[10px] text-emerald-100/60 font-bold uppercase tracking-wider">Commitment to Impact</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Our Esteemed Partners */}
      <section className="py-2 bg-white border-b border-emerald-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mx-auto">
            <span className="text-xs font-bold tracking-[0.2em] text-brand-green uppercase">
              Our Esteemed Partners
            </span>
            <div className="flex justify-center items-center gap-1">
              <span className="h-0.5 w-8 bg-brand-green/30" />
              <Star className="h-4 w-4 text-brand-green" />
              <span className="h-0.5 w-8 bg-brand-green/30" />
            </div>
          </div>

          <div className="flex items-center justify-center bg-white rounded-3xl border border-emerald-50/60 shadow-sm max-w-4xl mx-auto overflow-hidden">
            <img
              src={partnerLogosImg}
              alt="Esteemed partners logo strip"
              className="w-full h-auto object-contain block"
            />
          </div>
        </div>
      </section>

      {/* 5. WHY PARTNER WITH KSMCM? */}
      <section className="py-5 bg-[#fafcfa]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold tracking-[0.2em] text-brand-green uppercase">
              Why Partner with KSMCM?
            </span>
            <h2 className="text-3xl font-extrabold text-brand-dark">
              A Relationship Built on Value
            </h2>
            <div className="flex justify-center items-center gap-1 mt-1">
              <span className="h-0.5 w-8 bg-brand-green/30" />
              <Users className="h-4 w-4 text-brand-green" />
              <span className="h-0.5 w-8 bg-brand-green/30" />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyPartnerCards.map((b, i) => {
              const IconComponent = b.icon;
              return (
                <div
                  key={i}
                  className="p-6 bg-white rounded-3xl border border-emerald-50 hover:shadow-lg hover:border-emerald-100 transition-all duration-300 flex gap-4"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-light text-brand-green">
                    <IconComponent className="h-5.5 w-5.5" />
                  </span>
                  <div className="space-y-1">
                    <h4 className="text-sm font-extrabold text-brand-dark">{b.title}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed font-sans">{b.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Let's Join Hands to Empower Rural India (CTA Banner) */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative rounded-3xl overflow-hidden shadow-xl border border-emerald-800/20 bg-brand-dark min-h-[380px] flex items-center">
            {/* Background image map of India */}
            <div className="absolute inset-0 z-0">
              <img
                src={indiaImg}
                alt="Rural map of India"
                className="w-full h-full object-cover opacity-25"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/95 to-brand-dark/70" />
            </div>

            <div className="relative z-10 w-full px-8 py-10 md:py-12 md:px-12 grid lg:grid-cols-12 gap-8 items-center">
              {/* Left Side */}
              <div className="lg:col-span-7 space-y-5">
                <span className="inline-flex items-center rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-[10px] md:text-xs font-semibold tracking-wider text-emerald-400 uppercase">
                  Let's Build The Future Together
                </span>
                <h2 className="text-3xl md:text-4.5xl font-extrabold text-white leading-tight font-sans">
                  Let's Join Hands to <br />
                  Empower <span className="text-emerald-400">Rural India</span>
                </h2>
                <p className="text-xs sm:text-sm text-emerald-100/70 leading-relaxed max-w-xl font-sans">
                  Become a partner and help us create lasting, self-sustainable impact in every village. Connect with our financial, digital, and logistics pipelines.
                </p>

                <div className="pt-2 flex flex-wrap gap-4 items-center">
                  <button
                    onClick={() => setPartnerModalOpen(true)}
                    className="flex items-center gap-2.5 rounded-full bg-white hover:bg-emerald-50 text-brand-green px-6 py-3.5 text-xs md:text-sm font-semibold transition duration-300"
                  >
                    Become a Partner
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-green text-white">
                      <ArrowRight className="h-3 w-3" />
                    </span>
                  </button>
                  <button
                    onClick={handleDownloadBrochure}
                    className="flex items-center gap-2 bg-transparent border border-white/20 hover:bg-white/5 text-white rounded-full px-6 py-3.5 text-xs md:text-sm font-semibold transition"
                  >
                    <Download className="h-4 w-4" />
                    Download Partnership Brochure
                  </button>
                </div>
              </div>

              {/* Right Side Bullets */}
              <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 bg-emerald-950/40 rounded-2xl border border-emerald-800/40 text-center space-y-1">
                  <span className="mx-auto flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                    ✓
                  </span>
                  <p className="text-[10px] font-bold text-white uppercase tracking-wider">Collaborate</p>
                  <p className="text-[9px] text-emerald-100/60">Share Strength</p>
                </div>
                <div className="p-4 bg-emerald-950/40 rounded-2xl border border-emerald-800/40 text-center space-y-1">
                  <span className="mx-auto flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                    ✓
                  </span>
                  <p className="text-[10px] font-bold text-white uppercase tracking-wider">Innovate</p>
                  <p className="text-[9px] text-emerald-100/60">Tech-Enabled</p>
                </div>
                <div className="p-4 bg-emerald-950/40 rounded-2xl border border-emerald-800/40 text-center space-y-1">
                  <span className="mx-auto flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                    ✓
                  </span>
                  <p className="text-[10px] font-bold text-white uppercase tracking-wider">Impact</p>
                  <p className="text-[9px] text-emerald-100/60">Village Lives</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Become a Partner Modal */}
      {partnerModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in">
          <div className="relative w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl border border-emerald-100 flex flex-col justify-between">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-emerald-50 bg-[#fafcfa]">
              <div>
                <p className="text-[10px] font-bold text-brand-green uppercase tracking-wider font-sans">Partnership Form</p>
                <h3 className="text-sm font-extrabold text-brand-dark font-sans">Become a Partner</h3>
              </div>
              <button
                onClick={() => setPartnerModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full p-1.5 transition"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Form */}
            {formSubmitted ? (
              <div className="p-8 text-center space-y-4">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-light text-brand-green">
                  <Check className="h-7 w-7" />
                </div>
                <h4 className="text-lg font-bold text-brand-dark font-sans">Application Received!</h4>
                <p className="text-xs text-gray-500 max-w-xs mx-auto leading-relaxed font-sans">
                  Thank you for your interest in partnering with KSMCM Industries. A partnership coordinator will review your request and get back to you within 3 business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handlePartnerSubmit} className="p-6 space-y-4 text-xs">
                {/* Name */}
                <div className="space-y-1 flex flex-col">
                  <label className="font-bold text-gray-600">Contact Person Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl border border-emerald-50 bg-white placeholder-gray-400 focus:outline-none focus:border-brand-green transition"
                    placeholder="Enter name..."
                    value={partnerName}
                    onChange={(e) => setPartnerName(e.target.value)}
                  />
                </div>

                {/* Email & Org */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1 flex flex-col">
                    <label className="font-bold text-gray-600">Email Address *</label>
                    <input
                      type="email"
                      required
                      className="w-full px-3.5 py-2.5 rounded-xl border border-emerald-50 bg-white placeholder-gray-400 focus:outline-none focus:border-brand-green transition"
                      placeholder="name@email.com"
                      value={partnerEmail}
                      onChange={(e) => setPartnerEmail(e.target.value)}
                    />
                  </div>
                  <div className="space-y-1 flex flex-col">
                    <label className="font-bold text-gray-600">Organization Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-3.5 py-2.5 rounded-xl border border-emerald-50 bg-white placeholder-gray-400 focus:outline-none focus:border-brand-green transition"
                      placeholder="Organization Name..."
                      value={partnerOrg}
                      onChange={(e) => setPartnerOrg(e.target.value)}
                    />
                  </div>
                </div>

                {/* Partner Type */}
                <div className="space-y-1 flex flex-col">
                  <label className="font-bold text-gray-600">Partnership Category *</label>
                  <select
                    className="w-full px-3.5 py-2.5 rounded-xl border border-emerald-50 bg-white focus:outline-none focus:border-brand-green cursor-pointer text-gray-600 font-medium"
                    value={partnerType}
                    onChange={(e) => setPartnerType(e.target.value)}
                  >
                    <option value="Banking">Banking &amp; Financial</option>
                    <option value="Healthcare">Healthcare Service</option>
                    <option value="Technology">Technology Vendor</option>
                    <option value="NGO">NGO or Social Venture</option>
                    <option value="Logistics">Logistics Provider</option>
                  </select>
                </div>

                {/* Cover Letter */}
                <div className="space-y-1 flex flex-col">
                  <label className="font-bold text-gray-600">Brief Message / Proposal Outline</label>
                  <textarea
                    className="w-full h-20 px-3.5 py-2.5 rounded-xl border border-emerald-50 bg-white placeholder-gray-400 focus:outline-none focus:border-brand-green transition resize-none"
                    placeholder="Briefly describe how we can collaborate..."
                    value={partnerMessage}
                    onChange={(e) => setPartnerMessage(e.target.value)}
                  />
                </div>

                {/* Footer buttons */}
                <div className="pt-4 flex justify-end gap-3 border-t border-emerald-50/50">
                  <button
                    type="button"
                    onClick={() => setPartnerModalOpen(false)}
                    className="px-4 py-2 border border-emerald-100 rounded-xl text-gray-500 hover:bg-gray-50 font-semibold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 bg-brand-green hover:bg-brand-green/80 text-white rounded-xl font-semibold shadow-md"
                  >
                    Send Proposal
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
