import React from 'react';
import { useParams, Link } from 'react-router-dom';

const BlogDetail = () => {
  const { id } = useParams();

  const blogs = {
    1: {
      title: 'Fertility Issues: "Fertility Facts Uncovered"',
      date: "15 Nov",
      author: "Dr. Ambily Jose",
      image: "/blog-1.jpg",
      content: `
        <p class="mb-4">Fertility issues affect millions of couples worldwide, yet many aspects of fertility remain misunderstood or shrouded in misconceptions. Understanding the facts about fertility is the first step toward making informed decisions about your reproductive health.</p>

        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Understanding Fertility Basics</h2>
        <p class="mb-4">Fertility is the natural capability to produce offspring. For humans, fertility depends on various factors including age, health status, lifestyle choices, and environmental factors. Both partners contribute equally to the fertility equation, making it essential to evaluate both when facing challenges.</p>

        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Common Causes of Infertility</h2>
        <p class="mb-4">Infertility can stem from various causes:</p>
        <ul class="list-disc list-inside mb-4 space-y-2 ml-4">
          <li>Ovulation disorders affecting egg production</li>
          <li>Tubal factors blocking or damaging fallopian tubes</li>
          <li>Endometriosis affecting reproductive organs</li>
          <li>Male factor infertility including sperm count or motility issues</li>
          <li>Age-related decline in fertility</li>
          <li>Unexplained infertility</li>
        </ul>

        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">When to Seek Help</h2>
        <p class="mb-4">We recommend seeking fertility evaluation if:</p>
        <ul class="list-disc list-inside mb-4 space-y-2 ml-4">
          <li>You're under 35 and have been trying to conceive for 12 months</li>
          <li>You're 35 or older and have been trying for 6 months</li>
          <li>You have irregular or absent menstrual periods</li>
          <li>You have known fertility risk factors</li>
        </ul>

        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Modern Treatment Options</h2>
        <p class="mb-4">Today's fertility treatments offer hope to many couples. Options range from lifestyle modifications and medication to advanced assisted reproductive technologies like IVF and ICSI. The key is personalized treatment based on thorough evaluation and diagnosis.</p>

        <p class="mt-8 text-gray-600 italic">Remember, seeking help early can improve your chances of success. Every fertility journey is unique, and we're here to support you every step of the way.</p>
      `
    },
    2: {
      title: "Pregnancy Insights Revealed!",
      date: "15 Nov",
      author: "Dr. Ambily Jose",
      image: "/blog-2.jpg",
      content: `
        <p class="mb-4">Pregnancy is a miraculous journey filled with excitement, anticipation, and sometimes uncertainty. Understanding what to expect during each trimester can help you navigate this transformative period with confidence.</p>

        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">First Trimester: The Foundation</h2>
        <p class="mb-4">The first trimester (weeks 1-12) is crucial for fetal development. During this period:</p>
        <ul class="list-disc list-inside mb-4 space-y-2 ml-4">
          <li>Major organs begin to form</li>
          <li>Morning sickness is common</li>
          <li>Fatigue may be significant</li>
          <li>Prenatal vitamins are essential</li>
          <li>First ultrasound typically occurs</li>
        </ul>

        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Second Trimester: The Golden Period</h2>
        <p class="mb-4">Weeks 13-26 are often called the "golden period" because:</p>
        <ul class="list-disc list-inside mb-4 space-y-2 ml-4">
          <li>Energy levels typically improve</li>
          <li>Morning sickness usually subsides</li>
          <li>You can feel baby's movements</li>
          <li>Anatomy scan reveals baby's development</li>
          <li>Baby bump becomes visible</li>
        </ul>

        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Third Trimester: Preparing for Arrival</h2>
        <p class="mb-4">Weeks 27-40 bring you closer to meeting your baby:</p>
        <ul class="list-disc list-inside mb-4 space-y-2 ml-4">
          <li>Baby's movements become stronger</li>
          <li>Prenatal visits increase in frequency</li>
          <li>Braxton Hicks contractions may occur</li>
          <li>Birth plan discussions begin</li>
          <li>Final preparations for baby's arrival</li>
        </ul>

        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Important Prenatal Care</h2>
        <p class="mb-4">Regular prenatal care is essential for monitoring both mother and baby's health. This includes routine checkups, screenings, and addressing any concerns that arise.</p>

        <p class="mt-8 text-gray-600 italic">Every pregnancy is unique. Trust your healthcare provider and don't hesitate to ask questions or voice concerns.</p>
      `
    },
    3: {
      title: "Ask Your Gynecologic Questions!",
      date: "15 Nov",
      author: "Dr. Ambily Jose",
      image: "/blog-3.jpg",
      content: `
        <p class="mb-4">Gynecological health is essential to every woman's overall well-being, yet many women feel uncomfortable discussing their concerns. Let's address some common questions and emphasize the importance of open communication with your healthcare provider.</p>

        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Why Regular Gynecological Checkups Matter</h2>
        <p class="mb-4">Annual gynecological exams help:</p>
        <ul class="list-disc list-inside mb-4 space-y-2 ml-4">
          <li>Detect potential health issues early</li>
          <li>Screen for cervical and breast cancer</li>
          <li>Discuss contraception and family planning</li>
          <li>Address menstrual concerns</li>
          <li>Monitor reproductive health</li>
        </ul>

        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Common Gynecological Concerns</h2>
        
        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">Irregular Periods</h3>
        <p class="mb-4">Menstrual irregularity can result from stress, hormonal imbalances, PCOD, or other conditions. Tracking your cycles and discussing patterns with your doctor helps identify underlying causes.</p>

        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">Pelvic Pain</h3>
        <p class="mb-4">Chronic or severe pelvic pain shouldn't be ignored. It may indicate endometriosis, fibroids, ovarian cysts, or pelvic inflammatory disease, all of which require proper evaluation.</p>

        <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">PCOD/PCOS</h3>
        <p class="mb-4">Polycystic Ovarian Disease affects many women and can impact fertility, metabolism, and overall health. Comprehensive management includes lifestyle modifications, medication, and regular monitoring.</p>

        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Don't Hesitate to Ask</h2>
        <p class="mb-4">No question is too small or embarrassing. Your gynecologist is here to:</p>
        <ul class="list-disc list-inside mb-4 space-y-2 ml-4">
          <li>Provide confidential, judgment-free care</li>
          <li>Answer all your health questions</li>
          <li>Guide you through health decisions</li>
          <li>Support your reproductive health goals</li>
        </ul>

        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Preventive Care is Key</h2>
        <p class="mb-4">Regular screenings, including Pap smears and breast exams, are crucial for early detection of potential issues. Prevention and early intervention often lead to the best outcomes.</p>

        <p class="mt-8 text-gray-600 italic">Your gynecological health is an important part of your overall well-being. Schedule regular checkups and never hesitate to discuss your concerns.</p>
      `
    }
  };

  const blog = blogs[id] || blogs[1];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-700 to-teal-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-6">
            <Link to="/" className="text-teal-200 hover:text-white">Home</Link>
            <span className="mx-2 text-teal-200">/</span>
            <span>Blog</span>
          </nav>
          <p className="text-teal-200 mb-2">{blog.date}</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{blog.title}</h1>
          <p className="text-teal-100">By {blog.author}</p>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <img 
            src={blog.image}
            alt={blog.title}
            className="w-full h-96 object-cover rounded-lg shadow-lg"
            onError={(e) => {
              e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="400"><rect width="800" height="400" fill="%23e5e7eb"/></svg>';
            }}
          />
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article 
            className="prose prose-lg max-w-none text-gray-700"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>
      </section>

      {/* Author Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
                DA
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Dr. Ambily Jose</h3>
                <p className="text-gray-600">Gynecologist & Fertility Specialist</p>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              MBBS (AIIMS, New Delhi), MD(OBG- Gold medalist, AIIMS New Delhi), DNB, FNB. Specializing in fertility and reproductive health with extensive experience in assisted reproductive technologies and minimally invasive procedures.
            </p>
            <Link 
              to="/about"
              className="text-teal-600 font-semibold hover:text-teal-700 transition"
            >
              Learn More About Dr. Ambily →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Have Questions About Your Health?
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Schedule a consultation to discuss your concerns with Dr. Ambily Jose
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://rootsclinics.com/" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-teal-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-teal-700 transition"
            >
              Book Appointment
            </a>
            <Link 
              to="/contact"
              className="bg-white text-teal-600 border-2 border-teal-600 px-8 py-3 rounded-full font-semibold hover:bg-teal-50 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Related Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.keys(blogs).filter(key => key !== id).slice(0, 3).map((blogId) => {
              const relatedBlog = blogs[blogId];
              return (
                <Link 
                  key={blogId}
                  to={`/blog/${blogId}`}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
                >
                  <img 
                    src={relatedBlog.image}
                    alt={relatedBlog.title}
                    className="w-full h-48 object-cover"
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300"><rect width="400" height="300" fill="%23e5e7eb"/></svg>';
                    }}
                  />
                  <div className="p-6">
                    <p className="text-teal-600 font-semibold mb-2">{relatedBlog.date}</p>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {relatedBlog.title}
                    </h3>
                    <span className="text-teal-600 font-semibold hover:text-teal-700">
                      Read More →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;