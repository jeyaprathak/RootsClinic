import React from 'react';

const PregnancyRelated = () => {
  const videos = [
    {
      id: 1,
      title: "First Trimester Care",
      description: "Essential information about the first 12 weeks of pregnancy",
      thumbnail: "/video-thumb-1.jpg"
    },
    {
      id: 2,
      title: "Nutrition During Pregnancy",
      description: "What to eat and avoid during pregnancy for optimal health",
      thumbnail: "/video-thumb-2.jpg"
    },
    {
      id: 3,
      title: "Exercise and Pregnancy",
      description: "Safe exercises and activities during pregnancy",
      thumbnail: "/video-thumb-3.jpg"
    },
    {
      id: 4,
      title: "Prenatal Care Essentials",
      description: "Important prenatal checkups and tests",
      thumbnail: "/video-thumb-4.jpg"
    },
    {
      id: 5,
      title: "Labor and Delivery Preparation",
      description: "What to expect during labor and delivery",
      thumbnail: "/video-thumb-5.jpg"
    },
    {
      id: 6,
      title: "Postpartum Recovery",
      description: "Recovery tips and what to expect after delivery",
      thumbnail: "/video-thumb-6.jpg"
    }
  ];

  return (
    <div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-700 to-pink-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Pregnancy Related Videos
          </h1>
          <p className="text-xl text-pink-100">
            Expert guidance for your pregnancy journey
          </p>
        </div>
      </section>

      {/* Video Gallery */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Watch our comprehensive video series covering all aspects of pregnancy,
            from conception to postpartum care.
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

      {/* CTA Section */}
      <section className="py-16 bg-pink-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Have More Questions?
          </h3>

          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Schedule a consultation for personalized guidance throughout your pregnancy.
          </p>

          <a 
            href="https://rootsclinics.com/" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-700 transition inline-block"
          >
            Book Consultation
          </a>
        </div>
      </section>

    </div>
  );
};

export default PregnancyRelated;