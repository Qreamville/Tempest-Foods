import useCart from "@/hooks/useCart";
import usePaymentModal from "@/hooks/usePayment";
import { useRouter } from "next/navigation";
import React from "react";

const PaymentModal = () => {
  const router = useRouter();
  const close = usePaymentModal((state) => state.onClose);
  const clearCart = useCart((state) => state.clearCart);

  const onClose = () => {
    close();
    clearCart();
    router.push("/");
  };

  return (
    <div className="payment-modal">
      <div className="container">
        <p>Payment Completed 🎊🎉</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default PaymentModal;
