import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

function ReadMore({
  children,
  tag = 'div',
  title,
  active
}) {
  const [accordionOpen, setAccordionOpen] = useState(false);
  const accordion = useRef(null);
  const Component = tag;

  useEffect(() => {
    setAccordionOpen(active)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accordion])

  return (
    <Component>
      <button
        className="flex justify-center items-center w-full text-sm font-medium text-center text-blue-500 hover:text-blue-700 pb-4"
        onClick={(e) => { e.preventDefault(); setAccordionOpen(!accordionOpen); }}
        aria-expanded={accordionOpen}
      >
        <span>Read More</span>
      </button>
      <div
        ref={accordion}
        className="text-gray-600 overflow-hidden transition-all duration-300 ease-in-out"
        style={accordionOpen ? { maxHeight: accordion.current.scrollHeight, opacity: 1 } : { maxHeight: 0, opacity: 0 }}
      >
        <div className="pb-5">{children}</div>
      </div>
    </Component>
  );
}

export default ReadMore;

ReadMore.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.array.isRequired
  ]),
  tag: PropTypes.string,
  active: PropTypes.bool,
};
