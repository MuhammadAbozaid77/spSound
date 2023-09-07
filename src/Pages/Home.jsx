import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {mainURL_Shazam} from "../Context/ArtistData";
import { DualRing } from 'react-css-spinners';



export default function Home() {

    const [tracks, setTracks] = useState([]);
    const [tracks2, setTracks2] = useState([]);
    const url = 'https://shazam.p.rapidapi.com/charts/track?locale=en-US&pageSize=20&startFrom=0';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': mainURL_Shazam,
        'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
      }
    };
      async function getTrendingTracks (){
        let data = await fetch(url , options);
        let responce = await data.json();
        setTracks(responce.tracks);
    }
    const url2 = 'https://shazam-api7.p.rapidapi.com/songs/list-recommendations?id=628712770&limit=10';
    const options2 = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': mainURL_Shazam,
        'X-RapidAPI-Host': 'shazam-api7.p.rapidapi.com'
      }
    };
      async function getTrendingTracks2 (){
        let data = await fetch(url2 , options2);
        let responce = await data.json();
        setTracks2(responce.tracks);
    }

    useEffect(() => {
      getTrendingTracks();
      getTrendingTracks2();
    }, []);

    useEffect(() => {
    }, [tracks]);

    
  return <>

  <div className='mt-[50px]'>

                    <div className='my-3 mt-[50px] text-[20px]'>
                      <span className=' text-[#555555] font-bold'> Trendin  Tracks In The World </span>  
                    </div>
                  {
                    tracks.length > 0   ? 
                      <div className='grid  xl:grid-cols-6 lg:grid-cols-5  md:grid-cols-4 sm:grid-cols-3 ssm:grid-cols-2  grid-cols-1 gap-3'>
                          {
                            tracks?.slice(0 , 10).map((track , index)=>(
                              <Link to={`/sounddetails2/${track.key}`} key={index}>
                                <div className='relative bg-[#eeeeee] p-2 rounded-md w-[100%]' >
                                        <div className='flex justify-center items-center' ><img className='w-full rounded' src={track.images.coverart} alt={track.key} /></div>
                                        <div className='flex flex-col'>
                                            <span className='text-md font-semibold'> {track.title.slice(0,15)} </span>
                                            <span className='text-[14px] font-sm text-[#555555]'> {track.subtitle.slice(0,15)}  </span>
                                        </div>
                                        <div className='absolute hover:bg-[#11111128] inset-0 p-2 rounded-md'>  </div>
                                </div>
                              </Link>
                            ))
                          }
                      </div>
                      : 
                      <div className='absolute inset-0 flex justify-center items-center'>
                          <DualRing size={40} color='gray'     thickness={3} />
                      </div>
                  }   

                    <div className='my-3 mt-[50px] text-[20px]'>
                      <span className=' text-[#555555] font-bold'> For You  </span>  
                    </div>
                  {
                    tracks2.length > 0   ? 
                      <div className='grid  xl:grid-cols-6 lg:grid-cols-5  md:grid-cols-4 sm:grid-cols-3 ssm:grid-cols-2  grid-cols-1 gap-3'>
                          {
                            tracks2?.map((track , index)=>(
                              <Link to={`/sounddetails2/${track.key}`} key={index} >
                                <div className='relative bg-[#eeeeee] p-2 rounded-md w-[100%]' >
                                        <div className='flex justify-center items-center' ><img className='w-full rounded' src={track.images.coverart} alt={track.key} /></div>
                                        <div className='flex flex-col'>
                                            <span className='text-md font-semibold'> {track.title.slice(0,15)} </span>
                                            <span className='text-[14px] font-sm text-[#555555]'> {track.subtitle.slice(0,15)}  </span>
                                        </div>
                                        <div className='absolute hover:bg-[#11111128] inset-0 p-2 rounded-md'>  </div>
                                </div>
                              </Link>
                            ))
                          }
                      </div>
                      : 
                      <div className='absolute inset-0 flex justify-center items-center'>
                          <DualRing size={40} color='gray'     thickness={3} />
                      </div>
                  }   
  </div>

  </>
}
