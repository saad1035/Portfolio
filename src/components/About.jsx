import React from 'react'
import Headshot from '../assets/Headshot 1.jpg';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialOceanic } from 'react-syntax-highlighter/dist/esm/styles/prism';

const About = () => {
    const codeString = `
function getSaadBiography() {
    return {
        university: [
            "Western University"
        ],
        program: [
            "Software Engineering"
        ],
        year: 3,
        experience: {
            Anvil_Business_Center: "Software Developer Intern",
            Unionville_College: "STEM Instructor",
            Student_Works: "Sales Representative",
            Kumon: "Mathematics Tutor"
        },
        careerInterests: [
            "Software Engineering",
            "AI Applications",
            "Cyber Security",
            null // still figuring life out 
        ],
        funFact: [
            "test"
        ]
    };
}
`;

    return (
        <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300 relative'>
            <div className='max-w-[1500px] mx-auto flex flex-col justify-center h-full relative z-10'>
                <div className='max-w-[1500px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-left pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                            <span className="text-pink-600">&lt;</span> About <span className="text-pink-600">/&gt;</span>
                        </p>
                    </div>
                    
                </div>
                <p className='text-4xl font-bold'><span id="wave" className='pr-5' >👋</span>What's up, I'm Saad!</p>
                <div className='flex items-center gap-12 px-5 py-6'>
                    <div className='rounded-lg shadow-lg flex-grow' style={{
                        maxWidth: '60%',
                        minWidth: '500px',
                        backgroundColor: '#112240',
                        padding: '20px',
                        borderRadius: '20px',
                    }}>
                        <SyntaxHighlighter language="javascript" style={materialOceanic} customStyle={{
                                fontSize: '1.1rem',
                                padding: '15px',
                                borderRadius: '10px',
                                lineHeight: '1.5',
                        }}>
                            {codeString}
                        </SyntaxHighlighter>
                    </div>
                    <div className='rounded-xl shadow-xl shadow-[#040c16] hover:scale-105 transition-transform duration-300' style={{
                            maxWidth: '35%',
                            maxHeight: '800px',
                            overflow: 'hidden',
                        }}>
                        <img className="rounded-xl object-cover"
                            src={Headshot}
                            alt="Saad"
                            style={{width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                             }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;