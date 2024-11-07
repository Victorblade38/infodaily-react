import React from "react";
import randomImg from "../assets/randomImg.jpg";

const Cards = ({ title, url, urlToImage, onSave, isSaved }) => {
  return (
    <div className="h-[200px] lg:h-[305px] w-[150px] lg:w-[220px] bg-white dark:bg-gray-800 flex flex-col items-center gap-2 p-2 rounded-md shadow-md">
      <img
        src={urlToImage || randomImg}
        alt="img"
        className=" rounded-md bg-gray-400 object-fit w-full h-1/2"
      />
      <h1
        style={{
          scrollbarWidth: "none", // For Firefox
          msOverflowStyle: "none", // For IE and Edge
        }}
        className="h-[50px] lg:h-[100px] text-[8px] lg:text-sm font-bold font-serif ml-1 text-slate-700 dark:text-white overflow-y-auto"
      >
        {title}
      </h1>
      <div className="flex flex-row gap-12 lg:gap-20">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer "
          className="text-blue-500  
           font-bold  text-[9px] lg:text-sm"
        >
          Read more
        </a>
        <button
          className="text-gray-500  dark:text-gray-100
           font-bold  text-[9px] lg:text-sm"
          onClick={onSave}
        >
          {isSaved ? "Unsave" : "Save"}
        </button>
      </div>
    </div>
  );
};

export default Cards;
