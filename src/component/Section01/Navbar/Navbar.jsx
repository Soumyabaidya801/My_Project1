import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Fixed Glass Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-xl border-b border-white/20 shadow-lg">
        
        {/* Navbar Content */}
        <div className="flex items-center justify-between px-4 py-3 md:px-8 md:py-4 text-white">
          
          {/* Logo */}
          <div className="flex items-center gap-2 font-semibold text-lg md:text-xl">
            <img
              className="rounded-full h-10 w-10 object-cover"
              src="https://images.unsplash.com/photo-1747447597297-0716bbd5b049?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=464"
              alt="logo"
            />
            <h3>Sundarban Echo Spot</h3>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 font-mono text-base md:text-lg">
            <Link to="/">Home</Link>
            <Link to="/Contact">Contact</Link>
            <Link to="/About">About</Link>
            <Link to="/SignUp">SignUp/Login</Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex flex-col gap-1"
            >
              <span className="w-6 h-0.5 bg-white transition-all"></span>
              <span className="w-6 h-0.5 bg-white transition-all"></span>
              <span className="w-6 h-0.5 bg-white transition-all"></span>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown (Proper Positioned) */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-white/10 backdrop-blur-xl border-b border-white/20 shadow-lg flex flex-col items-center gap-6 py-6 text-white font-mono md:hidden transition-all duration-300">
            
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/Contact" onClick={() => setIsOpen(false)}>Contact</Link>
            <Link to="/About" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/SignUp" onClick={() => setIsOpen(false)}>SignUp/Login</Link>
          
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;