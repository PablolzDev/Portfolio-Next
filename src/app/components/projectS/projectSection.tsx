'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const experiences = [
    {
        name: 'Portfolio',
        habilities: 'Next.js, Tailwind CSS , TypeScript',
        description: 'Developed a personal portfolio website using Next.js, Tailwind CSS, and TypeScript. The project highlights my skills, experiences, and past projects through a clean, responsive, and modern design. The portfolio is optimized for fast loading, intuitive navigation, and showcases my expertise in frontend technologies. The project served as both a professional showcase and a sandbox for experimenting with new design and development techniques.',
        image: '/portfolio.png'
    },
    {
        name: 'MisTech',
        habilities: 'Software Developer',
        description: 'Developed innovative software solutions for various clients, focusing on web applications and mobile development. Collaborated in an agile team environment to deliver high-quality products.',
        image: '/portfolio.png'
    },
   
];

export function ExperienceSection() {
    const [selectedExperience, setSelectedExperience] = useState(0);
    const [imageError, setImageError] = useState(false);

    const handleImageError = () => {
        setImageError(true);
    };

    return (
        <div className="w-full">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 lg:mb-11" >Projects</h2>

            {/* Main content container */}
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8" >
                {/* Sidebar navigation */}
                <div className="w-full lg:w-1/4">
                    <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0">
                        {experiences.map((exp, index) => (
                            <div
                                key={exp.name}
                                className={`flex-shrink-0 lg:flex-shrink cursor-pointer p-3 rounded-lg transition-all duration-200 ${selectedExperience === index
                                    ? 'bg-green-900 shadow-lg'
                                    : 'hover:bg-green-900/20'
                                    }`} onClick={() => { setSelectedExperience(index); setImageError(false); }}
                            >
                                <span className={`whitespace-nowrap ${selectedExperience === index
                                    ? 'text-green-300'
                                    : 'text-gray-400 hover:text-green-300'
                                    }`}>
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
                                        <span className="text-gray-500">Image not available</span>
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
                            <p className="text-gray-400 text-sm">
                                {experiences[selectedExperience].duration}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}