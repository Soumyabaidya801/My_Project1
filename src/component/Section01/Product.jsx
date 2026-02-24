import React from "react";

const Product = () => {
  return (
    <div className="relative min-h-screen px-4 sm:px-6 md:px-10 py-10">
      
      {/* Title */}
      <h1 className="text-white text-2xl sm:text-3xl md:text-4xl text-center font-bold mb-10">
        Explore Booking
      </h1>

      {/* Responsive Grid */}
      <div className="min-w-[200px] sm:min-w-[250px] md:min-w-[320px] flex gap-4 overflow-x-auto scroll-smooth sm:gap-6 hide-scrollbar px-2 sm:px-4 md:px-8 py-4 sm:py-6 md:py-10">

        {/* Card Component */}
        {[
          {
            title: "House Booking",
            price: "₹1500 / Day",
            image:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
          },
          {
            title: "Boat Booking",
            price: "₹2000 / Ride",
            image:"https://media.istockphoto.com/id/1057299314/photo/honeymoon-couple-on-luxury-yacht-romantic-holidays.jpg?s=612x612&w=0&k=20&c=UatGAKd00ewiLSNgy4UVnF03FnM6XRNL5nRM1BJ5K_0=",
          },
          {
            title: "Car Booking",
            price: "₹3000 / Day",
            image:"https://images.unsplash.com/photo-1555215695-3004980ad54e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGNhcnxlbnwwfHwwfHx8MA%3D%3D",
          },
          {
            title: "Food Booking",
            price: "₹1500 / Day",
            image:"https://plus.unsplash.com/premium_photo-1672242676665-39db88975682?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAxfHxmb29kfGVufDB8fDB8fHww",
          },
          {
            title: "Bike Booking",
            price: "₹800 / Day",
            image:"https://images.unsplash.com/photo-1558981806-ec527fa84c39",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="min-w-[200px] sm:min-w-[220px] md:min-w-[300px] bg-white rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition duration-300 shrink-0"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-48 w-full object-cover"
            />

            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{item.title}</h2>

              <p className="text-sm text-gray-500 mb-2">
                Available: 9:00 AM - 6:00 PM
              </p>

              <p className="text-lg font-semibold text-green-600 mb-3">
                {item.price}
              </p>

              <select className="w-full border rounded-lg p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-cyan-400">
                <option>Select Package</option>
                <option>Basic Package</option>
                <option>Premium Package</option>
              </select>

              <button className="w-full bg-cyan-500 text-white py-2 rounded-lg hover:bg-cyan-600 transition">
                Order Now
              </button>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Product;