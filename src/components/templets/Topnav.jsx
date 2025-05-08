import React from 'react'
import { Link } from 'react-router-dom'

function Topnav() {
  return (
    <div className=' relative w-100% h-[10vh] flex justify-center items-center '>
      <i class="ri-search-line text-zinc-300 text-2xl"></i>
       <input type="text" placeholder='search' className='outline-none border-none py-2 mx-5 text-white w-[50%]' />
       <i class="text-zinc-300 text-2xl ri-close-line"></i>
       <div className=' w-[50%] h-[50vh] absolute overflow-auto top-[90%]'>
        <Link className='inline-block border-b-2 border-zinc-400 text-white  bg-zinc-600 py-8 flex justify-start items-center px-2 w-full'>
        <img src="" alt="" />
        <span>movies from 2024 blockbuster</span>
        </Link>
        <Link className='inline-block border-b-2 border-zinc-400 text-white  bg-zinc-600 py-8 flex justify-start items-center px-2 w-full'>
        <img src="" alt="" />
        <span>movies from 2024 blockbuster</span>
        </Link>
        <Link className='inline-block border-b-2 border-zinc-400 text-white  bg-zinc-600 py-8 flex justify-start items-center px-2 w-full'>
        <img src="" alt="" />
        <span>movies from 2024 blockbuster</span>
        </Link>
        <Link className='inline-block border-b-2 border-zinc-400 text-white  bg-zinc-600 py-8 flex justify-start items-center px-2 w-full'>
        <img src="" alt="" />
        <span>movies from 2024 blockbuster</span>
        </Link>
        <Link className='inline-block border-b-2 border-zinc-400 text-white  bg-zinc-600 py-8 flex justify-start items-center px-2 w-full'>
        <img src="" alt="" />
        <span>movies from 2024 blockbuster</span>
        </Link>
        <Link className='inline-block border-b-2 border-zinc-400 text-white  bg-zinc-600 py-8 flex justify-start items-center px-2 w-full'>
        <img src="" alt="" />
        <span>movies from 2024 blockbuster</span>
        </Link>
        <Link className='inline-block border-b-2 border-zinc-400 text-white  bg-zinc-600 py-8 flex justify-start items-center px-2 w-full'>
        <img src="" alt="" />
        <span>movies from 2024 blockbuster</span>
        </Link>
        <Link className='inline-block border-b-2 border-zinc-400 text-white  bg-zinc-600 py-8 flex justify-start items-center px-2 w-full'>
        <img src="" alt="" />
        <span>movies from 2024 blockbuster</span>
        </Link>
        
       </div>
    </div>
  )
}

export default Topnav