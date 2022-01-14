import React from "react";
import { createPortal } from "react-dom";
import useWindowSize from "../../hooks/useWindowSize";
import NavLinks from "./NavLinks";
import Button from "../UI/Button";
import { propFunctionInterface } from "../interfaces";

const PopUpModal = (props: propFunctionInterface) => {
  const { width, height } = useWindowSize();

  const backdrop = (
    <div style={{ width: width, height: height }} className="bg-black"></div>
  );
  const modal = (
    <div className="flex flex-col fixed top-0 left-0 right-0 h-full text-2xl">
      <div className="m-auto">
      <Button text="X" className="absolute top-8 right-4 border-0" onClick={props.onExpand}/>
        <NavLinks
          onExpand={props.onExpand}
          className="text-center space-y-6"
        />
        <Button text="Contact Us" className=" mt-10"/>
      </div>
    </div>
  );

  return (
    <React.Fragment>
      {createPortal(backdrop, document.getElementById("backdrop") as Element)}
      {createPortal(modal, document.getElementById("modal") as Element)}
    </React.Fragment>
  );
};

export default PopUpModal;
