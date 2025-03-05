import React from 'react'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { IoMdArrowUp } from "react-icons/io";

const ArrowUp = () => {
   const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const toggleVisibility = () => {
        if (window.scrollY > 200) {
          setIsVisible(true); 
        } else {
          setIsVisible(false);
        }
      };
  
      window.addEventListener("scroll", toggleVisibility);
  
      return () => {
        window.removeEventListener("scroll", toggleVisibility); 
      };
    }, []);


  return (
    <div>
      {isVisible && (
        <motion.div
          className=" p-3 rounded-full cursor-pointer shadow-lg hover:bg-sky-700 transition"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          // transition={{duration: 3, ease:'easeInOut'}}
          
        >
          <IoMdArrowUp className='fixed bottom-8 z-50 mx-[17rem] ms1:mx-[19rem] ms1:w-9 ms1:h-9 pro:mx-[19.7rem] ms2:mx-[20.5rem] ms2:mt-[30rem] sm:mx-[21.5rem] md:mx-[42.5rem] md:w-12 md:h-12 md1:mx-[45rem] md2:mx-[49rem] xl:mx-[89rem] my-5  w-8 h-8 text-white py-2 px-2 text-xs transform transition-transform duration-300 rounded-full bg-skyBlue' />
        </motion.div>
      )}
    </div>
  )
}

export default ArrowUp