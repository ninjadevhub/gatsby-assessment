import React from "react";

export default function CarouselDots({ isActive }) {
  return (
    <div className="py-[20px]">
      {isActive ? (
        <div className="-mt-[6px] -ml-[3px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              d="M9 15C12.3137 15 15 12.3137 15 9C15 5.68629 12.3137 3 9 3C5.68629 3 3 5.68629 3 9C3 12.3137 5.68629 15 9 15Z"
              fill="#00A2E9"
              stroke="#DEF5FF"
              stroke-width="6"
            />
          </svg>
        </div>
      ) : (
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="6"
            height="6"
            viewBox="0 0 6 6"
            fill="none"
          >
            <circle cx="3" cy="3" r="3" fill="#1F2536" />
          </svg>
        </div>
      )}
    </div>
  );
}
