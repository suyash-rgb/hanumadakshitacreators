"use client";

import { useState } from "react";

const reviews = [
  {
    name: "Sneha Mehra",
    role: "Fashion Brand Owner",
    text: "Their social media posters boosted our sales by 40% in a month. Fast and stunning designs!",
    stars: 5,
    avatar: "👩‍💼"
  },
  {
    name: "Rahul Jain",
    role: "Fashion Shoot",
    text: "Quick, professional, and the edit was sharper than agencies I've paid 10x for.",
    stars: 5,
    avatar: "🧔"
  },
  {
    name: "Atul Sahdup",
    role: "Wedding / Event Client",
    text: "Our wedding reel hit 210k views in 24 hours. The guests were absolutely in awe!",
    stars: 5,
    avatar: "👨"
  },
  {
    name: "Priya Pandey",
    role: "Startup Founder",
    text: "From branding guidelines to packing vector files, they delivered everything flawlessly.",
    stars: 5,
    avatar: "👩"
  },
  {
    name: "Vikram Rathore",
    role: "Local Business Owner",
    text: "Festival graphics delivered in under 12 hours. They are our go-to creative team now.",
    stars: 5,
    avatar: "👨‍💼"
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(2); // Start centered

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marquee-left 40s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 40s linear infinite;
        }
      `}</style>

      {/* -------------------------------------------------------------
          OPTION 1: Centered Fanned-Out Card Deck Carousel (Reelrr Style)
          ------------------------------------------------------------- */}
      <section id="testimonials-deck" className="py-24 bg-transparent text-white relative z-10 overflow-hidden border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-xs font-bold uppercase tracking-widest text-primary mb-6">
            <span>✨</span> CLIENT LOVE (OPTION A)
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-4">
            What our clients say
          </h2>
          <p className="text-base sm:text-lg text-white/60 max-w-xl mx-auto mb-16">
            A fanned-out interactive stack highlighting real client feedback.
          </p>

          {/* Interactive Card Deck Container */}
          <div className="relative h-[380px] sm:h-[440px] w-full max-w-5xl mx-auto flex items-center justify-center overflow-visible">
            {reviews.map((review, idx) => {
              // Calculate relative distance from the active index wrapping around
              const N = reviews.length;
              let diff = idx - activeIndex;
              if (diff > 2) diff -= N;
              if (diff < -2) diff += N;

              const isActive = diff === 0;

              // Determine exact positioning and rotation for fanning out
              let rotateVal = "0deg";
              let scaleVal = "1";
              let zIndexVal = "0";
              let cardTheme = "";
              let translateClass = "";

              if (diff === 0) {
                // Active Card (Center Focus)
                rotateVal = "0deg";
                scaleVal = "1.05";
                zIndexVal = "30";
                translateClass = "[--translate-x:0%]";
                cardTheme = "opacity-100 bg-[#081f14] border-primary/50 text-white shadow-[0_20px_50px_rgba(56,189,248,0.3)]";
              } else if (diff === -1) {
                // Left Side 1
                rotateVal = "-6deg";
                scaleVal = "0.95";
                zIndexVal = "20";
                translateClass = "[--translate-x:-45%] sm:[--translate-x:-70%]";
                cardTheme = "opacity-90 bg-white border-slate-200 text-slate-800 hover:opacity-100 cursor-pointer shadow-xl";
              } else if (diff === 1) {
                // Right Side 1
                rotateVal = "6deg";
                scaleVal = "0.95";
                zIndexVal = "20";
                translateClass = "[--translate-x:45%] sm:[--translate-x:70%]";
                cardTheme = "opacity-90 bg-white border-slate-200 text-slate-800 hover:opacity-100 cursor-pointer shadow-xl";
              } else if (diff === -2) {
                // Left Side 2 (Outer)
                rotateVal = "-12deg";
                scaleVal = "0.9";
                zIndexVal = "10";
                translateClass = "[--translate-x:-80%] sm:[--translate-x:-130%]";
                cardTheme = "opacity-60 bg-white/95 border-slate-200 text-slate-800 hover:opacity-80 cursor-pointer shadow-md";
              } else if (diff === 2) {
                // Right Side 2 (Outer)
                rotateVal = "12deg";
                scaleVal = "0.9";
                zIndexVal = "10";
                translateClass = "[--translate-x:80%] sm:[--translate-x:130%]";
                cardTheme = "opacity-60 bg-white/95 border-slate-200 text-slate-800 hover:opacity-80 cursor-pointer shadow-md";
              }

              return (
                <div
                  key={idx}
                  onClick={() => !isActive && setActiveIndex(idx)}
                  className={`absolute w-[240px] sm:w-[300px] p-6 sm:p-8 rounded-[28px] border transition-all duration-500 ease-out select-none flex flex-col justify-between h-[280px] sm:h-[330px] ${translateClass} ${cardTheme}`}
                  style={{
                    transform: `translateX(var(--translate-x, 0%)) rotate(${rotateVal}) scale(${scaleVal})`,
                    zIndex: zIndexVal,
                  }}
                >
                  <div className="text-left">
                    {/* Stars and Avatar */}
                    <div className="flex items-center justify-between mb-4 sm:mb-6">
                      <div className={`size-10 rounded-full flex items-center justify-center text-lg ${isActive ? "bg-white/10" : "bg-slate-100"}`}>
                        {review.avatar}
                      </div>
                      <div className="flex gap-0.5 text-primary text-xs">
                        {Array.from({ length: review.stars }).map((_, i) => (
                          <span key={i}>★</span>
                        ))}
                      </div>
                    </div>

                    {/* Review text */}
                    <p className="text-xs sm:text-sm md:text-base leading-relaxed italic font-sans font-medium">
                      &ldquo;{review.text}&rdquo;
                    </p>
                  </div>

                  {/* Client name and role */}
                  <div className={`border-t pt-4 mt-4 ${isActive ? "border-white/10" : "border-slate-200"}`}>
                    <h4 className="font-heading font-bold text-xs sm:text-sm">
                      {review.name}
                    </h4>
                    <p className={`text-[10px] uppercase tracking-wider font-mono mt-0.5 ${isActive ? "text-white/50" : "text-slate-500"}`}>
                      {review.role}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Slider controls */}
          <div className="mt-8 flex items-center justify-center gap-6">
            <button
              onClick={handlePrev}
              className="size-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-black hover:border-primary transition-all duration-300 shadow-md"
              aria-label="Previous review"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6"></path>
              </svg>
            </button>

            {/* Dots navigation */}
            <div className="flex gap-2">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${idx === activeIndex ? "w-8 bg-primary" : "w-2.5 bg-white/20"
                    }`}
                  aria-label={`Go to review ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="size-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-black hover:border-primary transition-all duration-300 shadow-md"
              aria-label="Next review"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          OPTION 2: Live Scrolling Dialogue Clouds (Lively, High-Motion Marquee)
          ------------------------------------------------------------- */}
      <section id="testimonials-clouds" className="py-24 bg-transparent text-white relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-xs font-bold uppercase tracking-widest text-primary mb-6">
            <span>💬</span> LIVE DIALOGUE (OPTION B)
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-4">
            Real-time client reactions
          </h2>
          <p className="text-base sm:text-lg text-white/60 max-w-xl mx-auto mb-16">
            Lively, self-scrolling dialogue clouds highlighting stellar reviews. Hover to pause and read.
          </p>
        </div>

        {/* Outer Scrolling Container */}
        <div className="flex flex-col gap-8 w-full overflow-hidden relative">
          {/* Row 1: Scrolling Left */}
          <div className="relative w-full flex items-center">
            <div className="animate-marquee-left flex gap-6 hover:[animation-play-state:paused] pointer-events-auto">
              {[...reviews, ...reviews].map((review, idx) => (
                <div
                  key={`row1-${idx}`}
                  className="group relative w-[320px] sm:w-[420px] p-8 rounded-[32px] border border-white/10 bg-white/[0.04] backdrop-blur-md transition-all duration-300 hover:border-primary/50 hover:bg-white/[0.08] hover:shadow-[0_20px_50px_rgba(56,189,248,0.2)] flex flex-col justify-between min-h-[220px]"
                >
                  {/* Dialogue Bubble tail */}
                  <div className="absolute -bottom-2.5 left-8 w-5 h-5 bg-black/40 border-r border-b border-white/10 rotate-45 group-hover:border-primary/50 transition-colors"></div>

                  <div className="text-left">
                    {/* Stars and Category */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex gap-0.5 text-primary text-xs">
                        {Array.from({ length: review.stars }).map((_, i) => (
                          <span key={i}>★</span>
                        ))}
                      </div>
                      <span className="text-[10px] text-white/40 uppercase tracking-widest font-mono">
                        {review.role}
                      </span>
                    </div>

                    {/* Review text (Large & bold) */}
                    <p className="text-base sm:text-lg md:text-xl font-bold tracking-tight text-white/95 leading-snug italic font-sans">
                      &ldquo;{review.text}&rdquo;
                    </p>
                  </div>

                  {/* Client name and Avatar */}
                  <div className="border-t border-white/5 pt-4 mt-6 flex items-center justify-between">
                    <span className="font-heading font-bold text-sm text-white/80">
                      {review.name}
                    </span>
                    <span className="text-sm bg-white/10 w-8 h-8 rounded-full flex items-center justify-center">
                      {review.avatar}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Scrolling Right */}
          <div className="relative w-full flex items-center">
            <div className="animate-marquee-right flex gap-6 hover:[animation-play-state:paused] pointer-events-auto">
              {[...reviews, ...reviews].reverse().map((review, idx) => (
                <div
                  key={`row2-${idx}`}
                  className="group relative w-[320px] sm:w-[420px] p-8 rounded-[32px] border border-white/10 bg-white/[0.04] backdrop-blur-md transition-all duration-300 hover:border-primary/50 hover:bg-white/[0.08] hover:shadow-[0_20px_50px_rgba(56,189,248,0.2)] flex flex-col justify-between min-h-[220px]"
                >
                  {/* Dialogue Bubble tail */}
                  <div className="absolute -bottom-2.5 left-8 w-5 h-5 bg-black/40 border-r border-b border-white/10 rotate-45 group-hover:border-primary/50 transition-colors"></div>

                  <div className="text-left">
                    {/* Stars and Category */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex gap-0.5 text-primary text-xs">
                        {Array.from({ length: review.stars }).map((_, i) => (
                          <span key={i}>★</span>
                        ))}
                      </div>
                      <span className="text-[10px] text-white/40 uppercase tracking-widest font-mono">
                        {review.role}
                      </span>
                    </div>

                    {/* Review text (Large & bold) */}
                    <p className="text-base sm:text-lg md:text-xl font-bold tracking-tight text-white/95 leading-snug italic font-sans">
                      &ldquo;{review.text}&rdquo;
                    </p>
                  </div>

                  {/* Client name and Avatar */}
                  <div className="border-t border-white/5 pt-4 mt-6 flex items-center justify-between">
                    <span className="font-heading font-bold text-sm text-white/80">
                      {review.name}
                    </span>
                    <span className="text-sm bg-white/10 w-8 h-8 rounded-full flex items-center justify-center">
                      {review.avatar}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
