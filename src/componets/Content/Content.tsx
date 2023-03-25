import { Component } from "react";
import { Route } from "react-router";
import { Routes } from "react-router-dom";
import Home from "../../pages/Home/Home";
import About from "../../pages/Profile/Profile";
import Contact from "../../pages/Contact/Contact";
import Profile from "../../pages/Profile/Profile";

export default class Content extends Component {
  render() {
    return (
      <div className="mt-20">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
      </div>
    );
  }
}
