import React from "react";
import SectionWrapper from "../wrapper/SectionWrapper";
import code from "../../images/code.svg"
import code_yellow from "../../images/code_yellow.svg"
import layers from "../../images/layers.svg"
import video_play from "../../images/video-play.svg"
import camera from "../../images/camera.svg"
import align from "../../images/align-vertically.svg"

type serviceObj = {
  itemName: string;
  image: string;
  description: string;
};

const serviceList: serviceObj[] = [
  {
    itemName: "Development",
    image: code,
    description: "Create a platform with the best and coolest quality from us.",
  },
  {
    itemName: "UI/UX Designer",
    image: layers,
    description:
      "We provide UI/UX Design services, and of course with the best quality",
  },
  {
    itemName: "Graphik Designer",
    image: code_yellow,
    description: "We provide Graphic Design services, with the best designers",
  },
  {
    itemName: "Motion Graphik",
    image: align,
    description: "Create a platform with the best and coolest quality from us.",
  },
  {
    itemName: "Photography",
    image: camera,
    description:
      "We provide Photography services, and of course with the best quality",
  },
  {
    itemName: "Videography",
    image: video_play,
    description: "Create a platform with the best and coolest quality from us.",
  },
];

const ITERATION_MAX = Math.ceil(serviceList.length / 3);

const Services = () => {
  const content = [];

  for (let i = 0; i < ITERATION_MAX; i++) {
    const row = [];
    const innerIteration = i > 0 ? serviceList.length - 3 * i : 3;
    for (let j = 0; j < innerIteration; j++) {
      const idx = i * 3 + j;
      const currService = serviceList[idx];
      const currRow = (
        <div key={idx} className="mt-10 mb-11 text-center sm:basis-1/3 sm:max-w-[384px] sm:px-10 ">
          <div
            className={`bg-zinc-800  rounded-full w-[69px] h-[69px] bg-no-repeat bg-center mx-auto mb-5`}
            style={{ backgroundImage: `url(${currService.image})` }}
          ></div>
          <h3 className="text-white font-semibold text-3xl mb-5">
            {currService.itemName}
          </h3>
          <p className="text-gray-400 text-lg leading-7">
            {currService.description}
          </p>
        </div>
      );
      row.push(currRow);
    }
    const tempElement = <div className="flex flex-col md:flex-row" key={i}>{row}</div>;
    content.push(tempElement);
  }

  return (
    <SectionWrapper title="The Service We Provide For You">
      {content}
    </SectionWrapper>
  );
};

export default Services;
