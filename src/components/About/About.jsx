import React from "react";
import aboutImg from "../../assets/images/about.png";
import aboutCardImg from "../../assets/images/about-card.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section>
      <div className="container ">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row ">
          {/*======= About Section ========= */}
          <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1 ">
            <img src={aboutImg} alt="" />
            <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] ml-[300px]">
              <img src={aboutCardImg} alt="" />
            </div>
          </div>
          <div className="w-full lg:w-1/2 xl:w[670px] oder-1 lg:order-2 ">
            <h2 className="heading">Proud to be one of the nations best</h2>
            <p className="text__para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              necessitatibus, qui accusamus error beatae sint praesentium
              eveniet unde officia dignissimos ex illo recusandae, sunt aliquam
              molestias vitae animi, nihil commodi!
            </p>

            <p className="text__para mt-[30px] ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
              quis, sapiente reprehenderit porro in modi praesentium magni
              adipisci voluptatibus placeat consequuntur nobis, rem ipsa numquam
              quasi laboriosam quos qui esse.
            </p>

            <Link to="/">
              <button className="btn hover:bg-blue-400">Learn more</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
