import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
  const audioRef = useRef();
  const seekBar = useRef();
  const seekBg = useRef();

  const [track, setTrack] = useState(songsData[2]);
  const [playStatus, setPlayStatus] = useState(false);
  const [time, setTime] = useState({
    currentTime: {
      second: 0,
      minute: 0,
    },
    totalTime: {
      second: 0,
      minute: 0,
    } 
  });

  //function to play the song
  const play = () => {
    audioRef.current.play();
    setPlayStatus(true);
  }

  //function to pause the song
  const pause = () => {
    audioRef.current.pause();
    setPlayStatus(false);
  }

  //function to play the song with the ID
  const playwithid= async(id)=>{
    await setTrack(songsData[id]);
    await audioRef.current.play();
    setPlayStatus(true);
  }

  // function of the previous Button 
  const previous= async()=>{
    if(track.id>0){
        await setTrack(songsData[track.id-1]);
        await audioRef.current.play();
        setPlayStatus(true);
    }
  }

  // function of the Next Button 
  const next=async ()=>{
    if(track.id<songsData.length-1){
        await setTrack(songsData[track.id+1]);
        await audioRef.current.play();
        setPlayStatus(true);
    }
  }


// Tracking the seek bar running time 
  const seeksong=(e)=>{
  audioRef.current.currentTime=((e.nativeEvent.offsetX / seekBg.current.offsetWidth)*audioRef.current.duration);
  }


// This is used to calculate the Current time (left of seekbar) and the total time (right of seekbar) of the song
  useEffect(() => {
      audioRef.current.ontimeupdate = () => {
        seekBar.current.style.width=(Math.floor(audioRef.current.currentTime/audioRef.current.duration*100))+"%";
        setTime({
          currentTime: {
            second: Math.floor(audioRef.current.currentTime%60),
            minute: Math.floor(audioRef.current.currentTime/60),
          },
          totalTime: {
            second: Math.floor(audioRef.current.duration%60),
            minute: Math.floor(audioRef.current.duration/60),
          },
        });
      };
    
  }, []);


  // Passing all the states to use it on another component
  const contextValue = {
    audioRef,
    seekBg,
    seekBar,
    track,
    setTrack,
    playStatus,
    setPlayStatus,
    time,
    setTime,
    play,
    pause,
    playwithid,
    previous,
    next,
    seeksong
  };

  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
