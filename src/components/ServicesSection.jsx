import { ShoppingBasket, Smartphone, Stethoscope, Scale, Wallet } from "lucide-react";
import smartMart from "/src/assets/images/smart-mart.jpeg";
import electronics from "/src/assets/images/electronics.jpeg";
import healthcare from "/src/assets/images/medical-care.jpeg";
import legal from "/src/assets/images/legal-service.jpeg";
import CreditCard from "/src/assets/images/wallet.jpg";


const SERVICES = [
  { icon: ShoppingBasket, title: "Smart Mart", sub: "Groceries & daily essentials delivered within 12 hours", cta: "Shop Now", color: "text-brand-green", image: smartMart },
  { icon: Smartphone, title: "Electronics", sub: "Mobiles, laptops, appliances & more delivered in 24 hours", cta: "Explore", color: "text-purple-500", image: electronics },
  { icon: Stethoscope, title: "Health Care", sub: "Online doctor consultation & health services at your fingertips", cta: "Consult Now", color: "text-blue-500", image: healthcare },
  { icon: Scale, title: "Legal Services", sub: "Expert legal guidance & consultation online", cta: "Get Help", color: "text-orange-500", image: legal },
  { icon: Wallet, title: "Credit Facility", sub: "Buy now, pay later with our flexible monthly credit", cta: "Explore", color: "text-teal-500", image: CreditCard },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-brand-light/40 py-5">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-xs font-bold tracking-[0.25em] text-brand-green">
          — OUR SERVICES AT A GLANCE —
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {SERVICES.map(({ icon: Icon, title, sub, cta, color, image }) => (
            <div
              key={title}
              className="flex flex-col justify-between rounded-2xl bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg overflow-hidden"
            >
              <div className="relative h-32 w-full mb-3 rounded-lg bg-gray-100 overflow-hidden">
                <img src={image} alt={title} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-black/30" />
              </div>
              <div>
                <Icon className={`h-6 w-6 ${color}`} />
                <p className="mt-3 text-sm font-bold text-brand-dark">{title}</p>
                <p className="mt-1 text-[11px] text-gray-500">{sub}</p>
              </div>
              <button className="mt-6 self-start text-xs font-semibold text-brand-green">
                {cta} →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
