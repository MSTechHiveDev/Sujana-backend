'use client';

import React, { useEffect, useState } from 'react';
import { Monitor } from 'lucide-react';

export default function Labs() {
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
          alt="Kadapa Public School Labs"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70 flex flex-col justify-center px-10 md:px-20 lg:px-32">
          <h1 className="text-4xl md:text-6xl font-light text-white leading-tight mb-4">
            Modern{' '}
            <span className="font-semibold text-yellow-400">Laboratories</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl">
            State-of-the-art labs fostering innovation, experimentation, and
            scientific discovery.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <section>
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-yellow-400">
            Modern Laboratories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {infrastructure.labs.map((lab, i) => (
              <Card key={i} title={lab} icon={Monitor} theme="yellow">
                {lab === 'Science Lab' &&
                  'Equipped for hands-on learning in chemistry, physics, and biology.'}
                {lab === 'Computer Lab' &&
                  'Advanced systems with high-speed internet and smart learning tools.'}
                {lab === 'Math Lab' &&
                  'Interactive kits for practical concept understanding.'}
                {lab === 'Music Lab' &&
                  'Fully equipped soundproof studio with diverse instruments.'}
              </Card>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}

function Card({ icon: Icon, title, children }) {
  return (
    <div className="bg-[#131d30] border border-yellow-700/30 rounded-2xl p-8 shadow-lg hover:shadow-yellow-900/20 transition-all">
      <div className="flex items-start gap-6">
        <div className="bg-yellow-500/10 p-3 rounded-xl">
          <Icon className="w-7 h-7 text-yellow-400" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-yellow-400 mb-3">
            {title}
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">{children}</p>
        </div>
      </div>
    </div>
  );
}
