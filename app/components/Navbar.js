'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b-4 border-orange-500 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Hanumadakshita Creators Logo"
              width={50}
              height={50}
              className="object-contain"
            />
            <div>
              <a href="/" className="text-sky-700 text-xl font-bold block">
                Hanumadakshita Creators
              </a>
              <p className="text-orange-600 text-xs font-semibold">Empowered by Devotion, Perfected in Creation!</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            <a
              href="#services"
              className="text-sky-700 hover:text-orange-600 transition duration-300 font-medium"
            >
              Services
            </a>
            <a
              href="#portfolio"
              className="text-sky-700 hover:text-orange-600 transition duration-300 font-medium"
            >
              Portfolio
            </a>
            <a
              href="/about"
              className="text-sky-700 hover:text-orange-600 transition duration-300 font-medium"
            >
              About
            </a>
            <a
              href="#contact"
              className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition duration-300 font-bold"
            >
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-sky-700 hover:text-orange-600 focus:outline-none"
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <a
              href="#services"
              className="block text-sky-700 hover:bg-sky-100 px-3 py-2 rounded transition duration-300"
            >
              Services
            </a>
            <a
              href="#portfolio"
              className="block text-sky-700 hover:bg-sky-100 px-3 py-2 rounded transition duration-300"
            >
              Portfolio
            </a>
            <a
              href="#about"
              className="block text-sky-700 hover:bg-sky-100 px-3 py-2 rounded transition duration-300"
            >
              About
            </a>
            <a
              href="#contact"
              className="block bg-orange-500 text-white px-3 py-2 rounded font-bold hover:bg-orange-600 transition duration-300"
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
