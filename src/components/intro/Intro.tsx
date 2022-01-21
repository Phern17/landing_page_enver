import React from "react";
import SectionTitle from "../UI/SectionTitle";
import pointer from '../../images/arrow-right-up.svg'
import heroBanner from '../../images/ExcitedGuy.png'
import heroBannerBig from '../../images/ExcitedGuyBig.png'
import useWindowSize from "../../hooks/useWindowSize";
import { ReactComponent as ZigZag } from '../../images/zigzag.svg'
import { ReactComponent as LinkedCircle } from '../../images/linkedCircle.svg'
import { ReactComponent as DoubleTriangle } from '../../images/doubleTriangle.svg'
import {ReactComponent as Add} from '../../images/add.svg'

const Intro = () => {
  const { width } = useWindowSize()
  return (
    <div className=" mt-28 flex flex-col sm:flex-row relative -z-10">
      
      <div className="sm:basis-1/2 sm:pr-10">
        <SectionTitle>Build Your Awesome Platform</SectionTitle>
        <p className="mt-8 text-gray-400 font-sans">
          Enver studio is a digital studio that offers several services such as
          UI/UX Design to developers, we will provide the best service for those
          of you who use our services.
        </p>
        <button className="text-white px-5 py-[0.7rem] mt-12 bg-blue-600 flex active:bg-blue-900">Our Services <img src={pointer} alt="our services pointer" className="shrink"/></button>
      </div>
      <div className="mt-12 min-h-max relative sm:basis-1/2 sm:mt-0">
        <ZigZag className="absolute top-3"/>
        <LinkedCircle className="absolute top-0 right-9"/>
        <DoubleTriangle className="absolute -bottom-10 sm:bottom-40 sm:-left-20" />
        <Add className="absolute bottom-10 right-0 sm:bottom-40"/>
        <img src={width && width >= 640 ? heroBannerBig: heroBanner} className="relative sm:-top-24 mx-auto" alt="page banner" />
      </div>
    </div>
  );
};

export default Intro;
