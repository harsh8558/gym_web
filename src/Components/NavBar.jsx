import { useState , useEffect } from "react";
import {  NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
const NavBar = () =>{
  const [isOpen, setIsOpen] = useState(false);
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
    if(element.id==='home'){   
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
    }
  };
  useEffect(() => {
    AOS.init({
      duration: 800, 
      easing: 'ease-in-out', 
    });
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);
  return(<>
      <nav className={` fixed z-50  bg-transparent/90 top-0 w-full`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <img 
              src="https://res.cloudinary.com/dxmu1ohyk/image/upload/f_auto,q_auto/v1/gym_web/tg5jgaqux1zezwel89ha" 
              className={`w-auto h-16 p-2 md:p-0.5 ${isOpen?"md:hidden":""}`} 
              data-aos="fade-left"/>
            <div className="sm:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  )}
                </svg>
              </button>
            </div>
            <div className="hidden sm:flex space-x-10 ">
                <a href="#home" className="text-gray-300 hover:text-red-500 hover:underline hover:scale-105 transition duration-200">
                  Home
                </a>
                <a href="#about" className="text-gray-300 hover:text-red-500 hover:underline hover:scale-105 transition duration-200">
                  About
                </a>
                <a href="#services" className="text-gray-300 hover:text-red-500 hover:underline hover:scale-105 transition duration-200">
                  Services
                </a>
                <a href="#contact" className="text-gray-300 hover:text-red-500 hover:underline hover:scale-105 transition duration-200">
                  Contact
                </a>
            </div>
          </div>
        </div>
      {isOpen && (
        <div className="sm:hidden ">
          <div className=" flex flex-col justify-center items-center pt-2 pb-4 space-y-4 font-righteous h-3/4">
            <NavLink 
              to="/home"  
              onClick={(e) => { scrollToSection('home');}}
              className={({isActive})=>` ${isActive && window.location.pathname==='/home'  ?"text-red-500 animate-bounce":"text-white"} block  hover:text-red-500`}>
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              onClick={() => scrollToSection('about')}
              className={({isActive})=>` ${isActive && window.location.pathname==='/about'  ?"text-red-500 animate-bounce":"text-white"} block hover:text-red-500 hover:underline`}>
              About
            </NavLink>
            <NavLink 
              to="/facilities" 
              onClick={() => scrollToSection('facilities')}
              className={({isActive})=>` ${isActive && window.location.pathname==='/facilities'?"text-red-500 animate-bounce":"text-white"} block hover:text-red-500`}>
              Facilities
            </NavLink>
            <NavLink 
              to="/gallery" 
              onClick={() => scrollToSection('gallery')}
              className={({isActive})=>` ${isActive && window.location.pathname==='/gallery'?"text-red-500 animate-bounce":"text-white"} block hover:text-red-500`}>
              Gallery
            </NavLink>
            <NavLink 
              to="/plans" 
              className={({isActive})=>` ${isActive?"text-red-500":"text-green-500"} block hover:text-red-500`}>
              Membership Plans
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  </>)
}
export default NavBar