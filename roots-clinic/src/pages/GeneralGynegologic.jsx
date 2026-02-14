import React from 'react';

const GeneralGynecologic = () => {
  const videos = [
    {
      id: 1,
      title: "Understanding PCOD",
      description: "Polycystic Ovarian Disease: symptoms, diagnosis, and management",
      thumbnail: "/video-thumb-1.jpg"
    },
    {
      id: 2,
      title: "Menstrual Health Basics",
      description: "What's normal and when to seek medical attention",
      thumbnail: "/video-thumb-2.jpg"
    },
    {
      id: 3,
      title: "Pelvic Pain Management",
      description: "Common causes and treatment options for pelvic pain",
      thumbnail: "/video-thumb-3.jpg"
    },
    {
      id: 4,
      title: "Cervical Health and Screening",
      description: "Importance of regular Pap smears and HPV screening",
      thumbnail: "/video-thumb-4.jpg"
    },
    {
      id: 5,
      title: "Menopause Management",
      description: "Navigating hormonal changes and symptom relief",
      thumbnail: "/video-thumb-5.jpg"
    },
    {
      id: 6,
      title: "Contraception Options",
      description: "Choosing the right birth control method for you",
      thumbnail: "/video-thumb-6.jpg"
    }
  ];

  return (
    <div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-700 to-pink-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            General Gynecologic Queries
          </h1>
          <p className="text-xl text-pink-100">
            Expert answers to common women's health questions
          </p>
        </div>
      </section>

      {/* Video Gallery */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Watch our educational videos covering a wide range of gynecological topics.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video) => (
              <div key={video.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                <div className="relative bg-gray-200 h-48">
                  <img 
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {video.title}
                  </h3>
                  <p className="text-gray-600">
                    {video.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Topics */}
      <section className="py-16 bg-pink-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Common Women's Health Topics
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              "Menstrual Disorders",
              "PCOD/PCOS Management",
              "Preventive Care",
              "Pelvic Health",
              "Contraception Counseling",
              "Menopause Support"
            ].map((title, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {title}
                </h3>
                <p className="text-gray-600">
                  Expert guidance and personalized care for women's health.
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "How often should I have a gynecological checkup?",
                a: "Annual exams are recommended, or more frequently if you have specific concerns."
              },
              {
                q: "What should I expect during my first visit?",
                a: "A medical history review, physical exam, and open discussion of concerns."
              },
              {
                q: "When should I worry about irregular periods?",
                a: "If periods are consistently irregular, painful, or absent for months, schedule an evaluation."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {faq.q}
                </h3>
                <p className="text-gray-600">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-pink-700 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Have a Specific Health Concern?
          </h3>

          <p className="text-lg mb-8 max-w-2xl mx-auto text-pink-100">
            Schedule a consultation to discuss your gynecological health.
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

            <a 
              href="tel:+917068706821"
              className="bg-pink-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-900 transition"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default GeneralGynecologic;