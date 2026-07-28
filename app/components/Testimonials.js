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
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-8px) scale(1.01); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-12px) scale(0.99); }
        }
        .animate-float-1 { animation: float-slow 6s ease-in-out infinite; }
        .animate-float-2 { animation: float-medium 7s ease-in-out infinite 0.5s; }
        .animate-float-3 { animation: float-slow 8s ease-in-out infinite 1s; }
        .animate-float-4 { animation: float-medium 5s ease-in-out infinite 1.5s; }
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
          <div className="relative h-[380px] sm:h-[420px] max-w-lg mx-auto flex items-center justify-center">
            {reviews.map((review, idx) => {
              // Calculate offset from active index
              const offset = idx - activeIndex;
              const isActive = idx === activeIndex;
              const isPrev = idx === (activeIndex === 0 ? reviews.length - 1 : activeIndex - 1);
              const isNext = idx === (activeIndex === reviews.length - 1 ? 0 : activeIndex + 1);

              // Determine visibility and fanned styling
              let transformStyles = "";
              let zIndex = "z-0";
              let opacity = "opacity-0 pointer-events-none scale-75";

              if (isActive) {
                transformStyles = "translate-x-0 rotate-0 scale-105";
                zIndex = "z-30";
                opacity = "opacity-100 bg-black/85 border-primary/50 text-white shadow-[0_20px_40px_rgba(56,189,248,0.25)]";
              } else if (isPrev) {
                transformStyles = "-translate-x-[20%] sm:-translate-x-[35%] -rotate-6 scale-90";
                zIndex = "z-20";
                opacity = "opacity-40 bg-white/5 border-white/10 text-white/50 hover:opacity-60 cursor-pointer";
              } else if (isNext) {
                transformStyles = "translate-x-[20%] sm:translate-x-[35%] rotate-6 scale-90";
                zIndex = "z-20";
                opacity = "opacity-40 bg-white/5 border-white/10 text-white/50 hover:opacity-60 cursor-pointer";
              } else if (idx === (activeIndex <= 1 ? reviews.length - 2 + activeIndex : activeIndex - 2)) {
                transformStyles = "-translate-x-[40%] sm:-translate-x-[60%] -rotate-12 scale-80";
                zIndex = "z-10";
                opacity = "opacity-10 bg-white/5 border-white/10 text-white/20";
              } else {
                transformStyles = "translate-x-[40%] sm:translate-x-[60%] rotate-12 scale-80";
                zIndex = "z-10";
                opacity = "opacity-10 bg-white/5 border-white/10 text-white/20";
              }

              return (
                <div
                  key={idx}
                  onClick={() => !isActive && setActiveIndex(idx)}
                  className={`absolute w-[260px] sm:w-[320px] p-6 sm:p-8 rounded-[32px] border transition-all duration-500 ease-out select-none flex flex-col justify-between h-[300px] sm:h-[350px] ${opacity} ${zIndex}`}
                  style={{
                    transform: transformStyles,
                  }}
                >
                  <div>
                    {/* Stars and Avatar */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="size-10 rounded-full bg-white/10 flex items-center justify-center text-lg">
                        {review.avatar}
                      </div>
                      <div className="flex gap-0.5 text-primary text-xs">
                        {Array.from({ length: review.stars }).map((_, i) => (
                          <span key={i}>★</span>
                        ))}
                      </div>
                    </div>

                    {/* Review text */}
                    <p className="text-sm sm:text-base leading-relaxed italic opacity-90">
                      &ldquo;{review.text}&rdquo;
                    </p>
                  </div>

                  {/* Client name and role */}
                  <div className="border-t border-white/10 pt-4 mt-4">
                    <h4 className="font-heading font-bold text-sm sm:text-base text-white">
                      {review.name}
                    </h4>
                    <p className="text-xs text-white/50 mt-0.5 uppercase tracking-wider font-mono">
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
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    idx === activeIndex ? "w-8 bg-primary" : "w-2.5 bg-white/20"
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
          OPTION 2: Floating Motion Dialogue Clouds
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
            Interactive, floating speech bubbles reflecting genuine project feedback.
          </p>

          {/* Dialogue Cloud Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto text-left relative min-h-[360px]">
            {/* Cloud 1 */}
            <div className="animate-float-1 group relative bg-black/40 border border-white/10 p-6 rounded-3xl shadow-[0_0_20px_rgba(56,189,248,0.05)] hover:border-primary/50 hover:shadow-[0_0_25px_rgba(56,189,248,0.15)] transition-all duration-300">
              {/* Dialogue Bubble tail */}
              <div className="absolute -bottom-2.5 left-8 w-5 h-5 bg-black/40 border-r border-b border-white/10 rotate-45 group-hover:border-primary/50 transition-colors"></div>
              
              <div className="flex gap-0.5 text-primary text-xs mb-3">★ ★ ★ ★ ★</div>
              <p className="text-sm leading-relaxed text-white/90 italic">
                &ldquo;Absolutely stunned by the logo delivery. Took only 12 hours to deliver vector files! 🙌&rdquo;
              </p>
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                <span className="font-bold text-white">Vikram Rathore</span>
                <span className="text-white/40 uppercase tracking-widest font-mono text-[9px]">Branding</span>
              </div>
            </div>

            {/* Cloud 2 */}
            <div className="animate-float-2 group relative bg-black/40 border border-white/10 p-6 rounded-3xl shadow-[0_0_20px_rgba(56,189,248,0.05)] hover:border-primary/50 hover:shadow-[0_0_25px_rgba(56,189,248,0.15)] transition-all duration-300 mt-6 md:mt-0">
              {/* Dialogue Bubble tail */}
              <div className="absolute -bottom-2.5 left-8 w-5 h-5 bg-black/40 border-r border-b border-white/10 rotate-45 group-hover:border-primary/50 transition-colors"></div>
              
              <div className="flex gap-0.5 text-primary text-xs mb-3">★ ★ ★ ★ ★</div>
              <p className="text-sm leading-relaxed text-white/90 italic">
                &ldquo;Our Instagram campaign creatives look so premium. Our CTR rose from 1.5% to 4.2%! 🚀&rdquo;
              </p>
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                <span className="font-bold text-white">Sneha Mehra</span>
                <span className="text-white/40 uppercase tracking-widest font-mono text-[9px]">Instagram Ads</span>
              </div>
            </div>

            {/* Cloud 3 */}
            <div className="animate-float-3 group relative bg-black/40 border border-white/10 p-6 rounded-3xl shadow-[0_0_20px_rgba(56,189,248,0.05)] hover:border-primary/50 hover:shadow-[0_0_25px_rgba(56,189,248,0.15)] transition-all duration-300 mt-6 lg:mt-0">
              {/* Dialogue Bubble tail */}
              <div className="absolute -bottom-2.5 left-8 w-5 h-5 bg-black/40 border-r border-b border-white/10 rotate-45 group-hover:border-primary/50 transition-colors"></div>
              
              <div className="flex gap-0.5 text-primary text-xs mb-3">★ ★ ★ ★ ★</div>
              <p className="text-sm leading-relaxed text-white/90 italic">
                &ldquo;The wedding reel hit 210k views overnight! Highly recommend their video crew.&rdquo;
              </p>
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                <span className="font-bold text-white">Atul Sahdup</span>
                <span className="text-white/40 uppercase tracking-widest font-mono text-[9px]">Event Reel</span>
              </div>
            </div>

            {/* Cloud 4 */}
            <div className="animate-float-4 group relative bg-black/40 border border-white/10 p-6 rounded-3xl shadow-[0_0_20px_rgba(56,189,248,0.05)] hover:border-primary/50 hover:shadow-[0_0_25px_rgba(56,189,248,0.15)] transition-all duration-300 mt-6 lg:mt-0">
              {/* Dialogue Bubble tail */}
              <div className="absolute -bottom-2.5 left-8 w-5 h-5 bg-black/40 border-r border-b border-white/10 rotate-45 group-hover:border-primary/50 transition-colors"></div>
              
              <div className="flex gap-0.5 text-primary text-xs mb-3">★ ★ ★ ★ ★</div>
              <p className="text-sm leading-relaxed text-white/90 italic">
                &ldquo;Quick, easy booking. Their creator showed up on time and delivered the reel same day.&rdquo;
              </p>
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                <span className="font-bold text-white">Rahul Jain</span>
                <span className="text-white/40 uppercase tracking-widest font-mono text-[9px]">Shoot Service</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
