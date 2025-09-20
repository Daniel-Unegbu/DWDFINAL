import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/DWD BEST.png" 
              alt="Deutsch with Daniel" 
              className="h-12 w-12 object-contain"
            />
            <span className="text-xl font-bold text-blue-900">Deutsch with Daniel</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/') 
                  ? 'text-blue-900 bg-yellow-100' 
                  : 'text-gray-700 hover:text-blue-900 hover:bg-yellow-50'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/courses"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/courses') 
                  ? 'text-blue-900 bg-yellow-100' 
                  : 'text-gray-700 hover:text-blue-900 hover:bg-yellow-50'
              }`}
            >
              Courses
            </Link>
            <Link 
              to="/contact"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/contact') 
                  ? 'text-blue-900 bg-yellow-100' 
                  : 'text-gray-700 hover:text-blue-900 hover:bg-yellow-50'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-blue-900 hover:bg-yellow-50"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
              <Link 
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive('/') 
                    ? 'text-blue-900 bg-yellow-100' 
                    : 'text-gray-700 hover:text-blue-900 hover:bg-yellow-50'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/courses"
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive('/courses') 
                    ? 'text-blue-900 bg-yellow-100' 
                    : 'text-gray-700 hover:text-blue-900 hover:bg-yellow-50'
                }`}
              >
                Courses
              </Link>
              <Link 
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive('/contact') 
                    ? 'text-blue-900 bg-yellow-100' 
                    : 'text-gray-700 hover:text-blue-900 hover:bg-yellow-50'
                }`}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}