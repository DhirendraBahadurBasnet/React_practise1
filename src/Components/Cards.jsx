import React from 'react'

function Cards() {
  return (
    <div  className='w-full flex items-center gap-5 px-20 h-screen bg-zinc-900'>
      <div className="cardcontainer w-1/2 h-[50vh]">
        <div className="card relative flex justify-center items-center rounded-xl w-full h-full bg-[#004D43]">
        <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
        <button className='absolute left-4 bottom-10 border-2 px-4 py-1 rounded-full'>&copy; 2023-2024</button></div>
      </div>
      <div className="cardcontainer flex gap-5 w-1/2 h-[50vh]">
        <div className="card relative flex justify-center items-center rounded-xl w-[60%] h-full bg-[#0e2925]">
        <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
        <button className='absolute left-4 bottom-10 border-2 px-4 py-1 rounded-full'>RATING 5.0 ON CLUTCH</button>
        </div>
        <div className="card relative pb-5 flex justify-center items-center rounded-xl w-[60%] h-full bg-[#0e2925]">
        <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
        <button className='absolute left-4 bottom-10 border-2 px-2 py-1 rounded-full'>BUSINESS BOOTCAMP ALUMNI</button>
        </div>
      </div>
    </div>
  )
}

export default Cards
