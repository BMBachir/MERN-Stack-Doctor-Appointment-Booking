import React from "react";
import heroImg01 from "../assets/images/hero-img01.png";
import heroImg02 from "../assets/images/hero-img02.png";
import heroImg03 from "../assets/images/hero-img03.png";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
const Home = () => {
  return (
    <>
      {/*======= Hero section ========= */}
      <section className="hero__section pt-[60px] 2xl:h-[800px] ">
        <div className="container  ">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between  ">
            {/*======= Hero content ========= */}
            <div>
              <div className="lg: w-[570px] ">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px] ">
                  We assist children in living healthier and more fulfilling
                  lives.
                </h1>
                <p className="text__para ">
                  In the main section of our website, we show how we're here to
                  help kids stay healthy and happy. We talk about how our online
                  platform makes it easy for parents to get top-notch medical
                  help for their children. We want to make it simple for
                  families to find the care they need, whenever they need it.
                  Our goal is to make sure every child gets the best care
                  possible.
                </p>
                <button className="btn hover:bg-blue-400">
                  Request an Appoinment
                </button>
              </div>
              {/*======= Hero counter ========= */}
              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor ">
                    30+
                  </h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px] "></span>
                  <p>Lorem ipsum dolor.</p>
                </div>

                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor ">
                    25+
                  </h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px] "></span>
                  <p>Lorem ipsum dolor.</p>
                </div>

                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor ">
                    52+
                  </h2>
                  <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px] "></span>
                  <p>Lorem ipsum dolor.</p>
                </div>
              </div>
            </div>
            {/*======= Hero Images ========= */}
            <div className="flex gap-[30px] justify-end  ">
              <div>
                <img src={heroImg01} className="w-full" />
              </div>
              <div className="mt-[30px] ">
                <img src={heroImg02} className="w-full mb-[30px] " />
                <img src={heroImg03} className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*======= Hero section end ========= */}

      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto ">
            <h2 className="heading text-center">
              Offering top-tier medical care services.
            </h2>
            <p className="text__para text-center">
              World-class healthcare tailored for children. Our robust system
              ensures unmatched expertise in pediatric care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px] ">
            <div className="py-[30px] px-5 ">
              <div className="flex items-center justify-center">
                <img src={icon01} />
              </div>
              <div className="mt-[30px] ">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700]  text-center ">
                  Find a Doctor
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center ">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
                  Fugit, quibusdam officia! Porro.
                </p>
                <Link
                  to={"/doctors"}
                  className="w-[44px] h-[44px] rounded-full border border-solid hover:text-white border-[#181A1E] mt-[30px] mx-auto flex  items-center justify-center group hover:bg-primaryColor hover:border-none "
                >
                  <BsArrowRight />
                </Link>
              </div>
            </div>

            <div className="py-[30px] px-5 ">
              <div className="flex items-center justify-center">
                <img src={icon02} />
              </div>
              <div className="mt-[30px] ">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700]  text-center ">
                  Find a Location
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center ">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
                  Fugit, quibusdam officia! Porro.
                </p>
                <Link
                  to={"/doctors"}
                  className="w-[44px] h-[44px] rounded-full border border-solid hover:text-white border-[#181A1E] mt-[30px] mx-auto flex  items-center justify-center group hover:bg-primaryColor hover:border-none "
                >
                  <BsArrowRight />
                </Link>
              </div>
            </div>

            <div className="py-[30px] px-5 ">
              <div className="flex items-center justify-center">
                <img src={icon03} />
              </div>
              <div className="mt-[30px] ">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700]  text-center ">
                  Book Appointment
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center ">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
                  Fugit, quibusdam officia! Porro.
                </p>
                <Link
                  to={"/doctors"}
                  className="w-[44px] h-[44px] rounded-full border border-solid hover:text-white border-[#181A1E] mt-[30px] mx-auto flex  items-center justify-center group hover:bg-primaryColor hover:border-none "
                >
                  <BsArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*======= About Section ========= */}
      <section></section>
    </>
  );
};

export default Home;
