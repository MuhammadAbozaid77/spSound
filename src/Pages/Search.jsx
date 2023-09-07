import React, { useEffect, useState } from 'react';
import {IoIosArrowForward} from "react-icons/io";
import {FiSearch} from "react-icons/fi";
import {mainURL_Shazam} from "../Context/ArtistData";
import { Link } from 'react-router-dom';


export default function Search() {
    // Function Get Data API (Top Songs + Artist Albums + Artist Details + Artist Summary) ---------------------------------------------
    const [topSongs, setTopSongs] = useState([]);
    const [topArtists, setTopARtists] = useState([]);
    const [itemSearch, setItemSearch] = useState("");
    const url = `https://shazam-api7.p.rapidapi.com/search?term=${itemSearch}&limit=10`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': mainURL_Shazam,
            'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
        }
    };
        async function searchByTopics(){
          let data = await fetch(url, options);
          let responce = await data.json();
          setTopSongs(responce.tracks?.hits)
          setTopARtists(responce.artists?.hits)
      }
  
      useEffect(() => {
      }, [itemSearch])
      
  
  return <>


          <div className='flex justify-between items-center w-[100%] border p-1 rounded-md mt-3'> 
            <div className='w-[100%] h-[100%]'> 
              <input 
                className='serachBar' 
                type="search" 
                placeholder='Search Here In English ....' 
                onChange={(e)=>setItemSearch(e.target.value)}
              /> 
            </div>
            <div onClick={()=>searchByTopics()} 
                className='w-[80px] h-[100%] flex justify-center items-center p-1 rounded-md bg-[#949494] cursor-pointer'> 
                <FiSearch className=' text-white rounded-md p-1 ' size={25} /> 
            </div>
          </div>
          <div className='w-[100%] p-1'>
          </div>
          <div className='mx-auto max-w-2xl p-5  lg:max-w-7xl'>
              <div className='mt-[10px]'>
                        <div className='border-b pb-1 my-2  flex items-center'> <span className='text-md font-bold text-[#2b2b2b]'> Tracks </span> <span className='text-[#555555] mx-1'> <IoIosArrowForward /> </span> </div>
                          <div className='grid  xl:grid-cols-6 lg:grid-cols-5  md:grid-cols-4 sm:grid-cols-3 ssm:grid-cols-2  grid-cols-1 gap-3'>
                                  {
                                  
                                    topSongs?.map((songSong)=>(
                                      <Link to={`/sounddetails2/${songSong?.track?.key}`}>
                                        <div className='relative bg-[#eeeeee] p-2 rounded-md w-[100%]'>
                                                <div className='flex justify-center items-center' ><img className='w-full rounded' src={songSong?.track?.images?.coverart} alt={songSong?.track?.key} /></div>
                                                <div className='flex flex-col'>
                                                    <span className='text-md font-semibold'> {songSong?.track?.subtitle} </span>
                                                </div>
                                                <div className='absolute hover:bg-[#11111128] inset-0 p-2 rounded-md'>  </div>
                                        </div>
                                      </Link>
                                    ))
                                    
                                  }
                          </div>
              </div>
              <div className='mt-[10px]'>
                        <div className='border-b pb-1 my-2  flex items-center'> <span className='text-md font-bold text-[#2b2b2b]'> Albums </span> <span className='text-[#555555] mx-1'> <IoIosArrowForward /> </span> </div>
                          <div className='grid  xl:grid-cols-6 lg:grid-cols-5  md:grid-cols-4 sm:grid-cols-3 ssm:grid-cols-2  grid-cols-1 gap-3'>
                                  {
                                    topArtists?.map((artistArtist)=>(
                                      <Link to={`/artistsdetails2/${artistArtist?.artist?.adamid}`}>
                                          <div className='relative bg-[#eeeeee] p-2 rounded-md w-[100%]'>
                                                <div className='flex justify-center items-center' ><img className='w-full rounded' src={artistArtist?.artist?.avatar} alt={artistArtist?.artist?.adamid} /></div>
                                                <div className='flex flex-col'>
                                                    <span className='text-md font-semibold'> {artistArtist?.artist?.name} </span>
                                                </div>
                                                <div className='absolute hover:bg-[#11111128] inset-0 p-2 rounded-md'>  </div>
                                          </div>
                                      </Link>

                                    ))
                                  }
                          </div>
              </div>
              
          </div>  

  </>
}
