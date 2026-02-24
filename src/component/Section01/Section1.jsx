import Navbar from './Navbar/Navbar';
import Footer from './Footer';
import SignUp from './Navbar/SignUp';
import { Route, Routes } from 'react-router-dom';
import Home from './Navbar/Home';
import About from './Navbar/About';
import Contact from './Navbar/Contact';

const Section1 = () => {
  return (
    <>
      <Navbar />

      {/* Add spacing for fixed navbar */}
      <div className="pt-20 min-h-screen flex flex-col">

        <div className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/SignUp" element={<SignUp />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Section1;