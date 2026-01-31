import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <h1>JOB TRACKER</h1>

      <nav className="nav">
        <NavLink to="/jobs">JOB LIST</NavLink>
        <NavLink to="/add-job">ADD JOB</NavLink>
      </nav>
    </header>
  );
};

export default Header;
