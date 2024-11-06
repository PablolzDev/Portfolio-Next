import React from 'react'


interface Iprops {
    title: string,
    children: React.ReactNode,
}

export default function GlassCard({ title, children }: Iprops) {
    return (
        <div className="max-w-md  mb-4">
            <div className="flex w-40 items-center flex-col flex-wrap justify-between  rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="flex-1 ">
                    <h2 className="text-emerald-400 text-2xl font-bold mb-2">
                        {title}
                    </h2>
                </div>
                <div className="mb-1 rounded-full p-3">
                    {children}
                </div>
            </div>
        </div>
    );
}
