import React, { useContext, useEffect } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Pages/Layout';
import Home from './Pages/Home';
import Search from './Pages/Search';
import SoundDetails from './Pages/SoundDetails';
import WishList from './Pages/WishList';
import Login from './Pages/Login';
import Artist from './Pages/Artist';
import ArtistDetails from './Pages/ArtistDetails';
import AlbumDetails from './Pages/AlbumDetails';
import SoundDetails2 from './Pages/SoundDetails2';
import ArtistDetails2 from './Pages/ArtistDetails2';

export default function App(props) {
  let router = createBrowserRouter([
      {path : "/" , element : <Layout/> , children : [
          {index : true , element : <Home/>},
          {path : "sounddetails/:songkey" , element : <SoundDetails/>},
          {path : "sounddetails2/:songkey" , element : <SoundDetails2/>},
          {path : "search" , element : <Search/>},
          {path : "whishlist" , element : <WishList/>},
          {path : "artists" , element : <Artist/>},
          {path : "artistsdetails/:artist_id" , element : <ArtistDetails/>},
          {path : "artistsdetails2/:artist_id" , element : <ArtistDetails2/>},
          {path : "login" , element : <Login/>},
          {path : "albumdetails/:album_id" , element : <AlbumDetails/>},
      ]}
  ]);
  
  return <RouterProvider router={router}>
      {props}
  </RouterProvider>
}
