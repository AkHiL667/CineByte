import React, { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden bg-[#6556CD] px-2 py-1 rounded-lg text-white"
      >
        <i className={`ri-${isOpen ? 'close' : 'menu'}-line text-sm `}></i>
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed lg:static
        top-0 left-0
        h-full
        bg-[#1F1E24]
        z-40
        transition-all duration-300
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0
        w-[280px]
        lg:w-[15%]
        border-r-2 border-zinc-500
        p-5
      `}>
        <div className="text-3xl ml-9 sm:ml-0">
          <i className="ri-film-fill mr-2 text-[#6556CD]"></i>
          <Link to="/" className="text-white font-title font-bold tracking-wider">Cinebyte</Link>
        </div>
        <nav className="flex flex-col gap-4">
          <h1 className="text-white text-xl font-semibold mt-5">New Feed</h1>
          <Link to="/trending" className="hover:bg-[#6556CD] text-lg hover:text-white text-zinc-400 px-2 py-2 rounded-md duration-200">
            <i className="ri-blaze-fill mr-2"></i>
            Trending
          </Link>
          <Link to="/popular" className="hover:bg-[#6556CD] text-lg hover:text-white text-zinc-400 px-2 py-2 rounded-md duration-200">
            <i className="ri-bard-line mr-2"></i>
            Popular
          </Link>
          <Link to="/movies" className="hover:bg-[#6556CD] text-lg hover:text-white text-zinc-400 px-2 py-2 rounded-md duration-200">
            <i className="ri-movie-2-line mr-2"></i>
            Movies
          </Link>
          <Link to="/tv" className="hover:bg-[#6556CD] text-lg hover:text-white text-zinc-400 px-2 py-2 rounded-md duration-200">
            <i className="ri-tv-line mr-2"></i>
            TV Shows
          </Link>
          <Link to="/people" className="hover:bg-[#6556CD] text-lg hover:text-white text-zinc-400 px-2 py-2 rounded-md duration-200">
            <i className="ri-user-line mr-2"></i>
            People
          </Link>
        </nav>
        <hr className="border-zinc-500 mt-5" />
        <nav className="flex flex-col gap-4">
          <h1 className="text-white text-xl font-semibold mt-5">
            Website info
          </h1>
          <Link to="/about" className="hover:bg-[#6556CD] text-lg hover:text-white text-zinc-400 px-2 py-2 rounded-md duration-200">
            <i className="ri-file-info-line mr-2"></i>
            About Cinebyte
          </Link>
          <Link to="/contact" className="hover:bg-[#6556CD] text-lg hover:text-white text-zinc-400 px-2 py-2 rounded-md duration-200">
            <i className="ri-mail-line mr-2"></i>
            Contact Us
          </Link>
        </nav>
      </div>
    </>
  );
}

export default Sidebar;
