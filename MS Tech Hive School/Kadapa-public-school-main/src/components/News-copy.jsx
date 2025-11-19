"use client";

import React from "react";
import { CalendarDays, ArrowRight } from "lucide-react";

const newsData = [
  {
    id: 1,
    title:
      "Kadapa Public School Honored with Dr. Sarvepalli Radhakrishnan National Award",
    date: "2025-10-13",
    description:
      "Kadapa Public School received this prestigious award recognizing excellence in academics and holistic development.",
    link: "https://facebook.com/kadapa.public.school/posts/101",
  },
  {
    id: 2,
    title: "Admissions Open for Academic Year 2025-26",
    date: "2025-05-16",
    description:
      "Admissions are now open for Nursery to Grade 10 at Kadapa Public School with a focus on quality education and holistic learning.",
    link: "https://instagram.com/kadapa_public_school",
  },
  {
    id: 3,
    title: "Spooktacular Halloween Day Celebration",
    date: "2025-10-31",
    description:
      "The school organized a vibrant Halloween celebration engaging students in creative costumes and activities.",
    link: "https://facebook.com/kadapa.public.school/posts/102",
  },
  {
    id: 4,
    title: "Collaboration with IIT Madras under School Connect Program",
    date: "2025-09-10",
    description:
      "Kadapa Public School proudly partnered with IIT Madras to enhance academic excellence and innovative learning approaches.",
    link: "https://instagram.com/p/CadIITMadrasSchoolConnect",
  },
  {
    id: 5,
    title: "Annual Sports Day Scheduled for December",
    date: "2025-11-01",
    description:
      "Annual sports day will be held in December 2025 with various indoor and outdoor competitive events for students.",
    link: "",
  },
  {
    id: 6,
    title: "New State-of-the-Art Computer Lab Inaugurated",
    date: "2025-08-20",
    description:
      "Kadapa Public School launched a new computer lab equipped with modern systems to facilitate digital literacy.",
    link: "",
  },
];

export default function News() {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-16 lg:px-32">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-semibold text-yellow-500 mb-4">
          Latest News & Announcements
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Stay up to date with all the latest happenings, awards, and
          achievements at Kadapa Public School.
        </p>
      </div>

      <div className="relative border-l border-yellow-700 ml-4 md:ml-8">
        {newsData.map(({ id, title, date, description, link }) => (
          <article
            key={id}
            className="relative mb-12 pl-8 md:pl-12 group"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-3 md:-left-4 top-3 w-5 h-5 rounded-full bg-yellow-500 border-4 border-black group-hover:scale-125 transition-transform"></div>

            {/* Date */}
            <div className="flex items-center text-yellow-400 text-sm mb-2">
              <CalendarDays className="w-4 h-4 mr-2" />
              {new Date(date).toLocaleDateString("en-IN", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>

            {/* Title */}
            <h3 className="text-xl md:text-2xl font-semibold mb-2 group-hover:text-yellow-400 transition-colors">
              {title}
            </h3>

            {/* Description */}
            <p className="text-gray-300 mb-4 leading-relaxed">
              {description}
            </p>

            {/* Link */}
            {link ? (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-yellow-500 hover:text-yellow-400 transition-all font-medium"
              >
                Read More
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            ) : (
              <span className="italic text-gray-500">
                More details coming soon
              </span>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
