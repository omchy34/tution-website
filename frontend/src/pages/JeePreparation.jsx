import React from 'react';
import { 
  ArrowLeft, 
  BookOpen, 
  Trophy, 
  Users, 
  Clock, 
  Target, 
  Award, 
  CheckCircle,
  Calculator,
  Brain,
  FlaskConical,
  Atom,
  GraduationCap,
  Star,
  Zap,
  ChevronRight,
  Calendar,
  Play,
  Download,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  TrendingUp,
  BookMarked,
  FileText,
  Users2,
  Timer,
  BarChart3,
  Cpu,
  Code,
  Wrench
} from 'lucide-react';

const JeePreparation = ({ navigate }) => {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Problem Solving",
      description: "Advanced problem-solving techniques for Physics, Chemistry, and Mathematics."
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "NCERT + Advanced",
      description: "Complete NCERT coverage plus advanced topics for JEE Main and Advanced."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Mock Tests",
      description: "Regular JEE Main & Advanced pattern tests with detailed analysis and ranking."
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "IIT Alumni Faculty",
      description: "Learn from IIT graduates and industry experts with proven track records."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Doubt Sessions",
      description: "Daily doubt clearing sessions and one-on-one mentoring support."
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Digital Tools",
      description: "Advanced simulators and digital tools for better concept visualization."
    }
  ];

  const subjects = [
    {
      name: "Physics",
      chapters: 32,
      icon: <Atom className="w-8 h-8" />,
      gradient: "from-blue-500 to-indigo-600",
      bgGradient: "from-blue-900/20 to-indigo-900/20",
      topics: ["Mechanics", "Waves & Optics", "Electricity", "Modern Physics", "Thermodynamics"]
    },
    {
      name: "Chemistry",
      chapters: 30,
      icon: <FlaskConical className="w-8 h-8" />,
      gradient: "from-emerald-500 to-teal-600",
      bgGradient: "from-emerald-900/20 to-teal-900/20",
      topics: ["Physical Chemistry", "Organic Chemistry", "Inorganic Chemistry", "Coordination"]
    },
    {
      name: "Mathematics",
      chapters: 35,
      icon: <Calculator className="w-8 h-8" />,
      gradient: "from-purple-500 to-pink-600",
      bgGradient: "from-purple-900/20 to-pink-900/20",
      topics: ["Calculus", "Algebra", "Coordinate Geometry", "Trigonometry", "Statistics"]
    }
  ];

  const stats = [
    { label: "IIT Selections", value: "156", icon: <TrendingUp className="w-5 h-5" /> },
    { label: "Students Enrolled", value: "800+", icon: <Users2 className="w-5 h-5" /> },
    { label: "Mock Tests", value: "100+", icon: <FileText className="w-5 h-5" /> },
    { label: "Study Hours", value: "2000+", icon: <Timer className="w-5 h-5" /> }
  ];

  const courseTypes = [
    {
      title: "JEE Main",
      duration: "1 Year",
      icon: <Target className="w-6 h-6" />,
      features: ["NCERT Focus", "State Board Coverage", "Monthly Tests", "Rank Prediction"]
    },
    {
      title: "JEE Advanced",
      duration: "2 Years",
      icon: <Trophy className="w-6 h-6" />,
      features: ["Advanced Problems", "IIT Past Papers", "Research Projects", "Olympiad Prep"]
    },
    {
      title: "Crash Course",
      duration: "6 Months",
      icon: <Zap className="w-6 h-6" />,
      features: ["Intensive Revision", "Quick Problem Solving", "Last Minute Prep", "Strategy Sessions"]
    }
  ];

  const handleNavigation = (path) => {
    if (navigate) {
      navigate(path);
    } else {
      console.log(`Navigating to: ${path}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent)] pointer-events-none"></div>
      
      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 via-indigo-600/20 to-purple-600/30 animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-slate-900/50 to-slate-900/80"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-8">
            <button
              onClick={() => handleNavigation('/programs')}
              className="group flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
              <span className="font-medium">Back to Programs</span>
            </button>
          </div>

          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-75 animate-pulse"></div>
                <div className="relative bg-slate-900 p-4 rounded-full">
                  <Cpu className="w-12 h-12 text-blue-400" />
                </div>
              </div>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight">
              JEE <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">Preparation</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-slate-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Master the Joint Entrance Examination with our comprehensive coaching program designed for aspiring engineers and future innovators
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                  <div className="relative bg-slate-800/60 backdrop-blur-xl rounded-xl border border-blue-500/20 p-4 text-center">
                    <div className="flex justify-center mb-2 text-blue-400">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-slate-400">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Course Types Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Course Options</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Choose the perfect course based on your timeline and target exam
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {courseTypes.map((course, index) => (
            <div key={index} className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
              
              <div className="relative bg-slate-800/60 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-6 hover:shadow-2xl transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 mb-4">
                    <div className="text-white">
                      {course.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{course.title}</h3>
                  <p className="text-blue-400 font-medium">{course.duration}</p>
                </div>
                
                <div className="space-y-3">
                  {course.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Subjects Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Subject Coverage</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Comprehensive coverage of all JEE subjects with advanced problem-solving techniques
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {subjects.map((subject, index) => (
            <div key={index} className="group relative">
              <div className={`absolute -inset-1 bg-gradient-to-r ${subject.gradient} rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300`}></div>
              
              <div className="relative bg-slate-800/60 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-6 hover:shadow-2xl transition-all duration-300">
                <div className={`absolute inset-0 bg-gradient-to-br ${subject.bgGradient} opacity-50 rounded-2xl`}></div>
                
                <div className="relative">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${subject.gradient} mb-4`}>
                    <div className="text-white">
                      {subject.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{subject.name}</h3>
                  <p className="text-slate-400 mb-4">{subject.chapters} Chapters Covered</p>
                  
                  <div className="space-y-2">
                    {subject.topics.map((topic, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        <span className="text-slate-300 text-sm">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our JEE Program?</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Comprehensive features designed to maximize your JEE preparation and ensure success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur group-hover:blur-md transition-all duration-300"></div>
              
              <div className="relative bg-slate-800/60 backdrop-blur-xl rounded-xl border border-slate-700/50 p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600">
                      <div className="text-white">
                        {feature.icon}
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

     

      {/* CTA Section */}
      <div className="relative mx-4 sm:mx-6 lg:mx-8 mb-16">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl blur opacity-30 animate-pulse"></div>
        <div className="relative bg-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-purple-600/20"></div>
          <div className="relative max-w-4xl mx-auto px-8 py-16 text-center">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-50 animate-pulse"></div>
                <div className="relative bg-slate-900 p-3 rounded-full">
                  <GraduationCap className="w-8 h-8 text-blue-400" />
                </div>
              </div>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Engineer Your Future?
            </h2>
            <p className="text-slate-300 mb-10 text-lg max-w-2xl mx-auto leading-relaxed">
              Join our comprehensive JEE preparation program and take the first step towards your dream IIT
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => handleNavigation('/enroll')}
                className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
              >
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <span>Enroll Now</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </button>
              
              <button 
                onClick={() => handleNavigation('/demo')}
                className="group relative overflow-hidden border-2 border-blue-500/50 text-white font-bold py-4 px-8 rounded-xl hover:bg-blue-500/10 transition-all duration-300 backdrop-blur-sm"
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <Play className="w-4 h-4" />
                  <span>Free Demo Class</span>
                </span>
              </button>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-slate-400">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+91 9876543210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>jee@institute.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JeePreparation;