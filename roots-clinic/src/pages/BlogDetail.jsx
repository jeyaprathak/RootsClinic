import React from 'react';
import { useParams, Link } from 'react-router-dom';

const BlogDetail = () => {
  const { id } = useParams();

  const blogs = { /* keep your blogs object exactly same */ };

  const blog = blogs[id] || blogs[1];

  return (
    <div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-700 to-pink-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <nav className="mb-6">
            <Link to="/" className="text-pink-200 hover:text-white transition">
              Home
            </Link>
            <span className="mx-2 text-pink-200">/</span>
            <span>Blog</span>
          </nav>

          <p className="text-pink-200 mb-2">{blog.date}</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {blog.title}
          </h1>
          <p className="text-pink-100">By {blog.author}</p>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <img 
            src={blog.image}
            alt={blog.title}
            className="w-full h-96 object-cover rounded-lg shadow-lg"
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
              <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
                DA
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  Dr. Ambily Jose
                </h3>
                <p className="text-gray-600">
                  Gynecologist & Fertility Specialist
                </p>
              </div>
            </div>

            <p className="text-gray-700 mb-4">
              MBBS (AIIMS), MD (OBG - Gold Medalist), DNB, FNB.
              Specializing in fertility and reproductive health.
            </p>

            <Link 
              to="/about"
              className="text-pink-600 font-semibold hover:text-pink-800 transition"
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
            Schedule a consultation to discuss your concerns.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">

            <a 
              href="https://rootsclinics.com/" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-700 transition"
            >
              Book Appointment
            </a>

            <Link 
              to="/contact"
              className="bg-white text-pink-600 border-2 border-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-pink-50 transition"
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
            {Object.keys(blogs)
              .filter(key => key !== id)
              .slice(0, 3)
              .map((blogId) => {
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
                    />

                    <div className="p-6">
                      <p className="text-pink-600 font-semibold mb-2">
                        {relatedBlog.date}
                      </p>

                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {relatedBlog.title}
                      </h3>

                      <span className="text-pink-600 font-semibold hover:text-pink-800 transition">
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