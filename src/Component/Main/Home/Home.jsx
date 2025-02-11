import React from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'

const Home = () => {
  
  return (
    <div id="home" className=" bg-cover  min-h-screen ms:bg-[50%] ms1:bg-[60%] md:bg-[68%] xl:bg-[100%] min-w-fit  bg-no-repeat  ms:bg-fixed xl:bg-scroll " 
    style={{backgroundImage: "url('/Images/background.avif')"}}
    >
       <motion.div className=' ms:text-[1.8rem] ms1:text-[2rem] ms2:text-[2.3rem] md:text-[2.8rem] md1:text-[2.9rem] md1:pl-12 md1:pt-[18rem]  xl:text-[3.5rem] font-raleway font-bold text-white ms:pt-[10rem] ms:pl-5 ms1:pt-[13rem] ms1:pl-7 ms2:pl-5 md:pt-[16rem] md:pl-10 xl:pt-[15rem] xl:pl-20'
        initial={{ y: 300, opacity: 100 }}
        animate={{y: 0, opacity: 1}}
        transition={{ duration: 3, ease: "easeOut" }}
      
       >
          <h1>Alex Smith</h1>
       </motion.div>

       <motion.div className=" ms:pl-5 xl:pl-20 ms:text-[1rem] ms1:text-[1.2rem] ms1:pl-7 ms2:text-[1.4rem] ms2:pl-5 md:text-[1.6rem] md:font-medium md:pl-10 md1:text-[1.8rem] md1:pl-12 font-normal text-white xl:text-[1.6rem] font-raleway"
         initial={{ y: 300, opacity: 100 }}
        animate={{y: 0, opacity: 1}}
        transition={{ duration: 3, ease: "easeOut" }}
       >
      <span>I'm a </span>
      <TypeAnimation
        sequence={[
          "Web Developer", 2000,
          "Designer", 2000,
          "Freelancer", 2000,
        ]}
        wrapper="span"
        speed={50}
        className=' xl:underline-offset-[0.6rem] md:underline-offset-[0.5rem] ms:underline-offset-[0.4rem]'
        style={{
          display: 'inline-block',
          textDecorationLine: 'underline',
          textDecorationColor: 'skyBlue',
        }}
        repeat={Infinity}
      />
    </motion.div>

    </div>
  )
}

export default Home