import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "/src/assets/images/KSMCM LOGO.png";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About us", href: "#about" },
  { label: "Services", href: "#services", hasDropdown: true },
  { label: "Impact", href: "#impact" },
  { label: "Partners", href: "#partners" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 ">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5 bg-red">
        <a href="#home" className="flex items-center gap-2 bg-yellow -mt-5">
          <img src={logo} alt="KSMCM Logo" className="h-40 w-auto" />
        </a>

        <ul className="hidden lg:flex items-center gap-8 text-sm font-medium text-green mb-10">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="flex items-center gap-1 hover:text-brand-light transition-colors"
              >
                {link.label}
                {link.hasDropdown && <ChevronDown className="h-3.5 w-3.5" />}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-1 text-sm text-white/90 mb-10">
          <span>ENG</span>
          <ChevronDown className="h-3.5 w-3.5" />
        </div>

        <button
          className="lg:hidden text-white"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-brand-dark/95 px-6 py-4">
          <ul className="flex flex-col gap-4 text-white text-sm font-medium">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
