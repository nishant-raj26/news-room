'use client'

import { Categories } from "@/constants";
import React from "react";
import NavLink from "./NavLink";
// import {usePathname} from "next/navigation"
const NavLinks = () => {
  return (
    <nav>
      {Categories.map((category) => (
        <NavLink key={category} category={category} isActive={true} />
      ))}
    </nav>
  );
};

export default NavLinks;
