import React from "react";
import doctorImg from "../../assets/images/doctor-img03.png";
import starImg from "../../assets/images/Star.png";
import { useState } from "react";
import DoctorAbout from "./DoctorAbout";
import FeedBack from "./FeedBack";
import SidePanel from "./SidePanel";

const DoctorDetails = () => {
  const [tab, setTab] = useState("About");
  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto  ">
        <div className=" grid md:grid-cols-3 gap-[50px] ">
          <div className="md:col-span-2 ">
            <div className="flex items-center gap-5">
              <figure className="max-w-[200px] max-h-[200px] ">
                <img src={doctorImg} className="w-full" />
              </figure>
              <div className="">
                <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-2 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 rounded font-semibold ">
                  Pediatrician
                </span>
                <h3 className="text-[22px] leading-9 mt-3 text-headingColor font-bold ">
                  Dr. Farid Boudaoui
                </h3>
                <div className="flex items-center gap-[6px] ">
                  <span className=" flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingColor  ">
                    <img src={starImg} alt="" /> 4.9
                  </span>
                  <span className="text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-[400]  text-textColor ">
                    (272)
                  </span>
                </div>
                <p className="text__para text-[14px] leading-6 md:text-[15px] lg:max-w-[390px]   ">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non
                  vero.
                </p>
              </div>
            </div>
            <div className="mt-[50px] border-b border-solid border-[#0066ff34] ">
              <button
                onClick={() => setTab("About")}
                className={` ${
                  tab === "About" &&
                  "border-b border-solid border-primaryColor "
                } py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold `}
              >
                About
              </button>
              <button
                onClick={() => setTab("FeedBack")}
                className={` ${
                  tab === "FeedBack" &&
                  "border-b border-solid border-primaryColor "
                } py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold  `}
              >
                Feedback
              </button>
            </div>

            <div className="mt-[50px] ">
              {tab === "About" && <DoctorAbout />}
              {tab === "FeedBack" && <FeedBack />}
            </div>
          </div>
          <div className="">
            <SidePanel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorDetails;
