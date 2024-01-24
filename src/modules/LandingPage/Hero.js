import React, { useState } from "react";
import heroBackground from "../../images/heroBackground.png";
import heroImage from "../../images/heroImage.png";
import Subtract from "../../images/Subtract.png";
import Arrow from "../../images/arrow.svg";
import Right from "../../images/right.svg";
import left from "../../images/left.png";
import Slider from "react-slick";
import { heroSectionSlider } from "./data";
import CarouselSlider from "../../components/carouselSlider";

const sectionStyle = {
  backgroundImage: `url(${heroBackground})`, // Set the background image here
  backgroundSize: "cover",
  backgroundPosition: "center",
};

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(1);

  const [slider, setSlider] = useState(null);

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
    console.log("newIndex", newIndex);
    setCurrentSlide(newIndex + 1);
  };

  const settings = {
    dots: false,
    speed: 500,
    Infinity: false,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 500,
    initialSlide: 0,
    beforeChange: handleBeforeChange,
  };

  return (
    <section className="pb-20 font-body min-h-[80vh] lg:px-[72px]" style={sectionStyle}>
      <Slider ref={(slider) => setSlider(slider)} {...settings}>
        {heroSectionSlider.map((item, index) => {
          return (
            <div key={index} className="flex justify-center">
              <div className="max-w-[1296px] mx-4 lg:mt-[150px] mt-[50px]  lg:mx-auto">
                <div className=" lg:hidden text-white pb-4 mt-20  flex max-w-[1296px] mx-auto justify-between lg:justify-normal lg:mb-0 gap-2  lg:mt-[12px] items-center">
                  <div className="flex gap-2">
                    <div
                      onClick={() => {
                        previous();
                      }}
                    >
                      <img src={left} className="cursor-pointer" />
                    </div>
                    <div
                      onClick={() => {
                        next();
                      }}
                    >
                      <img src={Right} className="cursor-pointer" />
                    </div>
                  </div>
                  <CarouselSlider
                    currentSlide={currentSlide}
                    totalSlides={heroSectionSlider.length}
                  />
        
                </div>
                <div className="flex flex-col lg:flex-row items-center text-white justify-between ">
                  <div className=" lg:w-1/2  mt-5 ">
                    <div className="text-[14px]">
                      <span className="py-2 px-[24px] border-[#2C3963] border-2 rounded-[200px] ">
                        {item.tag}
                      </span>
                    </div>
                    <p className="font-normal text-Lexend text-2xl mt-[20px] leading-[32px]  md:text-[40px] md:leading-[48px]  md:mt-8  ">
                      {item.title}
                    </p>
                    <div className="flex mt-8 items-center space-x-3 ">
                      <img
                        className="border-2 p-2 border-white border-opacity-20 rounded-full "
                        src={item.image}
                      />
                      <div>
                        <h1 className=" text-sm md:text-lg font-normal ">
                          {item.name}
                        </h1>
                        <p className="md:text-sm text-[10px] text-[#575f73] ">
                          {" "}
                          {item.designation}
                        </p>
                      </div>
                    </div>
                    <p className="mt-8 font-body text-[14px] md:text-lg leading-5 md:leading-[28px] ">
                      {item.review}
                    </p>
                    <div className=" mt-[32px] flex justify-center lg:hidden">
                      <img src={Subtract} alt="Hero" />
                    </div>
                    <div className="flex mt-8 mb:8 justify-center lg:justify-normal space-x-4 md:space-x-11 ">
                      <div>
                        <p className="text-brandBlue text-[20px] md:text-3xl ">
                          {item.statA}
                        </p>
                        <p className=" text-xs  md:text-base  ">
                          Some Statistic Information{" "}
                        </p>
                      </div>
                      <div>
                        <p className="text-brandBlue text-[20px] md:text-3xl ">
                          {item.statB}
                        </p>
                        <p className=" text-xs md:text-base  ">
                          Some Statistic Information{" "}
                        </p>
                      </div>
                      <div>
                        <p className="text-brandBlue text-[20px] md:text-3xl ">
                          {item.statC}
                        </p>
                        <p className=" text-xs md:text-base  ">
                          Some Statistic Information{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-1/2 hidden lg:flex  justify-end">
                    <div>
                      <img src={heroImage} alt="Hero" />
                      <div className="flex  items-center justify-end relative right-5  bottom-[54px] gap-3 ">
                        <p>Read More</p>
                        <img src={Arrow} className="cursor-pointer" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
      <div className="flex  lg:hidden text-white ml-4 mt-8 gap-3 items-center  ">
        <p>Read More</p>
        <img src={Arrow} className="cursor-pointer" />
      </div>
      <div className=" text-white pb-4 flex max-w-[1296px] lg:mx-auto justify-between mx-4 md:justify-normal mb-[48px] lg:mb-0 gap-10 mt-[42px] lg:mt-[12px] items-center">
        <div className="flex gap-2">
          <div
            onClick={() => {
              previous();
            }}
          >
            <img src={left} className="cursor-pointer" />
          </div>
          <div
            onClick={() => {
              next();
            }}
          >
            <img src={Right} className="cursor-pointer" />
          </div>
        </div>
        <CarouselSlider
          currentSlide={currentSlide}
          totalSlides={heroSectionSlider.length}
        />
      </div>
    </section>
  );
}

export default Hero;
