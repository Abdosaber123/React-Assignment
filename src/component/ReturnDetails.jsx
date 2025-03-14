import React from "react";
import Img2 from "../assets/g046bb1663960946.jpg";
import { Link } from "react-router-dom";
export default function ReturnDetails({elm}) {
  return (
        <div className="">
            <h1 className="text-[35px] font-bold m-3">{elm.strMeal}</h1>
             <div className="  flex gap-5">
      <div className="w-[33.33%]">
        <img src={elm.strMealThumb} className="w-full rounded-2xl" alt="" />
        <ul className="mt-5 flex justify-center">
          <li> <Link target="_blank"  className="px-5 bg-[#DC2626] text-white mr-4 py-2 rounded-2xl " to={elm.strYoutube}> <i class="fa-brands fa-youtube"></i> Youtube</Link> </li>
          <li> <Link target="_blank" className="px-5 bg-[#21BA75] text-white py-2 rounded-2xl" to={elm.strSource?elm.strSource : "/"}> <i class="fa-solid fa-globe"></i> sorce</Link> </li>
        </ul>``
      </div>
      <div className=" text-[15px]  w-[33.33%]">
        <p className="">
          {elm.strInstructions}
        </p>
      </div>
      <div className="bg-white w-[33.33%] -translate-y-10 rounded-2xl">
        <h2 className="text-2xl font-bold border-b-4 p-4 mb-3">Ingredients</h2>
        <div className={elm.strIngredient1 && elm.strMeasure1 ?  "flex justify-between font-semibold border-b-2 py-1 px-4": ""}>
            <p>{elm.strIngredient1}</p>
            <p>{elm.strMeasure1}</p>
        </div>
        <div className={elm.strIngredient2 && elm.strMeasure2 ?  "flex justify-between font-semibold border-b-2 py-1 px-4": ""}>
            <p>{elm.strIngredient2}</p>
            <p>{elm.strMeasure2}</p>
        </div>
        <div className={elm.strIngredient3 && elm.strMeasure3 ?  "flex justify-between font-semibold border-b-2 py-1 px-4": ""}>
            <p>{elm.strIngredient3}</p>
            <p>{elm.strMeasure3}</p>
        </div>
        <div className={elm.strIngredient4 && elm.strMeasure4 ?  "flex justify-between font-semibold border-b-2 py-1 px-4": ""}>
            <p>{elm.strIngredient4}</p>
            <p>{elm.strMeasure4}</p>
        </div>
        <div className={elm.strIngredient5 && elm.strMeasure5 ?  "flex justify-between font-semibold border-b-2 py-1 px-4": ""}>
            <p>{elm.strIngredient5}</p>
            <p>{elm.strMeasure5}</p>
        </div>
        <div className={elm.strIngredient6 && elm.strMeasure6 ?  "flex justify-between font-semibold border-b-2 py-1 px-4": ""}>
            <p>{elm.strIngredient6}</p>
            <p>{elm.strMeasure6}</p>
        </div>
        <div className={elm.strIngredient7 && elm.strMeasure7 ?  "flex justify-between font-semibold border-b-2 py-1 px-4": ""}>
            <p>{elm.strIngredient7}</p>
            <p>{elm.strMeasure7}</p>
        </div>
        <div className={elm.strIngredient8 && elm.strMeasure8 ?  "flex justify-between font-semibold border-b-2 py-1 px-4": ""}>
            <p>{elm.strIngredient8}</p>
            <p>{elm.strMeasure8}</p>
        </div>
        <div className={elm.strIngredient9 && elm.strMeasure9 ?  "flex justify-between font-semibold border-b-2 py-1 px-4": ""}>
            <p>{elm.strIngredient9}</p>
            <p>{elm.strMeasure9}</p>
        </div>
      </div>
    </div>
        </div>
   
  );
}
