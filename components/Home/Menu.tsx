import React from "react";

interface MenuProps {
  text: string;
}

const Menu = ({ text }: MenuProps) => {
  return <div className="menu">{text}</div>;
};

export default Menu;
