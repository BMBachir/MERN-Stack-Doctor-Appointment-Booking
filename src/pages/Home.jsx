import React from "react";
import heroImg01 from "../assets/images/hero-img01.png";
import heroImg02 from "../assets/images/hero-img02.png";
import heroImg03 from "../assets/images/hero-img03.png";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import featureImg from "../assets/images/feature-img.png";
import faqImg from "../assets/images/faq-img.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import About from "../components/About/About";
import ServiceList from "../components/Services/ServiceList";
import DoctorList from "../components/Doctors/DoctorList";
import FaqList from "../components/Faq/FaqList";
import Testimonial from "../components/Testimonial/Testimonial";

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
      <About />
      {/*======= Services Section ========= */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto ">
            <h2 className="heading text-center">Our medical services </h2>
            <div className="para__text text-center mt-4">
              World-class care for everyone. Our healthy System offers
              unmatched, expert health care.
            </div>
          </div>
          <ServiceList />
        </div>
      </section>
      {/*======= Services Section End ========= */}
      {/*======= Feature Section ========= */}
      <section>
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            {/*======= Feature Content ========= */}
            <div className="xl:w-[640px] ">
              <h2 className="heading ">
                Get virtual treatment <br />
                anytime.
              </h2>
              <ul className="pl-4">
                <li className="text__para">
                  1. Schedule the appoinment directly.
                </li>
                <li className="text__para">
                  2. Search for your physician here, and contact thier office.
                </li>
                <li className="text__para">
                  3. View our phycians who are accepting new patients, use the
                  online Scheduling tool to select an Appoinment time.
                </li>
              </ul>
              <Link to={"/"}>
                <button className="btn hover:bg-blue-400">Learn More</button>
              </Link>
            </div>
            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0 ">
              <img src={featureImg} className="w-3/4" />
            </div>
          </div>
        </div>
      </section>
      {/*======= Feature Section End ========= */}
      {/*======= Doctor's Section End ========= */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto ">
            <h2 className="heading text-center">Our great doctors </h2>
            <div className="para__text text-center mt-4">
              World-class care for everyone. Our healthy System offers
              unmatched, expert health care.
            </div>
          </div>
        </div>
        <DoctorList />
      </section>
      {/*======= Doctor's Section  ========= */}

      {/*======= FAQ Section  ========= */}
      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0 ">
            <div className="w-1/2 hidden md:block ">
              <img src={faqImg} />
            </div>

            <div className="w-full md:w-1/2">
              <h2 className="heading">
                Most questions by our beloved patients
              </h2>
              <FaqList />
            </div>
          </div>
        </div>
      </section>

      {/*======= FAQ Section End  ========= */}

      {/*======= Testimonial Section   ========= */}
      <div className="container mb-36">
        <div className="xl:w-[470px] mx-auto ">
          <h2 className="heading text-center">What our patient say </h2>
          <div className="para__text text-center mt-4">
            World-class care for everyone. Our healthy System offers unmatched,
            expert health care.
          </div>
        </div>
        <Testimonial />
      </div>
      {/*======= Testimonial Section End  ========= */}
    </>
  );
};

export default Home;
