import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppToggle from '../components/WhatsAppToggle';
import Image from 'next/image';

export default function About() {
  return (
    <div className="bg-background text-foreground selection:bg-primary/30 overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-secondary/5 rounded-full blur-[120px] -mr-1/4 -mt-1/4"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-6">
            <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tighter text-glow">
              <span className="text-primary italic">About</span> Us
            </h1>
            <p className="text-2xl font-medium opacity-60 max-w-2xl mx-auto border-t border-foreground/10 pt-8 mt-8">
              A Premier Social Media & Creative Agency
            </p>
          </div>
        </div>
      </section>

      {/* Main Story Section */}
      <section className="py-24 border-t border-foreground/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            <div className="space-y-8">
              <h2 className="text-4xl font-black uppercase tracking-tight text-primary">Our Story</h2>
              <div className="text-2xl font-light leading-[1.6] opacity-80 space-y-6">
                <p>
                  At <span className="font-bold text-foreground">Hanumadakshita Creators</span>, we believe every brand has a story worth telling. We are a passionate team of creators dedicated to transforming ideas into impactful visuals.
                </p>
                <p>
                  From eye-catching graphics to high-end reels, our work is designed to help businesses, individuals, and events stand out in the rapidly evolving digital landscape.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-foreground text-background p-12 rounded-[50px] shadow-2xl">
                <h3 className="text-3xl font-black mb-6 uppercase tracking-tight text-primary">What Sets Us Apart</h3>
                <p className="text-lg opacity-80 font-light leading-relaxed">
                  Our commitment to customer satisfaction is what truly defines us. We don't just deliver designs — we craft experiences that resonate with audiences and build lasting impressions.
                </p>
              </div>
              <div className="bg-primary p-12 rounded-[50px] text-white">
                <h3 className="text-3xl font-black mb-6 uppercase tracking-tight">Focus</h3>
                <p className="text-lg opacity-80 font-light leading-relaxed">
                  Creativity, Trend-driven content, and Powerful execution. We bridge the gap between your vision and real-world results.
                </p>
              </div>
            </div>

            <div className="space-y-8 pt-8">
              <h2 className="text-4xl font-black uppercase tracking-tight text-secondary">Who We Serve</h2>
              <p className="text-xl font-medium opacity-60">
                From weddings and special events to business promotions and personal branding.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: 'Small Businesses', icon: '📱' },
                  { label: 'Individuals', icon: '👤' },
                  { label: 'Events & Weddings', icon: '💍' },
                  { label: 'Established Brands', icon: '🏢' }
                ].map(item => (
                  <div key={item.label} className="p-8 glass rounded-[36px] flex flex-col items-center gap-4 text-center group hover:bg-foreground hover:text-background transition-all">
                    <span className="text-4xl">{item.icon}</span>
                    <span className="text-xs font-black uppercase tracking-widest">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Values */}
            <div className="bg-foreground p-12 md:p-20 rounded-[60px] text-background text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full scale-150"></div>
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-black mb-16 uppercase italic">Our Core Values</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                  {[
                    { v: 'Creativity', t: 'Innovation in every frame' },
                    { v: 'Dedication', t: 'Hard work as standard' },
                    { v: 'Quality', t: 'Excellence in execution' },
                    { v: 'Partnership', t: 'Your success is ours' }
                  ].map(val => (
                    <div key={val.v}>
                      <div className="text-primary text-3xl font-black mb-2 tracking-tighter uppercase">{val.v}</div>
                      <p className="text-xs font-bold opacity-40 uppercase tracking-widest leading-loose">{val.t}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-10 leading-[0.9]">
            Ready to <span className="text-primary">Partner</span> With Us?
          </h2>
          <p className="text-xl font-medium opacity-60 mb-12 max-w-xl mx-auto">
            Let's bring your vision to life with creative excellence and dedication.
          </p>
          <a
            href="https://wa.me/916267121751"
            className="inline-flex bg-primary text-white px-12 py-6 rounded-3xl font-black text-xl hover:scale-105 transition-all shadow-xl"
          >
            Get In Touch
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppToggle />
    </div>
  );
}
