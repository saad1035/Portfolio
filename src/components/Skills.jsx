import React from 'react'

import HTML from '../assets/html (1).png';
import CSS from '../assets/CSS Logo.png';
import Github from '../assets/Github Logo.png';
import Java from '../assets/Java Logo.png';
import ReactJS from '../assets/React JS Logo.png';
import JavaScript from '../assets/JavaScript Logo.png';
import Python from '../assets/Python Logo.png';
import SQL from '../assets/SQL Logo.png';
import C from '../assets/C Logo.png';
import CPlusPlus from '../assets/C++ Logo.svg.png';
import CSharp from '../assets/CSharp Logo.webp';
import MATLAB from '../assets/Matlab Logo.png';
import NodeJS from '../assets/Node Logo.png';
import Angular from '../assets/Angular Logo.webp';
import Express from '../assets/Express Logo.png'
import Bootstrap from '../assets/Bootstrap Logo.png';
import Tailwind from '../assets/Tailwind Logo.png';
import Pandas from '../assets/Pandas Logo.png';
import Numpy from '../assets/NumPy Logo.png';
import Scikit from '../assets/SciKitLearn Logo.png';
import Statsmodels from '../assets/StatsModels Logo.png';
import Matplotlib from '../assets/Matplotlib Logo.png';
import AWS from '../assets/AWS Logo.png';
import Docker from '../assets/Docker Logo.png';
import Git from '../assets/Git Logo.png';
import Figma from '../assets/Figma Logo.png';
import VSCode from '../assets/VS Logo.png';
import Eclipse from '../assets/Eclipse Logo 1.png';
import IntelliJ from '../assets/Intellij Logo.png';
import Windows from '../assets/Windows Logo.png';
import MacOS from '../assets/MacOS Logo.png';
import Jira from '../assets/Jira Logo.png';
import Confluence from '../assets/Confluence Logo.png';
import Nginx from '../assets/Nginx Logo.webp';
import Microsoft from '../assets/Microsoft Office Logo.png';

const Skills = () => {
    return (
        <div name='skills' className='relative w-full min-h-screen bg-[#0a192f] text-gray-300 pt-20'>
            {/* Container */}
            <div className='relative z-10 max-w-[1500px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                    <span className="text-pink-600">&lt;</span> Skills <span className="text-pink-600">/&gt;</span>
                </p>
                    <p className='py-6 -mb-8'>// These are the technologies I've worked with...</p>
                </div>

                <div className='py-8'>
                    <div className="flex items-center justify-start">
                        <h3 className="text-2xl font-semibold mb-4 border-b-2 border-pink-600 inline-block">Languages</h3>
                        <span className="italic text-sm text-[#8892b0] ml-4 whitespace-nowrap">- the technical kind :)</span>
                    </div>
                    <div className='w-full grid grid-cols-4 sm:grid-cols-5 lg:grid-cols-7 gap-2 text-center'>
                        <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500 p-2 rounded-md bg-[#112240] flex flex-col justify-center items-center h-44'>
                            <img className='w-16 h-16 object-contain' src={Java} alt="Java Icon" />
                            <p className='mt-4 text-sm font-medium'>Java</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500 p-2 rounded-md bg-[#112240] flex flex-col justify-center items-center h-44'>
                            <img className='w-16 h-16 object-contain' src={JavaScript} alt="JavaScript Icon" />
                            <p className='mt-4 text-sm font-medium'>JavaScript</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500 p-2 rounded-md bg-[#112240] flex flex-col justify-center items-center h-44'>
                            <img className='w-16 h-16 object-contain' src={Python} alt="Python Icon" />
                            <p className='mt-4 text-sm font-medium'>Python</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500 p-2 rounded-md bg-[#112240] flex flex-col justify-center items-center h-44'>
                            <img className='w-16 h-16 object-contain' src={SQL} alt="SQL Icon" />
                            <p className='mt-4 text-sm font-medium'>SQL</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500 p-2 rounded-md bg-[#112240] flex flex-col justify-center items-center h-44'>
                            <img className='w-16 h-16 object-contain' src={C} alt="C Icon" />
                            <p className='mt-4 text-sm font-medium'>C</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500 p-2 rounded-md bg-[#112240] flex flex-col justify-center items-center h-44'>
                            <img className='w-16 h-16 object-contain' src={CPlusPlus} alt="CPlusPlus Icon" />
                            <p className='mt-4 text-sm font-medium'>C++</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500 p-2 rounded-md bg-[#112240] flex flex-col justify-center items-center h-44'>
                            <img className='w-16 h-16 object-contain' src={CSharp} alt="C# Icon" />
                            <p className='mt-4 text-sm font-medium'>C#</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500 p-2 rounded-md bg-[#112240] flex flex-col justify-center items-center h-44'>
                            <img className='w-16 h-16 object-contain' src={HTML} alt="HTML Icon" />
                            <p className='mt-4 text-sm font-medium'>HTML</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500 p-2 rounded-md bg-[#112240] flex flex-col justify-center items-center h-44'>
                            <img className='w-16 h-16 object-contain' src={CSS} alt="CSS Icon" />
                            <p className='mt-4 text-sm font-medium'>CSS</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500 p-2 rounded-md bg-[#112240] flex flex-col justify-center items-center h-44'>
                            <img className='w-16 h-16 object-contain' src={MATLAB} alt="MATLAB Icon" />
                            <p className='mt-4 text-sm font-medium'>MATLAB</p>
                        </div>
                    </div>
                </div>

                <div className='py-8'>
                    <h3 className="text-2xl font-semibold mb-4 border-b-2 border-pink-600 inline-block">Frameworks</h3>
                    <div className='w-full grid grid-cols-4 sm:grid-cols-5 lg:grid-cols-7 gap-2 text-center'>
                        <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500 p-2 rounded-md bg-[#112240] flex flex-col justify-center items-center h-44'>
                            <img className='w-16 h-16 object-contain' src={ReactJS} alt="React Icon" />
                            <p className='mt-4 text-sm font-medium'>React</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500 p-2 rounded-md bg-[#112240] flex flex-col justify-center items-center h-44'>
                            <img className='w-16 h-16 object-contain' src={NodeJS} alt="NodeJS Icon" />
                            <p className='mt-4 text-sm font-medium'>Node.js</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500 p-2 rounded-md bg-[#112240] flex flex-col justify-center items-center h-44'>
                            <img className='w-16 h-16 object-contain' src={Angular} alt="Angular Icon" />
                            <p className='mt-4 text-sm font-medium'>Angular</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500 p-2 rounded-md bg-[#112240] flex flex-col justify-center items-center h-44'>
                            <img className='w-16 h-16 object-contain' src={Express} alt="Express Icon" />
                            <p className='mt-4 text-sm font-medium'>Express</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500 p-2 rounded-md bg-[#112240] flex flex-col justify-center items-center h-44'>
                            <img className='w-16 h-16 object-contain' src={Bootstrap} alt="Bootstrap Icon" />
                            <p className='mt-4 text-sm font-medium'>Bootstrap</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500 p-2 rounded-md bg-[#112240] flex flex-col justify-center items-center h-44'>
                            <img className='w-16 h-16 object-contain' src={Tailwind} alt="Tailwind Icon" />
                            <p className='mt-4 text-sm font-medium'>TailwindCSS</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500 p-2 rounded-md bg-[#112240] flex flex-col justify-center items-center h-44'>
                            <img className='w-16 h-16 object-contain' src={Pandas} alt="Pandas Icon" />
                            <p className='mt-4 text-sm font-medium'>pandas</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500 p-2 rounded-md bg-[#112240] flex flex-col justify-center items-center h-44'>
                            <img className='w-16 h-16 object-contain' src={Numpy} alt="Numpy Icon" />
                            <p className='mt-4 text-sm font-medium'>NumPy</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500 p-2 rounded-md bg-[#112240] flex flex-col justify-center items-center h-44'>
                            <img className='w-16 h-16 object-contain' src={Scikit} alt="Scikit Icon" />
                            <p className='mt-4 text-sm font-medium'>scikit-learn</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500 p-2 rounded-md bg-[#112240] flex flex-col justify-center items-center h-44'>
                            <img className='w-16 h-16 object-contain' src={Statsmodels} alt="Statsmodels Icon" />
                            <p className='mt-4 text-sm font-medium'>Statsmodels</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500 p-2 rounded-md bg-[#112240] flex flex-col justify-center items-center h-44'>
                            <img className='w-16 h-16 object-contain' src={Matplotlib} alt="Matplotlib Icon" />
                            <p className='mt-4 text-sm font-medium'>Matplotlib</p>
                        </div>
                    </div>
                </div>

                <div className='py-8'>
                    <h3 className="text-2xl font-semibold mb-4 border-b-2 border-pink-600 inline-block">Tools</h3>
                    <div className='w-full grid grid-cols-4 sm:grid-cols-5 lg:grid-cols-7 gap-2 text-center'>
                        <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500 p-2 rounded-md bg-[#112240] flex flex-col justify-center items-center h-44'>
                            <img className='w-16 h-16 object-contain' src={AWS} alt="AWS Icon" />
                            <p className='mt-4 text-sm font-medium'>AWS</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500 p-2 rounded-md bg-[#112240] flex flex-col justify-center items-center h-44'>
                            <img className='w-16 h-16 object-contain' src={Docker} alt="Docker Icon" />
                            <p className='mt-4 text-sm font-medium'>Docker</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500 p-2 rounded-md bg-[#112240] flex flex-col justify-center items-center h-44'>
                            <img className='w-16 h-16 object-contain' src={Git} alt="Git Icon" />
                            <p className='mt-4 text-sm font-medium'>Git</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500 p-2 rounded-md bg-[#112240] flex flex-col justify-center items-center h-44'>
                            <img className='w-16 h-16 object-contain' src={Github} alt="Github Icon" />
                            <p className='mt-4 text-sm font-medium'>Github</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500 p-2 rounded-md bg-[#112240] flex flex-col justify-center items-center h-44'>
                            <img className='w-16 h-16 object-contain' src={Figma} alt="Figma Icon" />
                            <p className='mt-4 text-sm font-medium'>Figma</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500 p-2 rounded-md bg-[#112240] flex flex-col justify-center items-center h-44'>
                            <img className='w-16 h-16 object-contain' src={VSCode} alt="VSCode Icon" />
                            <p className='mt-4 text-sm font-medium'>Visual Studio Code</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500 p-2 rounded-md bg-[#112240] flex flex-col justify-center items-center h-44'>
                            <img className='w-16 h-16 object-contain' src={Eclipse} alt="Eclipse Icon" />
                            <p className='mt-4 text-sm font-medium'>Eclipse</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500 p-2 rounded-md bg-[#112240] flex flex-col justify-center items-center h-44'>
                            <img className='w-16 h-16 object-contain' src={IntelliJ} alt="IntelliJ Icon" />
                            <p className='mt-4 text-sm font-medium'>IntelliJ</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500 p-2 rounded-md bg-[#112240] flex flex-col justify-center items-center h-44'>
                            <img className='w-16 h-16 object-contain' src={Windows} alt="Windows Icon" />
                            <p className='mt-4 text-sm font-medium'>Windows</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500 p-2 rounded-md bg-[#112240] flex flex-col justify-center items-center h-44'>
                            <img className='w-16 h-16 object-contain' src={MacOS} alt="MacOS Icon" />
                            <p className='mt-4 text-sm font-medium'>MacOS</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500 p-2 rounded-md bg-[#112240] flex flex-col justify-center items-center h-44'>
                            <img className='w-16 h-16 object-contain' src={Jira} alt="Jira Icon" />
                            <p className='mt-4 text-sm font-medium'>Jira</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500 p-2 rounded-md bg-[#112240] flex flex-col justify-center items-center h-44'>
                            <img className='w-16 h-16 object-contain' src={Confluence} alt="Confluence Icon" />
                            <p className='mt-4 text-sm font-medium'>Confluence</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500 p-2 rounded-md bg-[#112240] flex flex-col justify-center items-center h-44'>
                            <img className='w-16 h-16 object-contain' src={Nginx} alt="Nginx Icon" />
                            <p className='mt-4 text-sm font-medium'>Nginx</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500 p-2 rounded-md bg-[#112240] flex flex-col justify-center items-center h-44'>
                            <img className='w-16 h-16 object-contain' src={Microsoft} alt="Microsoft Icon" />
                            <p className='mt-4 text-sm font-medium'>Microsoft</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills