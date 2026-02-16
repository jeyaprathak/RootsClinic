import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-pink-900 to-pink-800 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

          {/* Logo & Quote */}
          <div>
            <Link to="/">
              <img 
                src="/logo-white.png" 
                alt="Roots Clinic" 
                className="h-16 w-auto mb-4"
              />
            </Link>
            <p className="text-pink-200 text-sm italic mt-4 leading-relaxed">
              "For I know the plans I have for you..." – Jeremiah 29:11
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-pink-200">
              <p>
                <a href="tel:+917068706821" className="hover:text-white transition">
                  +91-7068 7068 21
                </a>
              </p>
              <p>
                <a href="mailto:rootsclinicforwomen@gmail.com" className="hover:text-white transition">
                  rootsclinicforwomen@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Social Icons */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Me</h3>

            <div className="flex space-x-4">

              {/* Instagram */}
              <a 
                href="https://www.instagram.com/dr.ambilyjose/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white p-3 rounded-full text-pink-600 hover:bg-pink-600 hover:text-white transition"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm0 2h8.5C18.493 4 20 5.507 20 7.75v8.5c0 2.243-1.507 3.75-3.75 3.75h-8.5C5.507 20 4 18.493 4 16.25v-8.5C4 5.507 5.507 4 7.75 4zm8.75 1.5a1 1 0 110 2 1 1 0 010-2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z"/>
                </svg>
              </a>

              {/* YouTube */}
              <a 
                href="https://www.youtube.com/channel/UCYgafG5P3AgnamMcyx9FJlA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white p-3 rounded-full text-red-600 hover:bg-red-600 hover:text-white transition"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.5 6.2a2.9 2.9 0 00-2-2C19.7 3.5 12 3.5 12 3.5s-7.7 0-9.5.7a2.9 2.9 0 00-2 2C0 8 0 12 0 12s0 4 .5 5.8a2.9 2.9 0 002 2c1.8.7 9.5.7 9.5.7s7.7 0 9.5-.7a2.9 2.9 0 002-2C24 16 24 12 24 12s0-4-.5-5.8zM9.5 15.5v-7l6 3.5-6 3.5z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a 
                href="https://www.facebook.com/drambilyjose/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white p-3 rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12a10 10 0 10-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.3.2 2.3.2v2.5h-1.3c-1.3 0-1.7.8-1.7 1.6V12h2.9l-.5 2.9h-2.4v7A10 10 0 0022 12z"/>
                </svg>
              </a>

            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-pink-700 pt-6 text-center text-pink-200 text-sm">
          © {new Date().getFullYear()} Roots Clinic. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;