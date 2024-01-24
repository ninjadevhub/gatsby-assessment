import React from "react";

function CtaProduct({
  url,
  url_text = "Click Here",
  cta_text = "Find Out More",
  color = "blue",
  signupUrl_text,
  signupUrl,
}) {
  // const isChild = show === undefined;

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Purple CTA box */}
          {color === "purple" && (
            <div
              className={`bg-purple-600 rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl`}
              data-aos="zoom-y-out"
            >
              <div className="flex flex-col lg:flex-row justify-between items-center">
                {/* CTA content */}
                <div className="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left">
                  <h3 className="h3 text-white mb-2">{cta_text}</h3>
                </div>

                {/* CTA button */}
                <div>
                  <a
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className={`bg-transparent hover:bg-purple-800 text-white font-semibold hover:text-white py-2 border-2 border-purple-800 hover:border-transparent rounded px-4`}
                  >
                    {url_text}
                  </a>
                </div>
                <div>
                  <a
                    href={signupUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={`btn text-gray-900 bg-gradient-to-r from-blue-100 to-white py-2 px-4`}
                  >
                    {signupUrl_text}
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Green CTA box */}
          {color === "green" && (
            <div
              className={`bg-green-600 rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl`}
              data-aos="zoom-y-out"
            >
              <div className="flex flex-col lg:flex-row justify-between items-center">
                {/* CTA content */}
                <div className="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left">
                  <h3 className="h3 text-white mb-2">{cta_text}</h3>
                </div>

                {/* CTA button */}
                <div>
                  <a
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className={`bg-transparent hover:bg-green-800 text-white font-semibold hover:text-white py-2 border-2 border-green-800 hover:border-transparent rounded px-4`}
                  >
                    {url_text}
                  </a>
                </div>
                <div>
                  <a
                    href={signupUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={`btn text-gray-900 bg-gradient-to-r from-blue-100 to-white py-2 px-4`}
                  >
                    {signupUrl_text}
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default CtaProduct;
