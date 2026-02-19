import Image from 'next/image';

export default function WhyChooseUs() {
    const reasons = [
        { title: "Creative & Trend-Driven", text: "Always ahead of the digital trends to keep you relevant." },
        { title: "Professional Team", text: "Equipped with advanced gear and deep industry expertise." },
        { title: "Affordable Pricing", text: "Transparent packages tailored for local brands and events." },
        { title: "Reliable Delivery", text: "Timely results without compromising on high-quality output." }
    ];

    return (
        <section id="why-choose-us" className="py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-[1.8fr_1fr] gap-12 lg:gap-20 items-center">
                    <div className="relative h-[400px] lg:h-[550px] rounded-[60px] overflow-hidden group shadow-2xl border border-foreground/5">
                        <Image
                            src="/bg.png"
                            alt="Why Choose Us"
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-[3s]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-foreground to-transparent opacity-60"></div>
                        <div className="absolute bottom-12 left-12 right-12">
                            <div className="p-8 glass rounded-3xl">
                                <h3 className="text-2xl font-black tracking-tight mb-2 text-foreground">Excellence in every frame.</h3>
                                <p className="text-sm font-semibold opacity-60 text-foreground uppercase tracking-widest">#1 Content Agency</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-12">
                        <div>
                            <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-6">
                                Why <span className="text-primary italic">Choose Us</span>
                            </h2>
                            <p className="text-lg font-medium opacity-60">We don’t just create content — we create experiences.</p>
                        </div>

                        <div className="space-y-8">
                            {reasons.map((item, idx) => (
                                <div key={idx} className="flex gap-8 group">
                                    <div className="flex-shrink-0 w-12 h-12 bg-foreground text-background rounded-2xl flex items-center justify-center font-black text-xl group-hover:bg-primary transition-colors">
                                        {idx + 1}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-black tracking-tight mb-2 uppercase">{item.title}</h3>
                                        <p className="opacity-60 font-medium">{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
