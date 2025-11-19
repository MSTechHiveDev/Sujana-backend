'use client';

import React, { useEffect, useRef, useState } from 'react';

const SCROLL_SPEED = 1;
const CARD_HEIGHT = 300;

export default function RightFloatingAwards() {
  const [awards, setAwards] = useState([]);
  const [isOpen, setIsOpen] = useState(true);

  const innerRef = useRef(null);
  const animationRef = useRef(null);

  /** Load awards.json */
  useEffect(() => {
    fetch('/data/awards.json')
      .then((res) => res.json())
      .then((data) => setAwards(data.awards || []))
      .catch((err) => console.error('Error loading awards:', err));
  }, []);

  /** Infinite scroll animation */
  useEffect(() => {
    if (awards.length === 0) return;

    let currentY = 0;

    const animate = () => {
      if (!innerRef.current) return;

      currentY -= SCROLL_SPEED;
      innerRef.current.style.transform = `translateY(${currentY}px)`;

      const listHeight = innerRef.current.scrollHeight / 2;

      if (Math.abs(currentY) >= listHeight) {
        currentY = 0;
        innerRef.current.style.transform = 'translateY(0px)';
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationRef.current);
  }, [awards]);

  if (!awards.length) return null;

  const duplicated = [...awards, ...awards];

  return (
    <>
      {/* RIGHT FLOATING SIDEBAR */}
      <div
        className={`
          fixed top-0 right-0 h-full w-72
          bg-[#0a0f1a] border-l border-yellow-500 z-[2000]
          shadow-2xl transition-transform duration-500
          hidden lg:block
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        {/* ATTACHED TOGGLE */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="
            absolute top-1/2 left-[-40px] -translate-y-1/2
            bg-yellow-400 text-black px-3 py-2 rounded-l-xl
            shadow-xl cursor-pointer font-bold
          "
        >
          {isOpen ? '>' : '<'}
        </div>

        {/* HEADER */}
        <h3 className="text-lg font-semibold text-white text-center border-b border-gray-700 py-4">
          Awards & Achievements
        </h3>

        {/* VIEWPORT */}
        <div className="overflow-hidden h-[calc(100%-60px)] px-3">
          <div ref={innerRef}>
            {duplicated.map((award, i) => (
              <div
                key={i}
                className="
                  bg-gray-800 mb-4 rounded-md border-r-2 border-yellow-400
                  text-white shadow-md overflow-hidden
                "
                style={{
                  height: CARD_HEIGHT,
                  boxSizing: 'border-box',
                }}
              >
                <div className="h-48 w-full overflow-hidden">
                  <img
                    src={award.image}
                    alt={award.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 flex flex-col items-center justify-center text-center">
                  <p className="font-semibold text-lg">{award.name}</p>
                  <p className="text-xs opacity-70 mt-1">{award.awardedBy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
