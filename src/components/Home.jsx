import React from 'react'
import Sidebar from './templets/Sidebar'
import Topnav from './templets/Topnav'
import Header from './templets/Header'
import HorizontalCards from './templets/HorizontalCards'
function Home() {

  return (
    <>
    <Sidebar/>
    <div className='w-[85%] h-full overflow-hidden overflow-y-auto'>
    <Topnav/>
    <Header/>
    <HorizontalCards/>
    </div>

    </>
  )
}

export default Home