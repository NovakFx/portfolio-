import React from 'react'
import { motion } from 'framer-motion'
import Tabs from './Tabs'

const Portfolio = () => {
  return (
    <div id='portfolio' className="min-h-screen bg-creamGray ">
        <div  className='ml-3 pt-16 md:pt-20 md:ml-16 xl:ml-5 xl2:ml-3 pr-4 md:mr-10 xl:mr-4'>
          <motion.div 
            className="text-3xl font-bold sm:text-4xl font-raleway md:text-4xl xl:text-4xl xl2:font-semibold"
            initial={{ y: 13, opacity: 0 }} 
            whileInView={{ y: -18, opacity: 1 }}
            transition={{ type: "spring", bounce: 0.5, duration: 2 }}
          >
            <h1>Portfolio</h1>
            <div className="h-0 mt-3 border-[2px] border-skyBlue w-11 ms2:w-16 md:w-14 md:border-[3px] md:mt-4 xl:w-16 xl:mt-3 xl2:border-[2px] xl2:w-14"></div>
          </motion.div>

          <motion.div 
              className="mt-5 text-sm ms2:text-lg text-CharcoalGray md:text-lg md:mt-7 font-roboto md:mr-10 xl:mr-auto xl:text-base"
              initial={{opacity: 0, y:80}}
              whileInView={{opacity:1,y:0}}
              transition={{duration: 1, ease: "easeOut"}}
                    
              >
                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            </motion.div>
          <div>

            <Tabs />
        
          </div>

        </div>
    
    </div>
  )
}

export default Portfolio