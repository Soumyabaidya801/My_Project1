import React from 'react'
import OnClick from './OnClick';
import {Link} from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
      <div className='h-15 bg-white md:text-xl lg:text-2xl rounded-4xl flex items-center p-4'>
          <div className='h-15 w-3/4 font-medium text-black flex gap-4 items-center'>
         <img className='rounded-full h-10 w-10' src="https://images.unsplash.com/photo-1747447597297-0716bbd5b049?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=464" alt="" />
          Sundarban Echo Spot
        </div>
          <div className=' flex justify-between p-2 hover:text-blue-700'><Link to='/'>Home</Link></div>             
          <div className=' flex justify-between p-2 hover:text-blue-700'><Link to='/Contact'>Contact</Link></div>
          <div className=' flex justify-between p-2 hover:text-blue-700'><Link to='/About'>About</Link></div>
          <div><Link to='/Register'><OnClick/></Link></div>
       </div>
    </div> 
  )
}

export default Navbar;