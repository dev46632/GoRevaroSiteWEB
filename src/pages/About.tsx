import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const About: React.FC = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [hash]);

  return (
    <main className="py-20 bg-gray-50 min-h-screen">
      <div className="max-width mx-auto px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl lg:text-5xl font-light text-gray-900 mb-8">About Us</h1>
          <div className="text-xl text-gray-600 leading-relaxed space-y-6 max-w-3xl mx-auto">
            <p>
              At Go Revaro, we believe great talent is everywhere, you just need the right partner to find and manage it. Our leadership team has spent over two decades building and scaling sales organizations across SaaS, services, and utilities.
            </p>
            <p>
              Now, we're helping SMB businesses do the same, accessing global talent at a fraction of the cost, with zero compromise on quality.
            </p>
          </div>
        </div>

        {/* Why Choose Card (horizontal) */}
        <div className="mt-12 bg-white rounded-3xl p-8 md:p-12 shadow-sm relative overflow-hidden">
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-gradient-to-br from-blue-100/60 to-transparent rounded-full"></div>
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 text-center mb-8 relative z-10">Why Choose Go Revaro?</h3>
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-semibold text-orange-500 mb-2">20+</div>
              <div className="text-sm md:text-base text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-semibold text-orange-500 mb-2">50%</div>
              <div className="text-sm md:text-base text-gray-600">Cost Reduction</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-semibold text-orange-500 mb-2">100%</div>
              <div className="text-sm md:text-base text-gray-600">Quality Focus</div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Us Section */}
      <section id="why-us" className="py-20 bg-white">
        <div className="max-width mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">Smarter hiring. Stronger results.</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Go Revaro isn't just about saving money, we're about creating measurable ROI for your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="group">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 h-full border-l-4 border-orange-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-6 h-6 bg-white rounded-full"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Proven leadership</h3>
                <p className="text-gray-600 leading-relaxed">20+ years building and managing high-performing sales teams in SaaS and recruitment.</p>
              </div>
            </div>

            <div className="group">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 h-full border-l-4 border-blue-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-6 h-6 bg-white rounded-full"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Global reach</h3>
                <p className="text-gray-600 leading-relaxed">We find the best candidates for you, wherever they are in the world.</p>
              </div>
            </div>

            <div className="group">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 h-full border-l-4 border-orange-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-6 h-6 bg-white rounded-full"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">ROI that counts</h3>
                <p className="text-gray-600 leading-relaxed">Lower overheads, faster ramp times, and higher output mean every hire pays for itself sooner.</p>
              </div>
            </div>

            <div className="group">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 h-full border-l-4 border-blue-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-6 h-6 bg-white rounded-full"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Time saved</h3>
                <p className="text-gray-600 leading-relaxed">We handle sourcing, vetting, and placement so you don't have to allocate internal resources.</p>
              </div>
            </div>

            <div className="group">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 h-full border-l-4 border-orange-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-6 h-6 bg-white rounded-full"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Flexible models</h3>
                <p className="text-gray-600 leading-relaxed">Start lean with one role or scale into fully managed teams.</p>
              </div>
            </div>

            <div className="group">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 h-full border-l-4 border-blue-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-6 h-6 bg-white rounded-full"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Built-in management</h3>
                <p className="text-gray-600 leading-relaxed">Choose a managed model and get a dedicated manager at no extra cost for every 5 sellers.</p>
              </div>
            </div>

            {/* New: Quality guaranteed */}
            <div className="group">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 h-full border-l-4 border-orange-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-6 h-6 bg-white rounded-full"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality guaranteed</h3>
                <p className="text-gray-600 leading-relaxed">Only vetted, skilled professionals make it to your shortlist.</p>
              </div>
            </div>

            {/* New: Ongoing training */}
            <div className="group">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 h-full border-l-4 border-blue-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-6 h-6 bg-white rounded-full"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Ongoing training</h3>
                <p className="text-gray-600 leading-relaxed">We provide frameworks, playbooks, and coaching to keep your talent sharp.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
