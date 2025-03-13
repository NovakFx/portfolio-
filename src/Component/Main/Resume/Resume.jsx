import React from 'react'
import { motion } from 'framer-motion'

const Resume = () => {
  return (
    <div id='resume' className="ms:h-[107rem] ms1:h-[98rem] pro:h-[95rem] ms2:h-[133rem] sm:h-[147rem] md:h-[129.6rem]  xl:h-[90rem] xl2:h-[80rem] mt-12  ">
      <div className='ml-3 pt-11 md:pt-20 md:ml-16 xl:ml-5 xl2:ml-3 md:mr-10 xl:mr-4'>

     
      <motion.div 
            className="text-3xl font-bold sm:text-4xl font-raleway md:text-4xl xl:text-4xl xl2:font-semibold"
            initial={{ y: 13, opacity: 0 }} 
            whileInView={{ y: -18, opacity: 1 }}
            transition={{ type: "spring", bounce: 0.5, duration: 2 }}
          >
            <h1>Resume</h1>
          </motion.div>
          <div className="h-0 mt-3 border-[2px] border-skyBlue w-11 ms2:w-16 md:w-14 md:border-[3px] md:mt-4 xl:w-16 xl:mt-3 xl2:border-[2px] xl2:w-14"></div>

          <motion.div 
             className="mt-5 text-sm ms2:text-lg text-CharcoalGray md:text-lg md:mt-7 font-roboto md:mr-10 xl:mr-auto xl:text-base"
             initial={{opacity: 0, y:80}}
             whileInView={{opacity:1,y:0}}
             transition={{duration: 1, ease: "easeOut"}}
             viewport={{ once: true }}
             >
                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            </motion.div>
          <div className='xl:grid xl:grid-cols-2'>

            <div> <motion.div
            className='mt-14 xl:mt-11'
            initial={{opacity: 0, y:80}}
            whileInView={{opacity:1,y:0}}
            transition={{duration: 1, ease: "easeOut"}}
            viewport={{ once: true }}
            >
              <h1 className='font-signika font-bold pl-2 pb-1 text-base ms2:text-xl sm:text-2xl md:text-3xl'>Summary</h1>

              <div className='grid grid-cols-[1.5rem_auto]'>
                <div className='mt-[5px] ms2:mt-[7px]'>
                  <div className='border-skyBlue border-[2px] rounded-full h-3 w-3 ms2:h-4 ms2:w-4 md:h-5 md:w-5'>
                  <div className='border-[1px] border-skyBlue h-48 w-0 ml-1 mt-[9px] ms2:mt-[13px] ms2:ml-[6px] ms2:h-[248px] sm:h-[280px] md:ml-[7px] md:mt-[17px] md:h-[240px] md1:h-[235px] xl:h-[288px] xl2:h-[260px]'></div>
                  </div>  
                </div>

                <div className='pr-8 ms2:pr-10 sm:pr-10'>
                  <h1 className='text-sm text-Gray font-semibold ms2:text-lg sm:text-xl md:text-2xl'>Brandon Johnson</h1>
                  <p className='text-xs font-roboto italic mt-2 ms2:text-base sm:text-lg md:text-xl'>Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.</p>
                  
                  <div className='mt-5 font-roboto'>
                      <li className='text-xs pt-1 ms2:text-sm sm:text-base md:text-lg'>alice.barkley@example.com</li>
                      <li className='text-xs pt-2 ms2:text-sm sm:text-base md:text-lg'>(123) 456-7891</li>
                      <li className='text-xs pt-2 ms2:text-sm sm:text-base md:text-lg'>alice.barkley@example.com</li>
                  </div>

                </div>
              </div>

            </motion.div>



            <motion.div 
            className='mt-5 '
            initial={{opacity: 0, y:80}}
            whileInView={{opacity:1,y:0}}
            transition={{duration: 1, ease: "easeOut"}}
            viewport={{ once: true }}
            >
              <h1 className='font-signika font-bold pl-2 pb-1 text-base ms1:py-4 ms1:pb-0 ms2:py-2 ms2:text-xl sm:text-2xl sm:py-3 md:text-3xl'>Education</h1>

              <div className='grid grid-cols-[1.5rem_auto] '>
                <div className='mt-[5px] sm:mt-[11px]'>
                  <div className='border-skyBlue border-[2px] rounded-full h-3 w-3 ms2:h-4 ms2:w-4 md:h-5 md:w-5'>
                  <div className='border-[1px] border-skyBlue h-48 w-0 ml-1 mt-[9px] ms2:mt-[13px] ms2:ml-[6px] ms2:h-[246px] sm:h-[290px] md:ml-[7px] md:mt-[17px] md:h-[211px] xl:h-[270px] xl2:h-[240px]'></div>
                  </div>  

                  <div className='mt-[11.9rem] ms2:mt-[15.3rem] sm:mt-[18rem] md:mt-[13rem] xl:mt-[16.7rem] xl2:mt-[14.8rem]'>
                    <div className='border-skyBlue border-[2px] rounded-full h-3 w-3 ms2:h-4 ms2:w-4 md:h-5 md:w-5'>
                    <div className='border-[1px] border-skyBlue h-48 w-0 ml-1 mt-[9px] ms1:h-[114px] pro:h-[90px] ms2:mt-[13px] ms2:ml-[6px] ms2:h-[250px] sm:h-[280px] md:ml-[7px] md:mt-[17px] md:h-[220px]  md1:h-[180px] xl:h-[240px] xl2:h-[210px]'></div>
                    </div>
                  </div>

                </div>

                <div className='pr-8 pro:mt-1 '>
                  <h1 className='text-sm text-Gray font-semibold  pr-10 ms2:text-lg ms2:leading-5 sm:text-xl md:text-2xl'>Master of Fine Arts & Graphic Design</h1>
                  <p className='pl-4 py-2 font-semibold text-xs font-raleway ms2:text-sm ms2:py-3 sm:text-lg md:text-xl md1:py-4'>2015 - 2016</p>
                  <p className='text-sm font-roboto italic mt-1 ms2:text-base sm:text-lg md:text-xl'>Rochester Institute of Technology, Rochester, NY</p>
                  <p className='text-xs font-roboto  mt-2 ms2:text-base sm:text-lg md:text-xl xl:text-lg'>Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend</p>
                  
                <div className='mt-[15px] ms2:mt-[20px] md1:mt-[40px]'>
                  <h1 className='text-sm text-Gray font-semibold  pr-10 ms2:text-lg ms2:leading-5 sm:text-xl md:text-2xl'>Bachelor of Fine Arts & Graphic Design</h1>
                  <p className='pl-4 py-2 font-semibold text-xs font-raleway ms2:text-sm ms2:py-3 sm:text-lg md:text-xl'>2015 - 2016</p>
                  <p className='text-sm font-roboto italic mt-1 ms2:text-base sm:text-lg md:text-xl '>Rochester Institute of Technology, Rochester, NY</p>
                  <p className='text-xs font-roboto  mt-2 ms2:text-base sm:text-lg md:text-xl xl:text-lg'>Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores sader mart dila</p>
                </div>

                </div>
              </div>

            </motion.div>
            </div>


            <div> <motion.div 
            className='mt-5 pro:mt-10 xl:mt-7'
            initial={{opacity: 0, y:80}}
            whileInView={{opacity:1,y:0}}
            transition={{duration: 1, ease: "easeOut"}}
            viewport={{ once: true }}
            >
              <h1 className='font-signika font-bold pl-2 pb-1 text-base ms2:py-1 ms2:pb-2 ms2:text-xl sm:text-2xl sm:py-2 md:text-3xl md1:py-4'>Professional Experience</h1>

              <div className='grid grid-cols-[1.5rem_auto] '>
                <div className='mt-[5px]'>
                  <div className='border-skyBlue border-[2px] rounded-full h-3 w-3 ms2:h-4 ms2:w-4 md:h-5 md:w-5'>
                  <div className='border-[1px] border-skyBlue h-48 w-0 ml-1 mt-[9px] ms2:mt-[13px] ms2:ml-[6px] ms2:h-[375px] sm:h-[444px] md:ml-[7px] md:mt-[17px] md:h-[402px] xl:h-[482px] xl2:h-[430px]'></div>
                  </div>  

                  <div className='mt-[11.9rem]  ms2:mt-[23.3rem] sm:mt-[27.6rem] md:mt-[25rem] xl:mt-[30rem] xl2:mt-[26.8rem]'>
                    <div className='border-skyBlue border-[2px] rounded-full h-3 w-3 ms2:h-4 ms2:w-4 md:h-5 md:w-5'>
                    <div className='border-[1px] border-skyBlue h-96 w-0 ml-1 mt-[9px] ms1:h-80 ms2:mt-[13px] ms2:ml-[6px] ms2:h-[330px] sm:h-[340px] md:ml-[7px] md:mt-[17px] md:h-[320px] xl:h-[410px] xl2:h-[390px]'></div>
                    </div>
                  </div>

                </div>

                <div className='pr-8 '>
                  <h1 className='text-sm text-Gray font-semibold pr-10 ms2:text-lg ms2:leading-5 sm:text-xl md:text-2xl xl:text-[22px]'>Senior Graphic Design Specialist</h1>
                  <p className='pl-4 py-2 font-semibold text-xs font-raleway ms2:text-sm ms2:py-3 sm:text-lg md:text-xl md1:py-4'>2019 - Present</p>
                  <p className='text-sm font-roboto italic mt-1 ms2:text-base sm:text-lg md:text-xl'>Experion, New York, NY</p>
                  <ul className='list-disc pl-4'>
                    <li className='text-xs pt-1 ms2:text-sm ms2:py-2 sm:text-base md:text-lg'>Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
                    <li className='text-xs pt-2 ms2:text-sm ms2:py-2 sm:text-base md:text-lg'>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project.</li>
                    <li className='text-xs pt-2 ms2:text-sm ms2:py-2 sm:text-base md:text-lg'>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</li>
                    <li className='text-xs pt-2 ms2:text-sm ms2:py-2 sm:text-base md:text-lg'>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li>
                  </ul>
                <div className='mt-[15px] md1:mt-[33px] xl:mt-[30px] xl2:mt-[34px]'>
                  <h1 className='text-sm text-Gray font-semibold  pr-10 ms2:text-lg ms2:leading-5 sm:text-xl md:text-2xl'>Graphic design specialist</h1>
                  <p className='pl-4 py-2 font-semibold text-xs font-raleway ms2:text-sm ms2:py-3 sm:text-lg md:text-xl'>2017 - 2018</p>
                  <p className='text-sm font-roboto italic mt-1 ms2:text-base sm:text-lg md:text-xl'>Stepping Stone Advertising, New York, NY</p>
                  <ul className='list-disc pl-4'>
                  <li className='text-xs pt-2 ms2:text-sm ms2:py-2 md:text-lg'>Developed numerous marketing programs (logos, brochures,infographics, presentations, and advertisements).</li>
                  <li className='text-xs pt-2 ms2:text-sm ms2:py-2 md:text-lg'>Managed up to 5 projects or tasks at a given time while under pressure</li>
                  <li className='text-xs pt-2 ms2:text-sm ms2:py-2 md:text-lg'>Recommended and consulted with clients on the most appropriate graphic design</li>
                  <li className='text-xs pt-2 ms2:text-sm ms2:py-2 md:text-lg'>Created 4+ design presentations and proposals a month for clients and account managers</li>
                  </ul>
                </div>

                </div>
              </div>

            </motion.div>
            </div>

          </div>    
      </div>
    </div>
  )
}

export default Resume