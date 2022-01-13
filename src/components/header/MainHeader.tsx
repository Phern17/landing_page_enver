import React from "react";
import useWindowSize from "../../hooks/useWindowSize";
import logo from "../../images/enver.png";
import burgerBtn from "../../images/Sort.svg";
import Button from "../UI/Button";
import NavLinks from "./NavLinks";

type MainHeaderProp = {
  onExpand: ()=> void
}

const MainHeader = (props: MainHeaderProp) => {
  const { width } = useWindowSize();
  
  let navItems = (
    <img src={burgerBtn} alt="Expand Menu Button" onClick={props.onExpand} />
  );

  if (typeof width === "number" && width >= 640) {
    navItems = (
      <React.Fragment>
        <NavLinks />
        <Button text="Contact Us" />
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <div className="flex justify-between items-center">
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
