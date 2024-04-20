import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const ServiceCard = ({ item, index }) => {
  const { name, desc, bgColor, textColor } = item;

  return (
    <div className="py-[30px] px-3 lg:px-5">
      <h2 className="text-[36px] leading-9 text-headingColor font-[700] mb-6 ">
        {name}
      </h2>
      <p className="text-[16px] leading-7 text-textColor font-[400] ">
        {desc}{" "}
      </p>
      <div className="flex items-center justify-between mt-[30px] ">
        <Link
          to={"/doctors"}
          className="w-[44px] h-[44px] rounded-full border border-solid hover:text-white border-[#181A1E] flex  items-center justify-center group hover:bg-primaryColor hover:border-none "
        >
          <BsArrowRight />
        </Link>
        <span
          className="w-[44px] h-[44px] flex items-center justify-center text-[18px] leading-[30px] font-[600]"
          style={{
            background: `${bgColor}`,
            color: `${textColor}`,
            borderRadius: "6px 0 0 6px",
          }}
        >
          {index + 1}
        </span>
      </div>
    </div>
  );
};

export default ServiceCard;
