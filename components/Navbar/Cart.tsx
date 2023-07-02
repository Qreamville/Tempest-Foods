import React, { useState, useEffect } from "react";
import { BiCartAlt } from "react-icons/bi";
import CartModal from "../Modal/CartModal";
import useCartModal from "@/hooks/useCartModal";
import useCart from "@/hooks/useCart";
import ClientOnly from "../ClientOnly";

const Cart = () => {
  const cartModal = useCartModal((state) => state.isOpen);
  const cart = useCart((state) => state.cart);

  useEffect(() => {
    if (cartModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [cartModal]);

  const onclick = useCartModal((state) => state.onOpen);

  return (
    <ClientOnly>
      <button className="nav-cart" onClick={onclick}>
        <div className="cart-icon">
          <BiCartAlt size={24} />
          <div className="badge">{cart.length}</div>
        </div>
      </button>
      {cartModal && <CartModal />}
    </ClientOnly>
  );
};

export default Cart;
