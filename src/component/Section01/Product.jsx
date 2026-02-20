import React from 'react'

const Product = () => {
  return (
    <div className='relative min-h-screen px-2'>
        <h1 className='text-white text-3xl flex justify-center py-10 font-bold'>Explor Booking</h1>
        <div className='flex gap-8 px-10 scroll-smooth overflow-x-auto hide-scrollbar'>
         <div className='min-w-[300px] h-[400px] rounded-2xl shadow-xl flex items-center justify-center text-2xl font-bold bg-cyan-300'> Car Booking</div>
         <div className='min-w-[300px] h-[400px] rounded-2xl shadow-xl flex items-center justify-center text-2xl font-bold bg-cyan-300'> House Booking</div>
         <div className='min-w-[300px] h-[400px] rounded-2xl shadow-xl flex items-center justify-center text-2xl font-bold bg-cyan-300'>Boat Booking</div>
         <div className='min-w-[300px] h-[400px] rounded-2xl shadow-xl flex items-center justify-center text-2xl font-bold bg-cyan-300'>Bike Booking</div>

         <div className='min-w-[300px] h-[400px] rounded-2xl shadow-xl flex items-center justify-center text-2xl font-bold bg-cyan-300'></div>
         <div className='min-w-[300px] h-[400px] rounded-2xl shadow-xl flex items-center justify-center text-2xl font-bold bg-cyan-300'> </div>
         <div className='min-w-[300px] h-[400px] rounded-2xl shadow-xl flex items-center justify-center text-2xl font-bold bg-cyan-300'></div>
         <div className='min-w-[300px] h-[400px] rounded-2xl shadow-xl flex items-center justify-center text-2xl font-bold bg-cyan-300'> </div>
        </div>
    </div>
  )
}

export default Product