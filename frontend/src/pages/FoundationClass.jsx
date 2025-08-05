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
  Lightbulb,
  Brain,
  FlaskConical,
  Calculator,
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
  Palette,
  Music,
  Globe,
  Microscope,
  PenTool,
  Gamepad2
} from 'lucide-react';

const FoundationClass = ({ navigate }) => {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Concept Building",
      description: "Strong foundation in core subjects with age-appropriate learning methods."
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Interactive Learning",
      description: "Engaging activities, games, and hands-on experiments to make learning fun."
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Creative Development",
      description: "Art, music, and creative thinking exercises to develop overall personality."
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Skill Assessment",
      description: "Regular assessments to track progress and identify areas for improvement."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Small Class Size",
      description: "Maximum 15 students per class for personalized attention and care."
    },
    {
      icon: <Gamepad2 className="w-6 h-6" />,
      title: "Learning Through Play",
      description: "Educational games and activities that make complex concepts simple and fun."
    }
  ];

  const subjects = [
    {
      name: "Mathematics",
      grade: "6th-10th",
      icon: <Calculator className="w-8 h-8" />,
      gradient: "from-amber-500 to-orange-600",
      bgGradient: "from-amber-900/20 to-orange-900/20",
      topics: ["Number System", "Algebra", "Geometry", "Mensuration", "Statistics"]
    },
    {
      name: "Science",
      grade: "6th-10th",
      icon: <FlaskConical className="w-8 h-8" />,
      gradient: "from-yellow-500 to-amber-600",
      bgGradient: "from-yellow-900/20 to-amber-900/20",
      topics: ["Physics", "Chemistry", "Biology", "Environmental Science", "Lab Work"]
    },
    {
      name: "English",
      grade: "6th-10th",
      icon: <PenTool className="w-8 h-8" />,
      gradient: "from-orange-500 to-red-600",
      bgGradient: "from-orange-900/20 to-red-900/20",
      topics: ["Grammar", "Vocabulary", "Literature", "Creative Writing", "Speaking Skills"]
    }
  ];

  const gradePrograms = [
    {
      title: "Elementary (6th-8th)",
      duration: "Full Academic Year",
      icon: <Lightbulb className="w-6 h-6" />,
      features: ["Foundation Building", "Study Skills", "Creative Activities", "Basic Concepts"],
      color: "from-yellow-500 to-amber-500"
    },
    {
      title: "Secondary (9th-10th)",
      duration: "Board Preparation",
      icon: <Target className="w-6 h-6" />,
      features: ["Board Exam Prep", "Advanced Concepts", "Project Work", "Career Guidance"],
      color: "from-amber-500 to-orange-500"
    },
    {
      title: "Olympiad Training",
      duration: "Special Program",
      icon: <Trophy className="w-6 h-6" />,
      features: ["Competition Prep", "Advanced Problems", "Logical Thinking", "Speed Building"],
      color: "from-orange-500 to-red-500"
    }
  ];

  const stats = [
    { label: "Student Satisfaction", value: "96%", icon: <TrendingUp className="w-5 h-5" /> },
    { label: "Students Enrolled", value: "500+", icon: <Users2 className="w-5 h-5" /> },
    { label: "Learning Activities", value: "200+", icon: <Gamepad2 className="w-5 h-5" /> },
    { label: "Success Rate", value: "94%", icon: <Award className="w-5 h-5" /> }
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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(245,158,11,0.1),transparent)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(251,191,36,0.1),transparent)] pointer-events-none"></div>
      
      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-600/30 via-yellow-600/20 to-orange-600/30 animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-slate-900/50 to-slate-900/80"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-8">
            <button
              onClick={() => handleNavigation('/programs')}
              className="group flex items-center space-x-2 text-amber-400 hover:text-amber-300 transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
              <span className="font-medium">Back to Programs</span>
            </button>
          </div>

          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full blur opacity-75 animate-pulse"></div>
                <div className="relative bg-slate-900 p-4 rounded-full">
                  <Lightbulb className="w-12 h-12 text-amber-400" />
                </div>
              </div>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight">
              Foundation <span className="bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent">Classes</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-slate-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Building strong academic foundations for classes 6th-10th with interactive learning, creative development, and personalized attention
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                  <div className="relative bg-slate-800/60 backdrop-blur-xl rounded-xl border border-amber-500/20 p-4 text-center">
                    <div className="flex justify-center mb-2 text-amber-400">
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

      {/* Grade Programs Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Grade Programs</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Tailored programs for different grade levels with age-appropriate teaching methods
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {gradePrograms.map((program, index) => (
            <div key={index} className="group relative">
              <div className={`absolute -inset-1 bg-gradient-to-r ${program.color} rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300`}></div>
              
              <div className="relative bg-slate-800/60 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-6 hover:shadow-2xl transition-all duration-300">
                <div className="text-center mb-6">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${program.color} mb-4`}>
                    <div className="text-white">
                      {program.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{program.title}</h3>
                  <p className="text-amber-400 font-medium">{program.duration}</p>
                </div>
                
                <div className="space-y-3">
                  {program.features.map((feature, idx) => (
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
          <h2 className="text-4xl font-bold text-white mb-4">Core Subjects</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Comprehensive coverage of essential subjects with interactive and engaging teaching methods
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
                  <p className="text-slate-400 mb-4">{subject.grade}</p>
                  
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
          <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Foundation Program?</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Unique features designed to make learning enjoyable and build strong academic foundations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 rounded-xl blur group-hover:blur-md transition-all duration-300"></div>
              
              <div className="relative bg-slate-800/60 backdrop-blur-xl rounded-xl border border-slate-700/50 p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-amber-500 to-yellow-600">
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
        <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-600 rounded-3xl blur opacity-30 animate-pulse"></div>
        <div className="relative bg-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 via-yellow-600/20 to-orange-600/20"></div>
          <div className="relative max-w-4xl mx-auto px-8 py-16 text-center">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full blur opacity-50 animate-pulse"></div>
                <div className="relative bg-slate-900 p-3 rounded-full">
                  <GraduationCap className="w-8 h-8 text-amber-400" />
                </div>
              </div>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Build a Strong Foundation?
            </h2>
            <p className="text-slate-300 mb-10 text-lg max-w-2xl mx-auto leading-relaxed">
              Join our foundation program and give your child the best start in their academic journey
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => handleNavigation('/enroll')}
                className="group relative overflow-hidden bg-gradient-to-r from-amber-600 to-yellow-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/25"
              >
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <span>Enroll Now</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </button>
              
              <button 
                onClick={() => handleNavigation('/demo')}
                className="group relative overflow-hidden border-2 border-amber-500/50 text-white font-bold py-4 px-8 rounded-xl hover:bg-amber-500/10 transition-all duration-300 backdrop-blur-sm"
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <Play className="w-4 h-4" />
                  <span>Free Trial Class</span>
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
                <span>foundation@institute.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoundationClass;