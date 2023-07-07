"use client";

import React, { useState } from "react";
import Link from "next/link";
import SearchInput from "./SearchInput";
import Cart from "./Cart";

const Navbar = () => {
  const [colorChange, setColorChange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 20) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeNavbarColor);
  }

  return (
    <header className={`nav ${colorChange ? "nav-bg__change" : ""}`}>
      <div>
        <Link href="/" className="nav-brand">
          tempest
        </Link>
        <div className="nav-cta">
          <SearchInput />
          <Cart />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
