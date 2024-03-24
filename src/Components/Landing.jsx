import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function Landing() {
  
  return (
    <div data-scroll data-scroll-speed='-.3' className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-36 px-16">
        {["We create", "eye opening", "presentations"].map((item, index) => (
          <div className='masker font-["Founders_Grotesk_X-Condensed"] '>
          <div className="w-fit flex overflow-hidden ">
          {index ===1 && (<motion.div initial={{width:0}} animate={{width:'7vw'}} transition={{ease:[0.76, 0, 0.24, 1], duration:1}} className=" mx-[1vw] w-[7vw] h-[4.8vw] rounded-md relative top-[0.5vw] bg-red-600"></motion.div>)}
            <h1 className="flex items center uppercase leading-[6vw] font-bold text-[7vw] ">
              {item}
            </h1>
          </div>
          </div>
        ))}
      </div>
        <div className=" border-t-[0.5px] border-zinc-800 mt-24 flex justify-between items-center py-5 px-20 ">
          {[
            "For public and private companies",
            "From the first pitch to IPO",
          ].map((item, index) => (
            <p className="text-sm font-light tracking-tight leading-none ">
              {item}
            </p>
          ))}
          <div className="start flex items-center gap-2">
            <div className="px-4 py-2 border-[1px] border-zinc-400 rounded-full text-base font-light uppercase">
              start the project
            </div>
            <div className="w-10 h-10 flex items-center justify-center border-[1px] border-zinc-500 rounded-full">
              <span className="rotate-[45deg]">
              <FaArrowUpLong />
              </span>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Landing;
