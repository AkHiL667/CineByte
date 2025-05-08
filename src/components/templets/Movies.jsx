import React, { useState, useEffect } from 'react'
import Cards from './Cards'
import axios from '../utils/axios';

function Movies() {
  const [Movies, setMovies] = useState([]);
  
  const getMovies = async() => {
    try {
      const res = await axios.get(`movie/now_playing`)
      setMovies(res.data.results)
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(() => {
    getMovies();
  }, [])

  return (
    <div className='w-full h-screen overflow-y-auto overflow-x-hidden'>
      <div className='w-full flex flex-col p-5'>
        <h1 className='text-zinc-300 text-2xl font-bold'>
          <i onClick={() => window.history.back()} className="ri-arrow-left-line text-zinc-400 cursor-pointer hover:text-zinc-200 mr-2"></i>
           Movies
        </h1>
        <div className='w-full'>
          <Cards data={Movies}/>
        </div>
      </div>
    </div>
  )
}

export default Movies

