import React, { useState } from "react";

type carouselType = {
  imageArr: string[]
}

const Carousel = (props: carouselType) => {
  const [currImage, setCurrImage] = useState(0);

  const refs = props.imageArr.map((image) => React.createRef<HTMLDivElement>());

  const scrollToImage = (i: number) => {
    setCurrImage(i);
    refs[i]?.current?.scrollIntoView({
      //     Defines the transition animation.
      behavior: "smooth",
      //      Defines vertical alignment.
      block: "nearest",
      //      Defines horizontal alignment.
      inline: "start",
    });
  };

  const totalImages = props.imageArr.length;

  const nextImage = () => {
    if (currImage >= totalImages - 1) scrollToImage(0);
    else scrollToImage(currImage + 1);
  };

  const prevImage = () => {
    if (currImage === 0) scrollToImage(totalImages - 1);
    else scrollToImage(currImage - 1);
  };

  return (
    <React.Fragment>
      <div className="flex overflow-hidden mt-16">
        {props.imageArr.map((img, i) => (
          <div className="w-full flex-shrink-0" key={img} ref={refs[i]}>
            <img
              src={img}
              className="w-full object-contain rounded-3xl"
              alt={`Portfolio ${i}`}
            />
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <button
          onClick={prevImage}
          className="rounded-full bg-gray-600 text-white w-[38px] h-[38px] m-2 hover:bg-blue-600 active:bg-blue-900"
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <button
          onClick={nextImage}
          className="rounded-full bg-gray-600 text-white w-[38px] h-[38px] m-2 hover:bg-blue-600 active:bg-blue-900"
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </React.Fragment>
  );
};

export default Carousel;
