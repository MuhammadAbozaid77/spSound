import React, { useState } from 'react';
import logo from '../assesst/logo4.png';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';


 const  Navbar = ()=> {
  const [openClose, setopenClose] = useState("hidden");
  let openCloseFun = ()=>{
    if(openClose === "hidden") {
      setopenClose("flex")
    }
    else {
      setopenClose("hidden")
    }
  }

  return <>
      <div className='flex justify-center items-center h-[100%] shadow bg-[#e7e7e7]'> 
        <div className='flex justify-between items-center py-1 px-2 w-[100%] '>
            <img src={logo} className='w-[40px] rounded-lg'  alt="" />
            <FaBars color='#3a3a3a' onClick={()=>openCloseFun()} />
        </div>
      </div>
      <div className='bg-[#f3f3f3]'>
      <ul className={`navbarUL w-[100%] ${openClose} flex-col justify-center items-start`}>
        <Link to="">            <li className='w-[100%] flex justify-between'> <span className='w-[30px] '> </span> <span className='navbarText block md:hidden'> Home  </span></li></Link> 
        <Link to={"search"}>    <li className='w-[100%] flex justify-between'> <span className='w-[30px] '> </span>  <span className='navbarText block md:hidden'> Search </span> </li> </Link>  
        <Link to={"artists"}>   <li className='w-[100%] flex justify-between'> <span className='w-[30px] '> </span> <span className='navbarText block md:hidden'> Stars </span>   </li> </Link> 
        <Link to={"whishlist"}> <li className='w-[100%] flex justify-between'> <span className='w-[30px] '> </span> <span className='navbarText block md:hidden'> Liked </span>  </li> </Link> 
        <Link to={"login"}>     <li className='w-[100%] flex justify-between'> <span className='w-[30px] '> </span> <span className='navbarText block md:hidden'> Login </span>  </li> </Link> 
      </ul>
      </div>
  </>
}

export default Navbar ;
