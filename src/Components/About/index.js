import React from "react";
import web from "../images/about.jpg";
import "../Home/home.css";
// import { NavLink } from "react-router-dom";
import Common from "../Common/";
function About() {
  return (
    <>
      <Common
        name="Welcome to About us"
        visit="/contact"
        imgsrc={web}
        btn="Contact Now"
      />
    </>
  );
}

export default About;
