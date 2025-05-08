import React from 'react'
import Sidebar from './templets/Sidebar'
import Topnav from './templets/Topnav'
function Home() {

  return (
    <>
    <Sidebar/>
    <div className='w-[80%] h-full'>
    <Topnav/>
    </div>
    </>
  )
}

export default Home