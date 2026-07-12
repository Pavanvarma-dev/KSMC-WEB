import { MapPin, ShieldCheck, Headphones, Check } from "lucide-react";
import trustImage from "/src/assets/images/ksmc-delivery.jpeg";

const POINTS = [
  "Real-time order tracking",
  "Secure digital payments",
  "24/7 customer support",
  "Easy returns & refunds",
];

const CARDS = [
  { icon: MapPin, title: "Live Tracking", sub: "Track your order in real-time." },
  { icon: ShieldCheck, title: "Secure Payments", sub: "100% secure transactions with trusted gateways." },
  { icon: Headphones, title: "24/7 Support", sub: "Our support team is always here for you." },
];

export default function TrustDeliverySection() {
  return (
    <section className="bg-white py-5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr_1fr] items-center">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-brand-green">
              DELIVERING TRUST, EVERY STEP
            </p>
            <h2 className="mt-3 text-2xl font-extrabold leading-tight text-brand-dark">
              Built on Trust.
              <br />
              <span className="text-brand-green">Backed by Technology.</span>
            </h2>
            <p className="mt-3 text-sm text-gray-500">
              Our advanced technology ensures transparency, real-time
              tracking, secure payments and a seamless experience for every
              village household.
            </p>
            <ul className="mt-5 space-y-2">
              {POINTS.map((p) => (
                <li key={p} className="flex items-center gap-2 text-sm text-brand-dark">
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-brand-green text-white">
                    <Check className="h-2.5 w-2.5" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative h-56 rounded-2xl bg-gradient-to-br from-brand-green to-brand-dark overflow-hidden">
            <img src={trustImage} alt="Delivery Truck" className="h-full w-full object-cover" />
          </div>

          <div className="grid gap-4">
            {CARDS.map(({ icon: Icon, title, sub }) => (
              <div key={title} className="flex items-center gap-3 rounded-xl border border-gray-100 p-4 shadow-sm">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-light text-brand-green">
                  <Icon className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-sm font-bold text-brand-dark">{title}</p>
                  <p className="text-[11px] text-gray-500">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
