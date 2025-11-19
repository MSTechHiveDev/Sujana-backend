'use client';

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  Users,
  Trophy,
  Home,
  Car,
  Shield,
  Heart,
  Monitor,
  ArrowRight,
} from 'lucide-react';

export default function Facilities() {
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

  const { infrastructure, transport, hostel } = schoolData;

  return (
    <section id="facilities" className="bg-[#0b1320] text-white min-h-screen">
      {/* Hero Banner */}
      <div className="relative w-full h-[400px] overflow-hidden">
        <img
          src="/images/2.jpeg"
          alt="Kadapa Public School Facilities"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70 flex flex-col justify-center px-10 md:px-20 lg:px-32">
          <h1 className="text-4xl md:text-6xl font-light text-white leading-tight mb-4">
            Campus &{' '}
            <span className="font-semibold text-yellow-400">Facilities</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl">
            Modern infrastructure fostering excellence, innovation, and holistic
            growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/admissions"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 rounded-lg flex items-center transition-all"
            >
              Book a Visit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a
              href="https://maps.app.goo.gl/bKrF1pPGhEKx7km97"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-yellow-700 text-yellow-400 hover:bg-yellow-900 hover:text-white font-semibold px-8 py-4 rounded-lg transition-all"
            >
              View Gallery
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 space-y-24">
        {/* Infrastructure Overview */}
        <section className="text-center">
          <h2 className="text-4xl font-bold text-yellow-400 mb-6">
            World-Class Infrastructure
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto mb-12 text-lg leading-relaxed">
            Our {infrastructure.campus_size} campus is equipped with advanced
            facilities designed to inspire learning, creativity, and growth.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Stat value={infrastructure.campus_size} label="Campus Size" />
            <Stat value={infrastructure.labs.length} label="Modern Labs" />
            <Stat
              value={infrastructure.sports_facilities.length}
              label="Sports Facilities"
            />
            <Stat value="5" label="Buildings" />
          </div>
        </section>

        {/* Academic Buildings */}
        <section>
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-yellow-400">
            Academic Blocks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {infrastructure.buildings.map((building, i) => (
              <Card key={i} title={building} icon={BookOpen} theme="blue">
                {building === 'Academic Blocks' &&
                  'Spacious classrooms with modern teaching aids and digital resources.'}
                {building === 'Science & Technology Wing' &&
                  'Advanced labs fostering inquiry and innovation.'}
                {building === 'Administrative Building' &&
                  'Efficiently managed offices and counseling areas.'}
                {building === 'Sports Complex' &&
                  'Indoor & outdoor areas promoting fitness and teamwork.'}
                {building === 'Hostel Facilities' &&
                  'Comfortable accommodation for holistic student life.'}
              </Card>
            ))}
          </div>
        </section>

        {/* Transport / Hostel / Security */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <FeatureCard
            title="Transportation"
            icon={Car}
            color="blue"
            items={transport.features}
          />
          <FeatureCard
            title="Hostel Facilities"
            icon={Home}
            color="purple"
            items={hostel.facilities}
          />
          <FeatureCard
            title="Safety & Security"
            icon={Shield}
            color="red"
            items={Object.keys(hostel.security)}
          />
        </section>
      </div>
    </section>
  );
}

/* ------------------ Components ------------------ */

function Stat({ value, label }) {
  return (
    <div className="bg-[#131d30] border border-yellow-700/30 rounded-2xl p-6 shadow-lg hover:shadow-yellow-900/30 transition-all">
      <div className="text-3xl font-semibold text-yellow-400 mb-2">{value}</div>
      <div className="text-sm text-gray-400">{label}</div>
    </div>
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

function FeatureCard({ title, icon: Icon, items, color }) {
  const colorMap = {
    blue: 'text-blue-400 bg-blue-500/10',
    purple: 'text-purple-400 bg-purple-500/10',
    red: 'text-red-400 bg-red-500/10',
  };
  return (
    <div className="bg-[#131d30] border border-yellow-700/30 rounded-2xl p-8 shadow-lg hover:shadow-yellow-900/20 transition-all">
      <div className="text-center mb-6">
        <div
          className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 ${colorMap[color]}`}
        >
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-semibold text-yellow-400">{title}</h3>
      </div>
      <ul className="space-y-2 text-gray-300 text-sm">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            <ArrowRight className="w-4 h-4 text-yellow-500" />
            {typeof item === 'string' ? item : item[0]}
          </li>
        ))}
      </ul>
    </div>
  );
}
