import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  Home,
  Users,
  BookOpen,
  UserCheck,
  Building,
  FileText,
  Phone,
  Monitor,
  Trophy,
  Image,
  MessageSquare,
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About Us', href: '#about', icon: Users },
    { name: 'Academics', href: '#facilities', icon: BookOpen },
    { name: 'Admissions', href: '#admissions', icon: UserCheck },
    { name: 'Campus & Facilities', href: '#facilities', icon: Building },
    { name: 'Fee Structure', href: '#fees', icon: FileText },
    { name: 'Gallery', href: '#gallery', icon: Image },
    { name: 'Testimonials', href: '#testimonials', icon: MessageSquare },
    { name: 'Labs', href: '/labs', icon: Monitor },
    { name: 'Sports', href: '/sports', icon: Trophy },
    { name: 'Mandatory Disclosure Forms', href: '#mandatory', icon: FileText },
    { name: 'Contact Us', href: '#footer', icon: Phone },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-black shadow-lg sticky top-0 z-[99999]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* LOGO + NAME */}
          <div className="flex items-center gap-1">
            <Link to="/" className="flex items-center">
              <img
                src="/images/logo.png"
                alt="School Logo"
                className="h-19 w-17 object-contain mr-0"
              />
              <img
                src="/images/name.png"
                alt="School Name"
                className="h-18 w-80 object-contain hidden sm:block"
              />
              <span className="sm:hidden text-xl font-bold text-white">
                KPS
              </span>
            </Link>
          </div>

          {/* AFFILIATION DETAILS (Desktop only) */}
          <div className="hidden lg:flex flex-col text-right leading-tight">
            <span className="text-yellow-600 font-bold tracking-wide text-xl uppercase">
              Affiliated to CBSE, New Delhi
              <br />
              Affiliation No.130623
            </span>
          </div>

          {/* LOGIN BUTTONS */}
          <div className="flex items-center space-x-2">
            <button className="px-2 py-1 md:px-3 md:py-2 text-xs md:text-sm text-gray-300 hover:text-white hover:bg-gray-700 rounded-md transition-colors duration-200">
              Login
            </button>
            <button className="px-2 py-1 md:px-3 md:py-2 text-xs md:text-sm bg-orange-900 text-white hover:bg-orange-800 rounded-md transition-colors duration-200">
              Admin Login
            </button>
          </div>

          {/* HAMBURGER BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center p-3 rounded-md
                       text-gray-300 hover:text-white hover:bg-gray-700
                       focus:outline-none focus:ring-2 focus:ring-orange-900"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* DROPDOWN MENU */}
      {isOpen && (
        <div className="lg:absolute lg:right-0 lg:top-full lg:mt-2 lg:w-64 w-full z-[99999]">
          <div className="px-2 pt-2 pb-2 bg-gray-900 border-t border-gray-700 rounded-lg shadow-2xl">
            <div className="flex flex-col space-y-0.5">
              {navigation.map((item) =>
                item.href.startsWith('/') ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-1 px-1 py-0.5 rounded text-sm font-medium
                      transition-colors duration-200 ${
                        isActive(item.href)
                          ? 'bg-orange-900 text-white'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                      }`}
                  >
                    <item.icon className="w-3 h-3" />
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-1 px-1 py-0.5 rounded text-sm font-medium
                      transition-colors duration-200 ${
                        isActive(item.href)
                          ? 'bg-orange-900 text-white'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                      }`}
                  >
                    <item.icon className="w-3 h-3" />
                    {item.name}
                  </a>
                ),
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
