import React from "react";
import { BiCartAlt } from "react-icons/bi";

const Cart = () => {
  return (
    <button className="nav-cart">
      <BiCartAlt size={24} />
      <span>Cart</span>
    </button>
  );
};

export default Cart;
