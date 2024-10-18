'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const experiences = [
    {
        company: 'Portfolio',
        role: 'Front Dev',
        duration: 'Nov 2021 - Jun 2023 (2 Year)',
        description: 'At Parcham Organization, I proudly coached aspiring football players, fostering resilience and teamwork while instilling a sense of social responsibility. Witnessing their growth on and off the field was a truly rewarding experience, empowering them to dream big and create positive change.',
        image: '/portfolio.png'
    },
    {
        company: 'MisTech',
        role: 'Software Developer',
        duration: 'Jan 2020 - Oct 2021 (1 Year 10 Months)',
        description: 'Developed innovative software solutions for various clients, focusing on web applications and mobile development. Collaborated in an agile team environment to deliver high-quality products.',
        image: '/portfolio.png'
    },
    {
        company: 'Nutshell',
        role: 'UX Designer',
        duration: 'Mar 2019 - Dec 2019 (10 Months)',
        description: 'Created user-centered designs for digital products, conducting user research and usability testing. Worked closely with development teams to ensure seamless implementation of designs.',
        image: '/portfolio.png'
    },
    {
        company: 'Pinterest',
        role: 'Marketing Intern',
        duration: 'Jun 2018 - Feb 2019 (9 Months)',
        description: 'Assisted in the development and execution of marketing campaigns. Gained valuable experience in digital marketing strategies and social media management.',
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 lg:mb-11">Projects</h2>
            
            {/* Main content container */}
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                {/* Sidebar navigation */}
                <div className="w-full lg:w-1/4">
                    <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0">
                        {experiences.map((exp, index) => (
                            <div
                                key={exp.company}
                                className={`flex-shrink-0 lg:flex-shrink cursor-pointer p-3 rounded-lg transition-all duration-200 ${
                                    selectedExperience === index 
                                        ? 'bg-green-900 shadow-lg' 
                                        : 'hover:bg-green-900/20'
                                }`}
                                onClick={() => {
                                    setSelectedExperience(index);
                                    setImageError(false);
                                }}
                            >
                                <span className={`whitespace-nowrap ${
                                    selectedExperience === index 
                                        ? 'text-green-300' 
                                        : 'text-gray-400 hover:text-green-300'
                                }`}>
                                    {exp.company}
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
                                        alt={`${experiences[selectedExperience].company} image`}
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
                                {experiences[selectedExperience].role}
                            </h3>
                            <p className="text-purple-400">
                                {experiences[selectedExperience].company}
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