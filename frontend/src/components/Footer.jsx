// components/Footer.jsx
import React from "react";
import { GraduationCap, MapPin, Phone, Mail } from "lucide-react";

const Footer = ({ navigate }) => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Programs', path: '/programs' },
    { name: 'About', path: '/about' },
    { name: 'Campus', path: '/campus' },
    { name: 'Contact', path: '/contact' }
  ];

  const programs = [
    'JEE Preparation',
    'NEET Coaching',
    'Class 10th',
    'Class 12th',
    'Foundation Courses'
  ];

  const handleNavigation = (path) => {
    if (navigate) {
      navigate(path);
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl">Deeksha Classes</span>
            </div>
            <p className="text-gray-400 mb-4">
              Empowering students with quality education and innovative teaching methods for a brighter future.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
                <span className="text-sm font-bold">f</span>
              </div>
              <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-500 transition-colors">
                <span className="text-sm font-bold">t</span>
              </div>
              <div className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-900 transition-colors">
                <span className="text-sm font-bold">in</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavigation(link.path)}
                  className="block text-gray-400 hover:text-white transition-colors cursor-pointer text-left"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Programs</h3>
            <div className="space-y-2">
              {programs.map((program) => (
                <div key={program} className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  {program}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400">Patna, Bihar, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400">+91 9876543210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400">info@deekshaclasses.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Deeksha Classes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;