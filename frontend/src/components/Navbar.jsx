// Enhanced Navbar Component
import Logo from "../assets/Logo.jpg"
import { useState, useEffect } from "react";
import { GraduationCap, Menu, X, ChevronDown } from "lucide-react";

const Navbar = ({ navigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { 
      name: 'Programs', 
      path: '/programs',
      dropdown: [
        { name: 'JEE Preparation', path: '/programs#jee' },
        { name: 'NEET Coaching', path: '/programs#neet' },
        { name: 'Foundation Classes', path: '/programs#foundation' },
        { name: 'Board Preparation', path: '/programs#board' }
      ]
    },
    { name: 'About', path: '/about' },
    { name: 'Campus', path: '/campus' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' }
  ];

  const handleNavigation = (path) => {
    if (navigate) {
      navigate(path);
    }
  };

  return (
    <header className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-white/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <button 
          onClick={() => handleNavigation('/')} 
          className="flex items-center space-x-3 group cursor-pointer"
        >
          <div className="flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105 group-hover:rotate-3">
            <img src={Logo} className="w-12 h-12 text-white rounded-full" />
          </div>
          <span className={`font-bold text-2xl transition-all duration-300 ${
            scrolled ? 'text-gray-800' : 'text-white'
          }`}>
            Deeksha Classes
          </span>
        </button>

        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              <button
                onClick={() => handleNavigation(item.path)}
                className={`font-medium transition-all duration-300 hover:scale-105 relative flex items-center space-x-1 ${
                  scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-300'
                }`}
                onMouseEnter={() => setActiveDropdown(item.dropdown ? item.name : null)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <span>{item.name}</span>
                {item.dropdown && <ChevronDown className="w-4 h-4" />}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
              
              {item.dropdown && activeDropdown === item.name && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 py-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  {item.dropdown.map((dropdownItem) => (
                    <button
                      key={dropdownItem.name}
                      onClick={() => handleNavigation(dropdownItem.path)}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                    >
                      {dropdownItem.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden md:block">
          <button
            onClick={() => handleNavigation('/contact')}
            className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 relative overflow-hidden group"
          >
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>

        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className={`md:hidden text-3xl transition-all duration-300 hover:scale-110 ${
            scrolled ? 'text-gray-800' : 'text-white'
          }`}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-white/95 backdrop-blur-xl z-40 transform transition-transform duration-500 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } shadow-2xl border-l border-white/20`}>
        <div className="flex flex-col px-6 py-8 space-y-6">
          <button 
            onClick={() => setIsOpen(false)} 
            className="self-end text-2xl text-gray-600 hover:text-gray-800 transition-colors hover:scale-110"
          >
            <X />
          </button>
          
          {navItems.map((item, index) => (
            <div key={item.name} className="space-y-2">
              <button
                onClick={() => {
                  handleNavigation(item.path);
                  setIsOpen(false);
                }}
                className="text-gray-700 hover:text-blue-600 font-medium text-lg transition-all duration-300 hover:translate-x-2 block w-full text-left"
              >
                {item.name}
              </button>
              
              {item.dropdown && (
                <div className="ml-4 space-y-1">
                  {item.dropdown.map((dropdownItem) => (
                    <button
                      key={dropdownItem.name}
                      onClick={() => {
                        handleNavigation(dropdownItem.path);
                        setIsOpen(false);
                      }}
                      className="text-gray-500 hover:text-blue-500 text-sm transition-colors block w-full text-left"
                    >
                      {dropdownItem.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
          
          <button
            onClick={() => {
              handleNavigation('/contact');
              setIsOpen(false);
            }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold text-center hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            Get Started
          </button>
        </div>
      </div>

      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </header>
  );
};

export default Navbar;