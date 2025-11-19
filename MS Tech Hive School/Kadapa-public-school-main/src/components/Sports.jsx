'use client';

import React, { useEffect, useState } from 'react';
import { Trophy } from 'lucide-react';

export default function Sports() {
  const [schoolData, setSchoolData] = useState(null);

  useEffect(() => {
    fetch('/data/data.json')
      .then((response) => response.json())
      .then((data) => setSchoolData(data))
      .catch((error) => console.error('Error loading school data:', error));
  }, []);

  if (!schoolData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0b1320]">
        <div className="animate-spin rounded-full h-16 w-16 border-2 border-yellow-500"></div>
      </div>
    );
  }

  const { infrastructure } = schoolData;

  return (
    <section className="bg-[#0b1320] text-white min-h-screen">
      {/* Hero Banner */}
      <div className="relative w-full h-[400px] overflow-hidden">
        <img
          src="/images/2.jpeg"
          alt="Kadapa Public School Sports"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70 flex flex-col justify-center px-10 md:px-20 lg:px-32">
          <h1 className="text-4xl md:text-6xl font-light text-white leading-tight mb-4">
            Sports &{' '}
            <span className="font-semibold text-yellow-400">Recreation</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl">
            Comprehensive sports facilities promoting physical fitness,
            teamwork, and healthy competition.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <section>
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-yellow-400">
            Sports & Recreation
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {infrastructure.sports_facilities.map((sport, i) => (
              <div
                key={i}
                className="bg-[#131d30] border border-yellow-700/30 rounded-2xl p-6 text-center hover:scale-105 transition-all"
              >
                <div className="bg-yellow-500/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-6 h-6 text-yellow-400" />
                </div>
                <p className="text-gray-300 font-medium">{sport}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
