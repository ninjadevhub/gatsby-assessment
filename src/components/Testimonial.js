import React, { useEffect } from 'react';

import TestimonialsImage01 from '../images/testimonial-01.png';
import TestimonialsImage02 from '../images/testimonial-02.png';
import TestimonialsImage03 from '../images/testimonial-03.png';
import TestimonialsImage04 from '../images/testimonial-04.png';
import TestimonialsImage05 from '../images/testimonial-05.png';

// Import Swiper
import Swiper, { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
Swiper.use([Pagination]);

function Testimonial({
  showNumbers = [1]
}) {
  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const testimonial = new Swiper('.testimonial-carousel', {
      slidesPerView: 1,
      watchSlidesProgress: true,
      pagination: {
        el: '.testimonial-carousel-pagination',
        clickable: true,
      },
    });
  }, []);

  const testimonials = [
    {
      name: 'Ian Mathews',
      title: 'CEO',
      company: 'Sensai Analytics',
      quote: 'The emissions forecasting from Rho Impact is something we have been keen to do but never had the expertise. It is great to finally get some solid numbers on our potential impact.',
      image: TestimonialsImage01
    },
    {
      name: 'Grayson Zulauf',
      title: 'CEO',
      company: 'Resonant Link',
      quote: 'We will definitely make use of this going forward - thank you!',
      image: TestimonialsImage02
    },
    {
      name: 'Jake Loosararian',
      title: 'CEO',
      company: 'Gecko Robotics',
      quote: 'Rho Impact\'s models are a game changer to help us talk about the climate impacts of our products; we are using them across sales, marketing, and fundraising.',
      image: TestimonialsImage03
    },
    {
      name: 'Scott Powell',
      title: 'Co-Founder, Chief Content Officer',
      company: 'Corporate Finance Institute',
      quote: 'Rho Impact has played a pivotal role in our efforts to provide top-notch education and streamlined capacity building around ESG, carbon markets, and more.',
      image: TestimonialsImage05
    },
    {
      name: 'Na\'ama Moran',
      title: 'CEO',
      company: 'Cheetah Technologies',
      quote: 'Our ESG commitment has always been critical to the Cheetah Technologies value proposition. I recommend reaching out to Rho...it\'s the right thing for your company, vision, and employees.',
      image: TestimonialsImage04
    },
  ]

  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 bg-slate-100 pointer-events-none -z-10"
        aria-hidden="true"
      ></div>

      <div className="relative max-w-6xl mx-auto mb-14 px-4 sm:px-6">
        <div className="pb-8 pt-8">
          <div className="relative">
            {/* Content */}
            <div className="relative px-6 pb-8 md:px-12 lg:pb-0">
              {/* Carousel built with Swiper.js [https://swiperjs.com/] */}
              {/* * Custom styles in src/css/additional-styles/theme.scss */}
              <div className="testimonial-carousel swiper-container ">
                <div className="swiper-wrapper">
                  {
                    (() => {
                      let container = [];
                      for (let i = 0; i < testimonials.length; i++) {
                        if (!showNumbers.includes(i + 1)) {
                          continue;
                        }
                        const testimonial = testimonials[i];
                        container.push(
                          <div
                            className="swiper-slide space-y-8 lg:flex items-center lg:space-y-0 lg:space-x-8 text-center lg:text-left"
                            key={i}
                          >
                            <div className="shrink-0 relative inline-flex">
                              <img

                                className="rounded-full"
                                src={testimonial.image}
                                width="250"
                                height="250"
                                alt="Rho Impact Testimonial"
                              />
                            </div>
                            <div className="relative">
                              <h4 className="h4 font-cabinet-grotesk mb-4">
                                {testimonial.quote}
                              </h4>
                              <span>
                                - {testimonial.name}, {testimonial.title}
                              </span>
                            </div>
                          </div>)
                      }
                      return container;
                    })()
                  }

                </div> {/* End swiper wrapper */}
              </div>
              {/* Bullets */}
              <div className="mt-4 lg:absolute bottom-0 right-0 lg:mt-0 lg:mr-12 lg:mb-16 z-10">
                <div className="testimonial-carousel-pagination text-center" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
