'use client';

import React, { useState, useEffect } from 'react';
import { Play } from 'lucide-react';

export default function Hero() {
  const [students, setStudents] = useState(0);
  const [teachers, setTeachers] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const studentInterval = setInterval(() => {
      setStudents((prev) => (prev < 550 ? prev + 10 : 550));
    }, 50);

    const teacherInterval = setInterval(() => {
      setTeachers((prev) => (prev < 70 ? prev + 1 : 70));
    }, 100);

    return () => {
      clearInterval(studentInterval);
      clearInterval(teacherInterval);
    };
  }, []);

  return (
    <section
      id="hero"
      className="w-full h-[92vh] bg-black text-white px-6 md:px-12 py-6"
    >
      {/* VIDEO PLAY ICON */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-4 left-4 z-[100000] bg-yellow-500 hover:bg-yellow-600 text-black p-3 rounded-full shadow-lg transition-all animate-bounce"
      >
        <Play className="w-6 h-6" />
      </button>

      {/* VIDEO MODAL */}
      {isModalOpen && (
        <div className="fixed bottom-20 left-4 z-[100000]">
          <div className="relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-10 right-0 z-10 bg-red-500 text-white p-2 rounded-full"
            >
              ✕
            </button>
            <iframe
              src="https://drive.google.com/file/d/1tQGQHvr0wCO9uYjMlNJ-a30pV1Bbc5OS/preview"
              className="w-[300px] h-[169px] md:w-[400px] md:h-[225px] rounded-lg"
              allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
            ></iframe>
          </div>
        </div>
      )}

      {/* TOP GRID (Image + Video) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[60%]">
        {/* LEFT – SCHOOL IMAGE */}
        <div className="w-full h-full rounded-xl overflow-hidden relative">
          <img
            src="/images/1.jpeg"
            alt="School Campus"
            className="w-full h-full object-cover"
          />
          {/* ANIMATED TEXT OVERLAY */}
          <div className="absolute bottom-4 left-4 text-yellow-500 px-3 py-2">
            <div className="text-lg font-bold">{students}+ Students</div>
            <div className="text-lg font-bold">{teachers}+ Teachers</div>
          </div>
        </div>
        {/* RIGHT – INTRO VIDEO */}
        <div className="w-full h-full rounded-xl overflow-hidden">
          <video
            src="/videos/home.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* BOTTOM TEXT – FULL WIDTH */}
      <div className="mt-6 w-full h-[40%] flex flex-col justify-center text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Shaping Tomorrow’s <span className="text-yellow-500">Leaders</span>
        </h1>

        <p className="text-gray-300 text-lg md:text-xl mt-4 max-w-4xl mx-auto">
          Kadapa Public School is committed to excellence in academics, values,
          innovation, and holistic student development to prepare students for a
          brighter future.
        </p>
      </div>
    </section>
  );
}
