import React from "react";

function ImpactModelHighlights() {
  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 bg-slate-100 pointer-events-none mb-16"
        aria-hidden="true"
      ></div>

      {/* Vertical gray line */}
      <div
        className="absolute left-0 right-0 top-4 m-auto w-px p-px h-14 bg-gray-300 transform -translate-y-1/2"
      ></div>

      {/* How It Works */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            {/* <h2 className="h2 font-playfair-display text-slate-800 mb-4">We offer high-quality impact <span className="text-emerald-500">analytics</span>.</h2> */}
            <h2 className="h2 font-playfair-display text-slate-800 mb-4">How do you build <span className="text-emerald-500">impact models</span> and what are they good for, anyway?</h2>
            <p className="text-xl text-slate-500">
              We're glad you asked! In short, we have spent over 5 years building
              and contributing to some of the world's most respected emissions
              forecasting methodologies and we've worked hard to make them accessible to
              companies and investors globally.
              <br /><br /><i>Here are a few highlights:</i>
              {/* Impact and Environmental, Social, and Governance (ESG) issues are wide-ranging and take more than simple dashboards. Rho Impact provides tailor-made solutions that combine software with experts in order to help organizations of any size. */}
            </p>
          </div>

          {/* Top image */}
          {/* <div className="pb-12 md:pb-16">
            <img
              src={require("../images/features-top-image.png").default}
              width="1104"
              height="325"
              alt="Features top"
            />
          </div> */}

          {/* Items */}
          <div
            className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none"
            data-aos-id-blocks
          >
            {/* 1st item */}
            <div
              className="relative flex flex-col p-6 bg-white rounded shadow-xl"
              data-aos="zoom-y-out"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mb-3" viewBox="0 0 512 512">
                <path fill="#268ae8" d="M32 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM280 56c0-13.3-10.7-24-24-24s-24 10.7-24 24V276.8L40.6 437.6c-10.1 8.5-11.5 23.7-2.9 33.8s23.7 11.5 33.8 2.9L256 319.3l184.6 155c10.2 8.5 25.3 7.2 33.8-2.9s7.2-25.3-2.9-33.8L280 276.8V56zM384 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm32 160a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm64-64a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM160 160a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM64 256A32 32 0 1 0 0 256a32 32 0 1 0 64 0zM256 480a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                &gt;37,000 calculated data points
              </h4>
              <p className="text-gray-600">
                Create an ESG, Net Zero, Sustainability, or Specific Impact
                Strategy. Rho Impact guides you from start to finish.
              </p>
              {/* <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                Design an Actionable &amp; Evidence-Based Impact Strategy
              </h4>
              <p className="text-gray-600">
                Create an ESG, Net Zero, Sustainability, or Specific Impact
                Strategy. Rho Impact guides you from start to finish.
              </p> */}
            </div>

            {/* 2nd item */}
            <div
              className="relative flex flex-col p-6 bg-white rounded shadow-xl"
              data-aos="zoom-y-out"
              data-aos-delay="150"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mb-3" viewBox="0 0 448 512">
                <path fill="#268ae8" d="M224 80C126.8 80 48 158.8 48 256c0 63.7 33.8 119.5 84.6 150.4c11.4 7 19.4 19.6 19.4 34.2c0 21.8-17.6 39.4-39.4 39.4H24c-13.3 0-24-10.7-24-24s10.7-24 24-24H85.4C33.4 391 0 327.4 0 256C0 132.3 100.3 32 224 32s224 100.3 224 224c0 71.4-33.4 135-85.4 176H424c13.3 0 24 10.7 24 24s-10.7 24-24 24H335.4c-21.8 0-39.4-17.6-39.4-39.4c0-14.6 8-27.2 19.4-34.2C366.2 375.5 400 319.7 400 256c0-97.2-78.8-176-176-176z" />
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                &gt;300 Units of Measure (UoM)
              </h4>
              <p className="text-gray-600">
                Forecast the environmental, social &amp; economic impacts of
                your strategy in a variety of scenarios specific to you.
              </p>
            </div>

            {/* 3rd item */}
            <div
              className="relative flex flex-col p-6 bg-white rounded shadow-xl"
              data-aos="zoom-y-out"
              data-aos-delay="300"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mb-3" viewBox="0 0 512 512">
                <path fill="#268ae8" d="M128 416v48c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V416h96zm-16 96c12.3 0 23.5-4.6 32-12.2c8.5 7.6 19.7 12.2 32 12.2h64c26.5 0 48-21.5 48-48V416 400 384 193.8l51.4 198.1 4 15.5 18 69.2c6.6 25.5 32 40.6 56.7 33.8l59.6-16.5c24.7-6.8 39.3-33 32.7-58.5l-13.9-53.7-4-15.5-63.9-246-4-15.5-18-69.2C400 9.9 374.6-5.2 349.9 1.6L290.3 18.1c-3.5 1-6.8 2.3-9.9 4C271.9 8.8 257 0 240 0H176c-12.3 0-23.5 4.6-32 12.2C135.5 4.6 124.3 0 112 0H48C21.5 0 0 21.5 0 48V96v16 16V384v16 16 48c0 26.5 21.5 48 48 48h64zM288 64.8V63.5c.3-7.2 5.1-13 10.8-14.6l59.6-16.5c6.6-1.8 14.8 2 17.2 11l14.1 54.2-87.3 24.2L288.6 68.6c-.3-1.3-.5-2.6-.6-3.8zm-32-.6c0 0 0 0 0 0V96H160V48c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16V64.2zM176 480c-8.8 0-16-7.2-16-16V416h96v48c0 8.8-7.2 16-16 16H176zM128 128V384H32V128h96zm0-80V96H32V48c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16zM256 384H160V128h96V384zM397.7 128.7l59.8 230.5-87.3 24.2L310.4 152.8l87.3-24.2zm67.9 261.5l13.8 53.2c2.4 9.4-3.2 17.7-10.3 19.6l-59.6 16.5c-6.6 1.8-14.8-2-17.2-11l-14.1-54.2 87.3-24.2z" />
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                &gt;500 Structured Sources
              </h4>
              <p className="text-gray-600">
                Visualize your operations, assign tasks and track progress
                across your enterprise.
              </p>
            </div>

            {/* 4th item */}
            <div
              className="relative flex flex-col p-6 bg-white rounded shadow-xl"
              data-aos="zoom-y-out"
              data-aos-delay="450"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <svg
                className="w-16 h-16 mb-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
              >
                <circle
                  className="fill-current text-blue-500"
                  cx="24"
                  cy="24"
                  r="24"
                />
                <g fill="#FFF" transform="translate(9.5, 10.5) scale(0.3)">
                  <path d="M87.1,0 L7.9,0 C3.5,0 0,3.5 0,7.9 L0,74.3 C0,78.7 3.5,82.2 7.9,82.2 L87.1,82.2 C91.5,82.2 95,78.7 95,74.3 L95,7.9 C95,3.5 91.5,0 87.1,0 Z M7.9,5.3 L87.1,5.3 C88.6,5.3 89.7,6.5 89.7,7.9 L89.7,21.1 L5.3,21.1 L5.3,7.9 C5.3,6.4 6.4,5.3 7.9,5.3 Z M87.1,76.9 L7.9,76.9 C6.4,76.9 5.3,75.7 5.3,74.3 L5.3,26.3 L89.8,26.3 L89.8,74.3 C89.7,75.8 88.6,76.9 87.1,76.9 Z" />
                  <circle cx="13.5" cy="13.2" r="3.1" />
                  <circle cx="23.1" cy="13.2" r="3.1" />
                  <circle cx="32.7" cy="13.2" r="3.1" />
                  <path d="M43 49.3L40.1 48.5C39.7 47.5 39.5 47.1 39.1 46.1L40.6 43.5C40.8 43.1 40.7 42.7 40.5 42.4L38.5 40.4C38.2 40.1 37.8 40 37.4 40.3L34.8 41.8C33.8 41.4 33.4 41.2 32.4 40.8L31.6 37.9C31.5 37.4 31.1 37.1 30.7 37.1L27.9 37.1C27.5 37.1 27.1 37.4 27 37.8L26.2 40.7C25.2 41.1 24.8 41.3 23.8 41.7L21.2 40.2C20.8 40 20.4 40.1 20.1 40.3L18.2 42.2C17.9 42.5 17.8 42.9 18.1 43.3L19.6 45.9C19.2 46.9 19 47.3 18.6 48.3L15.7 49.1C15.3 49.2 15 49.6 15 50L15 52.8C15 53.2 15.3 53.6 15.7 53.7L18.6 54.5C19 55.5 19.2 55.9 19.6 56.9L18.1 59.5C17.9 59.9 18 60.3 18.2 60.6L20.1 62.5C20.4 62.8 20.8 62.9 21.2 62.6L23.8 61.1C24.8 61.5 25.2 61.7 26.2 62.1L27 65C27.1 65.4 27.5 65.7 27.9 65.7L30.7 65.7C31.1 65.7 31.5 65.4 31.6 65L32.4 62.1C33.4 61.7 33.8 61.5 34.8 61.1L37.4 62.6C37.8 62.8 38.2 62.7 38.5 62.5L40.4 60.6C40.7 60.3 40.8 59.9 40.5 59.5L39.1 57.1C39.5 56.1 39.7 55.7 40.1 54.7L43 53.9C43.4 53.8 43.7 53.4 43.7 53L43.7 50.2C43.7 49.8 43.4 49.4 43 49.3zM29.3 57.5C26 57.5 23.3 54.8 23.3 51.5 23.3 48.2 26 45.5 29.3 45.5 32.6 45.5 35.3 48.2 35.3 51.5 35.3 54.9 32.6 57.5 29.3 57.5zM55.9 50.5L49.7 50.5C49.3 50.5 49.1 50.8 49.1 51.1L49.1 63.2C49.1 63.6 49.4 63.8 49.7 63.8L55.9 63.8C56.3 63.8 56.5 63.5 56.5 63.2L56.5 51.2C56.5 50.8 56.2 50.5 55.9 50.5zM79.5 45.6L73.3 45.6C72.9 45.6 72.7 45.9 72.7 46.2L72.7 63.2C72.7 63.6 73 63.8 73.3 63.8L79.5 63.8C79.9 63.8 80.1 63.5 80.1 63.2L80.1 46.2C80.1 45.9 79.8 45.6 79.5 45.6zM67.7 39.2L61.5 39.2C61.1 39.2 60.9 39.5 60.9 39.8L60.9 63.2C60.9 63.6 61.2 63.8 61.5 63.8L67.7 63.8C68.1 63.8 68.3 63.5 68.3 63.2L68.3 39.9C68.3 39.5 68 39.2 67.7 39.2z" />
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                Build Capacity and Improve Governance
              </h4>
              <p className="text-gray-600">
                Step-by-step, guided ESG Governance process &mdash;from policies
                and procedures to working group management, all from your
                Rho Impact dashboard.
              </p>
            </div>

            {/* 5th item */}
            <div
              className="relative flex flex-col p-6 bg-white rounded shadow-xl"
              data-aos="zoom-y-out"
              data-aos-delay="600"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <svg
                className="w-16 h-16 mb-3"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  className="fill-current text-blue-500"
                  cx="24"
                  cy="24"
                  r="24"
                />
                <g fill="#FFF" transform="translate(6 7) scale(0.5)">
                  <g transform="translate(17.1 7.8)">
                    <polygon points="4.9 32.8 3 30.9 1.7 32.3 5 35.5 10.8 28.5 9.4 27.3" />
                    <polygon points="4.9 43.5 3 41.6 1.7 43 5 46.2 10.8 39.2 9.4 38" />
                    <path d="M9.1,19.3 C14.2,19.3 18.2,15.2 18.2,10.2 L9.1,10.2 L9.1,1 C4,1 1.77635684e-15,5.1 1.77635684e-15,10.1 C1.77635684e-15,15.1 4.1,19.3 9.1,19.3 Z M7.7,2.5 L7.7,10.2 L7.7,11.6 L9.1,11.6 L16.7,11.6 C16,15.2 12.9,17.9 9.1,17.9 C4.8,17.9 1.4,14.4 1.4,10.2 C1.4,6.4 4.1,3.2 7.7,2.5 Z" />
                    <path d="M10.1 1.77635684e-15L10.1 9.2 19.2 9.2C19.3 4.1 15.2 1.77635684e-15 10.1 1.77635684e-15zM11.5 1.6C14.7 2.2 17.1 4.7 17.7 7.8L11.5 7.8 11.5 1.6zM35.2 1.7L22.5 1.7 22.5 5.8 35.2 5.8 35.2 1.7zM33.8 4.4L23.9 4.4 23.9 3.1 33.8 3.1 33.8 4.4zM35.2 13.7L22.5 13.7 22.5 17.8 35.2 17.8 35.2 13.7zM33.8 16.4L23.9 16.4 23.9 15.1 33.8 15.1 33.8 16.4zM35.2 7.7L22.5 7.7 22.5 11.8 35.2 11.8 35.2 7.7zM33.8 10.4L23.9 10.4 23.9 9.1 33.8 9.1 33.8 10.4z" />
                    <rect width="20.9" height="1.4" x="14.4" y="28.9" />
                    <rect width="20.9" height="1.4" x="14.4" y="32.4" />
                    <rect width="20.9" height="1.4" x="14.4" y="39.6" />
                    <rect width="20.9" height="1.4" x="14.4" y="43.1" />
                  </g>
                  <g transform="translate(11.1)">
                    <path d="M40.8,63 C33.6,63 26.5,63 19.3,63 C14.7,63 10.2,63 5.6,63 C4.3,63 2.9,63 1.6,63 C0.3,63 1.6,63.6 1.5,63.1 C1.1,61.1 1.5,58.6 1.5,56.6 C1.5,52.4 1.5,48.3 1.5,44.1 C1.5,34.1 1.5,24.1 1.5,14.1 C1.5,10.6 1.5,7 1.5,3.5 C1.5,2.7 1.6,1.8 1.5,1 C1.4,0 0.3,1.1 1.1,1 C8.7,0.3 16.7,1 24.3,1 C29.1,1 34,1 38.8,1 C41.3,1 45,0.3 47.5,1 C48.4,1.2 47.1,0.1 47.3,1 C47.4,1.9 47.3,2.9 47.3,3.9 C47.3,7.6 47.3,11.3 47.3,15 C47.3,26 47.3,37 47.3,48 C47.3,50.3 48,54 47.3,56.1 C46.7,58 42.1,61.4 40.2,63.3 C39.6,63.9 41,64.1 41.4,63.7 C44,61.1 48.2,58.5 48.7,55 C49.6,49.4 48.7,42.9 48.7,37.2 C48.7,25 48.7,12.7 48.7,0.5 C48.7,0.1 48.3,0 48,0 C32.2,0 16.5,0 0.8,0 C0.5,0 0,0.2 0,0.6 C0,21.6 0,42.6 0,63.6 C0,64 0.4,64.1 0.7,64.1 C14,64.1 27.4,64.1 40.7,64.1 C41.4,64 41.7,63 40.8,63 Z" />
                    <path d="M41.3,63.2 C41.3,60.8 41.3,58.4 41.3,56 C41,56.2 40.6,56.4 40.3,56.6 C42.7,56.6 45.1,56.6 47.5,56.6 C48,56.6 49,55.8 48.1,55.8 C45.7,55.8 43.3,55.8 40.9,55.8 C40.6,55.8 39.9,56 39.9,56.4 C39.9,58.8 39.9,61.2 39.9,63.6 C39.9,64 41.3,63.7 41.3,63.2 L41.3,63.2 Z" />
                  </g>
                </g>
                {/* <g fill="none" fillRule="evenodd">
                  <circle
                    className="fill-current text-blue-600"
                    cx="24"
                    cy="24"
                    r="24"
                  />
                  <g strokeWidth="2">
                    <path
                      className="stroke-current text-blue-300"
                      d="M26 20l-2.172 2.172a4 4 0 01-5.656 0L18 22l4.929-4.929A7.072 7.072 0 0134 25.7"
                    />
                    <path
                      className="stroke-current text-white"
                      d="M27.266 23.266l3.613 3.613a3 3 0 010 4.242l-1.636 1.636a6 6 0 01-8.486 0l-5.686-5.686A7.072 7.072 0 0120 15"
                    />
                    <path
                      className="stroke-current text-white"
                      d="M30.391 31.609l-3.891-3.89M27.513 33.965l-3.63-3.63"
                    />
                  </g>
                </g> */}
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                Create Investor-Grade Disclosures at your Fingertips
              </h4>
              <p className="text-gray-600">
                Provide performance reports and assurance documentation aligned
                with leading global disclosure standards.
              </p>
              <br />
            </div>

            {/* 6th item */}
            <div
              className="relative flex flex-col p-6 bg-white rounded shadow-xl"
              data-aos="zoom-y-out"
              data-aos-delay="600"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <svg
                className="w-16 h-16 mb-3"
                viewBox="0 0 48 48"
                // viewBox="0 0 100 125"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  className="fill-current text-blue-500"
                  cx="24"
                  cy="24"
                  r="24"
                />
                <switch>
                  <foreignObject
                    requiredExtensions="http://ns.adobe.com/AdobeIllustrator/10.0/"
                    x="0"
                    y="0"
                    width="1"
                    height="1"
                  />
                  <g fill="#FFF" transform="translate(4.5 4) scale(0.4)">
                    <g>
                      <ellipse
                        transform="matrix(0.5384 -0.8427 0.8427 0.5384 -47.6003 38.9704)"
                        cx="11.8"
                        cy="62.9"
                        rx="2.4"
                        ry="2.4"
                      />
                      <path d="M96.8,61.6L83.1,40.1c-0.7-1.1-1.7-1.8-3-2.1c-1.2-0.3-2.5,0-3.6,0.6l-5.4,3.4c-1.1,0.7-1.8,1.7-2.1,3     c-0.1,0.7-0.1,1.3,0,2c-3.1,0.5-6.2,0.3-9.2-0.7l-4.2-1.4c-2.7-0.9-5.6-0.2-7.5,1.6l-3.5-0.5c-2.3-0.3-4.6,0.1-6.7,1.2l-1.4,0.8     c-1,0.6-2.3,0.6-3.3,0.2l-2.4-1c0.2-0.7,0.2-1.4,0.1-2.2c-0.3-1.2-1-2.3-2.1-3l-5.4-3.4c-2.2-1.4-5.1-0.8-6.5,1.4L3.2,61.6     c-0.7,1.1-0.9,2.3-0.6,3.6c0.3,1.2,1,2.3,2.1,3l5.4,3.4c0.8,0.5,1.7,0.7,2.5,0.7c1.6,0,3.1-0.8,4-2.2l0.1-0.2l3,2     c-1.6,1.9-1.5,4.8,0.3,6.6c0.9,0.9,2,1.4,3.3,1.4c0,1.2,0.5,2.4,1.4,3.3s2.1,1.4,3.3,1.4c0,1.2,0.5,2.4,1.4,3.3     c0.9,0.9,2.1,1.4,3.3,1.4c0,1.2,0.5,2.4,1.4,3.3c1,1,2.2,1.4,3.5,1.4c1.3,0,2.5-0.5,3.5-1.4l1.5-1.5l2.3,2.8c0,0,0.1,0.1,0.1,0.1     c1.1,1.1,2.6,1.8,4.2,1.8c1.6,0,3.1-0.6,4.2-1.8c1-1,1.6-2.3,1.7-3.7c1.9,0.4,3.9-0.2,5.3-1.5c0,0,0.1-0.1,0.1-0.1     c1-1,1.6-2.3,1.7-3.7c1.9,0.4,4-0.2,5.4-1.6c1-1,1.6-2.3,1.7-3.8c0.5,0.1,0.9,0.1,1.4,0.1c1.6,0,3.1-0.7,4.2-1.9     c0.8-0.9,1.3-1.9,1.5-3.1l7.2-4.4c0.9,1.2,2.3,1.9,3.8,1.9c0.9,0,1.8-0.2,2.5-0.7c0,0,0,0,0,0l5.4-3.4c1.1-0.7,1.8-1.7,2.1-3     C97.7,63.9,97.4,62.6,96.8,61.6z M13.9,68.4c-0.5,0.7-1.4,0.9-2.2,0.5l-5.4-3.4c-0.4-0.2-0.6-0.6-0.7-1c-0.1-0.4,0-0.8,0.2-1.2     l13.7-21.5c0.5-0.7,1.4-0.9,2.2-0.5l5.4,3.4c0.4,0.2,0.6,0.6,0.7,1c0.1,0.4,0,0.8-0.2,1.2L13.9,68.4z M22.2,76.3     c-0.7-0.7-0.7-1.8,0-2.4l4-4c0.3-0.3,0.8-0.5,1.2-0.5c0.4,0,0.9,0.2,1.2,0.5c0.7,0.7,0.7,1.8,0,2.4l-4,4C24,77,22.9,77,22.2,76.3     z M26.9,81c-0.7-0.7-0.7-1.8,0-2.4l4-4c0,0,0,0,0,0l0.8-0.8c0.3-0.3,0.8-0.5,1.2-0.5c0.5,0,0.9,0.2,1.2,0.5c0,0,0,0,0,0     c0.3,0.3,0.5,0.8,0.5,1.2c0,0.5-0.2,0.9-0.5,1.2L29.4,81C28.7,81.7,27.6,81.7,26.9,81z M31.6,85.7c-0.7-0.7-0.7-1.8,0-2.4l4-4     c0.3-0.3,0.8-0.5,1.2-0.5c0.4,0,0.9,0.2,1.2,0.5v0c0.3,0.3,0.5,0.8,0.5,1.2c0,0.5-0.2,0.9-0.5,1.2l-4,4     C33.4,86.4,32.3,86.4,31.6,85.7z M41.9,87.2l-3.2,3.2c-0.6,0.6-1.8,0.7-2.4,0c-0.3-0.3-0.5-0.8-0.5-1.2c0-0.5,0.2-0.9,0.5-1.2     l3.2-3.2c0.3-0.3,0.8-0.5,1.2-0.5c0.5,0,0.9,0.2,1.2,0.5C42.6,85.4,42.6,86.5,41.9,87.2z M72.6,75.7c-0.5,0.5-1.2,0.8-1.9,0.8     c0,0-0.1,0-0.1,0c-0.8,0-1.6-0.3-2.2-0.9L67.7,75h0l-4-4c-0.6-0.6-1.6-0.6-2.2,0c-0.6,0.6-0.6,1.6,0,2.2l4,4     c0.5,0.5,0.7,1.2,0.7,1.9c0,0.8-0.3,1.5-0.8,2c-1.1,1.1-2.9,1.1-4,0l-3.9-3.9c-0.6-0.6-1.6-0.6-2.2,0c-0.6,0.6-0.6,1.6,0,2.2l3,3     c1.1,1.1,1.1,2.8,0.1,3.9c0,0-0.1,0-0.1,0.1c-1.1,1.1-2.9,1.1-4,0l-2.8-2.8c-0.6-0.6-1.6-0.6-2.2,0c-0.6,0.6-0.6,1.6,0,2.2l2,2     c0.5,0.5,0.7,1.2,0.7,1.9c0,0.7-0.3,1.5-0.8,2c-1,1.1-2.9,1.1-3.9,0.1l-2.5-3c1.3-1.9,1.2-4.6-0.5-6.3v0     c-0.7-0.7-1.6-1.2-2.5-1.3c0-0.2,0.1-0.5,0.1-0.7c0-1.3-0.5-2.5-1.4-3.5v0c-0.7-0.7-1.6-1.2-2.5-1.3c0-0.2,0.1-0.5,0.1-0.7     c0-1.3-0.5-2.5-1.4-3.5c0,0,0,0,0,0c-0.9-0.9-2.2-1.4-3.5-1.4c-0.2,0-0.5,0-0.7,0.1c-0.2-0.9-0.6-1.8-1.3-2.5     c-1.9-1.9-5-1.9-6.9,0l-2,2l-3.6-2.4l11-17.2l2.7,1.1c2,0.8,4.2,0.7,6.1-0.3l1.4-0.8c1.4-0.8,3.1-1.1,4.7-0.9l1.8,0.3     c-1,1.8-1.7,3.7-2.2,5.7c-0.6,2.6,0.9,5.2,3.5,6.1c0,0,0.1,0,0.1,0c2.2,0.6,4.5-0.3,5.7-2.2l1.3-2.1l1.9,0.8     c4.6,1.9,8.7,4.9,11.8,8.7l4.2,5.2c0,0,0.1,0.1,0.1,0.1c0.5,0.5,0.8,1.2,0.8,2C73.3,74.5,73,75.2,72.6,75.7z M75.9,71.3     c-0.3-0.6-0.7-1.2-1.1-1.7l-4.2-5.1c-3.5-4.3-8-7.6-13.1-9.7l-2.8-1.1c-0.9-0.4-1.9,0-2.4,0.8l-1.9,3c-0.5,0.7-1.3,1.1-2.1,0.8     c-1-0.3-1.6-1.4-1.4-2.4c0.5-2.1,1.3-4.1,2.5-5.9l0.2-0.3c1.1-1.6,3.1-2.3,5-1.7l4.2,1.4c3.8,1.3,7.9,1.5,11.8,0.7l11.3,17.7     L75.9,71.3z M94.3,64.5c-0.1,0.4-0.3,0.8-0.7,1l-5.4,3.4c-0.7,0.5-1.7,0.2-2.2-0.5L72.4,46.9c-0.2-0.4-0.3-0.8-0.2-1.2     c0.1-0.4,0.3-0.8,0.7-1l5.4-3.4c0.3-0.2,0.5-0.2,0.8-0.2c0.1,0,0.2,0,0.3,0c0.4,0.1,0.8,0.3,1,0.7l13.7,21.5     C94.3,63.6,94.4,64.1,94.3,64.5z" />
                      <ellipse
                        transform="matrix(0.8428 -0.5383 0.5383 0.8428 -20.0037 57.3842)"
                        cx="88.2"
                        cy="62.9"
                        rx="2.4"
                        ry="2.4"
                      />
                      <path d="M46.9,28.2c0.1,0.1,0.2,0.2,0.3,0.3c0.7,0.6,1.7,0.5,2.3-0.2l0,0l7.9-9.7c0.5-0.6,0.4-1.4-0.1-1.9     c-0.6-0.5-1.4-0.5-1.9,0.1l-7.2,7.8l-3.6-3.7c-0.5-0.5-1.3-0.6-1.8-0.1c-0.6,0.5-0.7,1.3-0.2,1.9L46.9,28.2z" />
                      <path d="M50,40.4c10,0,18.1-8.1,18.1-18.1c0-10-8.1-18.1-18.1-18.1s-18.1,8.1-18.1,18.1C31.9,32.3,40,40.4,50,40.4z M50,7.4     c8.2,0,14.9,6.7,14.9,14.9c0,8.2-6.7,14.9-14.9,14.9c-8.2,0-14.9-6.7-14.9-14.9C35.1,14.1,41.8,7.4,50,7.4z" />
                    </g>
                  </g>
                </switch>
              </svg>
              {/* <svg
                className="w-16 h-16 mb-3"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  className="fill-current text-blue-600"
                  cx="24"
                  cy="24"
                  r="24"
                />
                <g fill="#FFF" transform="translate(6 7) scale(0.5)">
                  <g transform="translate(17.1 7.8)">
                    <polygon points="4.9 32.8 3 30.9 1.7 32.3 5 35.5 10.8 28.5 9.4 27.3" />
                    <polygon points="4.9 43.5 3 41.6 1.7 43 5 46.2 10.8 39.2 9.4 38" />
                    <path d="M9.1,19.3 C14.2,19.3 18.2,15.2 18.2,10.2 L9.1,10.2 L9.1,1 C4,1 1.77635684e-15,5.1 1.77635684e-15,10.1 C1.77635684e-15,15.1 4.1,19.3 9.1,19.3 Z M7.7,2.5 L7.7,10.2 L7.7,11.6 L9.1,11.6 L16.7,11.6 C16,15.2 12.9,17.9 9.1,17.9 C4.8,17.9 1.4,14.4 1.4,10.2 C1.4,6.4 4.1,3.2 7.7,2.5 Z" />
                    <path d="M10.1 1.77635684e-15L10.1 9.2 19.2 9.2C19.3 4.1 15.2 1.77635684e-15 10.1 1.77635684e-15zM11.5 1.6C14.7 2.2 17.1 4.7 17.7 7.8L11.5 7.8 11.5 1.6zM35.2 1.7L22.5 1.7 22.5 5.8 35.2 5.8 35.2 1.7zM33.8 4.4L23.9 4.4 23.9 3.1 33.8 3.1 33.8 4.4zM35.2 13.7L22.5 13.7 22.5 17.8 35.2 17.8 35.2 13.7zM33.8 16.4L23.9 16.4 23.9 15.1 33.8 15.1 33.8 16.4zM35.2 7.7L22.5 7.7 22.5 11.8 35.2 11.8 35.2 7.7zM33.8 10.4L23.9 10.4 23.9 9.1 33.8 9.1 33.8 10.4z" />
                    <rect width="20.9" height="1.4" x="14.4" y="28.9" />
                    <rect width="20.9" height="1.4" x="14.4" y="32.4" />
                    <rect width="20.9" height="1.4" x="14.4" y="39.6" />
                    <rect width="20.9" height="1.4" x="14.4" y="43.1" />
                  </g>
                  <g transform="translate(11.1)">
                    <path d="M40.8,63 C33.6,63 26.5,63 19.3,63 C14.7,63 10.2,63 5.6,63 C4.3,63 2.9,63 1.6,63 C0.3,63 1.6,63.6 1.5,63.1 C1.1,61.1 1.5,58.6 1.5,56.6 C1.5,52.4 1.5,48.3 1.5,44.1 C1.5,34.1 1.5,24.1 1.5,14.1 C1.5,10.6 1.5,7 1.5,3.5 C1.5,2.7 1.6,1.8 1.5,1 C1.4,0 0.3,1.1 1.1,1 C8.7,0.3 16.7,1 24.3,1 C29.1,1 34,1 38.8,1 C41.3,1 45,0.3 47.5,1 C48.4,1.2 47.1,0.1 47.3,1 C47.4,1.9 47.3,2.9 47.3,3.9 C47.3,7.6 47.3,11.3 47.3,15 C47.3,26 47.3,37 47.3,48 C47.3,50.3 48,54 47.3,56.1 C46.7,58 42.1,61.4 40.2,63.3 C39.6,63.9 41,64.1 41.4,63.7 C44,61.1 48.2,58.5 48.7,55 C49.6,49.4 48.7,42.9 48.7,37.2 C48.7,25 48.7,12.7 48.7,0.5 C48.7,0.1 48.3,0 48,0 C32.2,0 16.5,0 0.8,0 C0.5,0 0,0.2 0,0.6 C0,21.6 0,42.6 0,63.6 C0,64 0.4,64.1 0.7,64.1 C14,64.1 27.4,64.1 40.7,64.1 C41.4,64 41.7,63 40.8,63 Z" />
                    <path d="M41.3,63.2 C41.3,60.8 41.3,58.4 41.3,56 C41,56.2 40.6,56.4 40.3,56.6 C42.7,56.6 45.1,56.6 47.5,56.6 C48,56.6 49,55.8 48.1,55.8 C45.7,55.8 43.3,55.8 40.9,55.8 C40.6,55.8 39.9,56 39.9,56.4 C39.9,58.8 39.9,61.2 39.9,63.6 C39.9,64 41.3,63.7 41.3,63.2 L41.3,63.2 Z" />
                  </g>
                </g>
                {/* <g fill="none" fillRule="evenodd">
                  <circle
                    className="fill-current text-blue-600"
                    cx="24"
                    cy="24"
                    r="24"
                  />
                  <g strokeWidth="2">
                    <path
                      className="stroke-current text-blue-300"
                      d="M26 20l-2.172 2.172a4 4 0 01-5.656 0L18 22l4.929-4.929A7.072 7.072 0 0134 25.7"
                    />
                    <path
                      className="stroke-current text-white"
                      d="M27.266 23.266l3.613 3.613a3 3 0 010 4.242l-1.636 1.636a6 6 0 01-8.486 0l-5.686-5.686A7.072 7.072 0 0120 15"
                    />
                    <path
                      className="stroke-current text-white"
                      d="M30.391 31.609l-3.891-3.89M27.513 33.965l-3.63-3.63"
                    />
                  </g>
                </g>
              </svg> */}
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                Engage Your Stakeholders on the Issues that Matter the Most
              </h4>
              <p className="text-gray-600">
                Engage and build consensus with your stakeholders through
                automated tooling and data management.
              </p>
              <br />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

export default ImpactModelHighlights;
