import React from 'react'
import img from "../assets/logo-BfNap0Pe.png";
export default function Fotter() {
  return (
    <div className='bg-white mt-40 py-2 '>
        <div className="container">
            <div className="flex border-b-2  w-[80%] py-4 mb-6 justify-between">
                <div className=" flex items-center">
                    <img src={img} className='w-[50px] mr-1' alt="" />
                    <h2 className=' font-bold text-2xl'>Recipe</h2>
                </div>
                <div className="">
                    <h2 className='text-blue-600 text-2xl font-bold'>Route</h2>
                </div>
            </div>
            <p className='opacity-50 text-center'>© 2025 Nagy Osama™. All Rights Reserved.</p>
        </div>
    </div>
  )
}
