import React from "react";
import heroImg01 from "../assets/images/hero-img01.png";
import heroImg02 from "../assets/images/hero-img02.png";
import heroImg03 from "../assets/images/hero-img03.png";
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
                  We help patients childs live healthy, greater life
                </h1>
                <p className="text__para ">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Provident ab dolorem praesentium sed voluptatum, cum tempora
                  voluptate distinctio magni illo ipsa consequatur repellendus
                  rem minima doloremque nesciunt dolorum adipisci excepturi!
                </p>
                <button className="btn hover:bg-blue-700">
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
    </>
  );
};

export default Home;
