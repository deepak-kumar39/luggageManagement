import React from "react";
import web from "../images/home.jpg";
import "../Home/home.css";
import Common from "../Common/";
// import { NavLink } from "react-router-dom";
function Home() {
  return (
    <>
      <Common
        name="Move freely without being worry about your luggage with"
        visit="/services"
        imgsrc={web}
        btn="Get Started"
      />
    </>
  );
}

export default Home;
