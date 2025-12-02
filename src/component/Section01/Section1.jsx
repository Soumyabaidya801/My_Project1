import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Home from './Navbar/Home';
import About from './Navbar/About';
import Contect from './Navbar/Contact';
import OnClick from './Navbar/OnClick';
const Section1 = () => {
  return (
    <div className='min-h-screen bg-linear-to-r from-blue-950 via-purple-800 to-pink-950 p-10'> 
    <Navbar/>
    <Routes>
        <Route path='/'element={ <Home/>}/>
        <Route path='/About' element={ <About/> }/>
        <Route path='/Contact'element={ <Contect/> }/>
        <Route path='/Register'element={ <OnClick/>}/>
      </Routes>    
        </div> 
  )
}

export default Section1