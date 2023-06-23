import React, { useState, useEffect } from "react";
import { BiCartAlt } from "react-icons/bi";
import CartModal from "../Modal/CartModal";
import useCartModal from "@/hooks/useCartModal";

const Cart = () => {
  const cartModal = useCartModal((state) => state.isOpen);

  useEffect(() => {
    if (cartModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [cartModal]);

  const onclick = useCartModal((state) => state.onOpen);

  return (
    <>
      <button className="nav-cart" onClick={onclick}>
        <div className="cart-icon">
          <BiCartAlt size={24} />
          <div className="badge">1</div>
        </div>
        <span>Cart</span>
      </button>
      {cartModal && <CartModal />}
    </>
  );
};

export default Cart;
