import React from "react";
import { useLocation } from "react-router-dom";
import PillNav from "./PillNav";

function Navbar() {
  const location = useLocation();

  return (
    <PillNav
      items={[
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Skills", href: "/skills" },
        { label: "Projects", href: "/projects" },
        { label: "Contact", href: "/contact" },
      ]}
      activeHref={location.pathname}
    />
  );
}

export default Navbar;