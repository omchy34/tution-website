// pages/AboutPage.jsx
import React from "react";
import { Heart, Target, Eye } from "lucide-react";

const AboutPage = () => {
  const stats = [
    { number: "15+", label: "Years of Excellence" },
    { number: "5000+", label: "Students Trained" },
    { number: "95%", label: "Success Rate" },
    { number: "50+", label: "Expert Faculty" }
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Passion for Teaching",
      description: "We believe in nurturing young minds with dedication and care."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Goal-Oriented Approach",
      description: "Every student's success is our primary objective and motivation."
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Vision for Future",
      description: "Preparing students not just for exams, but for life's challenges."
    }
  ];

  return (
    <div>
      {/* Hero Section with Dark Background - Makes navbar transparent and visible */}
      <div className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white pt-32 pb-20 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
            <span className="text-sm font-medium">✨ Welcome to the Future of Education</span>
          </div>
          
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            About Deeksha Classes
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200 leading-relaxed">
            Empowering students with quality education and innovative teaching methods since 2010
          </p>
        </div>
      </div>

      {/* Our Journey Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Journey</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2010 with a vision to provide quality education to aspiring students, Deeksha Classes has grown to become one of the most trusted names in competitive exam preparation in Bihar.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our commitment to excellence and student success has helped thousands of students achieve their dreams of getting into premier institutions across India.
              </p>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border border-blue-100 hover:shadow-lg transition-all duration-300">
                    <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-400 rounded-2xl transform rotate-6 opacity-20"></div>
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                alt="Students studying"
                className="rounded-2xl shadow-2xl relative z-10 hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide us in everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="text-blue-600 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of successful students who have achieved their dreams with Deeksha Classes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors hover:scale-105 transform duration-300">
              Enroll Now
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all hover:scale-105 transform duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;