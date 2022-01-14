import React from "react";
import logo from "../../images/enver.png";

const Footer = () => {
  return (
    <div className="flex flex-col sm:flex-row text-center mb-14 sm:justify-between">
      <div className="flex items-center w-32 mx-auto my-5 sm:mx-0 cursor-pointer">
        <img className="h-7 w-7" src={logo} alt="Enver Logo" />
        <p className="text-3xl text-white ml-1 font-mons">Enver</p>
      </div>
      <div className="flex flex-col sm:flex-row">
        <p className=" text-gray-400 block my-5 sm:mx-3 cursor-pointer">Support</p>
        <p className=" text-gray-400 block my-5 sm:mx-3 cursor-pointer">Privacy Policy</p>
        <p className=" text-gray-400 block my-5 sm:mx-3 cursor-pointer">Terms and Conditions</p>
      </div>
      <p className=" text-white block my-5">© 2020 Enver, All right reserved</p>
    </div>
  );
};

export default Footer;
