import React from 'react';

function Clients() {
  return (
    <section>
      <div className="max-w-6xl px-4 mx-auto sm:px-6">
        <div className="py-12 md:pt-4 md:pb-4">
          {/* Row 1 */}
          <div
            className="flex flex-wrap items-center justify-center -m-4 md:-m-8"
            data-aos-id-clients
          >
            {/* Item */}
            <div
              className="m-4 md:m-8"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-clients]"
            >
              <a
                href="https://greentownlabs.com/"
                className="focus:outline-none"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={require('../images/partner_logos/greentown-labs.png').default}
                  width="85"
                  alt="Greentown Labs Logo"
                />
              </a>
            </div>

            {/* Item */}
            <div
              className="m-4 md:m-8"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-clients]"
              data-aos-delay="100"
            >
              <a
                className="focus:outline-none"
                href="https://corporatefinanceinstitute.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={
                    require('../images/partner_logos/corporate-finance-institute.png').default
                  }
                  width="150"
                  alt="Corporate Finance Institute Logo"
                />
              </a>
            </div>

            {/* Item */}
            <div
              className="m-4 md:m-8"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-clients]"
              data-aos-delay="200"
            >
              <a
                className="focus:outline-none"
                href="https://eclipse.vc/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={require('../images/partner_logos/eclipse-ventures.png').default}
                  width="100"
                  alt="Eclipse Ventures Logo"
                />
              </a>
            </div>

            {/* Item */}
            <div
              className="m-4 md:m-8"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-clients]"
              data-aos-delay="300"
            >
              <a
                href="https://thegbi.org/"
                className="focus:outline-none"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={require('../images/partner_logos/gbi_bw.png').default}
                  width="100"
                  alt="GBI Logo"
                />
              </a>
            </div>

            {/* Item */}
            <div
              className="self-end m-4 md:m-8"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-clients]"
              data-aos-delay="400"
            >
              <a
                href="https://tideline.com/"
                className="focus:outline-none"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={require('../images/partner_logos/tideline.png').default}
                  width="150"
                  style={{ marginBottom: '25px' }}
                  alt="Tideline Logo"
                />
              </a>
            </div>
          </div>
          {/* Row 2 */}
          <div
            className="flex flex-wrap items-center justify-center -m-4 md:-m-8"
            data-aos-id-clients
          >
            {/* Item */}
            <div
              className="m-4 md:m-8"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-clients]"
            >
              <a
                className="focus:outline-none"
                href="https://www.autodesk.org/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={require('../images/partner_logos/autodesk.png').default}
                  width="150"
                  alt="Autodesk Foundation Logo"
                />
              </a>
            </div>

            {/* Item */}
            <div
              className="m-4 md:m-8"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-clients]"
              data-aos-delay="100"
            >
              <a
                href="https://primecoalition.org/"
                className="focus:outline-none"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={require('../images/partner_logos/prime.png').default}
                  width="135"
                  alt="Prime Logo"
                />
              </a>
            </div>

            {/* Item */}
            <div
              className="m-4 md:m-8"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-clients]"
              data-aos-delay="200"
            >
              <a
                href="https://www.missionfrommars.ca/"
                className="focus:outline-none"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={require('../images/partner_logos/mars.png').default}
                  width="150"
                  alt="MaRS Logo"
                />
              </a>
            </div>

            {/* Item */}
            <div
              className="m-4 md:m-8"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-clients]"
              data-aos-delay="300"
            >
              <a
                href="https://www.forwardimpact.how/"
                className="focus:outline-none"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={require('../images/partner_logos/frame.png').default}
                  width="100"
                  alt="Project FRAME Logo"
                />
              </a>
            </div>

            {/* Item */}
            <div
              className="flex items-center justify-center col-span-2 py-2 md:col-auto"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-clients]"
              data-aos-delay="400"
            >
              <a
                className="focus:outline-none"
                href="https://www.righthererightnow.global/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={require('../images/partner_logos/righthere.png').default}
                  width="190"
                  alt="Right Here Right Now Logo"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Clients;
