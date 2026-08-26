"use client";
import physio from "../public/physio.png";
import bannerTwo from "../public/bannerTwo.png";

import React, { useEffect, useState } from "react";

const slides = [
  {
    image: "/physio.png",
  },
  {
    image: "/bannerTwo.png",
  }
];

export default function DiseaseCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full">
      {/* Image Slider */}
      <div className="relative w-full h-[200px] sm:h-[200px] md:h-[200px] lg:h-[1000px]">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide.image}
            alt=""
            className={`
              absolute inset-0 w-full h-full object-cover
              transition-opacity duration-700 ease-in-out
              ${
                index === current
                  ? "opacity-100"
                  : "opacity-0"
              }
            `}
          />
        ))}
      </div>

      {/* Slider Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`rounded-full transition-all duration-300 ${
              index === current
                ? "w-8 h-2 bg-white"
                : "w-2 h-2 bg-white/60 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
}