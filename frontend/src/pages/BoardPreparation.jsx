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
  BookMarked,
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
  FileText,
  Users2,
  Timer,
  BarChart3,
  ClipboardList,
  PenTool,
  Globe,
  History,
  Languages,
  Scroll
} from 'lucide-react';

const BoardPreparation = ({ navigate }) => {
  const features = [
    {
      icon: <BookMarked className="w-6 h-6" />,
      title: "Board Syllabus Focus",
      description: "Complete coverage of CBSE, ICSE, and State Board syllabi with latest updates."
    },
    {
      icon: <ClipboardList className="w-6 h-6" />,
      title: "Exam Pattern Training",
      description: "Thorough practice with board exam patterns and marking schemes."
    },
    {
      icon: <PenTool className="w-6 h-6" />,
      title: "Answer Writing Skills",
      description: "Expert guidance on presentation, time management, and scoring techniques."
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Previous Year Analysis",
      description: "Comprehensive analysis of past 10 years' question papers and trends."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Subject Experts",
      description: "Experienced teachers with proven board exam success records."
    },
    {
      icon: <Timer className="w-6 h-6" />,
      title: "Time Management",
      description: "Strategies for effective time allocation and stress-free exam preparation."
    }
  ];

  const subjects = [
    {
      name: "Mathematics",
      boards: "CBSE | ICSE | State",
      icon: <Calculator className="w-8 h-8" />,
      gradient: "from-violet-500 to-purple-600",
      bgGradient: "from-violet-900/20 to-purple-900/20",
      topics: ["Algebra", "Geometry", "Trigonometry", "Statistics", "Coordinate Geometry"]
    },
    {
      name: "Science",
      boards: "Physics | Chemistry | Biology",
      icon: <FlaskConical className="w-8 h-8" />,
      gradient: "from-purple-500 to-pink-600",
      bgGradient: "from-purple-900/20 to-pink-900/20",
      topics: ["Theory Concepts", "Numerical Problems", "Practical Work", "Diagrams", "NCERT Focus"]
    },
    {
      name: "Languages",
      boards: "English | Hindi | Regional",
      icon: <Languages className="w-8 h-8" />,
      gradient: "from-indigo-500 to-violet-600",
      bgGradient: "from-indigo-900/20 to-violet-900/20",
      topics: ["Literature", "Grammar", "Writing Skills", "Comprehension", "Poetry Analysis"]
    },
    {
      name: "Social Science",
      boards: "History | Geography | Civics",
      icon: <Globe className="w-8 h-8" />,
      gradient: "from-blue-500 to-indigo-600",
      bgGradient: "from-blue-900/20 to-indigo-900/20",
      topics: ["History", "Geography", "Political Science", "Economics", "Map Work"]
    }
  ];

  const boardTypes = [
    {
      title: "Class 10th CBSE",
      duration: "Complete Preparation",
      icon: <Scroll className="w-6 h-6" />,
      features: ["All Subjects Covered", "Sample Papers", "Board Pattern Tests", "Result Analysis"],
      color: "from-violet-500 to-purple-500"
    },
    {
      title: "Class 12th CBSE",
      duration: "Stream Specific",
      icon: <GraduationCap className="w-6 h-6" />,
      features: ["Science/Commerce/Arts", "Practical Guidance", "Board Strategies", "College Counseling"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "State Boards",
      duration: "Regional Focus",
      icon: <BookOpen className="w-6 h-6" />,
      features: ["State Specific Syllabus", "Regional Language Support", "Local Exam Patterns", "Cultural Context"],
      color: "from-indigo-500 to-violet-500"
    }
  ];

  const stats = [
    { label: "Board Success Rate", value: "98.5%", icon: <TrendingUp className="w-5 h-5" /> },
    { label: "Students Enrolled", value: "1200+", icon: <Users2 className="w-5 h-5" /> },
    { label: "Mock Tests", value: "75+", icon: <FileText className="w-5 h-5" /> },
    { label: "90%+ Achievers", value: "892", icon: <Award className="w-5 h-5" /> }
  ];


  const examSchedule = [
    { phase: "Foundation Phase", duration: "April - August", focus: "Concept Building & Syllabus Coverage" },
    { phase: "Practice Phase", duration: "September - December", focus: "Problem Solving & Mock Tests" },
    { phase: "Revision Phase", duration: "January - February", focus: "Intensive Revision & Final Preparation" },
    { phase: "Exam Phase", duration: "March - May", focus: "Board Exams & Result Support" }
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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.1),transparent)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.1),transparent)] pointer-events-none"></div>
      
      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600/30 via-purple-600/20 to-indigo-600/30 animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-slate-900/50 to-slate-900/80"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-8">
            <button
              onClick={() => handleNavigation('/programs')}
              className="group flex items-center space-x-2 text-violet-400 hover:text-violet-300 transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
              <span className="font-medium">Back to Programs</span>
            </button>
          </div>

          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full blur opacity-75 animate-pulse"></div>
                <div className="relative bg-slate-900 p-4 rounded-full">
                  <BookMarked className="w-12 h-12 text-violet-400" />
                </div>
              </div>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight">
              Board <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">Preparation</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-slate-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Excel in your board examinations with our comprehensive preparation program covering CBSE, ICSE, and State Boards
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-violet-500 to-purple-500 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                  <div className="relative bg-slate-800/60 backdrop-blur-xl rounded-xl border border-violet-500/20 p-4 text-center">
                    <div className="flex justify-center mb-2 text-violet-400">
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

      {/* Board Types Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Board Programs</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Specialized preparation programs for different board examinations and grade levels
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {boardTypes.map((board, index) => (
            <div key={index} className="group relative">
              <div className={`absolute -inset-1 bg-gradient-to-r ${board.color} rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300`}></div>
              
              <div className="relative bg-slate-800/60 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-6 hover:shadow-2xl transition-all duration-300">
                <div className="text-center mb-6">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${board.color} mb-4`}>
                    <div className="text-white">
                      {board.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{board.title}</h3>
                  <p className="text-violet-400 font-medium">{board.duration}</p>
                </div>
                
                <div className="space-y-3">
                  {board.features.map((feature, idx) => (
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

      {/* Exam Timeline */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Preparation Timeline</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Structured preparation schedule to ensure comprehensive coverage and exam readiness
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {examSchedule.map((phase, index) => (
            <div key={index} className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-xl blur group-hover:blur-md transition-all duration-300"></div>
              
              <div className="relative bg-slate-800/60 backdrop-blur-xl rounded-xl border border-slate-700/50 p-6 text-center">
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-violet-500 to-purple-600 text-white font-bold text-sm mb-4">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{phase.phase}</h3>
                <p className="text-violet-400 text-sm font-medium mb-3">{phase.duration}</p>
                <p className="text-slate-300 text-sm">{phase.focus}</p>
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
            Comprehensive preparation for all board subjects with expert guidance and proven strategies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {subjects.map((subject, index) => (
            <div key={index} className="group relative">
              <div className={`absolute -inset-1 bg-gradient-to-r ${subject.gradient} rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300`}></div>
              
              <div className="relative bg-slate-800/60 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-6 hover:shadow-2xl transition-all duration-300">
                <div className={`absolute inset-0 bg-gradient-to-br ${subject.bgGradient} opacity-50 rounded-2xl`}></div>
                
                <div className="relative">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${subject.gradient}`}>
                      <div className="text-white">
                        {subject.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{subject.name}</h3>
                      <p className="text-slate-400">{subject.boards}</p>
                    </div>
                  </div>
                  
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
          <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Board Program?</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Proven strategies and comprehensive support to excel in board examinations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-xl blur group-hover:blur-md transition-all duration-300"></div>
              
              <div className="relative bg-slate-800/60 backdrop-blur-xl rounded-xl border border-slate-700/50 p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-violet-500 to-purple-600">
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
        <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 rounded-3xl blur opacity-30 animate-pulse"></div>
        <div className="relative bg-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 via-purple-600/20 to-indigo-600/20"></div>
          <div className="relative max-w-4xl mx-auto px-8 py-16 text-center">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full blur opacity-50 animate-pulse"></div>
                <div className="relative bg-slate-900 p-3 rounded-full">
                  <GraduationCap className="w-8 h-8 text-violet-400" />
                </div>
              </div>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Excel in Board Exams?
            </h2>
            <p className="text-slate-300 mb-10 text-lg max-w-2xl mx-auto leading-relaxed">
              Join our comprehensive board preparation program and achieve the scores you deserve
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => handleNavigation('/enroll')}
                className="group relative overflow-hidden bg-gradient-to-r from-violet-600 to-purple-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/25"
              >
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <span>Enroll Now</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </button>
              
              <button 
                onClick={() => handleNavigation('/demo')}
                className="group relative overflow-hidden border-2 border-violet-500/50 text-white font-bold py-4 px-8 rounded-xl hover:bg-violet-500/10 transition-all duration-300 backdrop-blur-sm"
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <Play className="w-4 h-4" />
                  <span>Free Assessment</span>
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
                <span>boards@institute.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardPreparation;