import React, { useState, useRef, useEffect } from "react";
import { Link } from "gatsby";
import Transition from "../utils/Transition.js";
import logo from "../images/logoWhite.png";

function NavBar({ theme = "light" }) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [top, setTop] = useState(true);

  const trigger = useRef(null);
  const mobileNav = useRef(null);

  let navTextColor = "text-white";
  let navBgColor = "bg-transparent";

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!mobileNav.current || !trigger.current) return;
      if (
        !mobileNavOpen ||
        mobileNav.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setMobileNavOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header
      className={` w-full z-30 font-body transition absolute duration-300 ease-in-out
                 ${navBgColor} ${!top && ""}`}
    >
      <div className="max-w-[1296px]  px-5  mx-auto sm:px-6">
        <div className="flex items-center justify-between h-14 md:h-28">
          {/* Site branding */}
          <div className="flex-shrink-0 mr-4">
            {/* Logo */}
            <Link to="/" className="block" aria-label="Rho Impact">
              <img
                className="h-auto max-w-full mx-auto md:max-w-none"
                src={logo}
                width="150"
                alt="Rho Impact Logo"
              />
            </Link>
          </div>
          <nav className="hidden lg:flex lg:flex-grow">
            <ul className="flex flex-wrap items-center justify-end text-white flex-grow">
              <li>
                <Link
                  to="#Customer-Stories"
                  className={
                    "flex items-center  px-3 py-3 cursor-pointer font-medium transition duration-150 ease-in-out " +
                    navTextColor
                  }
                >
                  Customer Stories
                </Link>
              </li>
              <li>
                <Link
                  to="#Testimonials-move"
                  className={
                    "flex items-center  px-3 ml-2 py-3 font-medium cursor-pointer transition duration-150 ease-in-out " +
                    navTextColor
                  }
                >
                  Testimonials{" "}
                </Link>
              </li>
              <li>
                <Link
                  to="#footer-section"
                  className={
                    "flex items-center px-3 py-3 ml-2 font-medium transition cursor-pointer duration-150 ease-in-out " +
                    navTextColor
                  }
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact/?request=Demo"
                  className="ml-3 text-white px-6 py-3  bg-brandBlue rounded-full "
                >
                  <span>Request a Demo</span>
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex lg:hidden">
            <button
              ref={trigger}
              // className={`hamburger ${mobileNavOpen && "active"}`}
              // aria-controls="mobile-nav"
              aria-expanded={mobileNavOpen}
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
            >
              <span className="sr-only">Menu</span>
              <svg
                className={"w-6 h-6 fill-current " + navTextColor}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M22 3C22 2.44772 21.5523 2 21 2H3C2.44772 2 2 2.44772 2 3C2 3.55228 2.44772 4 3 4H21C21.5523 4 22 3.55228 22 3ZM16 12C16 11.4477 15.5523 11 15 11H3C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13H15C15.5523 13 16 12.5523 16 12ZM21 20C21.5523 20 22 20.4477 22 21C22 21.5523 21.5523 22 21 22H3C2.44772 22 2 21.5523 2 21C2 20.4477 2.44772 20 3 20H21Z"
                  fill="white"
                />
              </svg>
            </button>

            {/*Mobile navigation */}
            <div ref={mobileNav}>
              <Transition
                show={mobileNavOpen}
                tag="nav"
                id="mobile-nav"
                className="absolute left-0 z-20 w-full overflow-hidden h-screen pb-16  bg-white top-full"
                enter="transition ease-out duration-200 transform"
                enterStart="opacity-0 -translate-y-2"
                enterEnd="opacity-100 translate-y-0"
                leave="transition ease-out duration-200"
                leaveStart="opacity-100"
                leaveEnd="opacity-0"
              >
                <ul className="px-5 py-2 flex justify-center pt-[120px]  bg-[#02091A] min-h-screen ">
                  <li className="py-2 my-2 ">
                    <ul className=" space-y-10 text-center ">
                      <li>
                        <Link
                          to="#Customer-Stories"
                          className="text-center pointer text-lg font-medium text-white"
                        >
                          Customer Stories
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#Testimonials-move"
                          className=" text-center text-lg font-medium text-white"
                        >
                          Testimonials
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#footer-section"
                          className=" text-center text-lg font-medium text-white"
                        >
                          Contact Us
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/contact/?request=Demo"
                          className=" text-white px-6 py-3  bg-brandBlue rounded-full "
                        >
                          <span>Request a Demo</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </Transition>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
