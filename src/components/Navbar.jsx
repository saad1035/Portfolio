import React, { useState } from 'react'
import { Link } from 'react-scroll'
import SaadLogo from "../assets/Logo.png"
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  const [click, setClick] = useState(false)
  const closeMenu = () => setClick(false)

  return (
    <div className='fixed w-full h-[80px] flex justify-between 
    items-center px-4 bg-[#0a192f] text-[#8892b0] z-50'>
      <div>
        <img src={SaadLogo} alt='Logo Image' style={{ width: '70px' }} />
      </div>

      {/* Menu */}
      <ul className={'hidden md:flex'}>
        <li>
          <Link className='hover:border-b-4 hover:border-pink-600 hover:pb-2 font-bold' to="hero" spy={true} smooth={true} offset={0} duration={500} onClick={closeMenu}>Home</Link>
        </li>
        <li>
          <Link className='hover:border-b-4 hover:border-pink-600 hover:pb-2 font-bold' to="about" spy={true} smooth={true} offset={-60} duration={500} onClick={closeMenu}>About</Link>
        </li>
        <li>
          <Link className='hover:border-b-4 hover:border-pink-600 hover:pb-2 font-bold' to="skills" spy={true} smooth={true} offset={0} duration={500} onClick={closeMenu}>Skills</Link>
        </li>
        <li>
          <Link className='hover:border-b-4 hover:border-pink-600 hover:pb-2 font-bold' to="work" spy={true} smooth={true} offset={0} duration={500} onClick={closeMenu}>Work</Link>
        </li>
        <li>
          <Link className=' hover:border-pink-600 hover:border-b-4 hover:pb-2 font-bold' to="contact" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Contact</Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {click ? (<FaTimes size={30} style={{ color: 'white' }} />)
          : (<FaBars size={30} style={{ color: 'white' }} />)}
      </div>

      {/* Mobile menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'>
          <Link to="hero" spy={true} smooth={true} offset={50} duration={500} >Home</Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link to="about" spy={true} smooth={true} offset={0} duration={500} >About</Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link to="skills" spy={true} smooth={true} offset={50} duration={500} >Skills</Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link to="work" spy={true} smooth={true} offset={50} duration={500} >Work</Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link to="contact" spy={true} smooth={true} offset={50} duration={500} >Contact</Link>
        </li>
      </ul>

    </div>
  )
}

export default Navbar