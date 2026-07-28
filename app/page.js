import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import WhatsAppToggle from './components/WhatsAppToggle';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-background text-foreground selection:bg-primary/30 selection:text-foreground overflow-x-hidden">
      <Navbar />

      {/* Reelrr-inspired Hero Section */}
      <section className="relative w-full overflow-hidden bg-transparent pt-16 pb-2 text-foreground lg:pt-20 lg:pb-4 xl:pt-24">
        {/* Glow Effects */}
        <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_95%_85%_at_30%_52%,rgba(56,189,248,0.12),transparent_70%)]"></div>
          <div className="absolute left-[-10%] top-[5%] w-[450px] h-[450px] rounded-full bg-primary/8 blur-[100px]"></div>
          <div className="absolute right-[-10%] top-[10%] w-[450px] h-[450px] rounded-full bg-secondary/8 blur-[100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row lg:items-start lg:gap-12 xl:gap-16">
            {/* Left Content (Headline, Subtitle, CTAs, Stats) */}
            <div className="w-full text-left lg:min-w-0 lg:flex-1 lg:pt-4">
              {/* Eyebrow / Ticker Text */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-black uppercase tracking-widest mb-4">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span>Trained Creators Only</span>
              </div>

              {/* Stacked Heading in 2 Lines Only */}
              <h1 className="mt-0 font-heading text-[34px] sm:text-[44px] md:text-[60px] lg:text-[68px] xl:text-[76px] font-bold leading-[0.92] tracking-[-0.03em] text-foreground">
                Your moments deserve a<br />
                <span className="relative inline-block mt-1">
                  <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent drop-shadow-sm font-black">
                    creator.
                  </span>
                  <span aria-hidden="true" className="absolute inset-x-0 -bottom-1 -z-10 h-2.5 rounded-full bg-primary/15"></span>
                </span>
              </h1>

              {/* Subheading */}
              <p className="mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-foreground/70 font-sans font-medium">
                Your moment happens once. We make sure it&apos;s captured right, and before the day ends, it&apos;s already a reel you can share.
              </p>

              {/* CTA Buttons */}
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <a
                  href="https://wa.me/916267121751?text=Hey%2C%20I%20don't%20want%20to%20miss%20this%20moment.%20Let's%20book%20a%20shoot."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-2 rounded-full px-6 py-4 text-sm font-semibold tracking-tight transition-all duration-300 bg-primary text-black hover:shadow-[0_20px_60px_-15px_rgba(56,189,248,0.55)] active:scale-95"
                >
                  <span className="relative z-10 inline-flex items-center gap-2">
                    <span>Book Now</span>
                    <span className="inline-flex items-center justify-center rounded-full p-1 transition-transform duration-500 group-hover:rotate-45 bg-black text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="size-3.5"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
                    </span>
                  </span>
                </a>

                <a
                  className="group relative inline-flex items-center gap-2 rounded-full px-6 py-4 text-sm font-semibold tracking-tight transition-all duration-300 border border-primary/30 bg-transparent text-primary hover:bg-primary/10"
                  href="#portfolio"
                >
                  <span className="relative z-10 inline-flex items-center gap-2">
                    <span>Our Work</span>
                    <span className="inline-flex items-center justify-center rounded-full p-1 transition-transform duration-500 group-hover:rotate-45 bg-primary text-black">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="size-3.5"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
                    </span>
                  </span>
                </a>
              </div>

              {/* Stats Counters Strip */}
              <div className="mt-8 flex flex-wrap items-center gap-6 border-t border-white/10 pt-6">
                <div>
                  <p className="flex items-center gap-1 font-heading text-2xl md:text-3xl font-bold leading-none tracking-tight">
                    500<span className="text-primary">+</span>
                  </p>
                  <p className="mt-1 text-[9px] uppercase tracking-widest text-foreground/50 font-bold">
                    Reels Shot
                  </p>
                </div>

                <div>
                  <p className="flex items-center gap-1 font-heading text-2xl md:text-3xl font-bold leading-none tracking-tight">
                    4.9
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="fill-primary text-primary"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                  </p>
                  <p className="mt-1.5 text-[9px] uppercase tracking-widest text-foreground/50 font-bold">
                    Avg. Rating
                  </p>
                </div>

                <div>
                  <p className="flex items-center gap-1 font-heading text-2xl md:text-3xl font-bold leading-none tracking-tight">
                    10<span className="text-primary">+</span>
                  </p>
                  <p className="mt-1.5 text-[9px] uppercase tracking-widest text-foreground/50 font-bold">
                    Trained Creators
                  </p>
                </div>
              </div>
            </div>

            {/* Right Content: Vertical Mockup Showcase */}
            <div className="relative mx-auto mt-2 h-[260px] w-full max-w-[280px] shrink-0 overflow-visible md:h-[310px] md:max-w-[340px] lg:mx-0 lg:mt-4 lg:h-[340px] lg:max-w-[360px]">
              {/* Blur Aura */}
              <div aria-hidden="true" className="pointer-events-none absolute inset-x-6 bottom-0 top-0 -z-10 rounded-[32px] bg-[radial-gradient(closest-side,var(--color-primary)/18%,transparent_72%)] blur-2xl"></div>
              
              <div className="flex h-full items-end justify-center relative">
                {/* Left Card: Overlap Decoration Reel */}
                <div className="absolute left-4 bottom-3 h-[220px] w-[110px] md:h-[265px] md:w-[130px] lg:h-[295px] lg:w-[145px] rounded-[20px] md:rounded-[26px] overflow-hidden -rotate-[14deg] shadow-2xl border border-white/10 z-0 transform hover:rotate-0 hover:scale-105 transition-all duration-700 group">
                  <div className="relative w-full h-full bg-zinc-900">
                    <Image
                      src="/digitaladvertising.jpg"
                      alt="Event Reel Preview"
                      fill
                      className="object-cover opacity-80"
                    />
                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                    {/* Simulated mobile screen indicators */}
                    <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-8 h-2 rounded-full bg-black/60 z-20"></div>
                    {/* Interactive Play/Pause button */}
                    <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/25 opacity-100 group-hover:bg-black/40 transition-colors">
                      <button className="grid size-8 place-items-center rounded-full bg-white/95 text-black shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="bi bi-play-fill"><path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/></svg>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right Card: Overlap Delivery Reel */}
                <div className="absolute right-4 bottom-0 h-[220px] w-[110px] md:h-[265px] md:w-[130px] lg:h-[295px] lg:w-[145px] rounded-[20px] md:rounded-[26px] overflow-hidden rotate-[14deg] shadow-2xl border border-white/10 z-10 transform hover:rotate-0 hover:scale-105 transition-all duration-700 group">
                  <div className="relative w-full h-full bg-zinc-900">
                    <Image
                      src="/photography.webp"
                      alt="Car Delivery Reel Preview"
                      fill
                      className="object-cover opacity-80"
                    />
                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                    {/* Simulated mobile screen indicators */}
                    <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-8 h-2 rounded-full bg-black/60 z-20"></div>
                    {/* Interactive Play/Pause button */}
                    <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/25 opacity-100 group-hover:bg-black/40 transition-colors">
                      <button className="grid size-8 place-items-center rounded-full bg-white/95 text-black shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="bi bi-play-fill"><path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/></svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Double-Crossed Moving Tickers Section (Reelrr style) */}
        <div className="relative w-full mt-12 h-32 overflow-visible z-20">
          {/* Ribbon 1: Sky-Blue Ribbon (tilted left, scrolling left) */}
          <div className="absolute w-[140vw] left-1/2 -translate-x-1/2 py-2.5 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 text-black -rotate-[4.5deg] shadow-lg z-10">
            <div className="animate-marquee font-heading font-black uppercase tracking-widest text-[10px] sm:text-xs flex items-center gap-8 whitespace-nowrap">
              {[...Array(3)].map((_, idx) => (
                <div key={idx} className="flex items-center gap-8">
                  <span>✨ Same-Day Reels Delivery</span>
                  <span>•</span>
                  <span>🎬 Shot on iPhone &amp; 4K Cinema</span>
                  <span>•</span>
                  <span>⚡ Book in Minutes</span>
                  <span>•</span>
                  <span>🚀 Always Ready to Shoot</span>
                  <span>•</span>
                  <span>🔥 Ready Before Your Event Ends</span>
                  <span>•</span>
                  <span>💎 Trained Creators Only</span>
                  <span>•</span>
                </div>
              ))}
            </div>
          </div>

          {/* Ribbon 2: White Ribbon (tilted right, scrolling right, overlapping & crossing in the center) */}
          <div className="absolute w-[140vw] left-1/2 -translate-x-1/2 py-2.5 bg-white text-black rotate-[2.5deg] shadow-md z-20 mt-4">
            <div className="animate-marquee-reverse font-heading font-black uppercase tracking-widest text-[10px] sm:text-xs flex items-center gap-8 whitespace-nowrap">
              {[...Array(3)].map((_, idx) => (
                <div key={idx} className="flex items-center gap-8">
                  <span>💎 Trained Creators Only</span>
                  <span>•</span>
                  <span>🔥 Ready Before Your Event Ends</span>
                  <span>•</span>
                  <span>🚀 Always Ready to Shoot</span>
                  <span>•</span>
                  <span>⚡ Book in Minutes</span>
                  <span>•</span>
                  <span>🎬 Shot on iPhone &amp; 4K Cinema</span>
                  <span>•</span>
                  <span>✨ Same-Day Reels Delivery</span>
                  <span>•</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Brief */}
      <section id="about" className="py-24 bg-transparent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-8 text-primary">About Us</h2>
              <div className="space-y-6 text-xl opacity-80 leading-relaxed font-light">
                <p>
                  <span className="font-bold text-white">HanumaDakshita Creators</span> is a creative media and digital content agency specializing in high-quality visual content and impactful digital storytelling.
                </p>
                <p>
                  We help individuals, businesses, and brands grow their digital presence through professional reels, photography, graphic design, and social media solutions.
                </p>
                <p className="italic text-primary font-medium border-l-2 border-primary pl-6">
                  ✨ Your vision. Our creativity. Real results.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 p-8 rounded-3xl border border-white/10 aspect-square flex flex-col justify-end">
                <span className="text-4xl font-black text-primary mb-2">100+</span>
                <span className="text-sm uppercase tracking-widest font-bold opacity-40">Projects</span>
              </div>
              <div className="bg-primary p-8 rounded-3xl aspect-square flex flex-col justify-end text-white">
                <span className="text-4xl font-black mb-2">4+</span>
                <span className="text-sm uppercase tracking-widest font-bold opacity-80">Services</span>
              </div>
              <div className="bg-secondary p-8 rounded-3xl aspect-square flex flex-col justify-end text-white col-span-2">
                <span className="text-4xl font-black mb-2">Instant</span>
                <span className="text-sm uppercase tracking-widest font-bold opacity-80">Reel Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Services />

      {/* Wedding & Event Special */}
      <section className="py-24 bg-gradient-to-b from-transparent to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-black/35 backdrop-blur-md border border-white/10 text-white rounded-[60px] p-6 sm:p-12 md:p-24 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto text-center">
              <div className="inline-block px-6 py-2 rounded-full border border-primary/30 text-primary font-bold text-sm tracking-widest uppercase mb-8">
                Wedding & Event Special 💍✨
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight mb-10 leading-[0.85]">
                Make your <span className="text-primary italic">special moments</span> unforgettable.
              </h2>
              <p className="text-xl md:text-2xl font-light opacity-60 mb-16 max-w-2xl mx-auto">
                We provide instant reels, cinematic coverage, and professional editing so your memories live forever.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                {[
                  { icon: '✔', label: 'Same-Day Reels' },
                  { icon: '✔', label: 'Cinematic Coverage' },
                  { icon: '✔', label: 'High-Quality' },
                  { icon: '✔', label: 'On-Time' }
                ].map(item => (
                  <div key={item.label} className="p-6 rounded-3xl bg-white/5 border border-white/10 flex flex-col items-center gap-4 group hover:bg-white transition-all hover:text-foreground">
                    <span className="text-primary text-2xl font-black">{item.icon}</span>
                    <span className="text-xs uppercase font-black tracking-widest text-center">{item.label}</span>
                  </div>
                ))}
              </div>

              <a href="https://wa.me/916267121751" className="inline-flex bg-primary text-white px-12 py-6 rounded-3xl font-black text-xl hover:scale-105 transition-all shadow-xl">
                Book for My Event
              </a>
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUs />

      {/* Portfolio Section Placeholder */}
      <section id="portfolio" className="py-32 bg-transparent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-8 italic">Portfolio</h2>
          <p className="text-xl md:text-2xl font-light opacity-60 mb-16 max-w-2xl mx-auto uppercase tracking-[0.2em]">Our Work Speaks for Itself</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[1, 2, 3].map(i => (
              <div key={i} className="group relative aspect-[4/5] bg-white/5 rounded-[40px] overflow-hidden border border-white/10">
                <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-30 group-hover:scale-125 transition-transform duration-700">🎬</div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-12 flex flex-col justify-end text-left">
                  <span className="text-xs uppercase font-black tracking-widest mb-2">Category</span>
                  <h3 className="text-2xl font-black uppercase">Project Title</h3>
                </div>
              </div>
            ))}
          </div>

          <p className="border-t border-white/10 pt-16 opacity-40 text-sm font-bold uppercase tracking-widest">
            📩 Contact us to view our latest reels and designs.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary rounded-full blur-[160px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-6xl md:text-9xl font-black tracking-tight mb-12">Let's <span className="text-primary">Talk</span></h2>

          <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24 mb-20 text-2xl md:text-4xl font-black tracking-tight uppercase">
            <a href="tel:+916267121751" className="hover:text-primary transition-colors">+91 62671 21751</a>
            <a href="mailto:hanumadakshitacreators@gmail.com" className="hover:text-primary transition-colors">Email Us</a>
            <a href="https://instagram.com/hanumadakshita_creators" className="hover:text-primary transition-colors">Instagram</a>
          </div>

          <div className="p-2 glass rounded-[40px] inline-block">
            <a href="https://wa.me/916267121751" className="flex items-center gap-4 bg-primary text-white px-16 py-8 rounded-[36px] font-black text-2xl hover:bg-primary/90 transition-all shadow-2xl">
              Start A Project
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppToggle />
    </div>
  );
}
