import React from "react";
import { Link } from "gatsby";

function SellDoLearnCTABlock() {
    return (
        <section className="relative">
            {/* <!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
            {/* Section background (needs .relative class on parent and next sibling elements) */}
            <div
                className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none"
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
                            {/* <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 text-center">Option 1</h4> */}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" style={{ maxWidth: '40px', maxHeight: '40px', padding: '0 0 5px 0' }}>
                                <path d="M582.8 45.5l11.9 11.9c12.5 12.5 12.5 32.8 0 45.2L568 129.4l-57-57 26.4-26.8c12.5-12.6 32.8-12.7 45.4-.1zM346.2 239.2L488.5 95.1 545.4 152 402.3 295.2c-4.4 4.4-10 7.4-16.1 8.7l-61.5 12.9 12.9-61.7c1.3-6 4.2-11.5 8.6-15.9zM514.7 23.1L323.4 216.7c-8.6 8.7-14.6 19.8-17.1 31.8l-18 85.7c-1.1 5.3 .5 10.8 4.3 14.6s9.3 5.5 14.6 4.3l85.5-17.9c12.2-2.6 23.3-8.6 32.1-17.4L617.4 125.3c25-25 25-65.5 0-90.5L605.5 22.8c-25.1-25.1-65.8-25-90.8 .3zM64 128c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V272c0-8.8-7.2-16-16-16s-16 7.2-16 16V448c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V192c0-17.7 14.3-32 32-32H304c8.8 0 16-7.2 16-16s-7.2-16-16-16H64zm64 216a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm120-24a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z" />
                            </svg>
                            <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 text-center">
                                Sell (More)
                            </h4>
                            <p className="text-gray-600 text-center">
                                <dl className="text-left text-sm" style={{ margin: "0 auto", padding: "0 0 0 0", textAlign: "center" }}>
                                    <dt><b><u>Sell</u></b> (More):</dt>
                                    <dd>Respond to supplier ESG requirements, win competitive bids, and show your impact on customer sustainability goals.</dd>
                                    <dt><b><u>Do</u></b> (More):</dt>
                                    <dd>Accelerate growth into new markets and future-proof how you quantify your business for a global audience.</dd>
                                    <dt><b><u>Learn</u></b> (More):</dt>
                                    <dd>Enable your team to communicate the impact to your customers, investors, and stakeholders.</dd>
                                </dl>
                            </p>
                            <br />
                            <a
                                className="btn text-white bg-gray-800 hover:bg-blue-600 w-full mb-4 sm:w-full sm:mb-0"
                                href="https://quantify.rhoimpact.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Rapid Assessment &#10140;
                            </a>
                        </div>

                        {/* 2nd item */}
                        <div className="relative flex flex-col items-center p-4 bg-white rounded shadow-xl">
                            {/* <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 text-center">Option 2</h4> */}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" style={{ maxWidth: '40px', maxHeight: '40px', padding: '0 0 5px 0' }}>
                                <path d="M32 176c0-74.8 73.7-144 176-144s176 69.2 176 144s-73.7 144-176 144c-15.3 0-30.6-1.9-46.3-5c-3.5-.7-7.1-.2-10.2 1.4c-6.1 3.1-12 6-18 8.7c-28.4 12.9-60.2 23.1-91.5 26c14.9-19 26.8-39.7 37.6-59.9c3.3-6.1 2.3-13.6-2.5-18.6C50 244.2 32 213.1 32 176zM208 0C93.1 0 0 78.9 0 176c0 44.2 19.8 80.1 46 110c-11.7 21-24 40.6-39.5 57.5l0 0-.1 .1c-6.5 7-8.2 17.1-4.4 25.8C5.8 378.3 14.4 384 24 384c43 0 86.5-13.3 122.7-29.7c4.9-2.2 9.6-4.5 14.3-6.8c15.3 2.8 30.9 4.6 47 4.6c114.9 0 208-78.9 208-176S322.9 0 208 0zM447.4 160.5C541.6 167 608 233 608 304c0 37.1-18 68.2-45.1 96.6c-4.8 5-5.8 12.5-2.5 18.6c10.9 20.2 22.7 40.8 37.6 59.9c-31.3-3-63.2-13.2-91.5-26c-6-2.7-11.9-5.6-18-8.7c-3.2-1.6-6.8-2.1-10.2-1.4c-15.6 3.1-30.9 5-46.3 5c-68.2 0-123.6-30.7-153.1-73.3c-11 3-22.3 5.2-33.8 6.8C279 439.8 349.9 480 432 480c16.1 0 31.7-1.8 47-4.6c4.6 2.3 9.4 4.6 14.3 6.8C529.5 498.7 573 512 616 512c9.6 0 18.2-5.7 22-14.5c3.8-8.7 2-18.9-4.4-25.8l-.1-.1 0 0c-15.5-17-27.8-36.5-39.5-57.5c26.2-29.9 46-65.8 46-110c0-94.4-87.8-171.5-198.2-175.8c2.8 10.4 4.7 21.2 5.6 32.3z" />
                            </svg>
                            <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 text-center">
                                Do (More)
                            </h4>
                            <p className="text-gray-600 text-center">
                                Schedule a 30-minute discovery session to better understand your needs, verify we can help, and prepare our science team.
                            </p>
                            <br />
                            <a
                                className="btn text-white bg-blue-500 hover:bg-blue-600 w-full mb-4 sm:w-full sm:mb-0"
                                href="https://calendly.com/rho-impact/discovery-session"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Book Your Session &#10140;
                            </a>
                        </div>

                        {/* 3rd item */}
                        <div className="relative flex flex-col items-center p-4 bg-white rounded shadow-xl">
                            {/* <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 text-center">Outcome</h4> */}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ maxWidth: '40px', maxHeight: '40px', padding: '0 0 5px 0' }}>
                                <path d="M160 64v96H480V96c0-17.7-14.3-32-32-32H160zm0 128V448H448c17.7 0 32-14.3 32-32V192H160zM128 64H64C46.3 64 32 78.3 32 96v64h96V64zM32 416c0 17.7 14.3 32 32 32h64V192H32V416zM0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM446.8 278.1c-2.5 6-8.3 9.9-14.8 9.9H416v48c0 26.5-21.5 48-48 48H320v16c0 6.5-3.9 12.3-9.9 14.8s-12.9 1.1-17.4-3.5l-32-32c-6.2-6.2-6.2-16.4 0-22.6l32-32c4.6-4.6 11.5-5.9 17.4-3.5s9.9 8.3 9.9 14.8v16h48c8.8 0 16-7.2 16-16V288H368c-6.5 0-12.3-3.9-14.8-9.9s-1.1-12.9 3.5-17.4l32-32c6.2-6.2 16.4-6.2 22.6 0l32 32c4.6 4.6 5.9 11.5 3.5 17.4z" />
                            </svg>
                            <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 text-center">
                                Learn (More)
                            </h4>
                            <p className="text-gray-600 text-center">
                                Get an impact model in 2-4 weeks that quantifies your impact in alignment
                                with global standards.
                            </p>
                            <br />
                            <Link
                                to="/contact/?request=AskHow"
                                className="btn text-white bg-gray-800 hover:bg-blue-600 w-full mb-4 sm:w-full sm:mb-0"
                                href="#0"
                            >
                                Ask Us How &#10140;
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </section >
    );
}

export default SellDoLearnCTABlock;
