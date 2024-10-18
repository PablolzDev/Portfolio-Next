import React from 'react'
import SpanColor from '../ui/span-color.component'
import Logo from '../ui/logo.component'

export default function Hero() {
    return (
        <div className="max-w-8xl max-h-fit mx-auto  px-4 sm:px-6 lg:px-8">
            <section className='flex flex-col lg:flex-row items-center justify-end py-20 lg:py-32 gap-40 '>
                <div className="container ml-60 flex flex-col text-2xl"> {/* Contenedor para el texto */}
                    <h1 className='md:text-5xl lg:text-7xl font-bold'>
                        Crafting digital experiences where{' '}
                        <SpanColor>elegance</SpanColor> meets{' '}
                        <SpanColor>functionality</SpanColor>.
                    </h1>
                    <p className='mt-6 md:text-2xl lg:text-3xl'>
                        Front End Developer 
                    </p>
                    <p className='mt-6 md:text-2xl lg:text-3xl' >
                        UX-UI Designer
                    </p>
                </div>

                <div className="mt-10 lg:mt-0 flex-shrink-0">
                    <Logo />
                </div>
            </section>
        </div>
    )
}