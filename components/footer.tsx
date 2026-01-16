import Link from "next/link";
import { Twitter, Linkedin, Youtube, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#D7F20F] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* CTA Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-center gap-6 mb-20">
          <div>
            <p className="text-sm text-center md:text-left md:text uppercase tracking-tighter text-black/50 mb-2 leading-tight">
              If you&apos;d like to talk about
              <br />
              your project, get in touch
            </p>
            <a
              href="mailto:reachout@cuebec.com"
              className="text-2xl md:text-4xl font-semibold text-black underline underline-offset-4 hover:no-underline transition-all"
            >
              reachout@cuebec.com
            </a>
          </div>
          <Link
            href="mailto:reachout@cuebec.com"
            className="px-6 py-3 bg-black text-[#D7F20F] text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            Send us an email
          </Link>
        </div>

        {/* Divider */}
        <div className="h-px bg-black/20 mb-20"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Social Links */}
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="text-black hover:text-black/70 transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              className="text-black hover:text-black/70 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              className="text-black hover:text-black/70 transition-colors"
            >
              <Youtube className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              className="text-black hover:text-black/70 transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
              </svg>
            </Link>
            <Link
              href="#"
              className="text-black hover:text-black/70 transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </Link>
          </div>

          {/* Address */}
          <div className="flex items-center gap-2 text-sm">
            <span className="text-lg">📍</span>
            <span className="text-black">
              10, Hughes Avenue, Alagomeji, Yaba, Nigeria
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
