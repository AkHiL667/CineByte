import axios from "../utils/axios";
import React, { useState, useEffect } from "react";

function HorizontalCards() {
  const [list, setList] = useState([]);
  const getList = async () => {
    const res = await axios.get(`/trending/all/week`);
    console.log(res.data.results);
    setList(res.data.results);
  };
  useEffect(() => {
    getList();
  }, []);
  return (
    <>
      <h1 className="text-zinc-300 px-5 text-3xl mb-5 font-bold">Trending</h1>
      <div className="w-full px-5 h-[100vh] flex gap-5 overflow-x-auto whitespace-nowrap">
        {list.map((item, index) => (
          <div
            key={index}
            className="min-w-[30vh] overflow-hidden bg-zinc-800 rounded-3xl h-[45vh] break-words"
          >
            <img
              className="w-full h-[60%] object-cover rounded"
              loading="lazy"
              src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
              alt={item.title || item.name}
            />
            <div className="flex flex-col gap-2">
              <h1 className="text-zinc-100 font-title my-1 tracking-wider text-2xl truncate w-full">
                {item.title || item.name} <span className="text-zinc-400 text-sm">({item.media_type})</span>
              </h1>
              <p className="text-zinc-400 font-title w-[30vh] tracking-wider text-sm whitespace-normal">
                {item.overview.slice(0, 80)}...
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default HorizontalCards;
