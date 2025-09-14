import React from 'react'

const SignUp = () => {
  return (
    <div className='flex  flex-col items-center mt-10 gap-5'>
      <h1 className='text-3xl text-blue-600 font-bold'>Join BlogVerse</h1>
      <p className='text-gray-600 text-xl text-center font-semibold'>Create your account and <br /> start your Blogging journey today</p>
      <form className='flex flex-col border-1 border-black w-1/2 p-8 py-7 items-center gap-3 rounded-md mb-4'>
        <div className='w-[95%] '>
            <p className='text-md text-gray-700 font-semibold pb-3'>Full Name</p>
            <input className='border-1 border-gray-400 bg-gray-50 w-full  rounded-md py-2 px-3 focus:outline-none focus:border-black focus:border-1.8 duration-200' type="text" placeholder='Enter your full name' />
        </div>
        <div className='w-[95%] '>
            <p className='text-md text-gray-700 font-semibold pb-3'>Email</p>
            <input className='border-1 border-gray-400 bg-gray-50 w-full  rounded-md py-2 px-3 focus:outline-none focus:border-black' type="email" placeholder='Enter your email' />
        </div>
        <div className='w-[95%] '>
            <p className='text-md text-gray-700 font-semibold pb-3'>Password</p>
            <input className='border-1 border-gray-400 bg-gray-50 w-full  rounded-md py-2 px-3 focus:outline-none focus:border-black' type="password" placeholder='Enter your password' />
        </div>
        <div className='w-[95%] '>
            <p className='text-md text-gray-700 font-semibold pb-3'>Confirm Password</p>
            <input className='border-1 border-gray-400 bg-gray-50 w-full  rounded-md py-2 px-3 focus:outline-none focus:border-black' type="password" placeholder='Confirm your password' />
        </div>
        <div className='flex gap-2 border-1 border-gray-800 w-[90%] py-3 px-4 rounded-xl items-center justify-center mt-3'>
            <input type="checkbox" name='' className='w-5 h-5'/>
            <p className=''>I agree to the Terms of Services and Privacy Policy</p>
        </div>
        <button className='w-[90%] bg-purple-500 py-4 text-white rounded-xl font-semibold mt-4'>Create Account</button>
        <div className='border-[0.5px] border-gray-400 w-[90%] mt-4'></div>
        <p className='text-gray-700 font-semibold'>Already have an account? <span className='text-purple-700'>Sign in here</span></p>
        <button className='font-semibold text-gray-700 hover:bg-gray-200 py-4 w-[90%] rounded-xl cursor-pointer duration:200'>Back to Home</button>
      </form>
    </div>
    
  )
}

export default SignUp
