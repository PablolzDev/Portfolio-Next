import React from 'react'
import { Github, Linkedin } from "lucide-react"

export default function SocialLinks() {
  return (
    <div className="flex space-x-4">
      <a href="https://www.linkedin.com/in/pablo-lopez-702501288" target='_blank' className="text-muted-foreground hover:text-foreground transition-colors">
        <Github className="h-6 w-6" />
        <span className="sr-only">GitHub</span>
      </a>
      <a href="https://github.com/PablolzDev" target='_blank'  className="text-muted-foreground hover:text-foreground transition-colors">
        <Linkedin className="h-6 w-6" />
        <span className="sr-only">LinkedIn</span>
      </a>
    </div>
  )
}
