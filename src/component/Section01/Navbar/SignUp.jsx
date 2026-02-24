import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const SignUp = () => {
    const [isLogin, setIsLogin] = useState(true)
    const navigate = useNavigate();

const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword:""
  });

  // handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
      });
      };

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
     //check password match or not
     if (!isLogin && formData.password !== formData.confirmPassword) {
      alert("Password does not match");
       return;
         }

     try {
         if (isLogin) {
         await axios.post("http://192.168.10.12:8080/api/users/login", {
         email: formData.email,
         password: formData.password
         });
         alert("Login Successful");
         } else {
         await axios.post("http://192.168.10.12:8080/api/users/register", {
         name: formData.name,
         email: formData.email,
         password: formData.password
         });
         alert("Registration Successful");
         }
         } catch (error) {
            if (error.response && error.response.data) {
            alert(error.response.data);
            } else {
            alert("Server error");
            }
    }
  };

          return (
             <div className='w-full min-h-screen grid place-items-center px-4 sm:px-6 lg:px-8'>
             <div className='relative w-full max-w-md sm:max-w-lg bg-blue-950 p-6 sm:p-8 rounded-2xl shadow-lg'>
             
             {/*Close button*/}
                <button onClick={() =>navigate("/")} className='absolute top-4 right-4 text-sm font-mono bg-white rounded-full px-2 hover:scale-110 transition'>
                Close</button>
             
             {/*Header titel*/}
             <div className='flex justify-center mb-4'>
                <h2 className='text-2xl sm:text-3xl font-semibold text-center text-white'>{isLogin ? "Login" : "SignUp"}</h2>
             </div>


             {/*Tab Control*/}
             <div className='relative flex h-12 mb-6 border border-gray-300 rounded-full overflow-hidden'>
                <button onClick={()=>setIsLogin(true)} className={`w-1/2 text-base sm:text-lg font-medium transition-all z-10 ${isLogin ? "text-white" : "text-black"}`}
                >Login</button>
                <button onClick={()=>setIsLogin(false)} className={`w-1/2 text-base sm:text-lg font-medium transition-all z-10 ${!isLogin ? "text-white" : "text-black"}`}
                >Sign Up</button>
              <div className={`absolute top-0 h-full w-1/2 rounded-full bg-linear-to-r from-blue-700 via-cyan-600 to-cyan-300 ${isLogin ? "left-0" : "left-1/2"}`}>
              </div>
              </div>


               {/*Form Section*/}
              <form onSubmit={handleSubmit}
                    className='space-y-4'>

                   {!isLogin &&(
                   <input 
                         type="text"
                         name="name"
                         value={formData.name}
                         placeholder="Name"
                         onChange={handleChange}
                         required
                         className='w-full p-2.5 sm:p-3 text-sm sm:text-base border-b-2 border-gray-300 outline-none focus:bg-white focus:rounded-xl placeholder-gray-600 transition'/>
                   )}


               {/*Shared field*/}
               <input type="email"
                      name='email'
                      value={formData.email} 
                      placeholder='Email' required
                      onChange={handleChange}
                      className='w-full p-2.5 sm:p-3 text-sm sm:text-base border-b-2 border-gray-300 outline-none focus:bg-white focus:rounded-xl placeholder-gray-600 transition'/>

               <input type="password"
                      name="password"
                      value={formData.password}
                      placeholder="Password"
                      onChange={handleChange}
                      required 
                      className='w-full p-2.5 sm:p-3 text-sm sm:text-base border-b-2 border-gray-300 outline-none focus:bg-white focus:rounded-xl placeholder-gray-600 transition'/>
               
               
               {/*Signup Field*/}
               {!isLogin &&(
               <input type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      placeholder="Confirm Password"
                      onChange={handleChange}
                      required
                      className='w-full p-2.5 sm:p-3 text-sm sm:text-base border-b-2 border-gray-300 outline-none focus:bg-white focus:rounded-xl placeholder-gray-600 transition'/>
               )}

                
               {/*Forget password*/}
                {isLogin &&(
                <div className='text-right'>
                    <p className='text-cyan-600 hover:underline'>Forget password</p>
                </div>
               )}


               {/*Shared button*/}
               <button className='w-full p-2.5 sm:p-3 text-sm sm:text-lg bg-linear-to-r from-blue-700 via-cyan-600 to-cyan-200 text-white rounded-full font-medium hover:opacity-90 transition'>
                   {isLogin ? "Login" : "Sign Up"}
               </button>


               {/*Switch link*/}
               <p className='text-center text-white '>{isLogin ? "New User ?" :"already have an account ?"}
                  <a href="#" onClick={(e)=>{e.preventDefault();setIsLogin(!isLogin);}} className='text-cyan-600 hover:underline'>{isLogin ? " Sign Up" :" Login"}</a>
               </p>
              </form>
        </div>
    </div>
  
  )
}

export default SignUp