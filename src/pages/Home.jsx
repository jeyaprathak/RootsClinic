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
      <section className="relative bg-gradient-to-r from-pink-700 to-pink-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="/line-img-home.png" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-pink-200 text-lg mb-2">Roots clinic</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Expertise in Women's Health, Adolescence to Menopause
              </h1>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://rootsclinics.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-pink-700 px-8 py-3 rounded-full font-semibold hover:bg-pink-50 transition text-center"
                >
                  Book Appointment
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.mycompany.patient&hl=en_IN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-pink-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-900 transition text-center"
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
              />
            </div>
          </div>
        </div>
      </section>

      {/* Caring Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Caring for Women at Every Step
          </h2>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/dr-ambili.png"
              alt="Dr. Ambily Jose"
              className="rounded-lg shadow-2xl w-full"
            />
          </div>
          <div>
            <p className="text-pink-600 font-semibold mb-2">About Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Hey, I am Dr. Ambily Jose
            </h2>
            <p className="text-gray-600 mb-6">
              Gynecologist & Fertility specialist | MBBS (AIIMS, New Delhi), MD (OBG), DNB, FNB
            </p>
            <Link
              to="/about"
              className="bg-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-700 transition inline-block"
            >
              Read More
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-pink-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nurturing Your Journey to Parenthood
          </h2>
          <p className="text-lg mb-8">
            Compassionate, expert care at every stage of your journey.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:+917068706821"
              className="bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-pink-50 transition"
            >
              +91-7068706821
            </a>
            <Link
              to="/contact"
              className="bg-pink-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-900 transition"
            >
              Let's Connect
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;