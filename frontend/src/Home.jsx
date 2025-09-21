import React from 'react'
import posts from './posts.json'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <NavBar/>
    <div className='w-screen py-3 flex flex-col justify-center items-center overflow-x-hidden'>
      <div className='text-center'>
        <h1 className='text-lg md:text-3xl font-bold'>Welcome to BlogVerse</h1>
        <p className='text-xs md:text-md text-gray-600 mt-2.5 text-center'>Discover amazing stories,insights, and ideas from our </p>
          <p className='text-xs md:text-md text-gray-600 pt-0.5 text-center'>
community of writers.<Link to="/login" className='text-blue-700'>Sign in</Link> to create your own posts and save your favourites
          </p>
          
          
      </div>
      <div className='flex flex-wrap justify-center gap-8 mt-8'>
       {posts.map(post => (
       
        <div className='rounded-2xl w-[90%] md:w-[25%] border-1 border-gray-200 hover:shadow-xl overflow-hidden'>
            <div className='w-full h-[35%] overflow-hidden relative'>
                <div className='absolute left-3 top-3 bg-blue-700 text-white text-xs font-semibold px-2 py-1 rounded-2xl z-10'>{post.field}</div>
                 <img className='w-full  object-fill rounded-t-2xl hover:scale-110 duration-300' src={post.image} alt="" />
            </div>
           
            <div>
                <div className='my-3 mx-5 h-[5%]'>
                    <div className='flex gap-3 items-center'>
                    <img className='rounded-full w-8 h-8' src={post.author.image} alt="" />
                    <div>
                        <h4 className='text-xs font-semibold'>{post.author.name}</h4>
                        <p className='text-xs'>{post.author.ago} . {post.author.read}</p>
                    </div>
                </div>
                <div className='mt-4 flex flex-col gap-3 h-[35%]'>
                    <h1 className='font-bold hover:text-blue-600'>{post.title}</h1>
                    <p className='text-gray-600 text-xs'>{post.content}</p>
                </div>
                <div className= 'my-3 w-full border-1 border-gray-200'></div>

                <div className='flex w-full justify-between h-[10%]'>
                    <p className='text-xs text-gray-600'>⌛{post.author.read}</p>
                    <p className='text-blue-800 text-xs'>Read More</p>
                </div>
                </div>
                
            </div>
        </div>
       ))}
      </div>
    </div>
    </div>
  )
}

export default Home
