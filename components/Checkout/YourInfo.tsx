import React from "react";
import InfoForm from "./InfoForm";

const YourInfo = () => {
  return (
    <div className="info">
      <div className="header">
        <h4>Your Information</h4>
        <span>
          Please enter your information to create an account in other to
          complete your order.
        </span>
      </div>
      <InfoForm />
    </div>
  );
};

export default YourInfo;
