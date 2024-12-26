import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex gap-4 bg-slate-600 p-2">
      <Link to={"/"}>home</Link>
      <Link to={"/about"}>about</Link>
      <Link to={"/contact"}>contact</Link>
    </div>
  );
}

export default Navbar;
