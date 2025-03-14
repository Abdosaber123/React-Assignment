import React from "react";
import img from "../assets/logo-BfNap0Pe.png";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="test-fixed h-screen bg-white fixed md:right-[84%] right-[75%] ">
      <img src={img} className="w-[80%]" alt="" />
      <div className="">
        <ul>
          <li>
            <Link to="/"> 
            <span className="w-full hover:scale-105 hover:shadow-xl hover:shadow-orange-50 transition-all block md:px-2 text-[20px] rounded-full p-0 md:py-1 text-white bg-[#F29724] ">
            <i className="fa-solid fa-utensils"></i> Meals
            </span>
            </Link>
          </li>
          <li>
            <Link to={"/"}>
            <span className="w-full mt-5 text-black block hover:scale-105 hover:shadow-xl hover:shadow-orange-50 transition-all md:px-2   text-[20px] rounded-full md:py-1  bg-gray-100 border-2 border-gray-200 ">
            <i className="fa-solid fa-utensils"></i> Ingredients
            </span>
            </Link>
          </li>
          <li>
            <Link to={"/"}>
            <span className="w-full mt-5 block text-black  md:px-2 text-[20px] rounded-full hover:scale-105 hover:shadow-xl hover:shadow-orange-50 transition-all md:py-1 border-2 border-gray-200 bg-[#F9FAFB] ">
            <i className="fa-solid fa-utensils"></i> Area
            </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
