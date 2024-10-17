"use client"
import React from 'react'
import Link from "next/link"
import { usePathname } from "next/navigation"

export interface Iprops{
    path: string,
    title: string
}

export default function NavBarItemComponent({ path, title}: Iprops) {
    const currentpath = usePathname()

  return (
    <Link href={path} className={`hover:text-gray-300 transition-colors ${currentpath === path && "text-lime-200"}`}>{title}</Link>
  )
}
