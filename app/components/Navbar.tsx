"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaTasks, FaGithub } from "react-icons/fa";
import { RiInformation2Line, RiCloseLine, RiMenuLine } from "react-icons/ri";
import { HiSparkles } from "react-icons/hi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMenuOpen && !(event.target as Element).closest('nav')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-200/50' 
        : 'bg-white/80 backdrop-blur-sm shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center group">
              <div className="relative p-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl group-hover:from-indigo-600 group-hover:to-purple-700 transition-all duration-300 group-hover:shadow-lg group-hover:scale-105">
                <FaTasks className="h-5 w-5 text-white" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-pink-400 to-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <HiSparkles className="h-3 w-3 text-white" />
                </div>
              </div>
              <div className="ml-3 hidden sm:block">
                <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  TaskMaster
                </span>
                <div className="text-xs text-gray-500 -mt-1">Pro</div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            <Link
              href="https://raihanulislam.vercel.app/"
              className="flex items-center px-4 py-2 rounded-xl text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 transition-all duration-200 group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiInformation2Line className="mr-2 group-hover:rotate-12 transition-transform duration-200" />
              <span className="font-medium">About</span>
            </Link>
            
            <Link
              href="https://github.com/raihanulislam00"
              className="flex items-center px-4 py-2 rounded-xl text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all duration-200 group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="mr-2 group-hover:scale-110 transition-transform duration-200" />
              <span className="font-medium">GitHub</span>
            </Link>

            {/* CTA Button */}
            <div className="ml-4 pl-4 border-l border-gray-200">
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-4 py-2 rounded-xl font-medium transition-all duration-200 hover:shadow-lg hover:scale-105 active:scale-95">
                Get Started
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className={`inline-flex items-center justify-center p-2 rounded-xl transition-all duration-200 ${
                isMenuOpen 
                  ? 'text-indigo-600 bg-indigo-50' 
                  : 'text-gray-600 hover:text-indigo-600 hover:bg-indigo-50'
              }`}
            >
              <span className="sr-only">
                {isMenuOpen ? 'Close main menu' : 'Open main menu'}
              </span>
              <div className="relative w-6 h-6">
                <RiMenuLine 
                  className={`absolute inset-0 h-6 w-6 transition-all duration-200 ${
                    isMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'
                  }`} 
                />
                <RiCloseLine 
                  className={`absolute inset-0 h-6 w-6 transition-all duration-200 ${
                    isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'
                  }`} 
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isMenuOpen 
          ? 'max-h-64 opacity-100' 
          : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="px-4 pt-2 pb-6 space-y-2 bg-white/95 backdrop-blur-md border-t border-gray-100">
          <Link
            href="https://raihanulislam.vercel.app/"
            className="flex items-center px-4 py-3 rounded-xl text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 transition-all duration-200 group"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="p-2 bg-indigo-100 rounded-lg mr-3 group-hover:bg-indigo-200 transition-colors duration-200">
              <RiInformation2Line className="h-4 w-4 text-indigo-600" />
            </div>
            <div>
              <div className="font-medium">About</div>
              <div className="text-sm text-gray-500">Learn more about me</div>
            </div>
          </Link>
          
          <Link
            href="https://github.com/raihanulislam00"
            className="flex items-center px-4 py-3 rounded-xl text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all duration-200 group"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="p-2 bg-gray-100 rounded-lg mr-3 group-hover:bg-gray-200 transition-colors duration-200">
              <FaGithub className="h-4 w-4 text-gray-700" />
            </div>
            <div>
              <div className="font-medium">GitHub</div>
              <div className="text-sm text-gray-500">View my projects</div>
            </div>
          </Link>

          {/* Mobile CTA */}
          <div className="pt-4 mt-4 border-t border-gray-200">
            <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-4 py-3 rounded-xl font-medium transition-all duration-200 hover:shadow-lg">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;