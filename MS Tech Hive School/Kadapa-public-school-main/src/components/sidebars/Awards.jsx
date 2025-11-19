"use client";

import React, { useEffect, useState } from "react";

export default function AwardsBanner() {
  const [open, setOpen] = useState(true);
  const [animateIn, setAnimateIn] = useState(false);
  const [awards, setAwards] = useState([]);

  const [index, setIndex] = useState(0);  // current award
  const [fade, setFade] = useState(true); // fade animation

  // Fetch awards.json from public folder
  useEffect(() => {
    fetch("/data/awards.json")
      .then((res) => res.json())
      .then((data) => setAwards(data.awards || []))
      .catch((err) => console.error("Error loading awards:", err));
  }, []);

  // Entrance animation
  useEffect(() => {
    setTimeout(() => setAnimateIn(true), 100);
  }, []);

  // ROTATION LOGIC (every 2.5s)
  useEffect(() => {
    if (awards.length === 0) return;

    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setIndex((prev) =>
          prev + 1 === awards.length ? 0 : prev + 1
        );
        setFade(true);
      }, 300); // fade duration
    }, 2500);

    return () => clearInterval(interval);
  }, [awards]);

  const award = awards[index];

  return (
    <>
      {/* Toggle Button — only visible on desktop */}
      <button
        onClick={() => setOpen(!open)}
        className={`
          fixed top-1/2 right-0 z-[10000] -translate-y-1/2
          bg-yellow-500 text-black px-2 py-1 rounded-l-lg shadow-lg font-bold
          transition-all duration-500 hover:bg-yellow-400
          md:block hidden
          ${open ? "-translate-x-64" : "-translate-x-0"}
        `}
      >
        {open ? "❯" : "❮"}
      </button>

      {/* RIGHT SIDE BANNER */}
      <div
        className={`
          fixed top-1/2 -translate-y-1/2 right-0  
          bg-gray-900 text-white w-60 p-2 rounded-l-lg shadow-2xl 
          border-l-4 border-yellow-400 z-[9999]
          transition-all duration-700
          md:block hidden
          ${animateIn ? (open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0") : "opacity-0"}
        `}
      >
        <h2 className="text-lg font-semibold text-center mb-3">
          🎖️ Awards & Achievements
        </h2>

        {/* ROTATING CARD */}
        <div
          className={`
            bg-gray-800 p-3 rounded-md text-sm shadow-sm border-r-2 border-yellow-400
            transition-all duration-500
            ${fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
          `}
        >
          {award ? (
            <>
              <p className="font-semibold text-center">{award.name}</p>
              <p className="text-xs opacity-70 text-center">{award.awardedBy}</p>
            </>
          ) : (
            <p className="text-center text-sm opacity-60">No awards available</p>
          )}
        </div>
      </div>
    </>
  );
}
