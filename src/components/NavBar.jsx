import React, {useState} from 'react';
import  {FaGithub, FaLinkedin, FaInstagram} from 'react-icons/fa';
import Logo from '../assets/logo.png';
import {Link} from 'react-scroll'

const NavBar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-20 flex justify-between items-center px-4 bg-[#0b0c0c] text-gray-300'>
    <img src={Logo} alt="Logo Image" style={{width: '50px'}}/>
        
        
        {/* menu */}
            <ul className='hidden md:flex'>
                <li>
                    <Link to="home" smooth={true}  duration={500} 
        >           Home
                    </Link>
                </li>
                <li>
                    <Link to="about" smooth={true}  duration={500} 
        >           About
                    </Link>
                </li>
                <li>
                    <Link to="skills" smooth={true}  duration={500} 
        >           Skills
                    </Link>
                </li>
                <li>
                    <Link to="photos" smooth={true}  duration={500} 
        >           Photos
                    </Link>
                </li>
            </ul>

        {/* Social icons */}
        <div className='hidden lg:flex fixed flex-column top-[35%] left-0'>
      <ul>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a className='flex justify-between items-center w-full text-gray-300'
            href="https://www.linkedin.com/in/nehab4/">
             LinkedIn <FaLinkedin size={30}/>
            </a>
        </li>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-black-800'>
            <a className='flex justify-between items-center w-full text-gray-300'
            href="https://github.com/nehab444">
             Github <FaGithub size={30}/>
            </a>
        </li>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-pink-400'>
            <a className='flex justify-between items-center w-full text-gray-300'
            href="https://instagram.com/n.e.h.a._b/">
             Email <FaInstagram size={30}/>
            </a>
        </li>
      </ul>
        </div>
    </div>
  );
};

export default NavBar