import React from "react";
import Food from "./Food";

const Foods = ({ food }: any) => {
  return (
    <div className="home-foods">
      {food?.map((item: any) => (
        <Food key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Foods;
