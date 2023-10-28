import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Wishlist = () => {
  return (
    <div className="text-4xl relative">
      <span className="text-sm w-5 h-5 text-center bg-orange-400 rounded-full font-bold absolute -right-1 top-4 flex justify-center items-center">
        0
      </span>
      <AiOutlineShoppingCart />
    </div>
  );
};

export default Wishlist;
