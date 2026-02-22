
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6 px-6 md:px-16">
      
      {/* Top Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        
        {/* About Us */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">About Us</h2>
          <p className="text-sm leading-6">
            We build modern, scalable and user-friendly web applications.
            Our goal is to deliver high-quality digital solutions with
            performance and security.
          </p>
        </div>

        {/* Products */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Products</h2>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white hover:translate-x-2 transition-all duration-300 cursor-pointer">
              SaaS Platform
            </li>
            <li className="hover:text-white hover:translate-x-2 transition-all duration-300 cursor-pointer">
              E-Commerce System
            </li>
            <li className="hover:text-white hover:translate-x-2 transition-all duration-300 cursor-pointer">
              Portfolio Builder
            </li>
            <li className="hover:text-white hover:translate-x-2 transition-all duration-300 cursor-pointer">
              CRM Dashboard
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Contact Us</h2>
           <a
        href="mailto:support@yourwebsite.com"
        className="flex items-center gap-3 hover:text-blue-400 transition duration-300"
      >
        <img
          src='https://img.icons8.com/?size=50&id=Ww1lcGqgduif&format=gif&color=f7f7f7'
          alt="Company Logo"
          className="w-8 h-8 object-contain rounded-4xl text-sm"
        />
        support@yourwebsite.com
      </a>
          <p className="text-sm mb-4">Phone: +91 98765 43210</p>

          {/* Social Media Icons */}
          <div className="flex gap-4 mt-3">
            <a
              href="#"
              className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition duration-300"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="bg-gray-800 p-3 rounded-full hover:bg-pink-500 transition duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="bg-gray-800 p-3 rounded-full hover:bg-blue-500 transition duration-300"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="bg-gray-800 p-3 rounded-full hover:bg-gray-600 transition duration-300"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-8"></div>

      {/* Bottom Section */}
      <div className="text-center text-sm text-gray-500">
        © {new Date().getFullYear()} YourCompany. All rights reserved.
      </div>
    </footer>
  );
}