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

// Enhanced Features Section
const FeaturesSection = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Faculty",
      description: "Learn from experienced educators with proven track records in their respective fields.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Comprehensive Curriculum",
      description: "Well-structured courses covering all aspects of competitive exam preparation.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Proven Results",
      description: "Consistently high success rates with students achieving their dream careers.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Personalized Approach",
      description: "Individual attention and customized learning paths for every student.",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Deeksha Classes?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide the perfect blend of traditional teaching methods and modern technology to ensure your success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


 export default FeaturesSection

