
import Image from 'next/image'
import { FC } from 'react'
import { Mail, Linkedin,  Github } from 'lucide-react'
import SpanColor from '../ui/span-color.component'

const ProfileCard: FC = () => {
  return (
    <div className="w-full">
      <div className="bg-emerald-900/30 rounded-3xl p-4 sm:p-6 lg:p-8 backdrop-blur-sm">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Image Container */}
          <div className="w-full lg:w-1/3">
            <div className="aspect-square rounded-2xl overflow-hidden max-w-sm mx-auto lg:max-w-none">
              <Image
                src="/Myself.png"
                alt="Pablo Andrés López Zapata"
                width={365}
                height={445}
                quality={100}
                placeholder="blur"
                className="w-full h-full object-cover"
                priority={true}
                blurDataURL='/Myself.png'
              />
            </div>
          </div>

          {/* Content Container */}
          <div className="w-full lg:w-2/3 space-y-4 sm:space-y-6">
            {/* Header */}
            <div>
              <SpanColor>Who I am</SpanColor>
              <h1 className="text-white text-2xl sm:text-3xl font-semibold mb-1 mt-2">
                Pablo Lopez
              </h1>
              <p className="text-gray-300 mt-2">
                Front End Developer - Drawn to UX/UI design 
              </p>
            </div>

            {/* Description */}
            <p className="text-gray-300 md:inline-flex inline-flex leading-relaxed pr-0 sm:pr-8 lg:pr-16">
              Junior Front-End Developer with a strong foundation in HTML, CSS, and TypeScript, 
              seeking to launch my career in web development. Recent coding bootcamp graduate 
              with hands-on experience in React.js and a passion for creating responsive, 
              user-friendly websites. bringing a keen eye for aesthetics and user experience. 
              Committed team player with excellent communication skills, ready to contribute 
              fresh ideas and grow alongside experienced professionals. Excited to tackle new 
              challenges and expand my skillset.
            </p>

            {/* Social Links */}
            <div className="flex gap-3 sm:gap-4">
              <a 
                href="https://www.linkedin.com/in/pablo-lopez-702501288" 
                className="p-2 sm:p-3 bg-emerald-900/50 rounded-xl hover:bg-emerald-800/50 transition-colors"
                target='_blank'
                rel="noopener noreferrer"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300" />
              </a>
              <a 
                href="#" 
                className="p-2 sm:p-3 bg-emerald-900/50 rounded-xl hover:bg-emerald-800/50 transition-colors"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300" />
              </a>
              <a 
                href="#" 
                className="p-2 sm:p-3 bg-emerald-900/50 rounded-xl hover:bg-emerald-800/50 transition-colors"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard