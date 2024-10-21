"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import  SpanColor  from '../ui/span-color.component';
import Nav from './nav-bar.component';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full py-2 sm:py-3 md:py-4 fixed top-0 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
        <Link href="/" className="text-xl sm:text-2xl font-bold tracking-tight hover:opacity-80 transition-opacity">
          <SpanColor>&lt;</SpanColor>Pablo<SpanColor>Dev</SpanColor>
        </Link>
        <button
          className="md:hidden p-2 hover:bg-gray-100 rounded-md transition-colors"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <nav className={`md:block ${isMenuOpen ? 'block' : 'hidden'}`}>
          <Nav />
        </nav>
      </div>
    </header>
  );
};

export default Header;