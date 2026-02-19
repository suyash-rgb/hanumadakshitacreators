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

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass py-2 shadow-sm' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Hanumadakshita Creators"
              width={45}
              height={45}
              className="object-contain"
            />
            <div className="hidden sm:block">
              <a href="/" className={`text-xl font-black tracking-tighter ${scrolled ? 'text-secondary' : 'text-primary'}`}>
                HanumaDakshita Creators
              </a>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1 items-center">
            {['Services', 'Portfolio', 'About'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="px-4 py-2 text-sm font-semibold text-foreground hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-4 bg-primary text-white px-6 py-2 rounded-full font-bold text-sm tracking-tight hover:shadow-lg transition-all active:scale-95"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-foreground"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-64 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
          <div className="glass rounded-2xl p-4 space-y-2 mb-4">
            {['Services', 'Portfolio', 'About'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-sm font-semibold hover:bg-primary/10 rounded-lg"
              >
                {item}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block bg-primary text-white px-4 py-3 rounded-xl font-bold text-center"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
