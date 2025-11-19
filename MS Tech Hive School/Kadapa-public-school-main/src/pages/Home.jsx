import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Awards from '../components/Awards';
import News from '../components/News';
import About from '../components/About';
import Admissions from '../components/Admissions';
import Facilities from '../components/Facilities';
import HomeTestimonials from '../components/HomeTestimonials';

const Home = () => {
  const [schoolData, setSchoolData] = useState(null);

  useEffect(() => {
    fetch('/data/data.json')
      .then((res) => res.json())
      .then((data) => setSchoolData(data))
      .catch((err) => console.error('Error loading school data:', err));
  }, []);

  if (!schoolData) {
    return (
      <div className="flex items-center justify-center bg-gray-900 min-h-[50vh]">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="bg-gray-900">
      <Hero />
      <Awards />
      <News />
      <About />
      <Facilities />
      <Admissions />
      <HomeTestimonials />
    </div>
  );
};

export default Home;
