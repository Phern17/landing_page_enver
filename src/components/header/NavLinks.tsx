import React from "react";
import { propFunctionInterface } from "../interfaces";

const links = [
  { href: "#Home", title: "Home" },
  { href: "#Services", title: "Services" },
  { href: "#OurProjects", title: "Our Projects" },
  { href: "#AboutUs", title: "About Us" },
];

interface navlinkType extends propFunctionInterface {
  className?: string
}

const NavLinks = (props: navlinkType) => {
    return (
    <div onClick={props.onExpand} className={`text-white flex flex-col sm:flex-row ${props.className ? props.className : "hello"}`}>
      {links.map((link, idx) => (
        <a
          href={link.href}
          className="mx-3 hover:text-orange-300 active:text-orange-300"
          key={idx}
        >
          {link.title}
        </a>
      ))}
    </div>
  );
};

export default NavLinks;
