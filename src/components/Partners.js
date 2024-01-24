import React from 'react';
import Clients from './Clients';

function Partners() {
  return (
    <section className="relative">
      {/* Vertical gray line */}
      <div
        className="absolute left-0 right-0 -top-2 m-auto w-px p-px h-10 bg-gray-300 transform -translate-y-1/2"
      ></div>
      <div className="relative my-4 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-4 md:py-4">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center md:pb-4">
            <h2 className="h2 text-slate-800 mb-4">
              Trusted by the World's Leading
              Investors and Companies Alike
            </h2>
            <p className="text-xl text-gray-600" data-aos="zoom-y-out">
              Pushing boundaries on the quality and depth of impact analytics
              for and alongside organizations across the world.
            </p>
          </div>
          <Clients />
        </div>
      </div>
    </section>
  );
}

export default Partners;
