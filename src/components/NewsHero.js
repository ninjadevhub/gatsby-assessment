import React, { useState } from "react";

function NewsHero({
  titleText = 'All Things ESG and Impact',
  subtitleText = 'Skim (or peruse!) our blog posts, white papers, explainer videos, and all other things ESG and impact we share. Sign up for our digest for this delivered directly to your inbox.',
  includeSubscribe = true,
}) {
  const [email, setEmail] = useState("");

  return (
    <section className="relative">
      {/* Dark background */}
      <div
        className="absolute inset-0 bg-slate-100 pointer-events-none -z-10"
        aria-hidden="true"
      ></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="h1 text-slate-800 mb-4" dangerouslySetInnerHTML={{ __html: titleText }}></h1>
            <p className="text-xl text-slate-500 mb-8" dangerouslySetInnerHTML={{ __html: subtitleText }}></p>
            {/* Subscribe form */}
            {includeSubscribe &&
              <form
                action={process.env.GATSBY_MAILCHIMP_KEY}
                method="POST"
                noValidate
              >
                <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md">
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
                  <input
                    type="email"
                    name="EMAIL"
                    id="MERGE0"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    autoCapitalize="off"
                    autoCorrect="off"
                    autoComplete="off"
                    className="form-input w-full bg-slate-900 border border-slate-100 focus:border-slate-600 text-white placeholder-slate-500 mb-2 sm:mb-0 sm:mr-2"
                    placeholder="Your email"
                    required
                  />
                  <button
                    value="Subscribe"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    type="submit"
                    className="btn text-white bg-blue-500 hover:bg-blue-600"
                    aria-label="Subscribe"
                  >
                    Subscribe
                  </button>
                </div>
                {/* Success message */}
                {/* <p class="text-xs text-slate-500 mt-3 italic">Thanks for subscribing!</p> */}
              </form>
            }


          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsHero;
