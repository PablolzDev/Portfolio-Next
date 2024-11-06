import React from 'react'
import Link from "next/link"
import FooterSection from './footer-section'
import SocialLinks from './social-links'
import FooterBottom from './footer-bottom'
import SpanColor from '../ui/span-color.component'

export default function Component() {
  return (
    <footer className="w-full">
      <div className="container px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <Link href="/" className="text-xl sm:text-2xl font-bold tracking-tight hover:opacity-80 transition-opacity">
              Pablo<SpanColor>Dev</SpanColor>/<SpanColor>&gt;</SpanColor>
            </Link>
            <p className="text-muted-foreground max-w-xs">
              A passionate web developer crafting beautiful and functional digital experiences.
            </p>
          </div>
          <div className="lg:col-span-2 grid grid-cols-2 gap-8 sm:grid-cols-3">
            <FooterSection title="Navigation">
              <ul className="space-y-2">
                <li>
                  <Link href="#home" className="text-muted-foreground hover:text-foreground transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </FooterSection>
            <FooterSection title="Connect">
              <ul className="space-y-2">
                <li>
                  <a
                    href="mailto:pabloinprgramacion@gmail.com"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Email
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+573235184062"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Phone
                  </a>
                </li>
              </ul>
            </FooterSection>
            <FooterSection title="Social">
              <SocialLinks />
            </FooterSection>
          </div>
        </div>
        <FooterBottom />
      </div>
    </footer>
  )
}