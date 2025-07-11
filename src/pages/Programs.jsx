import React, { useState } from 'react';
import Logo from "../assets/Logo.jpg"
import { 
  BookOpen, 
  Trophy, 
  Users, 
  Clock, 
  Target, 
  Award, 
  ChevronRight,
  GraduationCap,
  Brain,
  Calculator,
  FlaskConical,
  Stethoscope,
  Building,
  Star,
  CheckCircle,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Zap,
  Crown
} from 'lucide-react';

const Programs = () => {   
  const [expandedProgram, setExpandedProgram] = useState(null);

  const programs = [
    {
      id: 1,
      title: "JEE Preparation",
      subtitle: "Joint Entrance Examination",
      icon: <Calculator className="w-8 h-8" />,
      duration: "1-2 Years",
      students: "500+ Students",
      successRate: "92%",
      description: "Comprehensive preparation for JEE Main and Advanced with expert faculty and proven methodology.",
      features: [
        "Physics, Chemistry, Mathematics coverage",
        "Mock tests and practice papers",
        "Doubt clearing sessions",
        "Previous year question analysis",
        "Regular assessments and feedback"
      ],
      detailedDescription: "Our JEE preparation program is designed to help students crack one of India's most competitive engineering entrance exams. With a structured curriculum covering Physics, Chemistry, and Mathematics, we provide comprehensive study material, regular mock tests, and personalized attention to ensure maximum success rate.",
      highlights: [
        "Expert faculty with 10+ years experience",
        "Small batch sizes for personalized attention",
        "Advanced study materials and digital resources",
        "Regular parent-teacher meetings",
        "Scholarship opportunities for top performers"
      ],
      gradient: "from-emerald-500 to-teal-600",
      bgGradient: "from-emerald-900/20 to-teal-900/20",
      borderColor: "border-emerald-500/20 hover:border-emerald-400/50",
      shadowColor: "hover:shadow-emerald-500/20"
    },
    {
      id: 2,
      title: "NEET Coaching",
      subtitle: "National Eligibility cum Entrance Test",
      icon: <Stethoscope className="w-8 h-8" />,
      duration: "1-2 Years",
      students: "400+ Students",
      successRate: "88%",
      description: "Specialized coaching for NEET with focus on Biology, Chemistry, and Physics for medical entrance.",
      features: [
        "Biology, Chemistry, Physics coverage",
        "Medical entrance focused approach",
        "Regular mock tests",
        "Conceptual clarity sessions",
        "NCERT based curriculum"
      ],
      detailedDescription: "Our NEET coaching program is specifically designed for aspiring medical students. With emphasis on Biology, Chemistry, and Physics, we provide in-depth conceptual understanding, regular practice sessions, and extensive mock test series to ensure students are well-prepared for this prestigious medical entrance exam.",
      highlights: [
        "Experienced medical professionals as mentors",
        "Comprehensive Biology lab facilities",
        "Regular revision and doubt clearing",
        "Current affairs and GK sessions",
        "Counseling for college selection"
      ],
      gradient: "from-rose-500 to-pink-600",
      bgGradient: "from-rose-900/20 to-pink-900/20",
      borderColor: "border-rose-500/20 hover:border-rose-400/50",
      shadowColor: "hover:shadow-rose-500/20"
    },
    {
      id: 3,
      title: "Foundation Classes",
      subtitle: "Strong Foundation for Future Success",
      icon: <Building className="w-8 h-8" />,
      duration: "6 Months - 1 Year",
      students: "300+ Students",
      successRate: "95%",
      description: "Building strong fundamentals for students in classes 8th to 10th preparing for competitive exams.",
      features: [
        "Class 8th to 10th curriculum",
        "Concept building approach",
        "Interactive learning methods",
        "Regular assessments",
        "Career guidance sessions"
      ],
      detailedDescription: "Our Foundation Classes program is designed to build a strong base for students in their formative years. We focus on conceptual clarity, problem-solving skills, and analytical thinking that will serve as a solid foundation for future competitive exam preparation.",
      highlights: [
        "Age-appropriate teaching methodology",
        "Interactive and engaging sessions",
        "Regular skill development workshops",
        "Olympiad preparation included",
        "Personality development programs"
      ],
      gradient: "from-amber-500 to-orange-600",
      bgGradient: "from-amber-900/20 to-orange-900/20",
      borderColor: "border-amber-500/20 hover:border-amber-400/50",
      shadowColor: "hover:shadow-amber-500/20"
    },
    {
      id: 4,
      title: "Board Preparation",
      subtitle: "CBSE, ICSE & State Board Excellence",
      icon: <GraduationCap className="w-8 h-8" />,
      duration: "1 Year",
      students: "600+ Students",
      successRate: "96%",
      description: "Comprehensive preparation for Class 10th and 12th board examinations with focus on scoring high marks.",
      features: [
        "All subjects coverage",
        "Board-specific preparation",
        "Regular mock tests",
        "Revision and practice sessions",
        "Exam strategy guidance"
      ],
      detailedDescription: "Our Board Preparation program ensures students excel in their Class 10th and 12th board examinations. We provide comprehensive coverage of all subjects with special focus on board exam patterns, marking schemes, and effective answering techniques.",
      highlights: [
        "Subject-wise expert teachers",
        "Regular chapter-wise tests",
        "Comprehensive study materials",
        "Time management strategies",
        "Stress management workshops"
      ],
      gradient: "from-violet-500 to-purple-600",
      bgGradient: "from-violet-900/20 to-purple-900/20",
      borderColor: "border-violet-500/20 hover:border-violet-400/50",
      shadowColor: "hover:shadow-violet-500/20"
    }
  ];

  const toggleExpanded = (programId) => {
    setExpandedProgram(expandedProgram === programId ? null : programId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1),transparent)] pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none"></div>
      
      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 via-purple-600/20 to-emerald-600/30 animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-slate-900/50 to-slate-900/80"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-75 animate-pulse"></div>
                <div className="relative bg-slate-900 p-4 rounded-full">
                  <img src={Logo} className="rounded-full w-12 h-12 text-blue-400" />
                </div>
              </div>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight">
              Our <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">Premium</span> Programs
            </h1>
            
            <p className="text-xl sm:text-2xl text-slate-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Unlock your potential with our comprehensive coaching programs designed to help students achieve their academic goals and career aspirations
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm sm:text-base">
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                <div className="relative flex items-center space-x-2 bg-slate-800/80 px-6 py-3 rounded-full border border-emerald-500/20">
                  <Trophy className="w-5 h-5 text-emerald-400" />
                  <span className="text-emerald-300 font-medium">Expert Faculty</span>
                </div>
              </div>
              
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                <div className="relative flex items-center space-x-2 bg-slate-800/80 px-6 py-3 rounded-full border border-blue-500/20">
                  <Users className="w-5 h-5 text-blue-400" />
                  <span className="text-blue-300 font-medium">Small Batches</span>
                </div>
              </div>
              
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                <div className="relative flex items-center space-x-2 bg-slate-800/80 px-6 py-3 rounded-full border border-amber-500/20">
                  <Award className="w-5 h-5 text-amber-400" />
                  <span className="text-amber-300 font-medium">Proven Results</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Programs Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-6 lg:grid-cols-3 xl:grid-cols-3">
          {programs.map((program, index) => (
            <div
              key={program.id}
              className={`group relative transform transition-all duration-500 hover:scale-105 max-w-sm mx-auto w-full`}
            >
              {/* Glow Effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${program.gradient} rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300`}></div>
              
              <div className={`relative bg-slate-800/60 backdrop-blur-xl rounded-2xl border ${program.borderColor} overflow-hidden transition-all duration-300 ${program.shadowColor} hover:shadow-2xl`}>
                {/* Background Pattern */}
                <div className={`absolute inset-0 bg-gradient-to-br ${program.bgGradient} opacity-50`}></div>
                
                {/* Program Header */}
<div className="relative p-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`relative bg-gradient-to-r ${program.gradient} p-2 rounded-lg shadow-lg`}>
                        <div className="absolute inset-0 bg-white/20 rounded-lg"></div>
                        <div className="relative text-white">
                          <div className="w-6 h-6">
                            {React.cloneElement(program.icon, { className: "w-6 h-6" })}
                          </div>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-1 tracking-tight">
                          {program.title}
                        </h3>
                        <p className="text-slate-300 text-sm">
                          {program.subtitle}
                        </p>
                      </div>
                    </div>
                    <div className="hidden sm:block">
                      <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
                    </div>
                  </div>

                  {/* Stats with enhanced design */}
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-lg blur group-hover:blur-sm transition-all duration-300"></div>
                      <div className="relative bg-slate-900/60 backdrop-blur-sm p-2 rounded-lg border border-emerald-500/20 text-center">
                        <div className="flex items-center justify-center space-x-1 text-emerald-400 mb-1">
                          <Clock className="w-3 h-3" />
                          <span className="text-xs font-semibold">Duration</span>
                        </div>
                        <p className="text-white text-xs font-bold">
                          {program.duration}
                        </p>
                      </div>
                    </div>
                    
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur group-hover:blur-sm transition-all duration-300"></div>
                      <div className="relative bg-slate-900/60 backdrop-blur-sm p-2 rounded-lg border border-blue-500/20 text-center">
                        <div className="flex items-center justify-center space-x-1 text-blue-400 mb-1">
                          <Users className="w-3 h-3" />
                          <span className="text-xs font-semibold">Students</span>
                        </div>
                        <p className="text-white text-xs font-bold">
                          {program.students}
                        </p>
                      </div>
                    </div>
                    
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-lg blur group-hover:blur-sm transition-all duration-300"></div>
                      <div className="relative bg-slate-900/60 backdrop-blur-sm p-2 rounded-lg border border-amber-500/20 text-center">
                        <div className="flex items-center justify-center space-x-1 text-amber-400 mb-1">
                          <TrendingUp className="w-3 h-3" />
                          <span className="text-xs font-semibold">Success</span>
                        </div>
                        <p className="text-white text-xs font-bold">
                          {program.successRate}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="relative bg-slate-900/40 backdrop-blur-sm p-3 rounded-lg border border-slate-700/50 mb-4">
                    <p className="text-slate-200 text-sm leading-relaxed">
                      {program.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-white font-bold mb-2 flex items-center text-sm">
                      <div className={`p-1 rounded-md bg-gradient-to-r ${program.gradient} mr-2`}>
                        <Star className="w-3 h-3 text-white" />
                      </div>
                      Key Features
                    </h4>
                    <div className="grid gap-2">
                      {program.features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex items-start space-x-2 group">
                          <div className="flex-shrink-0 mt-1">
                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${program.gradient}`}></div>
                          </div>
                          <span className="text-slate-300 text-xs group-hover:text-white transition-colors duration-200">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* See More Button */}
                  <button
                    onClick={() => toggleExpanded(program.id)}
                    className={`w-full relative overflow-hidden bg-gradient-to-r ${program.gradient} hover:shadow-lg text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 group`}
                  >
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10 text-sm">
                      {expandedProgram === program.id ? 'Show Less' : 'Discover More'}
                    </span>
                    <ChevronRight className={`relative z-10 w-4 h-4 transition-transform duration-300 ${expandedProgram === program.id ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
                  </button>
                </div>

                {/* Expanded Content */}
                {expandedProgram === program.id && (
                  <div className="relative border-t border-slate-700/50">
                    <div className={`absolute inset-0 bg-gradient-to-r ${program.bgGradient} opacity-30`}></div>
                    <div className="relative p-8 space-y-8">
                      {/* Detailed Description */}
                      <div className="bg-slate-900/60 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50">
                        <h4 className="text-white font-bold mb-4 flex items-center text-lg">
                          <div className={`p-2 rounded-lg bg-gradient-to-r ${program.gradient} mr-3`}>
                            <BookOpen className="w-4 h-4 text-white" />
                          </div>
                          Program Overview
                        </h4>
                        <p className="text-slate-300 text-base leading-relaxed">
                          {program.detailedDescription}
                        </p>
                      </div>

                      {/* Highlights */}
                      <div className="bg-slate-900/60 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50">
                        <h4 className="text-white font-bold mb-4 flex items-center text-lg">
                          <div className={`p-2 rounded-lg bg-gradient-to-r ${program.gradient} mr-3`}>
                            <Award className="w-4 h-4 text-white" />
                          </div>
                          Program Highlights
                        </h4>
                        <div className="grid gap-3">
                          {program.highlights.map((highlight, index) => (
                            <div key={index} className="flex items-start space-x-3 group">
                              <div className="flex-shrink-0 mt-1">
                                <Zap className="w-4 h-4 text-yellow-400" />
                              </div>
                              <span className="text-slate-300 text-base group-hover:text-white transition-colors duration-200">
                                {highlight}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA Section */}
                      <div className={`relative overflow-hidden bg-gradient-to-r ${program.gradient} rounded-xl p-6`}>
                        <div className="absolute inset-0 bg-white/10"></div>
                        <div className="relative text-center">
                          <p className="text-white/90 mb-4 text-lg font-medium">
                            Ready to start your journey with us?
                          </p>
                          <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 border border-white/30 hover:border-white/50">
                            Enroll Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Bottom CTA Section */}
      <div className="relative mx-4 sm:mx-6 lg:mx-8 mb-16">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 rounded-3xl blur opacity-30 animate-pulse"></div>
        <div className="relative bg-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-emerald-600/20"></div>
          <div className="relative max-w-4xl mx-auto px-8 py-16 text-center">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-50 animate-pulse"></div>
                <div className="relative bg-slate-900 p-3 rounded-full">
                  <Sparkles className="w-8 h-8 text-yellow-400" />
                </div>
              </div>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Start Your Success Journey Today
            </h2>
            <p className="text-slate-300 mb-10 text-lg max-w-2xl mx-auto leading-relaxed">
              Join thousands of successful students who have achieved their dreams with our expert guidance and comprehensive programs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25">
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Schedule a Free Demo</span>
              </button>
              
              <button className="group relative overflow-hidden border-2 border-white/30 text-white font-bold py-4 px-8 rounded-xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                <span className="relative z-10">Contact Us</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;