import React from "react";
import SectionWrapper from "../wrapper/SectionWrapper";
import BG from "../../images/BG.jpg";
import Big_BG from "../../images/BG_Big.jpg"
import useWindowSize from "../../hooks/useWindowSize";

const WhyUs = () => {
    const { width } = useWindowSize();

  return (
    <SectionWrapper title="Why Enver Is The Best Choice?" id="AboutUs" className="sm:flex-wrap sm:flex-row sm:justify-between sm:align-middle">
      <p className="mt-8 text-gray-400 font-sans">
        Watch this one minute video so you understand why you should use our
        services!
      </p>
      <img src={width && width >= 640? Big_BG : BG} alt="Enver Introduction video" className="mt-12 flex-shrink-0"/>
    </SectionWrapper>
  );
};

export default WhyUs;
