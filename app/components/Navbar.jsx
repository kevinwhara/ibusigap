"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest(".mobile-menu") && !event.target.closest(".menu-toggle")) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const navLinks = [
    { href: "/dashboard", label: "Beranda" },
    { href: "/cek-gizi", label: "Cek Gizi" },
    { href: "/cek-kesehatan", label: "Cek Kesehatan" },
    { href: "/cek-masalah", label: "Cek Gangguan" },
  ];

  return (
    <>
      <header className={`sticky top-0 z-50 w-full border-b ${isScrolled ? "border-[#f4e6eb] bg-white/95 backdrop-blur-lg" : "border-[#f4e6eb]/50 bg-white/80 backdrop-blur-md"} transition-all duration-300`}>
        <div className="flex h-16 items-center justify-between px-4 md:px-10 max-w-7xl mx-auto w-full">
          {/* Logo */}
          <div className="flex items-center gap-3 md:gap-4">
            <div className="w-8 h-8 text-[#ff4284] relative">
              <Image
                src="/images/logo.svg"
                alt="Logo IbuSIGAP"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <h2 className="text-lg font-bold text-gray-800">IbuSIGAP</h2>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-[#ff4284] transition-colors duration-200 cursor-pointer px-2 py-1 rounded-md hover:bg-pink-50"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            className="menu-toggle md:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`mobile-menu md:hidden fixed inset-x-0 top-16 bg-white border-b border-[#f4e6eb] transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-96 opacity-100 visible"
              : "max-h-0 opacity-0 invisible"
          } overflow-hidden`}
        >
          <div className="px-6 py-5 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium text-gray-800 hover:text-[#ff4284] py-3 px-4 rounded-lg hover:bg-pink-50 transition-all duration-200 border-b border-gray-100 last:border-b-0"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            {/* Additional mobile-only elements if needed */}
            <div className="pt-4 mt-2 border-t border-gray-100">
              <div className="text-xs text-gray-500 px-4">
                IbuSIGAP - Platform kesehatan ibu dan anak
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/20 z-40 top-16"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
}