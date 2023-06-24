"use client";

import { Noto_Sans } from "next/font/google";
import React, { useState } from "react";
import Link from "next/link";
import Search from "./Search";
import Cart from "./Cart";

const inter = Noto_Sans({ subsets: ["latin"], weight: "900" });

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
          <span className={inter.className}>tempest</span>
        </Link>
        <div className="nav-cta">
          <Search />
          <Cart />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
