import React from "react";

const InfoForm = () => {
  return (
    <form>
      <h4>Contact</h4>
      <div className="contact">
        <label htmlFor="email">Email address</label>
        <input type="text" id="email" />
        <label htmlFor="full-name">Full Name</label>
        <input type="text" id="full-name" />
        <label htmlFor="phone-no">Phone Number</label>
        <input type="text" id="phone-no" />
      </div>
      <div className="delivery-details">
        <label htmlFor="delivery-date">Select a delivery date</label>
        <input type="date" id="delivery-date" />
        <label htmlFor="delivery-location">Delivery location</label>
        <input type="text" id="delivery-location" />
        <label htmlFor="landmark">Landmark (optional)</label>
        <input type="text" id="landmark" />
      </div>
    </form>
  );
};

export default InfoForm;
