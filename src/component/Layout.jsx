import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header';
import Fotter from './Fotter';

export default function Layout() {
  return (
    <div className='w-full flex flex-wrap  '>
      <div className="w-[15%]">
        <Header/>
      </div>
      <div className="w-[85%] flex flex-col justify-between">
      <Outlet/>
      <Fotter/>
      </div>
      
    </div>
  )
}