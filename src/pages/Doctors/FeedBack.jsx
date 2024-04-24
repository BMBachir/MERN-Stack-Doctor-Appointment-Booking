import React, { useState } from "react";
import avatar from "../../assets/images/avatar-icon.png";
import { formateDate } from "../../utils/formateDate";
import { AiFillStar } from "react-icons/ai";
import FeedBackForm from "./FeedBackForm";

const FeedBack = () => {
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  return (
    <div>
      <div className="mb-[50px] ">
        <h4 className="tex-[20px] leading-[30px] font-bold text-headingColor mb-[30px] ">
          All reviews (272)
        </h4>

        <div className="flex justify-between gap-10 mb-[30px] ">
          <div className="flex gap-3">
            <figure className="w-10 h-10 rounded-full">
              <img src={avatar} alt="" />
            </figure>
            <div>
              <h5 className="text-[16px] leading-6 text-primaryColor font-bold ">
                Ali Feknous
              </h5>
              <p className="text-[14px] leading-6 font-medium text-textColor">
                {" "}
                {formateDate("1-5-2024")}{" "}
              </p>
              <p className="text__para mt-3 font-medium text-[15px]">
                Highly recommended, realy gratfull for the service 🤩
              </p>
            </div>
          </div>
          <div className="flex gap-1">
            {[...Array(5).keys()].map((_, index) => (
              <AiFillStar key={index} color="#0067FF" />
            ))}
          </div>
        </div>
      </div>

      {!showFeedbackForm && (
        <div className="text-center">
          <button
            className="btn hover:bg-hoverColor"
            onClick={() => setShowFeedbackForm(true)}
          >
            Give Feedback
          </button>
        </div>
      )}
      {showFeedbackForm && <FeedBackForm />}
    </div>
  );
};

export default FeedBack;
