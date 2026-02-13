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
      <section className="bg-gradient-to-r from-teal-700 to-teal-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">General Gynecologic Queries</h1>
          <p className="text-xl text-teal-100">
            Expert answers to common women's health questions
          </p>
        </div>
      </section>

      {/* Video Gallery */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Watch our educational videos covering a wide range of gynecological topics. Dr. Ambily Jose addresses common concerns and provides expert guidance on women's health issues.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video) => (
              <div key={video.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                <div className="relative bg-gray-200 h-48 flex items-center justify-center">
                  <img 
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = '<svg class="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>';
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
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

      {/* Common Topics Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Common Women's Health Topics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Menstrual Disorders
              </h3>
              <p className="text-gray-600">
                Irregular periods, heavy bleeding, painful menstruation, and other cycle-related concerns
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                PCOD/PCOS Management
              </h3>
              <p className="text-gray-600">
                Comprehensive care for polycystic ovarian syndrome including hormonal balance and lifestyle management
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Preventive Care
              </h3>
              <p className="text-gray-600">
                Regular health screenings, Pap smears, breast exams, and wellness checkups
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Pelvic Health
              </h3>
              <p className="text-gray-600">
                Management of pelvic pain, infections, and other pelvic health concerns
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Contraception Counseling
              </h3>
              <p className="text-gray-600">
                Guidance on choosing the right birth control method based on your needs and lifestyle
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Menopause Support
              </h3>
              <p className="text-gray-600">
                Comprehensive management of menopausal symptoms and hormonal changes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                How often should I have a gynecological checkup?
              </h3>
              <p className="text-gray-600">
                It's recommended to have an annual gynecological exam, including a pelvic exam and Pap smear (based on age and risk factors). More frequent visits may be needed if you have specific health concerns.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                What should I expect during my first visit?
              </h3>
              <p className="text-gray-600">
                Your first visit will include a detailed medical history discussion, physical examination, and any necessary tests. We create a comfortable, private environment where you can openly discuss your health concerns.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                When should I be concerned about irregular periods?
              </h3>
              <p className="text-gray-600">
                If your periods are consistently irregular, very heavy, extremely painful, or if you miss periods for several months (and are not pregnant), it's important to schedule a consultation for evaluation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal-700 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Have a Specific Health Concern?
          </h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-teal-100">
            Schedule a consultation to discuss your gynecological health with Dr. Ambily Jose
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://rootsclinics.com/" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-teal-600 px-8 py-3 rounded-full font-semibold hover:bg-teal-50 transition"
            >
              Book Appointment
            </a>
            <a 
              href="tel:+917068706821"
              className="bg-teal-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-teal-900 transition"
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