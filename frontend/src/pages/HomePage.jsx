  // Main HomePage Component
  import HeroSection from "../components/HeroSection";
  import FeaturesSection from "../components/FeaturesSection"
  import TestimonialsSection from "../components/TestimonialsSection";
  const HomePage = ({ navigate }) => {
    return (
      <div className="min-h-screen">
        <HeroSection navigate={navigate} />
        <FeaturesSection />
        <TestimonialsSection />
      </div>
    );
  };

  export default HomePage;