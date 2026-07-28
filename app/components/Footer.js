import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/hanumadakshita_creators",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
        </svg>
      )
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/share/1DgTGHZg9B/",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
        </svg>
      )
    },
    {
      name: "Pinterest",
      url: "https://pinterest.com",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="8" x2="12" y2="16"></line>
          <line x1="8" y1="12" x2="16" y2="12"></line>
          <circle cx="12" cy="12" r="10"></circle>
        </svg>
      )
    },
    {
      name: "YouTube",
      url: "https://youtube.com",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
        </svg>
      )
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/916267121751",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
      )
    }
  ];

  return (
    <footer className="bg-[#031d10] text-white py-24 relative overflow-hidden z-10 border-t border-white/5">
      {/* Background Watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none select-none overflow-hidden z-0">
        <span className="text-white text-8xl md:text-[180px] font-black tracking-tight font-heading uppercase">
          creators
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="relative w-44 sm:w-56 h-12">
            <Image
              src="/textlogo.png"
              alt="HanumaDakshita Creators Logo"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Headline */}
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-2">
          Get connected with us on social
        </h3>
        <p className="text-sm text-white/50 tracking-wide mb-12">
          Don't miss our new updates!
        </p>

        {/* Social Pill Links */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-16">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-white text-[#031d10] pl-5 pr-2 py-2 rounded-full font-bold text-xs sm:text-sm shadow-xl transition-all duration-300 hover:scale-105 hover:bg-slate-100 group"
            >
              <span>{link.name}</span>
              <div className="size-8 rounded-full bg-[#031d10] text-white flex items-center justify-center transition-transform duration-300 group-hover:scale-95">
                {link.icon}
              </div>
            </a>
          ))}
        </div>

        {/* Policies & Links Bar */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10 text-xs text-white/50 tracking-wide font-medium mb-12 border-b border-white/5 pb-12">
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms &amp; Conditions</a>
          <a href="#" className="hover:text-primary transition-colors">Cancellation &amp; Refund</a>
          <a href="#" className="hover:text-primary transition-colors">Security</a>
          <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
        </div>

        {/* Bottom copyright details */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-xs sm:text-sm text-white/50 pt-2">
          {/* Nav Items */}
          <div className="flex flex-wrap justify-center gap-6 font-semibold text-white">
            <a href="/" className="hover:text-primary transition-colors">Home</a>
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#graphic-design" className="hover:text-primary transition-colors">Design</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">Reels</a>
            <a href="#services" className="hover:text-primary transition-colors">Services</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>

          {/* Copyright text */}
          <div className="text-center md:text-left opacity-80 font-medium">
            &copy; {currentYear} HanumaDakshita. Your stories deserve the best.
          </div>

          {/* Credits */}
          <div className="font-semibold text-white opacity-90">
            Designed by <span className="text-white hover:text-primary transition-colors cursor-pointer">Codevibe</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
