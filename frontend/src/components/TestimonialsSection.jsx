import React, { useEffect, useState } from 'react';
import {
  Award,
  BookOpen,
  Target,
  Star,
  Plus,
  RefreshCw
} from 'lucide-react';
import { getApprovedTestimonials } from '../api/testimonialAPI';

const TestimonialsPage = ({ navigate }) => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const achievements = [
    { number: "95%", label: "Success Rate" },
    { number: "5000+", label: "Students Trained" },
    { number: "15+", label: "Years of Excellence" },
    { number: "50+", label: "Expert Faculty" }
  ];

  const fetchTestimonials = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getApprovedTestimonials();
      setTestimonials(data);
    } catch (error) {
      console.error("Failed to fetch testimonials:", error);
      setError("Failed to load testimonials. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const handleRefresh = () => {
    fetchTestimonials();
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
          <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
            <Award className="w-5 h-5 mr-2" />
            <span className="text-sm font-medium">Success Stories That Inspire</span>
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent">
            Student Testimonials
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200 leading-relaxed">
            Hear from our successful students who achieved their dreams with Deeksha Classes
          </p>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border border-blue-100 hover:shadow-lg transition-all duration-300">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-600 font-medium">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Real students, real results, real success
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between items-center mb-6">
            <button
              onClick={handleRefresh}
              disabled={loading}
              className="flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-200 transition-colors disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
              Refresh
            </button>
            
            <button
              onClick={() => navigate('/submit-testimonial')}
              className="flex items-center gap-2 bg-indigo-600 text-white px-5 py-2 rounded-full hover:bg-indigo-700 transition-colors"
            >
              <Plus className="w-4 h-4" /> Share Your Story
            </button>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="flex justify-center items-center py-16">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="text-center py-16">
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg inline-block">
                <p>{error}</p>
                <button
                  onClick={handleRefresh}
                  className="mt-2 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
                >
                  Try Again
                </button>
              </div>
            </div>
          )}

          {/* Testimonials Grid */}
          {!loading && !error && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.length > 0 ? (
                testimonials.map((testimonial, index) => (
                  <div key={testimonial._id || index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 group">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                        {testimonial.exam}
                      </span>
                      <span className="text-sm font-bold text-green-600 bg-green-100 px-3 py-1 rounded-full">
                        {testimonial.rank}
                      </span>
                    </div>

                    <p className="text-gray-600 mb-6 italic leading-relaxed">"{testimonial.content}"</p>

                    <div className="flex items-center">
                      <div className="relative">
                        <img
                          src={testimonial.image || "https://via.placeholder.com/48"}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full mr-4 object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                        <div className="text-gray-600 text-sm">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-3 text-center py-16">
                  <div className="text-gray-400 mb-4">
                    <Star className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  </div>
                  <p className="text-gray-500 text-lg mb-4">No testimonials available yet.</p>
                  <button
                    onClick={() => navigate('/submit-testimonial')}
                    className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition-colors"
                  >
                    Be the First to Share Your Story
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Ready to Write Your Success Story?</h2>
            <p className="text-xl mb-8">
              Join thousands of successful students who have achieved their dreams with Deeksha Classes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors hover:scale-105 transform duration-300 flex items-center justify-center">
                <BookOpen className="w-5 h-5 mr-2" />
                Start Your Journey
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all hover:scale-105 transform duration-300 flex items-center justify-center">
                <Target className="w-5 h-5 mr-2" />
                View Programs
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;