import React from 'react';

const FertilityIssues = () => {
  const videos = [
    {
      id: 1,
      title: "Understanding Infertility",
      description: "Common causes and factors affecting fertility in both men and women",
      thumbnail: "/video-thumb-1.jpg"
    },
    {
      id: 2,
      title: "IVF Process Explained",
      description: "Step-by-step guide to In Vitro Fertilization treatment",
      thumbnail: "/video-thumb-2.jpg"
    },
    {
      id: 3,
      title: "ICSI Treatment Overview",
      description: "Intracytoplasmic Sperm Injection for male infertility",
      thumbnail: "/video-thumb-3.jpg"
    },
    {
      id: 4,
      title: "Egg Freezing and Fertility Preservation",
      description: "Options for preserving your fertility for the future",
      thumbnail: "/video-thumb-4.jpg"
    },
    {
      id: 5,
      title: "Male Infertility Solutions",
      description: "Diagnosis and treatment options for male fertility issues",
      thumbnail: "/video-thumb-5.jpg"
    },
    {
      id: 6,
      title: "Lifestyle and Fertility",
      description: "How diet, exercise, and habits affect your fertility",
      thumbnail: "/video-thumb-6.jpg"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-700 to-teal-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Fertility Issues</h1>
          <p className="text-xl text-teal-100">
            Comprehensive information about fertility challenges and solutions
          </p>
        </div>
      </section>

      {/* Video Gallery */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Explore our video library covering various aspects of fertility, from understanding infertility to advanced treatment options. Dr. Ambily Jose provides expert insights into fertility challenges and solutions.
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

      {/* Info Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Understanding Fertility Challenges
              </h2>
              <p className="text-gray-600 mb-4">
                Fertility challenges affect many couples, but with proper diagnosis and treatment, most can achieve their dream of parenthood. Our comprehensive approach addresses both male and female fertility factors.
              </p>
              <p className="text-gray-600 mb-6">
                We offer advanced diagnostic tools and the latest assisted reproductive technologies, including IVF, ICSI, and fertility preservation options. Every treatment plan is personalized to your unique situation.
              </p>
              <a 
                href="https://rootsclinics.com/" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-teal-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-teal-700 transition inline-block"
              >
                Schedule Consultation
              </a>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Common Fertility Factors
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-teal-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Ovulation disorders</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-teal-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Tubal factors</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-teal-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Endometriosis</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-teal-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Male factor infertility</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-teal-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Age-related factors</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-teal-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Unexplained infertility</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal-700 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Ready to Start Your Fertility Journey?
          </h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-teal-100">
            Our team is here to support you with compassionate, expert fertility care tailored to your needs
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
              Call Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FertilityIssues;