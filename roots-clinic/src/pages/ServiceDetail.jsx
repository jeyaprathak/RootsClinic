import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ServiceDetail = () => {
  const { id } = useParams();

  const services = { /* keep your services object exactly same */ };

  const service = services[id] || services[1];

  return (
    <div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-700 to-pink-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="mb-6">
            <Link to="/" className="text-pink-200 hover:text-white transition">
              Home
            </Link>
            <span className="mx-2 text-pink-200">/</span>
            <span>Services</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold">
            {service.title}
          </h1>
        </div>
      </section>

      {/* Service Detail Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">

          {/* Overview */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Overview
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {service.fullDescription}
            </p>
          </div>

          {/* Benefits */}
          <div className="mb-12 bg-pink-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Key Benefits
            </h2>

            <ul className="space-y-3">
              {service.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-6 h-6 text-pink-600 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Process */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Our Process
            </h2>

            <div className="space-y-4">
              {service.process.map((step, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-8 h-8 bg-pink-600 text-white rounded-full flex items-center justify-center font-semibold mr-4">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 pt-1">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-pink-700 to-pink-600 rounded-lg p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Get Started?
            </h3>

            <p className="text-lg mb-6 text-pink-100">
              Schedule a consultation to discuss your specific needs.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="https://rootsclinics.com/" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-pink-100 transition"
              >
                Book Appointment
              </a>

              <Link 
                to="/contact"
                className="bg-pink-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-900 transition"
              >
                Contact Us
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-pink-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Other Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((serviceId) => {
              if (serviceId.toString() === id) return null;
              const relatedService = services[serviceId];

              return (
                <Link 
                  key={serviceId}
                  to={`/service/${serviceId}`}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {relatedService.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {relatedService.fullDescription}
                  </p>

                  <span className="text-pink-600 font-semibold hover:text-pink-800 transition">
                    Learn More →
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
};

export default ServiceDetail;