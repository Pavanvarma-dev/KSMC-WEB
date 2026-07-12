import { useState } from "react";
import { MapPin, Tag, Star, PackageCheck, Heart, ShieldCheck } from "lucide-react";
import india from "/src/assets/images/india.jpg";

const INTEREST = [
  { icon: Tag, title: "Best Prices", sub: "Competitive prices on all products." },
  { icon: Star, title: "Quality Assured", sub: "100% quality checked products." },
  { icon: PackageCheck, title: "Hassle-free Returns", sub: "Easy returns within 7 days." },
  { icon: Heart, title: "Community First", sub: "We grow when villages grow." },
  { icon: ShieldCheck, title: "Data Privacy", sub: "Your data is safe with us." },
];

export default function AvailabilitySection() {
  const [query, setQuery] = useState("");

  return (
    <section className="bg-white pb-4">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid gap-8 rounded-2xl bg-brand-light/50 p-8 lg:grid-cols-[1fr_1fr_auto] items-center">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-brand-green">
              CHECK AVAILABILITY
            </p>
            <h3 className="mt-2 text-xl font-extrabold text-brand-dark">
              Do We Deliver in
              <br />
              <span className="text-brand-green">Your Area?</span>
            </h3>
            <p className="mt-2 text-xs text-gray-500">
              Enter your village name or Pincode to check service
              availability.
            </p>
            <div className="mt-4 flex overflow-hidden rounded-lg border border-gray-200 bg-white">
              <div className="flex items-center pl-3 text-gray-400">
                <MapPin className="h-4 w-4" />
              </div>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter village name or Pincode"
                className="w-full px-3 py-2.5 text-sm outline-none"
              />
              <button className="whitespace-nowrap bg-brand-dark px-4 text-sm font-semibold text-white">
                Check Now →
              </button>
            </div>
          </div>

          <div className="text-center">
            <p className="text-sm font-semibold text-brand-dark">
              Currently Serving <span className="text-brand-green">500+ Villages</span>
            </p>
            <p className="text-xs text-gray-500">Across 6 States</p>
            <div className="mt-3 mx-auto h-28 w-20 rounded-lg bg-gradient-to-b from-brand-green/30 to-brand-green/60">
                <img src={india} alt="India Map" className="h-full w-full object-cover" />
            </div>
          </div>

          <div className="rounded-xl bg-brand-dark p-5 text-white text-center max-w-[200px]">
            <p className="text-sm font-bold text-brand-green">Expansion in Progress</p>
            <p className="mt-2 text-[11px] text-white/70">
              Bringing services to more villages every month.
            </p>
            <button className="mt-3 text-xs font-semibold text-white">
              See Expansion Plan →
            </button>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-y-8 sm:grid-cols-5">
          {INTEREST.map(({ icon: Icon, title, sub }) => (
            <div key={title} className="flex flex-col items-center px-2 text-center">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-light text-brand-green">
                <Icon className="h-5 w-5" />
              </span>
              <p className="mt-2 text-xs font-bold text-brand-dark">{title}</p>
              <p className="mt-1 text-[10px] text-gray-500">{sub}</p>
              <a href="#" className="mt-1 text-[10px] font-semibold text-brand-green">
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
