import React from "react";
import { formateDate } from "../../utils/formateDate";

const DoctorAbout = () => {
  return (
    <div>
      <div>
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2  ">
          About of
          <span className="text-irisBlueColor font-bold text-[24px] leading-9  ">
            Farid Boudaoui
          </span>
        </h3>
        <p className="text_para">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
          accusantium in, voluptatibus libero eius laborum soluta minima dolor
          iusto cumque repellat accusamus, porro excepturi! Recusandae hic
          necessitatibus quo ad aut.
        </p>
      </div>
      <div className="mt-[12px]">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold   ">
          Education
        </h3>
        <ul className="pt-4 md:p-5">
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px] ">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold ">
                {formateDate("1-4-1990")} - {formateDate("7-3-1994")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                PHD in Pediatrician
              </p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              New appolo Hospital, New York.
            </p>
          </li>

          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px] ">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold ">
                {formateDate("12-5-1994")}-{formateDate("7-2-1996")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                PHD in Pediatrician
              </p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              New appolo Hospital, New York.
            </p>
          </li>
        </ul>
      </div>
      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold   ">
          Experience
        </h3>
        <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5 ">
          <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-yellowColor text-[15px] leading-6 font-semibold  ">
              {formateDate("12-5-2000")} -{formateDate("7-2-2005")}
            </span>
            <p className="text-[16px] leading-6 font-medium text-textColor">
              Sr. Pediatrician
            </p>
            <p className="text-[14px] leading-6 font-medium text-textColor">
              New appolo Hospital, New York.
            </p>
          </li>

          <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-yellowColor text-[15px] leading-6 font-semibold  ">
              {formateDate("12-5-2006")} - {formateDate("7-2-2016")}
            </span>
            <p className="text-[16px] leading-6 font-medium text-textColor">
              Sr. Pediatrician
            </p>
            <p className="text-[14px] leading-6 font-medium text-textColor">
              Diabana Hospital, New Jersy.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DoctorAbout;
