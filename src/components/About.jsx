import React from 'react'
import about from '../assets/aboutpic.jpg';

const About = () => {
    return (

        <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className='max-w-[1500px] mx-auto flex flex-col justify-center h-full'>
                <div className='max-w-[1500px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-left pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                            About
                        </p>
                    </div>


                </div>
                <div className='max-w-[1500px] w-full md:grid grid-cols-3 sm:text-1xl gap-8 px-5'>
                    <div className='col-span-2' >
                        <p className='sm:text-left text-4xl font-bold'> Hi. I'm Saad, nice to meet you. Please take a look around!</p>
                        <div className='py-4'>
                            <p> I am passionate about my building excellent software that improves
                                the lives of thoes around me. I specialize in creating software for
                                clients ranging from individuals and small-businesses all the way
                                to large enterprise corporations. What would you do if you had a
                                software expert available at your fingertips?
                            </p>
                        </div>
                    </div>
                    <div className='h-auto shadow-xl shadow-[#040c16] rounded-xl flex p-4 hover:scale-105 ease-in duration-300'>
                        <img className='rounded-xl' src={about}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About