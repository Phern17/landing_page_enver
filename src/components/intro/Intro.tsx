import React from "react";
import SectionTitle from "../UI/SectionTitle";
import pointer from '../../images/arrow-right-up.svg'
import heroBanner from '../../images/ExcitedGuy.png'

const Intro = () => {
  return (
    <div className="mt-16 flex flex-col sm:flex-row">
      <div className="sm:basis-1/2 sm:pr-10">
        <SectionTitle>Build Your Awesome Platform</SectionTitle>
        <p className="mt-8 text-gray-400 font-sans">
          Enver studio is a digital studio that offers several services such as
          UI/UX Design to developers, we will provide the best service for those
          of you who use our services.
        </p>
        <button className="text-white px-5 py-[0.7rem] mt-12 bg-blue-700 flex">Our Services <img src={pointer} alt="our services pointer" className="shrink"/></button>
      </div>
      <div className="mt-12 min-h-max relative sm:basis-1/2 sm:mt-0">
        <img src={heroBanner} alt="page banner" />
      </div>
    </div>
  );
};

export default Intro;
