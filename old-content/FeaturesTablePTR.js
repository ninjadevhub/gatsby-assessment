import React from "react";

function FeaturesTablePTR() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="pb-12">
            <h2 className="h2">Features</h2>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="table-auto w-full border-b border-gray-200">
              {/* Table header */}
              <thead>
                <tr className="text-base sm:text-lg border-t border-gray-200">
                  <th className="text-bold text-left pr-2 py-4 min-w-48">
                    Rho Map
                  </th>
                  <th className="text-bold text-center px-2 py-4">Plan</th>
                  <th className="text-bold text-center px-2 py-4">Track</th>
                  <th className="text-bold text-center px-2 py-4">Report</th>
                </tr>
              </thead>
              {/* Table body */}
              <tbody>
                {/* Row */}
                <tr className="border-t border-gray-200">
                  <td className="text-sm sm:text-base pr-2 py-4">
                    <div className="font-medium underline">EXECUTIVE</div>
                    <div className="text-gray-600">
                      (Macro-view) A bird-eye view of your operations and supply
                      chains visualizes the entirety of your impacts - Your
                      risks, opportunities, and leverage points to drive
                      progress
                    </div>
                  </td>
                  <td className="text-sm px-2 py-4 text-center font-medium">
                    Create a cohesive, long- term impact strategy for your
                    organization
                  </td>
                  <td className="text-sm px-2 py-4 text-center font-medium">
                    Track your organization's progress across all issues and
                    impact strategies
                  </td>
                  <td className="text-sm px-2 py-4 text-center font-medium">
                    Produce reports that are auditable, aligned with leading
                    disclosure standards, and compliant with disclosure
                    regulations
                  </td>
                </tr>
                {/* Row */}
                <tr className="border-t border-gray-200">
                  <td className="text-sm sm:text-base pr-2 py-4">
                    <div className="font-medium underline">MANAGER</div>
                    <div className="text-gray-600">
                      (Mid-level view) Hone in on a specific business unit,
                      facility, or asset. Solution testing allows you to
                      forecast the effectiveness of a single or combination of
                      interventions to determine the best course of action in
                      reaching your goals
                    </div>
                  </td>
                  <td className="text-sm px-2 py-4 text-center font-medium">
                    Quickly evaluate a range of options and option combinations
                    to determine the greatest strategy for addressing your
                    material issues and reaching your goals
                  </td>
                  <td className="text-sm px-2 py-4 text-center font-medium">
                    Manage data collection and monitor your impacts, as well as
                    the upstream and downstream impacts relevant to your unit's
                    footprint
                  </td>
                  <td className="text-sm px-2 py-4 text-center font-medium">
                    Produce reports for your business unit that align with your
                    organization's reporting framework and disclosure
                    requirements
                  </td>
                </tr>
                {/* Row */}
                <tr className="border-t border-gray-200">
                  <td className="text-sm sm:text-base pr-2 py-4">
                    <div className="font-medium underline">ANALYST</div>
                    <div className="text-gray-600">
                      (Micro-view) Search for specific issues, metrics, and
                      documentation for evidence of impact
                    </div>
                  </td>
                  <td className="text-sm px-2 py-4 text-center font-medium">
                    Research and stress test proposed impact solutions and
                    quickly find the technical plans, data points, and
                    associated documentation to execute
                  </td>
                  <td className="text-sm px-2 py-4 text-center font-medium">
                    Track granular data for a specific issue, metric, or
                    initiative to demonstrate it's impact on the organization's
                    performance
                  </td>
                  <td className="text-sm px-2 py-4 text-center font-medium">
                    Produce and maintain high quality documentation that can be
                    leveraged throughout the organization
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesTablePTR;
