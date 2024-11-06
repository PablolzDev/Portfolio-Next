import React from 'react'
import GlassCard from '../ui/glass-card'
import { FaBootstrap, FaCss3Alt, FaFigma, FaHtml5, FaReact, FaSass } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import SpanColor from '../ui/span-color.component';

export default function Stack() {
    return (
        <div className='flex'>
            <div className='w-full flex flex-col items-center justify-center'>
                <div>
                    <h2 className='mb-11 text-center ml-24 text-6xl sm:text-4xl md:text-5xl lg:text-3xl xl:text-4xl font-bold leading-tight '>Front <SpanColor>End</SpanColor>.</h2>
                </div>
                <GlassCard title='React'>
                    <FaReact size={64} className="text-blue-500" />
                </GlassCard>
            </div>
            <div className='w-full flex flex-col items-center justify-center'>
                <div>
                    <h2 className='mb-11 text-center ml-24 text-6xl sm:text-4xl md:text-5xl lg:text-3xl xl:text-4xl font-bold leading-tight '>Front <SpanColor>End</SpanColor>.</h2>
                </div>
                <GlassCard title='React'>
                    <FaReact size={64} className="text-blue-500" />
                </GlassCard>
            </div>

        </div>


    )
}
