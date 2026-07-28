"use client";

import { useState } from "react";

const faqData = [
  {
    num: "01",
    question: "What exactly do HanumaDakshita Creators do?",
    answer: "We are a full-service creative agency specializing in premium Graphic Designing (brand identity, logos, packaging, social media posters) and short-form Video Production (reels, event coverages, commercial edits). We handle everything from concept to delivery."
  },
  {
    num: "02",
    question: "How fast is your project turnaround time?",
    answer: "We offer express same-day delivery for short-form reels and urgent social media campaign poster designs. For complete brand identity suites and packaging projects, standard timelines range from 2 to 5 business days."
  },
  {
    num: "03",
    question: "What is your revision policy during drafts?",
    answer: "Your satisfaction is our primary goal. We offer unlimited draft revisions during the conceptual phase of all branding and graphic design projects, ensuring the final visual asset aligns perfectly with your brand identity."
  },
  {
    num: "04",
    question: "In what formats do you deliver graphic files?",
    answer: "We deliver files in crystal-clear high-resolution 300 DPI print-ready formats (PDF, vector AI, EPS, SVG, and PSD layers) as well as optimized 4K digital assets (PNG, JPG, MP4) for your website, apps, and socials."
  },
  {
    num: "05",
    question: "How do we get started and book a project?",
    answer: "Simply tap any of the 'Book Now' or WhatsApp buttons on our website. Our creative coordinators will connect with you immediately to discuss your guidelines, set timelines, and get your project running!"
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-24 bg-transparent text-white relative z-10 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-xs font-bold uppercase tracking-widest text-primary mb-6 shadow-md">
          <span>✨</span> FAQ
        </div>

        {/* Stacked Heading */}
        <h2 className="font-heading font-bold leading-[1.05] tracking-tight text-4xl sm:text-5xl md:text-6xl">
          <span className="block text-white">Quick answers</span>
          <span className="block bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent mt-1">
            before you book
          </span>
        </h2>

        <p className="mt-4 font-sans text-base sm:text-lg text-white/60 max-w-xl mx-auto leading-relaxed">
          Everything most people ask before they book. Need something not listed here? Drop us a line.
        </p>

        {/* FAQ Accordion List */}
        <div className="mt-16 flex flex-col gap-4 text-left">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`group rounded-3xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-primary/50 bg-[#081e14]/30 shadow-[0_15px_30px_rgba(56,189,248,0.05)]"
                    : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]"
                }`}
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-6 sm:p-8 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4 sm:gap-6 pr-4">
                    {/* Index Number */}
                    <span className={`font-mono text-xs sm:text-sm font-bold ${isOpen ? "text-primary" : "text-white/40"}`}>
                      {item.num}
                    </span>
                    {/* Question */}
                    <h3 className={`font-sans font-bold text-sm sm:text-base md:text-lg transition-colors duration-300 ${
                      isOpen ? "text-primary" : "text-white group-hover:text-primary"
                    }`}>
                      {item.question}
                    </h3>
                  </div>

                  {/* Circle Arrow Icon */}
                  <div className={`size-10 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    isOpen
                      ? "border-primary bg-primary text-black"
                      : "border-white/15 bg-white/5 text-white group-hover:border-primary group-hover:text-primary"
                  }`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    >
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </div>
                </button>

                {/* Accordion Content Box */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 sm:px-8 pb-6 sm:pb-8 pl-10 sm:pl-14 text-xs sm:text-sm md:text-base leading-relaxed text-white/70 font-sans">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
