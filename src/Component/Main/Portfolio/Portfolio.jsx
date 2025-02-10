import React from 'react'
import { motion } from 'framer-motion'

const Portfolio = () => {
  return (
    <div id='portfolio' className="min-h-screen bg-red-500">
        <motion.div 
            className="text-3xl font-bold sm:text-4xl font-raleway md:text-5xl xl:text-4xl xl2:font-semibold"
            initial={{ y: 9 }} 
            animate={{ y: -30 }} 
            transition={{ repeat: Infinity, repeatType: "reverse", duration: 2 }}
          >
            <h1>Portfolio</h1>
            <div className="h-0 mt-3 border-[2px] border-skyBlue w-11 ms2:w-16 md:w-20 md:border-[3px] md:mt-4 xl:w-16 xl:mt-3 xl2:border-[2px] xl2:w-14"></div>
          </motion.div>
    
    </div>
  )
}

export default Portfolio