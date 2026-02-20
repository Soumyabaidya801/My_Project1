import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    const [isLogin, setIsLogin] = useState(true)
    const navigate = useNavigate();

  return (
    <div className='w-full h-screen place-items-center p-5'>
       <div className='relative w-[430px] bg-blue-950 p-8 rounded-2xl shadow-lg'>
             {/*Close button*/}
                <button onClick={() =>navigate("/")} className='absolute top-4 right-4 text-sm font-mono bg-white rounded-full px-2 hover:scale-110 transition'>
                Close</button>
             
             {/*Header titel*/}
             <div className='flex justify-center mb-4'>
                <h2 className='text-3xl font-semibold text-center text-white'>{isLogin ? "Login" : "SignUp"}</h2>
             </div>


             {/*Tab Control*/}
             <div className='relative flex h-12 mb-6 border border-gray-300 rounded-full overflow-hidden'>
                <button onClick={()=>setIsLogin(true)} className={`w-1/2 text-lg hover:scale-110 font-medium transition-all z-10 ${isLogin ? "text-white" : "text-black"}`}
                >Login</button>
                <button onClick={()=>setIsLogin(false)} className={`w-1/2 text-lg hover:scale-110 font-medium transition-all z-10 ${!isLogin ? "text-white" : "text-black"}`}
                >Sign Up</button>
              <div className={`absolute top-0 h-full w-1/2 rounded-full bg-linear-to-r from-blue-700 via-cyan-600 to-cyan-300 ${isLogin ? "left-0" : "left-1/2"}`}>
              </div>
              </div>


               {/*Form Section*/}
              <form className='space-y-4'>
               {!isLogin &&(
               <input type="text" placeholder='Name' required className='w-full p-3 border-b-2 hover:scale-110 border-gray-300 outline-none focus:bg-white focus:rounded-full placeholder-gray-600'/>
               )}


               {/*Shared field*/}
               <input type="email" placeholder='Email' required className='w-full p-3 border-b-2 hover:scale-110 border-gray-300 outline-none focus:bg-white focus:rounded-full placeholder-gray-600'/>
               <input type="password" placeholder='password' required className='w-full p-3 border-b-2 hover:scale-110 border-gray-300 outline-none focus:bg-white focus:rounded-full placeholder-gray-600'/>
               
               
               {/*Signup Field*/}
               {!isLogin &&(
               <input type="password" placeholder='Conform password' required className='w-full p-3 border-b-2 hover:scale-110 border-gray-300 outline-none focus:bg-white focus:rounded-full placeholder-gray-600'/>
               )}

                
               {/*Forget password*/}
                {isLogin &&(
                <div className='text-right'>
                    <p className='text-cyan-600 hover:underline'>Forget password</p>
                </div>
               )}


               {/*Shared button*/}
               <button className='w-full p-3 bg-linear-to-r from-blue-700 via-cyan-600 to-cyan-200 text-white rounded-full text-lg font-medium hover:scale-105 hover:opacity-90 transition'>
                   {isLogin ? "Login" : "Sign Up"}
               </button>


               {/*Switch link*/}
               <p className='text-center text-white '>{isLogin ? "New User ?" :"already have an account ?"}
                  <a href="#" onClick={(e)=>setIsLogin(!isLogin)} className='text-cyan-600 hover:underline'>{isLogin ? " Sign Up" :" Login"}</a>
               </p>
              </form>
        </div>
    </div>
  
  )
}

export default SignUp