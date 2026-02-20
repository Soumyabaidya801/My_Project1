import Navbar from './Navbar/Navbar';
import Herotext from './Herotext';
import Footer from './Footer';
import SignUp from './Navbar/SignUp';
import { Route, Routes } from 'react-router-dom';
import Home from './Navbar/Home';
import About from './Navbar/About';
import Contact from './Navbar/Contact'
import Product from './Product';
const Section1 = () => {
  return (
     <div>
        <Navbar/>
        <Routes>
          <Route path='/'element={ <Home/>}/>
          <Route path='/About' element={ <About/> }/>
          <Route path='/Contact'element={ <Contact/> }/>
          <Route path='/SignUp'element={ <SignUp/> }/>
        </Routes>
        <Herotext/>
        <Product/>
        <Footer/>
     </div>
        
    
  )
}
export default Section1 