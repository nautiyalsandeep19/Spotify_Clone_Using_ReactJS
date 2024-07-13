import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate=useNavigate();
  return (
    <>
      <div className='w-full flex justify-between items-center font-bold'>
        <div className="flex items-center gap-2">
            <img onClick={()=>navigate(-1)} src={assets.arrow_left} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' alt="" />
            <img onClick={()=>navigate(+1)} src={assets.arrow_right} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' alt="" />
        </div>
        <div className="flex items-center gap-4">
            <p className='bg-white text-black text-[15px] pz-5 py-1 px-3 rounded-2xl hidden md:block cursor-pointer'>Explore Premium</p>
            <a href='https://play.google.com/store/apps/details?id=com.spotify.music'className='bg-black py-2 pz-3 px-3 rounded-2xl text-[15px] cursor-pointer' >Install App</a>
            <p className='bg-blue-500 text-white w-7 h-7 rounded-full flex items-center justify-center cursor-pointer'>S</p>
        </div>
      </div>
      <div className='flex items-center gap-2 mt-4'>
        <p className='bg-white text-black px-4 py-1 rounded-2xl cursor-pointer' >All</p>
        <p className='bg-black px-4 py-1 rounded-2xl cursor-pointer'>Music</p>
        <p className='bg-black px-4 py-1 rounded-2xl cursor-pointer'>Podcast</p>
      </div>
    </>
  )
}

export default Navbar
