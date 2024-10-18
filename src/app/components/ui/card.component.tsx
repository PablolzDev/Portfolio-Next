import { Experience } from '../../types/types';

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  const { company, role, period, description } = experience;
  
  return (
    <div className="group relative flex gap-6 pb-10">
      <div className="relative flex h-6 w-6">
        <div className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-75 group-hover:bg-purple-600"></div>
        <div className="relative inline-flex h-6 w-6 rounded-full bg-purple-500 group-hover:bg-purple-700"></div>
      </div>
      
      <div className="flex flex-col">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-200">{role}</h3>
          <span className="text-sm text-gray-400">{period}</span>
        </div>
        <span className="text-md font-medium text-purple-400">{company}</span>
        <p className="mt-2 text-gray-400">{description}</p>
      </div>
    </div>
  );
}