import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <div className="w-[20%] h-full border-r-2 border-white p-5">
        <div className="text-3xl">
          <i class="ri-film-fill mr-2 text-[#6556CD]"></i>
          <span className="text-white font-bold ">Cinebyte</span>
        </div>
        <nav className="flex flex-col gap-4 ">
          <h1 className="text-white text-xl font-semibold mt-5">New Feed</h1>
          <Link className="hover:bg-[#6556CD] text-lg hover:text-white text-zinc-400 px-2 py-2 rounded-md duration-200">
          <i class="ri-blaze-fill mr-2"></i>
            Trending
          </Link>
          <Link className="hover:bg-[#6556CD] text-lg hover:text-white text-zinc-400 px-2 py-2 rounded-md duration-200">
          <i class="ri-bard-line mr-2"></i>
            Popular
          </Link>
          <Link className="hover:bg-[#6556CD] text-lg hover:text-white text-zinc-400 px-2 py-2 rounded-md duration-200">
          <i class="ri-movie-2-line mr-2"></i>
            Movies
          </Link>
          <Link className="hover:bg-[#6556CD] text-lg hover:text-white text-zinc-400 px-2 py-2 rounded-md duration-200">
          <i class="ri-tv-line mr-2"></i>
            TV Shows
          </Link>
          <Link className="hover:bg-[#6556CD] text-lg hover:text-white text-zinc-400 px-2 py-2 rounded-md duration-200">
          <i class="ri-user-line mr-2"></i>
            People
          </Link>
        </nav>
        <hr className="text-zinc-400 mt-5"/>
        <nav className="flex flex-col gap-4 ">
          <h1 className="text-white text-xl font-semibold mt-5">Website info</h1>
          <Link className="hover:bg-[#6556CD] text-lg hover:text-white text-zinc-400 px-2 py-2 rounded-md duration-200">
          <i class="ri-file-info-line mr-2"></i>
            About Cinebyte
          </Link>
          <Link className="hover:bg-[#6556CD] text-lg hover:text-white text-zinc-400 px-2 py-2 rounded-md duration-200">
          <i class="ri-mail-line mr-2"></i>
            Contact Us
          </Link>
        </nav>
      </div>
    </>
  );
}

export default Sidebar;
