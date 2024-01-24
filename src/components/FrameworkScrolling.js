import React from 'react';

import { useEffect } from 'react';

// Import Swiper
import Swiper, { Autoplay } from 'swiper';
import 'swiper/swiper.min.css';
Swiper.use([Autoplay]);

export default function Clients() {
  useEffect(() => {
    const carousel = new Swiper('.clients-carousel', {
      slidesPerView: 'auto',
      spaceBetween: 20,
      centeredSlides: true,
      loop: true,
      speed: 5000,
      noSwiping: true,
      noSwipingClass: 'swiper-slide',
      autoplay: {
        delay: 0,
        disableOnInteraction: true,
      },
    });
  }, []);

  return (
    <section className="bg-slate-800">
      <div className="py-12 mb-12 md:py-20">
        {/* Section header */}
        <div className="max-w-3xl pb-12 mx-auto text-center md:pb-16">
          <h2 className="text-gray-100 h4 font-cabinet-grotesk">
          Software and services are developed in alignment and accordance with global disclosure standards, frameworks, and regulations:
          </h2>
        </div>

        {/* Carousel built with Swiper.js [https://swiperjs.com/] */}
        {/* * Custom styles in src/css/additional-styles/theme.scss */}
        <div className="relative clients-carousel swiper-container before:absolute before:inset-0 before:w-32 before:z-10 before:pointer-events-none before:bg-gradient-to-r before:from-slate-800 after:absolute after:inset-0 after:left-auto after:w-32 after:z-10 after:pointer-events-none after:bg-gradient-to-l after:from-slate-800">
          <div className="swiper-wrapper !ease-linear select-none">
            {/* Carousel items */}
            <div className="swiper-slide !h-32 !w-32 bg-slate-800 rounded-2xl flex items-center justify-center group">
              <img
                className="duration-500 ease-in-out transform opacity-40 group-hover:opacity-100"
                src={require('../images/sasb_logo.png').default}
                alt="SASB"
              />
            </div>
            <div className="swiper-slide !h-32 !w-32 bg-slate-800 rounded-2xl flex items-center justify-center group">
              <img
                className="duration-500 ease-in-out transform opacity-40 group-hover:opacity-100"
                src={require('../images/gri_logo.png').default}
                alt="GRI"
              />
            </div>
            <div className="swiper-slide !h-32 !w-32 bg-slate-800 rounded-2xl flex items-center justify-center group">
              <img
                className="duration-500 ease-in-out transform opacity-40 group-hover:opacity-100"
                src={require('../images/tcfd_logo.png').default}
                alt="TCFD"
              />
            </div>
            <div className="swiper-slide !h-32 !w-32 bg-slate-800 rounded-2xl flex items-center justify-center group">
              <img
                className="duration-500 ease-in-out transform opacity-40 group-hover:opacity-100"
                src={require('../images/cdp_logo.webp').default}
                alt="CDP"
              />
            </div>
            <div className="swiper-slide !h-32 !w-32 bg-slate-800 rounded-2xl flex items-center justify-center group">
              <img
                className="duration-500 ease-in-out transform opacity-40 group-hover:opacity-100"
                src={require('../images/unpri_logo.webp').default}
                alt="UNPRI"
              />
            </div>
            <div className="swiper-slide !h-32 !w-32 bg-slate-800 rounded-2xl flex items-center justify-center group">
              <img
                className="duration-500 ease-in-out transform opacity-40 group-hover:opacity-100"
                src={require('../images/eu_logo.webp').default}
                alt="EU Flag"
              />
            </div>
            <div className="swiper-slide !h-32 !w-32 bg-slate-800 rounded-2xl flex items-center justify-center group">
              <img
                className="duration-500 ease-in-out transform opacity-40 group-hover:opacity-100"
                src={require('../images/gresb_logo.webp').default}
                alt="GRESB"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
