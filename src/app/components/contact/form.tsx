"use client"
import React, { useState } from 'react';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import Input from '../ui/form/input-form.component';
import { TextArea } from '../ui/form/textA-from.component';
import { Button } from '../ui/form/button-form.component';
import toast, { Toaster } from 'react-hot-toast';

interface FormData {
  [key: string]: string;
}

const EmailJSContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    emailjs_name: '',
    emailjs_email: '',
    emailjs_message: '',
  });
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    const serviceID = 'default_service';
    const templateID = 'template_z46c72m';

    emailjs.send(serviceID, templateID, formData, 'E1WiV5Rn2vEBsTVKW')
      .then((result: EmailJSResponseStatus) => {
        if (result.status === 200) {
          setIsSending(false);
          setFormData({
            emailjs_name: '',
            emailjs_email: '',
            emailjs_message: '',
          });
          toast.success('Email sent!');
        }
      }, (error) => {
        setIsSending(false);
        toast.error(`Error sending email: ${error.text}`);
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="field">
        <Input
          placeholder="Name"
          name="emailjs_name"
          value={formData.emailjs_name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="field">
        <Input
          placeholder="Email"
          name="emailjs_email"
          type="email"
          value={formData.emailjs_email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="field">
        <TextArea
          placeholder="Message"
          name="emailjs_message"
          value={formData.emailjs_message}
          onChange={handleChange}
          required
        />
      </div>
      <Button
        type="submit"
        disabled={isSending}
      >
        {isSending ? 'Sending...' : 'Send Email'}
      </Button>
      <Toaster />
    </form>
  );
};

export default EmailJSContactForm;