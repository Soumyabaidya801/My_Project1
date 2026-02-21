import React from 'react'

const Product = () => {
  return (
<div className="relative min-h-screen px-4 sm:px-6 md:px-10 ">
  <h1 className="text-white text-2xl sm:text-3xl md:text-4xl flex justify-center py-8 sm:py-10 font-bold">
    Explore Booking
  </h1>

  <div className="flex gap-8 px-10 py-5 sm:flex-wrap md:flex-nowrap lg:flex-nowrap scroll-smooth overflow-x-auto hide-scrollbar">

    {/* Booking Card */}
    <div className=" min-w-[300px] bg-white rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition duration-300">

      {/* Image */}
      <img
        src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
        alt="House Booking"
        className="h-48 w-full object-cover"
      />

      {/* Content */}
      <div className="p-4">

        <h2 className="text-xl font-bold mb-2">House Booking</h2>

        {/* Time */}
        <p className="text-sm text-gray-500 mb-2">
          Available: 9:00 AM - 6:00 PM
        </p>

        {/* Price */}
        <p className="text-lg font-semibold text-green-600 mb-3">
          ₹1500 / Day
        </p>

        {/* Price Selection */}
        <select className="w-full border rounded-lg p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-cyan-400">
          <option>Select Package</option>
          <option>1 Day - ₹1500</option>
          <option>3 Days - ₹4000</option>
          <option>7 Days - ₹8500</option>
        </select>

        {/* Button */}
        <button className="w-full bg-cyan-500 text-white py-2 rounded-lg hover:bg-cyan-600 transition">
          Order Now
        </button>

      </div>
    </div>


    {/* Boat Booking */}
    <div className="min-w-[300px] bg-white rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition duration-300">

      <img
        src="https://media.istockphoto.com/id/543659548/photo/wide-angle-shot-of-front-of-the-yacht.jpg?s=612x612&w=0&k=20&c=HMVPXeqYW53FmkBNgyOfskjolurg3QysFWg8v7oRqxw="
        alt="Boat Booking"
        className="h-48 w-full object-cover"
      />

      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">Boat Booking</h2>
        <p className="text-sm text-gray-500 mb-2">
          Available: 10:00 AM - 5:00 PM
        </p>
        <p className="text-lg font-semibold text-green-600 mb-3">
          ₹2000 / Ride
        </p>

        <select className="w-full border rounded-lg p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-cyan-400">
          <option>Select Package</option>
          <option>1 Hour - ₹2000</option>
          <option>3 Hours - ₹5000</option>
        </select>

        <button className="w-full bg-cyan-500 text-white py-2 rounded-lg hover:bg-cyan-600 transition">
          Order Now
        </button>
      </div>
    </div>

    {/* Car Booking */}
    <div className="min-w-[300px] bg-white rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition duration-300">

      <img
        src="https://media.istockphoto.com/id/2171315718/photo/car-for-traveling-with-a-mountain-road.jpg?s=612x612&w=0&k=20&c=RShF7ZBR9Zz4KZB4LzWdinhZv8XTv2Peac0oFRYuFmA="
        alt="Boat Booking"
        className="h-48 w-full object-cover"
      />

      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">Car Booking</h2>
        <p className="text-sm text-gray-500 mb-2">
          Available: 10:00 AM - 5:00 PM
        </p>
        <p className="text-lg font-semibold text-green-600 mb-3">
          ₹3000 / Day
        </p>

        <select className="w-full border rounded-lg p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-cyan-400">
          <option>Select Package</option>
          <option>1 Day - ₹1500</option>
          <option>2 Day - ₹3000</option>
          <option>3 Day - ₹4500</option>
        </select>

        <button className="w-full bg-cyan-500 text-white py-2 rounded-lg hover:bg-cyan-600 transition">
          Order Now
        </button>
      </div>
    </div>

    {/* Food Booking */}
    <div className="min-w-[300px] bg-white rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition duration-300">

      <img
        src="https://media.istockphoto.com/id/1168509662/photo/assorted-indian-food.jpg?s=612x612&w=0&k=20&c=-q_gluEbGQ7wtuQAmiW8UStxI3BwNT_xHNMsfbj_JE4="
        alt="Boat Booking"
        className="h-48 w-full object-cover"
      />

      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">Food Booking</h2>
        <p className="text-sm text-gray-500 mb-2">
          Available: 10:00 AM - 5:00 PM
        </p>
        <p className="text-lg font-semibold text-green-600 mb-3">
          ₹1500 / Day
        </p>

        <select className="w-full border rounded-lg p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-cyan-400">
          <option>Select Package</option>
          <option>1 Day - ₹1500</option>
          <option>3 Day - ₹4500</option>
        </select>

        <button className="w-full bg-cyan-500 text-white py-2 rounded-lg hover:bg-cyan-600 transition">
          Order Now
        </button>
      </div>
    </div>


    {/* Bike Booking */}
    <div className="min-w-[300px] bg-white rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition duration-300">

      <img
        src="https://images.unsplash.com/photo-1558981806-ec527fa84c39"
        alt="Bike Booking"
        className="h-48 w-full object-cover"
      />

      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">Bike Booking</h2>
        <p className="text-sm text-gray-500 mb-2">
          Available: 24 Hours
        </p>
        <p className="text-lg font-semibold text-green-600 mb-3">
          ₹800 / Day
        </p>

        <select className="w-full border rounded-lg p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-cyan-400">
          <option>Select Package</option>
          <option>1 Day - ₹800</option>
          <option>3 Days - ₹2000</option>
        </select>

        <button className="w-full bg-cyan-500 text-white py-2 rounded-lg hover:bg-cyan-600 transition">
          Order Now
        </button>
      </div>
    </div>

  </div>
</div>
  )};
export default Product