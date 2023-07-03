import useCart from "@/hooks/useCart";
import React from "react";

const Checkout = () => {
  const cart = useCart((state) => state.cart);
  const totalPrice = cart.reduce(
    (acc, product) => acc + product.price * (product.quantity as number),
    0
  );

  return (
    <div className="checkout">
      <div className="checkout-text">
        <span>Total ({cart.length}meals)</span>
        <span>NGN {totalPrice}</span>
      </div>
      <button className="checkout-btn">Checkout</button>
    </div>
  );
};

export default Checkout;
