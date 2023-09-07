import React from 'react';
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';
import SoundPlayer from '../Components/SoundPlayer';
import { Outlet } from 'react-router-dom';
import {BiLogoGmail, BiMobile} from "react-icons/bi"

const  Layout = () => {
  return <>
      <div className='relative overflow-hidden h-[100vh]'>
          <div className='py-1 px-5 bg-[#cecece] sm:flex   justify-between items-center'>
               <div className='flex justify-start items-center'>
                    <BiLogoGmail className='text-[#303030]' size={15}/>
                    <span className='mx-2 text-[12px] text-[#303030] font-semibold'> muhammadabozaid77@gmail.com </span>
               </div>
               <div className='flex justify-start items-center'>
                    <span className='mx-2 text-[12px] text-[#303030]  font-semibold'> ZIDAN </span>
               </div>
               <div className='flex justify-start items-center'>
                    <BiMobile className='text-[#303030]' size={15}/>
                    <span className='mx-2 text-[12px] text-[#303030]  font-semibold'> +20 1033662585 </span>
               </div>
          </div>
          <div className='sm:hidden block  w-[100%] border-b'>
               <Navbar/>
          </div>
          <div className='flex h-[100%]'>
               <div className='sm:block hidden md:w-[250px] w-[70px] h-[100%] bg-[#ebebeb]'>
                    <Sidebar/>
               </div>
               <div>  </div>
               <div className='relative w-[100%] bg-gradient-to-r bg-[#FFFFFF] px-2 overflow-y-auto pb-[120px]'>
                    <Outlet> </Outlet>
               </div>
          </div>
          <div className='absolute bottom-0  sm:h-[65px] h-[55px] w-[100%] bg-[#D60017] border-t'>
               <SoundPlayer   />
          </div>
      </div>
    
  </>
}

export default Layout ;





