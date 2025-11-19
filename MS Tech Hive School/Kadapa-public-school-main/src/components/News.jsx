'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const newsData = [
  {
    id: 1,
    title:
      'Kadapa Public School Honored with Dr. Sarvepalli Radhakrishnan National Award',
    date: '2025-10-13',
    description:
      'Kadapa Public School received this prestigious award recognizing excellence in academics and holistic development.',
    link: 'https://facebook.com/kadapa.public.school/posts/101',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSED10A4pSvnaSmveALWQ_-B5X41rub-Y6jxQ&s', // replace with real image URL
  },
  {
    id: 2,
    title: 'Admissions Open for Academic Year 2025-26',
    date: '2025-05-16',
    description:
      'Admissions are now open for Nursery to Grade 10 at Kadapa Public School with a focus on quality education and holistic learning.',
    link: 'https://instagram.com/kadapa_public_school',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlV7o3I9DmiWHNuULheYS-v5Ia32jy_aunQg&s', // replace
  },
  {
    id: 3,
    title: 'Spooktacular Halloween Day Celebration',
    date: '2025-10-31',
    description:
      'The school organized a vibrant Halloween celebration engaging students in creative costumes and activities.',
    link: 'https://facebook.com/kadapa.public.school/posts/102',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe0W1aU-3-FInB9n7VN3u7CWVjYe18m7SG_Q&s', // replace
  },
  {
    id: 4,
    title: 'Collaboration with IIT Madras under School Connect Program',
    date: '2025-09-10',
    description:
      'Kadapa Public School proudly partnered with IIT Madras to enhance academic excellence and innovative learning approaches.',
    link: 'https://instagram.com/p/CadIITMadrasSchoolConnect',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE0BY1HB26lRNOqphN19GynUBAqqCckz5etg&s', // replace
  },
  {
    id: 5,
    title: 'Annual Sports Day Scheduled for December',
    date: '2025-11-01',
    description:
      'Annual sports day will be held in December 2025 with various indoor and outdoor competitive events for students.',
    link: '',
    image:
      'https://media.licdn.com/dms/image/v2/D5622AQEJr7tvjtnV1A/feedshare-shrink_800/feedshare-shrink_800/0/1706692018472?e=2147483647&v=beta&t=W5VrispRqtJ8EnDlVC5Ync8kN7cnX3ZBlKxDda-aJ0E', // replace
  },
  {
    id: 6,
    title: 'New State-of-the-Art Computer Lab Inaugurated',
    date: '2025-08-20',
    description:
      'Kadapa Public School launched a new computer lab equipped with modern systems to facilitate digital literacy.',
    link: '',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAVKS3mLr63E2auM2UDRDfRxtGKcGNPjcDog&s', // replace
  },
];

export default function NewsCarousel() {
  return (
    <section
      id="news"
      className="bg-[#0d1828] text-white py-20 px-4 md:px-16 lg:px-32"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-semibold text-yellow-500 mb-4">
          Latest News & Announcements
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Stay updated with all the recent achievements, events and happenings
          at Kadapa Public School.
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
        {newsData.map(({ id, title, date, description, link, image }) => (
          <SwiperSlide key={id}>
            <div className="bg-[#162238] rounded-2xl overflow-hidden shadow-lg flex flex-col h-full">
              <div className="h-48 md:h-56 w-full overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="text-yellow-400 text-sm mb-2">
                  {new Date(date).toLocaleDateString('en-IN', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </div>
                <h3 className="text-xl md:text-2xl font-semibold mb-3 text-white hover:text-yellow-300 transition-colors">
                  {title}
                </h3>
                <p className="text-gray-300 mb-4 flex-1">{description}</p>
                {link ? (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center text-yellow-500 hover:text-yellow-400 font-medium"
                  >
                    Read More →
                  </a>
                ) : (
                  <span className="text-gray-500 italic mt-auto">
                    More details coming soon
                  </span>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
