import { React, useEffect, useState } from "react";
import logo from "../../assets/images/Logo.png";
import { NavLink, Link } from "react-router-dom";

const navLinks = [
  {
    path: "/",
    display: "Home",
  },

  {
    path: "/doctors",
    display: "Find a Doctor",
  },

  {
    path: "/services",
    display: "Services",
  },

  {
    path: "/contact",
    display: "Contact",
  },
];

const Header = () => {
  return (
    <header className="header flex items-center">
      <div className="container">
        <div className="flex itmes-center justify-between">
          {/*======= logo ========= */}
          <div>
            <img src={logo} alt="" className="w-40" />
          </div>

          {/*======= menu ========= */}
          <div className="navigation">
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-primaryColor text-[16px] leading-7 font-[600] "
                        : "text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor"
                    }
                  >
                    {" "}
                    {link.display}{" "}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
