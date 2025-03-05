import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  { name: 'HTML', percentage: 100 },
  { name: 'Tailwind/Css', percentage: 90 },
  { name: 'JavaScript', percentage: 80 },
  { name: 'React', percentage: 75 },
  { name: 'Framer Motion', percentage: 75 },
  { name: 'Ui/Ux', percentage: 75 },
];

const Skills = () => {
  return (
    <div id='skills' className='bg-creamGray h-[40rem] ms1:h-[43rem] ms2:h-[44.5rem] sm:h-[46.5rem] md:h-[49rem] xl:h-[34rem] pr-2 pl-3 md:pl-16 md:pr-10 xl:rr-4'>
      <div className='pt-11 ms2:pt-14'>
        <motion.div 
          className="text-3xl font-bold sm:text-4xl font-raleway md:text-4xl xl:text-4xl xl2:font-semibold"
          // initial={{ y: -10 }} 
          // animate={{ y: 19 }} 
          // transition={{ repeat: Infinity, repeatType: "reverse", duration: 2 }}
          >
          <h1>Skills</h1>
        </motion.div>
        <div className="h-0 mt-3 border-[2px] border-skyBlue w-11 ms2:w-16 md:w-14 md:border-[3px] md:mt-4 xl:w-16 xl:mt-3 xl2:border-[2px] xl2:w-14"></div>
      </div>

      <motion.div 
        className="mt-5 text-sm ms2:text-lg text-CharcoalGray md:text-lg md:mt-7 font-roboto md:mr-10 xl:mr-auto xl:text-base"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit.</p>
      </motion.div>
      
      <div className="mt-14 space-y-5 md2:mr-6 xl:grid xl:grid-cols-2 xl:mr-2 xl:gap-5 xl:space-y-0 ">
        {skillsData.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between text-sm md:text-base font-playfair">
              <span className=' m-2 ml-0 pro:m-3 pro:ml-0 sm:m-4 sm:ml-0 xl:m-3 xl:ml-0'>{skill.name}</span>
              <span  className=' mt-2 pro:mt-3 sm:mt-4 xl:mt-3'>{skill.percentage}%</span>
            </div>
            <div className="bg-gray-300 w-full h-3 md:h-4 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-skyBlue rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.percentage}%` }}
                transition={{ duration: 1 }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
