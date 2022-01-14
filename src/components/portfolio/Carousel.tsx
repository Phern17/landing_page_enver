import React, { useState } from "react";
import portfolio_1 from "../../images/portfolio_1.png";
import portfolio_2 from "../../images/portfolio_2.jpg";
import portfolio_3 from "../../images/portfolio_3.jpg";

const imageArr: string[] = [portfolio_1, portfolio_2, portfolio_3];

const Carousel = () => {
  const [currImage, setCurrImage] = useState(0);

  const refs = imageArr.map((image) => React.createRef<HTMLDivElement>());

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

  const totalImages = imageArr.length;

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
        {imageArr.map((img, i) => (
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
          className="rounded-full bg-gray-600 text-white w-[38px] h-[38px] m-2 hover:bg-blue-600"
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <button
          onClick={nextImage}
          className="rounded-full bg-gray-600 text-white w-[38px] h-[38px] m-2 hover:bg-blue-600"
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </React.Fragment>
  );
};

export default Carousel;
