import React, { useState } from "react";
import { Link } from "react-router-dom";
const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <section className="px-5 lg:px-0 mt-[-100px] mb-[-100px] ">
      <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10 ">
        <h3 className="text-headingColor text-[32px] leading-9 font-bold mb-10 ">
          Hello! <span className="text-primaryColor  "> Welcome </span> Back 🎉
        </h3>
        <form action="" className="py-4 md:py-0 ">
          <div className="mb-5">
            <input
              type="email"
              placeholder="Enter Your Email"
              name="email"
              onChange={handleInputChange}
              className="w-full px-4 py-3 border-b border-solid  focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer "
              required
            />
          </div>

          <div className="mb-5">
            <input
              type="password"
              placeholder="Password"
              name="email"
              onChange={handleInputChange}
              className="w-full px-4 py-3 border-b border-solid  focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer "
              required
            />
          </div>
          <div className="mt-7 ">
            <button
              type="submit"
              className="w-full bg-primaryColor hover:bg-hoverColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3 "
            >
              Login
            </button>
          </div>
          <p className="mt-5 text-textColor text-center">
            Dont have an account?{" "}
            <Link
              to={"/register"}
              className="text-primaryColor hover:text-hoverColor font-medium ml-1 "
            >
              Register
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
