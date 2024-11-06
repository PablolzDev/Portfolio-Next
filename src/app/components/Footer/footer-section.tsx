import React from 'react'

type FooterSectionProps = {
    title: string
    children: React.ReactNode
}


export default function FooterSection({ title, children }: FooterSectionProps) {
    return (
        <div>
            <h3 className="text-lg font-semibold mb-4 text-green-300">{title}</h3>
            {children}
        </div>
    )
}
