import React from 'react'
import SpanColor from '../ui/span-color.component'
import Logo from '../ui/logo.component'

export default function Hero() {
    return (
        <div className="w-full min-h-screen  px-4 sm:px-6 lg:px-8 pt-20" id='home'>
          <section className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12 py-12 lg:py-20">
            <div className="w-full lg:w-3/5 space-y-6 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                Crafting digital experiences where{' '}
                <SpanColor>elegance</SpanColor> meets{' '}
                <SpanColor>functionality</SpanColor>.
              </h1>
              <div className="space-y-2">
                <p className="text-xl sm:text-2xl lg:text-3xl">
                  Front End Developer
                </p>
                <p className="text-xl sm:text-2xl lg:text-3xl">
                  UX-UI Designer
                </p>
              </div>
            </div>
            
            {/* Logo */}
            <div className="w-full lg:w-2/5 flex justify-center lg:justify-end">
              <div className="w-3/4 sm:w-2/3 lg:w-full max-w-md">
                <Logo />
              </div>
            </div>
          </section>
        </div>
      );
}