import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[black]'>

        {/* Container */}
        <div className='max-w-{10000px} mx-auto px-8 flex flex-col justify-center h-full'>
          <div className='ml-4 sm:ml-40'>
            <p className='text-pink-400'>Hello, World! My name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[white]'>Neha!</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-blue-300'>This is my personal website!</h2>
            <p className='text-pink-400 py-4 max-width-[700px]'>Currently, I'm pursuing a double major in CS and Music
                at the University of North Carolina at Chapel Hill.</p>
           </div>
        </div>
    </div>
  )
}

export default Home