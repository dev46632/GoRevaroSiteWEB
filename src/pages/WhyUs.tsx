import React from 'react';
import { ArrowRight } from 'lucide-react';

const WhyUs: React.FC = () => {
  return (
    <main className="py-20 bg-white min-h-screen">
      <div className="max-width mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">Smarter hiring. Stronger results.</h1>
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
        </div>

        <div className="flex justify-center">
          <a 
            href="https://calendly.com/gorevaro/consultation" target="_blank" rel="noreferrer"
            className="border border-blue-600 text-blue-600 px-6 py-3 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center gap-2"
          >
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            Book a consultation
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </main>
  );
};

export default WhyUs;
