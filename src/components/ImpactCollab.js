import React from 'react';
import { Link } from 'gatsby';
import Accordion from '../utils/Accordion';

function ImpactCollab() {
  return (
    <section>
      <div className="max-w-6xl px-4 mx-auto sm:px-6">
        <div className="py-12 border-t border-gray-200 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl pb-20 mx-auto text-center">
            <h4 className="h4">
              Some of our contributions, pro bono work, and volunteer activities:
            </h4>
          </div>

          {/* Faqs */}
          <ul className="max-w-3xl pl-12 mx-auto">
            <Accordion title="CRANE Tool">
              Rho Impact continues to lead the development, implementation, and
              maintenance of the Carbon Reduction Assessment for New
              Enterprises (CRANE) tool in collaboration with the{' '}
              <a
                className="font-medium text-blue-500 hover:text-blue-700"
                href="https://primecoalition.org/"
                target="_blank"
                rel="noreferrer"
              >Prime Coalition</a>.
              <Link
                className="font-medium text-blue-500 hover:text-blue-700"
                to="/crane-tool/"
              >
                {' '}
                CRANE{' '}
              </Link>{' '}
              is setting the bar as the open-source tool for
              assessing the carbon reduction potential of new climate technologies.
            </Accordion>

            <Accordion title="Project FRAME">
              Rho Impact is a domain expert and methodology development
              collaborator for the Prime Coalition's{' '}
              <a
                className="font-medium text-blue-500 hover:text-blue-700"
                href="https://projectframe.how/"
                target="_blank"
                rel="noreferrer"
              >
                {' '}
                Project FRAME
              </a>
              , an investor-led initiative focused on building frameworks and a
              platform for collaboration to help climate investors better assess
              the impact of their innovations on future greenhouse gas emissions.
            </Accordion>

            <Accordion title="CDP (Carbon Disclosure Project)">
              Rho Impact supported
              <a
                className="font-medium text-blue-500 hover:text-blue-700"
                href="https://www.cdp.net/en/campaigns/emerging-climate-technology-initiative"
                target="_blank"
                rel="noreferrer"
              >
                {' '}
                CDP's Emerging Climate Technology Initiative
              </a>
              , an initiative from the largest emissions disclosure entity in the world.
              Rho Impact specifically contributed to the development of a new framework
              to quantify the climate value of climate-tech investments.
            </Accordion>

            <Accordion title="NY Bar Association's ESG Committee">
              Rho Impact is represented on the{' '}
              <a
                className="font-medium text-blue-500 hover:text-blue-700"
                href="https://nysba.org/committees/esg-committee/"
                target="_blank"
                rel="noreferrer"
              >NY Bar Association's ESG Committee
              </a>, working alongside global law firms to advance ESG best practices in the legal field.
            </Accordion>

            <Accordion title="Vermont Businesses for Social Responsibility (VBSR)">
              Rho Impact is represented on the board of directors for{' '}
              <a
                className="font-medium text-blue-500 hover:text-blue-700"
                href="https://vbsr.org/"
                target="_blank"
                rel="noreferrer"
              >
                {' '}
                VBSR,
              </a>{' '}
              the country's largest and oldest sustainable business trade
              association.
            </Accordion>

            <Accordion title="United Nations 'Right Here Right Now' Global Climate Alliance on Human Rights">
              Rho Impact supported the ideation, development, and formalization of the
              Alliance's focus areas and global initiatives.  Rho Impact also participated
              in brand engagement and coalition-building on behalf of the RHRN Alliance.
            </Accordion>
            <Accordion title="Green Building Initiative (GBI) ESG subcommittee">
              Rho Impact is represented on the{' '}
              <a
                className="font-medium text-blue-500 hover:text-blue-700"
                href="https://thegbi.org/"
                target="_blank"
                rel="noreferrer"
              >
                {' '}
                Green Building Initiative's
              </a>{' '}
              ESG subcommittee for the Green Globes Green Building
              Certification.
            </Accordion>

            <Accordion title="Weve Accelerator Mentorship">
              Rho Impact offers pro-bono mentorship to international start-ups entering the
              United States by-way of New York City's{' '}
              <a
                className="font-medium text-blue-500 hover:text-blue-700"
                href="https://weveacceleration.com/"
                target="_blank"
                rel="noreferrer"
              >Weve Accelerator</a>.
            </Accordion>

            <Accordion title="Element 46 Accelerator">
              The Rho impact advisory team is proud to offer mentorship for
              start-ups attending the{' '}
              <a
                className="font-medium text-blue-500 hover:text-blue-700"
                href="https://www.element46.org/mentors-list"
                target="_blank"
                rel="noreferrer"
              >Element 46 accelerator</a>.
              Our team of advisors supports founders in understanding, developing, and
              implementing ESG factors and strategies, helping them to reach
              their full potential.
            </Accordion>

            <Accordion title="Columbia University - Data Science Course, “Practical Applications of Data Science Methods in Industry”  (2019-2020)">
              Rho Impact staff designed and taught a course at Columbia
              University based on experiences in the field in leveraging data
              science to address real world problems.
            </Accordion>

            <span
              className="block border-t border-gray-200"
              aria-hidden="true"
            ></span>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ImpactCollab;
