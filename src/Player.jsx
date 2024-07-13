import React, { useContext } from 'react'
import { assets, songsData } from './assets/assets'
import { PlayerContext } from './Context/PlayerContext'

const Player = () => {

    const {seekBar, seekBg,playStatus,play,pause,time,previous,next,seeksong}=useContext(PlayerContext);

  return (
    <div className='h-[8%] bg-blue flex justify-between items-center text-white px-4'>
    <div className='hidden lg:flex items-center gap-4'>
        <img src={songsData[0].image} className='w-12' alt="" />
        <div>
            <p>{songsData[0].name}</p>
            <p>{songsData[0].desc.slice(0,12)}</p>
        </div>
    </div>
    
    {/* Music Player Previous song , next song , pause icons*/}
    <div className='flex flex-col items-center gap-1 m-auto'>
    <div className='flex gap-4'>
        <img src={assets.shuffle_icon} className='cursor-pointer w-5 ' alt="" />
        <img onClick={previous} src={assets.prev_icon} className='cursor-pointer w-5 ' alt=""/>
        
        {
        playStatus 
        ?<img onClick={pause} src={assets.pause_icon} className='cursor-pointer w-5 ' alt="" /> 
        :<img onClick={play} src={assets.play_icon} className='cursor-pointer w-5 ' alt="" />
        }

        <img onClick={next} src={assets.next_icon} className='cursor-pointer w-5 ' alt="" />
        <img src={assets.loop_icon} className='cursor-pointer w-5 ' alt="" />
    </div>
    {/* Music Player playing Time CountDown*/ }
    <div className='flex items-center gap-5 '>
        <p>{time.currentTime.minute}:{time.currentTime.second}</p>
        <div onClick={seeksong} ref={seekBg} className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
            <hr ref={seekBar} className='h-1 border-none w-0 bg-blue-800 rounded-full'/>
        </div>
        <p>{time.totalTime.minute}:{time.totalTime.second}</p>
    </div>
    </div>

    {/* Mini Music Player Division */}
    <div className='hidden lg:flex items-center gap-2 opacity-75'>
    <img src={assets.play_icon} alt="" className="w-4" />
    <img src={assets.mic_icon} alt="" className="w-4" />
    <img src={assets.queue_icon} alt="" className="w-4" />
    <img src={assets.speaker_icon} alt="" className="w-4" />
    <img src={assets.volume_icon} alt="" className="w-4" />
    <div className='w-20 bg-gray-50 h-1 rounded '></div>
    <img src={assets.mini_player_icon} alt="" className="w-4" />
    <img src={assets.zoom_icon} alt="" className="w-4" />
    </div>
    </div>
  )
}

export default Player
