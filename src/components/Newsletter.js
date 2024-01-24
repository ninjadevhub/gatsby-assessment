import React, { useState } from "react";

function Newsletter() {
  const [email, setEmail] = useState("");

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* TODO: Remove the inline style */}
        <div className="pb-12 md:pb-20" style={{ paddingTop: "5rem" }}>
          {/* CTA box */}
          <div
            className="relative bg-gray-900 rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl overflow-hidden"
            data-aos="zoom-y-out"
          >
            {/* Background illustration */}
            <div
              className="absolute right-0 bottom-0 pointer-events-none hidden lg:block"
              aria-hidden="true"
            >
              <svg
                width="428" height="328"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 350 300"

              >
                <path
                  fill="#00a2e9"
                  d="M738.09,657.75c-.63.44-1.27.88-1.92,1.3a186.16,186.16,0,0,1,40.24,115.83H698.82c0-138.55-217.31-201.49-296.82,0A186.64,186.64,0,0,1,456.83,642.5H457a186.44,186.44,0,0,1,116-54.13h21l102.34-.47L713,509H539.79l-8.35,38.3s33.93-.39,66.31,2.27C527.16,564,485.38,580.13,438.52,628L480.3,427c50.28,0,87.39.12,127.41.21H733a67.48,67.48,0,0,1,13.86,1.52,62.87,62.87,0,0,1,36.56,22.39h.15a63.63,63.63,0,0,1,13.87,40.05,70.39,70.39,0,0,1-1.58,14.21L774.71,607A78.33,78.33,0,0,1,748,650.77a81.22,81.22,0,0,1-9.86,7Z"
                  transform="translate(-380 -415)"
                />
              </svg>
            </div>

            <div className="relative flex flex-col lg:flex-row justify-between items-center">
              {/* CTA content */}
              <div className="text-center lg:text-left lg:max-w-xl">
                <h3 className="h3 text-white mb-2">Keep Informed</h3>
                <p className="text-gray-300 text-lg mb-6">
                  Get the latest Rho Impact and industry news.
                </p>

                {/* CTA form */}
                <form
                  className="w-full lg:w-auto"
                  action={process.env.GATSBY_MAILCHIMP_KEY}
                  method="POST"
                  noValidate
                >
                  <input
                    type="hidden"
                    name="u"
                    value={process.env.GATSBY_MAILCHIMP_U}
                  />
                  <input
                    type="hidden"
                    name="id"
                    value={process.env.GATSBY_MAILCHIMP_ID}
                  />
                  <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:mx-0">
                    <input
                      type="email"
                      className="w-full appearance-none bg-gray-800 border border-gray-700 focus:border-gray-600 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-gray-500"
                      placeholder="Your email…"
                      aria-label="Your email…"
                      name="EMAIL"
                      id="MERGE0"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      autoCapitalize="off"
                      autoCorrect="off"
                      autoComplete="off"
                      required
                    />
                    <button
                      value="Subscribe"
                      name="subscribe"
                      className="btn text-white bg-blue-500 hover:bg-blue-600 shadow"
                      type="submit"
                      aria-label="Subscribe"
                    >
                      Subscribe
                    </button>
                  </div>
                  {/* Success message */}
                  {/* <p className="text-sm text-gray-400 mt-3">Thanks for subscribing!</p> */}
                  <p className="text-sm text-gray-400 mt-3">
                    No spam. You can unsubscribe at any time.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
