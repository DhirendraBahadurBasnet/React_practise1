import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed='.1' className='w-full py-20 rounded-tr-3xl rounded-tl-3xl text-white bg-[#004D43]'>
      <div className='text border-y-2  border-zinc-300 flex   overflow-hidden whitespace-nowrap  '>
       <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease: "linear", repeat:Infinity, duration:8}} className='text-[22vw]  leading-none font-["Founders_Grotesk_X-Condensed"] font-semibold uppercase pr-8 -my-[2.3vw]'>We Are Ochhi</motion.h1> 
       <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease: "linear", repeat:Infinity, duration:8}} className='text-[22vw] leading-none font-["Founders_Grotesk_X-Condensed"] font-semibold uppercase  -my-[2.3vw]  '>We Are Ochhi </motion.h1> 
      </div>
    </div>
  )
}

export default Marquee
