import React from 'react'
import Sidebar from './templets/Sidebar'
import Topnav from './templets/Topnav'
import Header from './templets/Header'
import HorizontalCards from './templets/HorizontalCards'

function Home() {
  return (
    <div className="flex w-full h-screen overflow-hidden">
      <Sidebar/>
      <div className='w-full lg:w-[85%] h-full overflow-y-auto'>
        <Topnav/>
        <Header/>
        <HorizontalCards/>
      </div>
    </div>
  )
}

export default Home