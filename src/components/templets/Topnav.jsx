import React, { useState } from "react";
import { Link } from "react-router-dom";

function Topnav() {
  const [search, setSearch] = useState("");
  console.log(search);
  return (
    <div className="relative w-100% h-[10vh] flex justify-start ml-[15%] items-center">
      <i className="ri-search-line text-zinc-300  text-2xl"></i>
      <input
        onChange={(e) =>setSearch(e.target.value)}
        value={search}
        type="text"
        placeholder="search"
        className="outline-none bg-transparent px-2 border-none py-2 mx-5 text-white w-[50%]"
      />
      {search.length > 0 && <i onClick={()=>setSearch('')} className="text-zinc-300 text-2xl ri-close-line"></i> }
      
      <div className="w-[50%] max-h-[50vh] absolute overflow-auto top-[90%]">
        {/* <Link className="inline-block border-b-2 rounded-md hover:bg-zinc-700 border-zinc-400 text-white bg-zinc-600 py-8 flex justify-start items-center px-2 w-full">
          <img src={null} alt="movie poster" />
          <span>movies from 2024 blockbuster</span>
        </Link> */}
      </div>
    </div>
  );
}

export default Topnav;
