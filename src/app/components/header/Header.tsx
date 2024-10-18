// components/Header.tsx
import Link from 'next/link';
import SpanColor from '../ui/span-color.component';
import Nav from './nav-bar.component'

export default function Header() {
  return (
    <header className="w-full py-2 sm:py-3 md:py-4 fixed top-0  backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
        <Link href="/" className="text-xl sm:text-2xl font-bold tracking-tight hover:opacity-80 transition-opacity">
          <SpanColor>&lt;</SpanColor>Pablo<SpanColor>Dev</SpanColor>
        </Link>
        <Nav />
      </div>
    </header>
  );
};

