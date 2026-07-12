import { Download, Handshake, Users, Share2, Camera, Video, Link2, MessageCircle } from "lucide-react";
import qrCode from "../images/Q.png";
import phoneImage from "../images/WhatsApp Image 2026-07-12 at 11.35.34 AM.jpeg";

const SOCIAL = [Share2, Camera, Video, Link2, MessageCircle];

export default function DownloadSection() {
  return (
    <section id="partners" className="py-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid gap-8 rounded-2xl bg-brand-dark p-8 text-white lg:grid-cols-3 items-center">
          <div>
            <h3 className="text-2xl font-extrabold leading-tight">
              Be a Part of a Digital Revolution
              <br />
              <span className="text-brand-green">That Empowers Rural India</span>
            </h3>
            <p className="mt-3 text-xs text-white/70 max-w-sm">
              Join millions of families who trust KSMCM Industries for their
              daily needs and essential services.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <button className="flex items-center gap-2 rounded-lg bg-brand-green px-4 py-2.5 text-xs font-semibold">
                <Download className="h-3.5 w-3.5" /> Download App
              </button>
              <button className="flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2.5 text-xs font-semibold">
                <Handshake className="h-3.5 w-3.5" /> Become a Partner
              </button>
              <button className="flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2.5 text-xs font-semibold">
                <Users className="h-3.5 w-3.5" /> Join Our Mission
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="h-52 w-32 rounded-2xl border-4 border-white/20 bg-white/5 overflow-hidden">
              <img src={phoneImage} alt="Phone Mockup" className="h-full w-full object-cover" />
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold">Scan to Download</p>
            <div className="mt-2 flex items-center gap-4">
              <div className="h-20 w-20 rounded-md bg-white p-1 overflow-hidden">
                <img src={qrCode} alt="QR Code" className="h-full w-full object-cover" />
              </div>
              <div className="space-y-1 text-[10px] text-white/70">
                <p>Also available on</p>
                <p className="font-semibold text-white">Google Play &amp; App Store</p>
              </div>
            </div>

            <p className="mt-5 text-sm font-semibold">Stay Connected</p>
            <div className="mt-2 flex gap-3">
              {SOCIAL.map((Icon, i) => (
                <span
                  key={i}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10"
                >
                  <Icon className="h-3.5 w-3.5" />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
