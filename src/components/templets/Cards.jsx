import React from 'react'
import { Link } from 'react-router-dom'

function Cards({data}) {
  const getGenderLabel = (gender) => {
    switch(gender) {
      case 1:
        return 'FEMALE';
      case 2:
        return 'MALE';
      default:
        return 'OTHER';
    }
  };

  return (
    <div className='w-full min-h-screen flex flex-wrap justify-center items-start gap-4 p-3'>
      {data.map((item)=>(
        item.profile_path ? (
          <div
            key={item.id} 
            className='
              w-[95%]              /* Mobile first - almost full width */
              sm:w-[45%]           /* Small devices - 2 cards per row */
              md:w-[30%]           /* Medium devices - 3 cards per row */
              lg:w-[23%]           /* Large devices - 4 cards per row */
              xl:w-[18%]           /* Extra large - 5 cards per row */
              transition-transform duration-300 hover:scale-105
              flex flex-col
              overflow-hidden 
              rounded-xl
              bg-zinc-900
              hover:shadow-lg hover:shadow-[#6556CD]/20
              mt-5
            '
          >
            <div className='relative w-full pt-[150%]'>
              <img 
                className='
                  absolute top-0 left-0
                  w-full h-full 
                  object-cover 
                  rounded-t-xl
                ' 
                src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`} 
                alt={item.name}
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/500x750?text=No+Image'
                }}
              />
            </div>
            <div className='p-4'>
              <h1 className='text-zinc-300 text-lg font-bold line-clamp-1 hover:line-clamp-none'>
                {item.name}
              </h1>
              <span className='
                inline-block
                text-[#6556CD] 
                text-sm 
                mt-2
                px-3 
                py-1 
                bg-[#6556CD]/10 
                rounded-full
              '>
                {getGenderLabel(item.gender)}
              </span>
            </div>
          </div>
        ) : (
          <Link to={`/${item.media_type}/${item.id}`}
            key={item.id} 
            className='
              w-[95%]              /* Mobile first - almost full width */
              sm:w-[45%]           /* Small devices - 2 cards per row */
              md:w-[30%]           /* Medium devices - 3 cards per row */
              lg:w-[23%]           /* Large devices - 4 cards per row */
              xl:w-[18%]           /* Extra large - 5 cards per row */
              transition-transform duration-300 hover:scale-105
              flex flex-col
              overflow-hidden 
              rounded-xl
              bg-zinc-900
              hover:shadow-lg hover:shadow-[#6556CD]/20
              mt-5
            '
          >
            <div className='relative w-full pt-[150%]'>
              <img 
                className='
                  absolute top-0 left-0
                  w-full h-full 
                  object-cover 
                  rounded-t-xl
                ' 
                src={`https://image.tmdb.org/t/p/w500/${item.poster_path || item.backdrop_path}`} 
                alt={item.title || item.name}
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/500x750?text=No+Image'
                }}
              />
            </div>
            <div className='p-4'>
              <h1 className='text-zinc-300 text-lg font-bold line-clamp-1 hover:line-clamp-none'>
                {item.title || item.name || item.original_name}
              </h1>
              {item.media_type && (
                <span className='
                  inline-block
                  text-[#6556CD] 
                  text-sm 
                  mt-2
                  px-3 
                  py-1 
                  bg-[#6556CD]/10 
                  rounded-full
                '>
                  {item.media_type.toUpperCase()}
                </span>
              )}
            </div>
          </Link>
        )
      ))}
    </div>
  )
}

export default Cards
