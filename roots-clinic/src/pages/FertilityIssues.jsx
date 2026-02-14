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
      <section className="bg-gradient-to-r from-pink-700 to-pink-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Fertility Issues</h1>
          <p className="text-xl text-pink-100">
            Comprehensive information about fertility challenges and solutions
          </p>
        </div>
      </section>

      {/* Video Gallery */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Explore our video library covering various aspects of fertility and treatment options.
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

      {/* Info Section */}
      <section className="py-16 bg-pink-50">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Understanding Fertility Challenges
            </h2>
            <p className="text-gray-600 mb-6">
              Fertility challenges affect many couples, but with proper diagnosis and treatment, most can achieve their dream of parenthood.
            </p>

            <a 
              href="https://rootsclinics.com/" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-700 transition inline-block"
            >
              Schedule Consultation
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Common Fertility Factors
            </h3>
            <ul className="space-y-3">
              {[
                "Ovulation disorders",
                "Tubal factors",
                "Endometriosis",
                "Male factor infertility",
                "Age-related factors",
                "Unexplained infertility"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-6 h-6 text-pink-600 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-pink-700 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Ready to Start Your Fertility Journey?
          </h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-pink-100">
            Compassionate, expert fertility care tailored to your needs.
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
              Call Us
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default FertilityIssues;