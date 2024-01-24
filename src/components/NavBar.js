import React, { useState, useRef, useEffect } from "react";
import { Link } from "gatsby";
import Transition from "../utils/Transition.js";
import Dropdown from "../utils/Dropdown.js";

function NavBar({
    theme = "light",
}) {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    const [top, setTop] = useState(true);

    const trigger = useRef(null);
    const mobileNav = useRef(null);

    let logo = require("../images/rhoimpact/rhoimpact_horizontal.png").default;
    let navTextColor = "text-gray-600 hover:text-gray-900";
    let navBgColor = "bg-white";
    if (theme === "dark") {
        logo = require("../images/rhoimpact/rhoimpact_horizontal_inverse.png").default;
        navTextColor = "text-gray-100 hover:text-gray-300";
        navBgColor = "bg-slate-800";
    }

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
            className={
                `fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out
                 backdrop-blur shadow-lg ${navBgColor} ${!top && ""}`}
        >
            <div className="max-w-6xl px-5 mx-auto sm:px-6">
                <div className="flex items-center justify-between h-16 md:h-20">
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

                    {/* Desktop navigation */}
                    <nav className="hidden lg:flex lg:flex-grow">
                        {/* Desktop menu links */}
                        <ul className="flex flex-wrap items-center justify-end flex-grow">
                            <Dropdown theme={theme} title="Products">
                                <li>
                                    <Link
                                        to="/impact-modeling/"
                                        className="flex px-5 py-2 text-sm font-medium leading-tight text-gray-600 hover:text-gray-900"
                                    >
                                        Impact Modeling
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/services/"
                                        className="flex px-5 py-2 text-sm font-medium leading-tight text-gray-600 hover:text-gray-900"
                                    >
                                        Advisory Services
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/gemini/"
                                        className="flex px-5 py-2 text-sm font-medium leading-tight text-gray-600 hover:text-gray-900"
                                    >
                                        Gemini
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/crane-tool/"
                                        className="flex px-5 py-2 text-sm font-medium leading-tight text-gray-600 hover:text-gray-900"
                                    >
                                        CRANE
                                    </Link>
                                </li>
                            </Dropdown>
                            <Dropdown theme={theme} title="Company">
                                {/* 2nd level: hover */}
                                <li>
                                    <Link
                                        to="/about/"
                                        className="flex px-5 py-2 text-sm font-medium leading-tight text-gray-600 hover:text-gray-900"
                                    >
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/our-team/"
                                        className="flex px-5 py-2 text-sm font-medium leading-tight text-gray-600 hover:text-gray-900"
                                    >
                                        Our Team
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/impact/"
                                        className="flex px-5 py-2 text-sm font-medium leading-tight text-gray-600 hover:text-gray-900"
                                    >
                                        Our Impact
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/careers/"
                                        className="flex px-5 py-2 text-sm font-medium leading-tight text-gray-600 hover:text-gray-900"
                                    >
                                        Careers
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/benefits"
                                        className="flex px-5 py-2 text-sm font-medium leading-tight text-gray-600 hover:text-gray-900"
                                    >
                                        Benefits
                                    </Link>
                                </li>
                            </Dropdown>
                            <Dropdown theme={theme} title="Newsroom">
                                {/* 2nd level: hover */}
                                <li>
                                    <Link
                                        to="/news/"
                                        className="flex px-5 py-2 text-sm font-medium leading-tight text-gray-600 hover:text-gray-900"
                                    >
                                        News &amp; Press
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/esg-blog/"
                                        className="flex px-5 py-2 text-sm font-medium leading-tight text-gray-600 hover:text-gray-900"
                                    >
                                        ESG Blog
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/case-studies/"
                                        className="flex px-5 py-2 text-sm font-medium leading-tight text-gray-600 hover:text-gray-900"
                                    >
                                        Case Studies
                                    </Link>
                                </li>
                            </Dropdown>
                            <li>
                                <Link
                                    to="/impact/"
                                    className={"flex items-center px-5 py-3 font-medium transition duration-150 ease-in-out " + navTextColor}
                                >
                                    Impact
                                </Link>
                            </li>
                        </ul>

                        {/* Desktop sign in links */}
                        <ul className="flex flex-wrap items-center justify-end flex-grow">
                            <li>
                                <a
                                    className={"flex items-center px-5 py-3 font-medium transition duration-150 ease-in-out " + navTextColor}
                                    href="https://app.rhoimpact.com/login"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Login
                                </a>
                            </li>
                            <li>
                                <Link
                                    to="/contact/?request=Demo"
                                    className="ml-3 text-gray-800 btn-sm bg-slate-200 hover:bg-slate-300"
                                >
                                    <span>Request a Demo</span>
                                    <svg className="flex-shrink-0 w-3 h-3 ml-2 -mr-1 text-gray-400 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="#3b82f6" d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                                    </svg>
                                </Link>
                            </li>
                        </ul>

                    </nav>

                    {/* Mobile menu */}
                    <div className="flex lg:hidden">
                        {/* Hamburger button */}
                        <button
                            ref={trigger}
                            className={`hamburger ${mobileNavOpen && "active"}`}
                            aria-controls="mobile-nav"
                            aria-expanded={mobileNavOpen}
                            onClick={() => setMobileNavOpen(!mobileNavOpen)}
                        >
                            <span className="sr-only">Menu</span>
                            <svg
                                className={"w-6 h-6 fill-current " + navTextColor}
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect y="4" width="24" height="2" />
                                <rect y="11" width="24" height="2" />
                                <rect y="18" width="24" height="2" />
                            </svg>
                        </button>

                        {/*Mobile navigation */}
                        <div ref={mobileNav}>
                            <Transition
                                show={mobileNavOpen}
                                tag="nav"
                                id="mobile-nav"
                                className="absolute left-0 z-20 w-full h-screen pb-16 overflow-scroll bg-white top-full"
                                enter="transition ease-out duration-200 transform"
                                enterStart="opacity-0 -translate-y-2"
                                enterEnd="opacity-100 translate-y-0"
                                leave="transition ease-out duration-200"
                                leaveStart="opacity-100"
                                leaveEnd="opacity-0"
                            >
                                <ul className="px-5 py-2">
                                    <li className="py-2 my-2 border-b border-gray-200">
                                        <span className="flex py-2 text-gray-600 hover:text-gray-900">
                                            Products
                                        </span>
                                        <ul className="pl-4">
                                            <li>
                                                <Link
                                                    to="/impact-modeling/"
                                                    className="flex py-2 text-sm font-medium text-gray-600 hover:text-gray-900"
                                                >
                                                    Impact Modeling
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/services/"
                                                    className="flex py-2 text-sm font-medium text-gray-600 hover:text-gray-900"
                                                >
                                                    Advisory Services
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/gemini/"
                                                    className="flex py-2 text-sm font-medium text-gray-600 hover:text-gray-900"
                                                >
                                                    Gemini
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/crane-tool/"
                                                    className="flex py-2 text-sm font-medium text-gray-600 hover:text-gray-900"
                                                >
                                                    CRANE
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="py-2 my-2 border-b border-gray-200">
                                        <span className="flex py-2 text-gray-600 hover:text-gray-900">
                                            Newsroom
                                        </span>
                                        <ul className="pl-4">
                                            <li>
                                                <Link
                                                    to="/news/"
                                                    className="flex py-2 text-sm font-medium text-gray-600 hover:text-gray-900"
                                                >
                                                    News &amp; Press
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/esg-blog/"
                                                    className="flex py-2 text-sm font-medium text-gray-600 hover:text-gray-900"
                                                >
                                                    ESG Blog
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/case-studies/"
                                                    className="flex py-2 text-sm font-medium text-gray-600 hover:text-gray-900"
                                                >
                                                    Case Studies
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="py-2 my-2 border-b border-gray-200">
                                        <Link
                                            to="/about/"
                                        >
                                            <span className="flex py-2 text-gray-600 hover:text-gray-900">
                                                Company
                                            </span>
                                        </Link>
                                        <ul className="pl-4">
                                            <li>
                                                <Link
                                                    to="/impact/"
                                                    className="flex py-2 text-sm font-medium text-gray-600 hover:text-gray-900"
                                                >
                                                    Impact & Methodology
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/about/"
                                                    className="flex py-2 text-sm font-medium text-gray-600 hover:text-gray-900"
                                                >
                                                    About Us
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/our-team/"
                                                    className="flex py-2 text-sm font-medium text-gray-600 hover:text-gray-900"
                                                >
                                                    Our Team
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/careers/"
                                                    className="flex py-2 text-sm font-medium text-gray-600 hover:text-gray-900"
                                                >
                                                    Careers
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/benefits/"
                                                    className="flex py-2 text-sm font-medium text-gray-600 hover:text-gray-900"
                                                >
                                                    Benefits
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link
                                            to="/contact/?request=Demo"
                                            className="w-full my-2 text-gray-200 bg-gray-900 btn-sm hover:bg-gray-800"
                                        >
                                            <span>Book a Demo</span>
                                            <svg
                                                className="flex-shrink-0 w-3 h-3 ml-2 -mr-1 text-gray-400 fill-current"
                                                viewBox="0 0 12 12"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                                                    fill="#999"
                                                    fillRule="nonzero"
                                                />
                                            </svg>
                                        </Link>
                                    </li>
                                </ul>
                            </Transition>
                        </div>
                    </div>
                </div>
            </div >
        </header >
    );
}

export default NavBar;
