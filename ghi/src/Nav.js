import { NavLink } from "react-router-dom";
import React from "react";
import "./Navbar.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          Home
        </NavLink>
        <div className="d-flex">
          <NavLink className="btn btn-light me-2" to="/login/">
            Login
          </NavLink>
          <NavLink className="btn btn-light" to="/rooms/create">
            List a Room
          </NavLink>
          <NavLink className="btn btn-light me-2" to="/signup/">
            SignUp
          </NavLink>
          <NavLink className="btn btn-light me-2" to="/users/">
            Roomies
          </NavLink>
          <NavLink className="btn btn-light me-2" to="/rooms">
            Rooms
          </NavLink>
          <NavLink className="btn btn-light me-2" to="/preferences/pref_id">
            Preferences
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
