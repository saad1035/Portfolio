import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Home = () => {
  return (
    <div name='hero' id='hero' className='w-full h-screen bg-[#0a192f]'>

      {/* Container */}
      <div className='max-w-[1500px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#8892b0]'>Hi, my name is </p>
        <h1 data-text="Saad&nbsp;Naeem">Saad Naeem</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Full-Time University Student</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a full-time university student attending University of Western
          Ontario for engineering, aiming to specialize in software engineering.
          I'm focused on creating various products and applications with the aim
          to benefit the world.</p>

        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>

        <div className='flex w-full justify-between max-w-[400px] m-1 py-5'>
          <div className='rounded-full shadow-lg shadow-[#040c16] p-7 cursor-pointer hover:scale-110 ease-in duration-50'>
            <FaLinkedinIn color="white" fontSize="2.0em" />
          </div>
          <div className='rounded-full shadow-lg shadow-[#040c16] p-7 cursor-pointer hover:scale-110 ease-in duration-50'>
            <FaGithub color="white" fontSize="2.0em" />
          </div>
          <div className='rounded-full shadow-lg shadow-[#040c16] p-7 cursor-pointer hover:scale-110 ease-in duration-50'>
            <AiOutlineMail color="white" fontSize="2.0em" />
          </div>
          <div className='rounded-full shadow-lg shadow-[#040c16] p-7 cursor-pointer hover:scale-110 ease-in duration-50'>
            <BsFillPersonLinesFill color="white" fontSize="2.0em" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home