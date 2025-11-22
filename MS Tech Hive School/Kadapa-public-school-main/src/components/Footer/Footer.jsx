import React from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white border-t border-gray-700 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* School Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex flex-col sm:flex-row items-center sm:items-start mb-4 gap-2 sm:gap-0">
              <video
                src="/videos/home.mp4"
                alt="School Logo"
                className="h-16 w-32 sm:h-20 sm:w-40 object-contain"
                autoPlay
                muted
                loop
              />
              <img
                src="/images/name1.png"
                alt="School Name"
                className="h-12 sm:h-18 w-auto max-w-full object-contain"
              />
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Established in 2019, Kadapa Public School is committed to
              providing quality education and holistic development for every
              student. We focus on cultivating critical thinking, creativity,
              and character building.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-300">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Alam Khan Palle, Kadapa, Andhra Pradesh - 516001</span>
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <Phone className="h-4 w-4 mr-2" />
                <span>+91-9989777356</span>
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <Mail className="h-4 w-4 mr-2" />
                <span>info@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/academics"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Academics
                </Link>
              </li>
              <li>
                <Link
                  to="/admissions"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Admissions
                </Link>
              </li>
              <li>
                <Link
                  to="/facilities"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Campus & Facilities
                </Link>
              </li>
              <li>
                <Link
                  to="/fees"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Fee Structure
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/testimonials"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* School Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              School Information
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <span className="block">CBSE Affiliated</span>
                <span className="text-xs text-gray-400">
                  Affiliation No: 130623
                </span>
              </li>
              <li>
                <span className="block">Managing Committee</span>
                <span className="text-xs text-gray-400">
                  SPHURTHI FOUNDATION
                </span>
              </li>
              <li>
                <span className="block">Campus Size</span>
                <span className="text-xs text-gray-400">4 Acres</span>
              </li>
              <li>
                <span className="block">Student-Teacher Ratio</span>
                <span className="text-xs text-gray-400">30:1</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col space-y-4 md:flex-row md:justify-between md:items-center md:space-y-0">
            <div className="text-sm text-gray-400 text-center md:text-left">
              <p>
                &copy; 2025 Kadapa Public School. All rights reserved
                <a
                  href="https://www.mstechhive.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-400 hover:text-yellow-300 ml-2 transition-colors font-bold underline"
                >
                  Ms Tech Hive
                </a>
              </p>
            </div>

            {/* Social Media Links */}
            <div className="flex justify-center md:justify-end space-x-6">
              <a
                href="https://facebook.com/kadapa.public.school"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors p-2"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com/kadapa_public_school"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors p-2"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://youtube.com/kadapapublicschool"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors p-2"
                aria-label="YouTube"
              >
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
