import React from "react";
import randomImg from "../assets/randomImg.jpg";

const Cards = ({ title, url, urlToImage, onSave, isSaved }) => {
  return (
    <div
      style={{ width: "220px", height: "305px" }}
      className="bg-white flex flex-col items-center gap-2 p-2 rounded-md shadow-md"
    >
      <img
        src={urlToImage || randomImg}
        alt="img"
        className="rounded-md flex justify-center items-center bg-gray-400"
      />
      <h1
        style={{
          height: "96px",
          scrollbarWidth: "none", // For Firefox
          msOverflowStyle: "none", // For IE and Edge
        }}
        className="font-bold font-serif ml-1 text-slate-700 overflow-y-auto"
      >
        {title}
      </h1>
      <div className="w-full flex flex-row justify-between text-lg">
        <button className="text-blue-500 hover:bg-blue-600 hover:text-white font-bold px-2 py-1 rounded-md shadow-md">
          <a href={url} target="_blank" rel="noopener noreferrer">
            Read more
          </a>
        </button>
        <button
          className="text-gray-500 hover:bg-gray-600 hover:text-white font-bold px-2 py-1 rounded-md shadow-md"
          onClick={onSave}
        >
          {isSaved ? "Unsave" : "Save"}
        </button>
      </div>
    </div>
  );
};

export default Cards;
