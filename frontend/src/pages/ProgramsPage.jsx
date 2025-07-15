// Enhanced Programs Section
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
  ArrowRight
} from 'lucide-react';

const ProgramsSection = ({ navigate }) => {
  const programs = [
    {
      title: "JEE Preparation",
      description: "Comprehensive coaching for JEE Main & Advanced with expert faculty and proven methodology.",
      duration: "2 Years",
      students: "500+",
      successRate: "95%",
      features: ["Live Classes", "Mock Tests", "Doubt Clearing", "Study Material"],
      gradient: "from-blue-600 to-purple-600"
    },
    {
      title: "NEET Coaching",
      description: "Complete NEET preparation with focus on Biology, Physics, and Chemistry.",
      duration: "2 Years",
      students: "400+",
      successRate: "92%",
      features: ["Expert Faculty", "Regular Tests", "Lab Practice", "Counseling"],
      gradient: "from-green-600 to-emerald-600"
    },
    {
      title: "Foundation Classes",
      description: "Strong foundation building for Class 9-10 students preparing for competitive exams.",
      duration: "1 Year",
      students: "300+",
      successRate: "98%",
      features: ["Concept Building", "Problem Solving", "Regular Assessment", "Career Guidance"],
      gradient: "from-orange-600 to-red-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive courses designed to help you achieve your academic goals
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
              <div className={`h-2 bg-gradient-to-r ${program.gradient}`}></div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{program.title}</h3>
                <p className="text-gray-600 mb-6">{program.description}</p>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900">{program.duration}</div>
                    <div className="text-sm text-gray-500">Duration</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900">{program.students}</div>
                    <div className="text-sm text-gray-500">Students</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900">{program.successRate}</div>
                    <div className="text-sm text-gray-500">Success Rate</div>
                  </div>
                </div>
                
                <div className="space-y-2 mb-6">
                  {program.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button
                  onClick={() => navigate('/programs')}
                  className={`w-full bg-gradient-to-r ${program.gradient} text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform group-hover:scale-105`}
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ProgramsSection