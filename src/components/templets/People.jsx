import React, { useState, useEffect } from 'react'
import Topnav from './Topnav'
import Cards from './Cards'
import axios from '../utils/axios';

function People() {
  const [People, setPeople] = useState([]);
  
  const getPeople = async() => {
    try {
      const res = await axios.get(`person/popular`)
      setPeople(res.data.results)
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(() => {
    getPeople();
  }, [])

  return (
    <div className='w-full h-screen overflow-y-auto overflow-x-hidden'>
      <div className='w-full flex flex-col p-5'>
        <h1 className='text-zinc-300 text-2xl font-bold'>
          <i onClick={() => window.history.back()} className="ri-arrow-left-line text-zinc-400 cursor-pointer hover:text-zinc-200 mr-2"></i>
          Popular People
        </h1>
        <div className='w-full'>
          <Cards data={People}/>
        </div>
      </div>
    </div>
  )
}

export default People
