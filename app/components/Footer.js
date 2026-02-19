export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-black mb-4 tracking-tighter text-primary">HanumaDakshita Creators</h3>
            <p className="text-sm opacity-60 leading-relaxed">
              Premier creative media and digital content agency specializing in high-quality visual storytelling.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-primary">Services</h4>
            <ul className="space-y-4 text-sm opacity-80">
              <li><a href="#services" className="hover:text-primary transition-colors">Reel Creation</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Photography</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Graphic Designing</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Social Media Management</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-primary">Company</h4>
            <ul className="space-y-4 text-sm opacity-80">
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#portfolio" className="hover:text-primary transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-primary">Get in Touch</h4>
            <ul className="space-y-4 text-sm opacity-80">
              <li>+91 62671 21751</li>
              <li>hanumadakshitacreators@gmail.com</li>
              <li className="flex gap-4 pt-2">
                <a href="https://www.instagram.com/hanumadakshita_creators" className="hover:text-primary transition-colors">Instagram</a>
                <a href="https://www.facebook.com/share/1DgTGHZg9B/" className="hover:text-primary transition-colors">Facebook</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs opacity-40">
            &copy; {currentYear} Hanumadakshita Creators. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-xs opacity-40">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
