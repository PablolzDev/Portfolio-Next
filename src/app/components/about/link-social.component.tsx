"use client"
import React from 'react'
import Link from "next/link"

export interface Iprops{
    path: string,

    icon?: React.ReactNode
}

export default function LinkSocial({ path, icon}: Iprops) {
  
  return (
    <Link href={path}   className="p-3 bg-emerald-900/50 rounded-xl hover:bg-emerald-800/50 transition-colors">{icon}</Link>
  )
}
