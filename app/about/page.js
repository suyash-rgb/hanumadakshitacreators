import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppToggle from '../components/WhatsAppToggle';
import Image from 'next/image';

export default function About() {
  return (
    <div className="bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-sky-200 via-sky-250 to-blue-300 text-white py-32">
        <div className="absolute inset-0 bg-white opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-orange-600 mb-6">
              ✨ About Us
            </h1>
            <p className="text-xl text-sky-900 max-w-3xl mx-auto">
              Dhar's Own Social Media Agency — HanumaDakshitaCreators
            </p>
          </div>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {/* Our Story */}
            <div className="bg-sky-50 rounded-xl p-8 border-l-4 border-orange-500">
              <h2 className="text-3xl font-bold text-sky-900 mb-4">Our Story</h2>
              <p className="text-lg text-sky-700 leading-relaxed">
                At HanumaDakshitaCreators, we believe every brand has a story worth telling. Based in Dhar, we are a passionate team of creators dedicated to transforming ideas into impactful visuals. From eye‑catching graphics to professional banners and posters, our work is designed to help businesses stand out in the digital space.
              </p>
            </div>

            {/* What Sets Us Apart */}
            <div className="bg-orange-50 rounded-xl p-8 border-l-4 border-sky-500">
              <h2 className="text-3xl font-bold text-sky-900 mb-4">What Sets Us Apart</h2>
              <p className="text-lg text-sky-700 leading-relaxed mb-6">
                Our commitment to customer satisfaction is what truly defines us. We don't just deliver designs — we craft experiences that resonate with audiences and build lasting impressions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="text-4xl mb-3">🎨</div>
                  <h3 className="text-xl font-bold text-sky-900 mb-2">Creative Excellence</h3>
                  <p className="text-sky-700">Innovative designs that capture attention and communicate your brand message</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="text-4xl mb-3">🤝</div>
                  <h3 className="text-xl font-bold text-sky-900 mb-2">Customer Satisfaction</h3>
                  <p className="text-sky-700">Your success is our priority, every step of the way</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="text-4xl mb-3">⚡</div>
                  <h3 className="text-xl font-bold text-sky-900 mb-2">Reliability</h3>
                  <p className="text-sky-700">Consistent quality and timely delivery on every project</p>
                </div>
              </div>
            </div>

            {/* Who We Serve */}
            <div className="bg-sky-50 rounded-xl p-8 border-l-4 border-orange-500">
              <h2 className="text-3xl font-bold text-sky-900 mb-4">Who We Serve</h2>
              <p className="text-lg text-sky-700 leading-relaxed mb-6">
                Whether it's a small business looking to grow online or an established brand seeking fresh creative energy, we bring hard work, creativity, and reliability to every project.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📱</span>
                  <div>
                    <h3 className="font-bold text-sky-900">Small Businesses</h3>
                    <p className="text-sky-700">Growing your online presence from the ground up</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🏢</span>
                  <div>
                    <h3 className="font-bold text-sky-900">Established Brands</h3>
                    <p className="text-sky-700">Refreshing your creative identity and staying relevant</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🎯</span>
                  <div>
                    <h3 className="font-bold text-sky-900">Startups</h3>
                    <p className="text-sky-700">Building a strong brand presence from day one</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🌟</span>
                  <div>
                    <h3 className="font-bold text-sky-900">Content Creators</h3>
                    <p className="text-sky-700">Creating stunning visuals that engage your audience</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Values */}
            <div className="bg-gradient-to-r from-sky-50 to-orange-50 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-sky-900 mb-6 text-center">Our Core Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="bg-orange-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 text-white text-2xl">
                    ✨
                  </div>
                  <h3 className="font-bold text-sky-900">Creativity</h3>
                  <p className="text-sm text-sky-700 mt-2">Innovation in every design</p>
                </div>
                <div className="text-center">
                  <div className="bg-orange-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 text-white text-2xl">
                    💪
                  </div>
                  <h3 className="font-bold text-sky-900">Dedication</h3>
                  <p className="text-sm text-sky-700 mt-2">Hard work on every project</p>
                </div>
                <div className="text-center">
                  <div className="bg-orange-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 text-white text-2xl">
                    🎯
                  </div>
                  <h3 className="font-bold text-sky-900">Quality</h3>
                  <p className="text-sm text-sky-700 mt-2">Excellence in execution</p>
                </div>
                <div className="text-center">
                  <div className="bg-orange-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 text-white text-2xl">
                    🤝
                  </div>
                  <h3 className="font-bold text-sky-900">Partnership</h3>
                  <p className="text-sm text-sky-700 mt-2">Your success is ours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sky-500 to-sky-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto">
            Let's bring your vision to life with creative excellence and dedication.
          </p>
          <button className="bg-orange-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-orange-600 transition duration-300 shadow-lg">
            Get In Touch
          </button>
        </div>
      </section>

      <Footer />
      <WhatsAppToggle />
    </div>
  );
}
