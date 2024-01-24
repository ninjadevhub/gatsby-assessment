import React from "react";
import { Link } from "gatsby";

function HomeCTABlock() {
    return (
        <section className="relative bg-gradient-to-r from-slate-700 to-slate-600">
            {/* <!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
            {/* Section background (needs .relative class on parent and next sibling elements) */}
            {/* <div
                className="absolute inset-0 md:mt-24 lg:mt-0 bg-slate-200 pointer-events-none"
                aria-hidden="true"
            ></div> */}
            <div
                className="absolute inset-0 bg-slate-100 pointer-events-none mb-16"
                aria-hidden="true"
            ></div>
            {/* End section background */}

            {/* 3 Boxes */}
            <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-4 md:py-4">
                    {/* Items */}
                    <div className="relative max-w-sm mx-auto grid gap-6 md:grid-cols-1 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

                        {/* 1st item */}
                        <div className="relative flex flex-col items-center p-4 bg-white rounded shadow-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ maxWidth: '40px', maxHeight: '40px', padding: '0 0 5px 0' }}>
                                <path d="M272 48c0-8.8-7.2-16-16-16s-16 7.2-16 16V280.6L37.7 451.8c-6.7 5.7-7.6 15.8-1.9 22.6s15.8 7.6 22.5 1.9L256 309 453.7 476.2c6.7 5.7 16.8 4.9 22.6-1.9s4.9-16.8-1.9-22.6L272 280.6V48zM384 88a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm24 168a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm72-72a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM152 160a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM32 88a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM56 256A24 24 0 1 0 8 256a24 24 0 1 0 48 0zM256 472a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
                            </svg>
                            <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 text-center">
                                Quantify and Contextualize
                            </h4>
                            <p className="text-gray-600 text-center">
                                Leverage the data and tools trusted
                                by <a
                                    className="underline"
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://damassets.autodesk.net/content/dam/autodesk/www/pdfs/fy23-autodesk-impact-report.pdf"
                                >Autodesk Foundation</a>
                                , <a
                                    className="underline"
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://ecoreport.eclipse.vc/"
                                >Eclipse Ventures</a>, and many others for modeling the impact
                                of everything from robotics to logistics.
                            </p>
                        </div>

                        {/* 2nd item */}
                        <div className="relative flex flex-col items-center p-4 bg-white rounded shadow-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ maxWidth: '40px', maxHeight: '40px', padding: '0 0 5px 0' }}>
                                <path d="M376.2 121.7l0 0c7 4 15.2 6.3 23.8 6.3c2.6 0 5.2-.2 7.6-.6l0 0C430.5 123.7 448 103.9 448 80c0-26.5-21.5-48-48-48s-48 21.5-48 48c0 .7 0 1.3 0 2l0 0c.5 11.4 4.9 21.7 11.9 29.7l0 0c3.5 4 7.6 7.4 12.2 10zm-5.9 32.6c-15.2-6.1-28.2-16.8-37.1-30.3L158.7 193.7c.8 4.6 1.3 9.4 1.3 14.3c0 14.4-3.8 27.9-10.5 39.6l138 120.8c13-9.9 29.2-16 46.7-16.3l36-197.7zm-4.5 203.4C395.2 369.5 416 398.3 416 432c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-14.4 3.8-27.9 10.5-39.6l-138-120.8C115 281.9 98.2 288 80 288c-44.2 0-80-35.8-80-80s35.8-80 80-80c27.9 0 52.5 14.3 66.8 36L321.3 94.3c-.8-4.6-1.3-9.4-1.3-14.3c0-44.2 35.8-80 80-80s80 35.8 80 80c0 43.6-34.9 79.1-78.3 80l-36 197.7zm-246-122.9c.7-1 1.3-2 1.9-3.1c4-7 6.3-15.1 6.3-23.8c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48c8.5 0 16.6-2.2 23.5-6.2l0 0c6.5-3.7 12.1-8.8 16.3-15zM291.4 414.2c-2.2 5.5-3.4 11.5-3.4 17.8c0 26.5 21.5 48 48 48s48-21.5 48-48s-21.5-48-48-48c-14 0-26.6 6-35.3 15.5c-2.7 2.9-5 6.1-6.9 9.6c-.9 1.6-1.7 3.4-2.4 5.1l0 0z" />
                            </svg>
                            <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 text-center">
                                Traceable by Design
                            </h4>
                            <p className="text-gray-600 text-center">
                                We are hyper-focused on auditable &amp; assurable data
                                that avoid the risk of greenwashing while
                                protecting sensitive business data and intellecutal property.
                            </p>
                        </div>

                        {/* 3rd item */}
                        <div className="relative flex flex-col items-center p-4 bg-white rounded shadow-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{ maxWidth: '40px', maxHeight: '40px', padding: '0 0 5px 0' }}>
                                <path d="M443.3 139.3c6.2-6.2 6.2-16.4 0-22.6l-96-96c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L393.4 112 16 112c-8.8 0-16 7.2-16 16s7.2 16 16 16l377.4 0-68.7 68.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l96-96zm-342.6 352c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L54.6 400 432 400c8.8 0 16-7.2 16-16s-7.2-16-16-16L54.6 368l68.7-68.7c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-96 96c-6.2 6.2-6.2 16.4 0 22.6l96 96z" />
                            </svg>
                            <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 text-center">
                                Active Contributor
                            </h4>
                            <p className="text-gray-600 text-center">
                                Rho Impact uses and contributes to
                                to open <a
                                    className="underline"
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://www.sec.gov/comments/s7-10-22/s71022-20131836-302283.pdf"
                                >standards</a>
                                , <a
                                    className="underline"
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://projectframe.how"
                                >methodologies</a>
                                , and <a
                                    className="underline"
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://www.cranetool.org"
                                >frameworks</a> to
                                ensure impact forecasts are understandable and comparable.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section >
    );
}

export default HomeCTABlock;
