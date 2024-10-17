import React from 'react'
import SpanColor from '../ui/span-color.component'
import Logo from '../ui/logo.component'

export default function Hero() {
    return (
        <>
            <section className='flex  mt-44'>
                <div className='' >
                    <h1 className='mx-64 w-full h-auto  mt-20 text-7xl'>Crafting digital experiences where <SpanColor>elegance</SpanColor> meets <SpanColor>functionality</SpanColor>.</h1>
                    <p className='w-1/3 ml-64 mt-10 text-3xl'>Front End Developer UX-UI Designer</p>
                </div>
                    <Logo />



            </section>

        </>

    )
}
