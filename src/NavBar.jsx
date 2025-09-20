import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='flex justify-around h-16 items-center border-1 border-gray-100'>
      <h1 className='text-xl font-bold'>BlogVerse</h1>
      <Link to="/" className='text-gray-700 hover:bg-blue-200 px-5 py-2 rounded-lg cursor-pointer duration-200'>Home</Link>
      <div className='flex gap-5 items-center'>
        <Link to="/login" className='font-semibold text-gray-700 '>Sign in</Link>
        <Link to="/signup" className='bg-blue-600 text-white px-5 py-2 rounded-xl cursor-pointer'>Sign up</Link>
      </div>
    </div>
  )
}

export default NavBar
