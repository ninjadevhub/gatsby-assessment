import React, { useEffect } from "react";

import Image1 from "../../images/icon1.svg";
import Image2 from "../../images/icon2.svg";
import Image3 from "../../images/icon3.svg";
import Image4 from "../../images/icon4.png";
import Image5 from "../../images/icon5.png";
import Image6 from "../../images/icon6.svg";
import Image7 from "../../images/icon7.png";
import Swiper, { Autoplay } from "swiper";
Swiper.use([Autoplay]);

const data = [Image1, Image2, Image3, Image4, Image5, Image6, Image7];

function CustomerCarousel() {
  useEffect(() => {
    new Swiper(".clients-carousel.swiper-container", {
      slidesPerView: "auto",
      spaceBetween: 20,
      centeredSlides: true,
      loop: true,
      speed: 5000,
      noSwiping: true,
      noSwipingClass: "swiper-slide",
      autoplay: {
        delay: 0,
        disableOnInteraction: true,
      },
    });
  }, []);

  return (
    <div className="px-5">
      <p className="text-center  font-body text-base md:text-2xl leading-6 md:leading-8 text-textColor ">
        Trusted by the World's Leading Investors and Companies Alike
      </p>
      <div className="relative clients-carousel swiper-container mt-[25px]">
        <div className="swiper-wrapper !ease-linear select-none">
          {data.map((item) => (
            <div
              key={item}
              className="swiper-slide !h-32 !w-48  rounded-2xl flex items-center justify-center group"
            >
              <img
                className="duration-500 ease-in-out transform "
                src={item}
                alt="SASB"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CustomerCarousel;
