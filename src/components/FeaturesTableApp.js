import React from 'react';
import Tooltip from '../utils/Tooltip';

function FeaturesTableApp() {
  return (
    <section>
      <div className="max-w-6xl px-4 mx-auto sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="pb-12">
            <h2 className="h2">Compare Features</h2>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-b border-gray-200 table-auto">
              {/* Table header */}
              <thead>
                <tr className="text-base border-t border-gray-200 sm:text-lg">
                  <th className="py-4 pr-2 text-left text-bold min-w-48">
                    Features By Tier
                  </th>
                  <th className="px-2 py-4 text-center text-bold bg-slate-200">
                    Self-Service
                  </th>
                  <th className="px-2 py-4 text-center text-bold">Starter</th>
                  <th className="px-2 py-4 text-center text-bold">
                    Scale
                  </th>
                </tr>
              </thead>
              {/* Table body */}
              <tbody>
                {/* Title Row */}
                {/* <tr className="border-t border-gray-200">
                  <div className="py-4">
                    <h3 className="text-lg font-black">Program Management</h3>
                    <p className="text-purple-500">
                      Everything you need to launch an ESG program
                    </p>
                  </div>
                  <td className="bg-slate-200"></td>
                </tr> */}

                {/* Row */}
                {/* <tr className="border-t border-gray-200">
                                    <td className="py-4 pr-2 text-sm sm:text-base">
                                        <div className="font-medium" style={{ display: 'flex' }}>
                                            Support
                                        </div>
                                    </td>
                                    <td className="px-2 py-4 text-sm font-medium text-center bg-slate-200">
                                        5 Business Days
                                    </td>
                                    <td className="px-2 py-4 text-sm font-medium text-center">
                                        9-5 Chat
                                    </td>
                                    <td className="py-4 pl-2 text-sm font-medium text-center">
                                        Dedicated Team
                                    </td>
                                </tr> */}
                {/* Row */}
                <tr className="border-t border-gray-200">
                  <td className="py-4 pr-2 text-sm sm:text-base">
                    <div className="font-medium" style={{ display: 'flex' }}>
                      End-to-End ESG Program Management
                      <Tooltip data-tooltip-placement="top">
                        <div className="text-xs text-center whitespace-nowrap">
                          Preloaded ESG program implementation tasks, documents,
                          presentations, and templates for
                          key steps in implementing ESG programs at your
                          organization.
                        </div>
                      </Tooltip>
                    </div>
                  </td>
                  <td className="px-2 py-4 text-sm font-medium text-center bg-slate-200">
                    Management
                  </td>
                  <td className="px-2 py-4 text-sm font-medium text-center">
                    Management &amp; Tracking
                  </td>
                  <td className="py-4 pl-2 text-sm font-medium text-center">
                    Management &amp; Tracking
                  </td>
                </tr>
                {/* Row */}
                <tr className="border-t border-gray-200">
                  <td className="py-4 pr-2 text-sm sm:text-base">
                    <div className="font-medium" style={{ display: 'flex' }}>
                      ESG Implementation Resources
                      <Tooltip data-tooltip-placement="top">
                        <div className="text-xs text-center whitespace-nowrap">
                          Preloaded documents, presentations, and templates for
                          key steps in implementing ESG programs at your
                          organization.
                        </div>
                      </Tooltip>
                    </div>
                  </td>
                  <td className="px-2 py-4 text-sm font-medium text-center bg-slate-200">
                    Educational Resources
                  </td>
                  <td className="px-2 py-4 text-sm font-medium text-center">
                    Educational Resources &amp; Templates
                  </td>
                  <td className="py-4 pl-2 text-sm font-medium text-center">
                    Educational Resources &amp; Templates
                  </td>
                </tr>
                {/* Row */}
                <tr className="border-t border-gray-200">
                  <td className="py-4 pr-2 text-sm sm:text-base">
                    <div className="font-medium" style={{ display: 'flex' }}>
                      Employee Training Modules
                      <Tooltip data-tooltip-placement="top">
                        <div className="text-xs text-center whitespace-nowrap">
                          E-Learning modules on ESG 101, ESG Fundamentals, and
                          training videos on how to use Gemini.
                        </div>
                      </Tooltip>
                    </div>
                  </td>
                  <td className="px-2 py-4 text-sm font-medium text-center bg-slate-200">
                    View
                  </td>
                  <td className="px-2 py-4 text-sm font-medium text-center">
                    Track
                  </td>
                  <td className="py-4 pl-2 text-sm font-medium text-center">
                    Track
                  </td>
                </tr>
                {/* Row */}
                <tr className="border-t border-gray-200">
                  <td className="py-4 pr-2 text-sm sm:text-base">
                    <div className="font-medium" style={{ display: 'flex' }}>
                      Core ESG Policies
                      <Tooltip data-tooltip-placement="top">
                        <div className="text-xs text-center whitespace-nowrap">
                          Preloaded templates and step-by-step guidance in
                          developing core ESG policies - Use the templates,
                          upload your own policies, and assign and track policy
                          training.
                        </div>
                      </Tooltip>
                    </div>
                  </td>
                  <td className="px-2 py-4 text-sm font-medium text-center bg-slate-200">
                    View
                  </td>
                  <td className="px-2 py-4 text-sm font-medium text-center">
                    View, Edit &amp; Track
                  </td>
                  <td className="py-4 pl-2 text-sm font-medium text-center">
                    View, Edit &amp; Track
                  </td>
                </tr>
                {/* Row */}
                <tr className="border-t border-gray-200">
                  <td className="py-4 pr-2 text-sm sm:text-base">
                    <div className="font-medium" style={{ display: 'flex' }}>
                      Data Storage
                      <Tooltip data-tooltip-placement="top">
                        <div className="text-xs text-center whitespace-nowrap">
                          Store all your critical Impact and ESG data in one
                          place - templates to guide and streamline critical
                          processes and tasks.
                        </div>
                      </Tooltip>
                    </div>
                  </td>
                  <td className="px-2 py-4 text-sm font-medium text-center bg-slate-200">
                    10 GB
                  </td>
                  <td className="px-2 py-4 text-sm font-medium text-center">
                    100 GB
                  </td>
                  <td className="py-4 pl-2 text-sm font-medium text-center">
                    1,000 GB
                  </td>
                </tr>
                {/* Row */}
                <tr className="border-t border-gray-200">
                  <td className="py-4 pr-2 text-sm sm:text-base">
                    <div className="font-medium" style={{ display: 'flex' }}>
                      Impact Evidence Management
                      <Tooltip data-tooltip-placement="top">
                        <div className="text-xs text-center whitespace-nowrap">
                          A digital binder to house all your Impact and ESG
                          materials in one accessible location.
                          <br />
                          Provides a central repository for managing,
                          inventorying and tracking evidence needed for
                          baselining.
                        </div>
                      </Tooltip>
                    </div>
                  </td>
                  <td className="px-2 py-4 text-sm font-medium text-center bg-slate-200">
                    <svg
                      className="inline-flex w-3 h-3 text-green-500 fill-current"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                  </td>
                  <td className="px-2 py-4 text-sm font-medium text-center">
                    <svg
                      className="inline-flex w-3 h-3 text-green-500 fill-current"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                  </td>
                  <td className="py-4 pl-2 text-sm font-medium text-center">
                    <svg
                      className="inline-flex w-3 h-3 text-green-500 fill-current"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                  </td>
                </tr>
                {/* Row */}
                <tr className="border-t border-gray-200">
                  <td className="py-4 pr-2 text-sm sm:text-base">
                    <div className="font-medium" style={{ display: 'flex' }}>
                      Dashboard Reporting
                      <Tooltip data-tooltip-placement="top">
                        <div className="text-xs text-center whitespace-nowrap">
                          A visualized summary of your ESG implementation
                          process - including progress achieved and outstanding
                          tasks for both your company and internal working
                          groups.
                        </div>
                      </Tooltip>
                    </div>
                  </td>
                  <td className="px-2 py-4 text-sm font-medium text-center bg-slate-200">
                    <svg
                      className="inline-flex w-3 h-3 text-green-500 fill-current"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                  </td>
                  <td className="px-2 py-4 text-sm font-medium text-center">
                    <svg
                      className="inline-flex w-3 h-3 text-green-500 fill-current"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                  </td>
                  <td className="py-4 pl-2 text-sm font-medium text-center">
                    <svg
                      className="inline-flex w-3 h-3 text-green-500 fill-current"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                  </td>
                </tr>
                {/* Tasks Row */}
                <tr className="border-t border-gray-200">
                  <td className="py-4 pr-2 text-sm sm:text-base">
                    <div className="font-medium" style={{ display: 'flex' }}>
                      Assignable ESG Program Tasks
                      <Tooltip data-tooltip-placement="top">
                        <div className="text-xs text-center whitespace-nowrap">
                          {' '}
                          Step-by-step guidance on the process and key tasks for
                          each phase - assign tasks and monitor progress across
                          your enterprise.
                        </div>
                      </Tooltip>
                    </div>
                  </td>
                  <td className="px-2 py-4 text-sm font-medium text-center bg-slate-200">
                    <svg
                      className="inline-flex w-3 h-3 text-green-500 fill-current"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                  </td>
                  <td className="px-2 py-4 text-sm font-medium text-center">
                    <svg
                      className="inline-flex w-3 h-3 text-green-500 fill-current"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                  </td>
                  <td className="py-4 pl-2 text-sm font-medium text-center">
                    <svg
                      className="inline-flex w-3 h-3 text-green-500 fill-current"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                  </td>
                </tr>
                {/* Title Row */}
                {/* <tr className="border-t border-gray-200">
                  <div className="py-4">
                    <h3 className="text-lg font-black">Tools</h3>
                    <p className="text-purple-500">
                      All the tools you need to accelerate your ESG performance
                    </p>
                  </div>
                  <td className="bg-slate-200"></td>
                </tr> */}

                {/* Row */}
                <tr className="border-t border-gray-200">
                  <td className="py-4 pr-2 text-sm sm:text-base">
                    <div className="font-medium" style={{ display: 'flex' }}>
                      Stakeholder Surveys
                      <Tooltip data-tooltip-placement="top">
                        <div className="text-xs text-center whitespace-nowrap">
                          Automated surveying and data analysis for engaging,
                          building consensus with, and aligning efforts with
                          your stakeholders.
                        </div>
                      </Tooltip>
                    </div>
                  </td>
                  <td className="px-2 py-4 text-sm font-medium text-center bg-slate-200">
                    -
                  </td>
                  <td className="px-2 py-4 text-sm font-medium text-center">
                    <svg
                      className="inline-flex w-3 h-3 text-green-500 fill-current"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                  </td>
                  <td className="py-4 pl-2 text-sm font-medium text-center">
                    <svg
                      className="inline-flex w-3 h-3 text-green-500 fill-current"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                  </td>
                </tr>
                {/* Row */}
                <tr className="border-t border-gray-200 ">
                  <td className="py-4 pr-2 text-sm sm:text-base">
                    <div className="font-medium" style={{ display: 'flex' }}>
                      Inbound Request Management
                      <Tooltip data-tooltip-placement="top">
                        <div className="text-xs text-center whitespace-nowrap">
                          Store and organize all in-bound inquiries, requests,
                          and RFPs.
                        </div>
                      </Tooltip>
                    </div>
                  </td>
                  <td className="px-2 py-4 text-sm font-medium text-center bg-slate-200">
                    -
                  </td>
                  <td className="px-2 py-4 text-sm font-medium text-center">
                    <svg
                      className="inline-flex w-3 h-3 text-green-500 fill-current"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                  </td>
                  <td className="py-4 pl-2 text-sm font-medium text-center">
                    <svg
                      className="inline-flex w-3 h-3 text-green-500 fill-current"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                  </td>
                </tr>
                {/* Row */}
                <tr className="border-t border-gray-200">
                  <td className="py-4 pr-2 text-sm sm:text-base">
                    <div className="font-medium" style={{ display: 'flex' }}>
                      Material Risk &amp; Opportunity Register
                      <Tooltip data-tooltip-placement="top">
                        <div className="text-xs text-center whitespace-nowrap">
                          Identify, organize and outline all your material
                          issues so you can keep track of the risks and
                          opportunities
                          <br />
                          impacting the business, as well as your action plans
                          to address them.
                        </div>
                      </Tooltip>
                    </div>
                  </td>
                  <td className="px-2 py-4 text-sm font-medium text-center bg-slate-200">
                    -
                  </td>
                  <td className="py-4 pl-2 text-sm font-medium text-center">
                    <svg
                      className="inline-flex w-3 h-3 text-green-500 fill-current"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                  </td>
                  <td className="py-4 pl-2 text-sm font-medium text-center">
                    <svg
                      className="inline-flex w-3 h-3 text-green-500 fill-current"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                  </td>
                </tr>
                {/* Row */}
                <tr className="border-t border-gray-200">
                  <td className="py-4 pr-2 text-sm sm:text-base">
                    <div className="font-medium" style={{ display: 'flex' }}>
                      Metrics Tracking
                      <Tooltip data-tooltip-placement="top">
                        <div className="text-xs text-center whitespace-nowrap">
                          Track all organizational data that is required for
                          assessing your impact and ESG performance,
                          <br />
                          including utility data, energy consumption, waste,
                          water, emissions, and more.
                        </div>
                      </Tooltip>
                    </div>
                  </td>
                  <td className="px-2 py-4 text-sm font-medium text-center bg-slate-200">
                    -
                  </td>
                  <td className="py-4 pl-2 text-sm font-medium text-center">
                    <svg
                      className="inline-flex w-3 h-3 text-green-500 fill-current"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                  </td>
                  <td className="py-4 pl-2 text-sm font-medium text-center">
                    <svg
                      className="inline-flex w-3 h-3 text-green-500 fill-current"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                  </td>
                </tr>

                {/* Tasks Row */}
                <tr className="border-t border-gray-200">
                  <td className="py-4 pr-2 text-sm sm:text-base">
                    <div className="font-medium" style={{ display: 'flex' }}>
                      Custom Task Management
                    </div>
                  </td>
                  <td className="px-2 py-4 text-sm font-medium text-center bg-slate-200">
                    -
                  </td>
                  <td className="px-2 py-4 text-sm font-medium text-center">
                    <svg
                      className="inline-flex w-3 h-3 text-green-500 fill-current"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                  </td>
                  <td className="py-4 pl-2 text-sm font-medium text-center">
                    <svg
                      className="inline-flex w-3 h-3 text-green-500 fill-current"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                  </td>
                </tr>
                {/* Row */}
                <tr className="border-t border-gray-200">
                  <td className="py-4 pr-2 text-sm sm:text-base">
                    <div className="font-medium" style={{ display: 'flex' }}>
                      Detailed Reporting
                      <Tooltip data-tooltip-placement="top">
                        <div className="text-xs text-center whitespace-nowrap">
                          In-application tracking and reporting on task
                          progress, employee training, policy acknowledgement,
                          and evidence review status.
                        </div>
                      </Tooltip>
                    </div>
                  </td>
                  <td className="px-2 py-4 text-sm font-medium text-center bg-slate-200">
                    -
                  </td>
                  <td className="px-2 py-4 text-sm font-medium text-center">
                    <svg
                      className="inline-flex w-3 h-3 text-green-500 fill-current"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                  </td>
                  <td className="py-4 pl-2 text-sm font-medium text-center">
                    <svg
                      className="inline-flex w-3 h-3 text-green-500 fill-current"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                  </td>
                </tr>

                {/* Row */}
                <tr className="border-t border-gray-200">
                  <td className="py-4 pr-2 text-sm sm:text-base">
                    <div className="font-medium" style={{ display: 'flex' }}>
                      Document Discovery
                      <Tooltip data-tooltip-placement="top">
                        <div className="text-xs text-center whitespace-nowrap">
                          Save countless hours by automatically collecting,
                          identifying, and sorting your and your supplier's
                          critical ESG documents, utility bills, and
                          certifications.
                        </div>
                      </Tooltip>
                    </div>
                  </td>
                  <td className="px-2 py-4 text-sm font-medium text-center bg-slate-200">
                    -
                  </td>
                  <td className="px-2 py-4 text-sm font-medium text-center">
                    <svg
                      className="inline-flex w-3 h-3 text-green-500 fill-current"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                  </td>
                  <td className="py-4 pl-2 text-sm font-medium text-center">
                    <svg
                      className="inline-flex w-3 h-3 text-green-500 fill-current"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                  </td>
                </tr>

                {/* Row */}
                <tr className="border-t border-gray-200">
                  <td className="py-4 pr-2 text-sm sm:text-base">
                    <div className="font-medium" style={{ display: 'flex' }}>
                      Multi-Organization Administration
                      <Tooltip data-tooltip-placement="top">
                        <div className="text-xs text-center whitespace-nowrap">
                          Link other organizations to your account so you can
                          automatically aggregate key data.
                          <br />
                          Useful for asset managers monitoring portfolio data,
                          companies aggregating supplier data,
                          <br />
                          and parent companies with subsidiaries.
                        </div>
                      </Tooltip>
                    </div>
                  </td>
                  <td className="px-2 py-4 text-sm font-medium text-center bg-slate-200">
                    -
                  </td>
                  <td className="py-4 pl-2 text-sm font-medium text-center">
                    -
                  </td>
                  <td className="py-4 pl-2 text-sm font-medium text-center">
                    <svg
                      className="inline-flex w-3 h-3 text-green-500 fill-current"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                  </td>
                </tr>

                {/* Row */}
                <tr className="border-t border-gray-200">
                  <td className="py-4 pr-2 text-sm sm:text-base">
                    <div className="font-medium" style={{ display: 'flex' }}>
                      Onboarding Support
                      <Tooltip data-tooltip-placement="top">
                        <div className="text-xs text-center whitespace-nowrap">
                          Get hands-on support in getting your Rho Impact
                          dashboard up and running.
                        </div>
                      </Tooltip>
                    </div>
                  </td>
                  <td className="px-2 py-4 text-sm font-medium text-center bg-slate-200">
                    -
                  </td>
                  <td className="py-4 pl-2 text-sm font-medium text-center">
                    -
                  </td>
                  <td className="py-4 pl-2 text-sm font-medium text-center">
                    <svg
                      className="inline-flex w-3 h-3 text-green-500 fill-current"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                  </td>
                </tr>

                {/* Row */}
                <tr className="border-t border-gray-200">
                  <td className="py-4 pr-2 text-sm sm:text-base">
                    <div className="font-medium" style={{ display: 'flex' }}>
                      Account Manager
                      <Tooltip data-tooltip-placement="top">
                        <div className="text-xs text-center whitespace-nowrap">
                          Single point of contact for immediate support on all
                          your ESG questions.
                        </div>
                      </Tooltip>
                    </div>
                  </td>
                  <td className="px-2 py-4 text-sm font-medium text-center bg-slate-200">
                    -
                  </td>
                  <td className="px-2 py-4 text-sm font-medium text-center">
                    -
                  </td>
                  <td className="py-4 pl-2 text-sm font-medium text-center">
                    <svg
                      className="inline-flex w-3 h-3 text-green-500 fill-current"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                  </td>
                </tr>

                {/* Title Row */}
                <tr className="border-t border-gray-200">
                  <div className="py-4">
                    <h3 className="text-lg font-black">Coming Soon</h3>
                    <p className="text-blue-500">
                      Exciting features that are on the way!
                    </p>
                  </div>
                  <td className="bg-slate-200"></td>
                </tr>

                {/* Row */}
                <tr className="border-t border-gray-200">
                  <td className="py-4 pr-2 text-sm sm:text-base">
                    <div className="font-medium" style={{ display: 'flex' }}>
                      Regulatory Registry
                      <Tooltip data-tooltip-placement="top">
                        <div className="text-xs text-center whitespace-nowrap">
                          Curated, up-to-date summary of the existing and
                          upcoming ESG Regulations, disclosure requirements, and
                          relevant links.
                        </div>
                      </Tooltip>
                    </div>
                  </td>
                  <td className="px-2 py-4 text-sm font-medium text-center bg-slate-200">
                    -
                  </td>
                  <td className="px-2 py-4 text-sm font-medium text-center">
                    -
                  </td>
                  <td className="py-4 pl-2 text-sm font-medium text-center">
                    <svg
                      className="inline-flex w-3 h-3 text-green-500 fill-current"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                  </td>
                </tr>

                {/* Row */}
                <tr className="border-t border-gray-200">
                  <td className="py-4 pr-2 text-sm sm:text-base">
                    <div className="font-medium" style={{ display: 'flex' }}>
                      Regulatory Compliance Tracker
                      <Tooltip data-tooltip-placement="top">
                        <div className="text-xs text-center whitespace-nowrap">
                          Efficiently coordinate compliance efforts, monitor
                          progress, and outsource legal needs.
                        </div>
                      </Tooltip>
                    </div>
                  </td>
                  <td className="px-2 py-4 text-sm font-medium text-center bg-slate-200">
                    -
                  </td>
                  <td className="px-2 py-4 text-sm font-medium text-center">
                    -
                  </td>
                  <td className="py-4 pl-2 text-sm font-medium text-center">
                    <svg
                      className="inline-flex w-3 h-3 text-green-500 fill-current"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                  </td>
                </tr>

                {/* Row */}
                <tr className="border-t border-gray-200">
                  <td className="py-4 pr-2 text-sm sm:text-base">
                    <div className="font-medium" style={{ display: 'flex' }}>
                      Regulatory Risk Assessment
                      <Tooltip data-tooltip-placement="top">
                        <div className="text-xs text-center whitespace-nowrap">
                          Identify, organize, and outline regulations for risk
                          tracking and compliance in your ESG strategy.
                        </div>
                      </Tooltip>
                    </div>
                  </td>
                  <td className="px-2 py-4 text-sm font-medium text-center bg-slate-200">
                    -
                  </td>
                  <td className="px-2 py-4 text-sm font-medium text-center">
                    -
                  </td>
                  <td className="py-4 pl-2 text-sm font-medium text-center">
                    <svg
                      className="inline-flex w-3 h-3 text-green-500 fill-current"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                  </td>
                </tr>

                {/* Row */}
                <tr className="border-t border-gray-200">
                  <td className="py-4 pr-2 text-sm sm:text-base">
                    <div className="font-medium" style={{ display: 'flex' }}>
                      Portfolio View
                      <Tooltip data-tooltip-placement="top">
                        <div className="text-xs text-center whitespace-nowrap">
                          View summary statistics and aggregated data from the
                          companies that are linked to your organization (e.g.
                          suppliers).
                        </div>
                      </Tooltip>
                    </div>
                  </td>
                  <td className="px-2 py-4 text-sm font-medium text-center bg-slate-200">
                    -
                  </td>
                  <td className="py-4 pl-2 text-sm font-medium text-center">
                    -
                  </td>
                  <td className="py-4 pl-2 text-sm font-medium text-center">
                    <svg
                      className="inline-flex w-3 h-3 text-green-500 fill-current"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                  </td>
                </tr>

                {/* Row */}
                <tr className="border-t border-gray-200">
                  <td className="py-4 pr-2 text-sm sm:text-base">
                    <div className="font-medium" style={{ display: 'flex' }}>
                      Metrics Reporting to Linked Accounts
                      <Tooltip data-tooltip-placement="top">
                        <div className="text-xs text-center whitespace-nowrap">
                          Provide data and automatically generated reports to
                          organizations of your choosing (e.g. your investors,
                          companies you supply, etc.)
                        </div>
                      </Tooltip>
                    </div>
                  </td>
                  <td className="px-2 py-4 text-sm font-medium text-center bg-slate-200">
                    -
                  </td>
                  <td className="py-4 pl-2 text-sm font-medium text-center">
                    <svg
                      className="inline-flex w-3 h-3 text-green-500 fill-current"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                  </td>
                  <td className="py-4 pl-2 text-sm font-medium text-center">
                    <svg
                      className="inline-flex w-3 h-3 text-green-500 fill-current"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                  </td>
                </tr>

                {/* Row */}
                <tr className="border-t border-gray-200">
                  <td className="py-4 pr-2 text-sm sm:text-base">
                    <div className="font-medium" style={{ display: 'flex' }}>
                      Metrics Reporting to External Sources
                      <Tooltip data-tooltip-placement="top">
                        <div className="text-xs text-center whitespace-nowrap">
                          Get your data in line with top disclosure frameworks
                          and standards such as SASB, TCFD, GRI, UNPRI, and
                          more.
                        </div>
                      </Tooltip>
                    </div>
                  </td>
                  <td className="px-2 py-4 text-sm font-medium text-center bg-slate-200">
                    -
                  </td>
                  <td className="py-4 pl-2 text-sm font-medium text-center">
                    <svg
                      className="inline-flex w-3 h-3 text-green-500 fill-current"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                  </td>
                  <td className="py-4 pl-2 text-sm font-medium text-center">
                    <svg
                      className="inline-flex w-3 h-3 text-green-500 fill-current"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                  </td>
                </tr>

                {/* Row */}
                <tr className="border-t border-gray-200">
                  <td className="py-4 pr-2 text-sm sm:text-base">
                    <div className="font-medium" style={{ display: 'flex' }}>
                      Evidence Cleanup
                      <Tooltip data-tooltip-placement="top">
                        <div className="text-xs text-center whitespace-nowrap">
                          Automatically flag duplicate and irrelevant evidence.
                        </div>
                      </Tooltip>
                    </div>
                  </td>
                  <td className="px-2 py-4 text-sm font-medium text-center bg-slate-200">
                    -
                  </td>
                  <td className="py-4 pl-2 text-sm font-medium text-center">
                    <svg
                      className="inline-flex w-3 h-3 text-green-500 fill-current"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                  </td>
                  <td className="py-4 pl-2 text-sm font-medium text-center">
                    <svg
                      className="inline-flex w-3 h-3 text-green-500 fill-current"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                  </td>
                </tr>

                {/* Title Row */}
                {/* <tr className="border-t border-gray-200">
                  <div className="py-4">
                    <h3 className="text-lg font-black">Reporting</h3>
                    <p className="text-purple-500">
                      All the reporting formats you need to communicate your ESG
                      performance
                    </p>
                  </div>
                  <td className="bg-slate-200"></td>
                </tr> */}

                {/* Row */}
                {/* <tr className="border-t border-gray-200">
                  <td className="py-4 pr-2 text-sm sm:text-base">
                    <div className="font-medium" style={{ display: 'flex' }}>
                      Regulatory Radar
                      <Tooltip data-tooltip-placement="top">
                        <div className="text-xs text-center whitespace-nowrap">
                          Curated, up-to-date summary of the existing and
                          upcoming ESG Regulations, disclosure requirements, and
                          other relevant news.
                        </div>
                      </Tooltip>
                    </div>
                  </td>
                  <td className="px-2 py-4 text-sm font-medium text-center bg-slate-200">
                    -
                  </td>
                  <td className="py-4 pl-2 text-sm font-medium text-center">
                    -
                  </td>
                  <td className="py-4 pl-2 text-sm font-medium text-center">
                    <svg
                      className="inline-flex w-3 h-3 text-green-500 fill-current"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                  </td>
                </tr> */}
                {/* Row */}
                <tr className="border-t border-gray-200">
                  <td className="py-4 pr-2 text-sm sm:text-base">
                    <div className="font-medium" style={{ display: 'flex' }}>
                      API Access
                      <Tooltip data-tooltip-placement="top">
                        <div className="text-xs text-center whitespace-nowrap">
                          Access your impact and ESG data through our API for
                          your in-house use or to integrate into other
                          platforms.
                        </div>
                      </Tooltip>
                    </div>
                  </td>
                  <td className="px-2 py-4 text-sm font-medium text-center bg-slate-200">
                    -
                  </td>
                  <td className="px-2 py-4 text-sm font-medium text-center">
                    -
                  </td>
                  <td className="py-4 pl-2 text-sm font-medium text-center">
                    <svg
                      className="inline-flex w-3 h-3 text-green-500 fill-current"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                  </td>
                </tr>
                {/* Row */}
                <tr className="border-t border-gray-200">
                  <td className="py-4 pr-2 text-sm sm:text-base">
                    <div className="font-medium" style={{ display: 'flex' }}>
                      SSO Support
                      <Tooltip data-tooltip-placement="top">
                        <div className="text-xs text-center whitespace-nowrap">
                          Additional methods for accessing your organization's
                          account and linked accounts with single sign-on
                          support.
                        </div>
                      </Tooltip>
                    </div>
                  </td>
                  <td className="px-2 py-4 text-sm font-medium text-center bg-slate-200">
                    -
                  </td>
                  <td className="px-2 py-4 text-sm font-medium text-center">
                    -
                  </td>
                  <td className="py-4 pl-2 text-sm font-medium text-center">
                    <svg
                      className="inline-flex w-3 h-3 text-green-500 fill-current"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                  </td>
                </tr>

                {/* Title Row */}
                {/* <tr className="border-t border-gray-200">
                  <div className="py-4">
                    <h3 className="text-lg font-black">Services</h3>
                    <p className="text-purple-500">
                      Hands-on services to streamline and enhance your ESG
                      program
                    </p>
                  </div>
                  <td className="bg-slate-200"></td>
                </tr> */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesTableApp;
