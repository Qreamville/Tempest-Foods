import Image from "next/image";
import React from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

interface FoodProps {
  item: {
    id: number;
    title: string;
    imageSrc: string;
    created_at: string;
    category: string;
    price: number;
  };
}

const Food = ({ item }: FoodProps) => {
  return (
    <div className="food">
      <div className="food-img">
        <Image src={item.imageSrc} alt="food" width={560} height={250} />
      </div>
      <p>{item.title}</p>
      <div className="food-price">
        <span>NGN {item.price}</span>
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
