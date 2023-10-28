import React from "react";
import { MdFavoriteBorder } from "react-icons/md";

const Favorite = () => {
  return (
    <div className="text-4xl relative">
      <span className="text-sm w-5 h-5 text-center bg-orange-400 rounded-full font-bold absolute -right-1 top-4 flex justify-center items-center">
        1
      </span>
      <MdFavoriteBorder />
    </div>
  );
};

export default Favorite;
