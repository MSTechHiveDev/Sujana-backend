'use client';

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

export default function AwardsCarousel() {
  const [awardsData, setAwardsData] = useState([]);

  useEffect(() => {
    fetch('/data/awards.json')
      .then((response) => response.json())
      .then((data) => setAwardsData(data.awards))
      .catch((error) => console.error('Error loading awards data:', error));
  }, []);

  // Award images from public/Awards folder
  const awardImages = [
    '/Awards/Img1.JPG',
    '/Awards/Img2.JPG',
    '/Awards/Img3.jpeg',
    '/Awards/Img4.jpeg',
    '/Awards/Img5.jpeg',
  ];

  return (
    <section
      id="awards"
      className="bg-[#0d1828] text-white py-20 px-4 md:px-16 lg:px-32"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-semibold text-yellow-500 mb-4">
          Awards & Achievements
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Celebrating our milestones and recognitions that highlight our
          commitment to excellence in education.
        </p>
      </div>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {awardsData.map((award, index) => (
          <SwiperSlide key={index}>
            <div className="bg-[#162238] rounded-2xl overflow-hidden shadow-lg flex flex-col h-full">
              <div className="h-48 md:h-56 w-full overflow-hidden">
                <img
                  src={awardImages[index % awardImages.length]}
                  alt={award.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="text-yellow-400 text-sm mb-2">{award.year}</div>
                <h3 className="text-xl md:text-2xl font-semibold mb-3 text-white hover:text-yellow-300 transition-colors">
                  {award.name}
                </h3>
                <p className="text-gray-300 mb-4 flex-1">
                  Awarded by {award.awardedBy}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
