import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faDev, faFigma, faGoogleDrive} from '@fortawesome/free-brands-svg-icons';
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
            devpost: "https://devpost.com/software/re-view",
            languages: ["React", "JavaScript", "CSS", "HTML", "Python", "Cohere", "Natural Language Processing", "AI"],
            summary: "Analyzes and summarizes YouTube product reviews to determine sentiment",
            overview: "YouTube consumers often face frustration with excessively long product reviews filled with midroll ads that fail to provide valuable information. To solve this issue, we developed an application that enables users to extract essential information from a video without wasting time. The application processes auto-generated closed captions, punctuates them, and utilizes Cohere's NLP toolkit to determine the sentiment (positive or negative) and summarize the video's content. This information is then displayed to users through a Chrome extension for ease of use.",
            lessons: [
                "How to develop Chrome extensions",
                "How to integrate and utilize Cohere for sentiment analysis and summarization.",
                "Efficiently working with auto-generated YouTube closed captions.",
                "Leveraging the puntuator2 library to improve text processing.",
                "Combining multiple new technologies and transitioning seamlessly between ideas.",
            ],

        },
        {
            id:2,
            title: "Track",
            description: "Family expense tracker for budgeting and organization",
            image: track,
            github: "https://github.com/saad1035/TrackUI-HT622",
            devpost: "https://devpost.com/software/track-pwrn7y",
            languages: ["React", "Node.js", "Express.js", "JavaScript", "MongoDB", "Bootstrap", "CSS", "TailwindCSS"],
            summary: "Track is an expense tracker website designed to help households and individuals improve their budgeting and organizational skills while simplifying the process of expense tracking. The platform features two core components: a Family Expense Tracker, which allows owners to oversee all family members' expenses and assign permissions, and a Personal Expense Tracker, enabling individual users to view, add, and manage their personal expenses. Built using the MERN stack, the application integrates seamless front-end design with a robust back-end, providing users with a user-friendly and efficient experience.",
            lessons: [
                "How to properly use embedded objects in MongoDB to ensure changes are reflected across references.",
                "Utilizing the state hook in ReactJS for effective state management.",
                "Implementing React Routers for efficient navigation within the application.",
                "Creating and integrating pop-ups for dynamic data display.",
                "Designing and maintaining a consistent theme with responsive layouts using Tailwind CSS.",
            ],
        },
        {
            id:3,
            title: "Destify",
            description: "Helps users create and share lists of favorite destinations",
            image: destify,
            github: "https://github.com/saad1035/Destify",
            languages: ["React", "JavaScript", "MongoDB", "Node.js", "Express.js", "HTML", "CSS", "JWT", "AWS", "Bcrypt"],
            summary: "A full-stack web application enabling users to create, manage, and share destination lists with authentication and personalized features.",
            overview: "This project is a robust, full-stack web application that empowers users to manage and share destination lists with advanced features like public/private visibility, collaborative reviews, and personalized recommendations. Built with a focus on security and usability, it offers role-based authentication, dynamic search functionality, and responsive design for seamless access across devices. With administrative tools for moderation and public-facing policies for privacy and security, this platform combines innovation and scalability to deliver an exceptional user experience.",
            lessons: [
                "Built secure role-based authentication using JWTs with email verification.",
                "Implemented advanced backend security measures like bcrypt hashing and input sanitization.",
                "Developed robust role-based access control for protected routes.",
            ],
        },
        {
            id:4,
            title: "Seniors In Tech",
            description: "Website for displaying Seniors In Tech club information",
            image: sit,
            github: "https://github.com/saad1035/SIT",
            figma: "https://www.figma.com/design/Qr2jPuEMmKUHQahsXsbIT1/Seniors-in-IT-Website-Mock-Up?node-id=1-1404",
            languages: ["React", "JavaScript", "CSS", "Figma", "Vercel"],
            summary: "A platform dedicated to connecting seniors with technology resources, events, and support to foster digital inclusivity.",
            overview: "This project is a platform designed to bridge the digital divide by connecting seniors with valuable technology resources and support. It provides an intuitive interface for users to explore events, courses, and public initiatives tailored to enhance their understanding and usage of technology. The platform emphasizes accessibility and inclusivity, offering seniors a space to learn, connect, and grow in a technology-driven world. Through its user-friendly design and comprehensive features, the platform aims to empower seniors with the skills and knowledge necessary to navigate the digital age confidently.",
            lessons: [
                "Creating responsive designs tailored for accessibility across multiple devices.",
                "Using Figma to ideate and create mockups.",
                "Structuring and optimizing React components for scalability and maintainability.",
                "Scheduling and working in a group of five to collaborate and build a responsive website."
            ],
        },
        {
            id:5,
            title: "Taskly",
            description: "A Java app combining a calendar and to-do list for better organization",
            image: taskly,
            github: "https://github.com/saad1035/Taskly",
            languages: ["Java", "JavaFX"],
            summary: "Personal calendar and to-do list java application to increase the productivity and organization of the user",
            overview: "Taskly is a personal calendar application designed to revolutionize the way users stay organized and productive. Built entirely in Java, this application seamlessly integrates a fully functional calendar and to-do list into one cohesive platform, addressing the need for streamlined task and event management. Taskly allows users to create secure accounts, ensuring privacy while providing personalized access to features like adding and managing tasks and events. It goes beyond traditional applications by incorporating a unique Upcoming Events and Tasks feature, offering users reminders of activities scheduled within the next two weeks. Additionally, Taskly includes a settings feature to update personal information and profile pictures, along with a comprehensive help section to guide users through its intuitive interface. By combining advanced features and a user-focused design, Taskly empowers individuals to stay on top of their commitments and achieve greater efficiency in their daily lives.",
            lessons: [
                "Utilizing Java GUI to create Java applications",
                "Mastered the implementation of Object-Oriented Programming (OOP) principles to create a cohesive and modular application.",
                "Learned the importance of commitment and time management, completing the project while overcoming personal challenges such as illness.",
            ],
        },
        {
            id:6,
            title: "Campfire Circle Western",
            description: "A club website to showcase upcoming events and information",
            image: campfireCircle,
            github: "https://github.com/dbazinag/WDSCampfireCircle",
            figma: "https://www.figma.com/design/adXW3glQKoJj0DHNhgFz4h/Campfire-Circle-Western?node-id=0-1&p=f",
            languages: ["React", "JavaScript", "CSS", "Figma"],
            summary: "A fundraising website designed for a Western University club to support sending children and families affected by childhood cancer to camp.",
            overview: "This project is a fundraising website created for a Western University club dedicated to supporting children and families affected by childhood cancer. The website provides a central platform to raise awareness about the club's mission, showcase upcoming events, and encourage donations to help send these families to camp. Through a visually appealing design inspired by Figma mockups, the website emphasizes ease of use and accessibility, ensuring users can learn about the cause, participate in events, and contribute to making a meaningful impact in the lives of those affected. The platform effectively combines engaging visuals with functionality to amplify the club's reach and fundraising efforts.",
            lessons: [
                "Gained experience in effective communication and collaboration within a group setting, ensuring alignment between design, development, and content creation.",
                "Understood the importance of designing and developing an application with a meaningful mission, focusing on usability to maximize impact.",
                "Learned to approach application design with empathy, ensuring the platform met the needs of families affected by childhood cancer while making the donation process intuitive and seamless.",
            ],
        },
        {
            id:7,
            title: "Coin Chase Chronicles",
            description: "Subway surfers like unity game",
            image: unity,
            github: "https://github.com/saad1035/CoinChaseChronicles",
            demo: "https://drive.google.com/file/d/1wGPxr65G_KRpJoqOnMVx0UV-YG45vh2P/view?usp=sharing",
            languages: ["Unity", "C#", "Unity Asset Store", "Slack"],
            summary: "A 3D Unity game where players navigate through multiple levels, collect coins, and overcome dynamic obstacles with varying speeds, showcasing teamwork and software construction skills.",
            overview: "Coin Chase Chronicles is a 3D Unity game developed collaboratively in a team setting as part of a software construction course. The game challenges players to navigate through multiple levels, each filled with obstacles and varying object speeds, while collecting coins to progress. With engaging gameplay mechanics, dynamic level design, and strategic challenges, the project demonstrates a combination of technical skills and creative design to deliver an immersive gaming experience.",
            lessons: [
                "Learned to collaborate effectively within a team to design and develop a complete Unity game.",
                "Gained hands-on experience with Unity's 3D environment and physics engine for dynamic level creation.",
                "Developed skills in C# scripting for implementing gameplay mechanics and player interactions.",
                "Discovered the importance of iterative design and testing for refining gameplay and user experience.",
            ],
        },
        {
            id:8,
            title: "Portfolio",
            description: "You're here :)",
            image: portfolio,
            github: "https://github.com/saad1035/Portfolio",
            languages: ["React", "JavaScript", "TailwindCSS", "CSS", "Hostinger"],
            summary: "Portfolio created to showcase my work, experience, and skills!",
            overview: ( 
                <span style={{ fontSize: "2rem" }}>
                    😎🤓🙂🤥😼🤖🎃🥵😋😝🤠👻😁😚
                </span>
            ),
            lessons: [
                "How to showcase my brilliant and amazing work!!!",
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
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                    <span className="text-pink-600">&lt;</span> Projects <span className="text-pink-600">/&gt;</span>
                </p>
                    <p className='py-6 -mb-8'>// Check out some of my completed projects</p>
                </div>

                {/* Project Grid */}
                <div className="grid grid-cols-3 gap-4 relative z-10">
                    {projects.slice(0, Math.floor(projects.length / 3) * 3).map((project) => (
                        <div
                            key={project.id}
                            style={{ backgroundImage: `url(${project.image})` }}
                            className={`shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div relative overflow-hidden`}
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

                    {projects.length % 3 === 2 && (
                        <div className="grid grid-cols-3 gap-4 col-span-3"  style={{ marginLeft: "250px", marginRight: "auto", width: "100%" }}>
                        <div
                            key={projects[projects.length - 2].id}
                            style={{ backgroundImage: `url(${projects[projects.length - 2].image})` }}
                            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-[#0a192f] via-[#1e3163] to-[#290a63] opacity-20 group-hover:opacity-90 transition duration-300 ease-in-out rounded-md"></div>
                            <div className="opacity-0 group-hover:opacity-100 relative z-10 flex flex-col items-center">
                                <span className="text-2xl font-bold text-white tracking-wider">{projects[projects.length - 2].title}</span>
                                <span className="text-sm text-gray-300 italic mt-2">{projects[projects.length - 2].description}</span>
                                <div className="pt-8 text-center">
                                    <button
                                        onClick={() => openModal(projects[projects.length - 2])}
                                        className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                                    >
                                        Info
                                    </button>
                                    <a
                                        href={projects[projects.length - 2].github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                                    >
                                        Code
                                    </a> 
                                </div>
                            </div>
                        </div>

                        <div
                            key={projects[projects.length - 1].id}
                            style={{ backgroundImage: `url(${projects[projects.length - 1].image})` }}
                            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-[#0a192f] via-[#1e3163] to-[#290a63] opacity-20 group-hover:opacity-90 transition duration-300 ease-in-out rounded-md"></div>
                            <div className="opacity-0 group-hover:opacity-100 relative z-10 flex flex-col items-center">
                                <span className="text-2xl font-bold text-white tracking-wider">{projects[projects.length - 1].title}</span>
                                <span className="text-sm text-gray-300 italic mt-2">{projects[projects.length - 1].description}</span>
                                <div className="pt-8 text-center">
                                    <button
                                        onClick={() => openModal(projects[projects.length - 1])}
                                        className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                                    >
                                        Info
                                    </button>
                                    <a
                                        href={projects[projects.length - 1].github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                                    >
                                        Code
                                    </a> 
                                </div>
                            </div>
                        </div>
                    </div>
                    )}
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

                        {/* Buttons */}
                        <div className="flex justify-center gap-6 mt-6 mb-8">
                            <a
                                href={selectedProject.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 bg-pink-600 text-white rounded-lg text-md font-semibold hover:bg-pink-700 transition transform hover:scale-105"
                            >
                                <FontAwesomeIcon icon={faGithub} /> GitHub
                            </a>

                            {selectedProject.devpost && (
                                <a
                                    href={selectedProject.devpost}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-6 py-3 bg-pink-600 text-white rounded-lg text-md font-semibold hover:bg-pink-700 transition transform hover:scale-105"
                                >
                                    <FontAwesomeIcon icon={faDev} /> Devpost
                                 </a>
                            )}

                            {selectedProject.figma && (
                                <a
                                    href={selectedProject.figma}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-6 py-3 bg-pink-600 text-white rounded-lg text-md font-semibold hover:bg-pink-700 transition transform hover:scale-105"
                                >
                                    <FontAwesomeIcon icon={faFigma} /> Figma
                                </a>
                            )}

                            {selectedProject.demo && (
                                <a
                                    href={selectedProject.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-6 py-3 bg-pink-600 text-white rounded-lg text-md font-semibold hover:bg-pink-700 transition transform hover:scale-105"
                                >
                                    <FontAwesomeIcon icon={faGoogleDrive} /> Demo
                                </a>
                            )}
                        </div>

                        {/* Title */}
                        <h2 className='text-3xl font-bold text-white mb-2'>
                            {selectedProject.title}
                        </h2>
                        <p className="text-gray-300 mb-6">{selectedProject.summary}</p>

                        {/* Languages Used */}
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold text-white mb-2">Tools Used</h3>
                            <div className="flex flex-wrap gap-2">
                                {selectedProject.languages.map((lang, index) => (
                                    <span
                                        key={index}
                                        className="bg-[#112240] text-gray-300 px-3 py-2 rounded-md text-sm"
                                    >
                                        {lang}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Overview */}
                        <div className="mb-6">
                            <h2 className="text-xl font-semibold text-white mb-3">Overview</h2>
                            <p className="text-md text-gray-300 text-sm">
                                {selectedProject.overview}
                            </p>
                        </div>

                        {/* Things I've Learned */}
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold text-white mb-2">Things I've Learned</h3>
                            <ul className="text-gray-300 list-disc pl-6 text-sm">
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