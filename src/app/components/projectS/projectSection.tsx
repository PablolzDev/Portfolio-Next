'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Briefcase } from 'lucide-react';

const experiences = [
    {
        company: 'Portfolio',
        role: 'Front Dev',
        duration: 'Nov 2021 - Jun 2023 (2 Year)',
        description: 'At Parcham Organization, I proudly coached aspiring football players, fostering resilience and teamwork while instilling a sense of social responsibility. Witnessing their growth on and off the field was a truly rewarding experience, empowering them to dream big and create positive change.',
        image: '/public/images/portfolio.png'
    },
    {
        company: 'MisTech',
        role: 'Software Developer',
        duration: 'Jan 2020 - Oct 2021 (1 Year 10 Months)',
        description: 'Developed innovative software solutions for various clients, focusing on web applications and mobile development. Collaborated in an agile team environment to deliver high-quality products.',
        image: '/public/portfolio.png'
    },
    {
        company: 'Nutshell',
        role: 'UX Designer',
        duration: 'Mar 2019 - Dec 2019 (10 Months)',
        description: 'Created user-centered designs for digital products, conducting user research and usability testing. Worked closely with development teams to ensure seamless implementation of designs.',
        image: '/public/portfolio.png'
    },
    {
        company: 'Pinterest',
        role: 'Marketing Intern',
        duration: 'Jun 2018 - Feb 2019 (9 Months)',
        description: 'Assisted in the development and execution of marketing campaigns. Gained valuable experience in digital marketing strategies and social media management.',
        image: '/public/portfolio.png'
    },
];

export default function ExperienceSection() {
    const [selectedExperience, setSelectedExperience] = useState(0);
    const [imageError, setImageError] = useState(false);

    const handleImageError = () => {
        setImageError(true);
    };

    return (
        <div className="max-w-7xl ml-16 rounded-lg mt-8">
            <h2 className="text-5xl font-bold mb-11">Projects</h2>
            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/4 mb-4 md:mb-0">
                    {experiences.map((exp, index) => (
                        <div
                            key={exp.company}
                            className={`flex items-center space-x-2 cursor-pointer p-2 rounded ${selectedExperience === index ? 'bg-green-900' : ''
                                }`}
                            onClick={() => {
                                setSelectedExperience(index);
                                setImageError(false);
                            }}
                        >
                            
                            <span className={`${selectedExperience === index ? 'text-green-300' : 'text-gray-400'}`}>
                                {exp.company}
                            </span>
                        </div>
                    ))}
                </div>
                <div className="w-full flex md:w-3/4 md:pl-6">
                    <div className="mb-4 relative aspect-w-20 aspect-h-9">
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
                            <div className="w-48 h-full bg-gray-200 flex items-center justify-center rounded-lg">
                                <span className="text-gray-500">Image not available</span>
                            </div>
                        )}
                    </div>
                    <div className='ml-16'>
                        <h3 className="font-semibold text-lg text-green-300">{experiences[selectedExperience].role}</h3>
                        <p className="text-purple-400 mb-2">{experiences[selectedExperience].company}</p>
                        <p className="text-sm text-gray-300 mb-2">{experiences[selectedExperience].description}</p>
                        <p className="text-gray-400 text-sm">{experiences[selectedExperience].duration}</p>
                    </div>

                </div>
            </div>
        </div>
    );
}