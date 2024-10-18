import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{
    label?:string
}

export default function Input({ label, ...props}: InputProps) {
  return (
    <input {...props} className='bg-emerald-100 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-400	 text-white w-full' />
  )
}
