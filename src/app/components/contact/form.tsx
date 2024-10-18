import React from 'react'
import { useState } from 'react';
import type { ContactFormData } from '../../types/types';
import  Input  from '../ui/form/input-form.component';
import { TextArea } from '../ui/form/textA-from.component';
import { Button } from '../ui/form/button-form.component';

export default function Form() {
  return (
    <div className="space-y-6">
    <div className="grid grid-cols-2 gap-6">
      <Input placeholder='First Name' />
      <Input placeholder='LastName' />
    </div>

    <div className="grid grid-cols-2 gap-6">
      <Input placeholder='Email' />
      <Input placeholder='PhoneNumber' />
    </div>

    <Input placeholder='subject' />
    <TextArea placeholder='Message' />
    <Button />
  </div>
  )
}
