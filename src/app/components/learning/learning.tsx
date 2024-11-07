import React from 'react'
import SpanColor from '../ui/span-color.component'
import { SiNextdotjs } from 'react-icons/si';
import GlassCard from '../ui/glass-card';
import { FaLayerGroup } from "react-icons/fa";

interface Technology {
    icon: React.ElementType;
    title: string;
    color: string;
}


export default function Learning() {

    const frontEndTechnologies: Technology[] = [
        { icon: SiNextdotjs, title: 'Next.js', color: 'text-gray-900 dark:text-white' },
        { icon: FaLayerGroup, title: 'Onion Arch', color: 'text-gray-900 dark:text-white' }
    ];

    return (
        <div className="container mx-auto px-4">
            <div className="flex flex-col items-center ">
                <h2 className="mb-8 text-3xl md:text-4xl lg:text-5xl font-bold text-center">
                    <SpanColor>Learning</SpanColor>.
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full max-w-xl  place-items-center">
                    {frontEndTechnologies.map((tech, index) => (
                        <GlassCard key={index} title={tech.title}>
                            <tech.icon size={48} className={tech.color} />
                        </GlassCard>
                    ))}
                </div>
            </div>
        </div>
    )
}
