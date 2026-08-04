import { useState } from "react";
import {
  ShieldCheck,
  Award,
  Users,
  Handshake,
  Star,
  Target,
  ArrowRight,
  Eye,
  Heart,
  TrendingUp,
  Scale,
  Lightbulb,
  Play,
  X,
  Check,
  ChevronDown
} from "lucide-react";

import familyImg from "../assets/images/aboutUs-images/women-with-child.jpeg";
import family from "../assets/images/aboutUs-images/family.jpeg"
import oldCarImg from "../assets/images/aboutUs-images/old-car.jpeg";
import shopImg from "../assets/images/aboutUs-images/shop.jpeg";
import droneImg from "../assets/images/aboutUs-images/drone.jpeg";
import manImg from "../assets/images/aboutUs-images/man.jpeg";
import vanImg from "../assets/images/aboutUs-images/ksmcm-van.jpeg";
import doctorImg from "../assets/images/aboutUs-images/doctor.jpeg";
import womenWorkingImg from "../assets/images/aboutUs-images/women-working.jpeg";

export default function AboutUs() {
  const [videoOpen, setVideoOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const values = [
    {
      title: "Trust",
      description: "We build every solution on trust and total transparency.",
      icon: ShieldCheck,
    },
    {
      title: "Innovation",
      description: "We use technology and creativity to solve real-world problems.",
      icon: Lightbulb,
    },
    {
      title: "Commitment",
      description: "We are committed to every family, every partner and every village.",
      icon: Heart,
    },
    {
      title: "Empowerment",
      description: "We empower people, especially women, to create a better future.",
      icon: Users,
    },
    {
      title: "Integrity",
      description: "We conduct business with honesty, fairness, and responsibility.",
      icon: Scale,
    },
    {
      title: "Impact",
      description: "We measure success by the positive change we create.",
      icon: TrendingUp,
    },
  ];

  return (
    <div className="bg-[#fcfdfc] text-gray-800 pt-28">
      {/* 1. Hero Section */}
      <section className="relative lg:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column - Text content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-light text-brand-green text-xs font-semibold uppercase tracking-wider">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-green animate-pulse" />
                About KSMCM Industries
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-dark tracking-tight leading-[1.15]">
                Building a Stronger <br className="hidden sm:inline" />
                <span className="text-brand-green">Rural India</span> Together
              </h1>

              <p className="text-base sm:text-lg text-gray-600 max-w-2xl leading-relaxed">
                KSMCM Industries is more than a company - it is a mission to bring the power of technology, trust, and services to every village and every household.
              </p>

              {/* Stats Grid */}
              <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="p-5 bg-white rounded-2xl border border-emerald-50 shadow-sm space-y-2 hover:shadow-md transition-all duration-300">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-light text-brand-green">
                    <Users className="h-5 w-5" />
                  </div>
                  <h3 className="text-3xl font-extrabold text-brand-dark">500+</h3>
                  <p className="text-xs font-bold text-gray-700">Villages Connected</p>
                  <p className="text-[10px] text-gray-400">At Mandals, Panchayats level</p>
                </div>

                <div className="p-5 bg-white rounded-2xl border border-emerald-50 shadow-sm space-y-2 hover:shadow-md transition-all duration-300">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-light text-brand-green">
                    <Award className="h-5 w-5" />
                  </div>
                  <h3 className="text-3xl font-extrabold text-brand-dark">50+</h3>
                  <p className="text-xs font-bold text-gray-700">Services Offered</p>
                  <p className="text-[10px] text-gray-400">Across diverse sectors</p>
                </div>

                <div className="p-5 bg-white rounded-2xl border border-emerald-50 shadow-sm space-y-2 hover:shadow-md transition-all duration-300">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-light text-brand-green">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <h3 className="text-3xl font-extrabold text-brand-dark">10,000+</h3>
                  <p className="text-xs font-bold text-gray-700">Lives Impacted</p>
                  <p className="text-[10px] text-gray-400">And counting</p>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] sm:aspect-[16/11]">
                <img
                  src={familyImg}
                  alt="Rural India Family"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 h-24 w-24 bg-brand-light rounded-full -z-10 opacity-60 blur-lg" />
              <div className="absolute -bottom-6 -left-6 h-36 w-36 bg-brand-green/10 rounded-full -z-10 opacity-70 blur-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Our Story Section */}
      <section className=" bg-white border-y border-emerald-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold tracking-[0.2em] text-brand-green uppercase">
              Our Story
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark">
              A Vision Born in the Heart of Villages
            </h2>
            <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
              We witnessed the challenges rural communities face every day: limited access to quality products, essential services, healthcare, legal support and financial solutions. KSMCM Industries was founded to bridge this gap and create an ecosystem that empowers rural households, providing everything they need to live better, grow stronger and dream bigger.
            </p>
          </div>

          {/* Chronology Cards */}
          <div className="mt-16 grid sm:grid-cols-3 gap-8">
            {/* Card 1 - Then */}
            <div className="group bg-[#fafcfa] rounded-3xl p-6 border border-emerald-50/70 shadow-sm hover:shadow-xl hover:border-emerald-100 transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-gray-100">
                  <img
                    src={oldCarImg}
                    alt="Rural Challenges"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 bg-black/60 backdrop-blur-sm text-white text-[10px] font-bold tracking-widest uppercase rounded-full">
                    Then
                  </span>
                </div>
                <div>
                  <h4 className="text-base font-bold text-brand-dark">Challenges &amp; Obstacles</h4>
                  <p className="mt-1 text-xs text-gray-500 leading-relaxed">
                    Faced with remote geographies, rural families faced severe isolation from high-quality commerce and critical resources.
                  </p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-emerald-50 text-[11px] font-medium text-gray-400">
                Limited Access &amp; Development Gap
              </div>
            </div>

            {/* Card 2 - Now */}
            <div className="group bg-brand-light/30 rounded-3xl p-6 border border-brand-green/10 shadow-sm hover:shadow-xl hover:border-brand-green/20 transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-gray-100">
                  <img
                    src={shopImg}
                    alt="Digital Village Kiosk"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 bg-brand-green text-white text-[10px] font-bold tracking-widest uppercase rounded-full shadow-md">
                    Now
                  </span>
                </div>
                <div>
                  <h4 className="text-base font-bold text-brand-dark">Connecting &amp; Access</h4>
                  <p className="mt-1 text-xs text-gray-500 leading-relaxed">
                    Through KSMCM Centers, digital technology, and logistics network, we have brought 10,000+ products and major services right to their doors.
                  </p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-brand-green/10 text-[11px] font-semibold text-brand-green">
                Connecting Villages with Opportunities
              </div>
            </div>

            {/* Card 3 - To Be */}
            <div className="group bg-[#fafcfa] rounded-3xl p-6 border border-emerald-50/70 shadow-sm hover:shadow-xl hover:border-emerald-100 transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-gray-100">
                  <img
                    src={droneImg}
                    alt="Future Rural Tech"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 bg-brand-orange text-white text-[10px] font-bold tracking-widest uppercase rounded-full shadow-md">
                    To be...
                  </span>
                </div>
                <div>
                  <h4 className="text-base font-bold text-brand-dark">Empowered &amp; Dynamic</h4>
                  <p className="mt-1 text-xs text-gray-500 leading-relaxed">
                    Deploying hyper-modern supply chains, autonomous drone delivery, and comprehensive digital integration for a truly self-reliant rural India.
                  </p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-emerald-50 text-[11px] font-medium text-gray-400">
                Empowered Villages, Dynamic India
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Joining Forces Banner */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative rounded-3xl bg-[#073c1e] overflow-hidden shadow-xl border border-emerald-800/20">
            <div className="grid lg:grid-cols-12 gap-0 items-center">
              {/* Left side text content */}
              <div className="lg:col-span-6 p-8 md:p-12 space-y-6">
                <span className="inline-flex items-center rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-[10px] md:text-xs font-semibold tracking-wider text-emerald-400 uppercase">
                  Together for a Better Tomorrow
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight font-sans">
                  Let's Build Stronger <br />
                  Villages, <span className="text-[#2bb673]">Together.</span>
                </h2>
                <p className="text-sm text-emerald-100/70 leading-relaxed font-sans max-w-xl">
                  Join hands with us to empower rural India through Commerce, technology, and opportunity for All.
                </p>

                <div className="pt-2 flex flex-wrap gap-4">
                  <button className="flex items-center gap-3 rounded-full bg-[#0d4424] hover:bg-[#073017] text-white border border-[#165830] px-6 py-3.5 text-xs md:text-sm font-semibold transition duration-300">
                    Partner With Us
                    <span className="flex h-5 w-5 items-center justify-center rounded-full border border-white/20 text-white/90">
                      <ArrowRight className="h-3 w-3" />
                    </span>
                  </button>
                  <button className="flex items-center gap-3 rounded-full bg-transparent hover:bg-white/5 text-white border border-white/20 px-6 py-3.5 text-xs md:text-sm font-semibold transition duration-300">
                    Join Our Mission
                    <span className="flex h-5 w-5 items-center justify-center rounded-full border border-white/20 text-white/90">
                      <ArrowRight className="h-3 w-3" />
                    </span>
                  </button>
                </div>
              </div>

              {/* Right side family outline image */}
              <div className="lg:col-span-6 h-64 lg:h-full relative overflow-hidden self-stretch min-h-[220px] lg:min-h-0 p-2 flex items-center justify-center lg:justify-center">
                <img
                  src={family}
                  alt="Family Outline"
                  className="w-full h-full object-contain object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Our Mission & Our Vision */}
      <section className="py-2 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div className="relative group rounded-3xl bg-brand-dark p-8 md:p-10 text-white shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-110 transition-transform duration-500">
                <Target className="h-32 w-32" />
              </div>
              <div className="relative z-10 space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 border border-white/20">
                  <Target className="h-6 w-6 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-extrabold">Our Mission</h3>
                <p className="text-sm text-emerald-100/80 leading-relaxed font-light font-sans">
                  To make quality products and essential services accessible to every household through technology, trust, and co-creation.
                </p>
                <ul className="pt-4 space-y-2.5 text-xs text-white/80">
                  <li className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                    <span>High quality goods direct from wholesale manufacturers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                    <span>Essential medical and digital services in local mandals</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                    <span>Co-creating growth pathways for local micro-entrepreneurs</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Vision Card */}
            <div className="relative group rounded-3xl bg-brand-green p-8 md:p-10 text-white shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-110 transition-transform duration-500">
                <Eye className="h-32 w-32" />
              </div>
              <div className="relative z-10 space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 border border-white/20">
                  <Eye className="h-6 w-6 text-yellow-300" />
                </div>
                <h3 className="text-2xl font-extrabold">Our Vision</h3>
                <p className="text-sm text-emerald-50/80 leading-relaxed font-light font-sans">
                  To become India's most trusted rural commerce and services platform.
                </p>
                <ul className="pt-4 space-y-2.5 text-xs text-white/80">
                  <li className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-yellow-300 shrink-0" />
                    <span>Empower 100,000+ rural women via the entrepreneur platform</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-yellow-300 shrink-0" />
                    <span>Reach 5,000+ villages with active logistic capabilities</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-yellow-300 shrink-0" />
                    <span>Create a unified, technology-driven rural supply ecosystem</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Our Core Values Section */}
      <section className="py-10 bg-[#fafcfa] border-t border-emerald-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold tracking-[0.2em] text-brand-green uppercase">
              Our Core Values
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark">
              What We Believe In
            </h2>
            <div className="flex justify-center items-center gap-1 mt-1">
              <span className="h-0.5 w-8 bg-brand-green/30" />
              <svg className="h-4 w-4 text-brand-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              <span className="h-0.5 w-8 bg-brand-green/30" />
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {values.map((v, i) => {
              const IconComponent = v.icon;
              return (
                <div
                  key={i}
                  className="group relative bg-white rounded-3xl p-5 sm:p-6 border border-emerald-50 shadow-sm hover:shadow-xl hover:border-emerald-100 hover:-translate-y-1 transition-all duration-300 text-center"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-light text-brand-green relative mb-5 transition-transform duration-500 group-hover:rotate-6">
                    {/* SVG circular loop effect */}
                    <div className="absolute inset-0 rounded-full border border-dashed border-brand-green/30 animate-[spin_10s_linear_infinite]" />
                    <IconComponent className="h-6 w-6 relative z-10" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-brand-dark">{v.title}</h3>
                  <p className="mt-2 text-xs text-gray-500 leading-relaxed max-w-xs mx-auto">
                    {v.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Founder's Message Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left side: Quote + info */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-brand-light text-brand-green text-xs font-semibold uppercase tracking-wider">
                Founder's Message
              </span>

              <div className="relative">
                <span className="absolute -top-10 -left-6 text-7xl font-serif text-brand-green/20">“</span>
                <blockquote className="text-2xl sm:text-3xl font-extrabold text-brand-dark leading-snug relative z-10 font-sans">
                  Our dream is simple yet powerful - to ensure that no village is left behind in the journey of progress.
                </blockquote>
              </div>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-xl">
                KSMCM Industries will continue to innovate, expand and serve with honesty and dedication. Together, we can build stronger communities and a brighter future for generations to come.
              </p>

              <div className="pt-4 flex items-center gap-4">
                {/* Simulated cursive signature */}
                <div className="font-serif italic text-2xl font-bold text-brand-dark tracking-wide border-b border-brand-green/20 pb-1">
                  Gopichand
                </div>
                <div className="text-xs">
                  <p className="font-bold text-brand-dark uppercase">Gopichand</p>
                  <p className="text-gray-400">Founder &amp; Managing Director</p>
                </div>
              </div>
            </div>

            {/* Right side: Founder image and mini video player */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-12 gap-6 items-start">
              {/* Founder Image */}
              <div className="sm:col-span-7 relative">
                <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[3/4]">
                  <img
                    src={manImg}
                    alt="Gopichand, Founder of KSMCM"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 bg-white p-3.5 rounded-2xl shadow-lg border border-emerald-50 max-w-[150px] leading-tight space-y-1">
                  <span className="text-xl font-serif text-brand-green">“</span>
                  <p className="text-xs font-bold text-brand-dark">When Village grow, India grows.</p>
                </div>
              </div>

              {/* Watch Video Column */}
              <div className="sm:col-span-5 flex flex-col gap-6 sm:mt-6">
                {/* Team Avatars Group */}
                <div className="p-4 bg-brand-light/35 rounded-2xl border border-brand-green/5 space-y-2">
                  <p className="text-[10px] font-bold text-brand-dark uppercase tracking-wider">Meet Our Team</p>
                  <div className="flex -space-x-2 overflow-hidden">
                    <span className="inline-block h-7 w-7 rounded-full bg-emerald-700 text-white font-bold text-[10px] flex items-center justify-center border-2 border-white">G</span>
                    <span className="inline-block h-7 w-7 rounded-full bg-orange-500 text-white font-bold text-[10px] flex items-center justify-center border-2 border-white">K</span>
                    <span className="inline-block h-7 w-7 rounded-full bg-blue-600 text-white font-bold text-[10px] flex items-center justify-center border-2 border-white">A</span>
                    <span className="inline-block h-7 w-7 rounded-full bg-purple-600 text-white font-bold text-[10px] flex items-center justify-center border-2 border-white">R</span>
                  </div>
                  <p className="text-[9px] text-gray-500">100+ members working locally in Mandals.</p>
                </div>

                {/* Video Play Widget */}
                <button
                  onClick={() => setVideoOpen(true)}
                  className="flex flex-col items-center justify-center text-center p-5 bg-white rounded-2xl border border-emerald-50 shadow-sm hover:shadow-md hover:border-emerald-100 transition-all duration-300 group w-full"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-green text-white group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <Play className="h-4.5 w-4.5 fill-current ml-0.5" />
                  </div>
                  <p className="mt-3 text-xs font-bold text-brand-dark">Watch Our Journey</p>
                  <p className="text-[9px] text-gray-400 mt-0.5">2:40 Min Video</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. News & Insights Section */}
      <section className="py-5 bg-[#fafcfa] border-t border-emerald-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div className="space-y-2">
              <span className="text-xs font-bold tracking-[0.2em] text-brand-green uppercase">
                News &amp; Insights
              </span>
              <h2 className="text-3xl font-extrabold text-brand-dark">Stay Updated</h2>
            </div>
            <button className="flex items-center gap-1.5 px-4 py-2 border border-brand-green/20 rounded-xl text-xs font-semibold text-brand-green bg-white hover:bg-brand-light transition duration-300">
              View All Articles
              <ChevronDown className="h-3 w-3" />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <div className="bg-white rounded-3xl border border-emerald-50 shadow-sm overflow-hidden hover:shadow-xl hover:border-emerald-100 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                  <img
                    src={vanImg}
                    alt="KSMCM Mart Expansion"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <p className="text-[10px] font-semibold text-gray-400">May 15, 2026</p>
                  <h3 className="text-base font-bold text-brand-dark leading-snug">
                    KSMCM Mart Expands to 500 New Villages
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Bringing quality products and essential services to the doorstep of rural India, making daily needs easily accessible.
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2">
                <a href="#" className="inline-flex items-center gap-1 text-xs font-semibold text-brand-green hover:gap-2 transition-all">
                  Read More <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* Article 2 */}
            <div className="bg-white rounded-3xl border border-emerald-50 shadow-sm overflow-hidden hover:shadow-xl hover:border-emerald-100 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                  <img
                    src={doctorImg}
                    alt="Tele-health consultations"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <p className="text-[10px] font-semibold text-gray-400">May 10, 2026</p>
                  <h3 className="text-base font-bold text-brand-dark leading-snug">
                    Tele-Health Services Reach 10,000 Lives
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Our primary care health initiatives bring certified doctors and specialists to remote villages via virtual consultations.
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2">
                <a href="#" className="inline-flex items-center gap-1 text-xs font-semibold text-brand-green hover:gap-2 transition-all">
                  Read More <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* Article 3 */}
            <div className="bg-white rounded-3xl border border-emerald-50 shadow-sm overflow-hidden hover:shadow-xl hover:border-emerald-100 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                  <img
                    src={womenWorkingImg}
                    alt="Women local entrepreneurs working"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <p className="text-[10px] font-semibold text-gray-400">May 02, 2026</p>
                  <h3 className="text-base font-bold text-brand-dark leading-snug">
                    Empowering Women, Empowering Villages
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    How our local women entrepreneur training program is enabling self-reliance and boosting rural household incomes.
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2">
                <a href="#" className="inline-flex items-center gap-1 text-xs font-semibold text-brand-green hover:gap-2 transition-all">
                  Read More <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Newsletter Banner (Join Our Journey) */}
      <section className=" bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative rounded-3xl bg-[#0b331c] px-6 py-10 md:py-12 md:px-12 overflow-hidden shadow-xl">
            {/* Abstract radial gradient bg */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(31,122,61,0.2),transparent_70%)]" />

            <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
              {/* Text info */}
              <div className="lg:col-span-6 space-y-3">
                <div className="flex items-center gap-2 text-emerald-400">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/10">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  <span className="text-xs font-bold tracking-widest uppercase">Join Our Journey</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white">
                  Subscribe to Our Newsletter
                </h3>
                <p className="text-xs md:text-sm text-white/70 max-w-md">
                  Receive the latest updates, expansion alerts, impact reports, and wholesale catalog updates straight to your inbox.
                </p>
              </div>

              {/* Form Input */}
              <div className="lg:col-span-6">
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/10 text-white border border-white/20 placeholder-white/50 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition text-sm"
                    placeholder="Enter your email address..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 font-semibold rounded-xl bg-brand-green hover:bg-brand-green/80 text-white transition whitespace-nowrap text-sm shadow-md"
                  >
                    Subscribe
                  </button>
                </form>
                {subscribed && (
                  <p className="text-emerald-400 font-medium text-xs mt-2 flex items-center gap-1 animate-fade-in">
                    ✓ Subscribed successfully! Thank you for joining our journey.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal Player */}
      {videoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in">
          <div className="relative w-full max-w-3xl bg-brand-dark rounded-3xl border border-emerald-50/10 overflow-hidden shadow-2xl">
            {/* Modal Title and Close */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/20">
              <span className="text-sm font-bold text-white uppercase tracking-wider font-sans">KSMCM Journey Video</span>
              <button
                onClick={() => setVideoOpen(false)}
                className="text-white/60 hover:text-white hover:bg-white/10 rounded-full p-1.5 transition"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Video Container */}
            <div className="relative aspect-video w-full bg-black flex items-center justify-center">
              {/* Playback Simulation */}
              <div className="text-center p-8 space-y-4">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-white border border-white/20 animate-pulse">
                  <Play className="h-6 w-6 fill-current ml-1" />
                </div>
                <h4 className="text-lg font-bold text-white">"Empowering Villages, Transforming Lives"</h4>
                <p className="text-xs text-white/50 max-w-sm mx-auto">
                  This video showcasing our Mandal network and rural operations is currently in production. Check back soon for the official release!
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
