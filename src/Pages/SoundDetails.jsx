import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { BsFillPlayCircleFill , BsFillPauseCircleFill , BsHeartFill} from 'react-icons/bs';
import { MusicData } from '../Context/MusicContext';
import {mainURL_Shazam} from "../Context/ArtistData";
import { DualRing } from 'react-css-spinners';



const SoundDetails = () => {
  let {songkey} = useParams();
    /* -------------  Start Player ------------------- */
    let {sendRecieveSrc , songArePlayingNow} = useContext(MusicData);
    /* -------------  End Player ------------------- */
  const [songDeatils, setsongDeatils] = useState([])
  const url = `https://shazam.p.rapidapi.com/songs/v2/get-details?id=${songkey}&l=en-US`;
  const options = {
      method: 'GET',
      headers: {
          'X-RapidAPI-Key': mainURL_Shazam,
          'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
      }
  };

  async function getSongDeatils(){
      let data = await fetch(url , options);
      let resonce = await data.json();
      setsongDeatils(resonce.data[0]);
  }

  useEffect(() => {
    getSongDeatils();
  }, []);

return <>
        {
            songDeatils ?

            <div className='flex justify-center items-center sm:pt-[50px]'>
                
                <div className='grid md:grid-cols-2 grid-cols-1 items-center gap-5'>
                    <div className='flex justify-center items-center p-2'>
                        <img  className='md:w-[300px] sm:w-[250px] w-[200px]  rounded-lg' 
                        src={songDeatils.attributes?.artwork?.url.slice(0 , songDeatils.attributes?.artwork?.url.length - 13).concat("592x592bb.jpg")} 
                        alt={songkey} />
                    </div>
                    <div className='flex flex-col px-5'>
                        <span className=' sm:text-[32px] text-[20px] text-[#bb3232]'> {songDeatils.attributes?.name} </span> 
                        <Link to={`/albumdetails/${songDeatils.relationships?.albums.data[0].id}`}> 
                                <span className='sm:text-[18px] text-[14px] text-[#5e5e5e] cursor-pointer font-bold'> {songDeatils.attributes?.albumName} </span> 
                        </Link>
                        <Link to={`/artistsdetails/${songDeatils.relationships?.artists.data[0].id}`}> 
                                <span className='sm:text-[18px] text-[14px] text-[#5e5e5e]  cursor-pointer font-bold'> {songDeatils.attributes?.artistName} </span> 
                        </Link>
                        <div className='mt-3 flex'>
                            <div onClick={()=>sendRecieveSrc( songDeatils , songDeatils.attributes?.previews[0]?.url)}> 
                                {
                                    songArePlayingNow ? 
                                        <BsFillPauseCircleFill size={35} className='text-white p-2 me-3 bg-[#D60017] rounded-md cursor-pointer'/>
                                    :
                                        <BsFillPlayCircleFill BsFillPauseCircleFill size={35} className='text-white p-2 me-3 bg-[#D60017] rounded-md cursor-pointer'/>
                                }
                            </div> 
                            
                            <div> 
                                <BsHeartFill size={35} className='text-white p-2 bg-[#D60017] rounded-md cursor-pointer'/> 
                            </div> 
                            
                        </div>
                    </div>
                </div>
                
            </div>

            :
            <div className='absolute inset-0 flex justify-center items-center'>
                <DualRing size={40} color='gray'     thickness={3} />
            </div>

        }
</>
}

export default SoundDetails ;
