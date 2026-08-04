import {
  Truck,
  CreditCard,
  Headphones,
  Users,
  Cpu,
  Home as HomeIcon,
  ShieldCheck,
  Handshake,
  Clock,
  ArrowRight,
  ShoppingBasket,
  Smartphone,
  Stethoscope,
  Scale,
  Wallet,
  Globe,
  Briefcase,
  Layers,
  ArrowUpRight,
  Check
} from "lucide-react";

import familyHeroImg from "../assets/images/service-images/family-service.jpeg";
import vegetablesImg from "../assets/images/service-images/vegetables.jpeg";
import electronicsImg from "../assets/images/service-images/electronics.jpeg";
import doctorImg from "../assets/images/service-images/doctor.jpeg";
import legalImg from "../assets/images/service-images/legal-service.jpeg";
import walletImg from "../assets/images/wallet.jpg";
import greenGroupImg from "../assets/images/service-images/greenGroup.jpeg";
import digitalServiceImg from "../assets/images/service-images/digital-service.jpeg";
import employmentImg from "../assets/images/service-images/employment.jpeg";

export default function ServicesPage() {
  const serviceCards = [
    {
      title: "Smart Mart",
      description: "Groceries & daily essentials delivered direct to home.",
      image: vegetablesImg,
      icon: ShoppingBasket,
      btnText: "Shop Now",
      themeColor: "text-emerald-600 bg-emerald-50 hover:bg-emerald-600 hover:text-white border-emerald-100",
      iconColor: "text-emerald-600 bg-emerald-50",
      accentBorder: "border-emerald-100"
    },
    {
      title: "Electronics",
      description: "Mobility, laptops, appliances & more delivered in 24 hours.",
      image: electronicsImg,
      icon: Smartphone,
      btnText: "Explore",
      themeColor: "text-purple-600 bg-purple-50 hover:bg-purple-600 hover:text-white border-purple-100",
      iconColor: "text-purple-600 bg-purple-50",
      accentBorder: "border-purple-100"
    },
    {
      title: "Health Care",
      description: "Online doctor consultation & medicine delivery at your doorstep.",
      image: doctorImg,
      icon: Stethoscope,
      btnText: "Consult Now",
      themeColor: "text-blue-600 bg-blue-50 hover:bg-blue-600 hover:text-white border-blue-100",
      iconColor: "text-blue-600 bg-blue-50",
      accentBorder: "border-blue-100"
    },
    {
      title: "Legal Services",
      description: "Expert legal advice and consultation services.",
      image: legalImg,
      icon: Scale,
      btnText: "Get Help",
      themeColor: "text-amber-700 bg-amber-50 hover:bg-amber-700 hover:text-white border-amber-100",
      iconColor: "text-amber-700 bg-amber-50",
      accentBorder: "border-amber-100"
    },
    {
      title: "Credit Facility",
      description: "Buy now pay later facility for all your shopping needs.",
      image: walletImg,
      icon: Wallet,
      btnText: "Explore",
      themeColor: "text-sky-600 bg-sky-50 hover:bg-sky-600 hover:text-white border-sky-100",
      iconColor: "text-sky-600 bg-sky-50",
      accentBorder: "border-sky-100"
    },
    {
      title: "Village Support Team",
      description: "Dedicated local team to support you with everything you need.",
      image: greenGroupImg,
      icon: Users,
      btnText: "Explore",
      themeColor: "text-rose-600 bg-rose-50 hover:bg-rose-600 hover:text-white border-rose-100",
      iconColor: "text-rose-600 bg-rose-50",
      accentBorder: "border-rose-100"
    },
    {
      title: "Digital Services",
      description: "Recharge, utility payments, PAN card, and other digital helper services.",
      image: digitalServiceImg,
      icon: Globe,
      btnText: "Explore",
      themeColor: "text-orange-600 bg-orange-50 hover:bg-orange-600 hover:text-white border-orange-100",
      iconColor: "text-orange-600 bg-orange-50",
      accentBorder: "border-orange-100"
    },
    {
      title: "Employment Opportunities",
      description: "Empower rural youth and create local livelihood options.",
      image: employmentImg,
      icon: Briefcase,
      btnText: "Explore",
      themeColor: "text-indigo-600 bg-indigo-50 hover:bg-indigo-600 hover:text-white border-indigo-100",
      iconColor: "text-indigo-600 bg-indigo-50",
      accentBorder: "border-indigo-100"
    }
  ];

  return (
    <div className="bg-[#fcfdfc] text-gray-800 pt-28">
      {/* 1. Hero Section */}
      <section className="relative py-16 lg:py-15 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left side content */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold tracking-[0.2em] text-brand-green uppercase inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
                Our Services
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-dark tracking-tight leading-[1.15]">
                One Ecosystem.<br />
                <span className="text-brand-green">Every Essential.</span>
              </h1>
              <p className="text-base sm:text-lg text-gray-600 max-w-xl leading-relaxed">
                KSMCM Industries brings together products and services that improve everyday life in villages and create opportunities for a better tomorrow.
              </p>
            </div>

            {/* Right side family image with floating badges */}
            <div className="lg:col-span-6 relative flex justify-center">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white w-full max-w-2xl bg-white">
                <img
                  src={familyHeroImg}
                  alt="Rural family happy with services"
                  className="w-full h-auto object-contain block"
                />
              </div>

              {/* Floating Badge 1 - Top Left */}
              {/* <div className="absolute -top-4 -left-4 sm:left-6 lg:-left-6 bg-white p-3 rounded-2xl shadow-xl border border-emerald-50 flex items-center gap-2 max-w-[170px] animate-bounce-slow">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-light text-brand-green shrink-0">
                  <Truck className="h-4 w-4" />
                </span>
                <div className="leading-tight">
                  <p className="text-[10px] font-bold text-brand-green uppercase tracking-wider">Fast Delivery</p>
                  <p className="text-xs font-extrabold text-brand-dark">12-24 Hours</p>
                </div>
              </div> */}

              {/* Floating Badge 2 - Bottom Left */}
              {/* <div className="absolute bottom-4 -left-4 sm:left-4 lg:-left-8 bg-white p-3 rounded-2xl shadow-xl border border-emerald-50 flex items-center gap-2 max-w-[175px]">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-orange-50 text-brand-orange shrink-0">
                  <CreditCard className="h-4 w-4" />
                </span>
                <div className="leading-tight">
                  <p className="text-[10px] font-bold text-brand-orange uppercase tracking-wider">Monthly</p>
                  <p className="text-xs font-extrabold text-brand-dark">Credit Facility</p>
                </div>
              </div> */}

              {/* Floating Badge 3 - Top Right */}
              {/* <div className="absolute top-10 -right-4 sm:right-6 lg:-right-6 bg-white p-3 rounded-2xl shadow-xl border border-emerald-50 flex items-center gap-2 max-w-[160px]">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-50 text-brand-blue shrink-0">
                  <Headphones className="h-4 w-4" />
                </span>
                <div className="leading-tight">
                  <p className="text-[10px] font-bold text-brand-blue uppercase tracking-wider">Trusted</p>
                  <p className="text-xs font-extrabold text-brand-dark">Support</p>
                </div>
              </div> */}

              {/* Floating Badge 4 - Bottom Right */}
              {/* <div className="absolute -bottom-4 -right-4 sm:right-4 lg:-right-4 bg-white p-3 rounded-2xl shadow-xl border border-emerald-50 flex items-center gap-2 max-w-[160px]">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 shrink-0">
                  <Users className="h-4 w-4" />
                </span>
                <div className="leading-tight">
                  <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider">Rural First</p>
                  <p className="text-xs font-extrabold text-brand-dark">Approach</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Features Horizontal Strip */}
      <section className="py-3 bg-[#fafcfa] border-y border-emerald-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center bg-white p-6 rounded-3xl border border-emerald-50/70 shadow-sm">
            {/* Feature 1 */}
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-light text-brand-green">
                <Cpu className="h-5 w-5" />
              </span>
              <div className="leading-tight">
                <p className="text-xs font-bold text-brand-dark">Technology</p>
                <p className="text-[10px] text-gray-500">Driven</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-light text-brand-green">
                <HomeIcon className="h-5 w-5" />
              </span>
              <div className="leading-tight">
                <p className="text-xs font-bold text-brand-dark">Village</p>
                <p className="text-[10px] text-gray-500">Focused</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-light text-brand-green">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <div className="leading-tight">
                <p className="text-xs font-bold text-brand-dark">Affordable</p>
                <p className="text-[10px] text-gray-500">For All</p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-light text-brand-green">
                <Handshake className="h-5 w-5" />
              </span>
              <div className="leading-tight">
                <p className="text-xs font-bold text-brand-dark">Trusted</p>
                <p className="text-[10px] text-gray-500">Network</p>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="flex items-center gap-3 justify-center md:justify-start col-span-2 md:col-span-1">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-light text-brand-green">
                <Clock className="h-5 w-5" />
              </span>
              <div className="leading-tight">
                <p className="text-xs font-bold text-brand-dark">Local Support</p>
                <p className="text-[10px] text-gray-500">Always</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Explore Our Services Grid */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold tracking-[0.2em] text-brand-green uppercase">
              Explore Our Services
            </span>
            <h2 className="text-3xl font-extrabold text-brand-dark">
              Complete Services Ecosystem
            </h2>
            <div className="flex justify-center items-center gap-1 mt-1">
              <span className="h-0.5 w-8 bg-brand-green/30" />
              <Layers className="h-4 w-4 text-brand-green" />
              <span className="h-0.5 w-8 bg-brand-green/30" />
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceCards.map((c, i) => {
              const IconComp = c.icon;
              return (
                <div
                  key={i}
                  className={`bg-white rounded-3xl border ${c.accentBorder} shadow-sm overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between`}
                >
                  <div className="p-6 space-y-5">
                    {/* Header: Icon + Title */}
                    <div className="flex items-center gap-3">
                      <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${c.iconColor}`}>
                        <IconComp className="h-5 w-5" />
                      </span>
                      <h3 className="text-base font-bold text-brand-dark">{c.title}</h3>
                    </div>

                    <p className="text-xs text-gray-500 leading-relaxed font-sans min-h-[32px]">
                      {c.description}
                    </p>

                    {/* Button */}
                    <div className="pt-1">
                      <button className={`inline-flex items-center gap-1.5 px-4 py-2 border rounded-full text-xs font-semibold ${c.themeColor} transition duration-300`}>
                        {c.btnText}
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Card Image */}
                  <div className="relative aspect-[16/11] bg-gray-50 border-t border-gray-100 overflow-hidden flex items-center justify-center">
                    <img
                      src={c.image}
                      alt={c.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. All Services, One Promise Banner */}
      <section className="py-5 bg-[#fafcfa] border-t border-emerald-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-emerald-50 shadow-sm">
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              {/* Left Column */}
              <div className="lg:col-span-6 space-y-6">
                <span className="inline-flex items-center rounded-full border border-brand-green/20 bg-brand-light px-3.5 py-1 text-[10px] md:text-xs font-bold tracking-wider text-brand-green uppercase">
                  All Services, One Promise
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark leading-tight font-sans">
                  Better Access. Better Lives. <br className="hidden sm:inline" />
                  <span className="text-brand-green">Stronger Villages.</span>
                </h2>
                <p className="text-sm text-gray-500 leading-relaxed max-w-xl font-sans">
                  We are committed to delivering essential services with speed, trust and care to every village household.
                </p>
                <div className="pt-2">
                  <button className="flex items-center gap-2 rounded-xl border border-brand-green/20 text-brand-green bg-white hover:bg-brand-light px-6 py-3.5 text-xs md:text-sm font-bold transition duration-300">
                    Learn More About Our Mission
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Right Column - Stats Grid */}
              <div className="lg:col-span-6 grid grid-cols-2 gap-4">
                <div className="p-5 bg-[#fafcfa] rounded-2xl border border-emerald-50/50 space-y-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-brand-green">
                    <Users className="h-4.5 w-4.5" />
                  </span>
                  <h4 className="text-2xl font-extrabold text-brand-dark">10,000+</h4>
                  <p className="text-[10px] font-bold text-gray-600">Families Served</p>
                  <p className="text-[9px] text-gray-400">Every Month</p>
                </div>

                <div className="p-5 bg-[#fafcfa] rounded-2xl border border-emerald-50/50 space-y-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-brand-green">
                    <Truck className="h-4.5 w-4.5" />
                  </span>
                  <h4 className="text-2xl font-extrabold text-brand-dark">Thousands</h4>
                  <p className="text-[10px] font-bold text-gray-600">Orders Delivered</p>
                  <p className="text-[9px] text-gray-400">Every Day</p>
                </div>

                <div className="p-5 bg-[#fafcfa] rounded-2xl border border-emerald-50/50 space-y-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-brand-green">
                    <ShieldCheck className="h-4.5 w-4.5" />
                  </span>
                  <h4 className="text-2xl font-extrabold text-brand-dark">99%</h4>
                  <p className="text-[10px] font-bold text-gray-600">Customer</p>
                  <p className="text-[9px] text-gray-400">Satisfaction</p>
                </div>

                <div className="p-5 bg-[#fafcfa] rounded-2xl border border-emerald-50/50 space-y-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-brand-green">
                    <Headphones className="h-4.5 w-4.5" />
                  </span>
                  <h4 className="text-2xl font-extrabold text-brand-dark">24/7</h4>
                  <p className="text-[10px] font-bold text-gray-600">Support for All</p>
                  <p className="text-[9px] text-gray-400">Our Customers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. App Download Promo Banner */}
      <section className="py-7 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative rounded-3xl bg-gradient-to-br from-brand-dark to-[#164d2b] overflow-hidden shadow-xl p-8 md:p-12">
            <div className="grid lg:grid-cols-12 gap-10 items-center relative z-10">
              {/* Left text */}
              <div className="lg:col-span-7 space-y-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                  KSMCM Android &amp; iOS App
                </span>
                <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight font-sans">
                  All Services. <span className="text-emerald-400">In Your Pocket.</span>
                </h2>
                <p className="text-sm md:text-base text-white/80 leading-relaxed max-w-xl font-sans font-light">
                  The KSMCM App Makes Life Simple and Better. Access Smart Mart, online healthcare consultations, utility recharges, and track order logistics instantly from your village.
                </p>

                {/* Badges */}
                <div className="flex flex-wrap gap-4 pt-2">
                  {/* Google Play */}
                  <a
                    href="#"
                    onClick={(e) => { e.preventDefault(); alert("App Store downloads coming soon!"); }}
                    className="flex items-center gap-3 bg-black hover:bg-black/80 border border-white/15 px-5 py-2.5 rounded-xl transition duration-300"
                  >
                    <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M5,3l11.4,10.1L5,20.8V3 M17.2,13.7L5.8,2.2c-0.3-0.3-0.8-0.3-1.1,0C4.3,2.6,4.1,3,4.1,3.4v17.2c0,0.4,0.2,0.8,0.6,1.1c0.3,0.3,0.8,0.3,1.1,0l11.4-11.5c0.3-0.3,0.3-0.8,0-1.1C17.2,14,17.2,13.9,17.2,13.7z" />
                    </svg>
                    <div className="text-left text-white leading-none">
                      <p className="text-[9px] uppercase tracking-wide opacity-60">Get it on</p>
                      <p className="text-xs font-bold">Google Play</p>
                    </div>
                  </a>

                  {/* App Store */}
                  <a
                    href="#"
                    onClick={(e) => { e.preventDefault(); alert("App Store downloads coming soon!"); }}
                    className="flex items-center gap-3 bg-black hover:bg-black/80 border border-white/15 px-5 py-2.5 rounded-xl transition duration-300"
                  >
                    <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.7,12.4c0-2.8,2.3-4.1,2.4-4.2c-1.3-1.9-3.3-2.2-4-2.2c-1.7-0.2-3.4,1-4.3,1c-0.9,0-2.3-1-3.7-1c-1.9,0-3.6,1.1-4.6,2.8c-2,3.4-0.5,8.4,1.4,11.2c0.9,1.4,2,2.9,3.5,2.8c1.5-0.1,2-1,3.8-1c1.8,0,2.3,1,3.8,0.9c1.5-0.1,2.5-1.4,3.4-2.8c1.1-1.6,1.5-3.1,1.6-3.2C21.8,15.9,18.7,14.7,18.7,12.4z" />
                      <path d="M15.9,3.5c0.8-1,1.3-2.4,1.2-3.8c-1.2,0.1-2.7,0.8-3.5,1.7c-0.7,0.8-1.3,2.2-1.1,3.6C13.7,5.1,15.1,4.4,15.9,3.5z" />
                    </svg>
                    <div className="text-left text-white leading-none">
                      <p className="text-[9px] uppercase tracking-wide opacity-60">Download on the</p>
                      <p className="text-xs font-bold">App Store</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Right smartphone mockup */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-56 h-[380px] bg-black rounded-[40px] border-[10px] border-black shadow-2xl relative flex items-center justify-center p-3">
                  {/* Phone notch */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-full z-20" />

                  {/* Screen Content */}
                  <div className="w-full h-full rounded-[30px] bg-[#f7f9f7] overflow-hidden p-3 relative flex flex-col justify-between border border-emerald-50">
                    <div className="space-y-4">
                      {/* Logo header */}
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-extrabold text-brand-dark uppercase">KSMCM</span>
                        <span className="h-2 w-2 rounded-full bg-brand-green animate-pulse" />
                      </div>

                      {/* Mock credit section */}
                      <div className="bg-brand-dark p-3.5 rounded-xl text-white space-y-1">
                        <p className="text-[8px] opacity-60 uppercase">Available Wallet Balance</p>
                        <p className="text-sm font-extrabold">₹ 10,000</p>
                      </div>

                      {/* Grid services mock */}
                      <div className="space-y-2">
                        <p className="text-[9px] font-bold text-brand-dark">Quick Services</p>
                        <div className="grid grid-cols-3 gap-2">
                          <div className="p-2 bg-white rounded-lg border border-emerald-50 flex flex-col items-center justify-center">
                            <span className="h-5 w-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                              <ShoppingBasket className="h-3 w-3" />
                            </span>
                            <span className="text-[7px] font-bold mt-1">Mart</span>
                          </div>

                          <div className="p-2 bg-white rounded-lg border border-emerald-50 flex flex-col items-center justify-center">
                            <span className="h-5 w-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                              <Stethoscope className="h-3 w-3" />
                            </span>
                            <span className="text-[7px] font-bold mt-1">Health</span>
                          </div>

                          <div className="p-2 bg-white rounded-lg border border-emerald-50 flex flex-col items-center justify-center">
                            <span className="h-5 w-5 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center">
                              <Globe className="h-3 w-3" />
                            </span>
                            <span className="text-[7px] font-bold mt-1">Digital</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom home handle */}
                    <div className="h-1 w-24 bg-gray-300 rounded-full mx-auto" />
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative background grid pattern overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(31,122,61,0.15),transparent_60%)]" />
          </div>
        </div>
      </section>
    </div>
  );
}
