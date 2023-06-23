import useCartModal from "@/hooks/useCartModal";
import React from "react";
import { BiX } from "react-icons/bi";
import { GiShoppingCart } from "react-icons/gi";
import CartItem from "../Navbar/CartItem";

const CartModal = () => {
  const onclick = useCartModal((state) => state.onClose);

  const cart = [1, 1];
  return (
    <div className="cart-modal">
      <div className="cart-modal__div">
        <div className="modal-content">
          <div className="content-header">
            <span>Your Cart ({cart.length})</span>
            <button onClick={onclick}>
              <BiX />
            </button>
          </div>

          {cart.length > 0 ? (
            <div className="cart-items">
              {cart.map((item) => (
                <CartItem />
              ))}
            </div>
          ) : (
            <div className="content-body">
              <div className="empty-cart">
                <GiShoppingCart size={36} />
              </div>
              <h4>Your cart is empty.</h4>
              <p>Go through our menu pick a bowl of happiness, or two.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartModal;
