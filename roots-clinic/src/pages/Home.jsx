import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const services = [
    {
      id: 1,
      title: "Infertility Evaluation and Treatment",
      description: "Comprehensive assessment and personalized treatment plans for couples facing infertility...",
      image: "/service-1.png"
    },
    {
      id: 2,
      title: "Preconception Counseling",
      description: "Guidance for couples planning to conceive, covering health assessments, lifestyle...",
      image: "/service-2.png"
    },
    {
      id: 3,
      title: "Ovulation Induction",
      description: "Medical assistance to stimulate ovulation, enhancing chances of conception for...",
      image: "/service-3.png"
    },
    {
      id: 4,
      title: "Laparoscopy",
      description: "Minimally invasive surgical procedures for diagnosing and treating reproductive health...",
      image: "/service-4.png"
    },
    {
      id: 5,
      title: "Hysteroscopy",
      description: "In-office procedures to evaluate and treat uterine conditions, including polyps...",
      image: "/service-5.png"
    },
    {
      id: 6,
      title: "PCOD Management",
      description: "Specialized care for women managing PCOD, focusing on hormonal balance...",
      image: "/service-6.png"
    },
    {
      id: 7,
      title: "Gynecologic Evaluation and Treatment",
      description: "Comprehensive assessments for various gynecological conditions, ensuring personalized care for...",
      image: "/service-7.png"
    },
    {
      id: 8,
      title: "Menstrual Disorders Management",
      description: "Evaluation and treatment of irregular menstrual cycles, heavy bleeding, and...",
      image: "/service-8.png"
    },
    {
      id: 9,
      title: "Gynecological Health Check-ups",
      description: "Regular wellness exams, including Pap smears and breast exams, to...",
      image: "/service-9.png"
    },
    {
      id: 10,
      title: "Fertility Preservation",
      description: "Options for women to preserve their fertility through egg freezing...",
      image: "/service-10.png"
    }
  ];

  const blogs = [
    {
      id: 1,
      title: 'Fertility Issues: "Fertility Facts Uncovered"',
      excerpt: "Fertility issues affect millions of couples worldwide, yet...",
      image: "/blog-1.jpg",
      date: "15 Nov"
    },
    {
      id: 2,
      title: "Pregnancy Insights Revealed!",
      excerpt: "Pregnancy is a miraculous journey filled with excitement,...",
      image: "/blog-2.jpg",
      date: "15 Nov"
    },
    {
      id: 3,
      title: "Ask Your Gynecologic Questions!",
      excerpt: "Gynecological health is essential to every woman's overall...",
      image: "/blog-3.jpg",
      date: "15 Nov"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-700 to-teal-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="/line-img-home.png" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-teal-200 text-lg mb-2">Roots clinic</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Expertise in Women's Health, Adolescence to Menopause
              </h1>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://rootsclinics.com/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-teal-700 px-8 py-3 rounded-full font-semibold hover:bg-teal-50 transition text-center"
                >
                  Book Appointment
                </a>
                <a 
                  href="https://play.google.com/store/apps/details?id=com.mycompany.patient&hl=en_IN" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-teal-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-teal-900 transition text-center"
                >
                  Book Via App
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src="/favicon-png.png" 
                alt="Roots Clinic" 
                className="w-64 h-64 object-contain"
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256"><circle cx="128" cy="128" r="120" fill="%2314b8a6" opacity="0.3"/></svg>';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Caring Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Caring for Women at Every Step
            </h2>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
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
              <p className="text-teal-600 font-semibold mb-2">About Us</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Hey, I am Dr. Ambily Jose
              </h2>
              <p className="text-lg font-semibold text-gray-700 mb-4">
                Gynecologist & Fertility specialist | MBBS (AIIMS, New Delhi), MD(OBG- Gold medalist, AIIMS New Delhi), DNB, FNB
              </p>
              <p className="text-gray-600 mb-4">
                My medical journey began at AIIMS, New Delhi, where I developed a passion for gynecology—a field that blends advanced medical expertise, surgical precision, and the privilege of supporting women through all stages of life.
              </p>
              <p className="text-gray-600 mb-6">
                I specialize in fertility and reproductive health, with advanced training in Assisted Reproductive Technology (ART), including IVF and ICSI. My expertise also extends to male infertility, encompassing medical management and azoospermia management, including TESA. Additionally, I bring extensive experience in minimally invasive procedures, such as laparoscopic and hysteroscopic surgeries, allowing me to deliver comprehensive and cutting-edge care tailored to my patients' needs.
              </p>
              <Link 
                to="/about"
                className="bg-teal-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-teal-700 transition inline-block"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nurturing Your Journey to Parenthood
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            We are here to support you with compassionate, expert care at every stage of your journey to parenthood and beyond.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="tel:+917068706821"
              className="bg-white text-teal-600 px-8 py-3 rounded-full font-semibold hover:bg-teal-50 transition"
            >
              +91-7068706821
            </a>
            <Link 
              to="/contact"
              className="bg-teal-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-teal-900 transition"
            >
              Let's Connect
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Come Experience Compassionate Care and Empowering Expertise!
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-lg shadow-lg">
              <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Personalized Fertility Solutions
              </h3>
              <p className="text-gray-600">
                Every patient's journey is unique, and we provide tailored fertility treatments
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-lg shadow-lg">
              <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Holistic Women's Health Support
              </h3>
              <p className="text-gray-600">
                From adolescence through menopause, our comprehensive care covers all stages of women's health
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-lg shadow-lg">
              <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Patient-Centered Care
              </h3>
              <p className="text-gray-600">
                Making you an active partner in your healthcare decisions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Here's how we can help you
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300"><rect width="400" height="300" fill="%23e5e7eb"/></svg>';
                  }}
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <Link 
                    to={`/service/${service.id}`}
                    className="text-teal-600 font-semibold hover:text-teal-700 transition"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-teal-600 font-semibold mb-2">Articles & Tips</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Latest Blogs
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <div key={blog.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                <img 
                  src={blog.image} 
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300"><rect width="400" height="300" fill="%23e5e7eb"/></svg>';
                  }}
                />
                <div className="p-6">
                  <p className="text-teal-600 font-semibold mb-2">{blog.date}</p>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {blog.excerpt}
                  </p>
                  <Link 
                    to={`/blog/${blog.id}`}
                    className="text-teal-600 font-semibold hover:text-teal-700 transition"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal-700 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-teal-200 font-semibold mb-2">What it's about</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                FERTILITY SOLUTIONS TAILORED FOR YOU
              </h2>
              <p className="text-lg mb-6">
                We recognize that seeking help is a significant step, and we deeply value the trust you place in us. We understand that your time is precious, and we are committed to providing ethical solutions that respect your individual needs.
              </p>
              <p className="text-lg">
                As experienced fertility specialists, we offer personalized treatment plans supported by advanced technology and equipment. We guide you through every step of your journey, ensuring you receive compassionate and supportive care. Our focus is on achieving high success rates while empowering you with the knowledge and support you need.
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src="/dr-ambily-jose.png" 
                alt="Dr. Ambily Jose" 
                className="rounded-lg shadow-2xl max-w-md w-full"
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="500"><rect width="400" height="500" fill="%2314b8a6" opacity="0.3"/></svg>';
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;