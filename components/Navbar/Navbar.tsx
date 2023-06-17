import { Noto_Sans } from "next/font/google";
import React from "react";
import Link from "next/link";
import Search from "./Search";
import Cart from "./Cart";

const inter = Noto_Sans({ subsets: ["latin"], weight: "900" });

const Navbar = () => {
  return (
    <header className="nav">
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
