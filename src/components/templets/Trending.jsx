import React, { useState, useEffect } from 'react'
import Topnav from './Topnav'
import Cards from './Cards'
import axios from '../utils/axios';

function Trending() {
  const [trending, setTrending] = useState([]);
  
  const getTrending = async() => {
    try {
      const res = await axios.get(`/trending/all/week`)
      setTrending(res.data.results)
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(() => {
    getTrending();
  }, [])

  return (
    <div className='w-full p-5 h-screen overflow-y-auto overflow-x-hidden'>
      <div className='w-full flex flex-col p-'>
        <h1 className='text-zinc-300 text-2xl font-bold'>
          <i onClick={() => window.history.back()} className="ri-arrow-left-line text-zinc-400 mt-2 cursor-pointer mr-2 hover:text-zinc-200 "></i>
          Trending Movies & TV Shows
        </h1>
        <div className='w-full'>
          <Cards data={trending}/>
        </div>
      </div>
    </div>
  )
}

export default Trending
