import React from 'react'
import { Link } from 'react-router-dom';
export default function AllProducts({prod}) {
    console.log(prod);
    
    
  return (
    
    <div className='w-3/4 md:w-2/5 lg:w-1/5 layer rounded-3xl bg-white mt-20 hover:shadow-2xl   '>
        <div className="inner flex items-center group   flex-col ">
            <img src={prod.strMealThumb} className='w-[80%] -translate-y-5 group-hover:rotate-[360deg] duration-700  transition-all rounded-full'  alt="" />
            <h3 className='font-semibold text-center text-2xl'>{prod.strMeal}</h3> 
            <p className='text-[#059669] mb-3'> {prod.strArea ? <i className="fa-solid fa-earth-americas"></i> : ""} {prod.strArea} </p>
            <Link to={`/productsdetails/${prod.idMeal}`}>
            <button className='py-1 rounded-full mb-4 px-5 text-white bg-[#21BA75] hover:bg-[#059669]'>View Recipce</button>
            </Link>
        </div>
      </div>
  )
}
