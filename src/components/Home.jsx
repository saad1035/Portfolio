import React, { useState } from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { Link } from 'react-scroll'
import { Button } from 'react-scroll'
import PropTypes from 'prop-types'

const Home = () => {

  const Button = ({ text, onClick, className }) => {
    return <button onClick={onClick}
      className={className} >{text}</button>
  }

  Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
  }

  const [click, setClick] = useState(false)
  const closeMenu = () => setClick(false)

  const interest = ["Full-Time University Student", "Western Mustang", "Weightlifter", "Computer Science Enthusiast", "Aspiring Software Engineer", "Book Worm", "Food Lover", "Avid Gamer", "Technophile"];
  const [interestIndex, setIndex] = useState(0);

  return (
    <div name='hero' id='hero' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1500px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#8892b0] font-semibold'>Hi, my name is </p>
        <h1 data-text="Saad&nbsp;Naeem">Saad Naeem</h1>

        <div className='grid grid-cols-7'>
          <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm a </h2>
          <a class="relative px-10 py-3 font-bold text-white rounded-lg group ">
            <span class="absolute inset-0 w-[800px] h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-red-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
            <span class="absolute inset-0 w-[800px] h-full transition duration-300 transform translate-x-1 translate-y-1 bg-pink-600 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>
            <span class="absolute"><Button className="whitespace-nowrap absolute h-18 text-xl sm:text-5xl font-bold text-white" onClick={() => setIndex((interestIndex + 1) % interest.length)} text={interest[interestIndex]} /></span>
          </a>
        </div>

        <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a full-time university student attending University of Western
          Ontario for engineering, aiming to specialize in software engineering.
          I'm focused on creating various products and applications with the aim
          to benefit the world.</p>

        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            <Link to="work" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>
              View Work
            </Link>
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>

        <div className='flex w-full justify-between max-w-[400px] m-1 py-5'>
          <div className='rounded-full shadow-lg shadow-[#040c16] p-7 cursor-pointer hover:scale-110 hover:bg-pink-600 ease-in duration-200'>
            <a href="linkedin.com/in/saad-naeem-3a07ab216" target="_blank" rel="noreferrer">
              <FaLinkedinIn color="white" fontSize="2.0em" />
            </a>
          </div>
          <div className='rounded-full shadow-lg shadow-[#040c16] p-7 cursor-pointer hover:scale-110 hover:bg-pink-600 ease-in duration-200'>
            <a href="https://github.com/saad1035" target="_blank" rel="noreferrer">
              <FaGithub color="white" fontSize="2.0em" />
            </a>
          </div>
          <div className='rounded-full shadow-lg shadow-[#040c16] p-7 cursor-pointer hover:scale-110 hover:bg-pink-600 ease-in duration-200'>
            <a href="mailto:naeemsaad1035@gmail.com">
              <AiOutlineMail color="white" fontSize="2.0em" />
            </a>
          </div>
          <div className='rounded-full shadow-lg shadow-[#040c16] p-7 cursor-pointer hover:scale-110 hover:bg-pink-600 ease-in duration-200'>
            <a href="https://www.instagram.com/saad.1035/" target="_blank" rel="noreferrer">
              <BsInstagram color="white" fontSize="2.0em" />
            </a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home