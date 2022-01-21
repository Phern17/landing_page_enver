import React from "react";
import useWindowSize from "../../hooks/useWindowSize";
import logo from "../../images/enver.png";
import burgerBtn from "../../images/Sort.svg";
import Button from "../UI/Button";
import NavLinks from "./NavLinks";
import { propFunctionInterface } from "../interfaces";

const MainHeader = (props: propFunctionInterface) => {
  const { width } = useWindowSize();
  
  let navItems = (
    
    <img src={burgerBtn} alt="Expand Menu Button" onClick={props.onExpand} />
  );

  if (typeof width === "number" && width >= 640) {
    navItems = (
      <React.Fragment>
        <NavLinks />
        <Button text="Contact Us" className=" hover:text-orange-300 hover:border-orange-300 active:bg-zinc-600"/>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <div className="flex justify-between items-center fixed z-100 w-full top-0 px-6 py-2 sm:px-32 z-50 bg-zinc-500">
        <div className="shrink-0 flex items-center">
          <img className="h-7 w-7" src={logo} alt="Enver Logo" />
          <p className="text-3xl text-white ml-1 font-mons">Enver</p>
        </div>
        {navItems}
      </div>
      
    </React.Fragment>
  );
};

export default MainHeader;
