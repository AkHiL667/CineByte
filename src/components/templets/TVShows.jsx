import React, { useState, useEffect } from 'react'
import Cards from './Cards'
import axios from '../utils/axios';

function TVShows() {
  const [Tvs, setTvs] = useState([]);
  
  const getTvs = async() => {
    try {
      const res = await axios.get('/tv/on_the_air')
      setTvs(res.data.results)
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(() => {
    getTvs();
  }, [])

  return (
    <div className='w-full h-screen overflow-y-auto overflow-x-hidden'>
      <div className='w-full flex flex-col p-5'>
        <h1 className='text-zinc-300 text-2xl font-bold'>
          <i onClick={() => window.history.back()} className="ri-arrow-left-line text-zinc-400 cursor-pointer hover:text-zinc-200 mr-2"></i>
           TV Shows
        </h1>
        <div className='w-full'>
          <Cards data={Tvs}/>
        </div>
      </div>
    </div>
  )
}

export default TVShows

