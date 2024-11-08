'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Github, Globe } from 'lucide-react';

const experiences = [
    {
        name: 'Portfolio',
        habilities: 'Next.js, Tailwind CSS, TypeScript, React',
        description: 'Developed a personal portfolio website using Next.js, Tailwind CSS, and TypeScript. The project highlights my skills, experiences, and past projects through a clean, responsive, and modern design. The portfolio is optimized for fast loading, intuitive navigation, and showcases my expertise in frontend technologies. The project served as both a professional showcase and a sandbox for experimenting with new design and development techniques.',
        image: '/portfolio.png',
        github: 'https://github.com/PablolzDev/Portfolio-Next',
        demo: 'https://pablolz.xyz/'
    },
    {
        name: 'Job Find',
        habilities: 'Next.js, Sass, TypeScript, React',
        description: 'Job Find is a web application that serves as a job vacancy and company management system. The project implemented the Atomic Design methodology to create a modular and scalable UI, and utilized Sass with a modular approach to style the application.',
        image: '/job.png',
        github: 'https://github.com/PablolzDev/job-find',
        demo: 'https://job-find-theta.vercel.app/vacancies'
    },
    {
        name: 'More Projects Coming Soon',
        habilities: '',
        description: '',
        image: '/1.png',
        github: '',
        demo: ''
    }
];

export function ExperienceSection() {
    const [selectedExperience, setSelectedExperience] = useState(0);
    const [imageError, setImageError] = useState(false);

    const handleImageError = () => {
        setImageError(true);
    };

    return (
        <div className="w-full">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 lg:mb-11">Projects</h2>

            {/* Main content container */}
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                {/* Sidebar navigation */}
                <div className="w-full lg:w-1/4">
                    <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0">
                        {experiences.map((exp, index) => (
                            <div
                                key={exp.name}
                                className={`flex-shrink-0 lg:flex-shrink cursor-pointer p-3 rounded-lg transition-all duration-200 ${
                                    selectedExperience === index
                                        ? 'bg-green-900 shadow-lg'
                                        : index === experiences.length - 1
                                        ? 'cursor-not-allowed opacity-50'
                                        : 'hover:bg-green-900/20'
                                }`}
                                onClick={() => {
                                    if (index !== experiences.length - 1) {
                                        setSelectedExperience(index);
                                        setImageError(false);
                                    }
                                }}
                            >
                                <span
                                    className={`whitespace-nowrap ${
                                        selectedExperience === index
                                            ? 'text-green-300'
                                            : 'text-gray-400 hover:text-green-300'
                                    }`}
                                >
                                    {exp.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Content area */}
                <div className="w-full lg:w-3/4">
                    <div className="flex flex-col sm:flex-row gap-6">
                        {/* Image container */}
                        <div className="w-full sm:w-1/2">
                            <div className="relative aspect-video w-full">
                                {!imageError ? (
                                    <Image
                                        src={experiences[selectedExperience].image}
                                        alt={`${experiences[selectedExperience].name} image`}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                        className="rounded-lg"
                                        onError={handleImageError}
                                    />
                                ) : (
                                    <div className="w-full h-full bg-gray-200 flex items-center justify-center rounded-lg">
                                        <span className="text-gray-500">More Projects Coming Soon</span>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Text content */}
                        <div className="w-full sm:w-1/2 space-y-4">
                            <h3 className="font-semibold text-lg text-green-300">
                                {experiences[selectedExperience].name}
                            </h3>
                            <p className="text-purple-400">
                                {experiences[selectedExperience].habilities}
                            </p>
                            <p className="text-sm text-gray-300">
                                {experiences[selectedExperience].description}
                            </p>
                            
                            {/* Project links */}
                            {experiences[selectedExperience].github || experiences[selectedExperience].demo ? (
                                <div className="flex gap-4 pt-4">
                                    {experiences[selectedExperience].github && (
                                        <a
                                            href={experiences[selectedExperience].github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm text-white transition-colors duration-200"
                                        >
                                            <Github size={16} />
                                            GitHub
                                        </a>
                                    )}
                                    {experiences[selectedExperience].demo && (
                                        <a
                                            href={experiences[selectedExperience].demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-4 py-2 bg-green-900 hover:bg-green-800 rounded-lg text-sm text-white transition-colors duration-200"
                                        >
                                            <Globe size={16} />
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}