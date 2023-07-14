"use client";

import YourInfo from "@/components/Checkout/YourInfo";
import PaymentModal from "@/components/Modal/PaymentModal";
import usePaymentModal from "@/hooks/usePayment";
import React from "react";

const Checkout = () => {
  const paymentModal = usePaymentModal((state) => state.isOpen);
  return (
    <>
      {paymentModal && <PaymentModal />}
      <main className="checkout-page">
        <div>
          <YourInfo />
        </div>
      </main>
    </>
  );
};

export default Checkout;
