
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
            We are a modern travel technology platform dedicated to simplifying trip planning and booking. Our Travel & Booking Management System allows users to explore destinations, book packages, and manage reservations easily and securely.
          </p>
        </div>

        {/* Products */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Products</h2>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white hover:translate-x-2 transition-all duration-300 cursor-pointer">
              🧳 Smart Travel Booking
            </li>
            <li className="hover:text-white hover:translate-x-2 transition-all duration-300 cursor-pointer">
             👤 Secure User Authentication
            </li>
            <li className="hover:text-white hover:translate-x-2 transition-all duration-300 cursor-pointer">
              📅 Booking Management
            </li>
            <li className="hover:text-white hover:translate-x-2 transition-all duration-300 cursor-pointer">
              📱 Responsive Design
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
          src='https://images.openai.com/static-rsc-3/v1jNhrLF3-Cxdv6u4ZiyWljhw7ZW4BrfypE1Kr_Jf3sYfGoLA3WETCJWZnJ8UvFYk90DLou4mO0JWf7JZ70lgNpYbY3BNPF0h1UyNce9Bfw?purpose=fullsize&v=1'
          alt="Company Logo"
          className="w-5 h-5 object-contain rounded-4xl text-sm"
        />
        baidyasoumya8@gmail.com
      </a>
      <a
        href="tel:+919876543210"
        className="flex items-center gap-3 hover:text-blue-400 transition duration-300"
      >
      📞 <span>+91 1400-0000-0002</span>
      </a>

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