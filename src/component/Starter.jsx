import axios from 'axios';
import React, { useEffect, useState } from 'react'
import AllProducts from './AllProducts';
import Nav from './Nav';
import Loading from './Loading';

export default function Starter() {
  let[loading , setloading] = useState(false)
        let [errmsg , setErroMsg] = useState('')
  let [Products , setProduts] = useState([])
  async function getdata(){
    setloading(true)
    try {
      let {data} = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Starter')
    setProduts(data.meals);
    setloading(false)
    setErroMsg('')
    } catch (error) {
      setErroMsg(error)
      setloading(false)
    }
    
}
useEffect(()=>{
    getdata()
},[])
  return (
    <div className='container'>
      <Nav></Nav>
      <div className="flex flex-wrap gap-8">
        {Products.length?Products.map((prod , ind)=> <AllProducts prod={prod}/>) : <Loading/>}
      </div>
      
    </div>
  )
}
