import Image from 'next/image';

export default function Services() {
    const services = [
        {
            title: "Reel & Video Creation",
            icon: "🎥",
            image: "/digitaladvertising.jpg",
            colorClass: "bg-primary",
            textColor: "text-primary",
            tags: ["Wedding & Pre-Wedding", "Engagement & Event", "Business Reels", "Cinematic Shoots", "Professional Editing"],
            link: "https://wa.me/916267121751",
            cta: "Book a session"
        },
        {
            title: "Photography",
            icon: "📸",
            image: "/photography.webp",
            colorClass: "bg-secondary",
            textColor: "text-secondary",
            tags: ["Wedding & Event", "Product & Business", "Portfolio & Branding", "Events Coverage"],
            link: "https://wa.me/916267121751",
            cta: "View gallery"
        },
        {
            title: "Graphic Designing",
            icon: "🎨",
            image: "/graphicdesigning.jpg",
            colorClass: "bg-primary",
            textColor: "text-primary",
            highlight: "Creative & Impactful Designs",
            tags: ["Social Media Posts", "Brand Logo", "Event Posters", "Wedding Cards", "Birthday Posters"],
            link: "https://wa.me/916267121751",
            cta: "Request design"
        },
        {
            title: "Social Media Management",
            icon: "📲",
            image: "/smm.png",
            colorClass: "bg-secondary",
            textColor: "text-secondary",
            tags: ["Instagram & FB Handling", "Content Planning", "Caption Writing", "Growth Strategy"],
            link: "https://wa.me/916267121751",
            cta: "Consult Now"
        }
    ];

    return (
        <section id="services" className="py-32 relative overflow-hidden bg-background">
            {/* Background Orbs */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary rounded-full blur-[150px] -mr-64 -mt-64"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary rounded-full blur-[150px] -ml-64 -mb-64"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
                    <div className="max-w-2xl">
                        <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.85] text-foreground">
                            Our <br />
                            <span className="text-primary italic">Services</span>
                        </h2>
                        <p className="text-xl md:text-2xl font-medium opacity-60 border-l-4 border-primary pl-6 py-2 ml-1 text-foreground">
                            High-quality visual content tailored for <br />
                            your personal brand or business.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        {['All', 'Video', 'Photo', 'Design', 'Social'].map(cat => (
                            <button key={cat} className="px-6 py-3 rounded-2xl border border-foreground/10 text-sm font-bold hover:bg-primary hover:text-white hover:border-primary transition-all active:scale-95 text-foreground">
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative h-[650px] rounded-[60px] overflow-hidden border border-foreground/5 shadow-2xl hover:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] transition-all duration-700"
                        >
                            {/* Background Image Wrapper */}
                            <div className="absolute inset-0 z-0">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover transition-transform duration-[3s] group-hover:scale-110"
                                />
                                {/* Sophisticated Dark Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 transition-opacity duration-700"></div>
                                {/* Color Tint on Hover */}
                                <div className={`absolute inset-0 ${service.colorClass} opacity-0 group-hover:opacity-10 transition-opacity duration-700`}></div>
                            </div>

                            {/* Card Content Area */}
                            <div className="relative z-10 h-full p-10 md:p-14 flex flex-col justify-between">
                                <div className="flex justify-between items-start">
                                    <div className={`${service.colorClass} text-white w-20 h-20 rounded-[30px] flex items-center justify-center text-4xl shadow-2xl transform -rotate-12 group-hover:rotate-0 transition-transform duration-700`}>
                                        {service.icon}
                                    </div>
                                    <div className="bg-foreground text-background px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-xl">
                                        Top Rated
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter uppercase leading-[0.85] transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        {service.title.split(' & ').map((part, i) => (
                                            <span key={i} className="block">
                                                {part}{i === 0 && service.title.includes('&') ? ' &' : ''}
                                            </span>
                                        ))}
                                    </h3>

                                    {service.highlight && (
                                        <p className="text-primary font-bold text-lg italic border-l-4 border-primary pl-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                                            {service.highlight}
                                        </p>
                                    )}

                                    <div className="flex flex-wrap gap-2 pt-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                                        {service.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className={`px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${i === 0
                                                    ? `${service.colorClass} text-white shadow-lg`
                                                    : "bg-white/20 text-white backdrop-blur-md border border-white/10 hover:bg-white hover:text-foreground"
                                                    }`}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="pt-10 opacity-0 group-hover:opacity-100 transform translate-y-8 group-hover:translate-y-0 transition-all duration-700 delay-150">
                                        <a
                                            href={service.link}
                                            className={`${service.colorClass} text-white px-12 py-5 rounded-[24px] font-black text-xl shadow-2xl hover:scale-105 active:scale-95 transition-all inline-flex items-center gap-4`}
                                        >
                                            {service.cta}
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Decoration Bar */}
                            <div className={`absolute bottom-0 left-0 h-2 w-0 ${service.colorClass} group-hover:w-full transition-all duration-1000`}></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
