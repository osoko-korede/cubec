"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Updated to use Next.js routing instead of state
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Work", href: "/work" },
    { label: "Contact", href: "/contact" },
    { label: "Services", href: "/services" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50  px-6 py-4 pt-6 bg-[#0a0a0a]/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="cubec-logo.svg"
              alt="3D metallic cube"
              width={40}
              height={40}
              className="object-contain"
            />
          </Link>
          {/* Hamburger menu now visible on all screens */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className=""
          >
            {isMobileMenuOpen ? (
              <X className="w-10 h-10 text-white" />
            ) : (
              <Menu className="w-10 h-10 text-white" />
            )}
          </button>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 z-45 h-full w-100 md:w-150 lg:w-200 bg-[#0a0a0a] transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col pt-24 px-10 md:px-20">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`py-10 text-left text-3xl transition-colors font-light uppercase ${
                isActive(item.href)
                  ? "text-primary"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
