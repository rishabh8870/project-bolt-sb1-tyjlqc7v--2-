import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Merge as Tiger, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <Tiger className="h-8 w-8 text-red-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">Shakti Security</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-red-600 transition-colors">Home</Link>
            <Link to="/about" className="text-gray-600 hover:text-red-600 transition-colors">About</Link>
            <Link to="/services" className="text-gray-600 hover:text-red-600 transition-colors">Services</Link>
            <Link to="/contact" className="text-gray-600 hover:text-red-600 transition-colors">Contact</Link>
            <Link to="/careers" className="text-gray-600 hover:text-red-600 transition-colors">Careers</Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-red-600">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
              <Link to="/" className="block w-full text-left px-3 py-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-md">Home</Link>
              <Link to="/about" className="block w-full text-left px-3 py-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-md">About</Link>
              <Link to="/services" className="block w-full text-left px-3 py-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-md">Services</Link>
              <Link to="/contact" className="block w-full text-left px-3 py-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-md">Contact</Link>
              <Link to="/careers" className="block w-full text-left px-3 py-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-md">Careers</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}