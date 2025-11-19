"use client";

import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { Target, Heart, Users, Award, BookOpen, MapPin, Phone, Mail, ArrowRight, Star, GraduationCap } from "lucide-react";

export default function About() {
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

  const { school, mission_vision, academics, staff } = schoolData;

  return (
    <section className="bg-slate-50 min-h-screen">
      {/* Hero Banner */}
      <div className="w-full bg-white shadow-xl overflow-hidden">
        <div className="relative">
          <img
            src="/images/1.jpeg" 
            alt="Kadapa Public School Campus"
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/60 flex flex-col justify-center px-10 md:px-20 lg:px-32">
            <h1 className="text-4xl md:text-6xl font-light text-white leading-tight mb-4">
              About <span className="font-medium">{school.name}</span>
            </h1>
            <p className="text-xl text-slate-200 mb-8 max-w-2xl leading-relaxed">
              {school.tagline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/admissions"
                className="bg-slate-800 hover:bg-slate-700 text-white font-medium px-8 py-4 rounded-lg flex items-center transition-all"
              >
                Apply Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-800 font-medium px-8 py-4 rounded-lg transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* School Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-slate-200 rounded-full text-sm font-medium text-slate-700 mb-6">
              <Heart className="w-4 h-4 mr-2" />
              Our Story Since {school.established}
            </div>
            <h2 className="text-4xl font-light text-slate-800 mb-6">
              <span className="font-medium">Excellence</span> in Education for {new Date().getFullYear() - school.established}+ Years
            </h2>
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                {mission_vision.mission}
              </p>
              <p>
                {mission_vision.vision}
              </p>
              <div className="bg-slate-100 p-4 rounded-lg mt-6">
                <p className="text-sm text-slate-600 font-medium mb-2">Key Details:</p>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>• Affiliation: {school.affiliation}</li>
                  <li>• Campus Size: {school.campus_size_acres} Acres</li>
                  <li>• Managing Body: {school.managing_committee}</li>
                  <li>• Type: {school.school_type}</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="/images/2.jpeg" 
              alt="Students learning at KPS"
              className="w-full h-96 object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-slate-100">
              <p className="text-sm font-medium text-slate-800">{school.campus_size_acres} Acres</p>
              <p className="text-xs text-slate-500">Modern Campus</p>
            </div>
          </div>
        </div>

        {/* Principal's Message */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-20 border border-slate-100">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-light text-slate-800 mb-4">
              Message from <span className="font-medium">Our Principal</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1 text-center">
              <div className="bg-slate-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-12 h-12 text-slate-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-800 mb-2">{school.principal.name}</h3>
              <p className="text-sm text-slate-600 mb-2">Principal</p>
              <p className="text-xs text-slate-500">{school.principal.qualifications.join(", ")}</p>
            </div>
            <div className="md:col-span-2">
              <blockquote className="text-lg text-slate-700 italic leading-relaxed">
                "{school.principal.message}"
              </blockquote>
            </div>
          </div>
        </div>

        {/* Academic Excellence */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-slate-800 mb-4">
              Academic <span className="font-medium">Excellence</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive education across multiple streams with modern teaching methodologies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Classes Offered */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-100">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-medium text-slate-800 mb-3">Classes Offered</h3>
              <p className="text-sm text-slate-600 mb-3">Classes {academics.classes_offered.join(", ")}</p>
              <p className="text-xs text-slate-500">Comprehensive secondary education</p>
            </div>

            {/* Streams */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-100">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-medium text-slate-800 mb-3">Streams Available</h3>
              <p className="text-sm text-slate-600 mb-3">{academics.streams.join(", ")}</p>
              <p className="text-xs text-slate-500">Multiple career pathways</p>
            </div>

            {/* Student-Teacher Ratio */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-100">
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-medium text-slate-800 mb-3">Student-Teacher Ratio</h3>
              <p className="text-sm text-slate-600 mb-3">{academics.student_teacher_ratio}</p>
              <p className="text-xs text-slate-500">Personalized attention</p>
            </div>
          </div>
        </div>

        {/* Facilities & Infrastructure */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-20 border border-slate-100">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-slate-800 mb-4">
              Modern <span className="font-medium">Infrastructure</span>
            </h2>
            <p className="text-lg text-slate-600">
              State-of-the-art facilities supporting comprehensive learning
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-slate-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-slate-600" />
              </div>
              <h3 className="text-lg font-medium text-slate-800 mb-2">Modern Labs</h3>
              <p className="text-sm text-slate-600">{academics.labs.length} Well-equipped laboratories</p>
            </div>
            
            <div className="text-center">
              <div className="bg-slate-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-slate-600" />
              </div>
              <h3 className="text-lg font-medium text-slate-800 mb-2">Expert Faculty</h3>
              <p className="text-sm text-slate-600">{staff.total_faculty} Qualified educators</p>
            </div>
            
            <div className="text-center">
              <div className="bg-slate-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-slate-600" />
              </div>
              <h3 className="text-lg font-medium text-slate-800 mb-2">Sports Complex</h3>
              <p className="text-sm text-slate-600">8+ Sports facilities</p>
            </div>
            
            <div className="text-center">
              <div className="bg-slate-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-slate-600" />
              </div>
              <h3 className="text-lg font-medium text-slate-800 mb-2">Student Care</h3>
              <p className="text-sm text-slate-600">Comprehensive support system</p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-slate-100">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-slate-800 mb-4">
              Visit Our <span className="font-medium">Campus</span>
            </h2>
            <p className="text-lg text-slate-600">
              Located in the heart of Kadapa with excellent connectivity
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-slate-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-slate-600" />
              </div>
              <h3 className="text-lg font-medium text-slate-800 mb-2">Address</h3>
              <p className="text-sm text-slate-600">
                {school.contact.address.street}<br />
                {school.contact.address.city}, {school.contact.address.state} - {school.contact.address.pinCode}
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-slate-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-slate-600" />
              </div>
              <h3 className="text-lg font-medium text-slate-800 mb-2">Phone</h3>
              <p className="text-sm text-slate-600">
                {school.contact.phone}<br />
                Mon-Sat: 8:30 AM - 6:00 PM
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-slate-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-slate-600" />
              </div>
              <h3 className="text-lg font-medium text-slate-800 mb-2">Email</h3>
              <p className="text-sm text-slate-600">
                {school.contact.email}<br />
                admissions@kps.edu.in
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
