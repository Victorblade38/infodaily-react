import React from "react";
import randomImg from "../assets/randomImg.jpg";
import bookmark_outline from "../assets/bookmark-white.png";

const Cards = () => {
  return (
    <div
      style={{ width: "220px" }}
      className=" bg-gray-100 flex flex-col items-center gap-4 p-2 rounded-md shadow-md"
    >
      <img src={randomImg} className="rounded-md" />
      <h1 className="font-bold font-serif ml-1">
        How did what is difference in the solar system
      </h1>
      <div className="w-full flex flex-row justify-between">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-8 py-2 rounded-md ">
          Read more
        </button>
        <button className="px-2">
          <img src={bookmark_outline} width={24} />
        </button>
      </div>
    </div>
  );
};

export default Cards;
