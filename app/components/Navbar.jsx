"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation"; // 1. Import hook sakti

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname(); // 2. Ambil path URL sekarang

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside/scrolling logic tetap sama...
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest(".mobile-menu") && !event.target.closest(".menu-toggle")) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
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
              <Image src="/images/logo.svg" alt="Logo IbuSIGAP" width={32} height={32} className="object-contain" />
            </div>
            <h2 className="text-lg font-bold text-gray-800">IbuSIGAP</h2>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href; // 3. Cek apakah link ini yang lagi dibuka
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-all duration-200 cursor-pointer px-3 py-2 rounded-md ${
                    isActive
                      ? "text-[#ff4284] bg-pink-50" // Style kalau AKTIF
                      : "text-gray-700 hover:text-[#ff4284] hover:bg-pink-50" // Style kalau BIASA
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            className="menu-toggle md:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`mobile-menu md:hidden fixed inset-x-0 top-16 bg-white border-b border-[#f4e6eb] transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-96 opacity-100 visible" : "max-h-0 opacity-0 invisible"} overflow-hidden`}>
          <div className="px-6 py-5 flex flex-col space-y-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href; // 4. Cek aktif buat versi mobile juga
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-base font-medium py-3 px-4 rounded-lg transition-all duration-200 ${
                    isActive
                      ? "text-[#ff4284] bg-pink-50 border-l-4 border-[#ff4284]"
                      : "text-gray-800 hover:text-[#ff4284] hover:bg-pink-50"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </header>

      {/* Overlay for mobile menu */}
      {isMenuOpen && <div className="md:hidden fixed inset-0 bg-black/20 z-40 top-16" onClick={() => setIsMenuOpen(false)} />}
    </>
  );
}