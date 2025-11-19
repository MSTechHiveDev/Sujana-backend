"use client";

import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { Star, Quote, Heart, Award, ArrowRight, Users } from "lucide-react";

export default function Testimonials() {
  const [schoolData, setSchoolData] = useState(null);

  useEffect(() => {
    // Load school data
    fetch('/data/data.json')
      .then(response => response.json())
      .then(data => setSchoolData(data))
      .catch(error => console.error('Error loading school data:', error));
  }, []);

  if (!schoolData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-slate-600"></div>
      </div>
    );
  }

  const { testimonials, school } = schoolData;

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section className="bg-slate-50 min-h-screen">
      {/* Hero Banner */}
      <div className="w-full bg-white shadow-xl overflow-hidden">
        <div className="relative">
          <img
            src="/images/2.jpeg" 
            alt="Kadapa Public School Testimonials"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/60 flex flex-col justify-center px-10 md:px-20 lg:px-32">
            <h1 className="text-4xl md:text-6xl font-light text-white leading-tight mb-4">
              What Our <span className="font-medium">Community</span> Says
            </h1>
            <p className="text-xl text-slate-200 mb-8 max-w-2xl leading-relaxed">
              Hear from parents, students, and alumni about their experience at Kadapa Public School
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-slate-800 hover:bg-slate-700 text-white font-medium px-8 py-4 rounded-lg flex items-center transition-all"
              >
                Share Your Story
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                to="/about"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-800 font-medium px-8 py-4 rounded-lg transition-all"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-yellow-100 rounded-full text-sm font-medium text-yellow-700 mb-6">
            <Award className="w-4 h-4 mr-2" />
            Parent & Alumni Reviews
          </div>
          <h2 className="text-3xl md:text-4xl font-light text-slate-800 mb-4">
            Voices of <span className="font-medium">Trust</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Our commitment to excellence is reflected in the experiences and achievements 
            of our students, parents, and alumni community.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100 hover:shadow-2xl transition-shadow">
              {/* Quote Icon */}
              <div className="flex justify-between items-start mb-6">
                <Quote className="w-8 h-8 text-slate-300" />
                <div className="flex">
                  {renderStars(testimonial.rating)}
                </div>
              </div>
              
              {/* Testimonial Message */}
              <blockquote className="text-slate-700 leading-relaxed mb-6 italic">
                "{testimonial.message}"
              </blockquote>
              
              {/* Author Info */}
              <div className="border-t border-slate-200 pt-6">
                <div className="flex items-center">
                  <div className="bg-slate-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-slate-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-800">{testimonial.name}</h4>
                    <p className="text-sm text-slate-500">{testimonial.relation}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-20 border border-slate-100">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-slate-800 mb-4">
              Community <span className="font-medium">Satisfaction</span>
            </h2>
            <p className="text-lg text-slate-600">
              Our commitment to excellence reflected in numbers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-yellow-600" />
              </div>
              <div className="text-3xl font-light text-slate-800 mb-2">5.0</div>
              <div className="text-sm text-slate-600">Average Rating</div>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-light text-slate-800 mb-2">100+</div>
              <div className="text-sm text-slate-600">Happy Families</div>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-3xl font-light text-slate-800 mb-2">95%</div>
              <div className="text-sm text-slate-600">Parent Satisfaction</div>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-3xl font-light text-slate-800 mb-2">5+</div>
              <div className="text-sm text-slate-600">Years of Excellence</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
            Join Our <span className="font-medium">Success Story</span>
          </h2>
          <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
            Be part of a community that values education, character, and excellence. 
            Your child's journey to success starts here.
          </p>
          
          {/* Testimonial Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-lg font-medium text-white mb-2">Academic Excellence</h3>
              <p className="text-sm text-slate-200">Strong foundation and outstanding results</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-lg font-medium text-white mb-2">Character Building</h3>
              <p className="text-sm text-slate-200">Values-based education and moral development</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-lg font-medium text-white mb-2">Personal Attention</h3>
              <p className="text-sm text-slate-200">Individual care and mentorship</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/admissions"
              className="bg-white text-slate-800 font-medium px-8 py-4 rounded-lg hover:bg-slate-100 transition-colors flex items-center justify-center"
            >
              Start Your Journey
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              to="/about"
              className="border-2 border-white text-white hover:bg-white hover:text-slate-800 font-medium px-8 py-4 rounded-lg transition-colors flex items-center justify-center"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}