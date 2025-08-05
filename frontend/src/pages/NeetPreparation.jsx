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
  Stethoscope,
  Brain,
  FlaskConical,
  Microscope,
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
  BarChart3
} from 'lucide-react';

const NEETPreparation = ({ navigate }) => {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Conceptual Clarity",
      description: "Deep understanding of Biology, Chemistry, and Physics concepts with real-world applications."
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "NCERT Focus",
      description: "Comprehensive coverage of NCERT syllabus with additional reference materials."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Mock Tests",
      description: "Regular NEET pattern mock tests with detailed performance analysis."
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Expert Faculty",
      description: "Learn from experienced medical professionals and subject matter experts."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Small Batches",
      description: "Limited students per batch for personalized attention and doubt clearing."
    },
    {
      icon: <FlaskConical className="w-6 h-6" />,
      title: "Lab Sessions",
      description: "Hands-on practical sessions for better understanding of scientific concepts."
    }
  ];

  const subjects = [
    {
      name: "Biology",
      chapters: 38,
      icon: <Microscope className="w-8 h-8" />,
      gradient: "from-emerald-500 to-teal-600",
      bgGradient: "from-emerald-900/20 to-teal-900/20",
      topics: ["Botany", "Zoology", "Human Physiology", "Genetics", "Ecology"]
    },
    {
      name: "Chemistry",
      chapters: 30,
      icon: <FlaskConical className="w-8 h-8" />,
      gradient: "from-blue-500 to-cyan-600",
      bgGradient: "from-blue-900/20 to-cyan-900/20",
      topics: ["Organic", "Inorganic", "Physical", "Biochemistry"]
    },
    {
      name: "Physics",
      chapters: 26,
      icon: <Zap className="w-8 h-8" />,
      gradient: "from-purple-500 to-pink-600",
      bgGradient: "from-purple-900/20 to-pink-900/20",
      topics: ["Mechanics", "Thermodynamics", "Optics", "Modern Physics"]
    }
  ];

  const stats = [
    { label: "Success Rate", value: "88%", icon: <TrendingUp className="w-5 h-5" /> },
    { label: "Students Enrolled", value: "400+", icon: <Users2 className="w-5 h-5" /> },
    { label: "Mock Tests", value: "50+", icon: <FileText className="w-5 h-5" /> },
    { label: "Study Hours", value: "1200+", icon: <Timer className="w-5 h-5" /> }
  ];


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(239,68,68,0.1),transparent)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.1),transparent)] pointer-events-none"></div>
      
      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-rose-600/30 via-pink-600/20 to-red-600/30 animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-slate-900/50 to-slate-900/80"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-8">
            <button
              onClick={() => navigate('/programs')}
              className="group flex items-center space-x-2 text-rose-400 hover:text-rose-300 transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
              <span className="font-medium">Back to Programs</span>
            </button>
          </div>

          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full blur opacity-75 animate-pulse"></div>
                <div className="relative bg-slate-900 p-4 rounded-full">
                  <Stethoscope className="w-12 h-12 text-rose-400" />
                </div>
              </div>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight">
              NEET <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-red-400 bg-clip-text text-transparent">Preparation</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-slate-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Master the National Eligibility cum Entrance Test with our comprehensive coaching program designed for aspiring medical professionals
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-rose-500 to-pink-500 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                  <div className="relative bg-slate-800/60 backdrop-blur-xl rounded-xl border border-rose-500/20 p-4 text-center">
                    <div className="flex justify-center mb-2 text-rose-400">
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

      {/* Subjects Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Subject Coverage</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Comprehensive coverage of all NEET subjects with expert guidance and structured learning
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
          <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our NEET Program?</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Comprehensive features designed to maximize your NEET preparation and ensure success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-rose-500/20 to-pink-500/20 rounded-xl blur group-hover:blur-md transition-all duration-300"></div>
              
              <div className="relative bg-slate-800/60 backdrop-blur-xl rounded-xl border border-slate-700/50 p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-rose-500 to-pink-600">
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
        <div className="absolute -inset-1 bg-gradient-to-r from-rose-600 via-pink-600 to-red-600 rounded-3xl blur opacity-30 animate-pulse"></div>
        <div className="relative bg-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-rose-600/20 via-pink-600/20 to-red-600/20"></div>
          <div className="relative max-w-4xl mx-auto px-8 py-16 text-center">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full blur opacity-50 animate-pulse"></div>
                <div className="relative bg-slate-900 p-3 rounded-full">
                  <GraduationCap className="w-8 h-8 text-rose-400" />
                </div>
              </div>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Start Your Medical Journey?
            </h2>
            <p className="text-slate-300 mb-10 text-lg max-w-2xl mx-auto leading-relaxed">
              Join our comprehensive NEET preparation program and take the first step towards becoming a doctor
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group relative overflow-hidden bg-gradient-to-r from-rose-600 to-pink-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-rose-500/25">
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <span>Enroll Now</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </button>
              
              <button className="group relative overflow-hidden border-2 border-rose-500/50 text-white font-bold py-4 px-8 rounded-xl hover:bg-rose-500/10 transition-all duration-300 backdrop-blur-sm">
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
                <span>neet@institute.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NEETPreparation;