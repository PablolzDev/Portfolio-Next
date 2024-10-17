
import React from 'react'

interface Iprops {
    children: string,
}

export default function SpanColor({children}: Iprops) {
  return (
    <span className='text-green-300'>{children}</span>
  )
}
