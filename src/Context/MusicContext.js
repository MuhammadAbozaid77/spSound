import React, {useState } from 'react';
import { createContext } from 'react';

export let MusicData = createContext([]);
export default function MusicContext(props) {

  // Array Of Songs ---------------------------------------------------
  const [index, setIndex] = useState(0)
  const [playerTracks, setplayerTracks] = useState([]);
  const [SongAutoPlay, setSongAutoPlay] = useState(false)
  const [trackSource, setTrackSource] = useState("https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/97/ac/de/97acdecc-a25b-ab43-8866-f6feae8782c9/mzaf_1042132389403017210.plus.aac.ep.m4a");
  const [arrayOfTracks, setArrayOfTracks] = useState([]);
  const [reciveRef, setReciveRef] = useState("");
  const [playerImage, setplayerImage] = useState("");
  const [playerTitle, setplayerTitle] = useState("");
  const [playerSubTitle, setplayerSubTitle] = useState("");
  // Stete Track Playing
  const [songArePlayingNow, setsongArePlayingNow] = useState(false);
  const [nextPreviousState, setnextPreviousState] = useState(true);

  function sendRecieveSrc(songDetails ,  songSrc){
      setnextPreviousState(false);
      if(songArePlayingNow !== true){
        setsongArePlayingNow(true);
        setTrackSource(songSrc);
        setplayerImage(songDetails.attributes?.artwork?.url?.slice(0 , songDetails.attributes?.artwork?.url.length - 13).concat("592x592bb.jpg"));
        setplayerTitle(songDetails?.attributes?.name );
        setplayerSubTitle(songDetails?.attributes?.artistName);
        setSongAutoPlay(true);
        reciveRef.current.play();

      }
      else{
        setsongArePlayingNow(false);
        reciveRef.current.pause();
      }
  }

  function sendRecieveSrc2(songDetails , songSrc){
      setnextPreviousState(false);
      setArrayOfTracks(songDetails);
      setTrackSource(songSrc);
      setplayerImage(songDetails.images?.coverart);
      setplayerTitle(songDetails?.title);
      setplayerSubTitle(songDetails?.subtitle);
      setSongAutoPlay(true);
      if(songArePlayingNow !== true){
        setsongArePlayingNow(true);
        reciveRef.current.play();
      }
      else{
        setsongArePlayingNow(false);
        reciveRef.current.pause();
      }
  }

  function sendRecieveMultiSrc(Groupsrc){
    setnextPreviousState(true);
    setArrayOfTracks(Groupsrc);
    setTrackSource(Groupsrc[index][4]);
    setplayerImage(Groupsrc[index][2]);
    setplayerTitle(Groupsrc[index][1]);
    setplayerSubTitle(Groupsrc[index][3]);
    setSongAutoPlay(true);
    if(songArePlayingNow !== true){
      setsongArePlayingNow(true);
      reciveRef.current.play();
    }
    else{
      setsongArePlayingNow(false);
      reciveRef.current.pause();
    }
  }

  function handelPlayPause(){
    if(songArePlayingNow){
      setsongArePlayingNow(false);
      reciveRef.current.pause();
    }
    else{
      setsongArePlayingNow(true);
      reciveRef.current.play();
    }
  }
   
  function  handelNext() { 
      if(arrayOfTracks.length > 1){
        setIndex(index+1)
        setnextPreviousState(true);
        setTrackSource(arrayOfTracks[index][4]);
        setplayerImage(arrayOfTracks[index][2]);
        setplayerTitle(arrayOfTracks[index][1]);
        setplayerSubTitle(arrayOfTracks[index][3]);
        setSongAutoPlay(true);
        setsongArePlayingNow(true);
      }
   }
  function  handelPrevious() { 
    if(arrayOfTracks.length > 1){
      setIndex(index-1)
      setnextPreviousState(true);
      setTrackSource(arrayOfTracks[index][4]);
      setplayerImage(arrayOfTracks[index][2]);
      setplayerTitle(arrayOfTracks[index][1]);
      setplayerSubTitle(arrayOfTracks[index][3]);
      setSongAutoPlay(true);
      setsongArePlayingNow(true);
    }
   }

  return <MusicData.Provider value={
                  {
                    setplayerTracks ,
                    sendRecieveSrc , sendRecieveSrc2,
                    trackSource , setTrackSource ,
                    handelPlayPause ,
                    reciveRef ,setReciveRef , 
                    songArePlayingNow ,
                    arrayOfTracks , setArrayOfTracks ,
                    sendRecieveMultiSrc ,
                    handelNext , handelPrevious,  
                    playerImage , playerTitle , playerSubTitle ,
                    SongAutoPlay ,
                    nextPreviousState 
                  }
                                    } >
    {props.children}
  </MusicData.Provider>
}

