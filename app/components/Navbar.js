'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '#about' },
    { label: 'Design', href: '#graphic-design' },
    { label: 'Reels', href: '#portfolio' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];

  const whatsappUrl =
    "https://wa.me/916267121751?text=Hi%20HanumaDakshita%20Creators%2C%20I'd%20like%20to%20book%20a%20reels%20shoot!";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass py-3 shadow-md' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="flex items-center group">
              <div className="relative w-44 sm:w-56 md:w-64 h-11 md:h-12 transition-transform duration-500 group-hover:scale-105">
                <Image
                  src="/textlogo.png"
                  alt="HanumaDakshita Creators Logo"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-2 text-sm font-semibold text-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}

            {/* Pre-filled WhatsApp CTA Button matching Reelrr */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 group relative inline-flex items-center gap-2 rounded-full bg-primary text-white px-6 py-3 text-sm font-bold tracking-tight shadow-md hover:shadow-[0_20px_40px_-10px_rgba(249,115,22,0.6)] transition-all duration-300 active:scale-95"
            >
              <span>Book Now</span>
              <span className="inline-flex items-center justify-center rounded-full bg-white/20 p-1 transition-transform duration-500 group-hover:rotate-45">
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M7 7h10v10M7 17L17 7"
                  />
                </svg>
              </span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-foreground rounded-lg hover:bg-primary/10 transition-colors"
              aria-label="Toggle navigation menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? 'max-h-80 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="glass rounded-2xl p-4 space-y-2 mb-4 border border-white/10 shadow-xl">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-base font-semibold hover:bg-primary/10 rounded-xl transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="mt-2 group flex items-center justify-center gap-2 bg-primary text-white px-4 py-3.5 rounded-xl font-bold text-center shadow-lg active:scale-95 transition-all"
            >
              <span>Book Now</span>
              <span className="inline-flex items-center justify-center rounded-full bg-white/20 p-1 transition-transform duration-500 group-hover:rotate-45">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M7 7h10v10M7 17L17 7"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
