import { Check, ShieldCheck, Lock, Fingerprint, Truck, Clock3, Layers, TrendingUp } from "lucide-react";
import phoneImages from "../images/WhatsApp Image 2026-07-12 at 11.35.34 AM (1).jpeg";

const STRIP = [
  { icon: Truck, value: "10,000+", label: "Products Available Across Categories" },
  { icon: Clock3, value: "12 Hours", label: "Grocery Delivery Promise" },
  { icon: Clock3, value: "24 Hours", label: "Electronics Delivery Promise" },
  { icon: Layers, value: "Multiple", label: "Service Categories In One Platform" },
  { icon: TrendingUp, value: "Growing", label: "Across 500+ Villages And Counting" },
];

const FEATURES = [
  "Wide range of quality products",
  "Expert consultations from anywhere",
  "Affordable pricing with credit options",
  "Local support you can always rely on",
];

const SECURITY = [
  { icon: Lock, title: "Secure Payments", sub: "100% safe & encrypted" },
  { icon: ShieldCheck, title: "Trusted Partners", sub: "Verified & background checked" },
  { icon: Fingerprint, title: "Privacy Protection", sub: "Your data is always safe" },
];

export default function PlatformSection() {
  return (
    <section className="bg-brand-light/40 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 gap-3 rounded-2xl bg-white p-4 shadow-sm sm:grid-cols-5">
          {STRIP.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex items-center gap-2 px-2 py-1">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-light">
                <Icon className="h-4 w-4 text-brand-green" />
              </span>
              <div className="leading-tight">
                <p className="text-xs font-bold text-brand-dark">{value}</p>
                <p className="text-[9px] text-gray-500">{label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <p className="text-xs font-bold tracking-[0.2em] text-brand-green">
              EVERYTHING YOU NEED, IN ONE PLACE
            </p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-brand-dark">
              One Platform.
              <br />
              <span className="text-brand-green">Many Solutions.</span>
            </h2>
            <p className="mt-4 text-sm text-gray-500">
              KSMCM Industries brings together essential products and
              services that make life simpler, healthier and better for rural
              families and communities.
            </p>
            <ul className="mt-6 space-y-3">
              {FEATURES.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-brand-dark">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-green text-white">
                    <Check className="h-3 w-3" />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* phone mockup placeholder */}
          <div className="flex justify-center">
            <div className="relative h-[420px] w-[220px] rounded-[2rem] border-8 border-brand-dark bg-gradient-to-b from-brand-green to-brand-dark p-4 shadow-2xl overflow-hidden">
              <img src={phoneImages} alt="KSMCM App" className="h-full w-full object-cover rounded-lg" />
            </div>
          </div>

          <div className="rounded-2xl bg-brand-light/70 p-6">
            <p className="text-xs font-bold tracking-[0.15em] text-brand-green">
              SAFE. SECURE. RELIABLE.
            </p>
            <p className="mt-2 text-sm text-gray-600">
              Your security is our priority. We use advanced technology to
              protect your data and ensure safe transactions.
            </p>
            <div className="mt-5 space-y-4">
              {SECURITY.map(({ icon: Icon, title, sub }) => (
                <div key={title} className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-brand-green shadow-sm">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div className="leading-tight">
                    <p className="text-sm font-bold text-brand-dark">{title}</p>
                    <p className="text-[11px] text-gray-500">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
