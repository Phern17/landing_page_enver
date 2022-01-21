import React from "react";
import useWindowSize from "../../hooks/useWindowSize";
import SectionWrapper from "../wrapper/SectionWrapper";
import Carousel from "./Carousel";
import portfolio_1 from "../../images/portfolio_1.png";
import portfolio_2 from "../../images/portfolio_2.jpg";
import portfolio_3 from "../../images/portfolio_3.jpg";

const imageArr: string[] = [portfolio_1, portfolio_2, portfolio_3];

const Portfolio = () => {
  const { width } = useWindowSize();

  const gallery = (
    <div className="flex flex-row justify-between py-16">
      {imageArr.map((image, idx) => (
        <img
          key={image}
          src={image}
          alt={`gallery item ${idx}`}
          className="max-w-[336px] max-h-[253px] rounded-2xl relative overflow-hidden"
          style={{ top: `${idx * 30}px` }}
        />
      ))}
    </div>
  );
  console.log(width)

  return (
    <SectionWrapper title="Our Awesome Portfolio" id="OurProjects" centerTitle={true}>
      {width && width >= 640 ? gallery : <Carousel imageArr={imageArr} />}
    </SectionWrapper>
  );
};

export default Portfolio;
