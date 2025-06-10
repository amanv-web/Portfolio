import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="fixed bottom-4 left-1/2 font-bold -translate-x-1/2 backdrop-blur-2xl border-t-2 border-teal-800 shadow-lg rounded-full md:p-3 p-2 px-6 z-1">
      <div className="flex justify-around gap-4 ">
   <NavLink
  to="/"
  className={({ isActive }) =>
    isActive
      ? 'text-lg p-1 transition-all text-[#ffffff] bg-teal-700 rounded-3xl px-3'
      : 'text-lg  transition-all text-gray-500 hover:text-[#00FFFF] p-1' 
      
  }
>
  Home
</NavLink>

<NavLink
  to="/about"
  className={({ isActive }) =>
    isActive
     ? 'text-lg py-1 transition-all text-[#ffffff] bg-teal-700 rounded-3xl px-3'
      : 'text-lg  transition-all text-gray-500 hover:text-[#00FFFF] py-1'   }
>
  About
</NavLink>

<NavLink
  to="/skills"
  className={({ isActive }) =>
    isActive
    ? 'text-lg py-1 transition-all text-[#ffffff] bg-teal-700 rounded-3xl px-3'
      : 'text-lg  transition-all text-gray-500 hover:text-[#00FFFF] py-1'   }
>
  Skills
</NavLink>

<NavLink
  to="/projects"
  className={({ isActive }) =>
    isActive
    ? 'text-lg py-1 transition-all text-[#ffffff] bg-teal-700 rounded-3xl px-3'
      : 'text-lg  transition-all text-gray-500 hover:text-[#00FFFF] py-1'   }
>
  Projects
</NavLink>

<NavLink
  to="/contact"
  className={({ isActive }) =>
    isActive
   ? 'text-lg py-1 transition-all text-[#ffffff] bg-teal-700 rounded-3xl px-3'
      : 'text-lg  transition-all text-gray-500 hover:text-[#00FFFF] py-1'   }
>
  Contact
</NavLink>

      </div>
    </div>
  );
}

export default Navbar;