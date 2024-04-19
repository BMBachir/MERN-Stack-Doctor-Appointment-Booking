import { React, useEffect, useRef, useState } from "react";
import logo from "../../assets/images/Logo.png";
import { NavLink, Link } from "react-router-dom";
import userImg from "../../assets/images/avatar-icon.png";
import { BiMenu } from "react-icons/bi";
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
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  {
    /*======= ADI Tkhali header ida hbati akter mn 80 thit class "sticky__header" f header ki tarje3 tetnaha clas wahdeha ========= */
  }

  const handelStickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("stiky__header");
      }
    });
  };

  {
    /*======= Use ref to control the handleStickyHeader when happed a change it will stop the event listener ========= */
  }
  useEffect(() => {
    handelStickyHeader();
    return () => window.removeEventListener("scroll", handelStickyHeader);
  });

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  return (
    <header className="header flex items-center" ref={headerRef}>
      <div className="container">
        <div className="flex itmes-center justify-between">
          {/*======= logo ========= */}
          <div>
            <img src={logo} alt="" className="w-40 pt-9" />
          </div>

          {/*======= menu ========= */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLinks.map((link, index) => (
                <li key={index} className="">
                  <NavLink
                    to={link.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-primaryColor text-[16px] leading-7 font-[600] "
                        : "text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor"
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/*======== nav right ========= */}

          <div className=" flex items-center gap-7">
            <div className="hidden">
              <Link to={"/"}>
                <figure className="w-[35px] h-[35px] rounded-full ">
                  <img src={userImg} className="w-full rounded-full" />
                </figure>
              </Link>
            </div>
            <Link to={"/login"}>
              <button className="bg-primaryColor hover:bg-blue-400 py-2 px-6 text-white font-[600] h-[44px] flex items-center rounded-[50px]">
                Login
              </button>
            </Link>
            <span className="md:hidden" onClick={toggleMenu}>
              <BiMenu className="w-6 h-6 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
