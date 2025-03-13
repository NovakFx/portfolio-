import React from 'react'
import { useState } from 'react';
import { motion } from 'framer-motion'
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import MapComponent from './MapComponent';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };


  return (
    <div id='contact' className="min-h-screen bg-white h-auto ">
      <div className=' ms:pr-3 ml-3 pt-16 md:pt-20 md:ml-16 xl:ml-5 xl2:ml-3 pr-4 md:mr-10 xl:mr-4'> 
          <motion.div 
           className="text-3xl font-bold sm:text-4xl font-raleway md:text-4xl xl:text-4xl xl2:font-semibold"
              initial={{ y: 13, opacity: 0 }} 
              whileInView={{ y: -18, opacity: 1 }}
              transition={{ type: "spring", bounce: 0.5, duration: 2 }}
          >
           <h1>Contact</h1>
           <div className="h-0 mt-3 border-[2px] border-skyBlue w-14 ms2:w-16 md:w-14 md:border-[3px] md:mt-4 xl:w-16 xl:mt-3 xl2:border-[2px] xl2:w-14"></div>
          </motion.div>
          <motion.div 
             className="mt-5 text-sm ms2:text-lg text-CharcoalGray md:text-lg md:mt-7 font-roboto md:mr-10 xl:mr-auto xl:text-base"
             initial={{opacity: 0, y:80}} 
             whileInView={{opacity:1,y:0}}
             transition={{duration: 1, ease: "easeOut"}}
             viewport={{ once: true }}
             >
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit.</p>
          </motion.div>

          <div className='grid grid-cols-2 '>

          <motion.div className='bg-white shadow-[0_4px_10px_rgba(0,0,0,0.2)] mx-auto mt-10 px-3 pb-10 pro:pb-8 md:px-7 xl:mt-8 xl:ml-0 xl:mr-6 h-auto'
          initial={{opacity: 0, y:80}}
          whileInView={{opacity:1,y:0}}
          transition={{duration: 1, ease: "easeOut",  delay: 0.5,}}
          viewport={{ once: true }} 
          >
            {/* first */}
            <motion.div 
               className='grid grid-cols-[3.5rem_auto] group ms1:grid-cols-[3.8rem_auto] pro:grid-cols-[4.6rem_auto] pt-8 my-4 md:mt-0'
               initial={{opacity: 0, y:80}}
               whileInView={{opacity:1,y:0}}
               transition={{duration: 1, ease: "easeOut",  delay: 0.5,}}
               viewport={{ once: true }} 
               >
                <div className='bg-LightBlue h-10 w-10 ms1:h-12 ms1:w-12 pro:w-16 pro:h-16 ms2:w-14 ms2:h-14 xl:w-[50px] xl:h-[50px] rounded-full flex  justify-center items-center group-hover:bg-skyBlue group-hover:border-skyBlue border-[1px]  transition-colors duration-500 ease-in-out'><CiLocationOn className=' text-skyBlue text-2xl ms2:text-3xl xl:text-[27px] group-hover:text-LightBlue transition-colors duration-500 ease-in-out'/></div> 
                 <div>
                   <h1 className='font-bold ms2:text-xl xl:text-lg'>Address</h1>
                   <p className=' text-xs ms1:py-2 ms1:text-sm ms2:text-base ms2:pr-4 xl:text-[15px]'>A108 Adam Street, New York, NY 535022</p>
                 </div>
               </motion.div>

            {/* Second */}
            <motion.div 
               className='grid grid-cols-[3.5rem_auto] group ms1:grid-cols-[3.8rem_auto] pro:grid-cols-[4.6rem_auto] pt-5 my-4 md:mt-0'
               initial={{opacity: 0, y:80}}
               whileInView={{opacity:1,y:0}}
               transition={{duration: 1, ease: "easeOut",  delay: 0.5,}}
               viewport={{ once: true }} 
               >
                <div className='bg-LightBlue h-10 w-10 ms1:h-12 ms1:w-12 pro:w-16 pro:h-16 ms2:w-14 ms2:h-14 xl:w-[50px] xl:h-[50px] rounded-full flex  justify-center items-center group-hover:bg-skyBlue group-hover:border-skyBlue border-[1px]  transition-colors duration-500 ease-in-out'><IoCallOutline className=' text-skyBlue text-2xl ms2:text-3xl xl:text-[27px] group-hover:text-LightBlue transition-colors duration-500 ease-in-out'/></div> 
                 <div>
                   <h1 className='font-bold ms2:text-xl xl:text-lg'>Call Us</h1>
                   <p className='text-xs ms1:py-2 ms1:text-sm ms2:text-base ms2:pr-4 xl:text-[15px]'>+1 5589 55488 55</p>
                 </div>
               </motion.div>

            {/* Third */}
            <motion.div 
               className='grid grid-cols-[3.5rem_auto] group ms1:grid-cols-[3.8rem_auto] pro:grid-cols-[4.6rem_auto] pt-5 my-4 md:mt-0'
               initial={{opacity: 0, y:80}}
               whileInView={{opacity:1,y:0}}
               transition={{duration: 1, ease: "easeOut",  delay: 0.5,}}
               viewport={{ once: true }} 
               >
                <div className='bg-LightBlue h-10 w-10 ms1:h-12 ms1:w-12 pro:w-16 pro:h-16 ms2:w-14 ms2:h-14 xl:w-[50px] xl:h-[50px] rounded-full flex  justify-center items-center group-hover:bg-skyBlue group-hover:border-skyBlue border-[1px]  transition-colors duration-500 ease-in-out'><TfiEmail className=' text-skyBlue text-2xl ms2:text-3xl xl:text-[27px] group-hover:text-LightBlue transition-colors duration-500 ease-in-out'/></div> 
                 <div>
                   <h1 className='font-bold ms2:text-xl xl:text-lg'>Email Us</h1>
                   <p className='text-xs ms1:py-2 ms1:text-sm ms2:text-base ms2:pr-4 xl:text-[15px]'>info@example.com</p>
                 </div>
               </motion.div>

               <motion.div
               initial={{opacity: 0, y:80}}
               whileInView={{opacity:1,y:0}}
               transition={{duration: 1, ease: "easeOut"}}
               viewport={{ once: true }}
               >
                <MapComponent />
               </motion.div>

          </motion.div>

    <motion.div className='bg-white shadow-[0_4px_10px_rgba(0,0,0,0.2)] mx-auto mt-8 pt-4 px-3 pb-10 ms:pb-6 ms:px-4 pro:pb-8 md:px-7 xl2:ml-3 xl2:mr-3 h-auto'
    initial={{opacity: 0, y:80}}
    whileInView={{opacity:1,y:0}}
    transition={{duration: 1, ease: "easeOut",  delay: 0.5,}}
    viewport={{ once: true }} 
    >

      <motion.form onSubmit={handleSubmit} 
         className="space-y-5"
         initial={{opacity: 0, y:80}}
         whileInView={{opacity:1,y:0}}
         transition={{duration: 1, ease: "easeOut"}}
         viewport={{ once: true }}
         >
     <div className='md:grid md:grid-cols-2 md:gap-5'>
      {/* First */}
      <div>
        <h1>Your Name</h1>
        <input 
          type="text" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          placeholder="Enter your name" 
          className="border-[2px] border-gray-300 w-full mt-3 h-10 sm:h-12 px-2 rounded-md" 
          required
        />
      </div>

      {/* Second */}
      <div>
        <h1>Your Email</h1>
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          placeholder="Enter your email" 
          className="border-[2px] border-gray-300 w-full mt-3 h-10 sm:h-12 px-2 rounded-md" 
          required
        />
      </div>
      
      </div>

      {/* Third */}
      <div>
        <h1>Subject</h1>
        <input 
          type="text" 
          name="subject" 
          value={formData.subject} 
          onChange={handleChange} 
          placeholder="Enter subject" 
          className="border-[2px] border-gray-300 w-full mt-3 h-10 sm:h-12 px-2 rounded-md" 
          required
        />
      </div>

      {/* Fourth */}
      <div>
        <h1>Message</h1>
        <textarea 
          name="message" 
          value={formData.message} 
          onChange={handleChange} 
          placeholder="Enter your message" 
          className="border-[2px] border-gray-300 w-full mt-3 h-40 xl:h-72 px-2 py-2 rounded-md" 
          required
        />
      </div>

      {/* Submit Button */}
      <div className="flex justify-center items-center">
        <button type="submit" className="px-3 w-[130px] md:w-[150px] hover:bg-blue-400 transition-colors duration-500 ease-in-out mt-4 text-sm md1:text-base h-10 text-white rounded-full bg-skyBlue">
        Send Message 
        </button>
      </div>
    </motion.form>


          </motion.div>

      </div>

      </div>
      <div className='bg-creamGray mt-10 text-center h-full pt-5 pb-7 pro:px-7 pro:pt-7 pro:pb-9 ms2:px-10 border-t-[1px] sm:px-10 sm:pt-10 sm:pb-14 md:px-56 md1:mt-16 md1:px-60 md2:px-72 xl2:px-[27rem] border-gray-300'>
         <h1 className='text-base pro:text-sm sm:text-base'>
           © Copyright <span className=' font-bold'>iPortfolio</span> All Rights Reserved Designed by{' '}
           <a href="https://bootstrapmade.com/" target="_blank" rel="noopener noreferrer" className='text-skyBlue underline-none'>
             BootstrapMade
             
           </a>
           
         </h1>
      </div>

    </div>
  )
}

export default Contact