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

      {/* Reelrr-Style Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center pt-28 pb-12 overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-1/2 h-screen bg-secondary/5 rounded-full blur-[140px] -mr-1/4 -mt-1/4 animate-pulse"></div>
        <div
          className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-primary/10 rounded-full blur-[120px] -ml-1/6 -mb-1/6 animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Speed Hook & Copy */}
            <div className="lg:col-span-7 space-y-8">
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs sm:text-sm font-bold tracking-wide uppercase">
                <span>✨ Instant &amp; Same-Day Reel Delivery</span>
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping"></span>
              </div>

              {/* Reelrr-Inspired Main Headline */}
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.92] tracking-tight">
                Your moments <br />
                deserve a <br />
                <span className="text-primary italic">Reel &amp; Story.</span>
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl font-medium leading-relaxed opacity-80 border-l-4 border-primary pl-6 py-1 max-w-2xl">
                Your moment happens once. We make sure it&apos;s captured right,
                edited professionally, and delivered the same day—ready to share
                with the world.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="https://wa.me/916267121751?text=Hi%20HanumaDakshita%20Creators%2C%20I'd%20like%20to%20book%20a%20reels%20shoot!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-full font-bold text-base sm:text-lg hover:shadow-[0_20px_50px_-10px_rgba(249,115,22,0.6)] transition-all active:scale-95"
                >
                  <span>Book Now</span>
                  <span className="inline-flex items-center justify-center rounded-full bg-white/20 p-1.5 transition-transform duration-500 group-hover:rotate-45">
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

                <a
                  href="#portfolio"
                  className="group inline-flex items-center gap-3 border-2 border-foreground/15 hover:border-primary/50 text-foreground px-8 py-4 rounded-full font-bold text-base sm:text-lg transition-all hover:bg-primary/5"
                >
                  <span>Our Work</span>
                  <span className="inline-flex items-center justify-center rounded-full bg-primary/10 text-primary p-1.5 transition-transform duration-500 group-hover:rotate-45">
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

              {/* Social Proof Strip matching Reelrr */}
              <div className="pt-6 border-t border-foreground/10 grid grid-cols-3 gap-4 max-w-lg">
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-foreground flex items-center gap-1">
                    100<span className="text-primary">+</span>
                  </div>
                  <div className="text-[11px] uppercase tracking-widest font-bold opacity-60">
                    Reels Shot
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-foreground flex items-center gap-1">
                    5.0
                    <span className="text-primary">★</span>
                  </div>
                  <div className="text-[11px] uppercase tracking-widest font-bold opacity-60">
                    Avg. Rating
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-foreground flex items-center gap-1">
                    4<span className="text-secondary">+</span>
                  </div>
                  <div className="text-[11px] uppercase tracking-widest font-bold opacity-60">
                    Core Services
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Dynamic Visual Showcase */}
            <div className="lg:col-span-5 relative group mt-8 lg:mt-0">
              {/* Primary Glowing Aura */}
              <div className="absolute -inset-10 bg-gradient-to-tr from-primary/30 via-secondary/20 to-transparent rounded-full blur-[90px] group-hover:scale-105 transition-all duration-1000"></div>

              <div className="relative">
                {/* Floating Speed Badge (Top Left) */}
                <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 z-20 glass px-4 py-2.5 rounded-2xl shadow-xl border border-white/20 flex items-center gap-2 animate-bounce" style={{ animationDuration: '3s' }}>
                  <span className="text-primary font-black text-lg">⚡</span>
                  <span className="text-xs sm:text-sm font-bold tracking-tight">
                    Same-Day Delivery
                  </span>
                </div>

                {/* Main Visual Box */}
                <div className="relative bg-background/80 backdrop-blur-md rounded-[48px] border border-white/10 overflow-hidden shadow-2xl p-8 sm:p-12 transform group-hover:scale-[1.02] transition-transform duration-700">
                  <Image
                    src="/logo.png"
                    alt="HanumaDakshita Creators"
                    width={500}
                    height={500}
                    className="object-contain w-full h-auto transform group-hover:scale-105 transition-transform duration-1000"
                    priority
                  />
                </div>

                {/* Floating Quality Badge (Bottom Right) */}
                <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 z-20 bg-foreground text-background px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
                  <span className="text-xs sm:text-sm font-black tracking-tight uppercase">
                    Shot on iPhone &amp; 4K
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Angled Infinite Marquee Ticker Ribbon (Reelrr Style) */}
        <div className="relative w-full overflow-hidden mt-12 py-3.5 bg-gradient-to-r from-primary via-orange-500 to-secondary text-white -rotate-1 shadow-lg">
          <div className="animate-marquee font-black uppercase tracking-widest text-xs sm:text-sm flex items-center gap-8 whitespace-nowrap">
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
      </section>

      {/* About Brief */}
      <section id="about" className="py-24 bg-[#0f172a] text-white">
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
          <div className="bg-[#0f172a] text-white rounded-[60px] p-6 sm:p-12 md:p-24 relative overflow-hidden">
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
      <section id="portfolio" className="py-32 bg-[#0f172a] text-white">
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
