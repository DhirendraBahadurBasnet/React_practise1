import { delay, motion, useAnimate, useAnimation } from 'framer-motion'
import { Power4 } from 'gsap/all';
import React, { useState } from 'react'

function Features() {
    const cards = [useAnimation(), useAnimation()]
    const handleHover = (index)=>
    {
        cards[index].start({y:"0"})
    }
    const handleHoverEnd = (index)=>
    {
        cards[index].start({y:"100%"})
    }
    
  return (

    <div className='w-full py-20'>
        <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-16'>
            <h1 className='text-6xl font-["Neue_Montreal"] tracking-tight'> Featured projects</h1>
        </div>
        <div className='px-20'>
        <div className="cards w-full flex   gap-10 mt-20">
        <div className="carddiv w-1/2  ">
        <div className='uppercase mb-2'><span className='inline-block w-3 h-3 mr-1 rounded-full bg-zinc-100'></span> <span>Fyde</span></div>
            <motion.div onHoverStart={()=>handleHover(0)} onHoverEnd={()=>handleHoverEnd(0)} className="cardcontainer relative  h-[75vh] cursor-pointer ">
            <h1 className='absolute overflow-hidden flex left-full top-1/2 -translate-x-1/2 -translate-y-1/2 z-[900] text-[#CDEA68] font-semibold text-8xl '>
            {"FYDE".split('').map((item, index)=><motion.span initial={{y: "100%"}} animate={cards[0]} transiton={{ease:[0.22, 1, 0.36, 1],delay:index*.05}} className='inline-block'   >{item}</motion.span>) }
            </h1>
            <div className="card  w-full h-full rounded-xl overflow-hidden "><img className="w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" /></div>

            </motion.div>
        </div>
        <div className="carddiv w-1/2 ">
        <div className='uppercase mb-2'><span className='inline-block w-3 h-3 mr-1 rounded-full bg-zinc-100'></span> <span>Vise</span></div>
            <motion.div onHoverStart={()=>handleHover(1)} onHoverEnd={()=>handleHoverEnd(1)} className="cardcontainer relative  h-[75vh] cursor-pointer">
            <h1 className='absolute overflow-hidden flex right-full top-1/2 translate-x-1/2 -translate-y-1/2 z-[900] text-[#CDEA68] font-semibold text-8xl '>
            {"VISE".split('').map((item, index)=><motion.span initial={{y: "100%"}} animate={cards[1]} transiton={{ease:[0.22, 1, 0.36, 1],delay:index*.05}} className='inline-block'   >{item}</motion.span>) }


            </h1>
                <div className='card  w-full h-full rounded-xl overflow-hidden invert'>
                    <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
                </div>
            </motion.div>
        </div>
       
        </div>
        </div>
    </div>
  )
}

export default Features