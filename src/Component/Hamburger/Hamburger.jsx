import React, { useState, useEffect } from "react";
import { BiServer } from "react-icons/bi";
import { CgMail } from "react-icons/cg";
import { FaInstagram, FaRegFileAlt, FaSkype } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { GiExtractionOrb } from "react-icons/gi";
import { HiOutlinePhoto } from "react-icons/hi2";
import { IoHomeOutline, IoPersonOutline } from "react-icons/io5";
import { PiXLogoBold } from "react-icons/pi";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { Link as ScrollLink, scrollSpy } from "react-scroll";

const Hamburger = ({ setOpen }) => {
  const SocialIcon = ({ Icon }) => (
    <div className="w-8 h-8 flex justify-center items-center text-center text-white px-[7px] py-[7px] mt-2 rounded-full hover:bg-skyBlue bg-CharcoalGray ms1:w-9 ms1:h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 ">
      <Icon className="text-xl md:text-3xl md1:text-4" />
    </div>
  );


  const [selected, setSelected] = useState(0);

  const menuItems = [
    { Icon: <IoHomeOutline />, label: "Home", path: "home" },   
    { Icon: <IoPersonOutline />, label: "About", path: "about" },
    { Icon: <IoPersonOutline className='hidden ' />, label: "", path: "counter", },
    { Icon: <FaRegFileAlt />, label: "Resume", path: "resume" },
    { Icon: <HiOutlinePhoto />, label: "Portfolio", path: "portfolio" },
    { Icon: <BiServer />, label: "Services", path: "services" },
    { Icon: <CgMail />, label: "Contact", path: "contact" },
    { Icon: <GiExtractionOrb />, label: "Extra", path: "extra" },
  ];

  useEffect(() => {
    scrollSpy.update();
  }, []);


  useEffect(() => {
    const handleResize = () => scrollSpy.update();
    window.addEventListener("resize", handleResize);
  
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  

  return (
    <div className="bg-darkTheme ms:w-[16.5rem] ms1:w-[17rem] z-50  h-screen fixed top-0 left-0 overflow-y-scroll  sm:w-[19.7rem] md:w-[23rem] md1:w-[25rem] transition-transform duration-500 ease-in-out">
      <div className="justify-items-center items-center">
        <div className="mt-4 ms2:mt-6 w-[120px] h-[120px] sm:w-[127px] sm:h-[127px] md:w-[130px] md:h-[130px] border-[7px]  md:mt-8 md:border-[8px]  border-customgray rounded-full justify-items-center items-center">
          <img
            src="Images/Tech.png"
            alt=""
            className="w-[78px] h-[90px] pt-2 sm:w-[80px] sm:h-[93px] md:w-[80px] md:h-[95px]"
          />
        </div>

        <div className="text-white text-center mt-4 font-raleway text-2xl font-semibold sm:mt-5 sm:text-[1.7rem] md:text-[2rem] md:mt-5 md1:text-[2.2rem] md1:mt-6">
          <h1>Ichigo Kurosaki</h1>                     
        </div>

        <div className="inline-flex gap-4 my-0 mt-2 justify-center items-center ms1:gap-3 sm:mt-3 md:mt-5">
          <SocialIcon Icon={PiXLogoBold} />
          <SocialIcon Icon={TiSocialFacebookCircular} />
          <SocialIcon Icon={FaInstagram} />
          <SocialIcon Icon={FaSkype} />
          <SocialIcon Icon={FaLinkedinIn} />
        </div>
      </div>

      <div>
        <nav className="text-white text-center mt-8 font-raleway ml-5 md:ml-6 md1:ml-9 md2:ml-12">
          {menuItems.map((item, index) => (
            <ScrollLink
              to={item.path}
              key={index}
              spy={true}
              smooth={true}
              offset={7}
              duration={500}
              style={{ textDecoration: "none" }}
              onClick={() => {
                setSelected(index); 
                setTimeout(() => setOpen(false), 500); 
              }}
              onSetActive={() => setSelected(index)} 
            >
              <div
                className={`menuItems ${
                  selected === index 
                    ? "active:text-skyBlue text-xl sm:text-[1.6rem] md:text-[1.8rem] "
                    : "text-gray-500 hover:text-white"
                } group flex items-center gap-2 py-3 text-lg ms1:text-xl ms1:py-6 ms1:pt-2 sm:text-[1.5rem] sm:py-6 sm:pt-4 md:text-[1.7rem] md:py-7 md1:text-[1.9rem] md1:py-8 md2:py-7 ${item.path === 'counter' || item.path === 'skills' ? 'hidden' : '' } `}
              >
                <div
                  className={`icon group-hover:text-skyBlue ${
                    selected === index
                      ? "text-skyBlue text-xl md:text-[1.8rem]"
                      : "text-gray-500"
                  }`}
                >
                  {item.Icon}
                </div>
                <span
                  className={`group-hover:text-white ${
                    selected === index
                      ? "text-white sm:text-[1.6rem] md:text-[1.8rem] "
                      : "text-gray-500"
                  }`}
                >
                  {item.label}
                </span>
              </div>
            </ScrollLink>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Hamburger;
