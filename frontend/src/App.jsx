// App.jsx - Main routing file
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProgramsPage from "./pages/ProgramsPage";
import AboutPage from "./pages/AboutPage";
import GalleryPage from "./pages/GalleryPage";
import TestimonialsPage from "./components/TestimonialsSection";
import Contact from "./pages/Contact";
import Programs from "./pages/Programs";
import Preloader from "./components/Preloader"; // Add this import
import AddTestimonials from "./components/AddTestimonials";

// Router Implementation
const Router = ({ children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  
  useEffect(() => {
    const handlePopState = () => setCurrentPath(window.location.pathname);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);
  
  const navigate = (path) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
  };
  
  return React.Children.map(children, child => 
    React.cloneElement(child, { currentPath, navigate })
  );
};

const Route = ({ path, component: Component, currentPath, navigate }) => {
  return currentPath === path ? <Component navigate={navigate} /> : null;
};

// Main App Component
const App = () => {
  // Add loading state
  const [isLoading, setIsLoading] = useState(true);

  // Handle preloader completion
  const handleLoadComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {/* Preloader - shows for 5 seconds */}
      {isLoading && <Preloader onLoadComplete={handleLoadComplete} />}
      
      {/* Main App Content - hidden while loading */}
      <div className={`transition-opacity duration-700 ${isLoading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <Router>
          <Navbar />
          <Route path="/" component={HomePage} />
          <Route path="/programs" component={Programs} />
          <Route path="/about" component={AboutPage} />
          <Route path="/campus" component={GalleryPage} />
          <Route path="/testimonials" component={TestimonialsPage} />
          <Route path="/contact" component={Contact} />
          <Route path="/submit-testimonial" component={AddTestimonials} />
          <Footer />
        </Router>
      </div>
    </>
  );
};

export default App;