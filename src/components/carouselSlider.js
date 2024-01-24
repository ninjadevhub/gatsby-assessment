import React from "react";

export default function CarouselSlider({ currentSlide, totalSlides, className }) {
  const par = (currentSlide / totalSlides) * 100;
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <p className="text-lg">{currentSlide}</p>

      <div className="w-[60px] md:w-[120px] md:mx-[24px] mx-[16px] bg-textColor rounded-full">
        <div
          className="bg-brandBlue text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
          style={{ width: `${par}%` }}
        ></div>
      </div>

      <p className="text-lg text-gray-500">{totalSlides}</p>
    </div>
  );
}
