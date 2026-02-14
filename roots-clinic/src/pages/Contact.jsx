import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-700 to-pink-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-pink-100">
            We're here to help and answer any questions you might have
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Get In Touch
              </h2>

              <div className="space-y-6">

                {/* Phone */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold">Phone</h3>
                    <a href="tel:+917068706821" className="text-pink-600 hover:text-pink-800">
                      +91-7068 7068 21
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold">Email</h3>
                    <a href="mailto:rootsclinicforwomen@gmail.com" className="text-pink-600 hover:text-pink-800">
                      rootsclinicforwomen@gmail.com
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-md">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">

                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />

                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-pink-500"
                />

                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-pink-500"
                />

                <input
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-pink-500"
                />

                <textarea
                  name="message"
                  rows="5"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-pink-500"
                ></textarea>

                <button
                  type="submit"
                  className="w-full bg-pink-600 text-white py-4 rounded-lg font-semibold hover:bg-pink-700 transition"
                >
                  Send Message
                </button>

              </form>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-pink-700 to-pink-600 text-white text-center">
        <h3 className="text-2xl md:text-3xl font-bold mb-6">
          Ready to Schedule an Appointment?
        </h3>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="https://rootsclinics.com/" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-pink-100 transition"
          >
            Book Online
          </a>

          <a 
            href="https://play.google.com/store/apps/details?id=com.mycompany.patient&hl=en_IN" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-900 transition"
          >
            Download App
          </a>
        </div>
      </section>

    </div>
  );
};

export default Contact;