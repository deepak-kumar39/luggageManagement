import React from "react";
// import web from "../images/home.jpg";
import "../Common/style.css";
import { NavLink } from "react-router-dom";
function Common(props) {
  return (
    <>
      <section id="header">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 mx-auto">
                <div className="row">
              <div id="header-text" className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 mt-3">
                <h1 className="text">
                 {props.name}
                  <strong className="brand-name"> LMS</strong>
                </h1>
                <div className="mt-3">
                    <NavLink to={props.visit} className="btn btn-dark">{props.btn}</NavLink>
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 header-img mt-3">
                  <img src={props.imgsrc} className="img-fluid animated" alt="home img"/>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Common;
