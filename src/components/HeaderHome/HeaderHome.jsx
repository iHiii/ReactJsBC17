//rfc
import React from "react";
import { NavLink } from "react-router-dom";

export default function HeaderHome() {
  return (
    //b4-navbar-background
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <NavLink className="navbar-brand" to={"/"}>
        Cybersoft
      </NavLink>
      <button
        className="navbar-toggler d-lg-none"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      />
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <NavLink
              exact
              activeStyle={{ textDecoration: "underline" }}
              activeClassName="bg-white text-dark"
              className="nav-link"
              to="/home"
            >
              Home <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              activeClassName="bg-white text-dark"
              className="nav-link"
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              activeClassName="bg-white text-dark"
              className="nav-link"
              to="/contact"
            >
              contact
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              activeClassName="bg-white text-dark"
              className="nav-link"
              to="/login"
            >
              login
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              activeClassName="bg-white text-dark"
              className="nav-link"
              to="/register"
            >
              register
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              activeClassName="bg-white text-dark"
              className="nav-link"
              to="/todoapp"
            >
              Todoapp
            </NavLink>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="dropdownId"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Hooks
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdownId">
              <NavLink className="dropdown-item" to="/usestate">
                Use state
              </NavLink>
              <NavLink className="dropdown-item" to="/useeffect">
                Use effect
              </NavLink>
              <NavLink className="dropdown-item" to="/usecallback">
                Use callback
              </NavLink>
              <NavLink className="dropdown-item" to="/usememo">
                Use memo
              </NavLink>
              <NavLink className="dropdown-item" to="/useref">
                Use ref
              </NavLink>
              <NavLink className="dropdown-item" to="/reduxhook">
                redux hook
              </NavLink>
              <NavLink className="dropdown-item" to="/todolisthook">
                To do list hook
              </NavLink>
            </div>
          </li>

          {/* <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                        <div className="dropdown-menu" aria-labelledby="dropdownId">
                            <a className="dropdown-item" href="#">Action 1</a>
                            <a className="dropdown-item" href="#">Action 2</a>
                        </div>
                    </li> */}
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="text"
            placeholder="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}
