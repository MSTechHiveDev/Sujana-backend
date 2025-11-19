'use client';

import React from 'react';
import { ArrowRight, CalendarDays, Star } from 'lucide-react';

export default function AdmissionsOpen() {
  return (
    <section
      id="admissions"
      className="relative bg-gradient-to-br from-[#0b1320] via-[#111b2d] to-[#1a2335] py-24 text-center overflow-hidden"
    >
      {/* Decorative Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,215,0,0.1),_transparent_70%)]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-6 md:px-10">
        <div className="flex items-center gap-3 mb-4">
          <Star className="w-6 h-6 text-yellow-500 animate-pulse" />
          <p className="uppercase tracking-widest text-yellow-400 font-semibold text-sm">
            Admissions Now Open
          </p>
          <Star className="w-6 h-6 text-yellow-500 animate-pulse" />
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Enroll for{' '}
          <span className="text-yellow-400">2026–27 Academic Year</span>
        </h2>

        <p className="text-gray-300 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
          Join Kadapa Public School and be part of an institution that blends
          academic excellence with holistic development and innovation-driven
          learning.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#apply"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 rounded-lg flex items-center justify-center transition-all"
          >
            Apply Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
          <a
            href="#admissions"
            className="border-2 border-yellow-600 text-yellow-400 hover:bg-yellow-900 hover:text-black font-semibold px-8 py-4 rounded-lg transition-all"
          >
            Learn More
          </a>
        </div>

        {/* Admission Period */}
        <div className="flex items-center gap-2 mt-10 text-yellow-400 font-medium text-sm">
          <CalendarDays className="w-5 h-5" />
          <p>Admissions Open Till March 2026</p>
        </div>
      </div>
    </section>
  );
}
