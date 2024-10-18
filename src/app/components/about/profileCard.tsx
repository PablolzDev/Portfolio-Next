
import Image from 'next/image'
import { FC } from 'react'
import { Mail, Linkedin,  Github } from 'lucide-react'
import SpanColor from '../ui/span-color.component'

const ProfileCard: FC = () => {
  return (
    <div className="max-w-8xl mr-56 mt-11 ml-56 mx-auto p-8">
      <div className="bg-emerald-900/30 rounded-3xl p-8 backdrop-blur-sm">
        <div className="flex flex-col md:flex-row  gap-8">
         
          <div className="w-full md:w-1/3 h-full">
            <div className="aspect-square rounded-2xl overflow-hidden object-fill">
              <Image
                  src="/Myself.png"
                  alt="Pablo Andrés López Zapata"
                  width={365}
                  height={445}
                  quality={100} // Máxima calidad
                  placeholder="blur" // Genera un efecto blur al cargar
                  className="w-full h-full object-cover"
                  priority={true}
                  blurDataURL='/Myself.png'
              />
            </div>
          </div>
          <div className="w-full md:w-2/3 space-y-6">
            <div>
              <SpanColor>Who I am</SpanColor>
              <h1 className="text-white text-3xl font-semibold mb-1 mt-2">
                Pablo Lopez
              </h1>
              <p className="text-gray-300 mt-2">
                Front End Developr - Drawn to UX/UI design 
              </p>
            </div>
            <p className="text-gray-300 leading-relaxed pr-60 ">
             Junior Front-End Developer with a strong foundation in HTML, CSS, and TypeScript, seeking to launch my career in web development. Recent coding bootcamp graduate with hands-on experience in React.js and a passion for creating responsive, user-friendly websites. bringing a keen eye for aesthetics and user experience. Committed team player with excellent communication skills, ready to contribute fresh ideas and grow alongside experienced professionals. Excited to tackle new challenges and expand my skillset.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/in/pablo-lopez-702501288" 
                className="p-3 bg-emerald-900/50 rounded-xl hover:bg-emerald-800/50 transition-colors"
                target='_blank'
              >
                <Linkedin className="w-5 h-5 text-gray-300" />
              </a>
              <a 
                href="#" 
                className="p-3 bg-emerald-900/50 rounded-xl hover:bg-emerald-800/50 transition-colors"
              >
                <Mail className="w-5 h-5 text-gray-300" />
              </a>
              <a 
                href="#" 
                className="p-3 bg-emerald-900/50 rounded-xl hover:bg-emerald-800/50 transition-colors"
              >
                <Github className="w-5 h-5 text-gray-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard