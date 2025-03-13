import React from 'react'
import { motion } from 'framer-motion'
import { PiSuitcaseSimple } from "react-icons/pi";

const Services = () => {
  return (
    <div id='services' className=" h-[100rem] ms:h-[60rem] ms1:h-[70rem] ms2:h-[83rem] sm:h-[80.5rem] md:h-[55.3rem] md1:h-[60rem] md2:h-[56rem] xl:h-[42.5rem] xl2:h-[39rem] ">
      <div className='ml-3 pt-16 md:pt-20 md:ml-16 xl:ml-5 xl2:ml-3 pr-4 md:mr-10 xl:mr-4'> 
        <motion.div 
              className="text-3xl font-bold sm:text-4xl font-raleway md:text-4xl xl:text-4xl xl2:font-semibold"
                 initial={{ y: 13 }} 
                 whileInView={{ y: -18 }}
                 transition={{ type: "spring", bounce: 0.5, duration: 2 }}
            >
              <h1>Services</h1>
              <div className="h-0 mt-3 border-[2px] border-skyBlue w-11 ms2:w-16 md:w-14 md:border-[3px] md:mt-4 xl:w-16 xl:mt-3 xl2:border-[2px] xl2:w-14"></div>
            </motion.div>
            <motion.div 
                className="mt-5 text-sm ms2:text-lg text-CharcoalGray md:text-lg md:mt-7 font-roboto md:mr-10 xl:mr-auto xl:text-base"
                initial={{opacity: 0, y:80}}
                whileInView={{opacity:1,y:0}}
                transition={{duration: 1, ease: "easeOut"}}
                viewport={{ once: true }}
                >
                  <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
          </motion.div>
 
          <div className='grid md:grid-cols-2 xl:grid-cols-3 md1:gap-7 md2:gap-10 xl:gap-3 mt-16 ms1:mt-20 sm:mt-16'>

          {/* First Section */}
            <motion.div 
            className='grid grid-cols-[3.5rem_auto] group ms1:grid-cols-[3.8rem_auto] pro:grid-cols-[4.6rem_auto]'
            initial={{opacity: 0, y:80}}
            whileInView={{opacity:1,y:0}}
            transition={{duration: 1, ease: "easeOut", delay: 1,}}
            viewport={{ once: true }} 
            >
             <div className='bg-skyBlue h-10 w-10 ms1:h-12 ms1:w-12 pro:w-16 pro:h-16 ms2:w-14 ms2:h-12 xl:w-[50px] xl:h-[50px] rounded-full flex justify-center items-center group-hover:bg-white group-hover:border-skyBlue border-[1px] transition-colors duration-500 ease-in-out'><PiSuitcaseSimple className=' text-white text-2xl ms2:text-3xl xl:text-[27px] group-hover:text-skyBlue transition-colors duration-500 ease-in-out'/></div> 
              <div>
                <h1 className=' group-hover:text-skyBlue font-bold ms2:text-xl xl:text-lg'>Lorem Ipsum</h1>
                <p className=' text-xs ms1:py-2 ms1:text-sm ms2:text-base ms2:pr-4 xl:text-[15px]'>Necessitatibus eius consequatur ex aliquid fuga eum quidem.Quia fugiat sit in iste officiis commodi quidem hic.</p>
              </div>
            </motion.div>

            {/* Second Section */}
            <motion.div 
            className='grid grid-cols-[3.5rem_auto] group ms1:grid-cols-[3.8rem_auto] pro:grid-cols-[4.6rem_auto] my-4 md:mt-0'
            initial={{opacity: 0, y:80}}
            whileInView={{opacity:1,y:0}}
            transition={{duration: 1, ease: "easeOut",  delay: 1.2,}}
            viewport={{ once: true }} 
            >
             <div className='bg-skyBlue h-10 w-10 ms1:h-12 ms1:w-12 pro:w-16 pro:h-16 ms2:w-14 ms2:h-14 xl:w-[50px] xl:h-[50px] rounded-full flex  justify-center items-center group-hover:bg-white group-hover:border-skyBlue border-[1px]  transition-colors duration-500 ease-in-out'><PiSuitcaseSimple className=' text-white text-2xl ms2:text-3xl xl:text-[27px] group-hover:text-skyBlue transition-colors duration-500 ease-in-out'/></div> 
              <div>
                <h1 className=' group-hover:text-skyBlue font-bold ms2:text-xl xl:text-lg'>Dolor Sitema</h1>
                <p className=' text-xs ms1:py-2 ms1:text-sm ms2:text-base ms2:pr-4 xl:text-[15px]'>Necessitatibus eius consequatur ex aliquid fuga eum quidem.Quia fugiat sit in iste officiis commodi quidem hic.</p>
              </div>
            </motion.div>

            {/* Third Section */}
            <motion.div 
            className='grid grid-cols-[3.5rem_auto] group ms1:grid-cols-[3.8rem_auto] pro:grid-cols-[4.6rem_auto] my-4 xl:mt-0'
            initial={{opacity: 0, y:80}}
            whileInView={{opacity:1,y:0}}
            transition={{duration: 1, ease: "easeOut", delay: 1.2,}} 
            viewport={{ once: true }} 
            >
             <div className='bg-skyBlue h-10 w-10 ms1:h-12 ms1:w-12 pro:w-16 pro:h-16 ms2:w-14 ms2:h-14 xl:w-[50px] xl:h-[50px] rounded-full flex  justify-center items-center group-hover:bg-white group-hover:border-skyBlue border-[1px]  transition-colors duration-500 ease-in-out'><PiSuitcaseSimple className=' text-white text-2xl ms2:text-3xl xl:text-[27px] group-hover:text-skyBlue transition-colors duration-500 ease-in-out'/></div> 
              <div>
                <h1 className=' group-hover:text-skyBlue font-bold ms2:text-xl xl:text-lg'>Sed ut perspiciatis</h1>
                <p className=' text-xs ms1:py-2 ms1:text-sm ms2:text-base ms2:pr-4 xl:text-[15px]'>Necessitatibus eius consequatur ex aliquid fuga eum quidem.Quia fugiat sit in iste officiis commodi quidem hic.</p>
              </div>
            </motion.div>

            {/* Fourth Section */}
            <motion.div 
            className='grid grid-cols-[3.5rem_auto] group ms1:grid-cols-[3.8rem_auto] pro:grid-cols-[4.6rem_auto] my-4'
            initial={{opacity: 0, y:80}}
            whileInView={{opacity:1,y:0}}
            transition={{duration: 1, ease: "easeOut", delay: 1.3,}}
            viewport={{ once: true }} 
            >
             <div className='bg-skyBlue h-10 w-10 ms1:h-12 ms1:w-12 pro:w-16 pro:h-16 ms2:w-14 ms2:h-14 xl:w-[50px] xl:h-[50px] rounded-full flex  justify-center items-center group-hover:bg-white group-hover:border-skyBlue border-[1px] transition-colors duration-500 ease-in-out'><PiSuitcaseSimple className=' text-white text-2xl ms2:text-3xl xl:text-[27px] group-hover:text-skyBlue transition-colors duration-500 ease-in-out'/></div> 
              <div>
                <h1 className=' group-hover:text-skyBlue font-bold ms2:text-xl xl:text-lg'>Magni Dolores</h1>
                <p className=' text-xs ms1:py-2 ms1:text-sm ms2:text-base ms2:pr-4 xl:text-[15px]'>Necessitatibus eius consequatur ex aliquid fuga eum quidem.Quia fugiat sit in iste officiis commodi quidem hic.</p>
              </div>
            </motion.div>

            {/* Fifth Section */} 
            <motion.div 
            className='grid grid-cols-[3.5rem_auto] group ms1:grid-cols-[3.8rem_auto] pro:grid-cols-[4.6rem_auto] my-4'
            initial={{opacity: 0, y:80}}
            whileInView={{opacity:1,y:0}}
            transition={{duration: 1, ease: "easeOut", delay: 1.3,}}
            viewport={{ once: true }} 
            >
             <div className='bg-skyBlue h-10 w-10 ms1:h-12 ms1:w-12 pro:w-16 pro:h-16 ms2:w-14 ms2:h-14 xl:w-[50px] xl:h-[50px] rounded-full flex  justify-center items-center group-hover:bg-white group-hover:border-skyBlue border-[1px] transition-colors duration-500 ease-in-out'><PiSuitcaseSimple className=' text-white text-2xl ms2:text-3xl xl:text-[27px] group-hover:text-skyBlue transition-colors duration-500 ease-in-out'/></div> 
              <div>
                <h1 className=' group-hover:text-skyBlue font-bold ms2:text-xl xl:text-lg'>Nemo Enim</h1>
                <p className=' text-xs ms1:py-2 ms1:text-sm ms2:text-base ms2:pr-4 xl:text-[15px]'>Necessitatibus eius consequatur ex aliquid fuga eum quidem.Quia fugiat sit in iste officiis commodi quidem hic.</p>
              </div>
            </motion.div>

            {/* Sixth Section */}
            <motion.div 
            className='grid grid-cols-[3.5rem_auto] group ms1:grid-cols-[3.8rem_auto] pro:grid-cols-[4.6rem_auto] my-4'
            initial={{opacity: 0, y:80}}
            whileInView={{opacity:1,y:0}}
            transition={{duration: 1, ease: "easeOut", delay: 1.4,}}
            viewport={{ once: true }} 
            >
             <div className='bg-skyBlue h-10 w-10 ms1:h-12 ms1:w-12 pro:w-16 pro:h-16 ms2:w-14 ms2:h-14 xl:w-[50px] xl:h-[50px] rounded-full flex  justify-center items-center group-hover:bg-white group-hover:border-skyBlue border-[1px] transition-colors duration-500 ease-in-out'><PiSuitcaseSimple className=' text-white text-2xl ms2:text-3xl xl:text-[27px] group-hover:text-skyBlue transition-colors duration-500 ease-in-out'/></div> 
              <div>
                <h1 className=' group-hover:text-skyBlue font-bold ms2:text-xl xl:text-lg'>Eiusmod Tempor</h1>
                <p className=' text-xs ms1:py-2 ms1:text-sm ms2:text-base ms2:pr-4 xl:text-[15px]'>Necessitatibus eius consequatur ex aliquid fuga eum quidem.Quia fugiat sit in iste officiis commodi quidem hic.</p>
              </div>
            </motion.div>




          </div>






      </div>
        
    </div>
  )
}

export default Services