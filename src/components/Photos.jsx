import React from 'react'
import Suite from '../assets/suite.png'
import Friends from '../assets/friends.png'
import Beach from '../assets/beach.jpg'
import Mom from '../assets/mom.jpg'


const Photos = () => {
  return (
    <div name='photos' className='w-full md:h-screen  text-gray-300 bg-[black]'>
        <div className='max=w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-300'>Photos</p>
                <p className='py-6'>// Check out some of my photos!</p>
            </div>
{/* Container */}
            <div className='grid sm:grid-cols-2 md: grid-cols-3 gap-4'>

            {/* Grid Item */}
                <div 
                style={{backgroundImage: `url(${Suite})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify center items-center mx-auto content-div'>

                    {/* Hover Effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
        Photo with some of my suitemates!
                        </span>
                        <div className='pt-8 text-center'>
                        </div>
                    </div>
                </div>
                {/* Grid Item */}
                <div 
                style={{backgroundImage: `url(${Beach})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex jusify center items-center mx-auto content-div'>

                    {/* Hover Effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
        Photo with people I met over the summer!
                        </span>
                        <div className='pt-8 text-center'>
                        </div>
                    </div>
                </div>
                {/* Grid Item */}
                <div 
                style={{backgroundImage: `url(${Mom})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex jusify center items-center mx-auto content-div'>

                    {/* Hover Effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
        Photo with my mom!
                        </span>
                        <div className='pt-8 text-center'>
                        </div>
                    </div>
                </div>
                <div
                style={{backgroundImage: `url(${Friends})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex jusify center items-center mx-auto content-div'>

                    {/* Hover Effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
        Photo with some of my best friends from highschool!
                        </span>
                        <div className='pt-8 text-center'>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Photos