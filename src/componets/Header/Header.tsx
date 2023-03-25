import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {} from "./index";
import userImage from "../../assets/user.png"

export default class Header extends Component {
  render() {
    const activeLink = "border-b-2 cursor-pointer";
    const normalLink = "cursor-pointer";
    return (
      <div className="bg-blue-900 h-20 w-full text-white fixed top-0 p-4">
        <div className='"w-full h-full'>
          <div className="flex w-full h-full items-center">
            <div className="w-1/2">
              <h1 className="font-Roboto">MyFeed.com</h1>
            </div>
            <div className="w-1/2">
              <nav className="flex w-full justify-between font-heading">
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to={"/about"}
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  About
                </NavLink>
                <NavLink
                  to={"/contact"}
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  Contact
                </NavLink>
                <NavLink
                  to={"/profile"}
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  <img src={userImage} className="w-10 h-10 rounded-full" alt="" />
                </NavLink>
              </nav>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
