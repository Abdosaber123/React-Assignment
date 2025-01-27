import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Nav from './Nav';
import AllProducts from './AllProducts';
import Loading from './Loading';

export default function Homegetproducts() {
  let[loading , setloading] = useState(false)
      let [errmsg , setErroMsg] = useState('')
  let [Products , setProduts] = useState([])
     async function getdata(){
      setloading(true)
        try {
          let {data} = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=')
        setProduts(data.meals);
          setloading(false)
          setErroMsg('')

        } catch (error) {
          setloading(false)
          setErroMsg(error)
        }
        
    }
    useEffect(()=>{
        getdata()
    },[])

  return (
      <div className='container'>
        <Nav></Nav>
        <div className="flex  justify-center md:justify-start flex-wrap gap-8">
          {Products.length?Products.map((prod , ind)=> <AllProducts prod={prod}/>) : <Loading/>}
        </div>
        
      </div>
    )
}
