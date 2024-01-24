import React from 'react';

function ESGServicesCard(props) {
  return (
    <section className="relative">

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20 product-card-wrapper">

          <div className="flex flex-col max-w-full md:h-56 bg-white rounded-lg shadow-lg overflow-hidden md:flex-row my-10">
            <div className={`md:flex items-center justify-center md:w-2/3 ${props.isPrimary ? "bg-blue-200" : "bg-white"}`}>
              <div className="py-6 px-8 md:py-0">
                <h2 className="text-gray-700 text-2xl font-bold md:text-black">
                  {props.title}
                </h2>
                <p className="mt-2 text-gray-600 md:text-gray-600">
                  {props.description}
                </p>
              </div>
              <div className="flex flex-wrap py-6 px-8 sm:px-1 md:px-0 md:py-0 text-base md:text-sm mb-2">
                {props.feature1.length > 0 &&
                  <div className="w-2/2 sm:w-2/2 md:w-1/2 lg:w-2/2 xl:w-1/2 mb-2  h-12">{props.feature1}</div>
                }
                {props.feature2.length > 0 &&
                  <div className="w-2/2 sm:w-2/2 md:w-1/2 lg:w-2/2 xl:w-1/2 mb-2  h-12">{props.feature2}</div>
                }
                {props.feature3.length > 0 &&
                  <div className="w-2/2 sm:w-2/2 md:w-1/2 lg:w-2/2 xl:w-1/2 mb-2  h-12">{props.feature3}</div>
                }
                {props.feature4.length > 0 &&
                  <div className="w-2/2 sm:w-2/2 md:w-1/2 lg:w-2/2 xl:w-1/2 mb-2  h-12">{props.feature4}</div>
                }
                {props.feature5.length > 0 &&
                  <div className="w-2/2 sm:w-2/2 md:w-1/2 lg:w-2/2 xl:w-1/2 mb-2  h-12">{props.feature5}</div>
                }
                {props.feature6.length > 0 &&
                  <div className="w-2/2 sm:w-2/2 md:w-1/2 lg:w-2/2 xl:w-1/2 mb-2  h-12">{props.feature6}</div>
                }
              </div>
            </div>
            <div className={`flex flex-col items-center justify-center pb-6 md:py-0 md:w-1/3 ${props.isPrimary ? "bg-blue-400" : "bg-gray-200"}`}>
              {props.price.length > 0 &&
                <div className="md:flex flex-col items-center justify-center  ">
                  <div>
                    <h2 className=" text-5xl md:text-5x1  font-bold  text-black">
                      {props.price}
                      {props.priceDuration.length > 0 &&
                        <span className="text-base text-gray-700 italic">{props.priceDuration}</span>
                      }
                    </h2>
                  </div>
                </div>
              }
              {props.cta.length > 0 &&
                <div className="flex items-center justify-center w-full  ">
                  <a
                    href="/contact"
                    className="mx-auto lg:mx-0 hover:underline bg-black text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg"
                  >
                    {props.cta}
                  </a>
                </div>
              }

            </div>
          </div>

        </div>
      </div>

    </section >
  );
}

export default ESGServicesCard;
