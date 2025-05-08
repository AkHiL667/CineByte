import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <div className="w-[15%] h-full border-r-2 border-zinc-500 p-5">
        <div className="text-3xl">
          <i className="ri-film-fill mr-2 text-[#6556CD]"></i>
          <span className="text-white font-title font-bold tracking-wider">Cinebyte</span>
        </div>
        <nav className="flex flex-col gap-4 ">
          <h1 className="text-white text-xl font-semibold mt-5">New Feed</h1>
          <Link to="/trending" className="hover:bg-[#6556CD] text-lg hover:text-white text-zinc-400 px-2 py-2 rounded-md duration-200">
            <i className="ri-blaze-fill mr-2"></i>
            Trending
          </Link>
          <Link className="hover:bg-[#6556CD] text-lg hover:text-white text-zinc-400 px-2 py-2 rounded-md duration-200">
            <i className="ri-bard-line mr-2"></i>
            Popular
          </Link>
          <Link className="hover:bg-[#6556CD] text-lg hover:text-white text-zinc-400 px-2 py-2 rounded-md duration-200">
            <i className="ri-movie-2-line mr-2"></i>
            Movies
          </Link>
          <Link className="hover:bg-[#6556CD] text-lg hover:text-white text-zinc-400 px-2 py-2 rounded-md duration-200">
            <i className="ri-tv-line mr-2"></i>
            TV Shows
          </Link>
          <Link className="hover:bg-[#6556CD] text-lg hover:text-white text-zinc-400 px-2 py-2 rounded-md duration-200">
            <i className="ri-user-line mr-2"></i>
            People
          </Link>
        </nav>
        <hr className="border-zinc-500 mt-5" />
        <nav className="flex flex-col gap-4 ">
          <h1 className="text-white text-xl font-semibold mt-5">
            Website info
          </h1>
          <Link className="hover:bg-[#6556CD] text-lg hover:text-white text-zinc-400 px-2 py-2 rounded-md duration-200">
            <i className="ri-file-info-line mr-2"></i>
            About Cinebyte
          </Link>
          <Link className="hover:bg-[#6556CD] text-lg hover:text-white text-zinc-400 px-2 py-2 rounded-md duration-200">
            <i className="ri-mail-line mr-2"></i>
            Contact Us
          </Link>
        </nav>
      </div>
    </>
  );
}

export default Sidebar;
