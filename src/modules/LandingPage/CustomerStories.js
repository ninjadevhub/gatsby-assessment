import React, { useState } from "react";
import Slider from "react-slick";
import { customerStories } from "./data";
import CarouselDots from "../../components/carouselDots";

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  arrows: false,
  slidesToShow: 3.2,
  slidesToScroll: 1,
  autoplaySpeed: 500,
  initialSlide: 0,

  responsive: [
    {
      breakpoint: 1024,

      settings: {
        slidesToShow: 2.2,
      },
    },
    {
      breakpoint: 600,
      centerMode: true,
      dots: true,
      settings: {
        slidesToShow: 1,
        dots: true,
      },
    },
    {
      breakpoint: 480,
      centerMode: true,
      dots: true,
      settings: {
        slidesToShow: 1,
        dots: true,
      },
    },
  ],
};

function CustomerStories() {
  const [slider, setSlider] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const next = () => {
    if (slider) {
      slider.slickNext();
    }
  };

  const previous = () => {
    if (slider) {
      slider.slickPrev();
    }
  };
  const handleBeforeChange = (_, newIndex) => {
    setCurrentSlide(newIndex);
  };

  return (
    <section
      className="bg-white -mt-[70px] rounded-[40px] md:rounded-[80px] customerStoriesSection"
      id="Customer-Stories"
    >
      <section className="mx-auto font-body pl:[50px] lg:pl-[72px] xl:pl-[170px] xxl:pl-[200px]">
        <div>
          <div className="flex mx-4 items-center justify-center pt-8 md:pt-[100px] md:justify-between">
            <div className=" text-center justify-center  md:flex items-center space-x-4">
              <p className=" text-2xl leading-7 md:text-[50px]">
                CustomerStories
              </p>
              <p className="text-sm lg:text-[20px] mt-[10px] text-textColor ">
                Explore Rho Impact Experience
              </p>
            </div>
            <div className="md:flex text-sm lg:text-[20px] gap-2 hidden lg:pr-[72px]">
              <div onClick={previous}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  fill="none"
                >
                  <circle
                    cx="25"
                    cy="25"
                    r="24.5"
                    transform="matrix(-1 0 0 1 50 0)"
                    stroke="#E4EBEF"
                  />
                  <path
                    d="M28 18L21.7071 24.2929C21.3166 24.6834 21.3166 25.3166 21.7071 25.7071L28 32"
                    stroke="#1F2536"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
              <div onClick={next}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  fill="none"
                >
                  <circle cx="25" cy="25" r="24.5" stroke="#E4EBEF" />
                  <path
                    d="M22 18L28.2929 24.2929C28.6834 24.6834 28.6834 25.3166 28.2929 25.7071L22 32"
                    stroke="#1F2536"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="mt-7 mx-4 lg:mx-0 md:mt-[52px] ">
            <Slider
              ref={(slider) => setSlider(slider)}
              {...settings}
              customPaging={(i) => (
                <CarouselDots isActive={i === currentSlide} />
              )}
              beforeChange={handleBeforeChange}
            >
              {customerStories.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="mb-6 md:mb-0 md:w-[411px] w-[350px] md:pr-3"
                  >
                    <div className="bg-[#f3f9fd] py-8 px-4 md:px-[40px] max-w-[400px] rounded-[32px] ">
                      <div>
                        <img className="h-[35px] w-[115px] " src={item.image} />

                        <p className="mt-[33px] text-[16px] md:text-[20px] leading-7 text-textColor ">
                          {item.title}
                        </p>
                        <p className="mt-3 text-[12px] md:text-[14px] leading-[20px] text-textColor">
                          {item.text}
                        </p>
                      </div>
                      <div className="border-t-[1px] mt-8 flex justify-between items-center border-[#D8E1E7] pt-6 ">
                        <div className="flex  gap-2 ">
                          <img
                            className="rounded-full "
                            src={item.avatar}
                            alt={item.name}
                          />
                          <div>
                            <h1 className="text-sm md:text-base font-normal ">
                              {item.name}
                            </h1>
                            <p className=" text-[10px] md:text-xs text-[#B1B8CA] ">
                              {item.company}
                            </p>
                          </div>
                        </div>
                        <div className="cursor-pointer">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="50"
                            height="50"
                            viewBox="0 0 50 50"
                            fill="none"
                          >
                            <circle cx="25" cy="25" r="24.5" stroke="#D8E1E7" />
                            <path
                              d="M15 25L33 25M27 31L32.6464 25.3536C32.8417 25.1583 32.8417 24.8417 32.6464 24.6464L27 19"
                              stroke="#1F2536"
                              stroke-width="2"
                              stroke-linecap="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </section>
    </section>
  );
}

export default CustomerStories;
