import { formatPrice } from "@/actions/formatPrice";
import useCart from "@/hooks/useCart";
import React from "react";
import { useRouter } from "next/navigation";
import useCartModal from "@/hooks/useCartModal";

const Checkout = () => {
  const router = useRouter();
  const cart = useCart((state) => state.cart);
  const closeModal = useCartModal((state) => state.onClose);
  const totalPrice = cart.reduce(
    (acc, product) => acc + product.price * (product.quantity as number),
    0
  );

  const checkout = () => {
    router.push("/checkout");
    closeModal();
  };

  return (
    <div className="checkout">
      <div className="checkout-text">
        <span>Total ({cart.length}meals)</span>
        <span>NGN {formatPrice(totalPrice)}</span>
      </div>
      <button className="checkout-btn" onClick={checkout}>
        Checkout
      </button>
    </div>
  );
};

export default Checkout;
