import React from 'react'
import ContactInfo from './contact-info'
import Form from './form' 

export default function ContactSection() {
  return (
    <section className="w-full mt-36  text-white py-16 px-4 md:px-8">
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12">
        <ContactInfo />
        <Form />
      </div>
    </div>
  </section>
  )
}
