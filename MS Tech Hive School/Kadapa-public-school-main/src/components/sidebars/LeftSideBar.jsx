"use client";

import React, { useEffect, useRef, useState } from "react";

const SCROLL_SPEED = 1;
const IMAGE_BOX_HEIGHT = 100;

export default function LeftFloatingSidebar() {
  const [affiliatedInstitutions, setAffiliatedInstitutions] = useState([]);
  const [isOpen, setIsOpen] = useState(true);
  const innerRef = useRef(null);
  const animationRef = useRef(null);

  // Load JSON
  useEffect(() => {
    fetch("/data/affiliations.json")
      .then((res) => res.json())
      .then((data) =>
        setAffiliatedInstitutions(data.affiliatedInstitutions || [])
      )
      .catch((err) => console.error("Error loading affiliations:", err));
  }, []);

  // Infinite Scroll Animation
  useEffect(() => {
    if (!affiliatedInstitutions.length) return;

    let currentY = 0;

    const animate = () => {
      if (!innerRef.current) return;

      currentY -= SCROLL_SPEED;
      innerRef.current.style.transform = `translateY(${currentY}px)`;

      const listHeight = innerRef.current.scrollHeight / 2;

      if (Math.abs(currentY) >= listHeight) {
        currentY = 0;
        innerRef.current.style.transform = `translateY(0px)`;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, [affiliatedInstitutions]);

  if (!affiliatedInstitutions.length) {
    return null;
  }

  const duplicated = [...affiliatedInstitutions, ...affiliatedInstitutions];

  return (
    <>

      {/* LEFT FLOATING SIDEBAR */}
      <div
        className={`
          fixed top-0 left-0 h-full w-72 
          bg-gray-900 shadow-2xl z-[2000] border-r border-yellow-500
          transition-transform duration-500 
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >

        {/* Toggle bar attached */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="
            absolute top-1/2 right-[-40px] -translate-y-1/2 
            bg-yellow-400 text-black px-3 py-2 
            rounded-r-xl shadow-xl cursor-pointer font-semibold
          "
        >
          {isOpen ? "<" : ">"}
        </div>

        <h3 className="text-lg font-semibold py-4 px-4 text-center text-white border-b border-gray-700">
          Affiliated Institutions
        </h3>

        <div className="overflow-hidden h-[calc(100%-60px)] px-3">
          <div ref={innerRef}>
            {duplicated.map((inst, i) => (
              <div
                key={i}
                className="bg-gray-800 mb-4 rounded-lg border-l-2 border-yellow-400 text-white p-4 flex flex-col items-center shadow-md"
              >
                {/* FIXED HEIGHT IMAGE BOX */}
                <div
                  className="w-full flex items-center justify-center mb-3 rounded-md bg-gray-900"
                  style={{ height: IMAGE_BOX_HEIGHT }}
                >
                  {inst.image ? (
                    <img
                      src={inst.image}
                      alt={inst.name}
                      className="object-contain max-h-full"
                      style={{ maxWidth: "90%" }}
                    />
                  ) : (
                    <div className="text-gray-600 text-xs"></div>
                  )}
                </div>

                <p className="font-bold text-center text-lg">{inst.name}</p>

                <p className="text-xs opacity-70 text-center mt-1">
                  {inst.type}
                </p>

                {inst.program && (
                  <p className="text-xs opacity-60 text-center mt-1">
                    {inst.program}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

    </>
  );
}
