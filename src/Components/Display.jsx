import React, { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import DisplayAlbum from './DisplayAlbum'
import { albumsData } from '../assets/assets'
import { useRef } from 'react'

const Display = () => {


  {/* This is for onclicking the albums the bacground color get be changed according to the gradient  */}
  const displayRef=useRef();                                {/* using refrence */}
  const location =useLocation();                            {/* using location */}
  const isAlbum=location.pathname.includes("album");        {/* adding pathname of the album either it exists or not*/}
  const albumid=isAlbum ? location.pathname.slice(-1):"";   {/* Storing the album id getting from the album */}
  const bgColor=albumsData[Number(albumid)].bgColor;        {/* using album id we can get the color code of the album */}

  useEffect(()=>{         
    if(isAlbum){
      displayRef.current.style.background=`linear-gradient(${bgColor},#121212)`;
    }
    else{
      displayRef.current.style.background=`#121212`;
    }
  });

  return (
    <div ref={displayRef} className='w-[100% m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0'>
      <Routes>
        <Route path='/' element={<DisplayHome/>} />
        <Route path='/album/:id' element={<DisplayAlbum/>} />
      </Routes>
    </div>
  )
}

export default Display
