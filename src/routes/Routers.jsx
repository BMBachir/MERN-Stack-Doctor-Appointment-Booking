import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Contact from "../pages/Contact";
import Doctors from "../pages/Doctors";
import DoctorDetails from "../pages/Doctors/DoctorDetails";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/doctor-details" element={<DoctorDetails />} />
    </Routes>
  );
};

export default Routers;
