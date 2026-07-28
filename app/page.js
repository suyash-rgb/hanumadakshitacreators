import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import WhatsAppToggle from './components/WhatsAppToggle';
import Testimonials from './components/Testimonials';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-transparent text-foreground selection:bg-primary/30 selection:text-foreground overflow-x-hidden">
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
                    2000<span className="text-primary">+</span>
                  </p>
                  <p className="mt-1 text-[9px] uppercase tracking-widest text-foreground/50 font-bold">
                    Posters Created
                  </p>
                </div>

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

                {/* 
                 */}
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
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="bi bi-play-fill"><path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" /></svg>
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
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="bi bi-play-fill"><path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" /></svg>
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

      {/* Reelrr-inspired About Section */}
      <section id="about" className="py-24 bg-transparent text-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Headline & Centered Content */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-bold uppercase tracking-widest text-primary mb-6">
              <span>✨</span> ABOUT US
            </div>

            <h2 className="font-heading font-bold leading-[1.05] tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="block text-white">HanumaDakshita is built to capture</span>
              <span className="block bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                moments that matter.
              </span>
            </h2>

            <p className="mt-6 font-sans text-base sm:text-lg md:text-xl font-normal text-white/70 max-w-2xl mx-auto leading-relaxed">
              In a world where everything is content, we focus on turning real-life experiences into memories people actually want to share.
            </p>

            {/* 2 Buttons Centered */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-primary/50 bg-transparent text-primary hover:bg-primary/10 hover:border-primary font-semibold text-sm sm:text-base transition-all duration-300"
              >
                Our Work <span>→</span>
              </a>
              <a
                href="https://wa.me/918878978966?text=Hey%2C%20I%20want%20to%20book%20a%20shoot!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white/10 border border-white/15 text-white hover:bg-white hover:text-black font-semibold text-sm sm:text-base transition-all duration-300 shadow-lg"
              >
                Book Now <span>→</span>
              </a>
            </div>
          </div>

          {/* 2 Feature Cards Grid */}
          <div className="mt-10 grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            {/* Card 1: Experts in capturing moments */}
            <article className="group rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-500 hover:border-primary/40 hover:bg-white/[0.08] hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(56,189,248,0.25)] flex flex-col justify-between">
              <div>
                <span className="inline-grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-black shadow-[0_10px_30px_-10px_rgba(56,189,248,0.5)] transition-transform duration-500 group-hover:-rotate-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-aperture">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m14.31 8 5.74 9.94"></path>
                    <path d="M9.69 8h11.48"></path>
                    <path d="m7.38 12 5.74-9.94"></path>
                    <path d="M9.69 16 3.95 6.06"></path>
                    <path d="M14.31 16H2.83"></path>
                    <path d="m16.62 12-5.74 9.94"></path>
                  </svg>
                </span>
                <h3 className="mt-6 font-heading text-xl md:text-2xl font-semibold tracking-tight text-white">
                  Experts in capturing moments
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/70 font-sans">
                  We know what to capture and how to make it feel right. Every creator is trained to shoot moments the way people actually like to watch.
                </p>
              </div>
            </article>

            {/* Card 2: Instant booking, same-day delivery */}
            <article className="group rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-500 hover:border-primary/40 hover:bg-white/[0.08] hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(56,189,248,0.25)] flex flex-col justify-between">
              <div>
                <span className="inline-grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-black shadow-[0_10px_30px_-10px_rgba(56,189,248,0.5)] transition-transform duration-500 group-hover:-rotate-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap">
                    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                  </svg>
                </span>
                <h3 className="mt-6 font-heading text-xl md:text-2xl font-semibold tracking-tight text-white">
                  Instant booking, same-day delivery
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/70 font-sans">
                  No long waits or back and forth. Book fast, shoot quick, and get your reel the same day.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Graphic Designing & Branding Specialty Section (Primary Service Powerhouse) */}
      <section id="graphic-design" className="py-24 bg-transparent text-white relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-xs font-bold uppercase tracking-widest text-primary mb-6 shadow-lg">
            <span>🎨</span> DESIGN LAB
          </div>

          {/* Headline */}
          <h2 className="font-heading font-bold leading-[1.05] tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="block text-white">Scroll-stopping design.</span>
            <span className="block bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              Built to convert.
            </span>
          </h2>

          <p className="mt-4 font-sans text-base sm:text-lg md:text-xl font-normal text-white/70 max-w-2xl mx-auto leading-relaxed">
            High-impact brand systems, packaging, ads, and event designs that turn visitors into customers.
          </p>

          {/* Desktop 4-Column Gallery Grid (No Scrollbars) */}
          <div className="mt-16 hidden lg:grid grid-cols-4 gap-6 text-left">
            {[
              {
                category: 'BRANDING',
                title: 'Signature Logos & Systems',
                desc: 'Vector assets, palettes & brand guidelines.',
                img: '/graphicdesigning.jpg',
                badge: 'Hex Palettes',
                linkText: 'Build Brand Suite'
              },
              {
                category: 'SOCIAL MEDIA',
                title: 'Scroll-Stopping Creatives',
                desc: 'Engagement-driven festival & event posters.',
                img: '/social-media-management.png',
                badge: 'Festival Specials',
                linkText: 'Order Posters'
              },
              {
                category: 'ADVERTISING',
                title: 'High-CTR Performance Ads',
                desc: 'Eye-catching digital banners & billboard designs.',
                img: '/digitaladvertising.jpg',
                badge: 'Ads & Banners',
                linkText: 'Get Ad Creative'
              },
              {
                category: 'COMMERCIAL',
                title: 'Packaging & Merchandise',
                desc: 'Print-ready vector packaging & physical wraps.',
                img: '/graphicdesigning.jpg',
                badge: '300 DPI Vector',
                linkText: 'Design Packaging'
              }
            ].map((item, index) => (
              <article
                key={index}
                className="group relative w-full aspect-[3/4] rounded-3xl overflow-hidden border border-white/10 bg-white/5 shadow-2xl transition-all duration-500 hover:border-primary/60 hover:-translate-y-1 hover:shadow-[0_20px_50px_-15px_rgba(56,189,248,0.35)]"
              >
                {/* Background Image with Zoom */}
                <img
                  src={item.img}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Visual Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent"></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity bg-primary/20"></div>

                {/* Floating Category Tag */}
                <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-md border border-white/15 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider text-primary uppercase">
                  {item.category}
                </div>

                {/* Top Right Spec Badge */}
                <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-[9px] font-medium text-white/90">
                  {item.badge}
                </div>

                {/* Bottom Content Frame */}
                <div className="absolute bottom-6 left-6 right-6 flex flex-col justify-end">
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-white tracking-tight leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-white/70 font-sans leading-relaxed">
                    {item.desc}
                  </p>
                  
                  {/* Hover Actions */}
                  <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <a
                      href={`https://wa.me/916267121751?text=Hi%2C%20I'm%20interested%20in%20your%20${encodeURIComponent(item.category)}%20services!`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-primary flex items-center gap-1.5 hover:text-white transition-colors"
                    >
                      {item.linkText} <span>→</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Mobile & Tablet Carousel (Zero Scrollbar) */}
          <div className="mt-12 lg:hidden flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden px-4 text-left">
            {[
              {
                category: 'BRANDING',
                title: 'Signature Logos & Systems',
                desc: 'Vector assets, palettes & brand guidelines.',
                img: '/graphicdesigning.jpg',
                badge: 'Hex Palettes',
                linkText: 'Build Brand Suite'
              },
              {
                category: 'SOCIAL MEDIA',
                title: 'Scroll-Stopping Creatives',
                desc: 'Engagement-driven festival & event posters.',
                img: '/social-media-management.png',
                badge: 'Festival Specials',
                linkText: 'Order Posters'
              },
              {
                category: 'ADVERTISING',
                title: 'High-CTR Performance Ads',
                desc: 'Eye-catching digital banners & billboard designs.',
                img: '/digitaladvertising.jpg',
                badge: 'Ads & Banners',
                linkText: 'Get Ad Creative'
              },
              {
                category: 'COMMERCIAL',
                title: 'Packaging & Merchandise',
                desc: 'Print-ready vector packaging & physical wraps.',
                img: '/graphicdesigning.jpg',
                badge: '300 DPI Vector',
                linkText: 'Design Packaging'
              }
            ].map((item, index) => (
              <article
                key={index}
                className="group relative flex-none w-[280px] sm:w-[320px] aspect-[3/4] rounded-3xl overflow-hidden border border-white/10 bg-white/5 shadow-2xl snap-center transition-all duration-500 hover:border-primary/60"
              >
                {/* Background Image with Zoom */}
                <img
                  src={item.img}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Visual Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent"></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity bg-primary/20"></div>

                {/* Floating Category Tag */}
                <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-md border border-white/15 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider text-primary uppercase">
                  {item.category}
                </div>

                {/* Top Right Spec Badge */}
                <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-[9px] font-medium text-white/90">
                  {item.badge}
                </div>

                {/* Bottom Content Frame */}
                <div className="absolute bottom-6 left-6 right-6 flex flex-col justify-end">
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-white tracking-tight leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-white/70 font-sans leading-relaxed">
                    {item.desc}
                  </p>
                  
                  {/* Hover Actions */}
                  <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <a
                      href={`https://wa.me/916267121751?text=Hi%2C%20I'm%20interested%20in%20your%20${encodeURIComponent(item.category)}%20services!`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-primary flex items-center gap-1.5 hover:text-white transition-colors"
                    >
                      {item.linkText} <span>→</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Elegant Glassmorphism Trust Ribbon */}
          <div className="mt-14 inline-flex flex-wrap items-center justify-center gap-6 sm:gap-10 px-8 py-4 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md shadow-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-white/70">
            <span className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-primary shadow-[0_0_8px_rgba(56,189,248,0.8)]"></span>
              Same-Day Express Delivery
            </span>
            <span className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-primary shadow-[0_0_8px_rgba(56,189,248,0.8)]"></span>
              100% Vector Built (AI/EPS/PDF)
            </span>
            <span className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-primary shadow-[0_0_8px_rgba(56,189,248,0.8)]"></span>
              Unlimited Draft Revisions
            </span>
            <span className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-primary shadow-[0_0_8px_rgba(56,189,248,0.8)]"></span>
              300 DPI Print &amp; 4K Digital
            </span>
          </div>
        </div>
      </section>

      {/* Reelrr-inspired Our Work Section (Immediately below About Us) */}
      <section id="portfolio" className="py-24 bg-transparent text-white relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-bold uppercase tracking-widest text-primary mb-6">
            <span>✨</span> OUR WORK
          </div>

          {/* Stacked Heading */}
          <h2 className="font-heading font-bold leading-[1.05] tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="block text-white">Where moments</span>
            <span className="block bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              become reels
            </span>
          </h2>

          <p className="mt-4 font-sans text-base sm:text-lg md:text-xl font-normal text-white/70 max-w-2xl mx-auto leading-relaxed">
            A sample of what we&apos;ve shipped recently
          </p>

          {/* Fanned-out 9:16 Reels Cards Showcase (Desktop) */}
          <div className="mt-16 hidden md:flex justify-center items-center -space-x-6 lg:-space-x-10 py-12 px-4">
            {[
              {
                title: 'Wedding Celebration',
                views: '124K views',
                img: '/photography.webp',
                rotate: '-rotate-12 translate-y-8',
                badge: 'Wedding Reel',
              },
              {
                title: 'Brand Launch',
                views: '85K views',
                img: '/digitaladvertising.jpg',
                rotate: '-rotate-6 translate-y-3',
                badge: 'Brand Shoot',
              },
              {
                title: 'Grand Event',
                views: '210K views',
                img: '/photography.webp',
                rotate: 'rotate-0 z-10 scale-105 shadow-[0_25px_60px_-15px_rgba(56,189,248,0.35)] border-primary/50',
                badge: 'Featured Reel',
              },
              {
                title: 'Product Campaign',
                views: '95K views',
                img: '/graphicdesigning.jpg',
                rotate: 'rotate-6 translate-y-3',
                badge: 'Commercial',
              },
              {
                title: 'Celebrity Feature',
                views: '150K views',
                img: '/digitaladvertising.jpg',
                rotate: 'rotate-12 translate-y-8',
                badge: 'Event Reel',
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`group relative w-56 lg:w-64 aspect-[9/16] rounded-[32px] overflow-hidden border border-white/15 bg-white/5 shadow-2xl transition-all duration-500 hover:rotate-0 hover:translate-y-0 hover:scale-110 hover:z-30 hover:border-primary/80 hover:shadow-[0_20px_50px_-10px_rgba(56,189,248,0.5)] ${item.rotate}`}
              >
                {/* Background Image with Overlay */}
                <img
                  src={item.img}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

                {/* Top Right Brand Badge */}
                <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full text-[11px] font-bold tracking-wider text-white uppercase">
                  {item.badge}
                </div>

                {/* Center Play Button Icon on Hover */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="size-14 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white transition-transform duration-500 group-hover:scale-125 group-hover:bg-primary group-hover:text-black group-hover:border-primary shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="ml-1">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </div>
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-5 left-5 right-5 text-left">
                  <h3 className="font-heading text-lg font-bold text-white tracking-tight leading-snug">
                    {item.title}
                  </h3>
                  <div className="mt-1 flex items-center gap-2 text-xs text-white/80 font-medium">
                    <span className="inline-block size-2 rounded-full bg-primary animate-pulse"></span>
                    <span>{item.views}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Carousel / Grid (Mobile Only) */}
          <div className="mt-12 md:hidden flex gap-4 overflow-x-auto pb-8 snap-x px-4">
            {[
              { title: 'Wedding Celebration', views: '124K views', img: '/photography.webp', badge: 'Wedding Reel' },
              { title: 'Grand Event', views: '210K views', img: '/photography.webp', badge: 'Featured Reel' },
              { title: 'Brand Launch', views: '85K views', img: '/digitaladvertising.jpg', badge: 'Brand Shoot' },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative flex-none w-64 aspect-[9/16] rounded-3xl overflow-hidden border border-white/15 bg-white/5 shadow-xl snap-center"
              >
                <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

                <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full text-[11px] font-bold text-white uppercase">
                  {item.badge}
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="size-12 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="ml-1">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </div>
                </div>

                <div className="absolute bottom-5 left-5 right-5 text-left">
                  <h3 className="font-heading text-lg font-bold text-white tracking-tight leading-snug">
                    {item.title}
                  </h3>
                  <div className="mt-1 flex items-center gap-2 text-xs text-white/80 font-medium">
                    <span className="inline-block size-2 rounded-full bg-primary"></span>
                    <span>{item.views}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call To Action Footer below the cards */}
          <div className="mt-8 border-t border-white/10 pt-12">
            <p className="text-sm font-bold uppercase tracking-widest text-white/60">
              📩 Contact us on WhatsApp to view our complete reels &amp; video library
            </p>
          </div>
        </div>
      </section>

      {/* Reelrr-inspired How It Works Section */}
      <section id="process" className="py-24 bg-transparent text-white relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-bold uppercase tracking-widest text-primary mb-6">
            <span>✨</span> HOW IT WORKS
          </div>

          {/* Stacked Heading */}
          <h2 className="font-heading font-bold leading-[1.05] tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="block text-white">Simple steps.</span>
            <span className="block bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              Epic reels.
            </span>
          </h2>

          <p className="mt-4 font-sans text-base sm:text-lg md:text-xl font-normal text-white/70 max-w-2xl mx-auto leading-relaxed">
            From booking to posting, we make the process smooth, fast, and hassle-free.
          </p>

          {/* 4-Step Process Illustration Pipeline */}
          <div className="mt-16 relative">
            {/* Connecting Horizontal Line (Desktop) */}
            <div className="hidden lg:block absolute top-16 left-24 right-24 h-[2px] bg-gradient-to-r from-primary/10 via-primary/50 to-primary/10 z-0"></div>

            {/* Icons Row with Glowing Pedestals */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 relative z-10 mb-8">
              {/* Step 1 Icon: Calendar */}
              <div className="flex flex-col items-center">
                <div className="size-28 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 p-5 flex items-center justify-center shadow-2xl transition-transform duration-500 hover:-translate-y-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                    <line x1="16" x2="16" y1="2" y2="6"></line>
                    <line x1="8" x2="8" y1="2" y2="6"></line>
                    <line x1="3" x2="21" y1="10" y2="10"></line>
                    <path d="m9 16 2 2 4-4"></path>
                  </svg>
                </div>
                {/* Glowing Pedestal */}
                <div className="w-24 h-2.5 bg-primary/40 blur-md rounded-full mt-3"></div>
              </div>

              {/* Step 2 Icon: Creator */}
              <div className="flex flex-col items-center">
                <div className="size-28 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 p-5 flex items-center justify-center shadow-2xl transition-transform duration-500 hover:-translate-y-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-sky-400">
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                {/* Glowing Pedestal */}
                <div className="w-24 h-2.5 bg-sky-400/40 blur-md rounded-full mt-3"></div>
              </div>

              {/* Step 3 Icon: Clapperboard */}
              <div className="flex flex-col items-center">
                <div className="size-28 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 p-5 flex items-center justify-center shadow-2xl transition-transform duration-500 hover:-translate-y-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400">
                    <path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z"></path>
                    <path d="m6.2 5.3 3.1 3.9"></path>
                    <path d="m12.4 3.4 3.1 4"></path>
                    <path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"></path>
                    <polygon points="10 15 15 17 10 19 10 15"></polygon>
                  </svg>
                </div>
                {/* Glowing Pedestal */}
                <div className="w-24 h-2.5 bg-cyan-400/40 blur-md rounded-full mt-3"></div>
              </div>

              {/* Step 4 Icon: Smartphone Reel */}
              <div className="flex flex-col items-center">
                <div className="size-28 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 p-5 flex items-center justify-center shadow-2xl transition-transform duration-500 hover:-translate-y-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
                    <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
                    <path d="m10 11 5 3-5 3v-6Z"></path>
                  </svg>
                </div>
                {/* Glowing Pedestal */}
                <div className="w-24 h-2.5 bg-blue-400/40 blur-md rounded-full mt-3"></div>
              </div>
            </div>

            {/* 4-Card Process Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              {/* Card 1 */}
              <article className="group relative rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-500 hover:border-primary/40 hover:bg-white/[0.08] hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(56,189,248,0.25)] flex flex-col justify-between overflow-hidden">
                <div className="absolute bottom-4 right-4 text-6xl font-black opacity-[0.03] pointer-events-none group-hover:opacity-10 transition-opacity">
                  01
                </div>
                <div>
                  <div className="size-10 rounded-full border border-primary/40 bg-primary/10 flex items-center justify-center text-xs font-bold text-primary mb-6">
                    01
                  </div>
                  <h3 className="font-heading text-xl font-bold tracking-tight text-white">
                    Book your moment
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/70 font-sans">
                    Pick your date, location, and you&apos;re done.
                  </p>
                </div>
                <div className="mt-8">
                  <span className="inline-flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-black">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </span>
                </div>
              </article>

              {/* Card 2 */}
              <article className="group relative rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-500 hover:border-primary/40 hover:bg-white/[0.08] hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(56,189,248,0.25)] flex flex-col justify-between overflow-hidden">
                <div className="absolute bottom-4 right-4 text-6xl font-black opacity-[0.03] pointer-events-none group-hover:opacity-10 transition-opacity">
                  02
                </div>
                <div>
                  <div className="size-10 rounded-full border border-primary/40 bg-primary/10 flex items-center justify-center text-xs font-bold text-primary mb-6">
                    02
                  </div>
                  <h3 className="font-heading text-xl font-bold tracking-tight text-white">
                    Get your creator
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/70 font-sans">
                    We assign the right creator for your shoot.
                  </p>
                </div>
                <div className="mt-8">
                  <span className="inline-flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-black">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </span>
                </div>
              </article>

              {/* Card 3 */}
              <article className="group relative rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-500 hover:border-primary/40 hover:bg-white/[0.08] hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(56,189,248,0.25)] flex flex-col justify-between overflow-hidden">
                <div className="absolute bottom-4 right-4 text-6xl font-black opacity-[0.03] pointer-events-none group-hover:opacity-10 transition-opacity">
                  03
                </div>
                <div>
                  <div className="size-10 rounded-full border border-primary/40 bg-primary/10 flex items-center justify-center text-xs font-bold text-primary mb-6">
                    03
                  </div>
                  <h3 className="font-heading text-xl font-bold tracking-tight text-white">
                    Shoot &amp; create
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/70 font-sans">
                    Your moment gets captured and edited on the spot.
                  </p>
                </div>
                <div className="mt-8">
                  <span className="inline-flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-black">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </span>
                </div>
              </article>

              {/* Card 4 */}
              <article className="group relative rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-500 hover:border-primary/40 hover:bg-white/[0.08] hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(56,189,248,0.25)] flex flex-col justify-between overflow-hidden">
                <div className="absolute bottom-4 right-4 text-6xl font-black opacity-[0.03] pointer-events-none group-hover:opacity-10 transition-opacity">
                  04
                </div>
                <div>
                  <div className="size-10 rounded-full border border-primary/40 bg-primary/10 flex items-center justify-center text-xs font-bold text-primary mb-6">
                    04
                  </div>
                  <h3 className="font-heading text-xl font-bold tracking-tight text-white">
                    Reel, ready
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/70 font-sans">
                    You get a ready-to-post reel, same day.
                  </p>
                </div>
                <div className="mt-8">
                  <span className="inline-flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-black">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </span>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

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
