import React from 'react';
import { motion } from 'framer-motion';
import { IoIosArrowForward } from "react-icons/io";

const About = () => {


  return (
    <div id="about" className="min-h-screen h-screen bg-white pr-2">
      <div className="ml-3 pt-11 md:pt-20 md:ml-8 xl:ml-5 xl2:ml-3">
        <div className="md:mr-10 xl:mr-4">
          
          <div>
            <motion.div 
            className="text-3xl font-bold sm:text-4xl font-raleway md:text-5xl xl:text-4xl xl2:font-semibold"
            initial={{ y: -10 }} 
            animate={{ y: 19 }} 
            transition={{ repeat: Infinity, repeatType: "reverse", duration: 2 }}>
            <h1>About</h1>
            </motion.div>
            
            <div className="h-0 mt-3 border-[2px] border-skyBlue w-11 ms2:w-16 md:w-20 md:border-[3px] md:mt-4 xl:w-16 xl:mt-3 xl2:border-[2px] xl2:w-14"></div>

          </div>

          <motion.div 
            className="mt-5 text-sm ms2:text-lg text-CharcoalGray md:text-lg md:mt-7 font-roboto md:mr-10 xl:mr-auto xl:text-base"
            initial={{opacity: 0, y:80}}
            whileInView={{opacity:1,y:0}}
            transition={{duration: 1, ease: "easeOut"}}

          >
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
          </motion.div>

          <div className="xl:grid xl:grid-cols-[26.5rem_auto] xl:mt-16 xl2:grid-cols-[28rem_auto]">
            
    
            <motion.div 
              className="mt-7 md:mt-16 md:mr-[3rem] xl:mt-0 xl:mr-[1.5rem]"
              initial={{opacity:0, y:80}}
              whileInView={{opacity:100,y:0}}
              transition={{duration: 1, ease:'easeOut'}}
            >
              <img src="/Images/Me.avif" alt="Profile" className="object-cover rounded-md md:h-[35rem]  xl:h-[23rem] xl:mt-3 xl2:mt-2" />
            </motion.div>

            <div>
             
              <motion.div 
                className="text-xl font-bold mt-6 mb-3 ms1:text-2xl sm:text-3xl md:mt-8 md2:text-4xl font-raleway xl:mt-0 xl:mb-0 xl:text-[1.2rem]  xl2:text-[1.5rem] xl2:font-semibold"
                initial={{opacity:0, y:80}}
                whileInView={{opacity:100, y:0}}
                transition={{duration: 1, ease:'easeOut'}}
              >
                <h1>Web Developer & UI/UX Designer.</h1>
              </motion.div>

              <motion.div 
               initial={{opacity:0, y:80}}
               whileInView={{opacity:100, y:0}}
               transition={{duration:1, ease:'easeOut'}} 
              >
                <p className="text-base ms2:text-lg mt-4 md:mt-6 text-CharcoalGray font-roboto md1:text-xl xl:text-base xl:mt-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </motion.div>

              <div className="xl:grid xl:grid-cols-2">
                {[
                  { label: "Birthday:", value: "31 March 2007" },
                  { label: "Website:", value: "www.example.com" },
                  { label: "Phone:", value: "+234 90 6485 6777" },
                  { label: "City:", value: "Lagos" },
                  { label: "Age:", value: "18" },
                  { label: "Email:", value: "jeremiah@gmail.com" },
                  { label: "Degree:", value: "O'Level" },
                  { label: "Freelance:", value: "Available" },
                ].map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center mt-5 md:mt-7 md1:mt-9 xl:mt-5"
                    initial={{opacity:0, y:70}}
                    whileInView={{opacity:100, y:0}}
                    transition={{duration:1, ease:'easeOut'}}
                    
                  >
                    <IoIosArrowForward className="text-skyBlue text-xl font-thin ms2:text-2xl xl:text-xl" />
                    <h1 className="font-bold md:text-xl md1:text-2xl xl:text-base">{item.label}</h1>
                    <p className="pl-2 md:text-base md1:text-xl xl:text-base">{item.value}</p>
                  </motion.div>
                ))}
              </div>
              <motion.div 
              className="text-base text-CharcoalGray mt-6 ms2:text-lg ms2:mt-8 font-roboto md:pr-5 md:text-base md:mt-11 md1:text-xl xl:text-sm xl:pr-0 xl:mt-5 xl2:text-base xl2:mt-7"
              initial={{opacity:0, y:70}}
              whileInView={{opacity:100, y:0}}
              transition={{duration:1, ease:'easeOut'}}  
          >
            <p>Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque.</p>
          </motion.div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
