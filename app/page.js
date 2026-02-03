import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppToggle from './components/WhatsAppToggle';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-sky-200 via-sky-250 to-blue-300 text-white py-32">
        <div className="absolute inset-0 bg-white opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {/* <p className="text-orange-600 font-semibold text-lg">Empowered by Devotion, Perfected in Creation!</p> */}
              <h1 className="text-5xl md:text-6xl font-bold leading-tight text-orange-600">
                Transform Your Brand with Creative Excellence
              </h1>
              <p className="text-xl text-sky-900">
                We specialize in Social Media Management, Graphic Designing, and Strategic Advertising to elevate your brand presence.
              </p>
              <div className="flex gap-4 pt-6">
                <button className="bg-orange-500 text-white px-8 py-3 rounded-full font-bold hover:bg-orange-600 transition duration-300">
                  Get Started
                </button>
                <button className="border-2 border-orange-500 text-orange-600 px-8 py-3 rounded-full font-bold hover:bg-orange-500 hover:text-white transition duration-300">
                  Learn More
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/logo.png"
                alt="Hanumadakshita Creators Logo"
                width={550}
                height={550}
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-sky-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-sky-700 max-w-3xl mx-auto">
              We offer comprehensive digital solutions tailored to elevate your brand and maximize your online presence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden border-t-4 border-orange-500 h-full flex flex-col">
              <div className="relative w-full h-64 bg-gray-200">
                <Image
                  src="/smm.png"
                  alt="Social Media Management"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col relative bg-gradient-to-r from-orange-200 via-white-250 to-orange-400">
                <h3 className="text-2xl font-bold text-sky-900 mb-3">Social Media Handling</h3>
                <p className="text-sky-700 flex-1">
                  Strategic content creation and management across all major platforms. We handle posting, engagement, and community growth.
                </p>
                <ul className="mt-6 text-left font-semibold space-y-2 text-sky-700">
                  <li>✓ Content Strategy</li>
                  <li>✓ Daily Posting</li>
                  <li>✓ Community Management</li>
                  <li>✓ Analytics & Reporting</li>
                </ul>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden border-t-4 border-orange-500 h-full flex flex-col">
              <div className="relative w-full h-64 bg-gradient-to-br from-sky-200 to-orange-200">
                <Image
                  src="/graphicdesigning.jpg"
                  alt="Graphic Designing"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col bg-gradient-to-r from-orange-200 via-white-250 to-orange-400">
                <h3 className="text-2xl font-bold text-sky-900 mb-3">Graphic Designing</h3>
                <p className="text-sky-700 flex-1">
                  Eye-catching visual designs that capture attention and communicate your brand message effectively.
                </p>
                <ul className="mt-6 text-left font-semibold space-y-2 text-sky-700">
                  <li>✓ Logo Design</li>
                  <li>✓ Social Media Graphics</li>
                  <li>✓ Branding Materials</li>
                  <li>✓ Poster & Banner Design</li>
                </ul>
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden border-t-4 border-orange-500 h-full flex flex-col">
              <div className="relative w-full h-64 bg-gradient-to-br from-sky-200 to-orange-200">
                <Image
                  src="/digitaladvertising.jpg"
                  alt="Digital Advertising"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col bg-gradient-to-r from-orange-200 via-white-250 to-orange-400">
                <h3 className="text-2xl font-bold text-sky-900 mb-3">Advertising</h3>
                <p className="text-sky-700 flex-1">
                  Targeted advertising campaigns designed to reach your ideal audience and drive conversions.
                </p>
                <ul className="mt-6 text-left font-semibold space-y-2 text-sky-700">
                  <li>✓ Social Media Ads</li>
                  <li>✓ Campaign Strategy</li>
                  <li>✓ Performance Tracking</li>
                  <li>✓ ROI Optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-sky-900 mb-6">
                Why Choose Us?
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-6xl text-green-800 font-extrabold">
                      ✓
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-sky-900">Creative Excellence</h3>
                    <p className="text-sky-700">Innovative designs and strategies that stand out in the digital landscape.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-6xl text-green-800 font-extrabold">
                      ✓
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-sky-900">Data-Driven Approach</h3>
                    <p className="text-sky-700">Every strategy is backed by analytics and performance metrics.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-6xl text-green-800 font-extrabold">
                      ✓
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-sky-900">Dedicated Support</h3>
                    <p className="text-sky-700">Our team is committed to your success and growth.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-6xl text-green-800 font-extrabold">
                      ✓
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-sky-900">Affordable Pricing</h3>
                    <p className="text-sky-700">Premium services at competitive rates for businesses of all sizes.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="w-80 h-80 bg-gradient-to-br from-sky-400 to-orange-400 rounded-2xl shadow-2xl flex items-center ">
                <span className="text-7xl">
                  <Image src="/bg.png" alt="Why Choose Us" width={750} height={750} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sky-500 to-sky-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Brand?
          </h2>
          <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto">
            Let's work together to create something amazing. Contact us today for a free consultation!
          </p>
          <button className="bg-orange-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-orange-600 transition duration-300 shadow-lg">
            Schedule a Call
          </button>
        </div>
      </section>

      {/* Portfolio/Testimonials Section */}
      <section id="portfolio" className="py-20 bg-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-sky-900 mb-4">
              Client Success Stories
            </h2>
            <p className="text-xl text-sky-700">
              See how we've helped brands like yours achieve their goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                <div className="h-48 bg-gradient-to-br from-sky-300 to-orange-300 flex items-center justify-center">
                  <span className="text-6xl">📸</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-sky-900 mb-2">Project {i}</h3>
                  <p className="text-sky-700 mb-4">
                    Successfully increased brand awareness by 150% and engagement by 200% through strategic content and ad campaigns.
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, j) => (
                        <span key={j}>⭐</span>
                      ))}
                    </div>
                    <span className="text-sky-700">5.0</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Instagram Posts Preview Section */}
          <div className="mt-24">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-sky-900 mb-2">
                Follow Us on Instagram
              </h3>
              <p className="text-lg text-sky-700 mb-6">
                Explore our latest creative work and inspiring content
              </p>
              <a
                href="https://www.instagram.com/hanumadakshita_creators?igsh=MWhuN29zdHF5YTB6OA%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-orange-400 to-pink-500 text-white px-8 py-3 rounded-full font-bold hover:opacity-90 transition duration-300"
              >
                Visit Instagram →
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition duration-300 cursor-pointer h-64">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-300 via-sky-200 to-orange-400 flex items-center justify-center">
                    <span className="text-5xl">🎨</span>
                  </div>
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition duration-300 flex items-center justify-center">
                    <div className="text-center text-white transform scale-90 group-hover:scale-100 transition duration-300">
                      <p className="text-sm font-semibold">Post {i}</p>
                      <p className="text-xs mt-2">❤️ Likes • 💬 Comments</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-sky-700 text-sm">
                Click the images above to visit our Instagram or follow the button to see all our posts
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppToggle />
    </div>
  );
}
