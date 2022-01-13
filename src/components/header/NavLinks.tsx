import React from "react";

const links = [
  { href: "#Home", title: "Home" },
  { href: "#Services", title: "Services" },
  { href: "#OurProjects", title: "Our Projects" },
  { href: "#AboutUs", title: "About Us" },
];

const NavLinks = () => {
  return (
    <div className="text-white">
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
