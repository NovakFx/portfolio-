import React from 'react';
import { Link, scrollSpy } from "react-scroll";
import { useState, useEffect } from 'react';
import { IoCloseOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import Hamburger from '../Hamburger/Hamburger';
import { PiXLogoBold } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoHomeOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { HiOutlinePhoto } from "react-icons/hi2";
import { BiServer } from "react-icons/bi";
import { CgMail } from "react-icons/cg";
import { FaRegFileAlt } from "react-icons/fa";
import { GiExtractionOrb } from "react-icons/gi";


const Sidebar = () => {
  const [Open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!Open);
  };


  const SocialIcon = ({ Icon }) => (
    <div className="w-10 h-10 flex justify-center items-center text-center text-white px-[6px] py-[6px] mt-2 rounded-full hover:bg-skyBlue bg-CharcoalGray">
      <Icon className="text-2xl" />
    </div>
  );

  const [selected, setSelected] = useState(0);

  const menuItems = [
    { Icon: <IoHomeOutline />, label: "Home", path: "home" },
    { Icon: <IoPersonOutline />, label: "About", path: "about" },
    { Icon: <IoPersonOutline className='hidden ' />, label: "", path: "counter", },
    { Icon: <IoPersonOutline className='hidden ' />, label: "", path: "skills", },
    { Icon: <FaRegFileAlt />, label: "Resume", path: "resume" },
    { Icon: <HiOutlinePhoto />, label: "Portfolio", path: "portfolio" },
    { Icon: <BiServer />, label: "Services", path: "services" },
    { Icon: <BiServer className='hidden '/>, label: "", path: "testimonial" },
    { Icon: <CgMail />, label: "Contact", path: "contact" },
    { Icon: <GiExtractionOrb />, label: "Extra", path: "extra" },
  ];

  
  
  useEffect(() => {
    scrollSpy.update();
  }, []);

  return (
    <div className="xl:bg-darkTheme xl:w-[18rem] xl:h-screen xl:fixed xl:top-0 xl:left-0">
      <div 
      className="xl:hidden z-50 fixed top-4 right-4 transition-transform duration-500 ease-in-out"
      onClick={handleOpen}
      >
         {Open ? (
           <IoCloseOutline className="w-10 h-10 p-2 rounded-full bg-skyBlue text-white shadow-lg hover:bg-sky-700 transition-transform duration-300 transform hover:scale-110" />
         ) : (
           <RxHamburgerMenu className="w-10 h-10 p-2 rounded-full bg-skyBlue text-white shadow-lg hover:bg-sky-700 transition-transform duration-500 ease-in-out transform hover:scale-110" />
         )}
      </div>



        <div>
        </div>

      <div className='hidden xl:block'>

      <div className="justify-items-center items-center hidden  xl:block">
        <div className="mt-7 w-[125px] h-[125px] border-[7px] border-customgray rounded-full justify-items-center items-center">
          <img src="Images/Tech.png" alt="" className="w-[90px] h-[90px] pt-2" />
        </div>

        <div className="text-white text-center mt-4 font-raleway text-2xl font-bold">
          <h1>Ichigo Kurosaki</h1>
        </div>

        <div className="inline-flex gap-3 justify-center items-center my-0 mt-2">
          <SocialIcon Icon={PiXLogoBold} />
          <SocialIcon Icon={TiSocialFacebookCircular} />
          <SocialIcon Icon={FaInstagram} />
          <SocialIcon Icon={FaSkype} />
          <SocialIcon Icon={FaLinkedinIn} />
        </div>
      </div>

      <div>
        <nav className="text-white text-center mt-8 font-raleway text-lg ml-5">
          {menuItems
          .map((item, index) => (
            
            <Link
              to={item.path}
              key={index}
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              style={{ textDecoration: 'none' }}
              onClick={() => setSelected(index)
              }
              onSetActive={() => setSelected(index)}  
            >
              <div
                className={`menuItems ${
                  selected === index
                    ? 'active:text-skyBlue'
                    : 'text-gray-500 hover:text-white'
                } group flex items-center gap-2 py-4 text-xl transition-transform duration-500 ease-in-out cursor-pointer ${
                  item.path === "counter" || item.path === 'skills' || item.path === 'testimonial' ? "opacity-0 pointer-events-none hidden" : ""
                }`}
                
              >
                <div
                  className={`icon group-hover:text-skyBlue ${
                    selected === index ? 'text-skyBlue' : 'text-gray-500'
                  }`}
                >
                  {item.Icon}
                </div>
                <span
                  className={`group-hover:text-white ${
                    selected === index ? 'text-white' : 'text-gray-500'
                  }`}
                >
                  {item.label}
                </span>
              </div>
            </Link>
          ))}
        </nav>
      </div>
      </div>

      {Open && <Hamburger setOpen={setOpen} />}
    </div>
  );
};

export default Sidebar;