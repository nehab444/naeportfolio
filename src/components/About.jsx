import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[black] text-gray-300'>
        <div className="flex flex-col justify-center items-center w-full h-full">
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                  <p className='text-4xl font-bold inline border-b-4 border-pink-300 '>
                    About
                  </p>   
                </div>
                <div></div>
                </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
             <div className='sm: text-right text-4xl font-bold'>
                <p>Hi. I'm Neha, nice to meet you. Take a look around!</p>
              </div>
              <div>
                <p>Hey, I'm Neha, 18 years old, studying Computer Science and 
                Music. I enjoy running, playing instruments, and watching 
                "Brooklyn Nine-Nine" and "The Office."
                </p>
              </div>
          </div>
      </div>
  </div>
  );
};

export default About;