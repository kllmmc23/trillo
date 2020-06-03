import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <ul className="sidebar-nav">
        <li className="sidebar-nav__item sidebar-nav__item--active">
          <NavLink to="/" className="sidebar-nav__link">
            <svg className="sidebar-nav__icon">
              <use xlinkHref="img/sprite.svg#icon-home"></use>
            </svg>
            <span>Hotel</span>
          </NavLink>
        </li>

        <li className="sidebar-nav__item">
          <NavLink to="/" className="sidebar-nav__link">
            <svg className="sidebar-nav__icon">
              <use xlinkHref="img/sprite.svg#icon-aircraft-take-off"></use>
            </svg>
            <span>Flight</span>
          </NavLink>
        </li>

        <li className="sidebar-nav__item">
          <NavLink to="/" className="sidebar-nav__link">
            <svg className="sidebar-nav__icon">
              <use xlinkHref="img/sprite.svg#icon-key"></use>
            </svg>
            <span>Car rental</span>
          </NavLink>
        </li>

        <li className="sidebar-nav__item">
          <NavLink to="/" className="sidebar-nav__link">
            <svg className="sidebar-nav__icon">
              <use xlinkHref="img/sprite.svg#icon-map"></use>
            </svg>
            <span>Tours</span>
          </NavLink>
        </li>
          </ul>
          <div className="legal">
              &copy; 2020 by Trillo. All rights reserved.
          </div>
    </nav>
  );
};

export default Sidebar;
