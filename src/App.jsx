import React, { useState } from "react";
import Sidebar from "./Component/sideNavbar/Sidebar";
import Home from "./Component/Main/Home/Home";
import About from "./Component/Main/About/About";
import Resume from "./Component/Main/Resume/Resume";
import Portfolio from "./Component/Main/Portfolio/Portfolio";
import Services from "./Component/Main/Solutions/Services";
import Contact from "./Component/Main/Contact/Contact";
import ArrowUp from "./Component/sideNavbar/ArrowUp";
import NumberCounter from "./Component/Main/About/NumberCounter";
import Skills from "./Component/Main/About/Skills";

function App() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="overflow-hidden overflow-x-hidden ">
    
      <div className="fixed top-0 left-0 z-50">
        <Sidebar setSelected={setSelected} />
      </div>
      <ArrowUp />
      <div className="pl-[0rem] xl:pl-[18rem] transition-transform duration-500 ease-in-out"> 
        <div id="home" className={`min-h-screen  ${selected === 0 ? "h-screen" : ""}`}>
          <Home />
        </div>

        <div id="about" className={`min-h-screen ${selected === 1 ? "h-screen" : ""}`}>
          <About />
        </div>

        <div id="counter" className={` ${selected === 2 ? "" : ""}`}>
          <NumberCounter />
        </div>

        <div id="skills" className={` ${selected === 3 ? "" : ""}`}>
          <Skills />
        </div>

        <div id="resume" className={`min-h-screen ${selected === 4 ? "h-screen" : ""}`}>
          <Resume />
        </div>
        <div id="portfolio" className={`min-h-screen ${selected === 5 ? "h-screen" : ""}`}>
          <Portfolio />
        </div>
        <div id="services" className={` ${selected === 6 ? "h-screen" : ""}`}>
          <Services />
        </div>
        <div id="contact" className={`min-h-screen ${selected === 7 ? "h-screen" : ""}`}>
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
