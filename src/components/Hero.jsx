import {
  ShoppingCart,
  Stethoscope,
  Scale,
  Users,
  CreditCard,
  Receipt,
  Package,
  Home as HomeIcon,
  UserRound,
  Clock,
} from "lucide-react";
import bgImage from "../images/2.png";

const ORBIT_ITEMS = [
  { icon: ShoppingCart, title: "Smart Mart", sub: "10,000+ Products", pos: "top-[-14%] left-1/2 -translate-x-1/2" },
  { icon: Scale, title: "Legal Services", sub: "Expert Legal Guidance", pos: "top-[14%] right-[-18%]" },
  { icon: Receipt, title: "Digital Services", sub: "Govt & Utility Services", pos: "bottom-[14%] right-[-18%]" },
  { icon: CreditCard, title: "Credit Facility", sub: "Buy Now Pay Later", pos: "bottom-[-14%] left-1/2 -translate-x-1/2" },
  { icon: Users, title: "Women Empowerment", sub: "Entrepreneur Opportunities", pos: "bottom-[14%] left-[-22%]" },
  { icon: Stethoscope, title: "Healthcare", sub: "Doctor Consultation", pos: "top-[14%] left-[-22%]" },
];

const STATS = [
  { icon: Package, value: "10,000+", label: "Products Available" },
  { icon: HomeIcon, value: "500+", label: "Villages Connected" },
  { icon: UserRound, value: "50,000+", label: "Explore Ecosystem" },
  { icon: Clock, value: "24/7", label: "Quick Delivery" },
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden text-white">
      {/* backdrop with background image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${bgImage})`}} />
      <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/60 via-[#173a24]/60 to-[#3a2c14]/60" />

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-16 lg:pt-40">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left copy */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
              India's Leading Rural Commerce & Services Ecosystem
            </span>

            <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold leading-tight">
              Empowering
              <br />
              Rural India Through
              <br />
              <span className="text-brand-green">Commerce, </span>
              <span className="text-brand-orange">Technology &</span>
              <br />
              <span className="text-brand-green">Opportunity</span>
            </h1>

            <p className="mt-6 max-w-md text-sm text-white/70">
              Delivering 10,000+ products, healthcare, legal support, digital
              services, and employment opportunities to every village
              household.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button className="rounded-lg bg-brand-orange px-5 py-3 text-sm font-semibold shadow-lg shadow-brand-orange/20 hover:brightness-110 transition">
                Become a Partner
              </button>
              <button className="rounded-lg bg-brand-blue px-5 py-3 text-sm font-semibold shadow-lg shadow-brand-blue/20 hover:brightness-110 transition">
                Join our Mission
              </button>
              <button className="rounded-lg bg-brand-green px-5 py-3 text-sm font-semibold shadow-lg shadow-brand-green/20 hover:brightness-110 transition">
                Explore Ecosystem →
              </button>
            </div>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 rounded-xl bg-black/25 p-4 backdrop-blur">
              {STATS.map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-green/30">
                    <Icon className="h-4 w-4 text-brand-green" />
                  </span>
                  <div className="leading-tight">
                    <p className="text-sm font-bold">{value}</p>
                    <p className="text-[10px] text-white/60">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right ecosystem wheel */}
          <div className="relative mx-auto hidden aspect-square w-full max-w-md md:block">
            <div className="absolute inset-8 rounded-full border border-dashed border-white/25" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-40 w-40 flex-col items-center justify-center rounded-full bg-white text-center text-brand-dark shadow-2xl">
                <Leaf01 />
                <p className="mt-1 text-xs font-bold leading-tight">KSMCM<br />INDUSTRIES</p>
                <p className="mt-1 text-[9px] text-gray-500">Rural Commerce<br />Ecosystem</p>
              </div>
            </div>

            {ORBIT_ITEMS.map(({ icon: Icon, title, sub, pos }) => (
              <div
                key={title}
                className={`absolute ${pos} w-36 rounded-xl bg-white px-3 py-2 text-brand-dark shadow-xl`}
              >
                <div className="flex items-center gap-2">
                  <Icon className="h-4 w-4 text-brand-green" />
                  <p className="text-[11px] font-bold leading-tight">{title}</p>
                </div>
                <p className="mt-0.5 text-[9px] text-gray-500">{sub}</p>
              </div>
            ))}
          </div>
        </div>

        <blockquote className="mt-16 rounded-xl bg-white/10 px-6 py-4 text-center text-sm italic backdrop-blur">
          "Empowering every village with{" "}
          <span className="font-semibold text-brand-green not-italic">
            technology, trust, and opportunity
          </span>
          "
          <footer className="mt-1 text-xs text-white/60 not-italic">
            — KSMCM Industries
          </footer>
        </blockquote>
      </div>
    </section>
  );
}

function Leaf01() {
  return (
    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-light">
      <span className="h-3 w-3 rounded-full bg-brand-green" />
    </span>
  );
}