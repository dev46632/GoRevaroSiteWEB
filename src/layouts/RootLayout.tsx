import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { ArrowRight } from 'lucide-react';

const RootLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col">
      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>
      <footer className="bg-blue-600 text-white py-20">
        <div className="max-width mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-x-10 gap-y-3 mb-12 opacity-90">
            <span className="text-sm">Sales Talent Acquisition</span>
            <span className="text-sm">Team Building</span>
            <span className="text-sm">Recruitment Strategy</span>
            <span className="text-sm">Talent Consulting</span>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12 pb-12 border-b border-white/20">
            <h2 className="text-3xl lg:text-5xl font-light max-w-3xl leading-tight">
              What happens next usually starts with a conversation.
            </h2>
            <a href="mailto:hello@gorevaro.com" className="text-3xl lg:text-5xl font-light hover:opacity-90 transition-opacity">
              hello@gorevaro.com
            </a>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-12">
            <div className="flex items-center gap-3">
              <ArrowRight className="text-orange-400" size={20} />
              <span className="text-xl font-semibold">Go-Revaro</span>
              <div className="w-2 h-2 bg-white rounded-full ml-2"></div>
            </div>

            <div className="flex flex-wrap gap-12">
              <div>
                <h4 className="text-sm text-blue-200 mb-3">Email</h4>
                <a href="mailto:hello@gorevaro.com" className="text-blue-100 hover:text-white transition-colors">
                  hello@gorevaro.com
                </a>
              </div>
              <div>
                <h4 className="text-sm text-blue-200 mb-3">Connect</h4>
                <div className="space-y-2">
                  <a href="#" className="block text-blue-100 hover:text-white transition-colors">LinkedIn</a>
                  <a href="#" className="block text-blue-100 hover:text-white transition-colors">Twitter</a>
                  <a href="#" className="block text-blue-100 hover:text-white transition-colors">Instagram</a>
                </div>
              </div>
            </div>

            <a
              href="https://calendly.com/gorevaro/consultation" target="_blank" rel="noreferrer"
              className="border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center gap-2"
            >
              <div className="w-2 h-2 bg-white rounded-full"></div>
              Contact us
            </a>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-start gap-4 text-sm text-blue-200">
            <span>© 2025 Go-Revaro. All rights reserved.</span>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RootLayout;
