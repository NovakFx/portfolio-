import React, { useState, useEffect, useRef } from "react";
import { useInView,motion } from "framer-motion";
import { CiFaceSmile } from "react-icons/ci";
import { PiFileImage } from "react-icons/pi";
import { BsHeadset } from "react-icons/bs";
import { GrGroup } from "react-icons/gr";

const useCounter = (initial, max, inView) => {
  const [count, setCount] = useState(initial);

  useEffect(() => {
    if (!inView || count >= max) return;

    const interval = setInterval(() => {
      setCount((prev) => prev + 8);
    }, 70); // Smooth counting speed

    return () => clearInterval(interval);
  }, [count, max, inView]);

  return count;
};

const NumberCounter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Start counting when in view

  const count1 = useCounter(125, 275, isInView);
  const count2 = useCounter(300, 520, isInView);
  const count3 = useCounter(1000, 1188, isInView);
  const count4 = useCounter(0, 40, isInView);

  return (
    <div className="h-[34.5rem] ms1:h-[38.9rem] pro:h-[45rem] ms2:h-[50rem] sm:h-[45rem] md:h-[30rem] xl:h-[14rem]">
    <div ref={ref} className=" mt-[46.4rem] ms1:mt-[33rem] pro:mt-[33.8rem] ms2:mt-[40.8rem] sm:mt-[37.8rem]  flex flex-col gap-5 pro:gap-8  md:grid md:grid-cols-2 xl:mt-5 md:ml-16 xl2:mt-10 xl:grid xl:grid-cols-4 md:mt-[48rem] md:mr-10 xl:mr-4">
      {[{ icon:<CiFaceSmile />, count: count1, label: "Happy Clients", sub: "consequuntur quae" },
        { icon:<PiFileImage />, count: count2, label: "Projects", sub: "adipisci atque cum quia aut" },
        { icon:<BsHeadset />, count: count3, label: "Hours Of Support", sub: "aut commodi quaerat" },
        { icon:<GrGroup />, count: count4, label: "Hard Workers", sub: "rerum asperiores dolor" }
      ].map((item, index) => (
        <motion.div key={index} className=" items-center flex ml-[2rem] my-4 gap-3 text-4xl pro:text-5xl md:my-5  md:text-6xl md1:my-6 md1:gap-4 xl:gap-2 xl:mx-[0.7rem] xl:text-5xl xl2:gap-3 xl2:mx-[1.7rem]"
        initial={{opacity:0, y:70}}
        whileInView={{opacity:100, y:0}}
        transition={{duration:1, ease:'easeOut'}}
        >
        <div className="text-skyBlue mb-5 pro:mb-4 ms1:mb-1">
          {item.icon}
        </div>  
          <div className="ms1:mt-6 font-bold">
            {item.count} 
            <h1 className="text-sm pro:text-lg md:text-xl text-customgray mt-3 md:mt-0 md1:mt-0 xl:text-base font-raleway mr-3">
              {item.label} <span className="text-xs font-medium md:text-base xl:text-xs xl2:text-sm ">{item.sub}</span>
            </h1>
            
          </div>
        </motion.div>
      ))}

    </div>

    
    </div>
  );
};

export default NumberCounter;
