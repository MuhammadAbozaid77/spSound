import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HiHome } from "react-icons/hi";
import {  BsFillSearchHeartFill , BsStarFill , BsFillHeartFill}  from "react-icons/bs";
import {  FaUser}  from "react-icons/fa";
import logo from "../assesst/logo4.png"


const Sidebar = () => {
  return <>
      <div className='flex justify-center items-center my-5'> <img className='md:w-[70px] w-[50px]' src={logo} alt="" /> </div>
      <ul className='sidebarUL w-[100%] flex flex-col justify-center items-start'>
        <Link to="">            <li className='w-[100%] flex justify-between'> <span className='w-[30px] '> <HiHome  className='sidebarIcons'/> </span> <span className='sidebarText md:block hidden'> Home  </span></li></Link> 
        <Link to={"search"}>    <li className='w-[100%] flex justify-between'> <span className='w-[30px] '> <BsFillSearchHeartFill  className='sidebarIcons'/> </span>  <span className='sidebarText md:block hidden'> Search </span> </li> </Link>  
        <Link to={"artists"}>   <li className='w-[100%] flex justify-between'> <span className='w-[30px] '> <BsStarFill  className='sidebarIcons'/> </span> <span className='sidebarText md:block hidden'> Stars </span>   </li> </Link> 
        <Link to={"whishlist"}> <li className='w-[100%] flex justify-between'> <span className='w-[30px] '> <BsFillHeartFill  className='sidebarIcons'/> </span> <span className='sidebarText md:block hidden'> Liked </span>  </li> </Link> 
        <Link to={"login"}>     <li className='w-[100%] flex justify-between'> <span className='w-[30px] '> <FaUser  className='sidebarIcons'/> </span> <span className='sidebarText md:block hidden'> Login </span>  </li> </Link> 
      </ul>
  </>
}

export default Sidebar ;
