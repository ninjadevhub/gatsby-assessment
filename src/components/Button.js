import React from "react";

export default function Button({ children, className, onClick, ...rest }) {
  return (
    <button
      onClick={onClick}
      className={`bg-brandBlue text-white font-semibold text-sm rounded-[200px] px-[40px] py-[16px] cursor-pointer ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
