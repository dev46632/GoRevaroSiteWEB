import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="sticky top-0 bg-white/90 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-width mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
              <div className="w-5 h-5 bg-gray-900 rounded-full -ml-2"></div>
            </div>
            <span className="text-xl font-semibold text-gray-900">Go Revaro</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center bg-white rounded-full px-2 py-2 shadow-sm border">
            <NavLink
              to="/"
              onClick={closeMenu}
              className={({ isActive }) =>
                `px-4 py-2 rounded-full transition-colors ${
                  isActive
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              onClick={closeMenu}
              className={({ isActive }) =>
                `ml-1 px-4 py-2 rounded-full transition-colors ${
                  isActive
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`
              }
            >
              Why Us
            </NavLink>
            <a 
              href="https://calendly.com/gorevaro/consultation" target="_blank" rel="noreferrer"
              className="px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-full transition-colors"
            >
              Contact
            </a>
          </div>

          {/* CTA Button */}
          <a 
            href="https://calendly.com/gorevaro/consultation" target="_blank" rel="noreferrer"
            className="hidden md:block bg-transparent border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300"
          >
            Book Consultation
          </a>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-2">
              <NavLink
                to="/"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg transition-colors ${
                    isActive ? 'bg-blue-600 text-white' : 'text-gray-600 hover:text-gray-900'
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg transition-colors ${
                    isActive ? 'bg-blue-600 text-white' : 'text-gray-600 hover:text-gray-900'
                  }`
                }
              >
                Why Us
              </NavLink>
              <a 
                href="https://calendly.com/gorevaro/consultation" target="_blank" rel="noreferrer"
                className="text-left px-4 py-2 text-gray-600 hover:text-gray-900 rounded-lg transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
