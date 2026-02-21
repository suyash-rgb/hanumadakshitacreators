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

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-1/2 h-screen bg-secondary/5 rounded-full blur-[120px] -mr-1/4 -mt-1/4 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-primary/5 rounded-full blur-[100px] -ml-1/6 -mb-1/6 animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 max-w-2xl">
              <h1 className="text-5xl sm:text-6xl md:text-8xl font-black leading-[0.9] tracking-tight text-glow">
                Creating <br />
                <span className="text-primary">Stories</span> • <br />
                Building <br />
                <span className="text-secondary text-glow">Brands</span>
              </h1>

              <p className="text-xl md:text-2xl font-medium leading-relaxed opacity-80 border-l-4 border-primary pl-6 py-2">
                We transform your moments and ideas into powerful digital stories that connect, engage, and leave a lasting impact.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="https://wa.me/916267121751"
                  className="bg-primary text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-[0_20px_40px_-10px_rgba(249,115,22,0.4)] transition-all active:scale-95 flex items-center gap-3"
                >
                  Get a Quote
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </a>
                <a
                  href="#portfolio"
                  className="bg-foreground text-background px-10 py-5 rounded-2xl font-bold text-lg hover:bg-foreground/90 transition-all flex items-center gap-3"
                >
                  View Portfolio
                </a>
              </div>

              <div className="pt-8 flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-background bg-secondary/20 flex items-center justify-center text-xs font-bold">HD</div>
                  ))}
                </div>
                <p className="text-sm font-semibold opacity-60">
                  Trusted by <span className="text-foreground">50+ Clients</span> <br />
                  across the region and beyond.
                </p>
              </div>
            </div>

            <div className="relative group">
              {/* Primary Glowing Aura */}
              <div className="absolute -inset-10 bg-primary/20 rounded-full blur-[100px] group-hover:bg-primary/5 transition-all duration-1000"></div>

              {/* Subtle Gradient Border Glow */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-primary/30 via-primary/10 to-transparent rounded-[41px] blur-sm opacity-100 group-hover:opacity-40 transition-opacity duration-1000"></div>

              <div className="relative bg-background rounded-[40px] border border-white/5 overflow-hidden shadow-2xl">
                <Image
                  src="/logo.png"
                  alt="Hanumadakshita Creators"
                  width={600}
                  height={600}
                  className="object-contain p-8 transform group-hover:scale-110 transition-transform duration-1000"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Brief */}
      <section id="about" className="py-24 bg-foreground text-background">
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
          <div className="bg-foreground text-background rounded-[60px] p-6 sm:p-12 md:p-24 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto text-center">
              <div className="inline-block px-6 py-2 rounded-full border border-primary/30 text-primary font-bold text-sm tracking-widest uppercase mb-8">
                Wedding & Event Special 💍✨
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight mb-10 leading-[0.9]">
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
      <section id="portfolio" className="py-32 bg-foreground text-background">
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
