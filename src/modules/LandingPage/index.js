import React from "react";
import Hero from "./Hero";
import CustomerStories from "./CustomerStories";
import Testimonials from "./Testimonials";
import CustomerCarousel from "./CustomersCarousel";

export default function LandingPage() {
  return (
    <div>
      <Hero />
      <CustomerStories />

      <div className="md:mt-[128px] mt-[56px] lg:px-[72px]">
        <Testimonials />
      </div>
      <div className=" mt-[40px] md:mt-[100px]">
        <CustomerCarousel />
      </div>
    </div>
  );
}
