import Image from "next/image";
import React from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

const Food = () => {
  return (
    <div className="food">
      <div className="food-img">
        <Image src="/food2.jpg" alt="food" width={560} height={250} />
      </div>
      <p>Asun Spaghetti with Red Pepper Sauce</p>
      <div className="food-price">
        <span>NGN 3,500</span>
      </div>
      <div className="food-cta">
        <div className="food-btn1">
          <button>
            <FiMinus />
          </button>
          <span className="food-qty">100</span>
          <button>
            <FiPlus />
          </button>
        </div>
      </div>
      <div className="food-btn2">
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default Food;
