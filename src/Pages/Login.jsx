import React from 'react';
import {AiFillGoogleCircle} from "react-icons/ai";
import {BiLogoFacebookCircle} from "react-icons/bi";


export default function Login() {
  return <>
<div className='w-[100%] flex justify-center items-center gap-5 md:flex-row flex-col'>
      <form onSubmit={(e)=>(e.preventDefault())}
            className='sm:w-[300px] w-[100%] p-3 border rounded-md pb-10'>
            
          <span className='loginTopics'> Login </span>
          <div className='flex flex-col my-5'>
              <label className='loginLabel' htmlFor="email"> Email  </label>
              <input className='loginInput' type="email" name="" id="email" />
          </div>
          <div className='flex flex-col my-5'>
              <label className='loginLabel' htmlFor="password"> Password  </label>
              <input className='loginInput' type="password" name="" id="password" />
          </div>
          <div className='flex flex-col my-5'>
              <button className='subbmitButton' type='submit'> Login  </button>
          </div>
      </form>
      <form onSubmit={(e)=>(e.preventDefault())}
            className='sm:w-[300px] w-[100%] p-3 border rounded-md pb-10'>
            
          <span className='loginTopics'> Registiration </span>
          <div className='flex flex-col my-5'>
              <label className='loginLabel' htmlFor="name"> Name  </label>
              <input className='loginInput' type="name" name="" id="name" />
          </div>
          <div className='flex flex-col my-5'>
              <label className='loginLabel' htmlFor="email"> Email  </label>
              <input className='loginInput' type="email" name="" id="email" />
          </div>
          <div className='flex flex-col my-5'>
              <label className='loginLabel' htmlFor="password"> Password  </label>
              <input className='loginInput' type="password" name="" id="password" />
          </div>
          <div className='flex flex-col my-5'>
              <button className='subbmitButton' type='submit'> Registiration  </button>
          </div>
          <div className='flex flex-col my-5 items-center'>
              <span className='forgetPassword'> Forget Password  </span>
          </div>
          <div className='flex flex-col my-5 items-center'>
              <span className='loginText'> OR  </span>
          </div>
          <div className='flex justify-center items-center'>
              <div className='mx-1 text-[#D60017]'> <AiFillGoogleCircle size={30} /> </div>
              <div className='mx-1 text-blue-700'> <BiLogoFacebookCircle size={30} /> </div>
          </div>
      </form>
</div>
  </>
}

