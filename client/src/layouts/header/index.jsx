import React from "react";
import { NavLink } from "react-router-dom";
import "./index.scss";

const Header = () => {
  return (
    <div id="container">
      <div className="header">
        <div className="logo">
          <img
            src="https://preview.colorlib.com/theme/course/images/logo.png"
            alt=""
          />
          <h1>COURSE</h1>
        </div>
        <ul>
          <li>
            <NavLink to={"/home-page"}>HOME</NavLink>
          </li>
          <li>
            <NavLink to={"/add-page"}>ADD COURSE</NavLink>
          </li>
          <li>
            <NavLink>WISHLIST</NavLink>
          </li>
          <li>
            <NavLink>ELEMENTS</NavLink>
          </li>
          <li>
            <NavLink>NEWS</NavLink>
          </li>
          <li>
            <NavLink>CONTACT</NavLink>
          </li>
        </ul>
        <div className="numberBox">
          <p>+43 4566 7788 2457</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
