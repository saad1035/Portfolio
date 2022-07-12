import React from 'react'

import HTML from '../assets/html (1).png';
import CSS from '../assets/CSS Logo.png';
import Github from '../assets/Github Logo.png';
import Java from '../assets/Java Logo.png';
import ReactJS from '../assets/React JS Logo.png';
import JavaScript from '../assets/JavaScript Logo.png';

const Skills = () => {
    return (
        <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            {/* Container */}
            <div className='max-w-[1500px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
                    <p className='py-4'>// These are the technologies I've worked with...</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
                    <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500'>
                        <img className='w-20 mx-auto py-10' src={HTML} alt="HTML Icon" />
                        <p className='my-4'>HTML</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500'>
                        <img className='w-20 mx-auto py-10' src={CSS} alt="CSS Icon" />
                        <p className='my-4'>CSS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500'>
                        <img className='w-20 mx-auto py-10' src={Github} alt="Github Icon" />
                        <p className='my-4'>Github</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500'>
                        <img className='w-20 mx-auto py-7' src={Java} alt="Java Icon" />
                        <p className='my-4'>Java</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500'>
                        <img className='w-20 mx-auto py-12' src={ReactJS} alt="ReactJS Icon" />
                        <p className='my-4'>ReactJS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500'>
                        <img className='w-20 mx-auto py-10' src={JavaScript} alt="JavaScript Icon" />
                        <p className='my-4'>JavaScript</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Skills