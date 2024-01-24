import React from "react";

function WorldVisual() {
  return (
    <section className="pt-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div>
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="h1 mb-4">Our Impact</h1>
            <p className="text-xl text-gray-600">
              Rho Impact is committed to the pursuit of making a positive impact on the world.
              We freely contribute in a number of ways to methodological development,
              thought leadership, and mentorship to strengthen the broader impact community.
            </p>
          </div>

          {/* World illustration */}
          <div className="flex flex-col items-center mt-16 mb-20 md:pt-20 md:pb-16">
            <div className="relative">
              {/* Halo effect */}
              <svg
                className="absolute inset-0 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                width="800"
                height="800"
                viewBox="0 0 800 800"
                style={{ maxWidth: "200%" }}
                xmlns="http://www.w3.org/2000/svg"
              >
                <g className="fill-current text-gray-400 opacity-75">
                  <circle className="pulse" cx="400" cy="400" r="200" />
                  <circle className="pulse pulse-1" cx="400" cy="400" r="200" />
                  <circle className="pulse pulse-2" cx="400" cy="400" r="200" />
                </g>
              </svg>
              {/* White box */}
              {/* <svg
                className="absolute w-32 h-auto rounded-full shadow-xl"
                viewBox="0 0 128 48"
                style={{ width: "32%", top: "20%", right: "-16%" }}
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  className="fill-current text-white"
                  width="128"
                  height="48"
                  rx="24"
                />
              </svg> */}

              {/* Globe image */}
              <img
                className="relative rounded-full shadow-xl"
                src={require("../images/planet.png").default}
                width="400"
                height="400"
                alt="Planet"
              />
              {/* Static dots */}
              <svg
                className="absolute top-0 w-full h-auto"
                viewBox="0 0 400 400"
                style={{ left: "12%" }}
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <filter
                    x="-41.7%"
                    y="-34.2%"
                    width="183.3%"
                    height="185.6%"
                    filterUnits="objectBoundingBox"
                    id="world-ill-a"
                  >
                    <feOffset
                      dy="4"
                      in="SourceAlpha"
                      result="shadowOffsetOuter1"
                    />
                    <feGaussianBlur
                      stdDeviation="6"
                      in="shadowOffsetOuter1"
                      result="shadowBlurOuter1"
                    />
                    <feColorMatrix
                      values="0 0 0 0 0 0 0 0 0 0.439215686 0 0 0 0 0.956862745 0 0 0 0.32 0"
                      in="shadowBlurOuter1"
                    />
                  </filter>
                  <filter
                    x="-83.3%"
                    y="-68.5%"
                    width="266.7%"
                    height="271.2%"
                    filterUnits="objectBoundingBox"
                    id="world-ill-c"
                  >
                    <feOffset
                      dy="4"
                      in="SourceAlpha"
                      result="shadowOffsetOuter1"
                    />
                    <feGaussianBlur
                      stdDeviation="6"
                      in="shadowOffsetOuter1"
                      result="shadowBlurOuter1"
                    />
                    <feColorMatrix
                      values="0 0 0 0 0 0 0 0 0 0.439215686 0 0 0 0 0.956862745 0 0 0 0.32 0"
                      in="shadowBlurOuter1"
                    />
                  </filter>
                  <filter
                    x="-7.3%"
                    y="-23.8%"
                    width="114.5%"
                    height="147.6%"
                    filterUnits="objectBoundingBox"
                    id="world-ill-e"
                  >
                    <feGaussianBlur stdDeviation="2" in="SourceGraphic" />
                  </filter>
                  <ellipse
                    id="world-ill-b"
                    cx="51"
                    cy="175.402"
                    rx="24"
                    ry="23.364"
                  />
                  <ellipse
                    id="world-ill-d"
                    cx="246"
                    cy="256.201"
                    rx="12"
                    ry="11.682"
                  />
                  <linearGradient
                    x1="50%"
                    y1="0%"
                    x2="50%"
                    y2="100%"
                    id="world-ill-f"
                  >
                    <stop stopColor="#0070F4" stopOpacity="0" offset="0%" />
                    <stop
                      stopColor="#0070F4"
                      stopOpacity=".64"
                      offset="52.449%"
                    />
                    <stop stopColor="#0070F4" stopOpacity="0" offset="100%" />
                  </linearGradient>
                </defs>
                <g
                  transform="translate(0 -.818)"
                  fill="none"
                  fillRule="evenodd"
                >
                  <use fill="#0070F4" xlinkHref="#world-ill-d" />
                  <ellipse
                    fillOpacity=".32"
                    fill="#0070F4"
                    cx="293"
                    cy="142.303"
                    rx="8"
                    ry="7.788"
                  />
                  <ellipse
                    fillOpacity=".64"
                    fill="#0070F4"
                    cx="250"
                    cy="187.083"
                    rx="6"
                    ry="5.841"
                  />
                  <ellipse
                    fillOpacity=".64"
                    fill="#0070F4"
                    cx="13"
                    cy="233.811"
                    rx="2"
                    ry="1.947"
                  />
                  <ellipse
                    fill="#0070F4"
                    cx="29"
                    cy="114.072"
                    rx="2"
                    ry="1.947"
                  />
                  <path
                    d="M258 256.2l87-29.204"
                    stroke="#666"
                    strokeWidth="2"
                    opacity=".16"
                    filter="url(#world-ill-e)"
                  />
                  <path
                    d="M258 251.333c111.333-40.237 141-75.282 89-105.136M136 103.364c66.667 4.543 104.667 32.45 114 83.72"
                    stroke="url(#world-ill-f)"
                    strokeWidth="2"
                    strokeDasharray="2"
                  />
                </g>
              </svg>

              {/* Dynamic dots */}
              <svg
                className="absolute max-w-full"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                style={{ width: "12%", top: "45%", left: "50%" }}
                xmlns="http://www.w3.org/2000/svg"
              >
                <g className="fill-current text-blue-500">
                  <circle
                    className="pulse pulse-mini pulse-1"
                    cx="24"
                    cy="24"
                    r="8"
                  />
                  <circle
                    className="pulse pulse-mini pulse-2"
                    cx="24"
                    cy="24"
                    r="8"
                  />
                  <circle cx="24" cy="24" r="8" />
                </g>
              </svg>
              <svg
                className="absolute max-w-full"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                style={{ width: "12%", top: "19%", left: "46%" }}
                xmlns="http://www.w3.org/2000/svg"
              >
                <g className="fill-current text-blue-500">
                  <circle className="pulse pulse-mini" cx="24" cy="24" r="8" />
                  <circle
                    className="pulse pulse-mini pulse-2"
                    cx="24"
                    cy="24"
                    r="8"
                  />
                  <circle cx="24" cy="24" r="8" />
                </g>
              </svg>

              {/* Avatars */}
              <img
                className="absolute max-w-full transform animate-float"
                src={require("../images/planet-avatar-03.png").default}
                width="287"
                height="86"
                alt="Planet avatar 03"
                style={{ width: "71.75%", bottom: "2%", right: "-38%" }}
              />
              <img
                className="absolute max-w-full transform animate-float animation-delay-600"
                src={require("../images/planet-avatar-08.png").default}
                width="256"
                height="126"
                alt="Planet avatar 04"
                style={{ width: "54%", top: "45%", left: "65%" }}
              />
              <img
                className="absolute max-w-full transform animate-float animation-delay-1000"
                src={require("../images/planet-avatar-04.png").default}
                width="256"
                height="126"
                alt="Planet avatar 04"
                style={{ width: "64%", top: "20%", left: "28%" }}
              />
              <img
                className="absolute max-w-full transform animate-float animation-delay-1000"
                src={require("../images/planet-avatar-05.png").default}
                width="296"
                height="78"
                alt="Planet avatar 05"
                style={{ width: "74%", top: "-5%", right: "-22%" }}
              />
              <img
                className="absolute max-w-full transform animate-float animation-delay-1000"
                src={require("../images/planet-avatar-06.png").default}
                width="296"
                height="78"
                alt="Planet avatar 05"
                style={{ width: "74%", bottom: "8%", left: "-20%" }}
              />
              <img
                className="absolute max-w-full transform animate-float animation-delay-1000"
                src={require("../images/planet-avatar-07.png").default}
                width="296"
                height="78"
                alt="Planet avatar 05"
                style={{ width: "74%", bottom: "46%", left: "-38%" }}
              />

              {/* White box */}
              {/* <svg
                className="absolute w-32 h-auto rounded-full shadow-xl"
                viewBox="0 0 128 48"
                style={{ width: "32%", top: "35%", left: "-25%" }}
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  className="fill-current text-white"
                  width="128"
                  height="48"
                  rx="24"
                />
              </svg> */}

              {/* White box */}
              {/* <svg
                className="absolute w-32 h-auto rounded-full shadow-xl"
                viewBox="0 0 128 48"
                style={{ width: "32%", top: "52%", right: "-41%" }}
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  className="fill-current text-white"
                  width="128"
                  height="48"
                  rx="24"
                />
              </svg> */}

              {/* Rho icon */}
              <img
                className="absolute max-w-full w-16 h-auto rounded-full shadow-xl"
                src={require("../images/gbi.png").default}
                width="256"
                height="126"
                alt="Planet avatar 04"
                style={{ width: "16%", top: "7%", right: "-12%" }}
              />

              {/* Columbia icon */}
              <img
                className="absolute max-w-full w-16 h-auto rounded-full shadow-xl"
                src={require("../images/columbia.png").default}
                alt="Planet avatar 04"
                style={{ width: "16%", bottom: "40%", left: "20%" }}
              />
              {/* CRANE icon */}
              <img
                className="absolute max-w-full w-16 h-auto rounded-full shadow-xl"
                src={require("../images/crane_logo.png").default}
                width="256"
                height="126"
                alt="Planet avatar 04"
                style={{ width: "10%", bottom: "28%", left: "40%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorldVisual;
