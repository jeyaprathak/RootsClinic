import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-700 to-teal-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Dr. Ambily Jose</h1>
          <p className="text-xl text-teal-100">
            Dedicated to Women's Health and Fertility Care
          </p>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="/dr-ambili.png" 
                alt="Dr. Ambily Jose" 
                className="rounded-lg shadow-2xl w-full"
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="500"><rect width="400" height="500" fill="%23e5e7eb"/><text x="50%" y="50%" text-anchor="middle" fill="%239ca3af" font-size="20">Dr. Ambily Jose</text></svg>';
                }}
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Hey, I am Dr. Ambily Jose
              </h2>
              <p className="text-lg font-semibold text-teal-600 mb-4">
                Gynecologist & Fertility specialist
              </p>
              <p className="text-lg font-semibold text-gray-700 mb-6">
                MBBS (AIIMS, New Delhi), MD(OBG- Gold medalist, AIIMS New Delhi), DNB, FNB
              </p>
              <div className="space-y-4 text-gray-600">
                <p>
                  My medical journey began at AIIMS, New Delhi, where I developed a passion for gynecology—a field that blends advanced medical expertise, surgical precision, and the privilege of supporting women through all stages of life.
                </p>
                <p>
                  I specialize in fertility and reproductive health, with advanced training in Assisted Reproductive Technology (ART), including IVF and ICSI. My expertise also extends to male infertility, encompassing medical management and azoospermia management, including TESA.
                </p>
                <p>
                  Additionally, I bring extensive experience in minimally invasive procedures, such as laparoscopic and hysteroscopic surgeries, allowing me to deliver comprehensive and cutting-edge care tailored to my patients' needs.
                </p>
              </div>
            </div>
          </div>

          {/* Qualifications */}
          <div className="bg-gray-50 rounded-lg p-8 mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Professional Qualifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-teal-600 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h4 className="font-semibold text-gray-900">MBBS</h4>
                  <p className="text-gray-600">All India Institute of Medical Sciences (AIIMS), New Delhi</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-teal-600 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h4 className="font-semibold text-gray-900">MD (Obstetrics & Gynecology) - Gold Medalist</h4>
                  <p className="text-gray-600">All India Institute of Medical Sciences (AIIMS), New Delhi</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-teal-600 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h4 className="font-semibold text-gray-900">DNB</h4>
                  <p className="text-gray-600">Diplomate of National Board</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-teal-600 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h4 className="font-semibold text-gray-900">FNB</h4>
                  <p className="text-gray-600">Fellowship of National Board in Reproductive Medicine</p>
                </div>
              </div>
            </div>
          </div>

          {/* Expertise */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Areas of Expertise
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-teal-50 rounded-lg p-6">
                <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Fertility & Reproductive Health
                </h4>
                <p className="text-gray-600">
                  Advanced training in ART, IVF, ICSI, and comprehensive fertility treatments
                </p>
              </div>
              <div className="bg-teal-50 rounded-lg p-6">
                <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Male Infertility Management
                </h4>
                <p className="text-gray-600">
                  Medical management and azoospermia treatment including TESA procedures
                </p>
              </div>
              <div className="bg-teal-50 rounded-lg p-6">
                <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Minimally Invasive Surgery
                </h4>
                <p className="text-gray-600">
                  Extensive experience in laparoscopic and hysteroscopic procedures
                </p>
              </div>
            </div>
          </div>

          {/* Philosophy */}
          <div className="bg-gradient-to-r from-teal-700 to-teal-600 rounded-lg p-8 md:p-12 text-white text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              My Philosophy of Care
            </h3>
            <p className="text-lg mb-6 max-w-3xl mx-auto">
              I believe in providing compassionate, patient-centered care that combines cutting-edge medical expertise with a deep understanding of the emotional journey my patients are on. Every patient's story is unique, and I am committed to tailoring treatment plans that respect individual needs while maintaining the highest standards of medical care.
            </p>
            <p className="text-teal-100 italic">
              "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future." - Jeremiah 29:11
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Ready to Start Your Journey?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Schedule a consultation to discuss your health concerns and treatment options
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://rootsclinics.com/" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-teal-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-teal-700 transition"
            >
              Book Appointment
            </a>
            <Link 
              to="/contact"
              className="bg-white text-teal-600 border-2 border-teal-600 px-8 py-3 rounded-full font-semibold hover:bg-teal-50 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;