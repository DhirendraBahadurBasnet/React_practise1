import { motion } from "framer-motion";
import React from "react";

function About() {
  return (
    <div data-scroll data-scroll-speed='-.2' className="w-full p-24 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black ">
      <h1 className="font-['Neue_Montreal'] text-[3.8vw] leading-[3.5vw] tracking-tight">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>
      <div>
        <div className="w-full flex gap-5 border-[#a1b855] mt-20 pt-6 border-t-[1px]">
          <div className="w-1/2 ">
            <h1 className="text-5xl">Our approach:</h1>
            <button className="flex items-center uppercase gap-7 px-10 py-4 bg-zinc-900 rounded-full mt-8 text-white">
              Read More
              <div className="w-2 h-2 bg-zinc-100 rounded-full "></div>
            </button>
          </div>
          <div className="w-1/2 h-[60vh] rounded-3xl bg-[#889b49]"></div>
        </div>
      </div>
    </div>
  );
}

export default About;
