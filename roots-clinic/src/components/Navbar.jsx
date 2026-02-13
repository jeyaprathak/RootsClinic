import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showVideoDropdown, setShowVideoDropdown] = useState(false);

  return (
    <nav className="bg-teal-700 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/logo-white.png" 
              alt="Roots Clinic" 
              className="h-16 w-auto"
              onError={(e) => {
                e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="60"><text x="10" y="40" font-family="Arial" font-size="24" fill="white">Roots Clinic</text></svg>';
              }}
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-teal-200 transition">
              Home
            </Link>
            <Link to="/about" className="hover:text-teal-200 transition">
              About
            </Link>
            
            {/* Video Gallery Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setShowVideoDropdown(true)}
              onMouseLeave={() => setShowVideoDropdown(false)}
            >
              <button className="hover:text-teal-200 transition flex items-center">
                Video Gallery
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {showVideoDropdown && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white text-gray-800 rounded-lg shadow-xl py-2">
                  <Link 
                    to="/pregnancy-related" 
                    className="block px-4 py-2 hover:bg-teal-50 transition"
                  >
                    Pregnancy Related
                  </Link>
                  <Link 
                    to="/fertility-issues" 
                    className="block px-4 py-2 hover:bg-teal-50 transition"
                  >
                    Fertility Issues
                  </Link>
                  <Link 
                    to="/general-gynecologic" 
                    className="block px-4 py-2 hover:bg-teal-50 transition"
                  >
                    General Gynecologic Queries
                  </Link>
                </div>
              )}
            </div>

            <a 
              href="https://rootsclinics.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-teal-200 transition"
            >
              Online Consultation
            </a>
            <Link to="/contact" className="hover:text-teal-200 transition">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md hover:bg-teal-600"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-teal-800 px-4 pt-2 pb-4 space-y-2">
          <Link to="/" className="block py-2 hover:text-teal-200" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/about" className="block py-2 hover:text-teal-200" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <div className="py-2">
            <p className="font-semibold mb-2">Video Gallery</p>
            <Link to="/pregnancy-related" className="block py-2 pl-4 hover:text-teal-200" onClick={() => setIsOpen(false)}>
              Pregnancy Related
            </Link>
            <Link to="/fertility-issues" className="block py-2 pl-4 hover:text-teal-200" onClick={() => setIsOpen(false)}>
              Fertility Issues
            </Link>
            <Link to="/general-gynecologic" className="block py-2 pl-4 hover:text-teal-200" onClick={() => setIsOpen(false)}>
              General Gynecologic Queries
            </Link>
          </div>
          <a 
            href="https://rootsclinics.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block py-2 hover:text-teal-200"
          >
            Online Consultation
          </a>
          <Link to="/contact" className="block py-2 hover:text-teal-200" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;