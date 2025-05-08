import React from 'react'
import Topnav from './Topnav'
import { Navigate } from 'react-router-dom'
function Trending() {
  return (
    <div className=' w-full p-5 h-full'>
      <h1 className='text-zinc-300 text-2xl font-bold'>
        <i onClick={()=>window.history.back()} className="ri-arrow-left-line text-zinc-400 cursor-pointer hover:text-zinc-200 mr-2"></i>
        Trending Movies & TV Shows</h1>
    </div>
  )
}

export default Trending
