import React from 'react'

const ProductCard = () => {
  return (
    <div className="border-1 border-black w-[300px] flex flex-col items-center gap-10 py-4 rounded-lg bg-gradient-to-b from-pink-100 to-blue-100 hover:scale-105 transition-transform duration-300">
      <img src="./vite.svg" alt="" className='w-[100px] h-[100px] border-blue-600 rounded-full border-4 '></img>
      <div className='flex flex-col gap-2 items-center'>
        <h1 className='font-bold text-xl text-blue-400'>Ice Cream</h1>
        <p className='text-gray text-xl text-center'>Delicious ice cream </p>
        <p className='text-[20px] text-purple-700'>Price: $5.00</p>
      </div>
      <button className='bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 cursor-pointer transition-colors duration-300'>Add to cart</button>

    </div>
  )
}

export default ProductCard
