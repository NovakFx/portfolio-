 import React from 'react'
 import { motion } from 'framer-motion'
 import Slider from "react-slick";
 import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
 
 const Testimonial = () => {

  const Data =[
    {
      name:'Saul Goodman',
      img:'./images/Ceo.jpg',
      title:'CEO & Founder',
      desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  
    {
      name:'Sarah Wilson',
      img:'./images/Designer.jpg',
      title:'Designer',
      desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  
    {
      name:'Jena Karlis',
      img:'./images/Store.jpg',
      title:'Store owner',
      desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  
    {
      name:'Matt Brandon',
      img:'./images/Freelancer.jpg',
      title:'Freelancer',
      desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  
    {
      name:'John Larson',
      img:'./images/Entrepreneur.jpg',
      title:'Entrepreneur',
      desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
   ]

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    margin: 50, 
    autoplay:true,
    autoplayspeed: 2000,
    dotsClass: "slick-dots flex justify-center space-x-2 mt-4",
    customPaging: (i) => (
      <div className="w-3 h-3 bg-transparent border-skyBlue border-[1px] mt-7 md1:mt-10 md:mt-11 rounded-full transition-all duration-300 hover:pointer-cursor"></div>
    ),

    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 883,
        settings: { slidesToShow: 1 },
      },
    ],

  };
  
   return (
     <div id='testimonial' className=" ms:h-[138vh] md:h-[75vh] xl:h-[98vh] xl2:h-[100vh] bg-creamGray ">
       <div className='ml-3 pt-16 md:pt-20 md:ml-16 xl:ml-5 xl2:ml-3 pr-4 md:mr-10 xl:mr-4'> 
        
         <motion.div 
           className="text-3xl font-bold sm:text-4xl font-raleway md:text-4xl xl:text-4xl xl2:font-semibold"
              initial={{ y: 13, opacity: 0 }} 
              whileInView={{ y: -18, opacity: 1 }}
              transition={{ type: "spring", bounce: 0.5, duration: 2 }}
         >
          <h1>Testimonials</h1>
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

      <div className='  '>
      <motion.div className=' mt-20'
      initial={{opacity: 0, y:90}} 
      whileInView={{opacity:1,y:0}}
      transition={{duration: 1, ease: "easeOut"}}
      viewport={{ once: true }}
      >
      <Slider {...settings}>
        {
          Data.map((d,index) =>(
            <div key={index} className='justify-center px-2 items-center text-center '>
              <div className="bg-white w-auto rounded-xl h-auto text-center p-5 shadow-md flex flex-col">
                <FaQuoteLeft className="text-lg text-skyBlue self-start" />
                <h1 className="text-base italic px-5 md1:text-lg md:text-xl">
                  {d.desc}
                </h1>
                <FaQuoteRight className="text-lg text-skyBlue self-end" />
              </div>


              <div className=' mt-5 md1:mt-7 flex justify-center items-center'>
                <img src={d.img} alt="" className='w-[4.5rem] md1:w-[5.9rem] rounded-full transition-all duration-300 ease-in-out'/>
              </div>

              <div>
                <h1 className=' font-bold md1:text-xl'>{d.name}</h1>
              </div>

              <div>
                <p className=' text-customgray md1:text-base'>{d.title}</p>
              </div>

            </div>  
          ))
        }
      </Slider>
      </motion.div>

      </div>

       </div>
     </div>
   )
 }

 
 export default Testimonial