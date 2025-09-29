import React from 'react'
import { AiFillCaretRight } from "react-icons/ai"
import assets from "../assets/asset"



const Home = () => {
  return (
  

<div name ="home" className='h-screen w-full bg-gradient-to-b    from-black via-blackb to-gray-900 text-white'>

  <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row"> 
   <div>

   </div>

    <div className= "flex flex-col justify-center h-full">
 <h2 className='text-4xl sm:text-7xl'>I m a Software Engenerr</h2>
 <p class= "text-gray py-4 max-w-md">I have two years of experience building and desinging software,
  I will love to work with Full stack using technologies like React, <br /> Tailwind Next js,Express js, mongoDb, SQL and Django python </p>
<div>
  <button className='group text-wihte w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-1000 to-blue-800 cursor-pointer'>
    Portfolio
    <span className='group-hover:rotate-90 duration:1000 '><AiFillCaretRight size={40} className='ml-l'/></span>
  </button>
</div>
    </div>
    <div>
       <img src ={assets.HeroImage} alt='my profile' className='rounded-2xl mx-auto w-2/3 md:w-full'/>
    </div>
  </div>
</div>
  )
}

export default Home


   
 