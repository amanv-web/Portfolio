import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div  className="md:mx-full md:flex md:justify-center   ">
   <div className="fixed bottom-0  font-bold md:w-auto w-full border-blue-300 border-t-2 bg-black rounded-full md:p-3 p-3 px-3 z-1 ">
      <div className="flex justify-around gap-4 ">
   <NavLink
  to="/"
  className={({ isActive }) =>
    isActive
      ? 'text-lg p-1 transition-all text-[#ffffff] bg-gradient-to-r  from-teal-800 to-blue-700 rounded-3xl px-3 '
      : 'text-lg  transition-all text-gray-500 hover:text-[#00FFFF] p-1' 
      
  }
>
  Home
</NavLink>

<NavLink
  to="/about"
  className={({ isActive }) =>
    isActive
      ? 'text-lg p-1 transition-all text-[#ffffff] bg-gradient-to-r  from-teal-800 to-blue-700 rounded-3xl px-3 '
      : 'text-lg  transition-all text-gray-500 hover:text-[#00FFFF] py-1'   }
>
  About
</NavLink>

<NavLink
  to="/skills"
  className={({ isActive }) =>
    isActive
      ? 'text-lg p-1 transition-all text-[#ffffff] bg-gradient-to-r  from-teal-800 to-blue-700 rounded-3xl px-3 '
      : 'text-lg  transition-all text-gray-500 hover:text-[#00FFFF] py-1'   }
>
  Skills
</NavLink>

<NavLink
  to="/projects"
  className={({ isActive }) =>
    isActive
      ? 'text-lg p-1 transition-all text-[#ffffff] bg-gradient-to-r  from-teal-800 to-blue-700 rounded-3xl px-3 '
      : 'text-lg  transition-all text-gray-500 hover:text-[#00FFFF] py-1'   }
>
  Projects
</NavLink>

<NavLink
  to="/contact"
  className={({ isActive }) =>
    isActive
      ? 'text-lg p-1 transition-all text-[#ffffff] bg-gradient-to-r  from-teal-800 to-blue-700 rounded-3xl px-3 '
      : 'text-lg  transition-all text-gray-500 hover:text-[#00FFFF] py-1'   }
>
  Contact
</NavLink>

      </div>
    </div>
    </div>
 
  );
}

export default Navbar;