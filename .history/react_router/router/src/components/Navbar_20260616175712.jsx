import React from "react";
import { Link, NavLink } from "react-router-dom";
imp

const Navbar = () => {
  return (
    <div>
      {/* <Link to="/">Home</Link>
    <Link to="contact">Contatos</Link> */}
      <NavLink to="/">Home</NavLink>
      <NavLink to="/contact">Contatos</NavLink>
    </div>
  );
};

export default Navbar;
