"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import useCart from "@/hooks/useCart";
import { CartItemProps, FoodProps } from "@/types/Food";

const Food = ({ item }: FoodProps) => {
  const addToCart = useCart((state) => state.addToCart);
  const increaseQuantity = useCart((state) => state.increaseQuantity);
  const reduceQuantity = useCart((state) => state.reduceQuantity);

  const cart = useCart((state) => state.cart);
  const inCart: CartItemProps | undefined = cart.find(
    (food) => food.id === item.id
  );

  console.log(cart);

  return (
    <div className="food">
      <div className="food-img">
        <Image src={item.imageSrc} alt="food" width={560} height={250} />
      </div>
      <p>{item.title}</p>
      <div className="food-price">
        <span>NGN {new Intl.NumberFormat().format(item.price)}</span>
      </div>
      {inCart ? (
        <div className="food-cta">
          <div className="food-btn1">
            <button
              onClick={() => reduceQuantity(inCart)}
              className={`${inCart?.quantity === 1 ? "btn-disabled" : ""}`}
            >
              <FiMinus />
            </button>
            <span className="food-qty">{inCart?.quantity}</span>
            <button onClick={() => increaseQuantity(inCart)}>
              <FiPlus />
            </button>
          </div>
        </div>
      ) : (
        <button className="food-btn2" onClick={() => addToCart(item)}>
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default Food;
