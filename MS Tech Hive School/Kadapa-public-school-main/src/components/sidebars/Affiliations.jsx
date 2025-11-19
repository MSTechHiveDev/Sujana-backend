"use client";

import React, { useEffect, useRef, useState } from "react";

const SCROLL_SPEED = 1; // smooth continuous scroll speed
const NAVBAR_HEIGHT = 80; // match your navbar height
const IMAGE_BOX_HEIGHT = 100; // fixed reserved image space

export default function SidebarAffiliations() {
  const [affiliatedInstitutions, setAffiliatedInstitutions] = useState([]);
  const containerRef = useRef(null);
  const innerRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    fetch("/data/affiliations.json")
      .then((res) => res.json())
      .then((data) =>
        setAffiliatedInstitutions(data.affiliatedInstitutions || [])
      )
      .catch((err) => console.error("Error loading affiliations:", err));
  }, []);

  useEffect(() => {
    if (affiliatedInstitutions.length === 0) return;

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
    return (
      <div className="text-center text-gray-300 py-6">Loading...</div>
    );
  }

  // duplicate list for infinite scroll
  const duplicated = [...affiliatedInstitutions, ...affiliatedInstitutions];

  return (
    <div
      ref={containerRef}
      className="w-full"
      style={{
        position: "sticky",
        top: `${NAVBAR_HEIGHT}px`,
        height: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
        overflow: "hidden",
      }}
    >
      <h3 className="text-md font-semibold mb-3 text-white text-center">
        Affiliated Institutions
      </h3>

      <div
        className="overflow-hidden px-3"
        style={{
          height: `calc(100% - 48px)`,
        }}
      >
        <div ref={innerRef}>
          {duplicated.map((inst, i) => (
            <div
              key={i}
              className="bg-gray-800 mb-4 rounded-lg border-l-2 border-yellow-400 text-white p-4 flex flex-col items-center shadow-md"
              style={{
                width: "100%",
              }}
            >

              {/* FIXED HEIGHT IMAGE BOX */}
              <div
                className="w-full flex items-center justify-center mb-3 rounded-md bg-gray-900"
                style={{
                  height: IMAGE_BOX_HEIGHT,
                }}
              >
                {inst.image ? (
                  <img
                    src={inst.image}
                    alt={inst.name}
                    className="object-contain max-h-full"
                    style={{ maxWidth: "90%" }}
                  />
                ) : (
                  <div className="text-gray-600 text-xs">
                    {/* empty placeholder so height remains same */}
                  </div>
                )}
              </div>

              {/* TEXT */}
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
  );
}
