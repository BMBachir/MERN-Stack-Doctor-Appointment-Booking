import React from "react";
import { doctors } from "../assets/data/doctors";
import DoctorCard from "../components/Doctors/DoctorCard";
import Testimonial from "../components/Testimonial/Testimonial";

const Doctors = () => {
  return (
    <>
      <section className="doctorSearch__section pt-[150px] pb-[150px] ">
        <div className="container text-center">
          <h2 className="heading"> Find a Doctor</h2>
          <div className="max-w-[570px] mt-[30px]  mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-center  ">
            <input
              type="search"
              className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder: text-textColor"
              placeholder="Search for doctor"
            />
            <button className="btn mt-0 rounded-[0px] rounded-r-md hover:bg-blue-400 ">
              Search
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-5  ">
            {doctors.map((doctor, index) => (
              <DoctorCard doctor={doctor} index={index} key={index} />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container mb-[200px]">
          <div className="xl:w-[470px] mx-auto ">
            <h2 className="heading text-center">What our patient say </h2>
            <div className="para__text text-center mt-4">
              World-class care for everyone. Our healthy System offers
              unmatched, expert health care.
            </div>
          </div>
          <Testimonial />
        </div>
      </section>
    </>
  );
};

export default Doctors;
