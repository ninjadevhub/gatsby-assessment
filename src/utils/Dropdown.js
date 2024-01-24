import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Transition from '../utils/Transition.js';

function Dropdown({
  theme = 'light',
  children,
  title,
  link
}) {

  const [dropdownOpen, setDropdownOpen] = useState(false);

  let classNameLink = "text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out";
  let classNameSvg = "w-3 h-3 fill-current text-gray-500 cursor-pointer ml-1 flex-shrink-0";
  let classNameUl = "origin-top-right absolute right-0 w-40 bg-white py-2 ml-4 rounded shadow-lg";

  if (theme === 'dark') {
    classNameLink = "flex items-center px-3 py-2 text-gray-100 transition duration-150 ease-in-out hover:text-gray-300 lg:px-5";
    classNameSvg = "flex-shrink-0 w-3 h-3 ml-1 text-gray-100 cursor-pointer fill-current";
    classNameUl = "absolute right-0 w-40 py-2 ml-4 origin-top-right bg-white rounded shadow-lg top-full";
  }

  return (
    <li
      className="relative"
      onMouseEnter={() => setDropdownOpen(true)}
      onMouseLeave={() => setDropdownOpen(false)}
      onFocus={() => setDropdownOpen(true)}
      onBlur={() => setDropdownOpen(false)}
    >
      <a
        className={classNameLink}
        href={link ? link : "#0"}
        aria-expanded={dropdownOpen}
        onClick={link ? null : (e) => e.preventDefault()}
      >
        {title}
        <svg className={classNameSvg} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.28 4.305L5.989 8.598 1.695 4.305A1 1 0 00.28 5.72l5 5a1 1 0 001.414 0l5-5a1 1 0 10-1.414-1.414z" />
        </svg>
      </a>
      <Transition
        show={dropdownOpen}
        tag="ul"
        className={classNameUl}
        enter="transition ease-out duration-200 transform"
        enterStart="opacity-0 -translate-y-2"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-out duration-200"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
      >
        {children}
      </Transition>
    </li>
  );
}

export default Dropdown;

Dropdown.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element.isRequired
  ]),
  title: PropTypes.string.isRequired,
};
