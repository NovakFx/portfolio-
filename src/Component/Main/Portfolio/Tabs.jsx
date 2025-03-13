import React from "react";
import { motion, AnimatePresence, animate } from "framer-motion";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { LiaSearchPlusSolid, LiaPagelines } from "react-icons/lia";

const Tabs = () => {
  const tabData = {
    All: [
      { img: "Images/Mobile.avif", title: "App 1" },
      { img: "Images/Product1.avif", title: "Product 1" },
      { img: "Images/Branding1.avif", title: "Branding 1" },
      { img: "Images/Books1.avif", title: "Book 1" },
      { img: "Images/App2.avif", title: "App 2" },
      { img: "Images/Product2.avif", title: "Product 2" },
      { img: "Images/Branding2.avif", title: "Branding 2" },
      { img: "Images/Books2.avif", title: "Book 2" },
      { img: "Images/App3.avif", title: "App 3" },
      { img: "Images/Product3.avif", title: "Product 3" },
      { img: "Images/Branding3.avif", title: "Branding 3" },
      { img: "Images/Books3.avif", title: "Book 3" },
    ],
    Apps: [
      { img: "Images/Mobile.avif", title: "App 1" },
      { img: "Images/App2.avif", title: "App 2" },
      { img: "Images/App3.avif", title: "App 3" },
    ],
    Product: [
      { img: "Images/Product1.avif", title: "Product 1" },
      { img: "Images/Product2.avif", title: "Product 2" },
      { img: "Images/Product3.avif", title: "Product 3" },
    ],
    Branding: [
      { img: "Images/Branding1.avif", title: "Branding 1" },
      { img: "Images/Branding2.avif", title: "Branding 2" },
      { img: "Images/Branding3.avif", title: "Branding 3" },
    ],
    Books: [
      { img: "Images/Books1.avif", title: "Book 1" },
      { img: "Images/Books2.avif", title: "Book 2" },
      { img: "Images/Books3.avif", title: "Book 3" },
    ],
  };

  return (
    <div className="mt-20 bg-creamGray h-auto pb-14">
      <TabGroup>
        <TabList className="flex text-center justify-center">
          {Object.keys(tabData).map((category) => (
            <Tab
              key={category}
              className="py-2 px-2 md:px-3 md1:px-4 xl:px-5 text-sm ms1:text-base ms2:text-lg sm:text-xl md:text-2xl xl:text-base data-[selected]:font-medium focus:outline-none data-[selected]:text-skyBlue rounded-md"
            >
              {category}
            </Tab>
          ))}
        </TabList>

        <TabPanels className="mt-4">
          {Object.entries(tabData).map(([category, images]) => (
            <TabPanel key={category}>
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                initial={{ opacity: 0, y:80 , scale: 0.95 }}
                whileInView={{opacity:1,y:0}}
                animate={{ opacity: 1, scale: 1 }}
                onClick={animate}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                viewport={{ once: true }}
              >
                <AnimatePresence mode="popLayout">
                  {images.map((item, index) => (
                    <ImageCard
                      key={item.img}
                      img={item.img}
                      title={item.title}
                      isActive={index === 0}
                    />
                  ))}
                </AnimatePresence>
              </motion.div>
            </TabPanel>
          ))}              
        </TabPanels>
      </TabGroup>
    </div>
  );
};

// ImageCard Component
const ImageCard = ({ img, title, isActive }) => (
  <motion.div
    className="relative group overflow-hidden w-[25rem] ms:w-[18.5rem] ms1:w-full rounded-md"
    {...(!isActive && {
      initial: { opacity: 0, scale: 0 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.8 },
      transition: { stiffness: 200, damping: 10 },
    })}
  >
    <img
      src={img}
      alt={title}
      className="w-full h-[200px] ms2:h-[16rem] mt-2 rounded-md transition-transform duration-300 ease-in-out group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <h1 className="bg-skyBlue py-1 text-sm ms2:text-base text-center px-4 w-[100px] ms2:w-[110px] mx-2 my-2 ms2:my-4 ms2:mx-4 text-white">
        {title}
      </h1>
      <div className="flex justify-center gap-2 mt-12 ms2:mt-14">
        <LiaSearchPlusSolid className="text-white text-3xl ms2:text-4xl sm:text-5xl hover:text-skyBlue" />
        <LiaPagelines className="text-white text-3xl ms2:text-4xl sm:text-5xl hover:text-skyBlue" />
      </div>
      <div className="text-white text-center mt-11 ms:text-xs ms2:text-sm ms2:mt-16 sm:text-base xl:text-sm font-bold">
        <h1>Lorem ipsum, dolor sit amet consectetur</h1>
      </div>
    </div>  
  </motion.div>
);

export default Tabs;
