import { useState } from "react";
import {
  Briefcase,
  MapPin,
  Clock,
  ArrowRight,
  X,
  Check,
  GraduationCap,
  Users,
  Compass,
  Heart,
  TrendingUp,
  Award,
  Upload,
  ChevronRight,
  Scale,
  Target,
  ArrowUpRight,
  ShieldAlert,
  Search,
  ChevronDown,
  Info,
  Play,
  Home as HomeIcon,
  ShieldCheck
} from "lucide-react";

import teamHeroImg from "../assets/images/carrer-images/ksmc-industries.jpeg";
import teachingImg from "../assets/images/carrer-images/ksmc-teaching.jpeg";
import groupImg from "../assets/images/carrer-images/ksmc-group.jpeg";

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeDepartment, setActiveDepartment] = useState("All");

  const [applyName, setApplyName] = useState("");
  const [applyEmail, setApplyEmail] = useState("");
  const [applyPhone, setApplyPhone] = useState("");
  const [applyCoverLetter, setApplyCoverLetter] = useState("");
  const [resumeName, setResumeName] = useState("");

  const [speculativeEmail, setSpeculativeEmail] = useState("");
  const [speculativeSubmitted, setSpeculativeSubmitted] = useState(false);

  const jobs = [
    {
      id: 1,
      title: "Field Operations Manager",
      department: "Operations",
      location: "AP Mandals",
      type: "Full-time",
      salary: "Competitive",
      description: "Oversee day-to-day logistics hub operations, manage delivery agents, and align with merchant hubs."
    },
    {
      id: 2,
      title: "Full Stack Developer",
      department: "Technology",
      location: "Vizag Office",
      type: "Full-time",
      salary: "Competitive",
      description: "Build robust offline-first synchronization APIs, local merchant POS interfaces, and customer mobile apps."
    },
    {
      id: 3,
      title: "Telemedicine Consultant",
      department: "Operations",
      location: "Remote / AP",
      type: "Part-time",
      salary: "Competitive",
      description: "Provide primary care medical consultations virtually to patients in remote village wellness centers."
    },
    {
      id: 4,
      title: "Digital Marketing Executive",
      department: "Technology",
      location: "Vizag Office",
      type: "Full-time",
      salary: "Competitive",
      description: "Manage digital outreach campaigns, localized social marketing, and brand operations across rural mandals."
    }
  ];

  const cultureCards = [
    {
      title: "Purpose Driven",
      description: "Work on community-focused, high-impact technologies.",
      icon: Target
    },
    {
      title: "Learning & Growth",
      description: "Continuous training, coaching, and career advancement.",
      icon: GraduationCap
    },
    {
      title: "Great Culture",
      description: "Inclusive, supportive, and performance-driven environment.",
      icon: Users
    },
    {
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs.",
      icon: Heart
    },
    {
      title: "Recognition",
      description: "Celebrating achievements and rewarding contribution.",
      icon: Award
    },
    {
      title: "Work-Life Balance",
      description: "Flexible working hour policies for high productivity.",
      icon: Scale
    }
  ];

  const timelineSteps = [
    {
      stepNum: "1",
      title: "Apply Online",
      description: "Explore roles and submit your application."
    },
    {
      stepNum: "2",
      title: "Screening",
      description: "Our team reviews your profile and experience."
    },
    {
      stepNum: "3",
      title: "Interview",
      description: "Technical and HR interviews to know you better."
    },
    {
      stepNum: "4",
      title: "Assessment",
      description: "Role-specific assessment or assignment."
    },
    {
      stepNum: "5",
      title: "Offer",
      description: "Welcome aboard! Let's build the future together."
    }
  ];

  const employeeBenefits = [
    {
      title: "Health First",
      description: "Comprehensive health insurance for you and your family.",
      icon: ShieldCheck
    },
    {
      title: "Secure Tomorrow",
      description: "Retirement benefits and long-term financial security.",
      icon: TrendingUp
    },
    {
      title: "Learning Support",
      description: "Continuous learning opportunities and certification support.",
      icon: GraduationCap
    },
    {
      title: "Flexible Nature",
      description: "Balances your work-life environment to boost your productivity.",
      icon: HomeIcon
    },
    {
      title: "Wellness Program",
      description: "Helps holistic programs across physical and mental well-being.",
      icon: Heart
    },
    {
      title: "Family Care",
      description: "Access to parental and medical support for our employees.",
      icon: Users
    },
    {
      title: "Recognition & Rewards",
      description: "Celebrate your wins with meaningful recognition and rewards.",
      icon: Award
    }
  ];

  const testimonials = [
    {
      quote: "KSMCM gives me the opportunity to work on meaningful projects that create real change in people's lives.",
      name: "RANI M.",
      role: "Mandal Coordinator",
      imgLetter: "R",
      bgClass: "bg-emerald-600"
    },
    {
      quote: "The culture here is incredibly supportive. I've grown from an associate to leading a regional operations hub in 2 years.",
      name: "KIRAN K.",
      role: "Operations Manager",
      imgLetter: "K",
      bgClass: "bg-orange-500"
    },
    {
      quote: "Building technology that empowers micro-entrepreneurs in my own home state is the most fulfilling work I've ever done.",
      name: "AMIT V.",
      role: "Lead API Developer",
      imgLetter: "A",
      bgClass: "bg-blue-600"
    }
  ];

  const handleApplySubmit = (e) => {
    e.preventDefault();
    if (applyName && applyEmail && applyPhone) {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setSelectedJob(null);
        setApplyName("");
        setApplyEmail("");
        setApplyPhone("");
        setApplyCoverLetter("");
        setResumeName("");
      }, 3000);
    }
  };

  const handleSpeculativeSubmit = (e) => {
    e.preventDefault();
    if (speculativeEmail) {
      setSpeculativeSubmitted(true);
      setSpeculativeEmail("");
      setTimeout(() => setSpeculativeSubmitted(false), 5000);
    }
  };

  const handleResumeChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setResumeName(e.target.files[0].name);
    }
  };

  const filteredJobs = activeDepartment === "All"
    ? jobs
    : jobs.filter(j => j.department === activeDepartment);

  return (
    <div className="bg-[#fcfdfc] text-gray-800 pt-28">
      {/* 1. Hero Section */}
      <section className="relative py-12 lg:py-16 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column - Copy */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold tracking-[0.2em] text-brand-green uppercase inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-green animate-pulse" />
                Careers
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6.5xl font-extrabold text-brand-dark tracking-tight leading-[1.12]">
                Build Your Career.<br />
                <span className="text-brand-green">Build Rural India.</span>
              </h1>
              <p className="text-sm sm:text-base text-gray-600 max-w-xl leading-relaxed font-sans">
                At KSMCM Industries, you don't just get a job - you become a change-maker. Join a passionate team that is transforming lives and empowering millions across villages.
              </p>

              {/* Bottom stats bullet icons list */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-light text-brand-green border border-emerald-100">
                    <Heart className="h-4.5 w-4.5" />
                  </span>
                  <span className="text-xs font-bold text-brand-dark">Meaningful Work</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-light text-brand-green border border-emerald-100">
                    <TrendingUp className="h-4.5 w-4.5" />
                  </span>
                  <span className="text-xs font-bold text-brand-dark">Growth Opportunities</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-light text-brand-green border border-emerald-100">
                    <Compass className="h-4.5 w-4.5" />
                  </span>
                  <span className="text-xs font-bold text-brand-dark">Work on Real Impact</span>
                </div>
              </div>
            </div>

            {/* Right Column - Hero Image */}
            <div className="lg:col-span-5 relative flex flex-col justify-center items-center">
              {/* Floating Pill Badge */}
              <div className="absolute top-[-15px] left-4 bg-white px-4 py-2.5 rounded-full shadow-lg border border-emerald-50 flex items-center gap-2 z-10">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-light text-brand-green">
                  <Users className="h-3.5 w-3.5" />
                </span>
                <span className="text-[10px] sm:text-xs font-bold text-brand-dark">Be a part of a mission that matters.</span>
              </div>

              {/* Image Frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white w-full max-w-2xl bg-white mt-4">
                <img
                  src={groupImg}
                  alt="KSMCM Operations and Technology Team"
                  className="w-full h-auto object-contain block"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHY JOIN US? (More Than a Job. A Purpose.) */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10">
            {/* Left column info */}
            <div className="lg:col-span-4 space-y-5 lg:sticky lg:top-28 self-start">
              <span className="text-xs font-bold tracking-[0.2em] text-brand-green uppercase block">
                Why Join Us?
              </span>
              <h2 className="text-3xl font-extrabold text-brand-dark leading-tight font-sans">
                More Than a Job.<br />
                <span className="text-brand-green">A Purpose.</span>
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed max-w-md font-sans">
                We provide support for all employees, continuous learning and mentorship, and real ground-level impact. Help us shape the future of rural commerce.
              </p>
              <div className="pt-2">
                <a
                  href="#culture"
                  className="inline-flex items-center gap-2 rounded-full bg-brand-green hover:bg-brand-green/80 text-white px-6 py-3 text-xs md:text-sm font-semibold transition duration-300 shadow-md shadow-brand-green/10"
                >
                  Life at KSMCM
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Right column values grid */}
            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-6">
              {cultureCards.map((c, i) => {
                const IconComponent = c.icon;
                return (
                  <div
                    key={i}
                    className="p-6 bg-[#fafcfa] rounded-3xl border border-emerald-50 shadow-sm flex gap-4 hover:shadow-md transition duration-300"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-light text-brand-green">
                      <IconComponent className="h-5.5 w-5.5" />
                    </span>
                    <div className="space-y-1">
                      <h4 className="text-sm font-extrabold text-brand-dark">{c.title}</h4>
                      <p className="text-xs text-gray-500 leading-relaxed font-sans">{c.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 3. OPEN POSITIONS (Explore Opportunities) */}
      <section id="openings" className="py-16 bg-[#fafcfa] border-y border-emerald-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-2">
              <span className="text-xs font-bold tracking-[0.2em] text-brand-green uppercase">
                Open Positions
              </span>
              <h2 className="text-3xl font-extrabold text-brand-dark">Explore Opportunities</h2>
            </div>

            {/* Filter Dropdowns mock */}
            <div className="flex flex-wrap gap-3">
              <div className="relative">
                <select
                  value={activeDepartment}
                  onChange={(e) => setActiveDepartment(e.target.value)}
                  className="appearance-none bg-white border border-emerald-50 rounded-xl px-4 py-2.5 pr-10 text-xs font-semibold text-gray-500 focus:outline-none focus:border-brand-green cursor-pointer"
                >
                  <option value="All">All Departments</option>
                  <option value="Operations">Operations</option>
                  <option value="Logistics">Logistics</option>
                  <option value="Technology">Technology</option>
                </select>
                <ChevronDown className="absolute right-3 top-3 h-4 w-4 text-gray-400 pointer-events-none" />
              </div>

              <div className="relative">
                <select className="appearance-none bg-white border border-emerald-50 rounded-xl px-4 py-2.5 pr-10 text-xs font-semibold text-gray-500 focus:outline-none focus:border-brand-green cursor-pointer">
                  <option>All Locations</option>
                  <option>AP Mandals</option>
                  <option>Vizag Office</option>
                  <option>Remote</option>
                </select>
                <ChevronDown className="absolute right-3 top-3 h-4 w-4 text-gray-400 pointer-events-none" />
              </div>

              <button className="px-4 py-2.5 bg-white border border-emerald-50 rounded-xl text-xs font-semibold text-gray-500 hover:text-brand-green hover:border-brand-green/20 transition">
                Clear Filters
              </button>
            </div>
          </div>

          {/* Jobs Listing - Vertical List Layout */}
          <div className="space-y-4 max-w-5xl mx-auto">
            {filteredJobs.map((j) => (
              <div
                key={j.id}
                className="bg-white rounded-3xl p-5 md:p-6 border border-emerald-50 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6 hover:shadow-md hover:border-emerald-100 transition-all duration-300"
              >
                {/* Info block */}
                <div className="flex gap-4 items-start md:items-center flex-1">
                  <span className="hidden sm:flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-light text-brand-green">
                    <Briefcase className="h-5 w-5" />
                  </span>
                  <div className="space-y-1">
                    <div className="flex flex-wrap gap-2 items-center">
                      <h3 className="text-base font-extrabold text-brand-dark">{j.title}</h3>
                      <span className="px-2 py-0.5 bg-brand-light text-brand-green text-[9px] font-bold tracking-wider uppercase rounded">
                        {j.type}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 items-center text-[10px] text-gray-400">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5 text-brand-green shrink-0" />
                        {j.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5 text-brand-green shrink-0" />
                        {j.department}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description snippet on md+ screens */}
                <p className="hidden lg:block text-xs text-gray-400 font-sans max-w-sm flex-1 leading-relaxed">
                  {j.description}
                </p>

                {/* Apply Action */}
                <div className="flex items-center gap-4 shrink-0 justify-between md:justify-end border-t border-gray-50 pt-4 md:border-none md:pt-0">
                  <span className="text-[10px] text-gray-400 lg:hidden">
                    Salary: <span className="font-bold text-gray-500">{j.salary}</span>
                  </span>
                  <button
                    onClick={() => setSelectedJob(j)}
                    className="flex items-center gap-2 rounded-full bg-brand-green hover:bg-[#0f4023] text-white border border-[#165830] px-5 py-2.5 text-xs font-semibold transition duration-300"
                  >
                    Apply Now
                    <span className="flex h-4.5 w-4.5 items-center justify-center rounded-full border border-white/20 text-white/95">
                      <ArrowRight className="h-2.5 w-2.5" />
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. OUR HIRING PROCESS (Simple. Transparent. People First.) */}
      <section className="py-4 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-bold tracking-[0.2em] text-brand-green uppercase">
              Our Hiring Process
            </span>
            <h2 className="text-3xl font-extrabold text-brand-dark leading-tight font-sans">
              Simple. Transparent. People First.
            </h2>
            <div className="flex justify-center items-center gap-1 mt-1">
              <span className="h-0.5 w-8 bg-brand-green/30" />
              <Compass className="h-4 w-4 text-brand-green" />
              <span className="h-0.5 w-8 bg-brand-green/30" />
            </div>
          </div>

          {/* Stepper Timeline layout */}
          <div className="relative">
            {/* Connector Line for Desktop */}
            <div className="absolute top-[28px] left-[5%] right-[5%] h-0.5 bg-emerald-100 hidden lg:block -z-10" />

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {timelineSteps.map((step, i) => (
                <div key={i} className="flex flex-col items-center text-center space-y-4 group">
                  {/* Step Bubble */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white border-2 border-brand-green text-brand-green font-extrabold text-lg shadow-sm group-hover:bg-brand-green group-hover:text-white transition duration-300 relative">
                    {step.stepNum}
                    <span className="absolute bottom-[-5px] right-[-5px] flex h-5 w-5 items-center justify-center rounded-full bg-brand-light text-brand-green text-[9px] border border-emerald-100 shadow-sm opacity-0 group-hover:opacity-100 transition duration-300">
                      ✓
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h4 className="text-sm font-extrabold text-brand-dark">{step.title}</h4>
                    <p className="text-xs text-gray-400 leading-relaxed font-sans max-w-[180px] mx-auto">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Stepper Middlegovern Banner */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative rounded-3xl bg-[#093d1f] overflow-hidden shadow-xl border border-emerald-800/20 px-8 py-10 md:py-12">
            {/* Background Image / Overlay effect */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(31,122,61,0.2),transparent_70%)]" />
            <div className="absolute right-0 top-0 bottom-0 w-1/3 hidden lg:flex items-center justify-center opacity-10">
              <Compass className="h-64 w-64 text-emerald-400" />
            </div>

            <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
              {/* Left Side */}
              <div className="lg:col-span-7 space-y-5">
                <span className="inline-flex items-center rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-[10px] md:text-xs font-semibold tracking-wider text-emerald-400 uppercase">
                  MandalConnect
                </span>
                <h2 className="text-3xl md:text-4.5xl font-extrabold text-white leading-tight font-sans">
                  We Impact Communities <br />
                  That Feed Us All
                </h2>
                <p className="text-xs sm:text-sm text-emerald-100/70 leading-relaxed max-w-xl font-sans">
                  Better lives &amp; economy with better tools. Your work here really matters and creates self-sustainable pathways for rural Bharat.
                </p>

                <div className="pt-2 flex flex-wrap gap-4 items-center">
                  <a
                    href="#openings"
                    className="flex items-center gap-2.5 rounded-full bg-white hover:bg-emerald-50 text-brand-green px-6 py-3 text-xs md:text-sm font-semibold transition duration-300"
                  >
                    See Our Open Jobs
                    <ArrowRight className="h-3.5 w-3.5 text-brand-green" />
                  </a>
                  <a href="#openings" className="text-xs font-bold text-white hover:text-emerald-400 underline decoration-dotted transition">
                    Explore Opportunities
                  </a>
                </div>
              </div>

              {/* Right Side Bullet Badges */}
              <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 bg-emerald-900/30 rounded-2xl border border-emerald-800/40 text-center space-y-1">
                  <span className="mx-auto flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                    ✓
                  </span>
                  <p className="text-[10px] font-bold text-white uppercase tracking-wider">Meaningful</p>
                  <p className="text-[9px] text-emerald-100/60">Work</p>
                </div>
                <div className="p-4 bg-emerald-900/30 rounded-2xl border border-emerald-800/40 text-center space-y-1">
                  <span className="mx-auto flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                    ✓
                  </span>
                  <p className="text-[10px] font-bold text-white uppercase tracking-wider">Grow With</p>
                  <p className="text-[9px] text-emerald-100/60">Us</p>
                </div>
                <div className="p-4 bg-emerald-900/30 rounded-2xl border border-emerald-800/40 text-center space-y-1">
                  <span className="mx-auto flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                    ✓
                  </span>
                  <p className="text-[10px] font-bold text-white uppercase tracking-wider">Build Your</p>
                  <p className="text-[9px] text-emerald-100/60">Career</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. EMPLOYEE BENEFITS (We care for you, so you can care more.) */}
      <section className="py-5 bg-[#fafcfa] border-t border-emerald-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10 items-center mb-16">
            {/* Header Content */}
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-bold tracking-[0.2em] text-brand-green uppercase block">
                Employee Benefits
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark">
                We care for you, <br className="hidden sm:inline" />
                so you can care more.
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-sans max-w-2xl">
                At KSMCM Industries, your well-being and growth matter. We offer a benefits package designed to support you and your family at every stage of life.
              </p>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {employeeBenefits.slice(0, 3).map((b, i) => {
              const IconComp = b.icon;
              return (
                <div
                  key={i}
                  className="p-6 bg-white rounded-3xl border border-emerald-50 hover:shadow-md transition-shadow space-y-4"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-light text-brand-green">
                    <IconComp className="h-5.5 w-5.5" />
                  </span>
                  <div className="space-y-1">
                    <h4 className="text-sm font-extrabold text-brand-dark">{b.title}</h4>
                    <p className="text-[11px] text-gray-400 leading-relaxed font-sans">{b.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
            {employeeBenefits.slice(3, 7).map((b, i) => {
              const IconComp = b.icon;
              return (
                <div
                  key={i}
                  className="p-6 bg-white rounded-3xl border border-emerald-50 hover:shadow-md transition-shadow space-y-4"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-light text-brand-green">
                    <IconComp className="h-5.5 w-5.5" />
                  </span>
                  <div className="space-y-1">
                    <h4 className="text-sm font-extrabold text-brand-dark">{b.title}</h4>
                    <p className="text-[11px] text-gray-400 leading-relaxed font-sans">{b.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. EMPLOYEE VOICES (Real People. Real Impact.) */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Left Header info */}
            <div className="lg:col-span-4 space-y-5">
              <span className="text-xs font-bold tracking-[0.2em] text-brand-green uppercase block">
                Employee Voices
              </span>
              <h2 className="text-3xl font-extrabold text-brand-dark leading-tight font-sans">
                Real People.<br />
                <span className="text-brand-green">Real Impact.</span>
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-sans max-w-sm">
                Hear from our team members who are building a better rural India, every day. Their stories speak of dedication, growth, and community transformation.
              </p>
              <div className="pt-2">
                <button className="flex items-center gap-2 rounded-xl border border-brand-green/20 text-brand-green bg-white hover:bg-brand-light px-6 py-3 text-xs md:text-sm font-bold transition duration-300">
                  View More Stories
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Testimonials Carousel Grid */}
            <div className="lg:col-span-8 grid sm:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="bg-[#fafcfa] rounded-3xl p-6 border border-emerald-50 flex flex-col justify-between hover:shadow-md transition-shadow"
                >
                  <div className="space-y-4">
                    <span className="text-4xl font-serif text-brand-green/20 block">“</span>
                    <p className="text-xs text-gray-500 leading-relaxed font-sans">
                      {t.quote}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-emerald-50/50 flex items-center gap-3">
                    {/* Circle letter avatar */}
                    <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white font-bold text-xs ${t.bgClass}`}>
                      {t.imgLetter}
                    </span>
                    <div className="leading-tight">
                      <h4 className="text-xs font-bold text-brand-dark">{t.name}</h4>
                      <p className="text-[9px] text-gray-400">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. LEARNING & GROWTH (Grow Your skills. Shape your future.) */}
      <section className="py-8 bg-[#fafcfa] border-y border-emerald-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Info Column */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold tracking-[0.2em] text-brand-green uppercase block">
                Learning &amp; Growth
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark leading-tight font-sans">
                Grow Your skills. <br />
                <span className="text-brand-green">Shape your future.</span>
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed max-w-xl font-sans">
                We believe in nurturing talent and helping you reach your full potential through continuous learning, mentorship, and career advancement opportunities.
              </p>

              {/* Bullet list */}
              <ul className="grid sm:grid-cols-2 gap-4 text-xs font-bold text-brand-dark">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
                  Training &amp; Development Programs
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
                  Mentorship by Industry Experts
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
                  Career Advancement Opportunities
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
                  Access to Digital Learning Platforms
                </li>
              </ul>

              <div className="pt-2">
                <button className="flex items-center gap-2 rounded-xl bg-brand-green hover:bg-[#0f4023] text-white px-6 py-3.5 text-xs md:text-sm font-semibold transition duration-300">
                  Explore Growth Opportunities
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Right Image Column */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white w-full max-w-2xl bg-white">
                <img
                  src={teachingImg}
                  alt="Corporate workshop session at KSMCM"
                  className="w-full h-auto object-contain block"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. OUR CULTURE (A Place where you belong and thrive.) */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left side pillars list */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold tracking-[0.2em] text-brand-green uppercase block">
                Our Culture
              </span>
              <h2 className="text-3xl font-extrabold text-brand-dark leading-tight font-sans">
                A Place where you <br />
                <span className="text-brand-green">belong and thrive.</span>
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-sans max-w-md">
                We design environments where people can bring their authentic selves to collaborate, build lifelong connections, and create absolute value for village communities.
              </p>

              {/* Culture metrics pillars list */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-[#fafcfa] rounded-2xl border border-emerald-50 flex flex-col items-center text-center space-y-2">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-brand-green">
                    <Users className="h-4.5 w-4.5" />
                  </span>
                  <span className="text-[10px] font-extrabold text-brand-dark uppercase tracking-wider">Inclusive Workplace</span>
                </div>

                <div className="p-4 bg-[#fafcfa] rounded-2xl border border-emerald-50 flex flex-col items-center text-center space-y-2">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-brand-green">
                    <Compass className="h-4.5 w-4.5" />
                  </span>
                  <span className="text-[10px] font-extrabold text-brand-dark uppercase tracking-wider">Team Collaboration</span>
                </div>

                <div className="p-4 bg-[#fafcfa] rounded-2xl border border-emerald-50 flex flex-col items-center text-center space-y-2">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-brand-green">
                    <Award className="h-4.5 w-4.5" />
                  </span>
                  <span className="text-[10px] font-extrabold text-brand-dark uppercase tracking-wider">Celebrating Diversity</span>
                </div>

                <div className="p-4 bg-[#fafcfa] rounded-2xl border border-emerald-50 flex flex-col items-center text-center space-y-2">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-brand-green">
                    <Target className="h-4.5 w-4.5" />
                  </span>
                  <span className="text-[10px] font-extrabold text-brand-dark uppercase tracking-wider">Community Engagement</span>
                </div>
              </div>
            </div>

            {/* Right side large team group photo */}
            <div className="lg:col-span-7 relative flex justify-center">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white w-full bg-white">
                <img
                  src={teamHeroImg}
                  alt="KSMCM Corporate Team standing in unity"
                  className="w-full h-auto object-contain block"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. CTA Final Banner (Your journey can create millions of new beginnings.) */}
      <section className="py-4 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative rounded-3xl bg-gradient-to-r from-brand-dark to-[#164d2b] p-8 md:p-12 overflow-hidden shadow-xl">
            {/* Background design */}
            <div className="absolute inset-0 opacity-10 mix-blend-overlay">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80">
                <path d="M0 0h80v80H0z" fill="none" />
                <path d="M0 80h80V0h-2v78H0v2zm0-2h78V0H0v78zM80 0v80H0V0h80zM2 2h76v76H2V2z" fill="#fff" />
              </svg>
            </div>

            <div className="relative z-10 grid lg:grid-cols-12 gap-10 items-center">
              {/* Left copy */}
              <div className="lg:col-span-8 space-y-6">
                <span className="text-[10px] md:text-xs font-bold tracking-widest text-emerald-400 uppercase">
                  BE PART OF A MISSION
                </span>
                <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight font-sans">
                  Your journey can create <br />
                  millions of <span className="text-emerald-400">new beginnings.</span>
                </h2>
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed max-w-2xl font-sans">
                  Join KSMCM Industries and be part of India's largest rural empowerment ecosystem. Help build technologies, credit pipelines, and digital services that power thousands of villages.
                </p>

                <div className="pt-2 flex flex-wrap gap-4 items-center">
                  <a
                    href="#openings"
                    className="flex items-center gap-2.5 rounded-full bg-brand-orange text-white px-6 py-3.5 text-xs md:text-sm font-semibold hover:brightness-110 active:translate-y-0 shadow-lg shadow-brand-orange/30 transition duration-300"
                  >
                    View Open Positions
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <button className="flex items-center gap-2 bg-transparent border border-white/20 hover:bg-white/5 text-white rounded-full px-6 py-3.5 text-xs md:text-sm font-semibold transition">
                    <Play className="h-3.5 w-3.5 fill-current ml-0.5" />
                    Watch Our Story
                  </button>
                </div>
              </div>

              {/* Right Stats Grid */}
              <div className="lg:col-span-4 grid grid-cols-2 gap-4">
                <div className="p-4 bg-emerald-950/40 rounded-2xl border border-emerald-800/40 text-center space-y-1">
                  <h4 className="text-2xl font-extrabold text-white">500+</h4>
                  <p className="text-[9px] text-emerald-200/60 uppercase font-bold tracking-wider">Team Members</p>
                </div>
                <div className="p-4 bg-emerald-950/40 rounded-2xl border border-emerald-800/40 text-center space-y-1">
                  <h4 className="text-2xl font-extrabold text-white">28+</h4>
                  <p className="text-[9px] text-emerald-200/60 uppercase font-bold tracking-wider">States</p>
                </div>
                <div className="p-4 bg-emerald-950/40 rounded-2xl border border-emerald-800/40 text-center space-y-1">
                  <h4 className="text-2xl font-extrabold text-white">1M+</h4>
                  <p className="text-[9px] text-emerald-200/60 uppercase font-bold tracking-wider">Lives Impacted</p>
                </div>
                <div className="p-4 bg-emerald-950/40 rounded-2xl border border-emerald-800/40 text-center space-y-1">
                  <h4 className="text-2xl font-extrabold text-white">Endless</h4>
                  <p className="text-[9px] text-emerald-200/60 uppercase font-bold tracking-wider">Possibilities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Application Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in">
          <div className="relative w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl border border-emerald-100 flex flex-col justify-between">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-emerald-50 bg-[#fafcfa]">
              <div>
                <p className="text-[10px] font-bold text-brand-green uppercase tracking-wider font-sans">Application Form</p>
                <h3 className="text-sm font-extrabold text-brand-dark truncate max-w-[260px] font-sans">{selectedJob.title}</h3>
              </div>
              <button
                onClick={() => setSelectedJob(null)}
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
                <h4 className="text-lg font-bold text-brand-dark font-sans">Application Submitted!</h4>
                <p className="text-xs text-gray-500 max-w-xs mx-auto leading-relaxed font-sans">
                  Thank you for applying to KSMCM Industries. Our hiring team will review your application and contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleApplySubmit} className="p-6 space-y-4 text-xs">
                {/* Name */}
                <div className="space-y-1 flex flex-col">
                  <label className="font-bold text-gray-600">Full Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl border border-emerald-50 bg-white placeholder-gray-400 focus:outline-none focus:border-brand-green transition"
                    placeholder="Enter your full name..."
                    value={applyName}
                    onChange={(e) => setApplyName(e.target.value)}
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1 flex flex-col">
                    <label className="font-bold text-gray-600">Email Address *</label>
                    <input
                      type="email"
                      required
                      className="w-full px-3.5 py-2.5 rounded-xl border border-emerald-50 bg-white placeholder-gray-400 focus:outline-none focus:border-brand-green transition"
                      placeholder="name@email.com"
                      value={applyEmail}
                      onChange={(e) => setApplyEmail(e.target.value)}
                    />
                  </div>
                  <div className="space-y-1 flex flex-col">
                    <label className="font-bold text-gray-600">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      className="w-full px-3.5 py-2.5 rounded-xl border border-emerald-50 bg-white placeholder-gray-400 focus:outline-none focus:border-brand-green transition"
                      placeholder="+91 XXXXX XXXXX"
                      value={applyPhone}
                      onChange={(e) => setApplyPhone(e.target.value)}
                    />
                  </div>
                </div>

                {/* Cover Letter */}
                <div className="space-y-1 flex flex-col">
                  <label className="font-bold text-gray-600">Cover Letter (Optional)</label>
                  <textarea
                    className="w-full h-20 px-3.5 py-2.5 rounded-xl border border-emerald-50 bg-white placeholder-gray-400 focus:outline-none focus:border-brand-green transition resize-none"
                    placeholder="Tell us briefly why you would like to work with us..."
                    value={applyCoverLetter}
                    onChange={(e) => setApplyCoverLetter(e.target.value)}
                  />
                </div>

                {/* Resume Upload mock */}
                <div className="space-y-1 flex flex-col">
                  <label className="font-bold text-gray-600">Upload Resume *</label>
                  <div className="relative border border-dashed border-emerald-300/60 bg-[#fafcfa] rounded-xl p-4 flex flex-col items-center justify-center cursor-pointer hover:bg-brand-light/20 transition">
                    <input
                      type="file"
                      required
                      accept=".pdf,.doc,.docx"
                      onChange={handleResumeChange}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                    <Upload className="h-6 w-6 text-brand-green/70 mb-1" />
                    <p className="text-[10px] font-bold text-gray-500">
                      {resumeName ? resumeName : "Click to upload Resume (PDF/Word)"}
                    </p>
                    <p className="text-[8px] text-gray-400 mt-0.5">Maximum file size: 5MB</p>
                  </div>
                </div>

                {/* Footer buttons */}
                <div className="pt-4 flex justify-end gap-3 border-t border-emerald-50/50">
                  <button
                    type="button"
                    onClick={() => setSelectedJob(null)}
                    className="px-4 py-2 border border-emerald-100 rounded-xl text-gray-500 hover:bg-gray-50 font-semibold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 bg-brand-green hover:bg-brand-green/80 text-white rounded-xl font-semibold shadow-md"
                  >
                    Submit Application
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
