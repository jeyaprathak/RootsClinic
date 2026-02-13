import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ServiceDetail = () => {
  const { id } = useParams();

  const services = {
    1: {
      title: "Infertility Evaluation and Treatment",
      fullDescription: "Comprehensive assessment and personalized treatment plans for couples facing infertility. Our approach includes thorough diagnostic evaluations, hormone testing, semen analysis, and imaging studies to identify the root causes of infertility. We offer a range of treatment options including medication, lifestyle modifications, and assisted reproductive technologies tailored to your specific needs.",
      benefits: [
        "Comprehensive diagnostic evaluations",
        "Personalized treatment protocols",
        "Advanced reproductive technologies",
        "Continuous monitoring and support",
        "High success rates with ethical practices"
      ],
      process: [
        "Initial consultation and medical history review",
        "Comprehensive fertility testing for both partners",
        "Diagnosis and treatment plan development",
        "Treatment implementation with regular monitoring",
        "Ongoing support and plan adjustments as needed"
      ]
    },
    2: {
      title: "Preconception Counseling",
      fullDescription: "Guidance for couples planning to conceive, covering health assessments, lifestyle modifications, nutritional counseling, and preconception screening. We help optimize your health before pregnancy to increase chances of a healthy conception and pregnancy.",
      benefits: [
        "Comprehensive health assessment",
        "Personalized nutrition and supplement guidance",
        "Lifestyle optimization strategies",
        "Genetic counseling when needed",
        "Risk factor identification and management"
      ],
      process: [
        "Initial health and lifestyle assessment",
        "Laboratory testing and screening",
        "Personalized recommendations",
        "Follow-up consultations",
        "Ongoing support until conception"
      ]
    },
    3: {
      title: "Ovulation Induction",
      fullDescription: "Medical assistance to stimulate ovulation, enhancing chances of conception for women with irregular ovulation or anovulation. This treatment uses carefully monitored medication protocols to help produce mature eggs.",
      benefits: [
        "Improved ovulation regularity",
        "Increased chances of conception",
        "Careful monitoring to optimize results",
        "Minimized risk of complications",
        "Personalized medication protocols"
      ],
      process: [
        "Baseline assessment and ultrasound",
        "Medication administration",
        "Regular monitoring through ultrasound and blood tests",
        "Timing guidance for conception",
        "Post-cycle evaluation"
      ]
    },
    4: {
      title: "Laparoscopy",
      fullDescription: "Minimally invasive surgical procedures for diagnosing and treating reproductive health issues. Laparoscopy allows for precise treatment of conditions like endometriosis, fibroids, ovarian cysts, and tubal blockages with minimal scarring and faster recovery.",
      benefits: [
        "Minimally invasive approach",
        "Faster recovery time",
        "Less post-operative pain",
        "Minimal scarring",
        "Same-day or short hospital stay"
      ],
      process: [
        "Pre-operative evaluation",
        "Minimally invasive surgery under anesthesia",
        "Post-operative monitoring",
        "Quick recovery period",
        "Follow-up care and guidance"
      ]
    },
    5: {
      title: "Hysteroscopy",
      fullDescription: "In-office procedures to evaluate and treat uterine conditions, including polyps, fibroids, adhesions, and abnormal bleeding. Hysteroscopy allows direct visualization and treatment of the uterine cavity.",
      benefits: [
        "Direct visualization of uterine cavity",
        "Precise diagnosis and treatment",
        "Minimally invasive",
        "Often performed in-office",
        "Quick recovery"
      ],
      process: [
        "Initial consultation and indication assessment",
        "Procedure scheduling",
        "Hysteroscopy with or without anesthesia",
        "Treatment of identified conditions",
        "Post-procedure follow-up"
      ]
    },
    6: {
      title: "PCOD Management",
      fullDescription: "Specialized care for women managing Polycystic Ovarian Disease, focusing on hormonal balance, metabolic health, fertility, and overall well-being. Our comprehensive approach addresses both symptoms and underlying causes.",
      benefits: [
        "Comprehensive hormonal assessment",
        "Personalized treatment plans",
        "Lifestyle and dietary guidance",
        "Fertility support when desired",
        "Long-term health management"
      ],
      process: [
        "Detailed diagnostic evaluation",
        "Hormone and metabolic testing",
        "Customized treatment plan",
        "Regular monitoring and adjustments",
        "Ongoing support and education"
      ]
    },
    7: {
      title: "Gynecologic Evaluation and Treatment",
      fullDescription: "Comprehensive assessments for various gynecological conditions, ensuring personalized care for issues ranging from menstrual disorders to pelvic pain, infections, and other women's health concerns.",
      benefits: [
        "Thorough diagnostic approach",
        "Evidence-based treatment options",
        "Patient-centered care",
        "Comprehensive health management",
        "Preventive health guidance"
      ],
      process: [
        "Detailed history and examination",
        "Appropriate diagnostic testing",
        "Treatment plan discussion",
        "Implementation of care plan",
        "Follow-up and monitoring"
      ]
    },
    8: {
      title: "Menstrual Disorders Management",
      fullDescription: "Evaluation and treatment of irregular menstrual cycles, heavy bleeding, painful periods, and other menstrual-related concerns. We offer both medical and surgical treatment options based on your specific condition.",
      benefits: [
        "Accurate diagnosis of underlying causes",
        "Multiple treatment options",
        "Symptom relief and quality of life improvement",
        "Fertility preservation when applicable",
        "Preventive care guidance"
      ],
      process: [
        "Comprehensive menstrual history",
        "Diagnostic testing and imaging",
        "Treatment plan development",
        "Implementation and monitoring",
        "Long-term management strategy"
      ]
    },
    9: {
      title: "Gynecological Health Check-ups",
      fullDescription: "Regular wellness exams, including Pap smears, breast exams, and comprehensive women's health screenings to detect and prevent health issues early. Prevention is key to maintaining optimal health.",
      benefits: [
        "Early detection of health issues",
        "Preventive care approach",
        "Comprehensive screening",
        "Peace of mind",
        "Personalized health recommendations"
      ],
      process: [
        "Comprehensive physical examination",
        "Pap smear and HPV testing",
        "Breast examination",
        "Discussion of health concerns",
        "Screening recommendations"
      ]
    },
    10: {
      title: "Fertility Preservation",
      fullDescription: "Options for women to preserve their fertility through egg freezing and other advanced techniques. Ideal for those delaying parenthood for personal or medical reasons, including cancer treatment.",
      benefits: [
        "Preservation of reproductive potential",
        "Advanced freezing technology",
        "Expert guidance and support",
        "Flexible timeline for future pregnancy",
        "Peace of mind"
      ],
      process: [
        "Initial consultation and counseling",
        "Ovarian reserve testing",
        "Ovarian stimulation protocol",
        "Egg retrieval procedure",
        "Cryopreservation and storage"
      ]
    }
  };

  const service = services[id] || services[1];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-700 to-teal-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-6">
            <Link to="/" className="text-teal-200 hover:text-white">Home</Link>
            <span className="mx-2 text-teal-200">/</span>
            <span>Services</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold">{service.title}</h1>
        </div>
      </section>

      {/* Service Detail Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Description */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {service.fullDescription}
            </p>
          </div>

          {/* Benefits */}
          <div className="mb-12 bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Benefits</h2>
            <ul className="space-y-3">
              {service.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-6 h-6 text-teal-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Process */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Process</h2>
            <div className="space-y-4">
              {service.process.map((step, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-semibold mr-4 flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 pt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-teal-600 rounded-lg p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-lg mb-6 text-teal-100">
              Schedule a consultation to discuss your specific needs and how we can help
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
              <Link 
                to="/contact"
                className="bg-teal-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-teal-900 transition"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  <span className="text-teal-600 font-semibold hover:text-teal-700">
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