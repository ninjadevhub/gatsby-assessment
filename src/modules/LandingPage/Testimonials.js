import React, { useState } from "react";
import Slider from "react-slick";
import Layer from "../../images/Layer.png";
import { testimonialsData } from "./data";
import Button from "../../components/Button";
import CarouselDots from "../../components/carouselDots";

function Testimonials() {
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: handleBeforeChange,
    customPaging: (i) => <CarouselDots isActive={i === currentSlide} />,
  };

  return (
    <section
      className="relative mx-4 text-black font-body rounded-[34px] bg-[#030C26] max-w-[1296px] lg:mx-auto testimonialSectionCustom"
      id="Testimonials-move"
    >
      <div className="relative border-3 border-white bg-white rounded-[32px] mx-auto px-4 sm:px-6">
        <div className="py-12 z-50 ">
          <Slider ref={(slider) => setSlider(slider)} {...settings}>
            {testimonialsData.map((testimonial, index) => {
              return (
                <div key={index} className="flex">
                  <div className=" flex justify-between  items-center  text-center ">
                    <div className="hidden md:block" onClick={previous}>
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
                    <div className="px-[40px]">
                      <div className="inline-flex ">
                        <img
                          className="rounded-full"
                          src={testimonial.image}
                          alt="Rho Impact Testimonial"
                        />
                      </div>
                      <div className="relative">
                        <h4 className="md:text-lg text-sm leading-5 mt-8 text-textColor  md:leading-6">
                          {testimonial.text}
                        </h4>
                        <div className="text-[14px] mt-6 md:mt-8">
                          {testimonial.name}
                        </div>
                        <div className="text-[#B1B8CA] mb-7 text-xs ">
                          {testimonial.company}
                        </div>
                      </div>
                    </div>
                    <div className="hidden md:block" onClick={next}>
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
              );
            })}
          </Slider>
        </div>
        {/* other components */}
      </div>
      <div className="flex flex-col lg:flex-row md:justify-between justify-center md:py-6 px-8 md:px-8  text-white items-center ctaSection  pb-[40px]">
        <div className="flex flex-col lg:flex-row md:justify-between justify-center ">
          <div className="mt-6 flex justify-center items-center md:mt-0 ">
            <img src={Layer} />
          </div>
          <div className="flex flex-col  lg:ml-5 justify-center ">
            <p className="md:text-3xl mt-[17px] lg:mt-0  text-center lg:text-left text-xl leading-[30px] md:leading-10">
              Ready to get started?
            </p>
            <p className="md:text-sm text-center lg:text-left text-xs leading-5  md:leading-6">
              Rho Impact quantifies the impact of new climate technologies,
              existing products and services
            </p>
          </div>
        </div>
        <Button className="xl:mt-0 mt-[18px]" onClick={() => {}}>
          Request a Demo
        </Button>

      </div>
    </section>
  );
}

export default Testimonials;
