import React from 'react';
import { GraduationCap, Users, BookOpen, Award } from 'lucide-react';

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#0b1320] text-white py-24 px-6 md:px-16 lg:px-32"
    >
      {/* Heading */}
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-yellow-500 mb-4">
          About Kadapa Public School
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Inspiring excellence, nurturing curiosity, and shaping responsible
          citizens of tomorrow.
        </p>
      </div>

      {/* Story Row */}
      <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
        <div className="relative w-full lg:w-1/2 rounded-3xl overflow-hidden shadow-xl">
          <img
            src="/images/2.jpeg"
            alt="School students learning"
            className="w-full h-[450px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        </div>

        <div className="w-full lg:w-1/2">
          <h3 className="text-3xl font-semibold text-yellow-400 mb-4">
            A Legacy of Learning & Leadership
          </h3>
          <p className="text-gray-300 leading-relaxed mb-6">
            Kadapa Public School is a well-established CBSE-affiliated
            co-educational institution in Kadapa, Andhra Pradesh, committed to
            delivering quality education with a focus on holistic development.
            Founded in 2019, the school nurtures critical thinking, creativity,
            and social skills in a supportive environment, offering excellent
            academic programs alongside extracurricular activities and modern
            facilities to prepare students for future success.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Our programs are carefully designed to integrate modern educational
            practices with moral and cultural foundations, cultivating young
            minds ready to lead in a dynamic world.
          </p>
        </div>
      </div>

      {/* Mission Row - Reverse Layout */}
      <div className="flex flex-col-reverse lg:flex-row items-center gap-16 mb-24">
        <div className="w-full lg:w-1/2">
          <h3 className="text-3xl font-semibold text-yellow-400 mb-4">
            Our Mission & Vision
          </h3>
          <p className="text-gray-300 leading-relaxed mb-6">
            To provide quality education and holistic development for every
            student, cultivating a love for learning and instilling values that
            shape well-rounded individuals.
          </p>
          <p className="text-gray-300 leading-relaxed">
            A nurturing environment where students achieve excellence in both
            academics and life, becoming future leaders who will make a
            meaningful impact on society
          </p>
        </div>

        <div className="relative w-full lg:w-1/2 rounded-3xl overflow-hidden shadow-xl">
          <img
            src="/images/Mission.JPG"
            alt="Students with teacher"
            className="w-full h-[450px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        </div>
      </div>

      {/* Highlight Strip */}
      <div className="bg-[#131d30] rounded-3xl p-10 md:p-16 flex flex-col md:flex-row justify-between items-center gap-10 border border-yellow-700/30 shadow-inner">
        <div className="flex flex-col items-center text-center md:text-left md:items-start">
          <h4 className="text-2xl font-bold text-yellow-400 mb-2">
            Excellence is Our Tradition
          </h4>
          <p className="text-gray-400 max-w-xl leading-relaxed">
            With over a decade of academic distinction, Kadapa Public School
            stands for innovation, discipline, and the relentless pursuit of
            knowledge — where every child is encouraged to think, explore, and
            achieve.
          </p>
        </div>

        <div className="flex gap-10 text-yellow-400 text-center">
          <Highlight
            icon={GraduationCap}
            value="15+"
            label="Years of Excellence"
          />
          <Highlight icon={Users} value="50+" label="Expert Faculty" />
          <Highlight icon={Award} value="4" label="Acre Campus" />
          <Highlight icon={BookOpen} value="CBSE" label="Affiliated" />
        </div>
      </div>
    </section>
  );
}

function Highlight({ icon: Icon, value, label }) {
  const IconComponent = Icon;
  return (
    <div className="flex flex-col items-center">
      <div className="bg-yellow-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-3">
        <IconComponent className="w-8 h-8 text-yellow-900" />
      </div>
      <p className="text-2xl font-semibold text-yellow-400">{value}</p>
      <span className="text-gray-300 text-sm">{label}</span>
    </div>
  );
}
