import React from 'react'
import Navbar from './Components/Navbar'
import Landing from './Components/Landing'
import Marquee from './Components/Marquee'
import About from './Components/About'
import Animation from './Components/Animation'
import Features from './Components/Features'
import Cards from './Components/Cards'
import Footer from './Components/Footer'
import LocomotiveScroll from 'locomotive-scroll'

function App() {
  
  const locomotiveScroll =  new LocomotiveScroll();
  return (
    <div className='w-full min-h-screen bg-zinc-900 text-white'>   
      <Navbar/>
      <Landing/>
      <Marquee/>
      <About/>
      <Animation/>
      <Features/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default App
