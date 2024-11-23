import React from "react";
import randomImg from "../assets/randomImg.jpg";

const Cards = ({ title, url, urlToImage, onSave, isSaved }) => {
  return (
    <a
      href={url}
      className=" h-[310px] lg:h-[305px] md:w-[220px] md:bg-white   flex flex-col items-center justify-between p-2 md:rounded-md md:shadow-md"
    >
      <img
        src={urlToImage || randomImg}
        alt="img"
        className=" rounded-md bg-gray-400 object-cover w-full h-1/2"
      />
      <h1 className="overflow-hidden no-scrollbar h-[100px] lg:h-[100px] text-[14px] lg:text-sm font-bold font-serif text-slate-900 ">
        {title}
      </h1>

      <button
        className="w-full text-white bg-blue-900 p-1 rounded-md 
           font-bold  text-[12px] lg:text-sm"
        onClick={onSave}
      >
        {isSaved ? "Unsave" : "Save"}
      </button>
    </a>
  );
};

export default Cards;
