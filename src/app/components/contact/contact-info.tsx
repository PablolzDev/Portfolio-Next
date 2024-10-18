import React from 'react'
import { EmailIcon, PhoneIcon } from './icons'
import ContactInfoItem from './contact-info-item'
import SpanColor from '../ui/span-color.component'


export default function contactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className=''>- Contact Me</h3>
        <h2 className="text-6xl font-bold mb-2">Let&apos;s Build</h2>
        <h2 className="text-4xl font-bold">
          Something <SpanColor>Amazing</SpanColor>
        </h2>
      </div>

      <p className="text-slate-300 max-w-md">
        Ready to craft intuitive interfaces and seamless user experiences? Let&apos;s collaborate and bring your digital vision to life with innovative design and clean code.
      </p>

      <div className="space-y-4">
        <ContactInfoItem
          icon={<EmailIcon />}
          text="pabloinprogramacion@gmail.com"
        />
        <ContactInfoItem
          icon={<PhoneIcon />}
          text="3235184062"
        />
      </div>
    </div>

  )
}
