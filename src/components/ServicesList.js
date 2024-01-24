import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';

import { useLocation } from '@reach/router';

import AOS from 'aos';
import Sticky from 'sticky-js';
import { focusHandling } from 'cruip-js-toolkit';

const Data = [
  {
    id: '1',
    title: 'ESG-as-a-Service',
    subject: 'ESG-as-a-Service',
    category: ['Most Popular', 'Advisory Support', 'Corporate'],
    desc: `Plan, implement, and report your ESG performance with the support of a fully staffed, outsourced ESG department.  Address all your ESG objectives and stakeholder pressures with customized and fully managed services led by senior ESG advisors, environmental scientists, and impact management software.`,
  },
  {
    id: '2',
    title: 'Materiality Assessment & ESG Strategic Planning',
    subject: 'Strategy',
    category: ['Advisory Support', 'Corporate', 'Consultants', 'Strategy'],
    desc: `Identify the issues that matter most to your business and key stakeholders.  Develop an actionable plan to manage the risks and opportunities associated with your identified, material issues.`,
  },
  {
    id: '3',
    title: 'ESG Reports, Communications & Disclosures',
    subject: 'Reporting',
    category: [
      'Most Popular',
      'Advisory Support',
      'Corporate',
      'Investor',
      'Consultants',
      'Communications & Reporting',
    ],
    desc: `Communicate your ESG performance with technical accuracy, auditable data, and in alignment with global ESG disclosure regulations, reporting standards, and rating systems.  Communicate with confidence and clarity - from ESG disclosures to investor relations decks to sales and marketing collateral.    `,
  },
  {
    id: '4',
    title: 'ESG Training & Impact Capacity-Building',
    subject: 'Education',
    category: [
      'Advisory Support',
      'Corporate',
      'Investor',
      'Consultants',
      'Governance',
    ],
    desc: `Build organizational capacity to deliver on your ESG commitments and measure your impacts through customized training programs, workshops, and coaching services.  Advance your capabilities at the board, manager, and individual contributor level.`,
  },
  {
    id: '5',
    title: 'Impact Accounting',
    subject: 'Measure',
    category: [
      'Most Popular',
      'Impact Measurement and Management (IMM) Support',
      'Corporate',
      'Investor',
      'Carbon Accounting',
    ],
    desc: `Quantify your company’s existing “impact footprint” across key environmental, social, and governance issues.  From greenhouse gas (GHG) accounting to social impacts, impact accounting provides a systematic framework for measuring and managing your company impacts.`,
  },
  {
    id: '6',
    title: 'Impact Forecasting',
    subject: 'Forecasting',
    category: [
      'Impact Measurement and Management (IMM) Support',
      'Corporate',
      'Investor',
      'Strategy',
    ],
    desc: `Forecast your company’s impacts across a variety of scenarios and impact issues.  Forecast the emission reduction potential (ERP) or future social impacts of a given technology, venture, portfolio, product, or service.`,
  },
  {
    id: '7',
    title: 'Impact Management Development',
    subject: 'Strategy',
    category: [
      'Impact Measurement and Management (IMM) Support',
      'Corporate',
      'Investor',
      'Strategy',
      'Carbon Accounting',
    ],
    desc: `Design, deploy, and scale a systematic approach to measuring and managing your company’s impacts.  Align your impact metrics with global disclosure standards, ESG rating systems, and stakeholder expectations across industries and markets.`,
  },
  {
    id: '8',
    title: 'Impact-as-a-Service',
    subject: 'Measurement',
    category: [
      'Most Popular',
      'Impact Measurement and Management (IMM) Support',
      'Corporate',
    ],
    desc: `Navigate the ocean of ESG-related regulations by identifying the most relevant regulation to you and your goals. Focus on the regulations that are most material to your sector and planning, and manage them on a single platform unified with your ESG strategy.`,
  },
  {
    id: '9',
    title: 'Regulations and Compliance Support',
    subject: 'Education',
    category: ['Most Popular', 'Advisory Support', 'Consultants', 'Strategy'],
    desc: `Advisory services to review and analyze an organization’s existing systems and pair with
    internal and external needs. Typical goals focus on shoring up existing initiatives.`,
  },
];

const uniqueMenuItems = [
  'Most Popular',
  'Advisory Support',
  'Consultants',
  'Investor',
  'Corporate',
  'Carbon Accounting',
  'Communications & Reporting',
  'Governance',
  'Impact Measurement and Management (IMM) Support',
  'Strategy',
];

function ServicesList() {
  const location = useLocation();
  const [item, setItem] = useState();
  const [active, setActive] = useState({});

  const filterItem = (curcat) => {
    const newItem = Data.filter((newVal) => {
      return newVal.category.includes(curcat);
    });
    setItem(newItem);
  };

  const handleFilterChange = (Val) => {
    if (Val === 'All') setItem(Data);
    else {
      filterItem(Val);
    }

    const tempActiveFilters = {};
    uniqueMenuItems.forEach((tag) => {
      tempActiveFilters[tag] = false;
    });
    tempActiveFilters['All'] = false;
    tempActiveFilters[Val] = true;
    setActive(tempActiveFilters);
  };

  useEffect(() => {
    filterItem(uniqueMenuItems[0]);
    const initialActiveState = {};
    uniqueMenuItems.forEach((tag) => {
      initialActiveState[tag] = false;
    });
    initialActiveState['All'] = false;
    initialActiveState['Most Popular'] = true;
    setActive(initialActiveState);
  }, []);

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto';
    window.scroll({ top: 0 });
    document.querySelector('html').style.scrollBehavior = '';
    focusHandling('outline');
  }, [location.pathname]); // triggered on route change

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
    // eslint-disable-next-line no-unused-vars
    const sticky = new Sticky('[data-sticky]');
  });

  return (
    <section>
      <div className="max-w-6xl px-4 mx-auto sm:px-6">
        <div className="py-8 md:py-12">
          {/* Section header */}
          <div className="max-w-3xl pb-12 mx-auto text-center" data-aos-id-tabs>
            <h2
              className="mb-4 h3"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-tabs]"
            >
              Explore some of our services in more depth
            </h2>
            <p
              className="text-xl text-gray-400"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-anchor="[data-aos-id-tabs]"
            >
              We constantly refine our process and keep up to date with the
              latest global and domestic issues impacting investors, startups,
              and public companies.
            </p>
          </div>

          {/* Section content */}
          <div>
            {/* Tabs buttons */}
            <div
              className="flex flex-wrap justify-center mb-10 -m-2"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-anchor="[data-aos-id-tabs]"
            >
              <button
                className={`flex items-center font-medium py-2 px-4 m-2 ${active['All']
                  ? 'bg-blue-600 hover:bg-blue-700'
                  : 'bg-gray-800'
                  } rounded-full group transition duration-500
                                  `}
                onClick={() => handleFilterChange('All')}
              >
                <svg
                  className={`w-4 h-4 fill-current ${active['All'] ? 'text-blue-300' : 'text-blue-600'
                    } mr-2`}
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M13.5 5.5c-.311.001-.62.061-.909.177l-2.268-2.268c.116-.29.176-.598.177-.909a2.5 2.5 0 00-5 0c.001.311.061.62.177.909L3.409 5.677A2.473 2.473 0 002.5 5.5a2.5 2.5 0 000 5c.311-.001.62-.061.909-.177l2.268 2.268c-.116.29-.176.598-.177.909a2.5 2.5 0 105 0 2.473 2.473 0 00-.177-.909l2.268-2.268c.29.116.598.176.909.177a2.5 2.5 0 100-5zM8 11c-.311.001-.62.061-.909.177L4.823 8.909a2.423 2.423 0 000-1.818l2.268-2.268a2.423 2.423 0 001.818 0l2.268 2.268a2.423 2.423 0 000 1.818l-2.268 2.268A2.473 2.473 0 008 11z" />
                </svg>
                <span
                  className={`${active['All']
                    ? 'text-gray-200 group-hover:text-gray-100'
                    : 'text-gray-400 group-hover:text-gray-200'
                    } transition-colors duration-150 ease-in-out`}
                >
                  All
                </span>
              </button>
              {uniqueMenuItems
                .sort((a, b) => Object.keys[a] - Object.keys[a])
                .map((Val, id) => {
                  return (
                    <button
                      active
                      className={`flex items-center font-medium py-2 px-4 m-2 ${active[Val]
                        ? 'bg-blue-600 hover:bg-blue-700'
                        : 'bg-gray-800'
                        } rounded-full group transition duration-500
                  `}
                      onClick={() => handleFilterChange(Val)}
                      key={id}
                    >
                      <svg
                        className={`w-4 h-4 fill-current ${active[Val] ? 'text-blue-300' : 'text-blue-600'
                          } mr-2`}
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M13.5 5.5c-.311.001-.62.061-.909.177l-2.268-2.268c.116-.29.176-.598.177-.909a2.5 2.5 0 00-5 0c.001.311.061.62.177.909L3.409 5.677A2.473 2.473 0 002.5 5.5a2.5 2.5 0 000 5c.311-.001.62-.061.909-.177l2.268 2.268c-.116.29-.176.598-.177.909a2.5 2.5 0 105 0 2.473 2.473 0 00-.177-.909l2.268-2.268c.29.116.598.176.909.177a2.5 2.5 0 100-5zM8 11c-.311.001-.62.061-.909.177L4.823 8.909a2.423 2.423 0 000-1.818l2.268-2.268a2.423 2.423 0 001.818 0l2.268 2.268a2.423 2.423 0 000 1.818l-2.268 2.268A2.473 2.473 0 008 11z" />
                      </svg>
                      <span
                        className={`${active[Val]
                          ? 'text-gray-200 group-hover:text-gray-100'
                          : 'text-gray-400 group-hover:text-gray-200'
                          } transition-colors duration-150 ease-in-out`}
                      >
                        {Val}
                      </span>
                    </button>
                  );
                })}
            </div>
            {item &&
              item
                .sort((a, b) => {
                  // let fa = a.title.toLowerCase(),
                  //   fb = b.title.toLowerCase();
                  let fa = a.id,
                    fb = b.id;

                  if (fa < fb) {
                    return -1;
                  }
                  if (fa > fb) {
                    return 1;
                  }
                  return 0;
                })
                .map((Val, index) => {
                  return (
                    <div
                      className="relative flex flex-col mt-4"
                      data-aos="fade-up"
                      key={index}
                    >
                      <article className="relative" key={Val.id}>
                        <div className="relative px-6 py-4 bg-slate-200 md:py-8 md:pr-16 ">
                          <h4 className="mb-2 h3">{Val.title}</h4>
                          <p className="text-lg text-gray-600">{Val.desc}</p>
                          <Link
                            className="mt-6 text-white bg-blue-600 btn-sm hover:bg-blue-700"
                            to={`/contact/`}
                            state={{ subject: Val.subject ? Val.subject : "" }}
                          >
                            <span className="text-sm">Learn more</span>
                            <svg
                              className="w-3 h-3 ml-2 text-blue-400 fill-current shrink-0"
                              viewBox="0 0 12 12"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M6 5H0v2h6v4l6-5-6-5z" />
                            </svg>
                          </Link>
                        </div>
                      </article>
                    </div>
                  );
                })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesList;
