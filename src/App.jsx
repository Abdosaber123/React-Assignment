import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './component/Layout'
import Home from './component/Home'
import Beef from './component/Beef';
import BreakFst from './component/BreakFst';
import Chiken from './component/Chiken'
import Dessert from './component/Dessert';
import Gout from './component/Gout';
import Lamp from './component/Lamp';
import Miscellaneous from './component/Miscellaneous';
import Pasta from './component/Pasta';
import Pork from './component/Pork';
import SeaFood from './component/SeaFood';
import Side from './component/Side';
import Starter from './component/Starter';
import Vegan from './component/Vegan';
import Vegetarian from './component/Vegetarian';
import Notfound from './component/Notfound'
import ProductsDetails from './component/ProductsDetails'

function App() {
  
const router = createBrowserRouter([
  {path:'/' , element:<Layout></Layout>, children:[
    {index:true , element: <Home></Home>},
    {path:'/beef' , element: <Beef></Beef>},
    {path:'/breakfast' , element: <BreakFst></BreakFst>},
    {path:'/chiken' , element: <Chiken></Chiken>},
    {path:'/dessert' , element: <Dessert></Dessert>},
    {path:'/gout' , element: <Gout></Gout>},
    {path:'/lamp' , element: <Lamp></Lamp>},
    {path:'/miscellaneous' , element: <Miscellaneous></Miscellaneous>},
    {path:'/pasta' , element: <Pasta></Pasta>},
    {path:'/pork' , element: <Pork></Pork>},
    {path:'/seafood' , element: <SeaFood></SeaFood>},
    {path:'/side' , element: <Side></Side>},
    {path:'/starter' , element: <Starter></Starter>},
    {path:'/vegan' , element: <Vegan></Vegan>},
    {path:'/vegetarian' , element: <Vegetarian></Vegetarian>},
    {path:'*' , element: <Notfound></Notfound>},
    {path:'productsdetails/:id' , element: <ProductsDetails></ProductsDetails>},
    
  ]}
])
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
