import React from 'react';
import GlassCard from '../ui/glass-card';
import { FaCss3Alt, FaHtml5,FaReact, FaBootstrap } from "react-icons/fa6";
import { SiTailwindcss, SiTypescript, SiVisualstudiocode, SiGit, SiGithub, SiFigma } from "react-icons/si";

import SpanColor from '../ui/span-color.component';


interface Technology {
    icon: React.ElementType;
    title: string;
    color: string;
}

const Stack: React.FC = () => {
    const frontEndTechnologies: Technology[] = [
        { icon: FaHtml5, title: 'HTML5', color: 'text-orange-500' },
        { icon: FaCss3Alt, title: 'CSS3', color: 'text-blue-400' },
        { icon: SiTypescript, title: 'TypeScript', color: 'text-blue-600' },
        { icon: FaReact, title: 'React', color: 'text-blue-500' },
        { icon: SiTailwindcss, title: 'Tailwind', color: 'text-cyan-400' },
        { icon: FaBootstrap, title: 'Bootstrap', color: 'text-purple-600' }
    ];

    const toolsTechnologies: Technology[] = [
        { icon: SiVisualstudiocode, title: 'VS Code', color: 'text-blue-500' },
        { icon: SiFigma, title: 'Figma', color: 'text-purple-500' },
        { icon: SiGit, title: 'Git', color: 'text-orange-600' },
        { icon: SiGithub, title: 'GitHub', color: 'text-gray-900 dark:text-white' }
    ];

    return (
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {/* Frontend section */}
                <div className="flex flex-col items-center">
                    <h2 className="mb-8 text-3xl md:text-4xl lg:text-5xl font-bold text-center">
                        Front <SpanColor>End</SpanColor>.
                    </h2>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 w-full max-w-xl place-items-center">
                        {frontEndTechnologies.map((tech, index) => (
                            <GlassCard key={index} title={tech.title}>
                                <tech.icon size={48} className={tech.color} />
                            </GlassCard>
                        ))}
                    </div>
                </div>

                {/* Tools section */}
                <div className="flex flex-col items-center">
                    <h2 className="mb-8 text-3xl md:text-4xl lg:text-5xl font-bold text-center">
                        Tools <SpanColor>&</SpanColor> More.
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-xl mx-auto place-items-center">
                        {toolsTechnologies.map((tech, index) => (
                            <GlassCard key={index} title={tech.title}>
                                <tech.icon size={48} className={tech.color} />
                            </GlassCard>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stack;