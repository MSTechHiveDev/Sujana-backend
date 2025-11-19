"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full h-[92vh] bg-black overflow-hidden">

      {/* HERO IMAGE */}
      <img
        src="/images/1.jpeg"
        alt="Kadapa Public School Campus"
        className="absolute inset-0 w-full h-full object-cover brightness-[0.55]"
      />

      {/* DARK GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-black/90" />

      {/* CENTERED CONTENT */}
      <div className="relative z-20 h-full flex items-center justify-center px-6">
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-10 max-w-2xl text-center shadow-2xl">

          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4 drop-shadow-xl">
            Nurturing Young Minds,
            <span className="block text-yellow-500 mt-1">
              Inspiring Bright Futures
            </span>
          </h1>

          <p className="text-gray-200 text-lg md:text-xl mb-8 leading-relaxed">
            Kadapa Public School stands for academic excellence, innovation,
            and holistic student development.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-500 text-black font-semibold px-8 py-4 rounded-lg flex items-center justify-center hover:bg-yellow-600 transition-all shadow-lg">
              APPLY NOW
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>

            <button className="border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-600 hover:text-black font-semibold px-8 py-4 rounded-lg transition-all shadow-lg">
              Learn More
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
