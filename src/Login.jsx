import React from 'react'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'
import { Eye } from 'lucide-react';
import { EyeOff } from 'lucide-react';
import { useState } from 'react';

const Login = () => {

  const [eye,setEye] = useState(false);
  function eyes(){
      setEye((eye)=>!eye)
    }
  return (
    <div>
      <NavBar/>
    <div className='w-screen flex flex-col items-center'>
      <div className='md:w-1/3  flex  flex-col items-center mt-10 gap-2 border-1 border-gray-300  rounded-2xl shadow-2xl'>
       <h1 className='mt-5 text-xl font-bold'>Sign In</h1>
       <p className='text-sm text-gray-700'>Access your account</p>
       <form action="" className='w-[80%] my-5'>
        <div className='w-[95%] mb-4'>
            <p className='text-sm text-gray-700 font-semibold pb-1.5 '>Email Address</p>
            <input className='border-1 border-gray-300 bg-gray-50 w-full  rounded-md py-3 px-3 focus:outline-none focus:border-black text-sm focus:border-1.8 duration-200' type="text" placeholder='✉️ sample@gmail.com' />
        </div>
        <div className='w-[95%] '>
            <p className='text-sm text-gray-700 font-semibold pb-1.5'>Password</p>
            <div className='relative '>

            <input className='border-1 border-gray-300 bg-gray-50 w-full  rounded-md py-3 px-3 focus:outline-none focus:border-black focus:border-1.8 text-sm duration-200' type={eye?"text":"password"}  placeholder='🔒 sample123' />

            <p onClick={eyes}>{(eye==true)?<Eye className='absolute right-2 top-2.5 opacity-50 w-[5%] h-[50%]'/>:<EyeOff className='absolute right-2 top-2.5 opacity-50 w-[5%] h-[50%]'/>}</p>
            </div>
        </div >

      


        <div className='flex justify-between w-full mt-4'>
            <div className='flex   gap-1'>
                <input type="checkbox" />
                <p className='text-xs md:text-sm text-gray-800 font-semibold'>Remember me</p>
            </div>
            <div className=''>
                <p className='text-xs md:text-sm text-blue-600 font-semibold hover:cursor-pointer'>Forgot Password?</p>
            </div>
        </div>
        <button className='w-full mt-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 duration-200'>Sign In</button>
        <div className='w-full flex justify-center my-4 border-1 border-gray-200 '></div>

        <p className='text-xs md:text-sm text-center text-gray-700'>Don't have an account?<Link to="/signup" className='text-blue-600 font-semibold hover:cursor-pointer'>Create one here</Link></p>
       </form>
      </div>
    </div>
    </div>
  )
}

export default Login

   