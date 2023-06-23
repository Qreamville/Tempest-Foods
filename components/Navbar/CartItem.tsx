import Image from "next/image";
import React from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const CartItem = () => {
  return (
    <div className="cart-item">
      <div className="item-main">
        <Image src="/food.jpg" alt="food" width={60} height={60} />
        <p>Jollof Rice with Peppered Chicken Wings </p>
      </div>
      <div className="item-info">
        <span className="item-price">NGN 3,500.00</span>
        <div className="item-cta">
          <div className="item-btn">
            <button>
              <FiMinus />
            </button>
            <span className="item-qty">100</span>
            <button>
              <FiPlus />
            </button>
          </div>
          <button>Remove</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
