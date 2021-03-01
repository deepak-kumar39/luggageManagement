import React from "react";
import {useState} from "react";
import "../Contact/contact.css";
function Contact() {
  return (
    <>
      <div className="my-5">
        <h1 className="contact">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form className="main-form"  >
              <div class="form-group">
                <label for="exampleFormControlInput1">Full Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name"
                  name="fullname"
                  // value={data.fullname}
                  onChange={InputEvent}
                  required
                />
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  name="email"
                  // value={data.email}
                  required
                />
              </div>
              <div class="form-group">
                <label for="exampleFormControlSelect1">Select Service</label>
                <select
                  class="form-control"
                  id="exampleFormControlSelect1"
                  required
                >
                  <option>Heavy Luggage</option>
                  <option>Transport via ship</option>
                  <option>Small luggage</option>
                  <option>Via train</option>
                  {/* <option>5</option> */}
                </select>
              </div>
              {/* <div class="form-group">
    <label for="exampleFormControlFile1">Choose file</label>
    <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
  </div> */}
              <div class="form-group">
                <label for="exampleFormControlTextarea1">Message</label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  required
                  name="msg"
                  // value={data.msg}
                ></textarea>
              </div>
              <button type="submit" class="btn btn-dark">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
