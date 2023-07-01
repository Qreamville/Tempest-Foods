"use client";

import React from "react";
import Menu from "@/components/Home/Menu";
import { menus } from "@/constants/menus";

const Menus = () => {
  return (
    <div>
      {menus.map((menu) => (
        <Menu key={menu} text={menu} />
      ))}
    </div>
  );
};

export default Menus;
