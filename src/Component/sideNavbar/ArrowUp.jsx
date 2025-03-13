import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { IoMdArrowUp } from "react-icons/io";

const ArrowUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="z-50 fixed top-4 right-4 transition-transform duration-500 ease-in-out">
      {isVisible && (
        <motion.button
          className="fixed bottom-8 right-3 z-50 p-1 xl:p-2 rounded-full bg-skyBlue text-white shadow-lg hover:bg-sky-700 transition-transform duration-300 transform hover:scale-110"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <IoMdArrowUp className="w-8 h-8" />
        </motion.button>
      )}
    </div>
  );
};

export default ArrowUp;