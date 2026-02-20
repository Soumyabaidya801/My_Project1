import {Link} from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='bg-white/60 md:text-xl lg:text-2xl flex items-center p-2 w-full'>
      <div className='flex justify-start items-center gap-2 font-medium w-1/3'>
        <img className='rounded-full h-10 w-10' 
         src="https://images.unsplash.com/photo-1747447597297-0716bbd5b049?ixlib=rb-
         4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=
         crop&q=80&w=464" alt="" />
          <h3>Sundarban Echo Spot</h3>
      </div>
      <div className='w-2/3 flex justify-end gap-8 font-mono'>
        <Link to='/'>Home</Link>             
        <Link to='/Contact'>Contact</Link>
        <Link to='/About'>About</Link>
        <Link to='/SignUp'>SignUp/Login</Link>
      </div>
    </div>  
  )
}

export default Navbar;