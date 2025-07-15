// pages/TestimonialsPage.jsx
import React from 'react';
import {
  Users,
  TrendingUp,
  Award,
  Sparkles,
  ArrowRight,
  Play,
  BookOpen,
  Target,
  Star
} from 'lucide-react';

const TestimonialsPage = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "JEE Advanced Qualifier",
      image: "https://images.unsplash.com/photo-1494790108755-2616b2e0e5b6?auto=format&fit=crop&w=150&q=80",
      content: "Deeksha Classes transformed my approach to JEE preparation. The faculty's dedication and personalized guidance helped me achieve my goals.",
      rating: 5,
      exam: "JEE",
      rank: "AIR 156"
    },
    {
      name: "Rahul Kumar",
      role: "NEET Topper",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      content: "The comprehensive study material and regular mock tests at Deeksha Classes gave me the confidence to crack NEET with flying colors.",
      rating: 5,
      exam: "NEET",
      rank: "AIR 89"
    },
    {
      name: "Anjali Singh",
      role: "Class 12th Topper",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
      content: "Thanks to the excellent teaching methodology and supportive environment, I secured the top rank in my board examinations.",
      rating: 5,
      exam: "Board",
      rank: "98.2%"
    },
    {
      name: "Arjun Patel",
      role: "IIT Delhi Student",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
      content: "The rigorous training and expert faculty at Deeksha Classes prepared me thoroughly for JEE Main and Advanced. Highly recommended!",
      rating: 5,
      exam: "JEE",
      rank: "AIR 234"
    },
    {
      name: "Sneha Gupta",
      role: "Medical Student",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
      content: "The personalized attention and doubt-clearing sessions helped me understand complex concepts easily. Thank you Deeksha Classes!",
      rating: 5,
      exam: "NEET",
      rank: "AIR 312"
    },
    {
      name: "Vikash Singh",
      role: "Engineering Student",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
      content: "The competitive environment and regular assessments at Deeksha Classes pushed me to perform my best. Grateful for their guidance!",
      rating: 5,
      exam: "JEE",
      rank: "AIR 445"
    }
  ];

  const achievements = [
    { number: "95%", label: "Success Rate" },
    { number: "5000+", label: "Students Trained" },
    { number: "15+", label: "Years of Excellence" },
    { number: "50+", label: "Expert Faculty" }
  ];

  return (
    <div>
      {/* Hero Section with Dark Background - Makes navbar transparent and visible */}
      <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white pt-32 pb-20 relative overflow-hidden">
        {/* Animated Background Elements */}
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
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Real students, real results, real success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 group">
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
                      src={testimonial.image}
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
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
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