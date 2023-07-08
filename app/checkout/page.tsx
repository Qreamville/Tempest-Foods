"use client";

import Payment from "@/components/Checkout/Payment";
import YourInfo from "@/components/Checkout/YourInfo";
import React, { useState } from "react";

const Checkout = () => {
  const [tab, setTab] = useState("info");
  const currentTab = tab === "info";

  return (
    <main className="checkout-page">
      <div className="tab">
        <div className={`${currentTab ? "is-active" : ""}`}>Your info</div>
        <div>Payment</div>
      </div>
      <div>
        {tab === "info" && <YourInfo />}
        {tab === "payment" && <Payment />}
      </div>
    </main>
  );
};

export default Checkout;
