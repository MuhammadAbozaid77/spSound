import React, { useEffect, useState } from 'react';
import { BsFillPlayCircleFill} from 'react-icons/bs';
import {IoIosArrowForward} from "react-icons/io"
import { Link, useParams } from 'react-router-dom';
import { useContext } from 'react';
import { MusicData } from '../Context/MusicContext';
import {mainURL_Shazam} from "../Context/ArtistData";
import { DualRing } from 'react-css-spinners';


export default function AlbumDetails() {
    let {sendRecieveSrc} = useContext(MusicData);
    let {album_id} = useParams();
    const [albumSongs, setalbumSongs] = useState([]);
    const [albumName, setalbumName] = useState("");
    const [albumArtist, setalbumArtist] = useState("")
    const [albumYear, setalbumYear] = useState("");
    const [albumImage, setAlbumImage] = useState("");
    const [albumSongsCount, setalbumSongsCount] = useState("")
    const url = `https://shazam.p.rapidapi.com/albums/get-details?id=${album_id}&l=en-US`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': mainURL_Shazam,
            'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
        }
    };

    async function getAllAlbumsSongs(){
        let data = await fetch(url , options);
        let resonce = await data.json();
        setalbumName(resonce.data[0].attributes.name);
        setalbumArtist(resonce.data[0].attributes.artistName);
        let songImagePath = resonce.data[0].attributes.artwork.url
        setAlbumImage(songImagePath.slice(0, songImagePath.length - 13).concat("592x592bb.jpg"));
        setalbumYear(resonce.data[0].attributes.releaseDate);
        setalbumSongsCount(resonce.data[0].attributes.trackCount)
        setalbumSongs(resonce.data[0].relationships.tracks.data);
    }

    useEffect(() => {
      getAllAlbumsSongs();
    }, []);
    




  return <>
        {
          albumSongs.length > 0 ?   
            <>
                <div className='grid lg:grid-cols-5 md:grid-cols-3 sm-grid-cols-2 grid-cols-1 gap-2 items-center p-5'>
                <div className='col-span-1 flex justify-center items-center'>
                    <img className='md:w-full w-[200px] rounded' src={albumImage} alt={album_id} />
                </div>
                <div className='flex justify-center p-3 flex-col lg:col-span-4 md:col-span-2 col-span-1 h-[100%]'>
                    <span className='sm:text-[32px] text-[20px] text-[#bb3232] mb-3'> {albumName} </span>
                    <span className='sm:text-[18px] text-[14px] text-[#5e5e5e] cursor-pointer font-bold mb-3'> {albumArtist} </span>
                    <span className='text-[#555555] md:text-md text-sm font-thin'> {albumYear} </span>
                    <span className='text-[#555555] md:text-md text-sm font-thin'>  {albumSongsCount} tracks </span>
                </div>
                </div>
                <div className='mt-5 p-1 rounded-md'>
                    <div className='border-b pb-1 my-2  flex items-center'> <span className='text-md font-bold text-[#2b2b2b]'> Tracks </span> <span className='text-[#555555] mx-1'> <IoIosArrowForward /> </span> </div>

                    {albumSongs.map((songSong, index) => (
                        <Link to={`/sounddetails/${songSong.id}`}>
                            <div className='mt-1 h-[50px] flex justify-between items-center p-1 rounded-md hover:bg-[#ebebeb] border-b '>
                                <div className='flex md:flex-row flex-col justify-between md:items-center w-[100%]'>
                                    <div> <span className='w-[100%] text-sm font-normal text-[#555555]'> {index + 1}- {songSong.attributes.name} </span> </div>
                                </div>
                                <div className=' flex justify-end'> 
                                    <span className='cursor-pointer'> 
                                        <BsFillPlayCircleFill className='text-[#D60017]' size={30} /> 
                                    </span> 
                                </div>
                            </div>
                        </Link>

                    ))}

                </div>
            </>
            :
            <div className='absolute inset-0 flex justify-center items-center'>
                <DualRing size={40} color='gray'     thickness={3} />
            </div>
        } 
  </>
}
 