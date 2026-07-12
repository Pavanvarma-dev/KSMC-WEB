import { ShieldCheck, Award, Users2, Handshake, Star, Target } from "lucide-react";
import badge1 from "../images/1.png";
import badge2 from "../images/2.png";
import badge3 from "../images/4.png";
import badge4 from "../images/5.png";
import badge5 from "../images/6.png";

const BADGES = [
  { name: "MSME", tag: "MSME Registered", image: badge1 },
  { name: "Startup India", tag: "Startup India Recognized", image: badge2 },
  { name: "Digital India", tag: "Digital India Supported", image: badge3 },
  { name: "Women Empowerment", tag: "Women Empowerment Initiative", image: badge4 },
  { name: "NITI Aayog", tag: "NITI Aayog Partner", image: badge5 },
  { name: "GeM", tag: "GeM Registered Seller", image: badge1 },
  { name: "Azadi Ka Amrit Mahotsav", tag: "Proud to be Part of New India", image: badge2 },
];

const PILLARS = [
  { icon: ShieldCheck, title: "100% Compliant", sub: "We follow all government guidelines and regulations." },
  { icon: Award, title: "Verified & Certified", sub: "All registrations and documents are verified and authentic." },
  { icon: Users2, title: "Community Focused", sub: "Aligned with national goals for rural development." },
  { icon: Handshake, title: "Trusted by Partners", sub: "Building strong partnerships for a stronger tomorrow." },
  { icon: Star, title: "Commitment to Impact", sub: "Every recognition inspires us to do more for Bharat." },
  { icon: Target, title: "Driven by Purpose", sub: "Our purpose is to empower every village in India." },
];

export default function TrustSection() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-xs font-bold tracking-[0.25em] text-brand-green">
          TRUST &amp; RECOGNITION
        </p>
        <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-brand-dark">
          Recognized. Trusted. Committed{" "}
          <span className="text-brand-green">to Rural India.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-500">
          KSMCM Industries is proudly recognized by government bodies and
          organizations that share our vision of building a digitally
          empowered rural India.
        </p>

        <div className="mt-12 flex gap-4 overflow-x-auto pb-2 [scrollbar-width:none]">
          {BADGES.map((b) => (
            <div
              key={b.name}
              className="flex min-w-[150px] flex-1 flex-col items-center justify-between gap-3 rounded-xl border border-gray-100 bg-white px-4 py-6 shadow-sm"
            >
              <img src={b.image} alt={b.name} className="h-12 w-12 object-contain" />
              <p className="flex items-center gap-1 text-[10px] font-medium text-brand-green">
                <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-brand-green text-white text-[8px]">
                  ✓
                </span>
                {b.tag}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
          {PILLARS.map(({ icon: Icon, title, sub }) => (
            <div key={title} className="flex flex-col items-center px-3 text-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-light">
                <Icon className="h-5 w-5 text-brand-green" />
              </span>
              <p className="mt-3 text-sm font-bold text-brand-dark">{title}</p>
              <p className="mt-1 text-[11px] text-gray-500">{sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
