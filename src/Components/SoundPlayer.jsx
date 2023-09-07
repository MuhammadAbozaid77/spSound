import React, { useEffect} from 'react';
import { BsFillSkipBackwardCircleFill, BsFillSkipForwardCircleFill} from 'react-icons/bs';
import { BsFillPlayCircleFill , BsFillPauseCircleFill , BsArrowRepeat } from 'react-icons/bs';
import { useRef } from 'react';
import { MusicData } from '../Context/MusicContext';
import { useContext } from 'react';


export default function SoundPlayer() {
  let ref = useRef();   
  let {trackSource , songArePlayingNow , handelPlayPause , setReciveRef  , nextPreviousState ,
    handelNext , handelPrevious, playerImage , playerTitle , playerSubTitle , SongAutoPlay
  } = useContext(MusicData);

 let reeloadSong = ()=>{
  ref.current.load()
 }
  useEffect(() => {
    setReciveRef(ref);
  }, [trackSource]);

  useEffect(() => {
  }, [nextPreviousState]);

  
return <>
  
<div className='h-[100%] px-5'>
    <div className='flex justify-between items-center h-[100%]'>
        <div className='sm:flex hidden justify-start items-center h-[100%]  w-[100%] '>
             <div> <img className='w-[40px] rounded-md border border-white' src={playerImage} alt="" /> </div>
             <div className='text-[#222222] font-bold mx-2'> 
                <h6 className='text-[12px]'> {playerTitle} </h6> 
                <p className="text-white" > {playerSubTitle} </p> 
              </div>
        </div>
        <div className='flex justify-center items-center h-[100%]  w-[100%] '>
              <audio ref={ref} src={trackSource} autoPlay={SongAutoPlay} > 

              </audio>

              <div className='' onClick={()=>reeloadSong()}> <BsArrowRepeat size={20} className='text-white mx-2 cursor-pointer' /> </div>
              <div onClick={()=>handelPrevious()}>
                  {
                    nextPreviousState ? 
                    <BsFillSkipBackwardCircleFill size={20} className='text-white mx-2 cursor-pointer' />
                    :
                    ""
                  }
              </div>
              <div className=' p-2 rounded mx-2 cursor-pointer' 
                   onClick={()=>handelPlayPause()}
              > 
                    { songArePlayingNow ?  
                        <BsFillPauseCircleFill size={30} className='text-white '/> 
                        :
                        <BsFillPlayCircleFill size={30} className='text-white '/>
                    }   
              </div>
              <div onClick={()=>handelNext()}>
                  {
                    nextPreviousState ?
                    <BsFillSkipForwardCircleFill size={20} className='text-white mx-2 cursor-pointer' />
                    :
                    ""
                  }
              </div>
        </div>
    </div>
</div>
  </>
}
