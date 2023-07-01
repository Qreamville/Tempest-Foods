import useCart from "@/hooks/useCart";
import { CartProps } from "@/types/Food";
import Image from "next/image";
import React from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const CartItem = ({ item }: CartProps) => {
  const increaseQuantity = useCart((state) => state.increaseQuantity);
  const reduceQuantity = useCart((state) => state.reduceQuantity);

  return (
    <div className="cart-item">
      <div className="item-main">
        <Image src={item.imageSrc} alt="food" width={60} height={60} />
        <p>{item.title}</p>
      </div>
      <div className="item-info">
        <span className="item-price">
          NGN {new Intl.NumberFormat().format(item.price)}
        </span>
        <div className="item-cta">
          <div className="item-btn">
            <button onClick={() => reduceQuantity(item)}>
              <FiMinus />
            </button>
            <span className="item-qty">{item.quantity}</span>
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
