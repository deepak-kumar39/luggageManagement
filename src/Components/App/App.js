import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle";

import "./App.css";
import Home from "../Home";
import { BrowserRouter, Redirect, Route,  Switch } from "react-router-dom";
import About from "../About";
import Services from "../Services";
import Contact from "../Contact";
import Navbar from "../Navbar/"
// import Footer from "../Footer/"
function App() {
  return (
    <>
   <BrowserRouter>
   <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
      </BrowserRouter>
      
    </>
  );
}

export default App;
