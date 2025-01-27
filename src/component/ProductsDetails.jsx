import React, { useEffect, useState } from 'react'
import ReturnDetails from './ReturnDetails'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Loading from './Loading'

export default function ProductsDetails() {
  let[loading , setloading] = useState(false)
          let [errmsg , setErroMsg] = useState('')
    let [prodDet , setDet] = useState([])
    let {id} = useParams()
    async function getDetails(){
      setloading(true)
        try {
          let {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        setDet(data.meals);
        setloading(false)
        setErroMsg('')
        } catch (error) {
        setloading(false)
          setErroMsg(error)
        }
        
        
        
    }
    useEffect(()=>{
        getDetails()
    },[])
  return (
    <div className="container">
    
    {prodDet.length?prodDet.map(elm=> <ReturnDetails elm={elm}/>): <Loading/>}
    </div>
  )
}
