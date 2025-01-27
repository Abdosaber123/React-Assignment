import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <div className="px-5 py-4">
      <h1 className="text-yellow-600 text-4xl mb-4">
        Learn, Cook, Eat Your Food
      </h1>
      <div className="">
        <ul className="flex flex-wrap gap-3 border-b-2  ">
          <li className="inline-block px-4 text-[16px] py-2  catLink border-gray-400 border transition-all hover:shadow-xl shadow duration-300  rounded-full  hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300 hover:text-white active">
            {" "}
            <NavLink to={"/"}>All</NavLink>{" "}
          </li>
          <li className='inline-block px-4 py-2 catLink border-gray-400 border transition-all hover:shadow-xl shadow duration-300  rounded-full hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"'>
            {" "}
            <NavLink to={"/beef"}>Beef</NavLink>{" "}
          </li>
          <li className='inline-block px-4 py-2 catLink border-gray-400 border transition-all hover:shadow-xl shadow duration-300  rounded-full hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"'>
            {" "}
            <NavLink to={"/breakfast"}>Breakfast</NavLink>{" "}
          </li>
          <li className='inline-block px-4 py-2 catLink border-gray-400 border transition-all hover:shadow-xl shadow duration-300  rounded-full hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"'>
            {" "}
            <NavLink to={"/chiken"}>Chiken</NavLink>{" "}
          </li>
          <li className='inline-block px-4 py-2 catLink border-gray-400 border transition-all hover:shadow-xl shadow duration-300  rounded-full hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"'>
            {" "}
            <NavLink to={"/dessert"}>Dessert</NavLink>{" "}
          </li>
          <li className='inline-block px-4 py-2 catLink border-gray-400 border transition-all hover:shadow-xl shadow duration-300  rounded-full hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"'>
            {" "}
            <NavLink to={"/gout"}>Gut</NavLink>{" "}
          </li>
          <li className='inline-block px-4 py-2 catLink border-gray-400 border transition-all hover:shadow-xl shadow duration-300  rounded-full hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"'>
            {" "}
            <NavLink to={"/lamp"}>Lamp</NavLink>{" "}
          </li>
          <li className='inline-block px-4 py-2 catLink border-gray-400 border transition-all hover:shadow-xl shadow duration-300  rounded-full hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"'>
            {" "}
            <NavLink to={"/miscellaneous"}>miscellaneous</NavLink>{" "}
          </li>
          <li className='inline-block px-4 py-2 catLink border-gray-400 border transition-all hover:shadow-xl shadow duration-300  rounded-full hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"'>
            {" "}
            <NavLink to={"/pasta"}>Pasta</NavLink>{" "}
          </li>
          <li className='inline-block px-4 py-2 catLink border-gray-400 border transition-all hover:shadow-xl shadow duration-300  rounded-full hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"'>
            {" "}
            <NavLink to={"/pork"}>Pork</NavLink>{" "}
          </li>
          <li className='inline-block px-4 py-2 catLink border-gray-400 border transition-all hover:shadow-xl shadow duration-300  rounded-full hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"'>
            {" "}
            <NavLink to={"/seafood"}>Seafood</NavLink>{" "}
          </li>
          <li className='inline-block px-4 py-2 catLink border-gray-400 border transition-all hover:shadow-xl shadow duration-300  rounded-full hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"'>
            {" "}
            <NavLink to={"/side"}>Side</NavLink>{" "}
          </li>
          <li className='inline-block px-4 py-2 catLink border-gray-400 border transition-all hover:shadow-xl shadow duration-300  rounded-full hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"'>
            {" "}
            <NavLink to={"/starter"}>Starter</NavLink>{" "}
          </li>
          <li className='inline-block px-4 py-2 catLink border-gray-400 border transition-all hover:shadow-xl shadow duration-300  rounded-full hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"'>
            {" "}
            <NavLink to={"/vegan"}>Vegan</NavLink>{" "}
          </li>
          <li className='inline-block px-4 py-2 catLink border-gray-400 border transition-all hover:shadow-xl shadow duration-300  rounded-full hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"'>
            {" "}
            <NavLink to={"/vegetarian"}>Vegetarian</NavLink>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
}
