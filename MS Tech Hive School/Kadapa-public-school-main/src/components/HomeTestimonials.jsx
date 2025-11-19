'use client';

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Quote, Star } from 'lucide-react';

export default function HomeTestimonials() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch('/data/data.json')
      .then((response) => response.json())
      .then((data) => setTestimonials(data.testimonials))
      .catch((error) => console.error('Error loading testimonials:', error));
  }, []);

  const renderStars = (rating = 5) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section
      id="testimonials"
      className="bg-[#0d1828] text-white py-20 px-4 md:px-16 lg:px-32"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-semibold text-yellow-500 mb-4">
          What Our Community Says
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Hear from parents, students, and alumni about their experience at
          Kadapa Public School.
        </p>
      </div>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="bg-[#162238] rounded-2xl overflow-hidden shadow-lg flex flex-col h-full p-6">
              <div className="flex justify-between items-start mb-4">
                <Quote className="w-6 h-6 text-yellow-400" />
                <div className="flex">{renderStars(testimonial.rating)}</div>
              </div>

              <blockquote className="text-gray-300 mb-6 flex-1 italic leading-relaxed">
                "{testimonial.testimonial || testimonial.message}"
              </blockquote>

              <div className="border-t border-gray-600 pt-4 flex items-center">
                <img
                  src={testimonial.profilePic}
                  alt={testimonial.author || testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-yellow-400"
                />
                <div>
                  <h4 className="font-semibold text-yellow-400 mb-1">
                    {testimonial.author || testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-400">
                    {testimonial.source || testimonial.relation}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
