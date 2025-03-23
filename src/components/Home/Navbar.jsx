import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 backdrop-blur-2xl border border-[#00FFFF] shadow-lg rounded-full p-3 px-6 z-1">
      <div className="flex justify-around gap-4">
        <NavLink to="/" className="text-lg font-semibold  transition-all hover:text-[#00FFFF]">
          Home
        </NavLink>
        <NavLink to="/about" className="text-lg font-semibold transition-all hover:text-[#00FFFF]">
          About
        </NavLink>
        <NavLink to="/skills" className="text-lg font-semibold transition-all hover:text-[#00FFFF]">
          Skills
        </NavLink>
        <NavLink to="/projects" className="text-lg font-semibold transition-all hover:text-[#00FFFF]">
          Projects
        </NavLink>
        <NavLink to="/contact" className="text-lg font-semibold transition-all hover:text-[#00FFFF]">
          Contact
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;