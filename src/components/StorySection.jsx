import { Play, Briefcase, HeartPulse, Smartphone, Users, TrendingUp } from "lucide-react";
import storyImage from "../images/WhatsApp Image 2026-07-12 at 7.20.20 AM.jpeg";
import deliveryImage from "../images/WhatsApp Image 2026-07-12 at 7.20.23 AM.jpeg";

const FOCUS = [
  { title: "Rural Focused", sub: "Built for Villages and Mandals with deep understanding of rural needs." },
  { title: "Technology Driven", sub: "Using digital innovation to deliver world-class services at your doorstep." },
  { title: "Sustainable Growth", sub: "Creating long-term impact through responsible and sustainable practices." },
];

const IMPACT_LIST = [
  { icon: Briefcase, title: "Employment Generation", sub: "Creating local jobs and self-employment opportunities in rural areas." },
  { icon: HeartPulse, title: "Health Access", sub: "Bringing quality healthcare and consultations closer to every village." },
  { icon: Smartphone, title: "Digital Inclusion", sub: "Empowering communities with digital services and access." },
  { icon: Users, title: "Women Empowerment", sub: "Supporting women entrepreneurs and building financial independence." },
  { icon: TrendingUp, title: "Community Growth", sub: "Strengthening rural communities for a better tomorrow." },
];

const IMPACT_STATS = [
  { value: "5,000+", label: "Women Empowered" },
  { value: "1,500+", label: "Local Jobs Created" },
  { value: "200+", label: "Women Entrepreneurs" },
  { value: "300+", label: "Digital Literacy Programs" },
];

export default function StorySection() {
  return (
    <section id="impact" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] items-start">
          <div>
            <p className="text-2xl font-serif text-brand-green">"</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold leading-snug text-brand-dark">
              Bridging the gap between villages and{" "}
              <span className="text-brand-green">opportunities.</span>
            </h2>
            <p className="mt-2 max-w-xl text-sm text-gray-500">
              We are not just a platform, we are a movement towards a
              digitally empowered rural India.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-2">
            {FOCUS.map((f) => (
              <div key={f.title} className="max-w-[150px]">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-light">
                  <span className="h-3 w-3 rounded-full bg-brand-green" />
                </span>
                <p className="mt-2 text-xs font-bold text-brand-dark">{f.title}</p>
                <p className="mt-1 text-[10px] text-gray-500">{f.sub}</p>
              </div>
            ))}
          </div>

          <div className="hidden lg:flex w-56 flex-col justify-between rounded-xl bg-brand-dark p-5 text-white self-start overflow-hidden">
            <div className="absolute inset-0 rounded-xl opacity-40">
              <img src={storyImage} alt="Story" className="h-full w-full object-cover" />
            </div>
            <button className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white/15 z-10">
              <Play className="h-4 w-4" />
            </button>
            <p className="relative mt-6 text-sm font-semibold leading-snug z-10">
              Our Story — Every village has a dream. We help turn those
              dreams into reality.
            </p>
            <button className="relative mt-4 text-xs font-semibold text-brand-green z-10">
              Watch Video →
            </button>
          </div>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_auto_auto] items-center">
          <div className="relative h-64 overflow-hidden rounded-2xl bg-gradient-to-br from-brand-green to-brand-dark">
            <img src={deliveryImage} alt="Delivery" className="absolute inset-0 h-full w-full object-cover opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-brand-dark/20" />
            <p className="absolute left-4 top-4 text-xs font-bold uppercase tracking-wide text-white/80 z-10">
              Creating Real Impact
            </p>
            <p className="absolute left-4 top-9 max-w-[220px] text-lg font-extrabold leading-tight text-white z-10">
              Empowering Villages. Transforming Lives.
            </p>
            <p className="absolute bottom-4 left-4 max-w-[240px] text-[11px] text-white/70 z-10">
              We are more than a platform — we are a movement dedicated to
              building self-reliant rural India through technology, trust and
              opportunities.
            </p>
          </div>

          <ul className="space-y-4">
            {IMPACT_LIST.map(({ icon: Icon, title, sub }) => (
              <li key={title} className="flex gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-light text-brand-green">
                  <Icon className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-sm font-bold text-brand-dark">{title}</p>
                  <p className="text-[11px] text-gray-500">{sub}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="grid grid-cols-2 gap-4 rounded-xl bg-brand-light/70 p-5">
            {IMPACT_STATS.map((s) => (
              <div key={s.label}>
                <p className="text-xl font-extrabold text-brand-dark">{s.value}</p>
                <p className="text-[10px] text-gray-500">{s.label}</p>
              </div>
            ))}
            <button className="col-span-2 mt-2 text-xs font-semibold text-brand-green">
              View More Impact →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
