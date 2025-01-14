import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faDev } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';

import youtubeSentiment from '../assets/YoutubeSentiment.png';
import track from '../assets/Track.png';
import destify from '../assets/Destify.png';
import sit from '../assets/SIT.png';
import taskly from '../assets/Taskly.png';
import portfolio from '../assets/Portfolio.png';
import campfireCircle from '../assets/CampfireCircle.png';
import unity from '../assets/Unity.png';


const Work = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            id:1,
            title: "Youtube Sentiment Analyzer",
            description: "Analyzing YouTube reviews for summaries and sentiment insights",
            image: youtubeSentiment,
            github: "https://github.com/saad1035/Youtube-Sentiment-Analyzer",
            languages: ["React", "JavaScript", "CSS"],
            overview: "This project analyzes YouTube comments for sentiment and provides summary insights.",
            lessons: [
                "Mastered React hooks and state management.",
                "Improved API integration skills.",
                "Gained experience with text analysis tools.",
            ],

        },
        {
            id:2,
            title: "Track",
            description: "Family expense tracker for budgeting and organization",
            image: track,
            github: "https://github.com/saad1035/TrackUI-HT622",
            languages: ["React", "JavaScript", "CSS"],
            overview: "This project analyzes YouTube comments for sentiment and provides summary insights.",
            lessons: [
                "Mastered React hooks and state management.",
                "Improved API integration skills.",
                "Gained experience with text analysis tools.",
            ],
        },
        {
            id:3,
            title: "Destify",
            description: "Helps users create and share lists of favorite destinations",
            image: destify,
            github: "https://github.com/saad1035/Destify",
            languages: ["React", "JavaScript", "CSS"],
            overview: "This project analyzes YouTube comments for sentiment and provides summary insights.",
            lessons: [
                "Mastered React hooks and state management.",
                "Improved API integration skills.",
                "Gained experience with text analysis tools.",
            ],
        },
        {
            id:4,
            title: "Seniors In Tech",
            description: "Website for displaying Seniors In Tech club information",
            image: sit,
            github: "https://github.com/saad1035/SIT",
            languages: ["React", "JavaScript", "CSS"],
            overview: "This project analyzes YouTube comments for sentiment and provides summary insights.",
            lessons: [
                "Mastered React hooks and state management.",
                "Improved API integration skills.",
                "Gained experience with text analysis tools.",
            ],
        },
        {
            id:5,
            title: "Taskly",
            description: "A Java app combining a calendar and to-do list for better organization",
            image: taskly,
            github: "https://github.com/saad1035/Taskly",
            languages: ["React", "JavaScript", "CSS"],
            overview: "This project analyzes YouTube comments for sentiment and provides summary insights.",
            lessons: [
                "Mastered React hooks and state management.",
                "Improved API integration skills.",
                "Gained experience with text analysis tools.",
            ],
        },
        {
            id:6,
            title: "Campfire Circle Western",
            description: "A club website to showcase upcoming events and information",
            image: campfireCircle,
            github: "https://github.com/dbazinag/WDSCampfireCircle",
            devpost: "https://devpost.com/project-link",
            languages: ["React", "JavaScript", "CSS"],
            overview: "This project analyzes YouTube comments for sentiment and provides summary insights.",
            lessons: [
                "Mastered React hooks and state management.",
                "Improved API integration skills.",
                "Gained experience with text analysis tools.",
            ],
        },
        {
            id:7,
            title: "Coin Chase Chronicles",
            description: "Subway surfers like unity game",
            image: unity,
            github: "https://github.com/saad1035/CoinChaseChronicles",
            languages: ["React", "JavaScript", "CSS"],
            overview: "This project analyzes YouTube comments for sentiment and provides summary insights.",
            lessons: [
                "Mastered React hooks and state management.",
                "Improved API integration skills.",
                "Gained experience with text analysis tools.",
            ],
        },
        {
            id:8,
            title: "Portfolio",
            description: "You're here :)",
            image: portfolio,
            github: "https://github.com/saad1035/Portfolio",
            languages: ["React", "JavaScript", "CSS"],
            overview: "This project analyzes YouTube comments for sentiment and provides summary insights.",
            lessons: [
                "Mastered React hooks and state management.",
                "Improved API integration skills.",
                "Gained experience with text analysis tools.",
            ],
        },
    ];

    const openModal = (project) => {
        setSelectedProject(project);
    };

    const closeModel = () => {
        setSelectedProject(null);
    };

    return (
        <div name='work' className='w-full md:h-[1050px] text-gray-300 bg-[#0a192f] relative'>
            <div className='max-w-[1500px] mx-auto p-4 flex flex-col justify-center w-full h-full relative z-10'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
                    <p className='py-6 '>// Check out some of my recent work</p>
                </div>

                {/* Project Grid */}
                <div className="grid sm:grid-cols-3 gap-4 relative z-10">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            style={{ backgroundImage: `url(${project.image})` }}
                            className={`shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div relative overflow-hidden ${
                                index >= projects.length - (projects.length % 3 || 3) && projects.length % 3 === 2
                                    ? 'sm:col-span-1 sm:col-start-2' // Center-align if it's the last row with 2 items
                                    : ''
                            }`}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-[#0a192f] via-[#1e3163] to-[#290a63] opacity-20 group-hover:opacity-90 transition duration-300 ease-in-out rounded-md"></div>
                            <div className="opacity-0 group-hover:opacity-100 relative z-10 flex flex-col items-center">
                                <span className="text-2xl font-bold text-white tracking-wider">{project.title}</span>
                                <span className="text-sm text-gray-300 italic mt-2">{project.description}</span>
                                <div className="pt-8 text-center">
                                    <button
                                        onClick={() => openModal(project)}
                                        className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                                    >
                                        Info
                                    </button>
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                                    >
                                        Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedProject && (
                <div
                    className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-40 z-50"
                    onClick={closeModel}
                >
                    <div
                        className="relative p-8 rounded-lg shadow-2xl max-w-[1000px] bg-gradient-to-r from-[#0a192f] via-[#1e3163] to-[#290a63]"
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            background: "linear-gradient(to right, #0a192f, #1e3163, #290a63)",
                            boxShadow: "0 0 15px rgba(30, 49, 99, 0.4), 0 0 25px rgba(41, 10, 99, 0.5)",
                            borderRadius: "1.5rem",
                        }}
                    >
                        {/* Image */}
                        <img
                            src={selectedProject.image}
                            alt={selectedProject.title}
                            className="rounded-md w-full mb-6 max-h-56 object-cover border border-gray-700"
                        />

                        {/* Title */}
                        <h2 className='text-3xl font-bold text-white mb-4'>
                            {selectedProject.title}
                        </h2>
                        <p className="text-gray-300 mb-6">{selectedProject.overview}</p>

                        {/* Buttons */}
                        <div className="flex justify-center gap-6 mt-6">
                            <a
                                href={selectedProject.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 bg-pink-600 text-white rounded-lg text-md font-semibold hover:bg-pink-700 transition transform hover:scale-105"
                            >
                                <FontAwesomeIcon icon={faGithub} /> GitHub
                            </a>
                            <a
                                href={selectedProject.devpost}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 bg-pink-600 text-white rounded-lg text-md font-semibold hover:bg-pink-700 transition transform hover:scale-105"
                            >
                                <FontAwesomeIcon icon={faDev} /> Devpost
                            </a>
                        </div>
                        <div className="flex justify-end mt-8">
                            <button
                                onClick={closeModel}
                                className="px-6 py-3 bg-gray-700 text-white rounded-lg text-md font-semibold hover:bg-gray-600 transition transform hover:scale-105"
                            >
                                Close
                            </button>
                        </div>

                        {/* Languages Used */}
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold text-white mb-2">Languages Used</h3>
                            <div className="flex flex-wrap gap-3">
                                {selectedProject.languages.map((lang, index) => (
                                    <span
                                        key={index}
                                        className="bg-[#112240] text-gray-300 px-4 py-2 rounded-md text-sm"
                                    >
                                        {lang}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Overview */}
                        <div className="mb-6">
                            <h2 className="text-xl font-semibold text-white mb-3">Overview</h2>
                            <p className="text-md text-gray-300">
                                {selectedProject.overview}
                            </p>
                        </div>

                        {/* Things I've Learned */}
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold text-white mb-2">Things I've Learned</h3>
                            <ul className="text-gray-300 list-disc pl-6">
                                {selectedProject.lessons.map((lesson, index) => (
                                    <li key={index}>{lesson}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Close Button */}
                        <div className="flex justify-end mt-8">
                            <button
                                onClick={closeModel}
                                className="px-6 py-3 bg-gray-700 text-white rounded-lg text-md font-semibold hover:bg-gray-600 transition transform hover:scale-105"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Work