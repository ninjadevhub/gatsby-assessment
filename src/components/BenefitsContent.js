import React from 'react';

import TeamBenefitsCollage from '../images/team-benefits-collage.png';

function BenefitsContent() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h3 className="h3 font-playfair-display text-slate-800 mb-3">
              Impact both at home and at work
            </h3>
            <p className="text-xl text-slate-500">
              Rho Impact provides its employees the ease they require to balance
              the responsibilities of both their work and home lives.
              Flexibility is a key pillar to work-life balance, and we’ve
              implemented a culture and benefits to support what flexibility
              means to you.
            </p>
          </div>
          {/* <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h3 className="h3 font-playfair-display text-slate-800 mb-3">
            Why Rho Impact?
            </h3>
            <p className="text-xl text-slate-500">
            We are proud to bring together people of many backgrounds and academic credentials with hobbies and passions that vary widely across the Rho family. We recognize the fundamental importance of working collaboratively and promote a culture of teamwork. We place a lot of trust on our employees to reach remarkable results.
            </p>
          </div>
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h3 className="h3 font-playfair-display text-slate-800 mb-3">
              Join our growing team
            </h3>
            <p className="text-xl text-slate-500 mb-2">
              Be an early member of our growing startup team. Have the freedom
              to impact decisions and see your work have direct results on the
              climate and energy tech industry.
            </p>
            <p className="text-xl text-slate-500">
              As a growing team, there is continuous access to career
              advancement opportunities &amp; opportunities to development new
              skills
            </p>
          </div> */}

          {/* Section content */}
          <div className="max-w-xl mx-auto md:max-w-none flex flex-col md:flex-row md:items-center md:space-x-8 lg:space-x-16 xl:space-x-18 space-y-8 space-y-reverse md:space-y-0">
            {/* Content */}
            <div
              className="md:w-7/12 lg:w-1/2 order-1 md:order-none"
              data-aos="fade-right"
            >
              <ul className="space-y-6">
                <li>
                  <div className="flex items-center mb-4">
                    <svg className="h-4 w-4 shrink-0 fill-current text-green-400 mr-3">
                      <path d="M15.722 4.008C14.408 1.214 10.954-.635 7.318.203 5.6.596 4.072 1.561 2.919 2.757A10.57 10.57 0 0 0 .484 6.93C.03 8.458-.173 10.035.18 11.764c.191.862.518 1.683 1.146 2.479a4.876 4.876 0 0 0 2.256 1.522c1.635.469 3.156.192 4.41-.439 1.242-.615 2.298-1.769 2.494-3.094.094-.656-.537-.657-.69-.18-.781 2.126-3.715 2.534-5.265 1.579-1.568-.922-1.185-3.068-.294-4.801.89-1.729 2.454-3.02 3.92-3.338.376-.098.714-.121 1.026-.098.324.018.658.074.98.188.65.2 1.23.591 1.618 1 .27.3.575.386 1.002.461.436.061.95.117 1.499.045.535-.073 1.06-.287 1.41-.807.345-.504.462-1.348.03-2.273" />
                    </svg>
                    <div className="h2 font-playfair-display text-slate-800">
                      Flexible Working Environment
                    </div>
                  </div>
                  <div className="text-slate-500 text-lg mb-4">
                    Fully remote work with Flextime
                  </div>
                  <div className="text-slate-500 text-lg">
                    Flexible Paid Well-being Leave: Thoughtfully designed paid
                    time-off that gives teammates the autonomy to manage their
                    time away from the workplace as they see fit (vacation,
                    holidays, personal days)
                  </div>
                </li>
                <li>
                  <div className="flex items-center mb-4">
                    <svg className="h-4 w-4 shrink-0 fill-current text-blue-500 mr-3">
                      <path d="M15.722 4.008C14.408 1.214 10.954-.635 7.318.203 5.6.596 4.072 1.561 2.919 2.757A10.57 10.57 0 0 0 .484 6.93C.03 8.458-.173 10.035.18 11.764c.191.862.518 1.683 1.146 2.479a4.876 4.876 0 0 0 2.256 1.522c1.635.469 3.156.192 4.41-.439 1.242-.615 2.298-1.769 2.494-3.094.094-.656-.537-.657-.69-.18-.781 2.126-3.715 2.534-5.265 1.579-1.568-.922-1.185-3.068-.294-4.801.89-1.729 2.454-3.02 3.92-3.338.376-.098.714-.121 1.026-.098.324.018.658.074.98.188.65.2 1.23.591 1.618 1 .27.3.575.386 1.002.461.436.061.95.117 1.499.045.535-.073 1.06-.287 1.41-.807.345-.504.462-1.348.03-2.273" />
                    </svg>
                    <div className="h2 font-playfair-display text-slate-800">
                      Family support and care
                    </div>
                  </div>
                  <div className="text-slate-500 text-lg mb-4">
                    Sick Leave: Generous paid time-off to care for you and your
                    family in times of medical needs and illness recovery.
                    Commiserate with world-class benchmarks.
                  </div>
                  <div className="text-slate-500 text-lg">
                    Paid family leave: We are here to support your family and
                    that includes excellent benefits that allow for parental
                    leave and baby bonding leave
                  </div>
                </li>
                <li>
                  <div className="flex items-center mb-4">
                    <svg className="h-4 w-4 shrink-0 fill-current text-slate-400 mr-3">
                      <path d="M15.722 4.008C14.408 1.214 10.954-.635 7.318.203 5.6.596 4.072 1.561 2.919 2.757A10.57 10.57 0 0 0 .484 6.93C.03 8.458-.173 10.035.18 11.764c.191.862.518 1.683 1.146 2.479a4.876 4.876 0 0 0 2.256 1.522c1.635.469 3.156.192 4.41-.439 1.242-.615 2.298-1.769 2.494-3.094.094-.656-.537-.657-.69-.18-.781 2.126-3.715 2.534-5.265 1.579-1.568-.922-1.185-3.068-.294-4.801.89-1.729 2.454-3.02 3.92-3.338.376-.098.714-.121 1.026-.098.324.018.658.074.98.188.65.2 1.23.591 1.618 1 .27.3.575.386 1.002.461.436.061.95.117 1.499.045.535-.073 1.06-.287 1.41-.807.345-.504.462-1.348.03-2.273" />
                    </svg>
                    <div className="h2 font-playfair-display text-slate-800">
                      Health and Wellness
                    </div>
                  </div>
                  <div className="text-slate-500 text-lg mb-4">
                    Our Rho family’s health and well-being is a priority. We
                    provide medical and dental insurance for employees and
                    dependents. Rho Impact also offers a healthcare flexible
                    spending account (FSA) and a health savings account (HSA) to
                    help cut your taxes and help you save money on medical,
                    dental, vision and other qualified medical expenses
                  </div>
                  <div className="text-slate-500 text-lg">
                    401(k): Tax-advantaged retirement-savings
                  </div>
                </li>
              </ul>
            </div>

            {/* Image */}
            <div className="md:w-5/12 lg:w-1/2" data-aos="fade-left">
              <img
                className="mx-auto md:max-w-none"
                src={TeamBenefitsCollage}
                width="540"
                height="540"
                alt="Rho Impact Team"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BenefitsContent;
