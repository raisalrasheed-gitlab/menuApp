import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Icons for mobile menu
import logo from '../../assets/LogoNav.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black h-[100px] text-white shadow-lg flex md:items-end items-center relative oswald">
      <div className="container mx-auto flex md:justify-around justify-center">
        {/* Logo */}
        <div className="text-3xl font-bold -mb-10 z-1 md:flex gap-2 items-center hidden ">
          <img src={logo}></img>
          <h2 className="text-blue-500 text-[30px] ">
            DEEP<span className="text-white">NET</span>
            <span className="text-gray-500 block">SOFT</span>
          </h2>
        </div>
        <div className="absolute -bottom-3 md:hidden">
          <img src={logo}></img>
        </div>
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="#" className="hover:text-gray-300">
              HOME
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              MENU
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              MAKE A RESERVATION
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              CONTACT US
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} mt-4`}>
        <ul className="flex flex-col space-y-3 text-center bg-blue-700 p-4 rounded-lg">
          <li>
            <a href="#" className="hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
