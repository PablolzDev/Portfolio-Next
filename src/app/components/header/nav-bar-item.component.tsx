"use client"
import React from 'react'
import Link from "next/link"

export interface Iprops {
  path: string,
  title: string
}

export default function NavBarItemComponent({ path, title }: Iprops) {


  return (
    <Link href={path} scroll={true} className={`hover:text-gray-300 transition-colors`}>{title}</Link>
  )
}
