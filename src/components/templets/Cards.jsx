import React from 'react'
import { Link } from 'react-router-dom'

function Cards({data}) {
  return (
    <div className='w-[100%] min-h-[100vh]  flex flex-wrap justify-center items-center gap-5 p-3 '>
      {data.map((item)=>(
        <Link key={item.id} className='w-[18%] mt-5 overflow-hidden rounded-lg h-[30%] '>
          <img className='w-[100%] h-[100%] object-cover rounded-lg' src={`https://image.tmdb.org/t/p/w500/${item.poster_path || item.profile_path}`} alt={item.title} />
          <h1 className='text-zinc-400 text-xl mt-1 ml-2 font-bold'>
            {item.title || item.name || item.original_name}
            <span className='text-[#6556CD] ml-2 text-sm'>{item.media_type}</span>
          </h1>
        </Link>
      ))}
    </div>
  )
}

export default Cards
