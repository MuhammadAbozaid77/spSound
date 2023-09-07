import React, {useState , useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import artists from "../Context/ArtistData";
import {IoIosArrowForward} from "react-icons/io"
import { useContext } from 'react';
import { MusicData } from '../Context/MusicContext';
import {mainURL_Shazam} from "../Context/ArtistData";
import { DualRing } from 'react-css-spinners';



export default function ArtistDetails() {

  let {sendRecieveMultiSrc} = useContext(MusicData);

  let {artist_id} = useParams();

// Function Get Image and name ------------------------------------------------------------------------------------
let [imageSourcrRender, setImageSourcrRender] = useState("");
let [artistNameRender, setArtistNameRender] = useState("");
  async function getImageFromPath(){
       let artistData  =  artists.filter((artistt)=>(
       artistt.id == artist_id 
    ))
    setImageSourcrRender(artistData[0].image);
    setArtistNameRender(artistData[0].name);
  }
// Function Get Data API (Top Songs + Artist Albums + Artist Details + Artist Summary) ---------------------------------------------
const [topSongs, setTopSongs] = useState([]);
const [topAlbums, setTopAlbums] = useState([])
  const url = `https://shazam.p.rapidapi.com/artists/get-summary?id=${artist_id}&l=en-US`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': mainURL_Shazam,
      'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
    }
  };
    async function getArtistSummary (){
      let data = await fetch(url , options);
      let responce = await data.json();
      let songsResponce = await responce.resources.songs ;
      let albumsResponce = await responce.resources.albums ;
      let songs = [] ;
      for (const song in songsResponce) {
        songs.push( [ songsResponce[song].id , 
                      songsResponce[song].attributes.name, 
                      (songsResponce[song].attributes.artwork.url).slice(0,songsResponce[song].attributes.artwork.url.length - 13).concat("592x592bb.jpg"),
                      songsResponce[song].attributes.albumName,
                      songsResponce[song].attributes.previews[0].url   // music URL
                    ])
      }
      setTopSongs(songs);
      let albums = [] ;
      for (const album in albumsResponce) {
        albums.push( [ albumsResponce[album].id , 
                   albumsResponce[album].attributes.name, 
                   (albumsResponce[album].attributes.artwork.url).slice(0,albumsResponce[album].attributes.artwork.url.length - 13).concat("592x592bb.jpg"),
                   albumsResponce[album].attributes.releaseDate,
                 ])
    }
    setTopAlbums(albums);
  }
// Function Edit On Summary ------------------------------------------------------------------------------------

// Function Calling All Functions ------------------------------------------------------------------------------------

 async function callAllFunctions(){
      await getImageFromPath();
      await getArtistSummary ();
  }

    useEffect(() => {
      callAllFunctions();
    }, []);
    
  return <>
  {
    topSongs.length > 0 && topAlbums.length > 0 ? 
    <div className='mb-[100px]'>
                <div className=''   >
                      <div className='md:h-[250px] h-[150px] flex justify-center items-center'> 
                          <img className='h-[80%]  rounded-full shadow-md' src={imageSourcrRender} alt={artistNameRender} />
                      </div>
                      <div className='text-center'> <span className='artistCoverTitle'> {artistNameRender} </span> </div>
                </div>
                <div className='p-1 mt-5 h-[100%]'>
                            <div className='border-b pb-1 my-2  flex items-center justify-between'> 
                                <div className='flex items-center'>
                                    <span className='text-md font-bold text-[#2b2b2b]'> Top Songs </span> 
                                    <span className='text-[#555555] mx-1'> <IoIosArrowForward /> </span> 
                                </div>
                                <div className='mb-3'> 
                                    <button onClick={()=>sendRecieveMultiSrc(topSongs)} 
                                        className='border py-1 px-3 bg-red-600 text-white rounded-md'
                                        > Play All 
                                    </button>
                                </div>
                            </div>
                            <div className='grid grid-cols-4 gap-1'>
                              { 
                                topSongs.slice(0,6).map((topSong, index)=>(
                                  <div className='rounded  border-b w-[100%] p-1 bg-white md:col-span-2 col-span-4' > 
                                      <Link to={`/sounddetails/${topSong[0]}`}>  
                                        <div className='flex justify-start items-center ' key={index}>
                                            <img 
                                            src={topSong[2]}
                                            alt={topSong[0]} 
                                            className='w-[30px] rounded-sm'
                                            />
                                            <div className='ms-2 flex flex-col'>
                                              <span className='text-md font-semibold'> {topSong[1]} </span>
                                              <span className='text-[12px] font-sm text-[#555555]'> <span className=''>Album :</span>  {topSong[3]} </span>
                                            </div>
                                        </div>
                                      </Link>
                                  </div>

                                )) 
                              }
                            </div>
                </div>
                <div className='mt-[50px]'>
                  <div className='border-b pb-1 my-2  flex items-center'> <span className='text-md font-bold text-[#2b2b2b]'> Albums </span> <span className='text-[#555555] mx-1'> <IoIosArrowForward /> </span> </div>
                    <div className='grid  xl:grid-cols-6 lg:grid-cols-5  md:grid-cols-4 sm:grid-cols-3 ssm:grid-cols-2  grid-cols-1 gap-3'>
                        {
                          topAlbums.map((album , index)=>(
                            <Link to={`/albumdetails/${album[0]}`} >
                              <div className='relative bg-[#eeeeee] p-2 rounded-md w-[100%]' key={index}>
                                      <div className='flex justify-center items-center' >
                                          <img className='w-full rounded' src={album[2]} alt={album[0]} />
                                      </div>
                                      <div className='flex flex-col'>
                                          <span className='text-md font-semibold'> {album[1].slice(0,15)} </span>
                                          <span className='text-[14px] font-sm text-[#555555]'> {album[3]}  </span>
                                      </div>
                                      <div className='absolute hover:bg-[#11111128] inset-0 p-2 rounded-md'>  </div>
                              </div>
                            </Link>
                          ))
                        }
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

